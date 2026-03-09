---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Welcome!

Thank you for choosing PYCO. This guide will help you quickly set up your development environment and run your first program on the PYCO development board.

## Prerequisites

**Hardware:**

1.  PYCO development board
2.  USB A cable
3.  24V DC power supply (Only for PYCO WIFI and PYCO ETH)
4.  Computer (Windows, Linux, or macOS)

**Software:**

1.  WPC Stand-Alone Python Editor (Recommended) or any Python IDE

## Step 1: Install Software

1.  Download the [WPC Stand-Alone Python Editor](https://www.wpc.com.tw/stand-alone-python-editor.html).
2.  Unzip the downloaded file to a folder of your choice.
3.  Double-click the executable file to open the editor.

## Step 2: Connect Hardware

1.  Connect the 24V DC power supply to your PYCO development board. (Only for PYCO WIFI and PYCO ETH)
2.  Connect the PYCO development board to your computer using a USB A cable.
3.  Wait for the computer to recognize the device (drivers should install automatically).

## Step 3: Run Your First Example

1.  Open the WPC Stand-Alone Python Editor (or your preferred IDE).
2.  Download the example code from the [official examples page](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples/PYCO_WIFI/System/get_system_info.html).
3.  Open the example file in the editor.
4.  Ensure your PYCO development board is selected as the target device (check the editor's device menu).
5.  Click the "Run" button to execute the code on the development board.

## Congratulations!

You have successfully set up the development environment and run your first program on the PYCO development board. Explore more examples and start building your own projects!

## Minimal AI Data Reading Example: `AI on demand once`

---

```python
"""
AI - AI_on_demand_once.py.
This example demonstrates how to read AI data in on demand mode.
"""
# 1. Import the pywpc library
import pywpc

## Read data acquisition
# 2. Call AI_readOnDemand() to get the raw AI data instantly!
ai_data = pywpc.AI_readOnDemand()

# 3. Print the data
print(ai_data)
```

This example aims to showcase the **ultimate simplicity** of reading **Analog Input (AI)** data using the **pywpc** library.

**You don't need complex configurations or channel setups.** Just call a simple function to instantly get the data.

:::tip More Examples
👉 View more example codes: [PYCO Series Example Codes](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples_PYCO_WIFI_MINI_AO.html)
:::
