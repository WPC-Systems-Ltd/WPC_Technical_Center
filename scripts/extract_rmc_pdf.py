
import os
from pypdf import PdfReader
from PIL import Image
import io

pdf_path = r"d:\Synology\github\WPC_Technical_Center\Notion\WPC_RMC_breakout_User_Guide.pdf"
output_dir = r"d:\Synology\github\WPC_Technical_Center\static\img\embedded-system\geco"
text_output_path = r"d:\Synology\github\WPC_Technical_Center\Notion\rmc_breakout_raw_text.md"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

reader = PdfReader(pdf_path)
text_content = ""

try:
    for i, page in enumerate(reader.pages):
        # Extract text
        text_content += f"\n\n## Page {i+1}\n\n"
        text_content += page.extract_text()

        # Extract images
        if '/XObject' in page['/Resources']:
            xObject = page['/Resources']['/XObject'].get_object()
            for obj in xObject:
                if xObject[obj]['/Subtype'] == '/Image':
                    size = (xObject[obj]['/Width'], xObject[obj]['/Height'])
                    data = xObject[obj].get_data()
                    # Determine image format
                    if xObject[obj]['/Filter'] == '/DCTDecode':
                        img_path = os.path.join(output_dir, f"rmc_page_{i+1}_{obj[1:]}.jpg")
                        with open(img_path, "wb") as img_file:
                            img_file.write(data)
                    elif xObject[obj]['/Filter'] == '/FlateDecode':
                        mode = "RGB" # Default
                        # Handle different color spaces if needed, keeping it simple for now
                        try:
                           img = Image.frombytes(mode, size, data)
                           img_path = os.path.join(output_dir, f"rmc_page_{i+1}_{obj[1:]}.png")
                           img.save(img_path)
                        except:
                            print(f"Failed to extract image {obj} on page {i+1}")

    with open(text_output_path, "w", encoding="utf-8") as f:
        f.write(text_content)

    print(f"Extraction complete. Text saved to {text_output_path}")

except Exception as e:
    print(f"Error: {e}")
