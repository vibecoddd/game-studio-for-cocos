from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "screenshots" / "cocos-crystal-dash.png"
WIDTH = 1280
HEIGHT = 720


def font(size, bold=False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def draw_grid(draw):
    for x in range(50, WIDTH, 50):
        draw.line((x, 0, x, HEIGHT), fill=(137, 211, 184, 34), width=1)
    for y in range(50, HEIGHT, 50):
        draw.line((0, y, WIDTH, y), fill=(137, 211, 184, 34), width=1)
    draw.rectangle((28, 28, WIDTH - 28, HEIGHT - 28), outline=(220, 255, 248, 90), width=4)
    draw.rounded_rectangle((415, 218, 865, 498), radius=34, fill=(255, 255, 255, 12))


def draw_shard(draw, x, y):
    points = [(x, y - 19), (x + 19, y), (x, y + 19), (x - 19, y)]
    glow = [(x, y - 30), (x + 30, y), (x, y + 30), (x - 30, y)]
    draw.polygon(glow, fill=(248, 201, 65, 42))
    draw.polygon(points, fill=(248, 201, 65), outline=(255, 245, 183))


def draw_drone(draw, x, y, phase):
    r = 25 + math.sin(phase) * 2
    draw.ellipse((x - r - 8, y - r - 8, x + r + 8, y + r + 8), fill=(255, 91, 103, 42))
    draw.ellipse((x - r, y - r, x + r, y + r), fill=(229, 72, 87), outline=(255, 213, 217), width=2)
    draw.rounded_rectangle((x - 18, y - 5, x + 18, y + 5), radius=3, fill=(56, 21, 28))
    draw.rectangle((x - 10, y - 2, x + 10, y + 2), fill=(255, 223, 226))


def draw_player(draw, x, y):
    points = [(x + 34, y), (x - 20, y - 24), (x - 10, y), (x - 20, y + 24)]
    glow = [(x + 44, y), (x - 30, y - 34), (x - 18, y), (x - 30, y + 34)]
    draw.polygon(glow, fill=(75, 213, 197, 54))
    draw.polygon(points, fill=(75, 213, 197), outline=(215, 255, 249))


def hud(draw):
    label_font = font(15, bold=True)
    value_font = font(27, bold=True)
    items = [
        (24, 22, 148, "SHARDS", "3/8"),
        (182, 22, 390, "OBJECTIVE", "Collect all shards"),
        (918, 22, 140, "CORE", "♥♥♥"),
        (1074, 22, 120, "TIME", "19s"),
    ]
    for x, y, w, label, value in items:
        draw.rounded_rectangle((x, y, x + w, y + 70), radius=10, fill=(7, 20, 29, 210), outline=(157, 231, 219, 82), width=1)
        draw.text((x + 16, y + 12), label, fill=(155, 200, 193), font=label_font)
        draw.text((x + 16, y + 34), value, fill=(244, 255, 251), font=value_font)
    draw.rounded_rectangle((888, HEIGHT - 72, WIDTH - 24, HEIGHT - 22), radius=10, fill=(7, 20, 29, 210), outline=(157, 231, 219, 82), width=1)
    draw.text((906, HEIGHT - 58), "Move: WASD / Arrows", fill=(155, 200, 193), font=font(18, bold=True))
    draw.rounded_rectangle((1136, HEIGHT - 64, WIDTH - 40, HEIGHT - 30), radius=6, fill=(215, 255, 247))
    draw.text((1155, HEIGHT - 58), "Restart", fill=(6, 32, 36), font=font(16, bold=True))


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    image = Image.new("RGB", (WIDTH, HEIGHT), (7, 18, 25))
    draw = ImageDraw.Draw(image, "RGBA")
    for radius, color in [(520, (18, 56, 68, 140)), (460, (45, 39, 62, 120))]:
        draw.ellipse((-180, -260, radius, radius), fill=color)
    draw_grid(draw)
    for point in [(180, 188), (320, 478), (590, 145), (764, 530), (1012, 276), (1116, 506)]:
        draw_shard(draw, *point)
    for index, point in enumerate([(384, 272), (650, 356), (882, 210), (1045, 438)]):
        draw_drone(draw, point[0], point[1], index * 1.7)
    draw_player(draw, 520, 385)
    hud(draw)
    image.save(OUT)
    print(OUT)


if __name__ == "__main__":
    main()
