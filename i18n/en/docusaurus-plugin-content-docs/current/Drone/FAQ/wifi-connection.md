---
title: Connect to myRIO via WIFI
sidebar_position: 6
description: Guide to setting up myRIO wireless network connection modes
---

# Connect to myRIO via WIFI

You can configure the wireless communication mode of myRIO via **NI MAX**. Choose either of the following connection methods according to your network environment needs.

## Mode 1: Create Wireless Access Point

This mode sets the myRIO as a wireless access point, allowing the computer to connect directly to the Wi-Fi signal emitted by the myRIO. Suitable for peer-to-peer connections without an external network environment.

### Setup Steps
1. Open **NI MAX**.
2. Change the network setting of myRIO to **Wireless Access Point**.
3. In the Wi-Fi list on the computer, find and connect to the myRIO's SSID.
4. After the connection is successful, the LabVIEW project can communicate with the myRIO.

### Reference Documents
- [How do I Set NI myRIO as an Access Point?](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YH5zCAG&l=en-US)

## Mode 2: Connect to Existing Wireless Network (Station Mode)

This mode connects the myRIO to an existing Wi-Fi base station (such as a router or mobile hotspot), and the computer also needs to connect to the same network. Suitable for scenarios requiring simultaneous internet access.

### Setup Steps
1. Open **NI MAX**.
2. Change the network setting of myRIO to **Connect to wireless network**.
3. Select and enter the name and password of the existing Wi-Fi network (base station or mobile hotspot).
4. Connect the computer's Wi-Fi to the **same** Wi-Fi network.
5. After confirming that both are on the same network segment, the LabVIEW project can communicate with the myRIO.

### Reference Documents
- [Connecting myRIO to a Host Computer (myRIO Toolkit)](https://www.ni.com/docs/zh-TW/bundle/labview-myrio-toolkit/page/myriohelp/myrio_usb_wifi_config.html)
