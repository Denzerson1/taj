"""Build responsive WebP variants (public/images) + src/content/imageManifest.json from the originals in photos/.

Usage: pip install pillow && python scripts/optimize-images.py
To add a photo: drop the original into photos/, add an entry to PHOTOS below, re-run.
"""
import os, json
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "photos")
OUT = os.path.join(ROOT, "public", "images")
MANIFEST = os.path.join(ROOT, "src", "content", "imageManifest.json")
WIDTHS = [640, 1200, 1920]

PHOTOS = {
    # hero slideshow
    "hero/table": "1.jpg",
    "hero/favourite": "lieblingsbild2.jpg",
    "hero/spread": "Full table_The Taj_02 (1).jpg",
    "hero/drinks": "drink3.jpg",
    "hero/ambience": "ambiente/ambiente.jpg",
    "hero/table-2": "fulltable3.jpg",
    "hero/cocktails": "Full Table_The Taj_Manhattan (1).jpg",
    "hero/dining-room": "Location_The Taj_03 (2).jpg",
    # home
    "home/intro": "Richtext.jpg",
    "home/cuisine": "butterchicken.jpg",
    "home/cocktails": "manhattan.jpg",
    "home/takeout": "takeout.jpg",
    "home/about": "about.jpg",
    # pages
    "pages/about-interior": "2.jpg",
    "pages/about-lamp": "Location_The Taj_04 (2).jpg",
    "pages/food-banner": "foodImage.jpg",
    "pages/food": "food.jpg",
    "pages/drinks-banner": "lieblingsbild1.jfif",
    "pages/drinks": "cocktail.jpg",
    "pages/info-banner": "ambiente/ambiente.jpg",
    "pages/bar": "Location_The Taj_04 2.jpg",
    "pages/dining-room": "Location_The Taj_01 (2).jpg",
    # drinks
    "drinks/negroni": "drinks-images/negroni.jpg",
    "drinks/espresso-martini": "drinks-images/espresso-martini.jpg",
    "drinks/highway-44": "drinks-images/highway44.jpg",
    "drinks/spicy-margarita": "drinks-images/spicemagaritha.jpg",
    "drinks/paan": "drinks-images/paan.jpg",
    # blog
    "blog/curry-spread": "One dish_The Taj_Chicken Korma & Butter Chicken.jpg",
    "blog/spices": "Ingredients_The Taj_01 (1).jpg",
    "blog/butter-chicken": "One dish_The Taj_Butter Chicken copy (1).jpg",
    "blog/dumplings-1": "blogs/dumplings1.jpg",
    "blog/dumplings-2": "blogs/dumplings2.jpg",
    "blog/stirfry-1": "blogs/stirfry.jpg",
    "blog/stirfry-2": "blogs/stirfry2.jpg",
    "blog/salad-1": "blogs/greengoddess1.jpg",
    "blog/salad-2": "blogs/greengoddess2.jpg",
    "blog/lentils": "blogs/linsen1.jpg",
    "blog/chickpeas": "kichererbsen.jpg",
    "blog/full-table": "fulltable.jpg",
    "blog/eggplant": "blogs/eggplant.jpg",
    "blog/biryani": "One dish_The Taj_Chicken Biryani_02 (1).jpg",
    "blog/biryani-top": "One dish_The Taj_Chicken Biryani_01 (1).jpg",
    "blog/biryani-serving": "Action detail_The Taj_03 (1).jpg",
    "blog/paneer-tikka": "One dish_The Taj_Paneer Tikka (1).jpg",
    "blog/paneer-shashlik": "One dish_The Taj_Paneer Shashlik_02 (1).jpg",
    "blog/paneer-plate": "One dish_The Taj_Paneer Shashlik_01 (1).jpg",
    "blog/thali": "One dish_The Taj_Thalli Platte vegetarisch (1).jpg",
    "blog/feast": "Full table_The Taj_01 (1).jpg",
    "blog/chana-masala": "One dish_The Taj_Chana Masala (1).jpg",
    "blog/chana-ingredients": "Ingredients_The Taj_Chana Masala (1).jpg",
    "blog/highway-44": "One dish_The Taj_Highway 44 02 (1).jpg",
    "blog/highway-44-bar": "One dish_The Taj_Highway 44 (1).jpg",
    "blog/chai-table": "Full Table_The Taj_Highway 44 (1).jpg",
    "blog/pairing": "Full TAble_The Taj_Spice Tequila Margarita (1).jpg",
    "blog/negroni-table": "Full Table_The Taj_Mughal Negroni (1).jpg",
    "blog/cocktail-ingredients": "Ingredients_The Taj_Mughal Negroni (1).jpg",
}

GRAPHICS = {  # keep alpha, single size
    "brand/logo": ("logo.png", 400),
    "delivery/wolt": ("takeout/1.png", 128),
    "delivery/lieferando": ("takeout/2.png", 128),
    "delivery/foodora": ("takeout/3.png", 128),
}


def save(im, dest, quality):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    im.save(dest, "WEBP", quality=quality, method=6)
    return os.path.getsize(dest)


def main():
    manifest, total_src, total_out = {}, 0, 0
    for name, src in PHOTOS.items():
        path = os.path.join(SRC, src)
        im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
        widths = [w for w in WIDTHS if w <= im.width] or [im.width]
        out = 0
        for w in widths:
            resized = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS) if w < im.width else im
            out += save(resized, os.path.join(OUT, f"{name}-{w}.webp"), 72 if w >= 1920 else 80)
        manifest[name] = {"w": im.width, "h": im.height, "widths": widths}
        total_src += os.path.getsize(path); total_out += out
        print(f"{name:28s} {im.width}x{im.height} -> {widths} {out//1024}KB")
    for name, (src, w) in GRAPHICS.items():
        im = Image.open(os.path.join(SRC, src)).convert("RGBA")
        if im.width > w:
            im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        save(im, os.path.join(OUT, f"{name}.webp"), 92)
        manifest[name] = {"w": im.width, "h": im.height}
    # social share image, 1200x630 crop
    og = ImageOps.fit(ImageOps.exif_transpose(Image.open(os.path.join(SRC, PHOTOS["hero/spread"]))).convert("RGB"), (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
    og.save(os.path.join(ROOT, "public", "og-image.jpg"), "JPEG", quality=85, optimize=True, progressive=True)
    os.makedirs(os.path.dirname(MANIFEST), exist_ok=True)
    with open(MANIFEST, "w") as f:
        json.dump(manifest, f, indent=1, sort_keys=True)
    print(f"sources {total_src/1e6:.1f}MB -> all variants {total_out/1e6:.1f}MB")


if __name__ == "__main__":
    main()
