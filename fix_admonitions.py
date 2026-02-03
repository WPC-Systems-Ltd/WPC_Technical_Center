# -*- coding: utf-8 -*-
import re
from pathlib import Path

def fix_admonitions(content):
    """Fix malformed admonitions by removing > prefix and adding closing tags"""

    # Pattern to match admonitions with content
    pattern = r'(:::(note|tip|warning|caution|danger)\s*[^\n]*\n)((?:[>\s]*[^\n]*\n)+?)(?=\n##|$|\n:::)'

    def clean_content(match):
        header = match.group(1)
        body = match.group(3)

        # Remove > prefix and empty lines at start
        lines = body.split('\n')
        cleaned_lines = []
        for line in lines:
            cleaned = line.lstrip('>').strip()
            if cleaned or cleaned_lines:  # Keep line if it has content or if we already have content
                cleaned_lines.append(cleaned)

        # Remove trailing empty lines
        while cleaned_lines and not cleaned_lines[-1]:
            cleaned_lines.pop()

        # Build result with closing tag
        result = header + '\n'.join(cleaned_lines) + '\n:::\n'
        return result

    content = re.sub(pattern, clean_content, content, flags=re.MULTILINE | re.DOTALL)

    # Remove **bold** from admonition titles
    content = re.sub(r'(:::(?:note|tip|warning|caution|danger))\s+\*\*([^*]+)\*\*', r'\1 \2', content)

    return content

# Process files
base_paths = [
    Path(r'd:\Synology\github\my-website\docs\DAQ\usbdaq'),
    Path(r'd:\Synology\github\my-website\docs\DAQ\wifidaq')
]

files_fixed = 0
for base_path in base_paths:
    for md_file in base_path.glob('*.md'):
        try:
            content = md_file.read_text(encoding='utf-8')
            fixed_content = fix_admonitions(content)

            if fixed_content != content:
                md_file.write_text(fixed_content, encoding='utf-8', newline='\r\n')
                print(f'Fixed: {md_file.name}')
                files_fixed += 1
        except Exception as e:
            print(f'Error processing {md_file.name}: {e}')

print(f'\nTotal files fixed: {files_fixed}')
