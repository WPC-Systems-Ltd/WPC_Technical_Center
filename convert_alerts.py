import re
import os
from pathlib import Path

def convert_github_to_docusaurus(content):
    """Convert GitHub-style alerts to Docusaurus admonitions"""

    # Mapping of GitHub alert types to Docusaurus types
    mappings = {
        'NOTE': 'note',
        'TIP': 'tip',
        'IMPORTANT': 'warning',
        'WARNING': 'caution',
        'CAUTION': 'danger',
    }

    for github_type, docusaurus_type in mappings.items():
        # Pattern to match multi-line GitHub alerts
        pattern = rf'> \[!{github_type}\]\n((?:> .*\n?)*)'

        def replace_alert(match):
            # Extract content lines
            content_lines = match.group(1).strip().split('\n')
            # Remove '> ' prefix from each line
            cleaned_lines = [line.replace('>', '', 1).strip() if line.startswith('>') else line for line in content_lines]
            # Filter empty lines at start/end
            while cleaned_lines and not cleaned_lines[0]:
                cleaned_lines.pop(0)
            while cleaned_lines and not cleaned_lines[-1]:
                cleaned_lines.pop()

            # Build Docusaurus admonition
            result = f':::{docusaurus_type}\n' + '\n'.join(cleaned_lines) + '\n:::\n'
            return result

        content = re.sub(pattern, replace_alert, content, flags=re.MULTILINE)

    return content

# Process all markdown files
base_paths = [
    r'd:\Synology\github\my-website\docs\DAQ\usbdaq',
    r'd:\Synology\github\my-website\docs\DAQ\wifidaq'
]

files_processed = 0
for base_path in base_paths:
    for md_file in Path(base_path).glob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = convert_github_to_docusaurus(content)

            if new_content != content:
                with open(md_file, 'w', encoding='utf-8', newline='\r\n') as f:
                    f.write(new_content)
                print(f'+ Converted: {md_file.name}')
                files_processed += 1
        except Exception as e:
            print(f'- Error processing {md_file.name}: {e}')

print(f'\nTotal files converted: {files_processed}')
