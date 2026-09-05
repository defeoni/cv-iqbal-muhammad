#!/usr/bin/env python3
"""Satukan proyek ini kembali jadi SATU berkas HTML siap unggah.

    python build.py

Hasilnya: dist/iqbal-landing.html — semua CSS, JS, dan gambar ditanam di
dalamnya, jadi bisa dikirim lewat WhatsApp, ditaruh di hosting apa pun, atau
dibuka tanpa internet. Hanya butuh Python 3, tanpa pustaka tambahan.
"""
import base64
import io
import mimetypes
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "dist")
OUT = os.path.join(OUT_DIR, "iqbal-landing.html")


def read(*parts):
    return io.open(os.path.join(ROOT, *parts), encoding="utf-8").read()


def data_uri(rel_path):
    full = os.path.join(ROOT, rel_path.replace("/", os.sep))
    if not os.path.exists(full):
        sys.exit("BERHENTI: gambar tidak ditemukan -> " + rel_path)
    mime = mimetypes.guess_type(full)[0] or "application/octet-stream"
    with open(full, "rb") as f:
        return "data:%s;base64,%s" % (mime, base64.b64encode(f.read()).decode())


def check_placeholders():
    """Tolak build kalau masih ada gambar CONTOH yang belum diganti.

    Halaman ini dipakai melamar kerja. Menerbitkan kotak abu-abu bertuliskan
    'CONTOH - GANTI' jauh lebih merugikan daripada gagal build.
    """
    rec = os.path.join(ROOT, "img", "_GANTI-INI.json")
    if not os.path.exists(rec):
        return
    import json
    sisa = [n for n, size in json.load(open(rec)).items()
            if os.path.exists(os.path.join(ROOT, "img", n))
            and os.path.getsize(os.path.join(ROOT, "img", n)) == size]
    if sisa:
        print("BERHENTI: %d gambar masih contoh, belum diganti foto asli:" % len(sisa))
        for n in sorted(sisa):
            print("   img/" + n)
        print("\nTimpa berkas itu dengan foto asli, lalu jalankan lagi.")
        print("Kalau memang sengaja mau diterbitkan apa adanya, hapus img/_GANTI-INI.json.")
        sys.exit(1)
    os.remove(rec)
    print("Semua gambar contoh sudah diganti — penanda dihapus.")


def main():
    check_placeholders()
    html = read("index.html")

    # 1. CSS -> <style>
    css = read("css", "style.css")
    html = re.sub(r'<link rel="stylesheet" href="css/style\.css">',
                  "<style>\n" + css.rstrip() + "\n</style>", html, count=1)

    # 2. semua <script src="js/..."> -> satu blok <script>, urutannya dijaga
    srcs = re.findall(r'<script src="js/([^"]+)"></script>', html)
    if not srcs:
        sys.exit("BERHENTI: tidak ada <script src=\"js/...\"> di index.html")
    bundle = "\n\n".join(read("js", s).rstrip() for s in srcs)
    html = re.sub(r'(<script src="js/[^"]+"></script>\s*)+',
                  "<script>\n" + bundle + "\n</script>\n", html, count=1)

    # 3. img/xxx.jpg -> data URI
    used = set()

    def swap(m):
        rel = m.group(0)
        used.add(rel)
        return data_uri(rel)

    html = re.sub(r'img/[A-Za-z0-9._-]+\.(?:jpg|jpeg|png|webp|svg)', swap, html)

    os.makedirs(OUT_DIR, exist_ok=True)
    io.open(OUT, "w", encoding="utf-8", newline="\n").write(html)

    kb = os.path.getsize(OUT) / 1024
    print("Berkas JS digabung : %d (%s)" % (len(srcs), ", ".join(srcs)))
    print("Gambar ditanam     : %d" % len(used))
    print("Hasil              : %s" % os.path.relpath(OUT, ROOT))
    print("Ukuran             : %.1f KB" % kb)
    if kb > 16 * 1024:
        print("PERINGATAN: lewat 16 MB, terlalu besar untuk diterbitkan sebagai Artifact.")


if __name__ == "__main__":
    main()
