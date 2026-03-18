---
title: Connecting to myRIO via Wi-Fi
sidebar_position: 6
description: Guide for setting up two modes of myRIO wireless network connection
---

# Connecting to myRIO via Wi-Fi

You can configure the wireless communication mode of myRIO through **NI MAX**. Choose one of the following connection methods based on your network environment requirements.

## Mode 1: Creating a Wireless Access Point

This mode sets myRIO as a wireless access point, allowing the computer to connect directly to the Wi-Fi signal emitted by myRIO. It is suitable for point-to-point connections in environments without external networks.

### Setup Steps
1. Open **NI MAX**.
2. Change myRIO network settings to **Wireless Access Point**.
3. In the Wi-Fi list on the computer, search for and connect to the myRIO SSID.
4. After a successful connection, the LabVIEW project can communicate with myRIO.

### Reference Documents
- [How do I Set NI myRIO as an Access Point?](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YH5zCAG&l=en-US)

## Mode 2: Connecting to an Existing Wireless Network (Station Mode)

This mode connects myRIO to an existing Wi-Fi access point (such as a router or mobile hotspot), and the computer must also connect to the same network. It is suitable for scenarios requiring simultaneous internet access.

### Setup Steps
1. Open **NI MAX**.
2. Change myRIO network settings to **Connect to wireless network**.
3. Select and enter the name and password of the existing Wi-Fi network (router or mobile hotspot).
4. Connect the computer's Wi-Fi to the **same** Wi-Fi network.
5. After confirming both are on the same network segment, the LabVIEW project can communicate with myRIO.

### Reference Documents
- [Connecting myRIO to a Host Computer (myRIO Toolkit)](https://www.ni.com/docs/en-US/bundle/labview-myrio-toolkit/page/myriohelp/myrio_usb_wifi_config.html)
