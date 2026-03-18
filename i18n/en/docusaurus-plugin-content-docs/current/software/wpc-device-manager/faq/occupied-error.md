---
title: Status Bar Shows IP Occupied
sidebar_label: Status Bar Shows IP Occupied
sidebar_position: 3
description: "Resolving Occupied connection errors caused by IP address conflicts or routing confusion"
---

## Problem Description

The network device can be searched in WDM, and the device can be successfully pinged, but a TCP connection cannot be established, and the status bar displays **"Occupied"**.

## Possible Causes

This problem usually stems from **IP address conflicts** or **routing confusion**:
1.  The Wi-Fi network card and the wired network card (Ethernet) on the computer side are set to the same network segment.
2.  The computer-side IP and the device IP are exactly the same.

## Solution

Please check the network interface card settings of your computer to ensure:
1.  **Segment Separation**: The Wi-Fi network card and the wired network card should use different network segments (for example, if Wi-Fi uses `192.168.1.x`, then the wired network card should avoid this network segment).
2.  **IP Uniqueness**: Ensure that the IP address of the computer (e.g., `192.168.1.20`) and the IP address of the WPC device (e.g., `192.168.1.110`) are not duplicated.

:::tip
Please check other virtual network cards or network interfaces on your computer to confirm if other network cards are set to the same network segment.
:::
