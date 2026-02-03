---
title: Analog Input Sampling Rate
sidebar_position: 5
---


### Multi-channel Max Sampling Rate

**Description:**
The analog input of this device uses a multiplexed architecture. When a single channel is enabled, it can reach the maximum sampling rate listed in the specification sheet (16k SPS). However, when multiple channels are enabled for scanning acquisition simultaneously, the total system bandwidth is shared by all enabled channels, causing the maximum available sampling rate per channel to decrease as the number of enabled channels increases.

It is recommended that users refer to the table below to check the corresponding maximum sampling frequency limit for a single channel based on the total number of channels to be enabled in the actual application, in order to plan an appropriate data acquisition strategy.

| Product Model / Enabled Channels |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :------------------------------- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| USB-DAQ-F1-AD                    | 16k  |  8k  | 5.3k |  4k  | 3.2k | 2.6k | 2.2k | 2.0k |
| USB-DAQ-F1-AOD                   | 16k  |  8k  | 5.3k |  4k  | 3.2k | 2.6k | 2.2k | 2.0k |

**Example:**
If you need to measure 3 channels simultaneously (e.g., AI0, AI1, AI2), the number of enabled channels is 3. From the table, we can see that the maximum sampling rate for each channel in this configuration is 5.3k Hz. This means you can set the system to acquire 5300 data points per second for each channel.
