---
title: Analog Input Sampling Rate
sidebar_position: 5
description: "Relationship between enabled channels and individual channel max sampling rate (16kHz - 2kHz)"
---


### Multi-Channel Maximum Sampling Rate

**Description:**
The analog input of this device uses a multiplexed architecture. When a single channel is enabled, it can reach the maximum sampling rate listed in the specifications (16k SPS). However, when multiple channels are enabled for scan acquisition, the total system bandwidth is shared among all enabled channels, resulting in a decrease in the maximum per-channel sampling rate as the number of enabled channels increases.

Users are advised to refer to the table below, depending on the total number of channels to be enabled, to confirm the corresponding maximum per-channel sampling frequency limit for planning a suitable data acquisition strategy.

| Product Model / Enabled Channels |  1   |  2   |  3   |  4   |  5   |  6   |  7   |  8   |
| :------------------------------- | :--: | :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| USB-DAQ-F1-AD                    | 16k  |  8k  | 5.3k |  4k  | 3.2k | 2.6k | 2.2k | 2.0k |
| USB-DAQ-F1-AOD                   | 16k  |  8k  | 5.3k |  4k  | 3.2k | 2.6k | 2.2k | 2.0k |

**Example:**
If you need to measure 3 channels simultaneously (e.g., AI0, AI1, AI2), the number of enabled channels is 3. According to the table, in this configuration, the maximum sampling rate for each channel is 5.3k Hz. This means you can set each channel to acquire 5300 data points per second.
