---
title: General Functions
sidebar_label: General Functions
sidebar_position: 3
description: "Device search, simulated device addition and LED identification function"
---

## Search and Refresh

WDM provides automatic search function to scan WPC devices in the domain. If you need to manually update the list, please perform the following operations according to the device type:

*   **USB Device**: Move the mouse cursor to the **"My Computer"** area, right-click and select **"Refresh My Computer"**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/refresh-my-computer.png" alt="Refresh USB Device" width="60%" />
    </div>

*   **Network Device**: Move the mouse cursor to the **"Network"** area, right-click and select **"Refresh Network"**。

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/refresh-network.png" alt="Refresh Network Device" width="60%" />
    </div>

:::caution
If you cannot find your network device in the list, please confirm whether the IP addresses of the computer host and the device are in **the same subnet**.
:::

---

## Add Simulated Device

WDM supports simulated device function, allowing users to preview the Pinout and test panel functions without physical hardware.

**Steps:**

1.  Click **"View"** in the menu bar.
2.  Select **"Add Simulated Device"**.
3.  Select the model you want to simulate in the pop-up device list (you can hold down **Ctrl key** to select multiple).
4.  Click **"OK"** to confirm addition.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/add-simulated-device.png" alt="Add Simulated Device" width="60%" />
</div>

---

## Identify Network Device

When multiple network devices are connected at the same time, specific devices can be quickly identified through the LED blinking function.

**Steps:**

1.  In **"Network device list"**, move the mouse cursor to the target device.
2.  Right-click and select **"Toggle Blink State"**.
3.  At this time, the LED indicator on the device will start blinking rapidly.
4.  If you want to stop blinking, please select **"Toggle Blink State"** again or click the option to cancel.

:::note
This function only supports WPC network series devices.
:::

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/toggle-blink.png" alt="Identify Network Device LED" width="60%" />
</div>
