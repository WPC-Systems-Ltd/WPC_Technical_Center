---
sidebar_position: 17
sidebar_label: 'Servo Drive'
---

# Servo Drive

The **WPC-EDrive-SRV** is a single-axis servo motor integrated driver with a network interface. Through the Servo Drive panel, users can intuitively set driver parameters, perform motor auto-tuning procedures, and conduct motion control tests.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_connect.png').default} alt="WDM_testPanel_srv_connect" width="60%" />
</div>

## System Configuration

Provides driver configuration file management and firmware update functions.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_file_config.png').default} alt="WDM_testPanel_srv_file_config" width="60%" />
</div>

| Button Function     | Description                                                  |
| :------------------ | :----------------------------------------------------------- |
| **Import file**     | Import a previous driver configuration file (*.ini).         |
| **Export file**     | Export and backup the current driver parameters.             |
| **Restore default** | Reset driver parameters to factory default values.           |
| **Update firmware** | Update the firmware (Firmware) **inside the driver**.        |

:::tip
Note: The update here is for the driver itself; if it is an update for the WPC Device Manager software interface, please go through the general software update process.
:::

## Control Tuning

To obtain the best motor control performance, it is recommended to perform the following tuning steps in sequence when installing for the first time or replacing the motor:

### Step 1. Select Motor Model

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_fill_motor.png').default} alt="WDM_testPanel_srv_fill_motor" width="60%" />
</div>

Please select your motor model from the `Model No.` drop-down menu. The system will automatically fill in the corresponding rated specifications (torque, current, frequency, speed, etc.).
If your model is not in the menu, please manually enter the parameters according to the motor nameplate.

:::info
Panasonic series motor models are usually marked on a sticker on the side of the motor.
:::

### Step 2. Confirm Electrical Parameters

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_config_electric_param.png').default} alt="WDM_testPanel_srv_config_electric_param" width="60%" />
</div>

Displays detailed electrical parameters of the motor (such as phase resistance, phase inductance). If the model has been correctly selected in the previous step, no modification is usually needed here; click **Next** to continue.

### Step 3. Release Brake

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_release_break.png').default} alt="WDM_testPanel_srv_release_break" width="60%" />
</div>

If your motor is equipped with a brake mechanism, please release the brake according to the instructions to ensure that the motor shaft can rotate freely. For detailed wiring, please refer to the **WPC-EDrive-SRV Hardware User Manual**.

### Step 4. System Identification - Electrical Characteristics (Electrical ID)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_system_identify.png').default} alt="WDM_testPanel_srv_system_identify" width="60%" />
</div>

Automatically measure the actual phase resistance and inductance values of the motor.

1. Set **Target Current** (at least 0.5A recommended).
2. Press **Run**.
3. The motor will rotate slightly and lock; after about 2 seconds, a long "beep" sound will be emitted, and the detection status will show a checkmark, indicating success.

:::caution
Note: The Target Current setting value must not exceed the maximum allowable current of the motor to avoid damaging the motor.
:::

### Step 5. System Identification - Mechanical Characteristics Description

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_system_identify_mechnical.png').default} alt="WDM_testPanel_srv_system_identify_mechnical" width="60%" />
</div>

This page is a description page; please click **Next** to continue.

### Step 6. System Identification - Perform Mechanical Identification (Mechanical ID)

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_perform_sustem.png').default} alt="WDM_testPanel_srv_perform_sustem" width="60%" />
</div>

Automatically measure mechanical parameters such as load inertia and viscosity coefficient.

**Operation Steps:**
1. Press **Servo On** to excite the motor.
2. Manually test and set a **Torque** value that can make the motor rotate.
3. Operate the buttons to move the motor to the **Start Position**.
4. Operate the buttons to move the motor to the **End Position**. **⚠️ Please ensure there is no mechanical interference within the movement range.**
5. Press **Start identification**.
6. The motor will test back and forth between the start position and the end position, and automatically adjust the output.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_fitting.png').default} alt="WDM_testPanel_srv_fitting" width="60%" />
</div>

**Result Interpretation:**
*   **Fitting Curve (Top Right Chart)**: The orange dashed line should be close to the blue solid line. If there is a significant drift, it may represent an unbalanced mechanical weight (due to gravity).
*   **R Square (Data on the Left)**: Fitting index. If it is greater than **80%**, it can be regarded as success; please press **Next** to continue.

### Step 7. Set Controller Bandwidth

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_controller_bandwidth.png').default} alt="WDM_testPanel_srv_controller_bandwidth" width="60%" />
</div>

Adjust the response bandwidth (Bandwidth) of the motor.

*   **Higher Bandwidth**: Faster response, stronger rigidity, more accurate positioning.
*   **Too High Bandwidth**: May trigger mechanical resonance and noise.

After setting, press **Next**, and the system will ask whether to save. Selecting **Yes** will write the parameters to the driver and backup the configuration file to `(WDM path)\data\ServoTune\data\Configs\`.

## Advanced Functions

### Friction Compensation

For short-stroke, high-precision movement requirements, this function can be turned on to eliminate the "Stick-Slip" phenomenon caused by static friction (i.e., hysteresis at startup or pause at turning points).

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_friction_compensation2.png').default} alt="WDM_testPanel_srv_friction_compensation2" width="60%" />
</div>

**Setting Steps:**
1. **Round Trip Test**: Set Amplitude and Frequency, and execute **Round trip**.
2. **Enable Compensation**: Set **Pos bound** (recommended as 1/10 of amplitude) and **Switching gain** (default 0.95).
3. **Fine-tuning**: Enable **Enable** and observe the error curve. If there is still an impact, you can fine-tune Pos bound or increase the control bandwidth.

### Adaptive Notch Filter

Used to suppress mechanical resonance (Resonance). When the motor drives a belt or cantilever structure, if a humming sound of a specific frequency is generated, this function can be used.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_notch_filter.png').default} alt="WDM_testPanel_srv_notch_filter" width="60%" />
</div>

**Operation Steps:**
1. Let the motor perform a round trip movement (**Round trip**) to induce resonance sounds.
2. Click **Enable ANF** to turn on the filter.
3. Click **Frequency estimator** to start detecting the resonance frequency. Observe the bottom right chart; the frequency should converge to a certain value.
4. Click **Suppress vibration** to execute suppression. The resonance sound should become significantly smaller or disappear.
5. If the sound disappears, turn off the estimator and save the settings.

## Other Protection Settings

### Current Protection

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_current_protection.png').default} alt="WDM_testPanel_srv_current_protection" width="60%" />
</div>

Set the over-current protection mechanism to prevent the motor from burning out due to stall or machine collision.

| Parameter                    | Description                                                  |
| :--------------------------- | :----------------------------------------------------------- |
| **Peak current limit**       | The allowed maximum instantaneous current value.             |
| **Continuous current limit** | The allowed upper limit of sustained current (average value). |
| **Saturation current**       | The absolute saturation current upper limit output by the driver. |

### In-Position

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/wpc_device_manager/testPanel/WDM_testPanel_srv_inposition.png').default} alt="WDM_testPanel_srv_inposition" width="60%" />
</div>

Define the trigger conditions for the "In-Position" signal.

| Parameter               | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| **In range [deg]**      | Allowable position error range.                              |
| **In range time [sec]** | The duration the position error must stay within the range to be considered truly in position. |
