---
title: Interface and Basic Operation
sidebar_label: Interface & Basic Operation
sidebar_position: 2
description: "Introduction to GECO Manager main screen, device searching, and adding simulated devices"
---

# Interface and Basic Operation

## Main Screen Introduction

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_main_screen.png').default} alt="GECO Manager Main Screen" width="60%" />
</div>

The functions of the main screen are described below:

1. **Network Device List**: GECO devices will be listed here.
2. **Test Program Panel**: Displays various test buttons based on the connected GECO modules.
3. **Product Information**: Displays complete product details such as Serial Number, IP, MAC, and firmware version.
4. **Connection Status**: The status bar shows the connection state between the computer and the device (e.g., Connected, Disconnected) or IP conflicts.

## General Functions

### Search and Refresh

GECO Manager provides an automatic search function that scans for GECO devices within the local network.

- **Network Devices**: Move the mouse cursor to the "**Network**" area, right-click, and select "**Refresh Network**".

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_refresh_network.png').default} alt="Refresh Network" width="60%" />
</div>

:::caution
If you cannot find your network device in the list, please ensure that the IP addresses of both the host computer and the device are within the **same subnet**.
:::

### Adding Simulated Devices

GECO Manager supports a simulated device feature, allowing users to preview pinouts and test panel functions without physical hardware.

1.  Click **"View"** in the menu bar.
2.  Select **"Add Simulated Device"**.
3.  You can hold the **Ctrl** key to select multiple devices, then click **"OK"** to confirm.

These steps allow you to view detailed information through simulated devices without a physical connection.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc-geco-manager/geco_manager_add_simulated_device.png').default} alt="Add Simulated Device" width="60%" />
</div>
