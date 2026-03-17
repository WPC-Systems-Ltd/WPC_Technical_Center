---
title: Ethernet Device Functions
sidebar_label: Ethernet Device
sidebar_position: 5
description: "Network parameter settings, pinout, alias settings, and firmware updates"
---

## Refresh

Click the **"Refresh"** button to re-read and update Ethernet device information.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_refresh.png" alt="WDM_Ethan_refresh" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to display the pinout diagram. The window size can be adjusted based on the user's requirements.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_pinout.png" alt="WDM_Ethan_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_pinout1.png" alt="WDM_Ethan_pinout1" width="60%" />
</div>

---

## Set Alias

If multiple devices of the same model are connected to the system simultaneously, aliases can be set to distinguish among them.

**Operating Steps:**

1.  Enter the desired name in the **Device Alias** field (e.g., `EthanA-WPC`).
2.  Click the **"Set Alias"** button.
3.  After confirming the name is correct, click **"OK"**.
4.  The system will prompt that the device needs to be rebooted to apply the settings; please click **"OK"**.
5.  After the device reboots, the name in the device list on the left will be updated to **EthanA-WPC**.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_set_alias.png" alt="WDM_Ethan_set_alias" width="60%" />
</div>

---

## Set IP Address

The steps to change the device IP address are as follows:

1.  Enter the new IP address in the **IP Address** field (e.g., `192.168.1.120`).
2.  Click the **"Set IP"** button.
3.  After confirming the IP address is correct, click **"OK"**.
4.  The system will prompt that the device needs to be rebooted to apply the settings; please click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_set_ip.png" alt="WDM_Ethan_set_ip" width="60%" />
</div>

---

## Set Gateway

The steps to change the device's default gateway are as follows:

1.  Enter the gateway IP in the **Gateway** field (e.g., `192.168.1.18`).
2.  Click the **"Set Gateway"** button.
3.  After confirming the gateway IP is correct, click **"OK"**.
4.  The system will prompt that the device needs to be rebooted to apply the settings; please click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_set_gateway.png" alt="WDM_Ethan_set_gateway" width="60%" />
</div>

---

## Reboot

To reboot the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_reboot.png" alt="WDM_Ethan_reboot" width="60%" />
</div>

---

## Update Firmware

To update the Ethernet device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_update_firmware.png" alt="WDM_Ethan_update_firmware" width="60%" />
    </div>

:::info
- ⚠️ Icon: Indicates that the current firmware version is outdated.
- ✅ Icon: Indicates that the current firmware is up to date.
:::

2.  Select the corresponding firmware file (`.bin`) from the file browser.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_choose_bin.png" alt="WDM_Ethan_choose_bin" width="60%" />
    </div>

3.  A confirmation window will pop up; click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_update_firmware.png" alt="WDM_Ethan_update_firmware" width="60%" />
    </div>

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_keep_updating.png" alt="WDM_Ethan_keep_updating" width="60%" />
    </div>

4.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/WDM_Ethan_updating.png" alt="WDM_Ethan_updating" width="60%" />
    </div>

:::danger
**Do not turn off the power or disconnect the network** during the update process. If the update fails due to interruption, the device may malfunction and need to be returned to the factory for repair.
:::

---

## Set SNTP

Configuring the Simple Network Time Protocol ensures device time synchronization.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/ethernet/choose-sntp.png" alt="Set SNTP" width="60%" />
</div>

SNTP supports the following two configuration modes:

1.  **Connect to a Public NTP Server Pool**
    *   Set the server address to `255.255.255.255`.
    *   **Prerequisite**: The device must have internet access.

2.  **Connect to a Private NTP Server**
    *   Set the server address to the IP address of that server.
    *   **Prerequisite**: The NTP server must be in the same subnet as the WPC device or reachable via a router.

:::caution
When setting the IP, Submask, and Gateway, please ensure the network parameters comply with logical specifications.
:::
