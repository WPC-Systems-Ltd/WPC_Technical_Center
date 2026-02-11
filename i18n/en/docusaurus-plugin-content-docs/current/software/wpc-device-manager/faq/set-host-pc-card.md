---
title: Set Host PC Network Card
sidebar_label: Set Host PC Network Card
sidebar_position: 6
description: "Confirm if the network card connected to the WPC device on the PC side is in the same domain"
---

> 💡 Please confirm first if the network card connected to the WPC device on the PC side is in the same domain?

*   Example: `192.168.1.110` and `192.168.1.xxx` belong to the same domain.
*   Example: `192.168.1.xxx` and `192.168.0.xxx` and `192.168.2.xxx` belong to different domains.

> 💡 It is recommended to disable DHCP first and use Static IP as much as possible, and set the correct IP address and submask.

*   **WPC Device**: `192.168.1.110` Mask `255.255.255.0`
*   **Client Computer**: `192.168.1.20` Mask `255.255.255.0`

Correct domain setting is crucial for normal communication with WPC network devices. Please follow the steps below to change the domain settings:

---

## 1. Open Windows Settings

Click the "Start" button and select the "Settings" icon to enter the settings page.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/windows-settings.png" alt="Search Settings in Windows" width="60%" />
</div>

---

## 2. Enter Ethernet Settings Page

In the "Settings" page, select "Network & Internet" option, then select "Ethernet" on the left.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/network-settings.png" alt="Select Network & Internet" width="60%" />
</div>

---

## 3. Change Adapter Options

In the Ethernet settings page, click "Change adapter options".

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/change-adapter-options.png" alt="Select Change Adapter Options" width="60%" />
</div>

---

## 4. Select Network Connection

In the "Network Connections" window, find the Ethernet connection you are using, right-click and select "Properties".

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ethernet-properties.png" alt="Select Properties" width="60%" />
</div>

---

## 5. Configure IPv4 Settings

In the "Properties" window, double-click "Internet Protocol Version 4 (TCP/IPv4)" to enter the IPv4 settings page.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ipv4-properties.png" alt="Select Internet Protocol Version 4 (TCP/IPv4)" width="60%" />
</div>

---

## 6. Set IP Address

Select "Use the following IP address" and manually enter the IP address, subnet mask, and default gateway. Ensure the IP address is within the same subnet and does not conflict with the IP address of any other device.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/set-static-ip.png" alt="Select Use the following IP address" width="60%" />
</div>

| Parameter | Value |
| :--- | :--- |
| **IP Address** | `192.168.1.38` (Do NOT use the same IP as WPC device) |
| **Subnet Mask** | `255.255.255.0` |

After completing the settings, click "OK" to save the changes. Then click "OK" again to close the window.

---

## 7. Check Connection Status

Open Command Prompt, enter the following command to test the connection:

```bash
ping 192.168.1.110
```

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/cmd-ping.png" alt="Enter ping command" width="60%" />
</div>

If the following response appears, it means the WPC device and the computer are successfully connected:

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/faq/host-pc-card/ping-result.png" alt="Ping Success Response" width="60%" />
</div>

If you still encounter communication problems, you can try replacing with a new network cable, or seek technical support from WPC.
