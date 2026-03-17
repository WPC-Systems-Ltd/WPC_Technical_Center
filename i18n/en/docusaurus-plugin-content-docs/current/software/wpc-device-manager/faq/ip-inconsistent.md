---
title: Status Bar Shows IP Inconsistent
sidebar_label: Status Bar Shows IP Inconsistent
sidebar_position: 4
description: "Resolving the IP Inconsistent problem caused by the computer network card and the WPC device being in different domains"
---

## Problem Description

The device can be searched in WDM, but the status bar displays **"IP inconsistent"**, leading to the inability to connect or operate.

## Possible Causes

This status indicates that the **computer's network card** and the **WPC device** are located in **different domains**.

*   **Same Domain Example (Correct)**:
    *   Computer: `192.168.1.20`
    *   Device: `192.168.1.110`
*   **Different Domain Example (Incorrect)**:
    *   Computer: `192.168.1.20`
    *   Device: `192.168.0.110` or `192.168.2.110`

## Solution

1.  **Confirm Subnet Settings**: Please ensure that the IP of the computer's network card responsible for connection and the device IP are located in the same subnet.
2.  **Use Static IP**: It is recommended to temporarily turn off DHCP and manually specify the IP address and subnet mask (Subnet Mask) of the computer's network card to ensure connection stability.

    *   **WPC Device Setting Example**: IP `192.168.1.110` / Mask `255.255.255.0`
    *   **Computer Setting Example**: IP `192.168.1.20` / Mask `255.255.255.0`
