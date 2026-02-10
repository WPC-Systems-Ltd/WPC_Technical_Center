---
sidebar_position: 6
sidebar_label: 'Servo Motor Wiring Examples'
description: Wiring diagram collection for position control mode of major brand servo drivers
---

# Common Servo Motor Wiring Examples

## 1. Control Mode Description

Servo motor drivers usually support multiple control modes, mainly including:
1.  **Position Control Mode**: Controls position via pulse commands.
2.  **Speed Control Mode**: Controls speed via analog voltage or commands.
3.  **Torque Control Mode**: Controls output torque via analog voltage.

Since Emotion is a **Pulse-Train Command** motion control card, it **only supports the "Position Control Mode" of servo drivers**.

:::info Speed Control
Although wiring must use position mode, users can still change the pulse transmission frequency through software to achieve precise **Velocity Mode** effects.
:::

---

## 2. Wiring Diagrams of Various Brands

The following provides standard wiring examples for mainstream servo drivers.
The **Red Box** in the figure indicates the important I/O signal points that must be connected to the axis card.

:::tip Setting Effective
After changing the driver parameter settings or wiring, be sure to **Power Cycle** the driver to ensure the settings take effect.
:::

### 2.1 Mitsubishi MR-J4 / JE
<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_31_img_X303.png" alt="Mitsubishi J4 Wiring" width="60%" />
</div>

### 2.2 Delta ASDA-B2
<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_32_img_X311.png" alt="Delta B2 Wiring" width="60%" />
</div>

### 2.3 Panasonic Minas A4 / A5 / A6
<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_33_img_X319.png" alt="Panasonic Wiring" width="60%" />
</div>

### 2.4 Yaskawa SGDV / SGD7
<div style={{textAlign: 'center'}}>
  <img src="/img/daq/stem/stem_page_34_img_X327.png" alt="Yaskawa Wiring" width="60%" />
</div>
