---
title: Network Setup (AP Mode)
sidebar_position: 3
---

# Network Setup (AP Mode)

If your WIFI-DAQ cannot connect to the default router (e.g., changed environment or first-time use), the device will automatically enter **AP Mode (Access Point Mode)**. Please follow the steps below to reset the network.

## Step 1: Check Device Status

When the WIFI-DAQ is powered on, if it continuously shows a **Red LED**, it means the device is in AP mode and waiting for configuration.

<img src="/img/daq/wifi-daq/wifi-daq-change-domain-ip.png" alt="AP Mode" width="600" />

## Step 2: Connect Computer to Device

1. Open your computer's Wi-Fi list.
2. Search for and connect to the network named **`WPC_DAQ_xxxxxx`** (xxxxxx is the device's unique identifier, e.g., `WPC_DAQ_62e814`).

<img src="/img/daq/wifi-daq/wifi-daq-ap-mode-pc-connect.png" alt="Connect to WIFI-DAQ" width="400" />

> [!NOTE]
> It is normal for the computer to have no internet connection at this time. Please maintain the connection to access the configuration page.

## Step 3: Enter Configuration Page

1. Open a web browser (Chrome, Edge, etc.).
2. Enter **`192.168.4.1`** in the address bar and press Enter.
3. You will see the WIFI-DAQ configuration interface.

<img src="/img/daq/wifi-daq/wifi-daq-browser.png" alt="Web Config" width="600" />

## Step 4: Configure Wi-Fi

1. Select the router (SSID) you want to connect to from the list.
2. Enter the password for that Wi-Fi.
3. Click **Save** to save the settings.

<img src="/img/daq/wifi-daq/wifi-daq-ssid-list.png" alt="Wifi List" width="600" />

> [!IMPORTANT]
> - Please ensure the Wi-Fi password entered is correct.
> - WIFI-DAQ only supports the 2.4GHz band; please do not connect to a 5GHz network.

## Step 5: Reboot Device

After completing the settings (clicking Save), the WIFI-DAQ will automatically reboot.

- After powering on again, if the connection is successful, the LED will turn **Green** (Idle) or **Blue** (Connected).
- If the LED remains red, please repeat the above steps and check if the Wi-Fi password was entered incorrectly.

> 💡 For detailed LED status meanings, please refer to **[LED Status Description](./intro.md#led-status-description)**.
