---
sidebar_position: 7
sidebar_label: 'DPOT'
---

# DPOT

The DPOT (Digital Potentiometer) panel provides users with control over digital variable resistors, which can be applied to analog circuit parameter adjustment or sensor simulation.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_dpot.png').default} alt="WDM_testPanel_dpot" width="60%" />
</div>

## Supported Products

| Product Name                                            | Description                                         |
| :-------------------------------------------------- | :------------------------------------------- |
| [`Ethan-P`](../../../daq/ethan/products/ethan-p.md) | 4-channel digital variable resistor output (Range: `300 ~ 50k Ω`) |

## Operation Description

You can set the resistance value directly through the input box in the interface or adjust it using the slider.

### Control Buttons

| Button           | Function                           |
| :------------- | :----------------------------- |
| **Start**      | Enable DPOT control function.           |
| **Stop**       | Disable DPOT control function.           |
| **Update**     | Write the set resistance value to the specified channel. |
| **Set all to** | Set all channels to a unified value.     |
