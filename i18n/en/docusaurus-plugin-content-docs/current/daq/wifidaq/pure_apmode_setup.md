---
title: Network Setup (AP Mode)
sidebar_position: 3
---

# Network Setup (AP Mode)

If your WIFI-DAQ cannot connect to the default router (e.g., changed environment or first-time use), the device will automatically enter **AP Mode (Access Point Mode)**. Please follow the steps below to reconfigure the network.

## Step 1: Check Device Status

When the WIFI-DAQ is powered on, if it continuously shows a **Red LED**, it means the device is in AP Mode awaiting configuration.

<img src="/img/daq/wifi-daq/wifi-daq-change-domain-ip.png" alt="AP Mode" width="600" />

## Step 2: Connect PC to Device

1. Open the Wi-Fi list on your computer.
2. Search for and connect to the network named **`WPC_DAQ_xxxxxx`** (xxxxxx is the device unique ID, e.g., `WPC_DAQ_62e814`).

<img src="/img/daq/wifi-daq/wifi-daq-ap-mode-pc-connect.png" alt="Connect to WIFI-DAQ" width="400" />

:::note
It is normal that your computer cannot access the internet at this time. Please maintain the connection to access the settings page.
:::

## Step 3: Enter Configuration Page

1. Open a web browser (Chrome, Edge, etc.).
2. Enter **`192.168.4.1`** in the address bar and press Enter.
3. You will see the WIFI-DAQ configuration interface.

<img src="/img/daq/wifi-daq/wifi-daq-browser.png" alt="Web Config" width="600" />

## Step 4: Configure Wi-Fi

1. Select the router (SSID) you want to connect to from the list.
2. Enter the Wi-Fi password.
3. Click **Save** to save settings.

<img src="/img/daq/wifi-daq/wifi-daq-ssid-list.png" alt="Wifi List" width="600" />

:::warning
- Please ensure the Wi-Fi password is correct.
- WIFI-DAQ only supports the 2.4GHz band; do not connect to a 5GHz network.
:::

## Step 5: Reboot Device

After completing the setup (Clicking Save), the WIFI-DAQ will automatically reboot.

- After powering on again, if the setup is successful, the LED will turn **Green** (Standby) or **Blue** (Connected).
- If the LED remains Red, please repeat the above steps and check if the Wi-Fi password was incorrect.

> 💡 For detailed LED status meanings, please refer to **[LED Status Description](./led_status.md#led-status-description)**.
