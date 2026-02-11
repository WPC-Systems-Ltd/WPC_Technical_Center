---
title: Status Bar Shows IP Inconsistent
sidebar_label: Status Bar Shows IP Inconsistent
sidebar_position: 4
description: "Solve IP Inconsistent issue caused by PC network card and WPC device being in different domains"
---

## Problem Description

The device can be searched in WDM, but the status bar displays **"IP inconsistent"**, resulting in inability to connect or operate.

## Possible Causes

This status indicates that the **PC network card** and the **WPC device** are in **different domains**.

*   **Same Domain Example (Correct)**:
    *   PC: `192.168.1.20`
    *   Device: `192.168.1.110`
*   **Different Domain Example (Incorrect)**:
    *   PC: `192.168.1.20`
    *   Device: `192.168.0.110` or `192.168.2.110`

## Solution

1.  **Check Subnet Settings**: Please ensure that the IP of the PC network card responsible for connection and the device IP are in the same subnet.
2.  **Use Static IP**: It is recommended to temporarily disable DHCP and manually specify the IP address and Subnet Mask of the PC network card to ensure connection stability.

    *   **WPC Device Setting Example**: IP `192.168.1.110` / Mask `255.255.255.0`
    *   **PC Side Setting Example**: IP `192.168.1.20` / Mask `255.255.255.0`
