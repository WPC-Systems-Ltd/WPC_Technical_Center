---
title: Network Connection Setup (AP Mode)
sidebar_position: 3
description: "Wi-Fi setup process for first-time use or environmental change: Connect to device hotspot (192.168.4.1) -> Select router -> Save and restart"
---

# Network Connection Setup (AP Mode)

If your WIFI-DAQ cannot connect to the default router (e.g., when changing environments or for first-time use), the device will automatically enter **AP Mode (Access Point Mode)**. Please follow the steps below to reconfigure the network.

## Step 1: Verify Device Status

If the WIFI-DAQ displays a **solid red LED** after power-up, it means the device is in AP mode, waiting for configuration.

<img src={require('@site/static/img/daq/wifi-daq/wifi-daq-change-domain-ip.png').default} alt="AP Mode" width="600" />

## Step 2: Connect Computer to Device

1. Open your computer's Wi-Fi list.
2. Search for and connect to the network named **`WPC_DAQ_xxxxxx`** (xxxxxx is the unique device identifier, e.g., `WPC_DAQ_62e814`).

<img src={require('@site/static/img/daq/wifi-daq/wifi-daq-ap-mode-pc-connect.png').default} alt="Connect to WIFI-DAQ" width="400" />

:::tip
It is normal for the computer to be unable to access the internet at this time; please maintain the connection to access the configuration page.
:::


## Step 3: Enter Configuration Page

1. Open a web browser (Chrome, Edge, etc.).
2. Enter **`192.168.4.1`** in the address bar and press Enter.
3. You will see the WIFI-DAQ configuration interface.

<img src={require('@site/static/img/daq/wifi-daq/wifi-daq-browser.png').default} alt="Web Config" width="600" />

## Step 4: Configure Wi-Fi

1. Select the router (SSID) you want to connect to from the list.
2. Enter the Wi-Fi password.
3. Click **Save** to store the settings.

<img src={require('@site/static/img/daq/wifi-daq/wifi-daq-ssid-list.png').default} alt="Wifi List" width="600" />

:::warning
- Ensure the Wi-Fi password entered is correct.
- WIFI-DAQ only supports the 2.4GHz frequency band; do not connect to a 5GHz network.
:::

## Step 5: Restart the Device

After completing the configuration (clicking Save), the WIFI-DAQ will automatically restart.

- After power cycling, if the configuration is successful, the LED will turn **green** (standby) or **blue** (connected).
- If the LED remains red, please repeat the steps above and check if the Wi-Fi password was entered incorrectly.

:::info
For a detailed explanation of the LED indicators, please refer to **[Appearance and LED Status](./led_status.md)**.
:::

