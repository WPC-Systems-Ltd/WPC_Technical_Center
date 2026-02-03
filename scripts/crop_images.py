from PIL import Image, ImageDraw
import os

IMAGE_PATHS = [
    r"static\img\daq\usb-daq\layout-ad-series.png",
    r"static\img\daq\usb-daq\layout-d-series.png",
    r"static\img\daq\usb-daq\layout-td-series.png"
]

def mask_image(rel_path):
    full_path = os.path.abspath(rel_path)

    if not os.path.exists(full_path):
        print(f"Error: File not found at {full_path}")
        return

    try:
        print(f"Processing: {rel_path}")
        img = Image.open(full_path).convert("RGBA")
        width, height = img.size
        print(f"  Size: {width}x{height}")

        draw = ImageDraw.Draw(img)
        fill_color = (255, 255, 255, 255)

        # Define "Keep Zone" based on User's Red Circle
        # Top: 50 (Keep top dimensions/text, remove border)
        # Bottom: 1800 (Keep central drawing + dimensions, cut isometric views & footer)
        # Left: 50 (Keep text box, remove border)
        # Right: Width-50 (Keep USB head, remove border)

        keep_x1 = 50
        keep_y1 = 50
        keep_x2 = width - 50
        keep_y2 = 1800

        # Whiten everything OUTSIDE the Keep Zone

        # 1. Top Block (0 to keep_y1)
        draw.rectangle([(0, 0), (width, keep_y1)], fill=fill_color)

        # 2. Bottom Block (keep_y2 to Height) -- This removes footer + isometrics
        draw.rectangle([(0, keep_y2), (width, height)], fill=fill_color)

        # 3. Left Block (0 to keep_x1) -- covers full height to be safe
        draw.rectangle([(0, 0), (keep_x1, height)], fill=fill_color)

        # 4. Right Block (keep_x2 to Width)
        draw.rectangle([(keep_x2, 0), (width, height)], fill=fill_color)

        print(f"  Applied Keep Zone Mask: Y[{keep_y1}:{keep_y2}], X[{keep_x1}:{keep_x2}]. Everything else is white.")

        img.save(full_path)
        print("  Saved successfully.")

    except Exception as e:
        print(f"  Exception occurred: {e}")

if __name__ == "__main__":
    for path in IMAGE_PATHS:
        mask_image(path)
