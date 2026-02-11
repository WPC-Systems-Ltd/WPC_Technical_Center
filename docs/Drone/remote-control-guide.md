---
title: 遙控器操作教學
sidebar_position: 3
description: 無人機遙控器操作與飛行流程
---

## 無人機遙控器操作影片

<div style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MCejJsEQymk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>



## 遙控器按鍵說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/page_4_X75.png" alt="遙控器按鍵配置" width="60%" />
</div>

| 位置               | 功能         | 說明                                                                 |
| :----------------- | :----------- | :------------------------------------------------------------------- |
| **① 右上方撥桿**   | 起飛鍵       | 撥動此開關以執行起飛動作。                                           |
| **② 右上方撥桿**   | 上位控制模式 | **切換控制權：**<br/>- **Remote controller**：遙控器手動控制<br/>- **Mission computer**：任務電腦控制 |
| **③ 右中間撥桿**   | 飛行控制模式 | - **Stop**：停止<br/>- **Attitude**：姿態模式 (較靈活)<br/>- **Position**：定位模式 (較穩定) |
| **④ 左手搖桿**     | Z ( ↕ ) / Yaw ( ↔ ) | - **Z ( ↕ )**：控制上升、下降 (油門)<br/>- **Yaw ( ↔ )**：控制原地左轉、右轉 (旋轉) |
| **⑤ 右手搖桿**     | Roll ( ↔ ) / Pitch ( ↕ ) | - **Roll ( ↔ ) / Y**：控制向左飛、向右飛 (側飛)<br/>- **Pitch ( ↕ ) / X**：控制向前飛、向後飛 (俯仰) |


## 起飛操作說明

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/page_5_X86.png" alt="搖桿控制 - 左側" width="60%" />
</div>


| 步驟順序                | 說明                                                                           |
| :---------------------- | :---------------------------------------------------------------------------- |
| **步驟 1 設定飛行模式** | 將「飛行控制模式」切換到 **Attitude mode** (中間) 或 **Position mode** (最下面)。  |
| **步驟 2 確認控制權**   | 確認「上位控制模式」開關位置在 **Remote controller** (最上面)。                    |
| **步驟 3 執行起飛**     | 持續按住「起飛鍵」直到無人機起飛。                                                |
| **系統反應**            | 無人機的自動起飛流程如下：<br/>1. 低速轉動旋翼 2 秒<br/>2. 增加旋轉速度到定值<br/>3. 定轉速保持 2 秒<br/>4. 起飛離開地面 |

## 降落操作


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/page_6_X91.png" alt="搖桿控制 - 右側" width="60%" />
</div>

把左手搖桿 (Z 軸控制桿) ( ↕ ) 移至最低位置。無人機接近地面後，會自動解除飛行模式。

## 緊急關閉
<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/page_6_X93.png" alt="搖桿控制 - 方向" width="60%" />
</div>

**緊急關閉：**

| 方式                  | 操作步驟                                 | 結果與原理                                                                                                           |
| :-------------------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| **方法 ①：遙控器**    | 解除控制模式：撥動到最上方 (Stop) 的位置 | 這是告訴飛控電腦「停止執行任務」。這屬於軟體層面的指令，通常反應較快且標準。                                         |
| **方法 ②：飛控開關**  | 強制切斷電源：按下 OFF 按鈕              | 這是直接切斷飛控系統的電力供應。就像直接拔掉插頭一樣，是最徹底的關閉方式。⚠️ **無人機可能會瞬間失去動力掉下來** |

