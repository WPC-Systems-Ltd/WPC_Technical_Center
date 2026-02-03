
# 🛠 USB **DAQ**


## 🌐 **Naming**


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/41b7d0be-b89f-4e86-9bdd-e118b2b5fac6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGEH63I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiJg%2F%2Bn1%2Fsq8TCw48YOiGSRw%2BMFo2e10te3%2B6z6t4f1AiBtxCiPh1VvU78iOYUOJRn7qy4EXSDXX4IFT7SxYjgcnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSRxhMESWzh6ojGHRKtwDH9m31UCSk5vutFlCL30vyZTFdjHveFZPX7A0Hp%2F4sThbPiQx68eQqKe%2B9JenVX9XVnwpfqAKGnjfA4okcLPS86dQm9%2Fb1o2iIjcsud3SG7q5tK7MArAC%2F2K3QfW%2FmoLvt2caFnk7ubsytTN4rvNvEtfTavTw0l42BLzo6iRR37RiDqBkwWVZkG0tFHeoAfAIJz3LmCstUL%2BQSH%2FR8Lmdx30j0S89tE0YAGtEZNBic5ubxEuuMiTc7VfNnm7r95G2nPnIuXAdvgC6hTycyEhfMcRwPKjV0gfLbwelzfVScwvcyEBb7gI6yHT7NIgGA4GbLsYk5F0KgMdVe2xGRnQ38VowAExeggUV3x9J4iCYnOTuVDImQpTPG8h65XxnQgnXthe6fcS3WL3c7qghH%2FrnxqsCz3wBQcszgsOIxkzNdO9%2BCjR9LrjHHEnd8j9d3tHR2s6XVfQuyluBIDstrOziDE3p%2FJmmxLuQGmfB8fh2Q0Juo2Kj%2BuNOzrf390clbejeiZu4W2Y7JF47bXfCmqIj6Ep2oY2e2RRftcARQM44Oq7yOBB4P54%2BbbGzwLgV3GTox6G79Ws3dJjFVAwLOelFQYH%2BqALpWOydwvxagVtTTCT3C0JFle3K3i%2BDI5gw0f%2FwywY6pgGyB9gYmPXgdppC6OdydMJdeH4xiJjFo7ud5vxaVJ4hWphsbdDwvwGDVlBjpoGuOCSvRYKLQMDkcpXc38cRlGAuAzw1xyzhp6Dm4X%2FvODe7R1fOwjOqN%2B3vd9iYwRHjB76Si41IoOAXyJUhNMWqUC1uJfrTHNUaXRh38NQEDBaECrOHG5YNrJI9leGYXFAx0%2BtPh%2B9LXetaXHWE%2FAXrh%2BQUWfTjxL%2BL&X-Amz-Signature=b8a6657a824f4908c42f669a221b470e7a914cc2242d5663c1651eda59c63f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Features


---

<details>
<summary>Digital I/O </summary>
- USB-DAQ-D：The main function is 3.3V TTL (5V tolerant).
- USB-DAQ-D-SNK：The main function is 24V industrial isolated I/O (NPN Type only).

</details>

<details>
<summary>Analog I/O </summary>
- USB-DAQ-AD：The main function is +/-10V analog voltage input.
- USB-DAQ-AOD：The main functions are +/-10V analog voltage input and 0-5V analog voltage output.

</details>

<details>
<summary>Temperature I/O </summary>
- USB-DAQ-TD：The main function is the input for thermocouples (K, J, N, R, S, T, E, B).
- USB-DAQ-RD：The main function is the input for PT-100 and PT-1000 resistance temperature detectors (RTD).

    > 💡 The USB-DAQ-RD only supports PT-100 or PT-1000 temperature sensors. Please confirm the specifications and model with the distributor before purchasing.


</details>

<details>
<summary>Communication I/O </summary>
- USB-DAQ-CD：The main function is the Controller Area Network (CAN) communication interface.

</details>


## 🌐 Function and Channel Quantity List


|               | Feature   | 3.3V-DIO | 24V-DO | 24V-DI | AI | AO | TC | RTD | CAN |
| ------------- | --------- | -------- | ------ | ------ | -- | -- | -- | --- | --- |
| USB-DAQ-D     | DIO       | 26       |        |        |    |    |    |     |     |
| USB-DAQ-D-SNK | 24V-DIO   |          | 12     | 14     |    |    |    |     |     |
| USB-DAQ-AD    | DIO+AI    | 20       |        |        | 8  |    |    |     |     |
| USB-DAQ-AOD   | DIO+AI+AO | 16       |        |        | 8  | 8  |    |     |     |
| USB-DAQ-TD    | DIO+TC    | 21       |        |        |    |    | 2  |     |     |
| USB-DAQ-RD    | DIO+RTD   | 21       |        |        |    |    |    | 2   |     |
| USB-DAQ-CD    | DIO+CAN   | 20       |        |        |    |    |    |     | 1   |


## 🌐 Compatibility


---


The WPC-USB-DAQ series products are multi-function data acquisition cards. Due to limited internal hardware resources (such as clock, interrupt, etc.), certain functions cannot be enabled simultaneously.


> 💡 Before purchasing, please pay special attention to whether there are resource conflicts for functions that need to be enabled simultaneously.


### USB-DAQ-D-SNK


|      | PWM0 | PWM1 | CTR0 | CTR1 | Enc |
| ---- | ---- | ---- | ---- | ---- | --- |
| PWM0 |      |      |      |      |     |
| PWM1 |      |      |      | X    | X   |
| CTR0 |      |      |      |      |     |
| CTR1 |      | X    |      |      | X   |
| Enc  |      | X    |      | X    |     |


> 💡 X indicates that functions A and B cannot be enabled simultaneously.


### USB DAQ other than USB-DAQ-D-SNK


---


|       | I2C1 | I2C2 | SPI1 | SPI2 | UART1 | UART2 | PWM0 | PWM1 | CTR0 | CTR1 | Enc | AI | AO | TC | RTD | CAN |
| ----- | ---- | ---- | ---- | ---- | ----- | ----- | ---- | ---- | ---- | ---- | --- | -- | -- | -- | --- | --- |
| I2C1  |      |      | X    |      |       |       |      |      |      |      |     | X  |    | X  | X   | X   |
| I2C2  |      |      |      | X    |       |       |      |      |      |      |     |    | X  |    |     |     |
| SPI1  | X    |      |      |      |       |       |      |      |      |      |     | X  |    | X  | X   | X   |
| SPI2  |      | X    |      |      |       |       |      |      |      |      |     |    | X  |    |     |     |
| UART1 |      |      |      |      |       |       |      |      |      |      |     |    |    |    |     |     |
| UART2 |      |      |      |      |       |       |      |      |      |      |     |    |    |    |     |     |
| PWM0  |      |      |      |      |       |       |      |      | X    |      |     |    |    |    |     |     |
| PWM1  |      |      |      |      |       |       |      |      |      | X    | X   |    |    |    |     |     |
| CTR0  |      |      |      |      |       |       | X    |      |      |      |     |    |    |    |     |     |
| CTR1  |      |      |      |      |       |       |      | X    |      |      | X   |    |    |    |     |     |
| Enc   |      |      |      |      |       |       |      | X    |      | X    |     |    |    |    |     |     |
| AI    | X    |      | X    |      |       |       |      |      |      |      |     |    |    |    |     |     |
| AO    |      | X    |      | X    |       |       |      |      |      |      |     |    |    |    |     |     |
| TC    | X    |      | X    |      |       |       |      |      |      |      |     |    |    |    |     |     |
| RTD   | X    |      | X    |      |       |       |      |      |      |      |     |    |    |    |     |     |
| CAN   | X    |      | X    |      |       |       |      |      |      |      |     |    |    |    |     |     |


> 💡 X indicates that functions A and B cannot be enabled simultaneously.


## 🌐 2D Product Layout


### **For USB-DAQ-AD, USB-DAQ-AOD, USB-DAQ-RD, USB-DAQ-CD**


---


![USB-DAQ-AD & USB-DAQ-AOD & USB-DAQ-RD & USB-DAQ-CD ’s layout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/5bd6ea30-51f6-45e4-9360-a8b7a2e0fee0/Layout_USBDAQAD_series.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGEH63I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiJg%2F%2Bn1%2Fsq8TCw48YOiGSRw%2BMFo2e10te3%2B6z6t4f1AiBtxCiPh1VvU78iOYUOJRn7qy4EXSDXX4IFT7SxYjgcnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSRxhMESWzh6ojGHRKtwDH9m31UCSk5vutFlCL30vyZTFdjHveFZPX7A0Hp%2F4sThbPiQx68eQqKe%2B9JenVX9XVnwpfqAKGnjfA4okcLPS86dQm9%2Fb1o2iIjcsud3SG7q5tK7MArAC%2F2K3QfW%2FmoLvt2caFnk7ubsytTN4rvNvEtfTavTw0l42BLzo6iRR37RiDqBkwWVZkG0tFHeoAfAIJz3LmCstUL%2BQSH%2FR8Lmdx30j0S89tE0YAGtEZNBic5ubxEuuMiTc7VfNnm7r95G2nPnIuXAdvgC6hTycyEhfMcRwPKjV0gfLbwelzfVScwvcyEBb7gI6yHT7NIgGA4GbLsYk5F0KgMdVe2xGRnQ38VowAExeggUV3x9J4iCYnOTuVDImQpTPG8h65XxnQgnXthe6fcS3WL3c7qghH%2FrnxqsCz3wBQcszgsOIxkzNdO9%2BCjR9LrjHHEnd8j9d3tHR2s6XVfQuyluBIDstrOziDE3p%2FJmmxLuQGmfB8fh2Q0Juo2Kj%2BuNOzrf390clbejeiZu4W2Y7JF47bXfCmqIj6Ep2oY2e2RRftcARQM44Oq7yOBB4P54%2BbbGzwLgV3GTox6G79Ws3dJjFVAwLOelFQYH%2BqALpWOydwvxagVtTTCT3C0JFle3K3i%2BDI5gw0f%2FwywY6pgGyB9gYmPXgdppC6OdydMJdeH4xiJjFo7ud5vxaVJ4hWphsbdDwvwGDVlBjpoGuOCSvRYKLQMDkcpXc38cRlGAuAzw1xyzhp6Dm4X%2FvODe7R1fOwjOqN%2B3vd9iYwRHjB76Si41IoOAXyJUhNMWqUC1uJfrTHNUaXRh38NQEDBaECrOHG5YNrJI9leGYXFAx0%2BtPh%2B9LXetaXHWE%2FAXrh%2BQUWfTjxL%2BL&X-Amz-Signature=875ae97aa3d72100d888573e7b59d5941af470d5b23ff7e2538b9834f2d39c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


**Download**


> ⬇️ [DXF-USBDAQAD-Series.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/d992ad43-0fbe-4175-ab68-8138c7787925/DXF-USBDAQAD-Series.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MAWKNH2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWnfM70sLFH5JNwTjMYx2HYnWrSRDUvSbyQ%2BiMqCaBGAiEAvGRqr1AbyWoS6Z0RJhK%2B6xEbsuUisRLfJTwYTnP0VpoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsHp82LMJmDm5O8gCrcAw5vyNFzB0Ms3rBoQd5N4S9Ei%2Bxp55%2F4BGcIfl%2FlkJu1kCMY2UvTo8izsk8Cb8yw24PDTft1Y6kkUKgsVLMH9hYYgfvLDJoq5cVIKrInd60BzutcSKg5Tddzpn5DXlhBQrC8Jj24BAmUnF2cAUe5%2FA8DuWfgvSP9F1VxCvF19hBEDCtq%2FqQqMkPPhWX4tTIXwyuVFPImD3zqlXf7S%2FXYAu7lXDZpnRNRqbzNgC9yuSybo%2Bu%2BOMx%2F3DkyXfJ3hVL8qymXuUHNibFwVqQKGEn8I0ZlD3c%2FPjRlxTvvRMhaTDYtPExY2%2BKo8%2FPaEGMaLyFVhCi6pgI8ubATqLjc3MehWMWkqtnaJYmiHlpcIF9wHNZOFOhtScJ5CjwIFRhn4tDN1JLLCD7BulcU7rBsUztMcMq6VJAu0tdltwOZyPAOSm3LBMWFU%2BBgLaMrwTSyJ1Gs2lFzEpGwj848SHG5QVYRlSh7nQ47Rda3aGFH%2BSZ3NZ5nWOSxvtXbPCcUri%2BLO0xA7zSdq5JXk9oCPjv4nRXNsXnHcPZUOpBSK%2BeWelVFBl3oEznUVv6PBeun8eG9q89N6TdzHbCtqWK4rZUf6y57EcoI4b1sUnEEipz0%2BOmBqgrK9GrTQ8n2IeC70H9DMKD%2B8MsGOqUBwe1XtKhAYZydl8fWUnDO6H1%2FmfADXKgVTwPPeoqjMletBqZjnNr1Y0yK0xACFFyLkBkcmXl1GD6P45n01tMeSuu0GOio57lThJyzwQcn0fzDL4VIKYoYP3tgSYVPJJxPzR3rJgIJHT7vRaIiMyIPtdlJZwHN9vSxR%2FFAmdZyz1zCmmGCdwIBrrFsvOqJZYsbMYKyCC0Adh3LTXrgC24Fw0m6IFXo&X-Amz-Signature=2f98ec6b5dfc73e941b8b48bda7742f48b5a3aaefe6803928594d58de6f8012f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### **For USB-DAQ-D, USB-DAQ-D-SNK**


---


![USB-DAQ-D & USB-DAQ-D-SNK ’s layout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/40d161f5-845a-4a89-83ab-dd4256a6cb62/Layout_USBDAQD_series.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGEH63I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiJg%2F%2Bn1%2Fsq8TCw48YOiGSRw%2BMFo2e10te3%2B6z6t4f1AiBtxCiPh1VvU78iOYUOJRn7qy4EXSDXX4IFT7SxYjgcnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSRxhMESWzh6ojGHRKtwDH9m31UCSk5vutFlCL30vyZTFdjHveFZPX7A0Hp%2F4sThbPiQx68eQqKe%2B9JenVX9XVnwpfqAKGnjfA4okcLPS86dQm9%2Fb1o2iIjcsud3SG7q5tK7MArAC%2F2K3QfW%2FmoLvt2caFnk7ubsytTN4rvNvEtfTavTw0l42BLzo6iRR37RiDqBkwWVZkG0tFHeoAfAIJz3LmCstUL%2BQSH%2FR8Lmdx30j0S89tE0YAGtEZNBic5ubxEuuMiTc7VfNnm7r95G2nPnIuXAdvgC6hTycyEhfMcRwPKjV0gfLbwelzfVScwvcyEBb7gI6yHT7NIgGA4GbLsYk5F0KgMdVe2xGRnQ38VowAExeggUV3x9J4iCYnOTuVDImQpTPG8h65XxnQgnXthe6fcS3WL3c7qghH%2FrnxqsCz3wBQcszgsOIxkzNdO9%2BCjR9LrjHHEnd8j9d3tHR2s6XVfQuyluBIDstrOziDE3p%2FJmmxLuQGmfB8fh2Q0Juo2Kj%2BuNOzrf390clbejeiZu4W2Y7JF47bXfCmqIj6Ep2oY2e2RRftcARQM44Oq7yOBB4P54%2BbbGzwLgV3GTox6G79Ws3dJjFVAwLOelFQYH%2BqALpWOydwvxagVtTTCT3C0JFle3K3i%2BDI5gw0f%2FwywY6pgGyB9gYmPXgdppC6OdydMJdeH4xiJjFo7ud5vxaVJ4hWphsbdDwvwGDVlBjpoGuOCSvRYKLQMDkcpXc38cRlGAuAzw1xyzhp6Dm4X%2FvODe7R1fOwjOqN%2B3vd9iYwRHjB76Si41IoOAXyJUhNMWqUC1uJfrTHNUaXRh38NQEDBaECrOHG5YNrJI9leGYXFAx0%2BtPh%2B9LXetaXHWE%2FAXrh%2BQUWfTjxL%2BL&X-Amz-Signature=1a8b220154d135f516a93e1c303c532924d2c4d7380a486e9150f13c036cec0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


**Download**


> ⬇️ [DXF-USBDAQD-Series.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/5adc3013-9982-47db-88da-6566018e77ce/DXF-USBDAQD-Series.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLK3CKL%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCHjnyZwG7BHN55EsQmtpN3W5VD7cQ8mNrfhnfU9OQvAiByAsWSUPl%2F7oIBlJnMOy%2FfNxOxvcuoK9bg%2FeoQkq8PfyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxvPvkaORIS2nccujKtwDgyGVFClgfdeHGQNC0zbJ72r5DVGUFUTVM6Da6rJQ0cEO%2F9712n7u%2BBYrgOOyGmZMtJeGOdZzFSAyV2gI6UeC50q6hXabc2mANry%2BmR%2FgxnNLCEx5mKC0T4QkhW1RL1FanrixivlZZRhcxPC%2FYTf%2BLgYd9b1PZGJOkCo%2FpHSje%2Bw4Xml1ep%2FKOaA4I%2BYGiCJ3tnm9vSjurp8Jh%2BZK1h5vzWXBWynriXlUIlHHzEW21N3QsD4ecM%2BYPHy%2BUFQr7MhL0wyXLcVraU%2FctU%2F%2FOeiLMpAUJLLXAvbBdVYWjVQglOfn611IBH%2Bmkl3v2dVLsx4nywaij1ZpA3mfvoCJiq7BioiqcC5js9ilp8UZt%2BEJNSEMgEP4KMdtuysHZ3G72wSMgfMZMMXrc40Rj0kTAjeJ2E3EUeLEuuCNf9STaeQ2615lKqTiAuih2UH8ufEro5AijAJuE6tClNERitk3PRw9nRe1UgUrdErVGMtDv6kiJ9t5xZZCmltL4EAB%2Fe%2BkW5h9FofPSjAJJxMX8TRM5LEPgLtrfFlEwlySgYaxedIGSvfCAm7anvkrwbrZAicjA2gOHef%2B17q6Ef8lMOnWBXVgjzQdLcB2GU1CVYy2Sogxnnmx82i8bET6eENsTT4wkv7wywY6pgEKbhv8XhuomnrDo8y87DqNDeNYqwxazeX5DdOITml2%2B%2FFPZTtVLKQIHQ1ccHZA8ZjsXLN9UwxgUlE7z6dJqCY5v5%2BwbS0eoBoXxHim8Ud%2BFRIYOBbBxnusxfHJ5Pi2177VYiTJFAC0c1v7wFUVEXW7MKQFkOevOsagibFnz8evVwrfObBpYrhBrVej8R0H%2FjePNyHw25fiLI946kV0a0Ae6xXraV1M&X-Amz-Signature=172e80cd2364ab32e6ce2028d21ebd562334482563e741a64d9c46556fd78cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### **For USB-DAQ-TD**


---


![USB-DAQ-TD’s layout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/441587c3-dc93-4178-9499-378068abf623/Layout_USBDAQTD_series.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGEH63I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiJg%2F%2Bn1%2Fsq8TCw48YOiGSRw%2BMFo2e10te3%2B6z6t4f1AiBtxCiPh1VvU78iOYUOJRn7qy4EXSDXX4IFT7SxYjgcnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSRxhMESWzh6ojGHRKtwDH9m31UCSk5vutFlCL30vyZTFdjHveFZPX7A0Hp%2F4sThbPiQx68eQqKe%2B9JenVX9XVnwpfqAKGnjfA4okcLPS86dQm9%2Fb1o2iIjcsud3SG7q5tK7MArAC%2F2K3QfW%2FmoLvt2caFnk7ubsytTN4rvNvEtfTavTw0l42BLzo6iRR37RiDqBkwWVZkG0tFHeoAfAIJz3LmCstUL%2BQSH%2FR8Lmdx30j0S89tE0YAGtEZNBic5ubxEuuMiTc7VfNnm7r95G2nPnIuXAdvgC6hTycyEhfMcRwPKjV0gfLbwelzfVScwvcyEBb7gI6yHT7NIgGA4GbLsYk5F0KgMdVe2xGRnQ38VowAExeggUV3x9J4iCYnOTuVDImQpTPG8h65XxnQgnXthe6fcS3WL3c7qghH%2FrnxqsCz3wBQcszgsOIxkzNdO9%2BCjR9LrjHHEnd8j9d3tHR2s6XVfQuyluBIDstrOziDE3p%2FJmmxLuQGmfB8fh2Q0Juo2Kj%2BuNOzrf390clbejeiZu4W2Y7JF47bXfCmqIj6Ep2oY2e2RRftcARQM44Oq7yOBB4P54%2BbbGzwLgV3GTox6G79Ws3dJjFVAwLOelFQYH%2BqALpWOydwvxagVtTTCT3C0JFle3K3i%2BDI5gw0f%2FwywY6pgGyB9gYmPXgdppC6OdydMJdeH4xiJjFo7ud5vxaVJ4hWphsbdDwvwGDVlBjpoGuOCSvRYKLQMDkcpXc38cRlGAuAzw1xyzhp6Dm4X%2FvODe7R1fOwjOqN%2B3vd9iYwRHjB76Si41IoOAXyJUhNMWqUC1uJfrTHNUaXRh38NQEDBaECrOHG5YNrJI9leGYXFAx0%2BtPh%2B9LXetaXHWE%2FAXrh%2BQUWfTjxL%2BL&X-Amz-Signature=6510dcca78e5e1836d3f9d908f21ed2615eef01d7e09221f07bfbcaa9f1777e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


**Download**


> ⬇️ [DXF-USBDAQTD-Series.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/66801517-fafc-4b63-8c28-963e21fd1bb4/DXF-USBDAQTD-Series.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ3LJUPK%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdJzlVbEt9UeFEB8n94uZ%2BhsBhmpy8eIdvAz89z6QslgIhAMqeYsuBvvVwlqHOF7p6g3GPvf2lbj%2Bsij0cpBsI1G5HKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxihg4pf8NIWL0p8tQq3ANjmB8Wz9rSdUeNZCi8HdNpPXKUGDc2J%2FSAN3dGO49MqcHrRdcQTV99krsm6LHnp82khVjwuHOuQc2iHJCqacGbY%2BTCSofj9g6PurtOap3JxP8KOSSbnc%2BXmgM%2B%2BLs0Xn3G6JQWCCOFa%2B2Aqpe%2F1eZAQdVUJX6J4tjhqghjwHXMs0zyPzToGtdkdxSk1P28aX69c25zitWucQV2NQyf70cNQNjraf4mOFtU8pQh6uKa4ksn2PnIuoxIBOdO%2B5i6r%2BvtdIXgpPUgzpTXOivc3U9R9kYZa5FhzOKtHcOu7IoiXlzdQ7fTEwRSTpdLGtjcYU70s30jLYK4yGJTFAyBUuUNCkMfGsUj6DbGx%2BsGMJXqlsX87EVQUvRxvjI2QPOUdzzf14D207z9VPqbYfOslkcaZJlo4xhjH9VBX1hJtTcHv3EkVwldSwB81tjzPEpLiSbImsfzXw3MDpehvCKuoCyFXwbTkvIWhrn8%2FSkNtfreAkyAs2MkvEEUef4BheCHRMhoXNnbuz%2BOFJCWeIN6E6i%2BdixCgeZFlZaocpwmvJ4BXWhfT0QLx4bCAkeGo%2BDR%2FuRy%2B18yoVQv80jyVcxSFnkm0iH%2FMBKA2q5VBn2yh4B6FcBhUOEsj3LiPDXcWjDE%2FvDLBjqkAWP%2BVpotDC9gYxbE%2FR%2FsoVf%2BmwmoHsMS7P4Y4ul7I9%2Bh7bOPIWfqY%2FeUsK9Q7htn%2Fm9qU2v4JFpeT8jHT%2F7e1kuutUhE%2FN3wNOS2dZb25Lcy3%2BgWTMMJcSf5esBiRAo9P08fafXrPdVhpLE3aRHnBWeFVtpHNAqgek%2B%2BeEYOuteMRebqW3tMYQGghm%2BgqrQ4vOXFIZMeh4uGWGvF6ILzmq3Epk20&X-Amz-Signature=37764789484af74086aa07abab708c6b93d1cd44053162e1ccc5ee0360951980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 🛠 **Product List**


##  🌐 USB-DAQ-AD


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 20ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. AI: 8ch simultaneous & 16-bit single-ended
    5. Max. sampling rate: 16kHz (1ch)
    6. Input range: +/-10V
    7. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-AD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/aa95bcdb-8224-4124-8227-b62a2650c9b8/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHGEH63I%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiJg%2F%2Bn1%2Fsq8TCw48YOiGSRw%2BMFo2e10te3%2B6z6t4f1AiBtxCiPh1VvU78iOYUOJRn7qy4EXSDXX4IFT7SxYjgcnCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSRxhMESWzh6ojGHRKtwDH9m31UCSk5vutFlCL30vyZTFdjHveFZPX7A0Hp%2F4sThbPiQx68eQqKe%2B9JenVX9XVnwpfqAKGnjfA4okcLPS86dQm9%2Fb1o2iIjcsud3SG7q5tK7MArAC%2F2K3QfW%2FmoLvt2caFnk7ubsytTN4rvNvEtfTavTw0l42BLzo6iRR37RiDqBkwWVZkG0tFHeoAfAIJz3LmCstUL%2BQSH%2FR8Lmdx30j0S89tE0YAGtEZNBic5ubxEuuMiTc7VfNnm7r95G2nPnIuXAdvgC6hTycyEhfMcRwPKjV0gfLbwelzfVScwvcyEBb7gI6yHT7NIgGA4GbLsYk5F0KgMdVe2xGRnQ38VowAExeggUV3x9J4iCYnOTuVDImQpTPG8h65XxnQgnXthe6fcS3WL3c7qghH%2FrnxqsCz3wBQcszgsOIxkzNdO9%2BCjR9LrjHHEnd8j9d3tHR2s6XVfQuyluBIDstrOziDE3p%2FJmmxLuQGmfB8fh2Q0Juo2Kj%2BuNOzrf390clbejeiZu4W2Y7JF47bXfCmqIj6Ep2oY2e2RRftcARQM44Oq7yOBB4P54%2BbbGzwLgV3GTox6G79Ws3dJjFVAwLOelFQYH%2BqALpWOydwvxagVtTTCT3C0JFle3K3i%2BDI5gw0f%2FwywY6pgGyB9gYmPXgdppC6OdydMJdeH4xiJjFo7ud5vxaVJ4hWphsbdDwvwGDVlBjpoGuOCSvRYKLQMDkcpXc38cRlGAuAzw1xyzhp6Dm4X%2FvODe7R1fOwjOqN%2B3vd9iYwRHjB76Si41IoOAXyJUhNMWqUC1uJfrTHNUaXRh38NQEDBaECrOHG5YNrJI9leGYXFAx0%2BtPh%2B9LXetaXHWE%2FAXrh%2BQUWfTjxL%2BL&X-Amz-Signature=afb33c43bb8e134c85e2accb196d0d5db8dc7910480094c56b54b9abfe055e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 USB-DAQ-AOD


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 16ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. AI: 8ch simultaneous & 16-bit single-ended
    5. Max. sampling rate: 16kHz (1ch)
    6. Input range: +/-10V
    7. AO: 8ch simultaneous & 16-bit single-ended
    8. Output range: 0-5V
    9. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-AOD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/2ac2edd1-964b-41cc-8fdc-d21e39ea7523/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHDC3ZM%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUHHGiNCTPXA%2BXYnvQBsxfHcI%2BxqFhaRRpgpeUu%2BWz9AiEApTCEuC4S0IbrMtZtqmxVmW%2BJ3ojGgXROhtA%2FUKKSMWUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdC2xWd55yjq4NcUyrcAy8d5VweaR5ZD1AmBno43QLmtC1bHEDaI0PSAMM3tFrpc6dMkulljoM6duTViKe0IteBypg9i7sbp1douPYRyFqi6N3Nv9BwRhskcUMaxvUlASu5gbU8c%2BOku%2FGxYQtE2nSF4dQatYUSAkzychQSVCZXg9w3AA03epnPXU%2FJokI6ILsaZdoAXdWWrk5G2NEE%2BPWmHUBOznB9db7N6cxKW3q0Eb3AJf1LOSrtD6Kit8xKD7r2M77AIxd57psiEzmCl5WNtwr8RKuiFgQw2P3BzzdEkmlvEJ2rZnOypsL2NzI%2FIfi9Ph03kTeCOe664tJs8TQA7QF%2FusOORu4%2Fyh4NQe7CyqO4UdnhSHVXgS0jFCQYE80Ai0t54PEIRrLXB2jcr%2FMJKW0F5OzPh4MHBrPZXMmrwZ1r6Za3Pgmp4YlW%2FVlQ7FLBhkmflkrdbgd2WPH9pxkNR3CfDayiTOrZuN2VX56xeunUbmAcF0eaV99p7s3Xzf1aoI5i7LAC8MB6FeJTH0J71JSLTzq9jom8HYNxxfVVEDJxUXN6L5qH7jOao3dDUkaMtYbe%2FYhoN9lBvCwyYjf24kvIi6%2FmtMcTMKQY%2BX9FXtDnPc8QXw9hIQaF2ziBhtBnOurJjtW1YnupMOj%2F8MsGOqUBcuXnlg4Hg88yt0L2EyPRgja%2FW0ZHOWO7FR2VILF0Nbd84i5EDB3v%2BTUbUVhyljrMI5yEjBQ92%2FUs6Bk1mDsmiYjE4MszhJvgmpvW3LUqhzu2QNfHubICJulCXlprDlEpM%2BGS6HvPFc6tepe5huoZy%2BXcntazFxK2Th90p1R6S5Kcin7C%2Fm%2Bk3miz42xUazhlPSxyXRpywmrTTLupJ%2F%2BfQ2cT5hMz&X-Amz-Signature=b682aa48b1b4f752b8971f7bae47b806472a50292b1088d9e4286c6aaa4632d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 USB-DAQ-CD


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 20ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. CAN V2.0B at 1Mb/sec
    5. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-CD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/be5a463d-7f63-4732-bb31-c2cb9de41e2f/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7L4WDQH%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaKgj3ks3fz4I0sfGl0phzr3vfwKlyr9xL9xVQ4VG2VgIgFoaxS6vqRV3pmVCIEbSUMNQpZwHUCVptxss0bi80tGUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwdnqBLZqOIm47%2B0ircA9Yeah089oSp8dGSNl4L3qNbe0zn6SCAcyazZRxGP4RHkmcfOMWKFwa%2B9x2QLKQ%2FVTW1Qx4sTMUSqAMKHaOXh2wakIWIm7q%2BKDxHQ98DW2t%2FxLMDccbUA0lfz5fLIOI7HTp8SuGS%2Fcm5oxhk2p5hDxjOw0MPOOWSMbvUb9muDy73NICpkFprj%2FcRWNYAaswzsLS8G2X0zCnE0V9thOyYUzHKIDdiqc8EEFSEsII03m55%2FbDVHmLFaYLfcB7ugbAyJhTwZbOkWVWqaJbOzfYykmSiZLSdwe4ST8kdZxhSC87N6gYXvM9GnTyxSiO4IQZJypaVgzOGG0VzJ%2B1UfVUTNbrvx4WbDd045RMDXe0ULGG0lmp5%2BRbaJnzQF5lKf9mkqd%2FwoVFD42%2FnseodXp3iIlN9RKzFOmJ99MeYhmdhbtYGNvWvoLKOyJxYNG9Ceq30vL7tJXJViX92edOe5SjrJ8iU0buQZXmiM4NbzxJSd3BZfWKrwWDy50UipaosjTzTZfjUPOoGcMmpuzs2NSaVtCPYBt0Qtj73g%2BcUtq9iltmaJFSgQ4tIUTlvcwq%2BxcPvqVdBreuM1Cl7IQWjW%2BluV3eE04gk4CJWTcOsMZyfOrzkS5%2BXK6OSXhtQWkf5MJD%2B8MsGOqUBcUYxYPZ0Ygb3jM1AjZQRIB1fEhz5hOICUsYmk%2Bpepgfk8pJVJ414jdF8OrEvX2RedrCvOZJa%2Fit2%2Bf5sPdd7U0g5ZYUoF37HyExVU8NzPVg8oZE49SUKtI82zKMGo3eZ1ggZXDyi%2F053nrYLBJvBqpMyIyi80o%2BEmVgMg5XTQQYZoTIJ4asR9K40ERkyjNvyQLZO1cQDwaZhNsY%2FgRVd7Vfwbw4%2B&X-Amz-Signature=3adec9b43ac1643496760ea773d279af7e87bb12112754166e6e801b9ad473d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### CAN Bus Wiring


    ---


    CAN bus 的接線非常簡單，只需將 CAN_H 和 CAN_L 訊號並接到 CAN 網路即可。USB-DAQ-CD 的 Pin35, 36 提供了 120 歐姆的內部終端電阻（Termination resistor）功能。如果需要使用終端電阻，只需將 Pin35, 36 兩個接點短路即可。


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/15f71de2-6889-4d3b-8a93-07f339c778be/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7L4WDQH%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaKgj3ks3fz4I0sfGl0phzr3vfwKlyr9xL9xVQ4VG2VgIgFoaxS6vqRV3pmVCIEbSUMNQpZwHUCVptxss0bi80tGUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwdnqBLZqOIm47%2B0ircA9Yeah089oSp8dGSNl4L3qNbe0zn6SCAcyazZRxGP4RHkmcfOMWKFwa%2B9x2QLKQ%2FVTW1Qx4sTMUSqAMKHaOXh2wakIWIm7q%2BKDxHQ98DW2t%2FxLMDccbUA0lfz5fLIOI7HTp8SuGS%2Fcm5oxhk2p5hDxjOw0MPOOWSMbvUb9muDy73NICpkFprj%2FcRWNYAaswzsLS8G2X0zCnE0V9thOyYUzHKIDdiqc8EEFSEsII03m55%2FbDVHmLFaYLfcB7ugbAyJhTwZbOkWVWqaJbOzfYykmSiZLSdwe4ST8kdZxhSC87N6gYXvM9GnTyxSiO4IQZJypaVgzOGG0VzJ%2B1UfVUTNbrvx4WbDd045RMDXe0ULGG0lmp5%2BRbaJnzQF5lKf9mkqd%2FwoVFD42%2FnseodXp3iIlN9RKzFOmJ99MeYhmdhbtYGNvWvoLKOyJxYNG9Ceq30vL7tJXJViX92edOe5SjrJ8iU0buQZXmiM4NbzxJSd3BZfWKrwWDy50UipaosjTzTZfjUPOoGcMmpuzs2NSaVtCPYBt0Qtj73g%2BcUtq9iltmaJFSgQ4tIUTlvcwq%2BxcPvqVdBreuM1Cl7IQWjW%2BluV3eE04gk4CJWTcOsMZyfOrzkS5%2BXK6OSXhtQWkf5MJD%2B8MsGOqUBcUYxYPZ0Ygb3jM1AjZQRIB1fEhz5hOICUsYmk%2Bpepgfk8pJVJ414jdF8OrEvX2RedrCvOZJa%2Fit2%2Bf5sPdd7U0g5ZYUoF37HyExVU8NzPVg8oZE49SUKtI82zKMGo3eZ1ggZXDyi%2F053nrYLBJvBqpMyIyi80o%2BEmVgMg5XTQQYZoTIJ4asR9K40ERkyjNvyQLZO1cQDwaZhNsY%2FgRVd7Vfwbw4%2B&X-Amz-Signature=121d2e07004af5e41f5c14ab19148acb694cb1dedc8959440b705b6d45a9c8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 USB-DAQ-D


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 26ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-CD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/e0c4cfcf-f1e2-4a3e-b65e-d118957b16ab/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMUEOA2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtqVRt4NBchKkpgWh%2BHBr%2BxmSNrD%2F7pAGMtyH962uspQIgRMx6Iiq4hjHf04gWyvtdUeLBy9%2FBFSXk8U8i466rrhsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BcpYnwEkypuGXqlyrcA246DQz89lsgppmbkZP7%2BiQ5vhj0OkvFjEfhgTfzUaKfo783f4NFa7bLl4hsMFVFL0sM4fUyTukuxyD%2BK2ccEGiosld7zVW9P9%2FjEe0iC7WQVK4qBze2iOAL%2BJTp16n9phanvZx5f9H6X6BiGG%2BcD2q3Ls7yYcgxDntP%2BkyxxcTNVvDGRUsFK0JRf3jyghRPEuJymsqcsCGha0kIfpmITKAdJ9JtVzuL%2FhzH0qsn%2FNZ0tWzARwoJaZ8KT3gB%2BzVkChpwhHFJz4D3sA0uJsqB4M8eMXOxAtd09S%2FbtKSqxA0FaEgIuuE0Yq4elgRVr32Bl8IsfXRa8wzYwGW8uAF0ua6OHpxVfJIAC0yhocojeVGtGYAkgDJYHVVeX7L3ABW%2F1KKi2QASrbdRI7ErapjWGHxSnPkpnxnxZ8aCLcsrRgfNwsm870lI1uIfJSDu0oT2KDNBWDR5x00%2Bs9keHO4Ks%2F6boAk%2BrL8m%2FPDCFYkkHSGKZpqQNYJRRAiZfxCBgiOP9o9QZQIbBzqGfknv%2FI6sIc%2FtZczy7cY5XIvLm3y38rl0gjz3MhYJ5IodyhJYKD5dnrfDN5V5%2FHZRbzNUldMETEqsSVNbl3%2BnG7GuN3c7ZliA0HxkgAXg0PvtBeFYMNT%2F8MsGOqUBD1Dt%2FvKcWzu5eXg5TF680e62wBbYQV0X9LfYAmyfhxCdF9QvloSTC6KPr8XAgABIMZ0v0wrhbxLF5VA%2FhCN5SebGY5hTZKTUMUEqkGn4zXq6OfYEbm06bo81HFy684d5q33H%2FVxhfLRBB29VFlokOu5crQHDZxDa%2FcA42z7h%2FUrXrfJAdUKf2d7brOyHGgT%2B%2FFsqcZpz7J2rqfiMy3562%2F401Auh&X-Amz-Signature=4b3d927e3d2d62ef793e0cefe3895d57a90d5a39fba3d05c69a9ef47c904b129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 USB-DAQ-D-SNK


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. DO: 12ch NPN, opto-isolated 24V
    3. DI: 14ch NPN, opto-isolated 24V
    4. PWM/counter
    5. External 24VDC power required
    6. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    > ⚠️ 24V external power required.


    ### Pinout


    ---


    ![USB-DAQ-D-SNK’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/9fe47a91-c195-45f7-bbb5-0cf5893874d7/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625USN2DD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWoKyYzX9Tn3oK3cO0CEIIEJNdzic0N1vrsr8HUltzAiAGliyb0oTeOODfkrLXMLkR9s5OhiNCx51yQTe6eu6vgSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSaMRxGj6gqEOCIpLKtwDMulJ%2FK67w%2BuOwC5ccLxIxi6VqqLBNImOcUj7TXwiOvikY6C6U%2FE37Z9GRM0M8cmOp8czlpbOzFHgPaq6REYSeTGrmDjaSUvOwNgJu%2Bc%2B8rvS9x%2ByQQvGc%2BZuJYOCqnzcw0n2NhfK16ZqT1fpGofsPiKCHD6blyvlIQ7zfl36GHLK0amKqcnkeXp02iUrl2%2BLLAYc9pDAJpfHk2dGjYz6p%2FtRX7yBJ5Bnu1jnduYEO1HQBACcLuWPg3g8JXQu00pV3Ek4WHea9PlFhRmOsGsI4Zjizew1ajLd7X4okS1GIYYnue1B6bLR9yBU9bmTPO39yhuhusKE9%2Bqx2%2FrU7lgPjE2FVPe9OEWUM4eL9zcQ9w2wUZbHX4gdts7s3AjY17MzNVn241rWftuflDEvspGjpzVfLW73XyjAkW5tbeM455Pzp4SsfcAUhruoMLNRUsdHER03X4SeVDSHnxTdZMm8SpTK88vXYnoiyR8YkjJ1W%2BsjgHkiyKX2yCzZLofy0oTAewvAXI34qDXfhCMe8wlD03FiIlEdvxrGeN0L%2Fd1427BfbokVQA9Bq82Z6JLPM3Erc64hkX8akxxfVccx4gruy4dy%2BZdP1g%2BKKEDaxjn2VqzEBpEhcjeXMl92g5gwn%2F7wywY6pgEDDo53X6OfmJKWZAP7KMdHkt9S91%2BlRoX8eSxFIFIdokxqQFCZrAQwvoxjlJDKb8%2BiTvXexK7tTXYqGLFoS8gYQSfidiWCjQRc6G5%2BLd7iXVpL2Gb3x1bnBbXHWTAkQkeEJhUtoEzoYwUZznjOJ22%2FNKBmd%2BA1trLcLpw5YqRgZ11riZ59o2gXIRk4YZDwOcqyC3iH94E%2BCuCzRd5MqxC5eJnYpHds&X-Amz-Signature=a83dd46124f1f2826c27d07feb6eabfe7c8416cb87c471f1239253d13addf17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### DAQ Wiring


    ---


    USB-DAQ-D-SNK 為 sinking output, sourcing input 模組，又稱 NPN type。輸出可以直接 loop-back 到輸入端進行測試。使用時必須於 Pin15, 16 以及 Pin13, 14 分別額外提供 24V 以及 0V。


    > 💡 WPC 目前尚未推出 PNP type 的 USB I/O 硬體。

    > 下圖為 DO 等效電路圖，DO 輸出時會將 output pin 連接到 0V，負載端則需共陽極 24V。

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/af4ddbd0-7bf3-4423-932b-ca88593ebecf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625USN2DD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWoKyYzX9Tn3oK3cO0CEIIEJNdzic0N1vrsr8HUltzAiAGliyb0oTeOODfkrLXMLkR9s5OhiNCx51yQTe6eu6vgSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSaMRxGj6gqEOCIpLKtwDMulJ%2FK67w%2BuOwC5ccLxIxi6VqqLBNImOcUj7TXwiOvikY6C6U%2FE37Z9GRM0M8cmOp8czlpbOzFHgPaq6REYSeTGrmDjaSUvOwNgJu%2Bc%2B8rvS9x%2ByQQvGc%2BZuJYOCqnzcw0n2NhfK16ZqT1fpGofsPiKCHD6blyvlIQ7zfl36GHLK0amKqcnkeXp02iUrl2%2BLLAYc9pDAJpfHk2dGjYz6p%2FtRX7yBJ5Bnu1jnduYEO1HQBACcLuWPg3g8JXQu00pV3Ek4WHea9PlFhRmOsGsI4Zjizew1ajLd7X4okS1GIYYnue1B6bLR9yBU9bmTPO39yhuhusKE9%2Bqx2%2FrU7lgPjE2FVPe9OEWUM4eL9zcQ9w2wUZbHX4gdts7s3AjY17MzNVn241rWftuflDEvspGjpzVfLW73XyjAkW5tbeM455Pzp4SsfcAUhruoMLNRUsdHER03X4SeVDSHnxTdZMm8SpTK88vXYnoiyR8YkjJ1W%2BsjgHkiyKX2yCzZLofy0oTAewvAXI34qDXfhCMe8wlD03FiIlEdvxrGeN0L%2Fd1427BfbokVQA9Bq82Z6JLPM3Erc64hkX8akxxfVccx4gruy4dy%2BZdP1g%2BKKEDaxjn2VqzEBpEhcjeXMl92g5gwn%2F7wywY6pgEDDo53X6OfmJKWZAP7KMdHkt9S91%2BlRoX8eSxFIFIdokxqQFCZrAQwvoxjlJDKb8%2BiTvXexK7tTXYqGLFoS8gYQSfidiWCjQRc6G5%2BLd7iXVpL2Gb3x1bnBbXHWTAkQkeEJhUtoEzoYwUZznjOJ22%2FNKBmd%2BA1trLcLpw5YqRgZ11riZ59o2gXIRk4YZDwOcqyC3iH94E%2BCuCzRd5MqxC5eJnYpHds&X-Amz-Signature=26e9fa67ed98bdbc66560f02121bd14f1760274de28e516f844c7b878b83aeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    > 下圖為 DI 等效電路圖，所有 DI 通道內部都直接共陽極 24V，因此若將 DI 輸入 pin 腳連接到 0V 則可以從該 DI 腳位讀取到 TRUE。DI 腳位也可以透過 DO 腳位進行 loop-back 測試。

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/f3a67129-2e8a-4254-8452-46e2aad60020/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625USN2DD%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWoKyYzX9Tn3oK3cO0CEIIEJNdzic0N1vrsr8HUltzAiAGliyb0oTeOODfkrLXMLkR9s5OhiNCx51yQTe6eu6vgSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSaMRxGj6gqEOCIpLKtwDMulJ%2FK67w%2BuOwC5ccLxIxi6VqqLBNImOcUj7TXwiOvikY6C6U%2FE37Z9GRM0M8cmOp8czlpbOzFHgPaq6REYSeTGrmDjaSUvOwNgJu%2Bc%2B8rvS9x%2ByQQvGc%2BZuJYOCqnzcw0n2NhfK16ZqT1fpGofsPiKCHD6blyvlIQ7zfl36GHLK0amKqcnkeXp02iUrl2%2BLLAYc9pDAJpfHk2dGjYz6p%2FtRX7yBJ5Bnu1jnduYEO1HQBACcLuWPg3g8JXQu00pV3Ek4WHea9PlFhRmOsGsI4Zjizew1ajLd7X4okS1GIYYnue1B6bLR9yBU9bmTPO39yhuhusKE9%2Bqx2%2FrU7lgPjE2FVPe9OEWUM4eL9zcQ9w2wUZbHX4gdts7s3AjY17MzNVn241rWftuflDEvspGjpzVfLW73XyjAkW5tbeM455Pzp4SsfcAUhruoMLNRUsdHER03X4SeVDSHnxTdZMm8SpTK88vXYnoiyR8YkjJ1W%2BsjgHkiyKX2yCzZLofy0oTAewvAXI34qDXfhCMe8wlD03FiIlEdvxrGeN0L%2Fd1427BfbokVQA9Bq82Z6JLPM3Erc64hkX8akxxfVccx4gruy4dy%2BZdP1g%2BKKEDaxjn2VqzEBpEhcjeXMl92g5gwn%2F7wywY6pgEDDo53X6OfmJKWZAP7KMdHkt9S91%2BlRoX8eSxFIFIdokxqQFCZrAQwvoxjlJDKb8%2BiTvXexK7tTXYqGLFoS8gYQSfidiWCjQRc6G5%2BLd7iXVpL2Gb3x1bnBbXHWTAkQkeEJhUtoEzoYwUZznjOJ22%2FNKBmd%2BA1trLcLpw5YqRgZ11riZ59o2gXIRk4YZDwOcqyC3iH94E%2BCuCzRd5MqxC5eJnYpHds&X-Amz-Signature=fa768e411286cf7e945eb8be0fa41d6139104577e1d209d9ca063da420ab6fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 USB-DAQ-RD


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 21ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. 2ch RTD inputs
    5. Support PT-100 or PT-1000
    6. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-RD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/a6f2c805-4aa9-4490-bb0b-be404a9cff52/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5JUS4U%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcZMVClgTfMSz6DepWuW0W2KR0kSJ2ERn8g%2B3UzY9pAIgOiP403WJP%2FBnVRb1OceZ6Y%2B%2BWH97UMi06hfaG%2F%2B6UB4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuaS7P1fi5FwKYosSrcA61E4PoZ2CuYxRz1ExYvVKvtZxgt%2BJmfxSTqUJ5hb5fL4lFEX0iZXE4S7%2F3EHwAsw56MNZtdZBl%2BqevHgZRWyGIk0S8pjzLhX1lnRQxD63O%2B6jSrIYR%2B7TeHXfb9pGNegK8xg%2BNpHRfMrY%2BiuN7LissVtVsOMIIU0B7uwKbKeLl4z7n5MbR6ygMLP14OjUyoHDZdPsEyJ96L5hShoJH3qAOuoh3LOEx3P2fU4RbOwqAoL3Cv16tusY6bWuDYCShk%2FK27%2B7JmmJkJVCCCmXOgp7hPiyv5RiaGuixv%2FH7PYgMIwyft8V2fyIz7fLRoSKnyanUmB%2F%2FeTD7MHYhcvR42wnsmNbrZKSSy923wLeqYxsoxuLQeZM4IxnAHZV%2FWjAHKltDVQTkyJSFSNzi6EamLf%2Buj%2BZjUrxfXjCoalkm5zQ%2FbBpGLQQMfrFzTsudqGs5sFqpWA2oIjpALgLZyRiIDwD878I4YcL3YtPDbUrC6lEV6klSY910CBHRpemZnLS1BmLuDDSD5apuAbkRjLfHG%2FRg9S%2BohQZ9UGLsfcW4PBJlAPhqclSj1tSN0JXLG6SCp7jynwG2vIespRWoFxZBPEojycQKFkcFxNEIw4zanJ0fNofdO80X3t3keYFzFMLP%2F8MsGOqUB9EQiOqaIzX6j0O7ogrgVbBlP%2FUmKfm7gy4XNFGtCLWrZLsiwAQnNUaxOa5790zEMa00cwuBbDoaumt7RbOFxSqYlrFz8YZTRmq%2BDcnHbwoGpOr8KkmxPbExBiPn0ya8T8G92sO58i86xFo5KjuDj6G5z%2Fy58uJoubYWAW2b6jIOkHql8qFFz7oq5SUm3aaeq5XrM3BWbe5GM4y0Stde5NkU3TlqW&X-Amz-Signature=94939a1b19c381bc6b0d0f2dbced009a139c3d2c7b9f037ddcfb67f5c13abed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### RTD Sensor Wiring


    ---


    下圖為 USB-DAQ-RD 電阻式溫度感測器（RTD）輸入等效電路圖。量測原理為使用一個約 1~4 mA 的精密電流源（Excitation Current），透過 EX+ 和 EX- 腳位將電流送入電阻式溫度感測器。當電流流經電阻式溫度感測器時，會產生一個跨壓，並透過 RTD+ 和 RTD- 腳位的內部放大器及 ADC 進行訊號量測。因此，在量測溫度時，EX+、EX-、RTD+ 和 RTD- 這四個針腳都一定會用到，不會有浮接（No Connection）的情況。


    市售三種電阻式溫度感測器的接線說明如下：

    - 在距離很短（3 公尺以內）的情況下，這三種溫度感測器之間的量測誤差可以忽略不計。
    - 如果溫度感測器與 USB-DAQ-RD 的距離很長，甚至超過 5 公尺，則建議選用四線式（4-Wire）電阻式溫度感測器。
    - 使用四線式（4-wire）溫度感測器時，直接參考下圖 4-wire 連接方式。
    - 使用三線式（3-wire）溫度感測器時，需使用一條外部連接線，將單邊的 RTD- 與 EX- 短路（或單邊的 RTD+ 與 EX+短路）。
    - 使用兩線式（2-wire）溫度感測器時，須分別將 RTD+與 EX+ 短路以及 RTD- 與 EX- 短路。

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/b9d6798b-3d9f-4745-ab42-b00ec8da7f27/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5JUS4U%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhcZMVClgTfMSz6DepWuW0W2KR0kSJ2ERn8g%2B3UzY9pAIgOiP403WJP%2FBnVRb1OceZ6Y%2B%2BWH97UMi06hfaG%2F%2B6UB4qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuaS7P1fi5FwKYosSrcA61E4PoZ2CuYxRz1ExYvVKvtZxgt%2BJmfxSTqUJ5hb5fL4lFEX0iZXE4S7%2F3EHwAsw56MNZtdZBl%2BqevHgZRWyGIk0S8pjzLhX1lnRQxD63O%2B6jSrIYR%2B7TeHXfb9pGNegK8xg%2BNpHRfMrY%2BiuN7LissVtVsOMIIU0B7uwKbKeLl4z7n5MbR6ygMLP14OjUyoHDZdPsEyJ96L5hShoJH3qAOuoh3LOEx3P2fU4RbOwqAoL3Cv16tusY6bWuDYCShk%2FK27%2B7JmmJkJVCCCmXOgp7hPiyv5RiaGuixv%2FH7PYgMIwyft8V2fyIz7fLRoSKnyanUmB%2F%2FeTD7MHYhcvR42wnsmNbrZKSSy923wLeqYxsoxuLQeZM4IxnAHZV%2FWjAHKltDVQTkyJSFSNzi6EamLf%2Buj%2BZjUrxfXjCoalkm5zQ%2FbBpGLQQMfrFzTsudqGs5sFqpWA2oIjpALgLZyRiIDwD878I4YcL3YtPDbUrC6lEV6klSY910CBHRpemZnLS1BmLuDDSD5apuAbkRjLfHG%2FRg9S%2BohQZ9UGLsfcW4PBJlAPhqclSj1tSN0JXLG6SCp7jynwG2vIespRWoFxZBPEojycQKFkcFxNEIw4zanJ0fNofdO80X3t3keYFzFMLP%2F8MsGOqUB9EQiOqaIzX6j0O7ogrgVbBlP%2FUmKfm7gy4XNFGtCLWrZLsiwAQnNUaxOa5790zEMa00cwuBbDoaumt7RbOFxSqYlrFz8YZTRmq%2BDcnHbwoGpOr8KkmxPbExBiPn0ya8T8G92sO58i86xFo5KjuDj6G5z%2Fy58uJoubYWAW2b6jIOkHql8qFFz7oq5SUm3aaeq5XrM3BWbe5GM4y0Stde5NkU3TlqW&X-Amz-Signature=0ad8cebd824e72fc3b3d6332e5205ef14569f8efee0da281f8190d6c1fa53bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### Specfication


    ---


##  🌐 USB-DAQ-TD


    ### Feature


    ---

    1. USB 2.0 full-speed bus powered
    2. 21ch 3.3V DIO (5V-tolerant)
    3. I2C/SPI/UART/PWM/counter
    4. 2ch thermocouple inputs
    5. Sensor type: K, J, N, R, S, T, E, & B
    6. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![USB-DAQ-TD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/6567400a-489d-45e8-8322-9420d7b60c6a/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCUZDAQ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF70ZKpR3GR%2Bkguy5s7lbF2kxmzkrTX5y4Vy26QZ0KHhAiEA4wu4rFWW2HoynWMGkHZ7XsZhdGq2RkUwXvPyA%2BKbi28qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHVrJeEzBLfXl9qlyrcA56OGEnc4e0gFLtrjKHgguwuorEKpqVw736QVfrJd%2F92GQ9%2BKeBBT8Es8FXxcCiguFjXNbK9A2S8ArsumOo1b%2BDJQzMRftCy3CQ8VACPnIOplILFA09Gz72Z6VcYLSyUfY63v3xO5kUNNhWDbiMIpi8j2MByN4ZCFOEkdzgzxAumMx5pRMopvABqxOITknVLoZ%2BqnaHeQkFii%2FE%2F40ydMMML6%2F6WVDsIxyayiK2ZMUuvqIq6SRNxIw6n39q775U4oKRjCuhUL5tQbYn6PvqKGjp8hMqG9ldJ%2BpDKdeslQSvDfDJDMsoVtIN5Rvvd8sQwsvEg5y9il%2FAPfgPxo03kZ3he601iJBIfK1yfHo9m9wsWTXJl%2Frb3AWPs8eLLH3GyoTzjclU%2FohaXH4ugA3z6zgZlRIlHlvLV5r%2BqOti1Vr7ngzMXvPNNRAy%2BQBP%2FDYwOq3HJAyJrh4kobyrQEaVJ8cSXKbuMfYlk%2BiS3TYG2k9BYaGPu5kUpyzjvOHQhNbRXz%2BF19lP%2FZKKI1j6Di1LnBLWdh5001NbbDwLXCCsgGOpkwc5xeP8Jmm6LzDdT%2BREVmS4lDvli9hNw6OCy%2ByUa5SMANiUWL2%2FGNnLwssHJn4k5s1E8gj4ETqLFtSVsMK3%2B8MsGOqUBC8wgEtAYY3N9FQjQpG4tEhVP9%2FEEAScxo7KaAeztDwlCIX9l1LMRwOuptFi1L7UfC0%2BtK7m9aI11YUfZ1ZAwyX9Q4%2FKBsPiF3KlTzqV8%2FDAtJwWNqVHl38eWuAZvX%2BObmc6ga53aIQGRrzQ9t0PkYHFxrUY7UMXY5zjuXbUx5LsIQbl9wflODIHPFRfW65ipp1rWKmGLZDbJs6dGWUUkWSPX97NN&X-Amz-Signature=759fc5cb2239d1631d562b3724e1cb6995c3abc87da9faaa0f40961267e9699e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### Thermocouple Wiring


    ---


    USB-DAQ-TD 使用符合標準規格的熱電偶（Thermocouple）連接器，使用時只需直接接上連接器即可。如果自行購買熱電偶感測線再連接到標準連接器時，有可能會發生正負極接反的情況。如果熱電偶的正負極接反，則 DAQ 的溫度讀值會出現以下情況：加溫時顯示溫度下降、降溫時顯示溫度上升。此時只需將正負極對調即可解決問題。


    ![參考資料來源 www.tc-inc.com](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/6237bc03-c7bc-491d-b6e2-20ac7b734a7f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCUZDAQ%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T055340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF70ZKpR3GR%2Bkguy5s7lbF2kxmzkrTX5y4Vy26QZ0KHhAiEA4wu4rFWW2HoynWMGkHZ7XsZhdGq2RkUwXvPyA%2BKbi28qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHVrJeEzBLfXl9qlyrcA56OGEnc4e0gFLtrjKHgguwuorEKpqVw736QVfrJd%2F92GQ9%2BKeBBT8Es8FXxcCiguFjXNbK9A2S8ArsumOo1b%2BDJQzMRftCy3CQ8VACPnIOplILFA09Gz72Z6VcYLSyUfY63v3xO5kUNNhWDbiMIpi8j2MByN4ZCFOEkdzgzxAumMx5pRMopvABqxOITknVLoZ%2BqnaHeQkFii%2FE%2F40ydMMML6%2F6WVDsIxyayiK2ZMUuvqIq6SRNxIw6n39q775U4oKRjCuhUL5tQbYn6PvqKGjp8hMqG9ldJ%2BpDKdeslQSvDfDJDMsoVtIN5Rvvd8sQwsvEg5y9il%2FAPfgPxo03kZ3he601iJBIfK1yfHo9m9wsWTXJl%2Frb3AWPs8eLLH3GyoTzjclU%2FohaXH4ugA3z6zgZlRIlHlvLV5r%2BqOti1Vr7ngzMXvPNNRAy%2BQBP%2FDYwOq3HJAyJrh4kobyrQEaVJ8cSXKbuMfYlk%2BiS3TYG2k9BYaGPu5kUpyzjvOHQhNbRXz%2BF19lP%2FZKKI1j6Di1LnBLWdh5001NbbDwLXCCsgGOpkwc5xeP8Jmm6LzDdT%2BREVmS4lDvli9hNw6OCy%2ByUa5SMANiUWL2%2FGNnLwssHJn4k5s1E8gj4ETqLFtSVsMK3%2B8MsGOqUBC8wgEtAYY3N9FQjQpG4tEhVP9%2FEEAScxo7KaAeztDwlCIX9l1LMRwOuptFi1L7UfC0%2BtK7m9aI11YUfZ1ZAwyX9Q4%2FKBsPiF3KlTzqV8%2FDAtJwWNqVHl38eWuAZvX%2BObmc6ga53aIQGRrzQ9t0PkYHFxrUY7UMXY5zjuXbUx5LsIQbl9wflODIHPFRfW65ipp1rWKmGLZDbJs6dGWUUkWSPX97NN&X-Amz-Signature=e45a4d5a2d4dbd94961eec09b3605ca2e6c1d4d183e8a9326bbf04c57fc0382c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### Specfication


    ---

