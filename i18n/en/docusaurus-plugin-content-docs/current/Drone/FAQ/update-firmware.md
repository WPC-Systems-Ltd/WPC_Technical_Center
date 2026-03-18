---
title: Updating myRIO Firmware and Software
sidebar_position: 5
description: Firmware and software update guide for myRIO across different LabVIEW versions
---

# Updating myRIO Firmware and Software

Before starting the update process, please confirm the number of LabVIEW versions installed on your computer and choose the appropriate procedure based on the following scenarios.

<div style={{textAlign: 'center'}}>
  <img src={require('@site/static/img/drone/drone_faq_myRIO_firmware.png').default} alt="drone_faq_myRIO_firmware" width="60%" />
</div>

## Scenario 1: Single LabVIEW Version

If only one version of LabVIEW is installed on your computer, it is recommended to use the **myRIO Getting Started Wizard** for an integrated update.

### Steps
1. Launch the **myRIO Getting Started Wizard**.
2. Follow the guided interface to update both firmware and software simultaneously.
3. For detailed procedures, please refer to the official guide:
    - [Upgrading Firmware on My myRIO NI Linux Real-Time Device](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A4LSAU&l=en-US)

## Scenario 2: Multiple LabVIEW Versions

If multiple versions of LabVIEW are installed on your computer, please update the firmware and software separately to ensure version compatibility.

### 1. Update Firmware
Refer to the following official document for firmware updates or version restoration:
- [Updating or Restoring Firmware on My NI Linux Real-Time Device](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YHd9CAG&l=en-US)

### 2. Update Software
After the firmware update is complete, install the corresponding software version based on your development needs:
- [Installing Different Versions of Software on My Real-Time Target](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA03q000000YINRCA4&l=en-US)

### Troubleshooting
:::note
If you encounter error code **-2147220312** during the software update process, please refer to the **Additional Information** section of the following document:
- [Error -2147220312 When Updating myRIO Software](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000004A6MSAU&l=en-US)
:::
