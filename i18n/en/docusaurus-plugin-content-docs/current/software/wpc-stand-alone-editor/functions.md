---
title: Common Functions
sidebar_label: Common Functions
sidebar_position: 3
description: "SAPE common functions: file transfer, run and save scripts"
---

## File Transfer

You can directly drag and drop files from **Host PC** to **Target** (WPC device).

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-stand-alone-editor/pyco_drop_file.gif" alt="Drag and Drop File" width="60%" />
</div>

For example: Drag the sample code from a folder on your computer directly to the list of target devices.

## Run Script

Write or open `main.py` code in **Editor**. When finished, click the **"Run script"** button to execute the code, and the result will be displayed in **Console**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-stand-alone-editor/pyco_run_script.gif" alt="Run Script" width="60%" />
</div>

Example code:
```python
import pywpc
print("Hello from main.py")
print("Hello from WPC Systems Ltd.")
```

## Save Script

Edit code in **Editor**. If the file is not saved, an asterisk (*) will appear next to the filename.

After editing, click the **"Save script"** button.
The system will pop up a confirmation window, please select **"Yes"** to confirm saving. The asterisk will disappear automatically after saving.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-stand-alone-editor/pyco_save_script.gif" alt="Save Script" width="60%" />
</div>

## Override main.py

This function allows you to overwrite `main.py` with the currently edited code (e.g., `test.py`).

Click the **"Override main.py"** button. The system will pop up a confirmation window, please select **"Yes"**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-stand-alone-editor/pyco_override.gif" alt="Override main.py" width="60%" />
</div>

## Close File

Click the red close button to close the file.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc-stand-alone-editor/pyco_close.gif" alt="Close File" width="60%" />
</div>
