---
title: Interface and Basic Operation
sidebar_label: Interface & Basic Operation
sidebar_position: 2
description: "Introduction to gStack-RIO Manager main screen, device searching, and adding simulated devices"
---

# Interface and Basic Operation

## Main Screen Introduction

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/gstackRIO_manager_main_screen.png" alt="gstackRIO_manager_main_screen" width="60%" />
</div>

The functions of the main screen are described as follows:

1. **Network Device List**: gStack-RIO devices will be listed in the network device list.
2. **Test Program Panel**: The test program panel will change according to the device; the supported test program buttons will also change accordingly.
3. **Product Information**: Displays complete product information, such as serial number, IP, MAC, firmware version, etc.
4. **Computer and Device Connection Status**: The status bar shows connection status (Connected, Disconnected) or information such as IP conflicts.

## General Functions

### Search and Refresh

gStack-RIO Manager provides an automatic search function that can scan for gStack-RIO devices within the domain.

- **Network Devices**: Move the mouse cursor to the "**Network**" area, right-click and select "**Refresh Network**".

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/gstackRIO_manager_refresh1.png" alt="gstackRIO_manager_refresh1" width="60%" />
</div>

:::caution
If you cannot find your network device in the list, please confirm that the IP addresses of the host computer and the device are within the **same subnet**.
:::

### Adding Simulated Devices

gStack-RIO Manager supports simulated device functions, allowing users to preview pinouts and test panel functions without physical hardware.

1.  Click **"View"** in the menu bar.
2.  Select **"Add Simulated Device"**.
3.  You can hold the **Ctrl** key to select multiple devices, then click **"OK"** to confirm.

These steps can help you add simulated devices to view their detailed information without having to actually connect the hardware.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc-gstack-rio-manager/gstackRIO_manager_add_simulated_device.png" alt="gstackRIO_manager_add_simulated_device" width="60%" />
</div>
