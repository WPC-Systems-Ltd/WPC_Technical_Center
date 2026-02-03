---
title: Change Wi-Fi Settings (Using WDM)
sidebar_position: 4
---

# Change Wi-Fi Settings (Using WDM)

If your WIFI-DAQ is already connected to a router (Station Mode), but you need to change the connection to another router (e.g., from "WPC Systems 1" to "WPC Systems 100"), you can quickly switch to AP mode using the **WDM (WPC Device Manager)** tool to configure it.

## Step 1: Enable AP Mode

Please open the WDM software, find your WIFI-DAQ device in the list, and click the **AP Mode** button on the right.

<img src="/img/daq/wifi-daq/wifi-daq-go-to-ap-mode.png" alt="Go to AP Mode" width="600" />

## Step 2: Confirm Execution

WDM will pop up a window asking for confirmation to switch to AP mode. Please click **OK** to continue.

<img src="/img/daq/wifi-daq/wifi-daq-keep-to-ap-mode.png" alt="Keep AP Mode" width="600" />

## Step 3: Connect to Device Hotspot

Next, WDM will prompt you to switch your computer's Wi-Fi connection to the WIFI-DAQ's hotspot (AP).
Please manually connect your computer to the corresponding device AP, then click **OK** in the dialog box.

<img src="/img/daq/wifi-daq/wdm-auto-connect-to-wifidaq.png" alt="Auto Connect to WIFI-DAQ" width="600" />

## Step 4: Automatically Enter Configuration Page

After clicking OK, WDM will automatically open your web browser and redirect to the WIFI-DAQ configuration page (`192.168.4.1`).

<img src="/img/daq/wifi-daq/wdm-open-wifi-configuration-page.png" alt="Open WIFI Configuration Page" width="600" />

## Step 5: Configure New Wi-Fi

After entering the web page, please follow these steps to connect to the new router:

1. Select the **new router SSID** you want to connect to from the list (e.g., "WPC Systems 100").
2. Enter the Wi-Fi password for that router.
3. Click **Save** to save the settings.

<img src="/img/daq/wifi-daq/wifi-daq-ssid-list.png" alt="Wifi List" width="600" />

## Step 6: Reboot Device

After clicking Save, the device will automatically reboot and attempt to connect to the new router.
After rebooting, observe the LED status. If it turns **Blue** or **Green**, the switch was successful.
