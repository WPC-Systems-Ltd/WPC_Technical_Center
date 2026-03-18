---
title: WIFI Device Functions
sidebar_label: WIFI Device
sidebar_position: 6
description: "Wi-Fi parameter configuration, AP mode settings, signal monitoring, and firmware updates"
---

## Refresh

Click the **"Refresh"** button to re-read and update WIFI device information.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_refresh.png').default} alt="WDM_WIFI_refresh" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to open the pinout definition window. The window size can be adjusted based on the user's requirements.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_pinout.png').default} alt="WDM_WIFI_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_pinout1.png').default} alt="WDM_WIFI_pinout1" width="60%" />
</div>

---

## Set IP Address

The steps to change the device IP address are as follows:

1.  Enter the new IP address in the **IP Address** field (e.g., `192.168.5.37`).
2.  Click the **"Set IP"** button.
3.  After confirming the IP address is correct, click **"OK"**.
4.  The system will prompt that the device needs to be rebooted to apply the settings; please click **"OK"**.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_set_ip.png').default} alt="WDM_WIFI_set_ip" width="60%" />
</div>

---

## Reboot

To reboot the device via software, please click the **"Reboot"** button.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_reboot.png').default} alt="WDM_WIFI_reboot" width="60%" />
</div>

---

## Update Firmware

To update the WIFI device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_update_firmware.png').default} alt="WDM_WIFI_update_firmware" width="60%" />
    </div>

:::info
- ⚠️ Icon: Indicates that the current firmware version is outdated.
- ✅ Icon: Indicates that the current firmware is up to date.
:::

2.  Select the corresponding firmware file (`.bin`) from the file browser.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_choose_bin.png').default} alt="WDM_WIFI_choose_bin" width="60%" />
    </div>

3.  A confirmation window will pop up; click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_confirm_bin.png').default} alt="WDM_WIFI_confirm_bin" width="60%" />
    </div>

4.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_updating.png').default} alt="WDM_WIFI_updating" width="60%" />
    </div>

:::danger
**Do not turn off the power or disconnect the wireless connection** during the update process. If the update fails due to interruption, the device may malfunction and need to be returned to the factory for repair.
:::

---

## AP Mode

1.  Click the **"AP Mode"** button to enable the AP mode of the WIFI device.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_apmode.png').default} alt="WDM_WIFI_apmode" width="60%" />
    </div>

2.  WDM will pop up a confirmation window; please click **"OK"** to continue.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_apmode_confirm.png').default} alt="WDM_WIFI_apmode_confirm" width="60%" />
    </div>

3.  Please connect your computer to the specified AP device via Wi-Fi. After a successful connection, click **"OK"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_apmode_connect_pc.png').default} alt="WDM_WIFI_apmode_connect_pc" width="60%" />
    </div>

4.  After clicking "OK", WDM will automatically open the browser.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_apmode_browser.png').default} alt="WDM_WIFI_apmode_browser" width="60%" />
    </div>

5.  Please perform network configuration through that webpage. After completing the settings, click **"Save"** on the configuration page.


    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_apmode_config.png').default} alt="WDM_WIFI_apmode_config" width="60%" />
    </div>

:::info
Please ensure the computer has successfully connected to the specified AP; otherwise, you will not be able to enter the configuration page.
:::

---

## Set SSID/PW

Click the **"SSID/PW"** button to set the Wi-Fi SSID and password that the device wishes to connect to, or to set the device to AP mode.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_SSID.png').default} alt="WDM_WIFI_SSID" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_SSID_password.png').default} alt="WDM_WIFI_SSID_password" width="60%" />
</div>
---

## Signal Monitoring

Click the **"Monitor"** button to view the current battery level and Received Signal Strength Indicator (RSSI) of the device.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_monitor.png').default} alt="WDM_WIFI_monitor" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/wifi/WDM_WIFI_battery_RSSI.png').default} alt="WDM_WIFI_battery_RSSI" width="60%" />
</div>
