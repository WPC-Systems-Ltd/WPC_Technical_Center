---
title: 更新myRIO的韌體與軟體
sidebar_position: 5
description: 針對不同 LabVIEW 版本環境的 myRIO 韌體與軟體更新指南
---

# 更新myRIO的韌體與軟體

在開始更新程序前，請先確認您電腦中安裝的 LabVIEW 版本數量，並依據下列情境選擇合適的操作步驟。

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/faq5.png" alt="faq5" width="60%" />
</div>

## 情境一：單一 LabVIEW 版本

若您的電腦僅安裝一個版本的 LabVIEW，建議使用 **myRIO Getting Started Wizard** 進行整合式更新。

### 操作步驟
1. 啟動 **myRIO Getting Started Wizard**。
2. 依照引導介面，同時執行韌體與軟體的更新。
3. 詳細流程請參閱官方指南：
    - [Upgrading Firmware on My myRIO NI Linux Real-Time Device](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A4LSAU&l=zh-TW)

## 情境二：多個 LabVIEW 版本

若您的電腦安裝有多個版本的 LabVIEW，請分別執行韌體與軟體的更新，以確保版本相容性。

### 1. 更新韌體
請參考以下官方文件進行韌體更新或版本還原：
- [在我的NI Linux Real-Time裝置上更新或還原韌體](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YHd9CAG&l=zh-TW)

### 2. 更新軟體
韌體更新完成後，請依據您的開發需求安裝對應版本的軟體：
- [在我的即時目標上安裝不同版本的軟體](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YINRCA4&l=zh-TW)

### 疑難排解
:::note
若在更新軟體過程遇到錯誤代碼 **-2147220312**，請參閱以下文件的 **Additional Information (更多資訊)** 章節：
- [Error -2147220312 When Updating myRIO Software](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A6MSAU&l=zh-TW)
:::
