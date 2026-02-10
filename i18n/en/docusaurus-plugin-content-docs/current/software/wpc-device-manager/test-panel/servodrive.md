---
sidebar_position: 17
sidebar_label: 'Servo Drive'
---

# Servo Drive

**WPC-EDrive-SRV** is a single-axis servo motor integrated driver with a network interface. Through the Servo Drive panel, users can intuitively configure driver parameters, execute motor auto-tuning procedures, and perform motion control tests.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-connect.png" alt="Servo Drive Connect" width="60%" />
</div>

## System Configuration

Provides driver configuration file management and firmware update functions.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-file-config.png" alt="System Configuration" width="60%" />
</div>

| Button Function | Description |
| :--- | :--- |
| **Import file** | Import previous driver configuration file (*.ini). |
| **Export file** | Export and backup current driver parameters. |
| **Restore default** | Reset driver parameters to factory default values. |
| **Update firmware** | Update the firmware **inside the driver**. |

:::tip
Note: The update here is for the driver itself; if it is an update for the WPC Device Manager software interface, please proceed through the general software update process.
:::

## Control Tuning

To obtain the best motor control performance, it is recommended to execute the following tuning steps in order when installing for the first time or replacing the motor:

### Step 1. Select Motor Model

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-fill-motor.png" alt="Fill motor specification" width="60%" />
</div>

Please select your motor model from the `Model No.` drop-down menu. The system will automatically fill in the corresponding rated specifications (torque, current, frequency, speed, etc.).
If your model is not in the menu, please manually enter the parameters according to the motor Nameplate.

:::info
The model number of Panasonic series motors is usually marked on the sticker on the side of the motor.
:::

### Step 2. Confirm Electrical Parameters

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-config-electric-param.png" alt="Configure electric parameter" width="60%" />
</div>

Displays detailed electrical parameters of the motor (such as phase resistance, phase inductance). If the model was selected correctly in the previous step, modification is usually not required here. Click **Next** to continue.

### Step 3. Release Brake

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-release-break.png" alt="Release brake" width="60%" />
</div>

If your motor is equipped with a Brake mechanism, please follow the instructions to release the brake to ensure the motor shaft can rotate freely. For detailed wiring, please refer to the **WPC-EDrive-SRV Hardware User Manual**.

### Step 4. System Identification - Electrical Characteristics (Electrical ID)

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-system-identify.png" alt="System Identification Electrical" width="60%" />
</div>

Automatically measure the actual phase resistance and inductance values of the motor.

1. Set **Target Current** (Recommended at least 0.5A).
2. Press **Run**.
3. The motor will rotate slightly and lock. After about 2 seconds, a long "beep" sound is emitted, and a check mark is displayed in the detection status, indicating success.

:::caution
Note: The Target Current setting must not exceed the maximum allowable current of the motor to avoid damaging the motor.
:::

### Step 5. System Identification - Mechanical Characteristics Description

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-system-identify-mechnical.png" alt="System Identification Mechanical" width="60%" />
</div>

This page is an introduction page, please click **Next** to continue.

### Step 6. System Identification - Execute Mechanical ID

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-perform-sustem.png" alt="Perform System Identification Mechanical" width="60%" />
</div>

Automatically measure mechanical parameters such as load inertia and viscous coefficient.

**Operation Steps:**
1. Press **Servo On** to excite the motor.
2. Manually test and set a **Torque** value that can make the motor rotate.
3. Use buttons to move the motor to the **Start Position**.
4. Use buttons to move the motor to the **End Position**. **⚠️ Please ensure there is no mechanical interference within the movement range.**
5. Press **Start identification**.
6. The motor will test back and forth between the start and end points and automatically adjust the output.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-fitting.png" alt="Fitting Result" width="60%" />
</div>

**Result Interpretation:**
*   **Fitting Curve (Top Right Chart)**: The orange dashed line should be close to the blue solid line. If it drifts significantly, it may indicate unbalanced mechanical weight distribution (gravity effect).
*   **R Square (Left Data)**: Goodness of fit index. If it is greater than **80%**, it can be considered successful. Please press **Next** to continue.

### Step 7. Set Controller Bandwidth

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-controller-bandwidth.png" alt="Configure Controller Bandwidth" width="60%" />
</div>

Adjust the response bandwidth of the motor.

*   **Higher Bandwidth**: Faster response, stronger rigidity, more precise positioning.
*   **Bandwidth Too High**: May cause mechanical resonance and noise.

After setting, press **Next**. The system will ask whether to save. Select **Yes** to write parameters to the driver and backup the configuration file to `(WDM Path)\data\ServoTune\data\Configs\`.

## Advanced Functions

### Friction Compensation

For short-stroke, high-precision movement requirements, this function can be enabled to eliminate the "Stick-Slip" phenomenon caused by static friction (i.e., lag at start or pause at turning points).

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-friction-compensation2.png" alt="Friction Compensation" width="60%" />
</div>

**Setting Steps:**
1. **Round Trip Test**: Set Amplitude and Frequency, execute **Round trip**.
2. **Enable Compensation**: Set **Pos bound** (Recommended 1/10 of amplitude) and **Switching gain** (Default 0.95).
3. **Fine-tuning**: Enable **Enable**, observe the error curve. If there is still influence, fine-tune Pos bound or increase control bandwidth.

### Adaptive Notch Filter

Used to suppress mechanical resonance. When the motor drives a belt or cantilever structure, if a humming sound of a specific frequency is generated, this function can be used.

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-notch-filter.png" alt="Adaptive Notch Filter" width="60%" />
</div>

**Operation Steps:**
1. Let the motor perform **Round trip** movement to induce resonance sound.
2. Click **Enable ANF** to turn on the filter.
3. Click **Frequency estimator** to start detecting resonance frequency. Observe the chart on the bottom right, the frequency should converge to a certain value.
4. Click **Suppress vibration** to execute suppression. The resonance sound should become significantly smaller or disappear.
5. If the sound disappears, close the estimator and save the settings.

## Other Protection Settings

### Current Protection

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-current-protection.png" alt="Current Protection" width="60%" />
</div>

Set overcurrent protection mechanism to prevent the motor from burning out due to stalling or collision.

| Parameter | Description |
| :--- | :--- |
| **Peak current limit** | The maximum allowable instantaneous current value. |
| **Continuous current limit** | The maximum allowable continuous current (average). |
| **Saturation current** | The absolute saturation current limit of the driver output. |

### In-Position

<div style={{textAlign: 'center'}}>
  <img src="/img/wpc_device_manager/testPanel/srv-inposition.png" alt="Inposition" width="60%" />
</div>

Define the trigger condition for the "In-Position" signal.

| Parameter | Description |
| :--- | :--- |
| **In range [deg]** | Allowable position error range. |
| **In range time [sec]** | The duration the position error needs to remain within the range to be considered truly in position. |
