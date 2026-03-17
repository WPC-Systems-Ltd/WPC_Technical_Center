---
title: USB Device Functions
sidebar_label: USB Device
sidebar_position: 4
description: "Inquire about pinout and update firmware"
---

## Refresh

Click the **"Refresh"** button to re-read and update device information.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_refresh.png" alt="WDM_USB_refresh" width="60%" />
</div>

---

## Pinout

Click the **"Pinout"** button to open the pinout definition window, allowing users to inquire about the functions of each pin. The window size can be freely adjusted.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_pinout.png" alt="WDM_USB_pinout" width="60%" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_pinout_detail.png" alt="WDM_USB_pinout_detail" width="60%" />
</div>

---

## Update Firmware

To update the USB device firmware, please follow these steps:

1.  Click the **"Update Firmware"** button.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_update_firmware.png" alt="WDM_USB_update_firmware" width="60%" />
    </div>


:::info
- ⚠️ Icon: Indicates that the current firmware version is outdated.
- ✅ Icon: Indicates that the current firmware is up to date.
:::

2.  A confirmation window will pop up; click **"OK"** to continue.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_update_confirm.png" alt="WDM_USB_update_confirm" width="60%" />
    </div>

3.  Select the corresponding firmware file (`.bin`) from the file browser.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_choose_bin.png" alt="WDM_USB_choose_bin" width="60%" />
    </div>

4.  Confirm the update again and click **"OK"** to start writing.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_confirm_bin.png" alt="WDM_USB_confirm_bin" width="60%" />
    </div>

5.  Wait for the progress bar to complete.

    <div style={{textAlign: 'center'}}>
      <img src="/WPC_Technical_Center/img/wpc_device_manager/usb/WDM_USB_updating.png" alt="WDM_USB_updating" width="60%" />
    </div>

:::danger
**Do not turn off the power or remove the USB connection** during the update process. If the update fails due to interruption, the device may malfunction and need to be returned to the factory for repair.
:::
