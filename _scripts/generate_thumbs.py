"""
Generiert Thumbs für alle kombis-Bilder ohne vorhandenen Thumb.
Zielgröße: max 600px (Breite oder Höhe), Qualität 82 WebP.
Muster-Bilder: max 400px, Qualität 80.
"""
from PIL import Image
import os, glob

MAX_KOMBIS = 600   # px longest side
MAX_MUSTER = 400
QUALITY = 82

base = os.path.dirname(os.path.abspath(__file__))

def make_thumb(src_path, thumb_path, max_px, quality):
    os.makedirs(os.path.dirname(thumb_path), exist_ok=True)
    try:
        with Image.open(src_path) as img:
            img.thumbnail((max_px, max_px), Image.LANCZOS)
            img.save(thumb_path, "WEBP", quality=quality, method=6)
        src_kb = os.path.getsize(src_path) // 1024
        thumb_kb = os.path.getsize(thumb_path) // 1024
        print(f"  {os.path.basename(src_path)}: {src_kb}KB → {thumb_kb}KB")
    except Exception as e:
        print(f"  ERROR {src_path}: {e}")

# ── Kombis: alle Bilder (main + detail) ohne Thumb ──────────────
kombis_dir = os.path.join(base, "assets", "kombis")
thumb_dir  = os.path.join(kombis_dir, "thumb")

all_kombis = glob.glob(os.path.join(kombis_dir, "*.webp"))
missing = []
for fp in sorted(all_kombis):
    fname = os.path.basename(fp)
    thumb_path = os.path.join(thumb_dir, fname)
    if not os.path.exists(thumb_path):
        missing.append((fp, thumb_path))

print(f"\nKombis: {len(all_kombis)} total, {len(missing)} ohne Thumb\n")
for src, thumb in missing:
    make_thumb(src, thumb, MAX_KOMBIS, QUALITY)

# ── Muster: alle ohne Thumb ──────────────────────────────────────
muster_dir   = os.path.join(base, "assets", "muster")
muster_thumb = os.path.join(muster_dir, "thumb")

all_muster = glob.glob(os.path.join(muster_dir, "*.webp"))
missing_m = []
for fp in sorted(all_muster):
    fname = os.path.basename(fp)
    thumb_path = os.path.join(muster_thumb, fname)
    if not os.path.exists(thumb_path):
        missing_m.append((fp, thumb_path))

print(f"\nMuster: {len(all_muster)} total, {len(missing_m)} ohne Thumb\n")
for src, thumb in missing_m:
    make_thumb(src, thumb, MAX_MUSTER, QUALITY)

print("\nFertig.")
