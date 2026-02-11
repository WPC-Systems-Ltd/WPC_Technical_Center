---
title: WIFI Device Functions
sidebar_label: WIFI Device Functions
sidebar_position: 6
description: "Wi-Fi parameter configuration, AP mode setting, signal monitoring and firmware update"
---

## Refresh

Click the **"Refresh"** button to reload and update WIFI device information.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-refresh.png" alt="Refresh WIFI Device" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to open the pin definition window.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-pinout.png" alt="Pinout Button" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/pinout.png" alt="WIFIDAQ Pinout Example" width="60%" />
</div>

---

## Set IP Address

The steps to change the device IP address are as follows:

1.  Enter the new IP address in the **IP Address** field (e.g., `192.168.5.37`).
2.  Click the **"Set IP"** button.
3.  Confirm the IP address is correct, then click **"OK"**.
4.  The system will prompt you to restart the device to apply the settings, click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-set-ip.png" alt="Set IP" width="60%" />
</div>

---

## Reboot

If you need to restart the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-reboot.png" alt="Reboot Device" width="60%" />
</div>

---

## Update Firmware

If you need to update the WIFI device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/choose-update-firmware.png" alt="Update Firmware Button" width="60%" />
    </div>

    *   **⚠️ Icon**: Indicates that the current firmware version is old.
    *   **✅ Icon**: Indicates that the current firmware is the latest version.

2.  Select the corresponding firmware file (`.bin`) in the file browser.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/choose-bin.png" alt="Select Firmware File" width="60%" />
    </div>

3.  The system will pop up a confirmation window, click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/confirm-bin.png" alt="Start Updating Firmware" width="60%" />
    </div>

4.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/updating.png" alt="Firmware Updating" width="60%" />
    </div>

:::danger
**Do NOT turn off the power or interrupt the wireless connection** during the update process. If the update fails due to interruption, the device may not work and needs to be sent back to the factory for repair.
:::


---

## AP Mode

1.  Click the **"AP Mode"** button to enable the AP mode of the WIFI device.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/choose-apmode.png" alt="AP Mode Button" width="60%" />
    </div>

2.  WDM will pop up a confirmation window, please click **"OK"** to continue.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/apmode-confirm.png" alt="Confirm AP Mode" width="60%" />
    </div>

3.  Please connect the computer to the specified AP device via Wi-Fi. After successful connection, click **"OK"**.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/apmode-connect-pc.png" alt="Connect PC to AP" width="60%" />
    </div>

4.  After clicking "OK", WDM will automatically open the web page.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/apmode-browser.png" alt="Open Settings Page" width="60%" />
    </div>

5.  Please configure the network via that web page.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/wifi/apmode-config.png" alt="Network Configuration Page" width="60%" />
    </div>

:::caution
*   Please ensure the computer is successfully connected to the specified AP, otherwise you will not be able to enter the settings page.
*   If you need to change the domain or other network parameters of the WIFI device, please click **"Save"** on the settings page after setting.
:::

---

## Set SSID/PW

Click the **"SSID/PW"** button to set the Wi-Fi SSID and password the device wants to connect to, or set the device to AP mode.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-ssid.png" alt="Choose SSID and PW" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/set-ssid.png" alt="Set SSID and PW" width="60%" />
</div>
---

## Signal Monitor

Click the **"Monitor"** button to view the device's current battery level and wireless signal strength (RSSI).

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/choose-monitor.png" alt="Monitor Battery and RSSI" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/wifi/get-monitor.png" alt="Monitor Page Example" width="60%" />
</div>
