---
sidebar_position: 6
sidebar_label: 'Servo Motor Wiring Examples'
description: Collection of position control mode wiring diagrams for various servo driver brands
---

# Servo Motor Wiring Examples

## 1. Control Mode Description

Servo motor drivers typically support multiple control modes, including:
1.  **Position Control Mode**: Controls position via pulse commands.
2.  **Speed Control Mode**: Controls rotational speed via analog voltage or commands.
3.  **Torque Control Mode**: Controls output torque via analog voltage.

Since Emotion is a **pulse-train command type** motion control card, it **only supports the "Position Control Mode"** of servo drivers.

:::info Speed Control
Although the wiring must use position mode, users can still achieve precise **Velocity Mode** control by changing the pulse transmission frequency via software.
:::

---

## 2. Wiring Diagrams by Brand

The following are standard wiring examples for major brands of servo drivers.
The **red boxes** in the diagrams highlight the critical I/O signal points that must be connected to the axis card.

:::info Applying Settings
After changing driver parameter settings or wiring, be sure to **power cycle** the driver to ensure the settings take effect.
:::

### 2.1 Mitsubishi MR-J4 / JE
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/example_Mitsubishi_MR_J4_JE.png').default} alt="Mitsubishi J4 Wiring" width="60%" />
</div>

### 2.2 Delta ASDA-B2
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/example_Delta_ASDA_B2.png').default} alt="Delta B2 Wiring" width="60%" />
</div>

### 2.3 Panasonic Minas A4 / A5 / A6
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/example_Panasonic_Minas_A4_A5_A6.png').default} alt="Panasonic Wiring" width="60%" />
</div>

### 2.4 Yaskawa SGDV / SGD7
<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/daq/stem/example_Yaskawa_SGDV_SGD7.png').default} alt="Yaskawa Wiring" width="60%" />
</div>

