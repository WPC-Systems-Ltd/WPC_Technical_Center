---
sidebar_position: 8
sidebar_label: 'Specifications'
---

# Specifications

## Pulse Command Output

| Item              | Specification                                                 |
| :---------------- | :------------------------------------------------------------ |
| **No. of Axes**   | 4 axes                                                        |
| **Control Type**  | Open loop or P-command                                        |
| **Control Mode**  | Absolute, Relative, Velocity modes                            |
| **Signal Type**   | RS-422 or Line-driver output                                  |
| **Output Mode**   | Step/Direction or CW/CCW                                      |
| **Max Frequency** | 8 MHz                                                         |
| **Voltage Range** | 0 ~ 5V opto-isolated                                          |
| **Effective State**| Programmable (Active High / Active Low)                       |
| **Trajectory**    | S-curve, Position, Blending, Velocity Blending                |
| **Contouring**    | 2D, 3D Contouring                                             |
| **Interpolation** | Linear, Circular, Helical interpolation                       |

## Encoder Input

| Item              | Specification                                                |
| :---------------- | :----------------------------------------------------------- |
| **No. of Axes**   | 4 axes                                                        |
| **Sensor Type**   | Quadrature encoder: A, B, Z                                  |
| **Signal Type**   | Differential (RS-422 compatible)                             |
| **Max Frequency** | 10 MHz                                                       |
| **Voltage Range** | 0 ~ 5V opto-isolated                                         |

## Limit Switch Input

| Item              | Specification                                               |
| :---------------- | :---------------------------------------------------------- |
| **Sensor Type**   | Forward, Reverse, Home                                      |
| **Input Quantity**| 12 (3 per axis)                                             |
| **Signal Type**   | Sinking or Sourcing (set via 0R resistor on breakout board)  |
| **Voltage Level** | 24V                                                         |
| **Effective State**| Programmable (Active High / Active Low)                       |

## Servo On Output

| Item              | Specification                                               |
| :---------------- | :---------------------------------------------------------- |
| **Output Type**   | Open-collector output (NPN or PNP)                          |
| **Output Quantity**| 4 (1 per axis)                                              |
| **Signal Type**   | Sinking or Sourcing (set via 0R resistor on breakout board)  |
| **Voltage Level** | 24V                                                         |
| **Current Range** | Max 400mA                                                   |
| **Effective State**| Programmable (Active High / Active Low)                       |

## Alarm Clear Output

| Item              | Specification                                               |
| :---------------- | :---------------------------------------------------------- |
| **Output Type**   | Open-collector output (NPN or PNP)                          |
| **Output Quantity**| 4 (1 per axis)                                              |
| **Signal Type**   | Sinking or Sourcing (set via 0R resistor on breakout board)  |
| **Voltage Level** | 24V                                                         |
| **Current Range** | Max 400mA                                                   |
| **Effective State**| Programmable (Active High / Active Low)                       |

## Breakpoint Output

| Item              | Specification                                               |
| :---------------- | :---------------------------------------------------------- |
| **Signal Type**   | TTL output                                                  |
| **Output Quantity**| 4 (1 per axis)                                              |
| **Transmission**  | Single-ended                                                |
| **Max Frequency** | 1 MHz                                                       |
| **Voltage Range** | 0 ~ 5V opto-isolated                                        |

## Position Capture Input

| Item              | Specification                                               |
| :---------------- | :---------------------------------------------------------- |
| **Signal Type**   | TTL input                                                   |
| **Input Quantity**| 4 (1 per axis)                                              |
| **Transmission**  | Single-ended                                                |
| **Max Frequency** | 1 MHz                                                       |
| **Voltage Range** | 0 ~ 5V opto-isolated                                        |
