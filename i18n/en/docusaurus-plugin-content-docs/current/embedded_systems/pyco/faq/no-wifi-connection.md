---
title: Screen Shows "No wifi connection"
sidebar_label: Screen Shows "No wifi connection"
sidebar_position: 1
---

# PYCO WIFI Series Screen Shows `No wifi connection`

### Fully functional, don't worry!

The PYCO WIFI series is designed as an **highly independent** device. Even if the screen displays `No wifi connection`, it simply means **the board is currently not connected to a Wi-Fi network**. This **does not affect** the core functions of the board:

1.  **Independent Operation:**
    - Even without a Wi-Fi connection, **all major functions** of the product (e.g., data acquisition, I/O control, execution of built-in programs) will still **operate normally**.
    - The development board will continue to execute your custom code or default functions independently.

2.  **When is Wi-Fi needed?**
    - Wi-Fi connection is only required when you need to use features like **cloud data upload**, **remote control**, or **settings via web interface**.

3.  **How to clear the message:**
    - If you wish to remove this message, you can connect the board to a Wi-Fi network via code, or choose to **turn off the screen display** or **modify the display content** in your application.

    :::tip Example Code
    👉 [View Example Code: How to Set Wifi Info](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples/PYCO_WIFI_MINI_AO/System/set_wifi_info.html)

    👉 [View Example Code: How to Change IP](https://wpc-systems-ltd.github.io/WPC_Stand-alone_Python_release/examples/PYCO_WIFI_MINI_AO/System/change_ip.html)
    :::

**Summary:**

:::note
Even without Wi-Fi, your PYCO development board is still a fully functional data acquisition and control unit. Please feel free to use it!
:::
