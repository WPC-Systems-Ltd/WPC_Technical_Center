---
title: Status Bar Shows IP Occupied
sidebar_label: Status Bar Shows IP Occupied
sidebar_position: 3
description: "Solve IP Occupied connection error caused by IP address conflict or routing confusion"
---

## Problem Description

The network device can be searched in WDM, and can be successfully Pinged, but TCP connection cannot be established, and the status bar displays **"Occupied"**.

## Possible Causes

This problem usually stems from **IP Address Conflict** or **Routing Confusion**:
1.  The Wi-Fi network card and wired network card (Ethernet) on the computer side are configured with the same subnet.
2.  The IP on the computer side is exactly the same as the device IP.

## Solution

Please check the network interface card settings of the computer to ensure:
1.  **Subnet Separation**: The Wi-Fi network card and wired network card should use different subnets (for example, if Wi-Fi uses `192.168.1.x`, the wired network card should avoid this subnet).
2.  **IP Uniqueness**: Ensure that the IP address on the computer side (e.g., `192.168.1.20`) does not duplicate the IP address of the WPC device (e.g., `192.168.1.110`).

:::tip
Please check other virtual network cards or network interfaces on the computer to confirm if any other network cards are set to the same subnet.
:::
