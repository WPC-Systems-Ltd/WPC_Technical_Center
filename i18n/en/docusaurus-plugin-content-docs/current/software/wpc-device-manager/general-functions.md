---
title: General Functions
sidebar_label: General Functions
sidebar_position: 3
description: "Device search, adding simulated devices, and LED identification functions"
---

## Search and Refresh

WDM provides an automatic search function that can scan for WPC devices within the network. To manually update the list, please perform the following operations based on the device type:

*   **USB Devices**: Move the mouse cursor to the **"My Computer"** area, right-click, and select **"Refresh My Computer"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/WDM_refresh_computer.png').default} alt="WDM_refresh_computer" width="60%" />
    </div>

*   **Network Devices**: Move the mouse cursor to the **"Network"** area, right-click, and select **"Refresh Network"**.

    <div style={{textAlign: 'center'}}>
      <img src={require('@site/static/img/wpc_device_manager/WDM_refresh_network.png').default} alt="WDM_refresh_network" width="60%" />
    </div>

:::caution
If you cannot find your network device in the list, please confirm that the IP addresses of the host computer and the device are within the **same subnet**.
:::

---

## Adding Simulated Devices

WDM supports simulated device functions, allowing users to preview pinouts and test panel functions without physical hardware.

**Operating Steps:**

1.  Click **"View"** in the menu bar.
2.  Select **"Add Simulated Device"**.
3.  Choose the model you wish to simulate from the device list that pops up (hold the **Ctrl key** to multi-select).
4.  Click **"OK"** to confirm adding.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/WDM_add_simulated_device.png').default} alt="WDM_add_simulated_device" width="60%" />
</div>

---

## Identify Network Devices

When multiple network devices are connected simultaneously, specific devices can be quickly identified using the LED blinking function.

**Operating Steps:**

1.  In the **"Network device list"**, move the mouse cursor to the target device.
2.  Right-click and select **"Toggle Blink State"**.
3.  The LED indicator on that device will then begin to blink rapidly.
4.  To stop blinking, please select **"Toggle Blink State"** again or click the option to cancel.

:::info
This function only supports WPC Ethan series products.
:::

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/WDM_toggle_blink.png').default} alt="WDM_toggle_blink" width="60%" />
</div>
