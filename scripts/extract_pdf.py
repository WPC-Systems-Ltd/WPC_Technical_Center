
import os
from pypdf import PdfReader

# Paths
pdf_path = r"d:\Synology\github\WPC_Technical_Center\Notion\WPC_STEM_User_Guide.pdf"
output_text_path = r"d:\Synology\github\WPC_Technical_Center\docs\daq\stem\raw_content.md"
image_output_dir = r"d:\Synology\github\WPC_Technical_Center\static\img\daq\stem"

# Ensure directories exist
os.makedirs(os.path.dirname(output_text_path), exist_ok=True)
os.makedirs(image_output_dir, exist_ok=True)

reader = PdfReader(pdf_path)
text_content = []
image_count = 0

print(f"Processing {len(reader.pages)} pages...")

for i, page in enumerate(reader.pages):
    # Extract text
    text = page.extract_text()
    text_content.append(f"<!-- Page {i+1} -->\n{text}\n")

    # Extract images
    if hasattr(page, "images"):
        for image in page.images:
            image_name = f"stem_page_{i+1}_img_{image.name}"
            image_path = os.path.join(image_output_dir, image_name)
            with open(image_path, "wb") as fp:
                fp.write(image.data)
            image_count += 1

# Save text
with open(output_text_path, "w", encoding="utf-8") as f:
    f.write("\n".join(text_content))

print(f"Extraction complete. Text saved to {output_text_path}")
print(f"Extracted {image_count} images to {image_output_dir}")
