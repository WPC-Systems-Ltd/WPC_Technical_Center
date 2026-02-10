---
title: Ethernet Device Functions
sidebar_label: Ethernet Device Functions
sidebar_position: 5
description: "Network parameter settings, pinout, alias settings, and firmware updates"
---

## Refresh

Click the **"Refresh"** button to reload and update Ethernet device information.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-refresh.png" alt="Refresh Ethernet Device" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to open the pin definition window.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-pinout.png" alt="Pinout Button" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/pinout.png" alt="EthanA Pinout Example" width="60%" />
</div>

---

## Set Alias

If multiple devices of the same model are connected to the system at the same time, you can set aliases to distinguish different devices.

**Steps:**

1.  Enter the name you want to set in the **Device Alias** field (e.g., `EthanA-WPC`).
2.  Click the **"Set Alias"** button.
3.  Confirm the name is correct, then click **"OK"**.
4.  The system will prompt you to restart the device to apply the settings, click **"OK"**.
5.  After the device restarts, the name in the device list on the left will be updated to **EthanA-WPC**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-set-alias.png" alt="Set Alias" width="60%" />
</div>

---

## Set IP Address

The steps to change the device IP address are as follows:

1.  Enter the new IP address in the **IP Address** field (e.g., `192.168.1.120`).
2.  Click the **"Set IP"** button.
3.  Confirm the IP address is correct, then click **"OK"**.
4.  The system will prompt you to restart the device to apply the settings, click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-set-ip.png" alt="Set IP" width="60%" />
</div>

---

## Set Gateway

The steps to change the device default gateway are as follows:

1.  Enter the gateway IP in the **Gateway** field (e.g., `192.168.1.18`).
2.  Click the **"Set Gateway"** button.
3.  Confirm the gateway IP is correct, then click **"OK"**.
4.  The system will prompt you to restart the device to apply the settings, click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-set-gateway.png" alt="Set Gateway" width="60%" />
</div>

---

## Reboot

If you need to restart the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-reboot.png" alt="Reboot Device" width="60%" />
</div>

---

## Update Firmware

If you need to update the Ethernet device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/ethernet/choose-update-firmware.png" alt="Update Firmware Button" width="60%" />
    </div>

    *   **⚠️ Icon**: Indicates that the current firmware version is old.
    *   **✅ Icon**: Indicates that the current firmware is the latest version.

2.  Select the corresponding firmware file (`.bin`) in the file browser.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/ethernet/choose-bin.png" alt="Select Firmware File" width="60%" />
    </div>

3.  The system will pop up a confirmation window, click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/ethernet/update-start.png" alt="Start Updating Firmware" width="60%" />
    </div>

4.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/ethernet/updating.png" alt="Firmware Updating" width="60%" />
    </div>

:::danger
**Do NOT turn off the power or interrupt the network connection** during the update process. If the update fails due to interruption, the device may not work and needs to be sent back to the factory for repair.
:::

---

## Set SNTP

Setting the Network Time Protocol ensures device time synchronization.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/ethernet/choose-sntp.png" alt="Set SNTP" width="60%" />
</div>

SNTP supports the following two setting modes:

1.  **Connect to Public NTP Server Pool**
    *   Set server address to `255.255.255.255`.
    *   **Prerequisite**: The device must have internet access.

2.  **Connect to Private NTP Server**
    *   Set server address to the IP address of that server.
    *   **Prerequisite**: The NTP server must be in the same subnet as the WPC device, or reachable via router.

:::caution
When setting IP, Submask, and Gateway, please ensure the network parameters comply with logical specifications.
:::
