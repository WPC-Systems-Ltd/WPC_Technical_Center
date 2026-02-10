---
title: Update myRIO Firmware and Software
sidebar_position: 5
description: Guide to updating myRIO firmware and software for different LabVIEW version environments
---

# Update myRIO Firmware and Software

Before starting the update procedure, please confirm the number of LabVIEW versions installed on your computer and choose the appropriate operating steps according to the following scenarios.

<div style={{textAlign: 'center'}}>
  <img src="/img/drone/faq5.png" alt="faq5" width="60%" />
</div>

## Scenario 1: Single LabVIEW Version

If your computer has only one version of LabVIEW installed, it is recommended to use the **myRIO Getting Started Wizard** for integrated updates.

### Steps
1. Launch **myRIO Getting Started Wizard**.
2. Follow the guided interface to update Firmware and Software simultaneously.
3. For detailed procedures, please refer to the official guide:
    - [Upgrading Firmware on My myRIO NI Linux Real-Time Device](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A4LSAU&l=en-US)

## Scenario 2: Multiple LabVIEW Versions

If your computer has multiple versions of LabVIEW installed, please update the firmware and software separately to ensure version compatibility.

### 1. Update Firmware
Please refer to the following official document for firmware update or version restoration:
- [Upgrading or Restoring Firmware on My NI Linux Real-Time Device](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YHd9CAG&l=en-US)

### 2. Update Software
After the firmware update is complete, please install the corresponding version of the software according to your development needs:
- [Installing Different Versions of Software on My Real-Time Target](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YINRCA4&l=en-US)

### Troubleshooting
:::note
If you encounter error code **-2147220312** during the software update process, please refer to the **Additional Information** section of the following document:
- [Error -2147220312 When Updating myRIO Software](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A6MSAU&l=en-US)
:::
