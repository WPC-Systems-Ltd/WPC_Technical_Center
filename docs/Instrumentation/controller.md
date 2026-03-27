---
title: 控制器面板與規格
sidebar_position: 2
---

# gStack-RIO 控制器

gStack-RIO 控制器採用高效能嵌入式處理器，提供穩定且靈活的控制核心。本章節將詳細說明控制器的硬體介面配置、核心規格數據以及軟體架構組成的相關資訊。

### 硬體介面說明

---

下圖展示了 gStack-RIO 控制器的實體面板配置與各項連接介面位置。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p7_00.png" alt="Controller Interface" width="60%" />
</div>

1. Protective earth (PE): 保護接地端子。
2. USB connector: 用於連接外部儲存裝置或周邊設備。
3. RJ-45 connector: 乙太網路連接埠，用於連接電腦或網路。
4. RESET button: 系統重置按鈕。
5. LED indicators: 系統狀態指示燈。
6. RS232: 序列通訊介面。
7. CAN: Controller Area Network 通訊介面。
8. 24VDC power input: 直流電源輸入端子。

在使用本設備前，請務必確認電源連接正確。電源輸入端子位於控制器下方，接線定義如下：
*   上方端子：0V (-)負極
*   下方端子：24V (+)正極

為確保設備安全與穩定運作，請嚴格遵守上述接線規範。網路通訊部分請使用標準 RJ-45 網路線連接至乙太網路交換器或電腦。

### 核心規格

---

gStack-RIO 控制器核心搭載 NI sbRIO-9607 嵌入式單板電腦，具備高效能處理器與可程式化 FPGA，適用於即時控制與監控應用。

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p8_00.png" alt="Controller Specs" width="60%" />
</div>

詳細規格如下：
*   Processor: 667MHz Dual core CPU
*   FPGA: Zynq-7020
*   Memory: 512MB DRAM & Flash
*   Interfaces: Ethernet, USB, CAN, RS-232
*   Development Environment: LabVIEW PC/RT programmable
*   Software Support: gStack Manager, gStack driver

### 軟體架構

---

gStack-RIO 的系統軟體架構如下圖所示。使用者可透過 gStack-RIO 提供的 PC 端或 Real-Time (RT) 端驅動程式 API，在 LabVIEW 環境下進行應用程式開發。

:::caution
gStack-RIO 系統底層會自動載入預先編譯完成的 FPGA bitfile，以確保硬體運作的穩定性與相容性，因此使用者無需也無法自行修改底層 FPGA 的功能。
:::

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/instrumentation/image_p8_00.png" alt="Software Architecture" width="60%" />
</div>
