---
sidebar_position: 12
sidebar_label: 'Motion'
---

# Motion

Motion panel provides a complete axis control function test environment. You can monitor axis card status in real-time, set I/O parameters, execute homing (Find Reference), and directly issue motion commands to control motors.

In addition, the panel supports saving current settings as configuration files (*.INI) for quick loading in subsequent program development.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/motion.png" alt="Motion Test Panel" width="60%" />
</div>

## Real-time Status Monitor

The upper area of the panel displays real-time status information for each axis:

| Status LED/Value | Description |
| :--- | :--- |
| **Logical Pos** | Logical Position (Accumulated pulse position output by the axis card). |
| **Encoder Pos** | Actual position fed back by Encoder. |
| **F** | Forward Limit switch trigger status. |
| **R** | Reverse Limit switch trigger status. |
| **H** | Home switch trigger status. |
| **INP** | In-Position signal, indicating whether the motor has reached the target position. |
| **ALM** | Alarm signal, indicating whether the driver has an error. |
| **Stop(Red)/Start(Green)** | Motor running status indication. |

## Function Toolbar

| Icon | Function Description |
| :--- | :--- |
| <img src="/img/wpc_device_manager/testPanel/open-config-panel.png" width="30" /> | **Open Configuration Panel**: Open motion control I/O setting panel. |
| <img src="/img/wpc_device_manager/testPanel/servo-on-off.png" width="30" /> | **Servo On/Off**: Toggle servo excitation status. |
| <img src="/img/wpc_device_manager/testPanel/halt.png" width="30" /> | **Halt**: Emergency stop motor operation. |
| <img src="/img/wpc_device_manager/testPanel/move.png" width="30" /> | **Interactive Control**: Open interactive motion control panel. |
| <img src="/img/wpc_device_manager/testPanel/reset.png" width="30" /> | **Reset Position**: Reset logical position count to 0. |

## Configuration Panel

After clicking the settings icon, you can configure detailed I/O behavior for the axis card:

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/motion-config.png" alt="Motion I/O config panel" width="60%" />
</div>

| Parameter Setting | Option | Description |
| :--- | :--- | :--- |
| **Stepper Output** | `Step/Dir` (1P)<br/>`CW/CCW` (2P) | Set pulse output mode: Single pulse or Dual pulse. |
| **Axis Direction** | `Original`<br/>`Inverse` | Set motor rotation direction. |
| **Encoder Direction** | `Original`<br/>`Inverse` | Set encoder counting direction. |
| **Servo On Polarity** | `Active Low`<br/>`Active High` | Set Servo On signal polarity. |
| **Encoder Ring** | `Disable`<br/>`Enable` | Enable or disable ring counter mode. |
| **Step Per Revolution**| (Value) | Set the number of pulses required for one motor revolution. |
| **Encoder Divisor** | (Value) | Set encoder frequency division ratio. |
| **Limit Protection** | `Disable`<br/>`Enable` | Enable Forward/Reverse limit protection respectively. |
| **Signal Polarity** | `Active Low`<br/>`Active High` | Set polarity for Forward, Reverse, Home, Index, Alarm, In-position signals. |
| **Limit Stop Type** | `Decelerate`<br/>`Halt` | Set stop method when limit is triggered (Decelerate stop or Immediate halt). |
| **Apply All** | (Button) | Apply current settings to all axes. |

## Interactive Control and Testing

### 1. Simple Move

Provides basic PTP (Point-to-Point) movement test function.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/simple-move.png" alt="Simple Move" width="60%" />
</div>

| Parameter | Description |
| :--- | :--- |
| **Operation Mode**| Movement mode selection:<br/>• **Absolute**: Absolute position movement<br/>• **Relative**: Relative position movement<br/>• **Velocity**: Speed mode (Continuous operation) |
| **Target Position**| Set target position (Step). |
| **Velocity** | Set running speed (Step/sec). |
| **Accel / Decel** | Set acceleration and deceleration (Step/sec²). |
| **Blend** | Used to update target position or speed in real-time during operation. |
| **Run / Stop** | Start or stop motor operation. |

### 2. Find Reference

Execute automatic homing procedure.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/find-ref.png" alt="Find Ref" width="60%" />
</div>

| Parameter | Description |
| :--- | :--- |
| **Target Mode** | Select reference point type: Home, Forward Limit, Reverse Limit, or Index. |
| **Search Direction**| Set initial search direction. |
| **Velocity Profile**| Set search speed, acceleration, and approach velocity. |
| **Offset Position**| Offset movement amount after finding home. |
| **Reset Position**| Whether to reset position to zero after finding. |
| **Find / Stop** | Execute or stop homing action. |
| **State** | Show current status: Idle, Finding, Found. |
