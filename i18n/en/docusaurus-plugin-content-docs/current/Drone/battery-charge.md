---
title: Battery Charging Tutorial
sidebar_position: 4
description: WPC Drone battery charging tutorial
---

## Battery Charging Tutorial

<div style={{textAlign: 'center'}}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/nEynb3iW2Kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge.png" alt="battery_charge" width="60%" />
</div>

## Introduction

The iMAX B6AC v2 is a processor-controlled charger compatible with most batteries, including:

1. Lithium-Polymer (LiPo)
2. Lithium-Ion (LiIon)
3. Lithium iron phosphate (LiFe)

Maximum charging current up to 6A or maximum power 50W.

## Battery Wiring

The battery charger kit includes a battery charger, power cord, and several charging adapter cables.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_battery_wiring_diagram.png" alt="Battery Wiring Diagram" width="60%" />
  Battery wiring diagram. Taken from the iMAX B6AC V2 Manual.
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_3S_balance_charging_port.png" alt="3S Battery Balancing Cable Location" width="60%" />
  3S Battery Balancing Cable Location
</div>

Charging/discharging the battery requires connecting the battery's charging/discharging cable and balancing cable to the charger, as shown in the image above.

## Battery Types

The iMAX B6AC v2 supports battery types including LiPo, LiIon, etc.

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_battery_type.png" alt="Battery Type" width="60%" />
  Battery Type
</div>

Switching Battery Type:
1. Press the BATT/PROG button to enter battery type mode.
2. Press the left and right buttons to switch battery types.
3. Press the ENTER button to confirm the selected battery type.

## Charging

The WPC Drone uses 3S batteries, meaning a battery pack of 3 batteries connected in series.

Therefore, the correct charging mode, charging current, and charging voltage need to be set to charge the battery.

## Select Balance Charging Mode

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_select_balance_charging_mode.png" alt="Select Balance Charging Mode" width="60%" />
  Select Balance Charging Mode
</div>

Press the left and right buttons on the initial screen to switch between charging and discharging modes.

For Lipo batteries, it is recommended to use Balance charging mode (BALANCE CHG).

## Setting the Charging Current

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_setting_charging_amp.png" alt="Set Charging Current" width="60%" />
  Setting the Charging Current
</div>

1. Press the ENTER button once on the initial screen. You will see the number below the Lipo logo flashing.
2. Press the left and right buttons to set the charging current to 2.0A.
3. Press the ENTER button twice to complete the setting.

<aside>

💡

The maximum charging current is usually 1~2C.

A 6500mAh battery has a maximum charging current of 6.5A.

A 2200mAh battery has a maximum charging current of 2.2A.

</aside>

## Setting Battery Voltage

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_setting_charging_amp.png" alt="Set Battery Voltage" width="60%" />
  Setting Battery Voltage
</div>

1. Press the ENTER button twice on the initial screen. You will see the number —.-V (-S) flashing.
2. Press the left and right buttons to set the number to 11.1V (3S).
3. Press the ENTER button once to complete the setting.

## Starting Charging

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_start_charging.png" alt="Start Charging" width="60%" />
  Start Charging
</div>

Confirmation Screen

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_charging.png" alt="Charging" width="60%" />
  Charging
</div>

<div style={{textAlign: 'center'}}>
  <img src="/WPC_Technical_Center/img/drone/battery_charge_charging_complete.png" alt="Charging Complete" width="60%" />
  Charging Complete
</div>

1. Press and hold the ENTER button on the initial screen.
2. After seeing "CONFIRM (ENTER)", briefly press the ENTER button again to start charging.
3. After charging is complete, you can see the total charging time, battery voltage, and charge amount.

# Storage

If the battery will not be used for an extended period, it is recommended to discharge it to a storage voltage of 3.8V/cell for better long-term preservation.

- Setting Mode
  1. Press the left and right buttons on the initial screen to set the mode to STORAGE.
- Setting Current
  1. Press the ENTER button once on the initial screen. You will see the numbers below the Lipo logo flashing.
  2. Press the left and right buttons to set the charging current to 2.0A.
- Setting Voltage
  1. Press the ENTER button again. You will see the numbers —.-V(-S) flashing.
  2. Press the left and right buttons to set the number to 11.1V(3S).
  3. Press the ENTER button once to complete the setting.
- Discharging
  1. Press and hold the ENTER button on the initial screen.
  2. After seeing the CONFIRM (ENTER) logo, press the ENTER button briefly to begin discharging.