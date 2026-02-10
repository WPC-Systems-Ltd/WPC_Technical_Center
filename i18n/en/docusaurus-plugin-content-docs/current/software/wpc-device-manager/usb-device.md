---
title: USB Device Functions
sidebar_label: USB Device Functions
sidebar_position: 4
description: "Query pinout and update firmware"
---

## Refresh

Click the **"Refresh"** button to reload and update device information.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/refresh.png" alt="Refresh USB Device" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to open the pin definition window for user to query each pin function. The window size can be adjusted freely.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/pinout.png" alt="Pinout Button" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/usb/pinout-detail.png" alt="USB-DAQ Pinout Example" width="60%" />
</div>

---

## Update Firmware

If you need to update the USB device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/update-firmware.png" alt="Update Firmware Button" width="60%" />
    </div>

    *   **⚠️ Icon**: Indicates that the current firmware version is old.
    *   **✅ Icon**: Indicates that the current firmware is the latest version.

2.  The system will pop up a confirmation window, click **"OK"** to continue.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/update-confirm.png" alt="Confirm Firmware Update" width="60%" />
    </div>

3.  Select the corresponding firmware file (`.bin`) in the file browser.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/choose-bin.png" alt="Select Firmware File" width="60%" />
    </div>

4.  Confirm the update again, click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/confirm-bin.png" alt="Start Updating Firmware" width="60%" />
    </div>

5.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src="/img/wpc_device_manager/usb/updating.png" alt="Firmware Updating" width="60%" />
    </div>

:::danger
**Do NOT turn off the power or unplug the USB connection** during the update process. If the update fails due to interruption, the device may not work and needs to be sent back to the factory for repair.
:::
