---
title: 常用功能
sidebar_label: 常用功能
sidebar_position: 3
description: "SAPE 常用功能：檔案傳輸、執行與儲存腳本"
---

# 常用功能

## 檔案傳輸

您可以直接將 **Host PC** 上的檔案拖放到 **Target** (WPC 裝置) 上。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-stand-alone-editor/stand_alone_editor_drop_file.gif" alt="stand_alone_editor_drop_file" width="60%" />
</div>

例如：將範例程式碼從電腦上的資料夾直接拖曳到目標裝置的列表中。

## 執行腳本

在 **Editor** 中撰寫或開啟 `main.py` 程式碼。完成後，點擊 **"Run script"** 按鈕以執行程式碼，結果將顯示在 **Console** 中。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-stand-alone-editor/stand_alone_editor_run_script.gif" alt="stand_alone_editor_run_script" width="60%" />
</div>

範例程式碼：
```python
import pywpc
print("Hello from main.py")
print("Hello from WPC Systems Ltd.")
```

## 儲存腳本

在 **Editor** 中編輯程式碼。如果檔案尚未儲存，檔名旁會出現星號 (*)。

編輯完成後，點擊 **"Save script"** 按鈕。
系統會彈出確認視窗，請選擇 **"Yes"** 以確認儲存。儲存後星號將自動消失。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-stand-alone-editor/stand_alone_editor_save_script.gif" alt="stand_alone_editor_save_script" width="60%" />
</div>

## 覆蓋 main.py

此功能允許您將當前編輯的程式碼 (例如 `test.py`) 覆蓋到 `main.py` 中。

點擊 **"Override main.py"** 按鈕。系統會彈出確認視窗，請選擇 **"Yes"**。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-stand-alone-editor/stand_alone_editor_override.gif" alt="stand_alone_editor_override" width="60%" />
</div>

## 關閉檔案

點擊紅色的關閉按鈕即可關閉檔案。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-stand-alone-editor/stand_alone_editor_close.gif" alt="stand_alone_editor_close" width="60%" />
</div>
