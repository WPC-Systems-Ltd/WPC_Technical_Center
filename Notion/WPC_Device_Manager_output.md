
# 🛠 **Introduction**


---


WPC Device Manager (WDM) is a powerful tool designed specifically for WPC devices. It enables users, even without programming experience, to easily operate, manage, and maintain devices. The 


The core functions of WDM include:


👉 **Device Search**: Automatically search for and identify available WPC devices.


👉 **Device Configuration**: Includes network settings and network time protocol settings.


👉 **Pin Status**: Real-time query and display of device pin status.


👉 **Test Panel**: Provides a test panel for users to control the device easily.


👉 **Firmware Update**: Quickly and easily update the device firmware version.


# 🛠 **Download & Installation** 


---


> [Download WPC Device Manager (WDM)](https://www.wpc.com.tw/wpc-device-manager.html)


![WPC Device Manager’s download page](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/4ace9f1e-e833-4d98-833a-95405614143b/%E5%9C%96%E7%89%87.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXNWGZAU%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIC3wn5sid%2Bm4B%2F6jPq6WacbwvDokR%2FIY2QzTpFYi4n4%2BAiEA63H%2B2dyzGTfTEg1%2Frwi2G9aoZ3iZLXrWM%2FZDkwD6%2FkEq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDIIhEgPFN430hQfNUSrcA0HaRJvi%2BEECKGFH2Q1fsSb9oIzRHNVE%2BuzGeBjAy%2FQE%2BfU%2F7nx8AW5mHJYBfNAc0GgtPYFX5QWCBCN7Eh2SvTVySqs2XSIMiPwZMFC7yQCo1assgheOQMas7HmV8XxKjxT%2FYBKCky6Q7a1LJvrn50U75ZR9UqiGOqNtGtga8C4Y0lLfJiY0wzpNPiRLMk9QkwwK54Og1ZXSu8mTsUkKm1r9I7OoR3CJJGEP7waDzncLssqwqEh6UHxuBTpmOOWOTs4tgXGeST2WFZU8JvyHkucBt2%2F6qDNqrM2uqB3wH%2F4V%2Bw6%2B6sih6o5hy1vgmGWuYrQX8cWy8n5FBvvIS61rHiaGiPJ5XeYVTL4cwi%2BDIojgCOJpnDTkFR7shctnnhXsFqf8MJW%2BUy3qA%2FQLwsJ0WaLtj6KwYswCjO%2BKAXZXSWQJpvFOnLgUYprIhZ31pXBEKK%2B4r%2FPNaPRuUHpFAI2fnDm8zpn4NTAq2PJG6q6%2FTcx286nbkeJjRxUfM6OFM%2BhbMMFnivRV8dT%2FP4U7t5WVWYcujWRTIt9SlTuFKiYj%2B8Too%2F%2Bl9aNV%2Fpc4fGI7m1tmrxwfg1NfPWqWtIKuMnWP2mirnSLam%2BXWf7NHz%2BM3bL1koDZ2Z4D6dZII8QRzMMSvi8wGOqUBYNV7AGk9nQ6crY9TVNybb9svjDg91UCzob4IKOmhhiLfAro35iRBfXu3IVzivMLq%2BZRjIeKwyzGjKDYsqB6FpGArlw3sfNpWNVx8hW%2BZOMCko7tw1heQUV6QaSMnUWgu6i6YFGDLxAPN%2B99MkGpKQfYemWZ5HuFhCWPEo2UwqZxj%2FFm7dWrVhiL2trXSHZ%2FsrlOCjsbLT69XxRkpewvS2IkbsKij&X-Amz-Signature=96ac5917727d8d2be0713878e7df3f6acffbb3cbea31f85a16a910d79654d9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 💡 To get started with this software, you'll need to have the **LabVIEW Run-Time Engine 19.0** installed first.


> [Download LabVIEW 2019 Run-time Engine](https://www.wpc.com.tw/labview-runtime-2019.html)


![LabVIEW 2019 Run-time Engine’s download page](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/4c6c7e15-f86f-4c18-adac-eb3c05f354ed/%E5%9C%96%E7%89%87.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VFMOLBQ%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFESUtCjk4qF8N6TekfiTPuEfDh%2Bo3I6Cf9I%2B%2FKjF9eVAiAuMHtKqqQQlPLvqX%2Bo2XZNM2pzZ0M01VPO%2BKHAHnz2Cyr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMGfsUa7UvGdot7QsmKtwD8AULBPo8JdXHZpZMe1MAmza%2FPWwGHUOYiMV6PDUYOiYGzjdJie9akabrKt%2FvyM09YYcDNbUu9A17cqNxsyr5wsaZrgXD4iQD55LJ75yaeIMtgQD1nQk%2FlcE1pq2vjjFqB%2BxPoigZ5b0jRDa22So2PIX49oIZn3QiJOzwptg%2Bpfs%2FfQrLr%2BhqYKCnCTgG5JYeA%2FjqB%2FIM2VjKs%2FdTfwZLE8tYcnmVkZlZ%2FmNRH62xomfuQYcU5DQM267ZZkACkTaOGDp65fp93r3ju5p0PphtXdbnnhaLfsHL7OnVITJO62XZbKA041BDi55Pf0Ub62%2Bre%2FeIjUAUxLbyOukbcrLxQOax1noLxicLrbhVWUTjGhBnmETaPi2CiDOxva8AiiFLNasBTwrG4hCRetw7Dvav0bNXhtHr66M5mq7%2BfIt%2BSJio0q58NZexUWSISfpNoe5DIX1x0zWzgggOj0oQkAf37PPoOaBpRuO%2BSYMldrKMqios37yRBnOT3UTufJetN4m1rr%2F1BRkQBY%2F231BsaewY6Qwof%2FYGTcKC2GVYU2OEqp%2FjuxIhhYHLWt1ubeGYKSfUr%2FKhehWrmBL3wmtGW3tNPvGY%2FMn42fnAIPlaIc%2Fe1aDXXvKo2k5dyLn2Ig8w066LzAY6pgERttuzk5ZUzcnVB%2Bmpx%2B0%2FpEejALcvPLKw%2FkDq7Xswi%2Fj8NhPlXpZRF0a%2BvuoCj6XIRctwaAWt798T6zdnAG2pU64UiPw3%2FZBfXpF%2BZiGeyG%2BkJTnxixNvfBAiMuZEG7xQXZ1Zr%2BWSDdgEyz0HOmYDhADuOxfMYuWU3cSScIhI%2FdYzEYZ2SlDB6iD2ZzZcjgjIiknsQibrvm88o33ohJISgM0jYlBQ&X-Amz-Signature=4a1e85f5f41160bd1df525ec61e1cd82d9621db49ff99b6b15aed891282535f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 🛠 Introduction For Main Screen


---

- 1️⃣. The DAQ is divided into **Network Devices** and **My Computer**. Ethan and WIFI series products will be listed under Network Devices, while USB series products will be listed under My Computer.
- 2️⃣. The **Test Panel** will display different test buttons depending on the device.
- 3️⃣. There is complete product information, such as serial number, IP, MAC, firmware version. Also, Users can also click the blue button to configure or check the pinout.
- 4️⃣. The device specifications and performance are described, and the status bar will display information such as **Connected**, **Disconnected**, and **IP Conflict**.

![WPC Device Manager’s main page introduction](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/d9857415-9c99-45a3-bcb2-7984fbe2a8be/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUFL2XO%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIA5pGsnpzxhMT7rTaZERm5yUSREhbuE9i0MYxHsxcVPrAiAmV9%2Bu7Z1rpTIkgcNIXOoWPJGNPeuaR0qsCkAC4HYIayr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMJEnVtXmL%2FS75K5StKtwDlnezIjS9kTTF7r9BzDYKocUxbx6HHy6zSSLelLUvU0Y2IOrEUwQH45MxfwU%2BVgPBicbX5Urcc4MkXnbedH7QT3QSrJr4UheFEoS3aomEZXSnscduUuWCPgk01JbdiGm2Tt47r4MWHBxKf22CSEuE7j2eieZEpvZO4Uef4Hj6Rcs7nqV0W9ZfZjCPDDXuLxFDHcVcBlLjwnkMOj6U9GTevWbVIHFZlD9xVedk2jrBDyaunVU1RUPWIThJ%2FG1PoOl3gD%2Bvhk1OXTTleHwYIcjeGOQcP7lZZH9WS73l1giFAt%2FaiB0IlNipbTS41XbRN2glFK9MQsIlQXy7Zmqy0N6kVqS2nemhL4B85XDZM%2BnqaCS%2FBL3mJPJObxXqBO78n8O1OKopFYjo3jbJoxE6WBL9Q0jLqhk0%2FrNwGgBFy7mzWKFP9lxhXSudLRZwOS88A5UiR6ctoBGgaSVT0oXQvmRzEmW6oGNCUMZsGSeOGs45p2Wi24Gkheiv72uq20br0vphISApKInqWOv8mBcxy0gFzYe9vBpHBgc64n7oJBRcmFuhquVkeUa3eXp2RpdeH9tbfUDNdecmqIaKwCZXRnyg%2FrgnELkGiW6PG2wcVc8lSJBOmRd0yn9yQkFTRE8w2q6LzAY6pgHvrkFlxNKdq%2Fcsk1NfDixiw2cHFTSqM0zGo%2FrTsXL4NHTP7CZsg5z%2FPW%2BTV7wtMp%2B809f%2FvmP7DnTU0hGI%2Ff7q7ApOry36cvF3PhmpJY8rZRgVQB4CGFnMnD1OU%2FQAHamwIGdvXpZOkHnx%2B0HlMsmeyvEUeINQQFkH%2F8e04Tduu6NBrmdJh745Hs1Ef8ygBs9g2d%2Fznoj0kwDn3H1GuPHft0HpVO65&X-Amz-Signature=a5fac14c1581a871ed1bb37e1bfee0f18b16577c6ee7b1d833bf3ec8cc6763d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 👉 This mark ⚠️ indicates that the firmware is not up to date. 


> 👉 This mark ✅ indicates that the firmware is up to date. 


# 🛠 General Function


---


## 🌐 Search／Refresh


    ---

    - Move the cursor to **"My Computer"**, right-click, and select **"Refresh My Computer"** to search for USB devices.

        ![Instruction page for “Search/Refresh- Refresh My Computer”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/310d8db0-6e02-4f18-8dd5-ee3fc4cb043f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TF5U7TW%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCQ3FXDcKEEeinoZeWrekmuOTzL8DXBYKj7cH%2FIP%2FEiBwIgf9eC9B6%2BRpo%2BZRCgad6xROMXoGXeI1rRYiSksOApDNkq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDHWiVN1kdQTHN5bsvyrcAxxs7dSy%2FrOhCi%2Fy6shGAnPKoAsEC9yKji2IKGfIvK%2FvV2bKMxB4ZLc%2BTG2xklkJQTpTFc4hMDFIjchOy1nUy1m53L08W97Krj5LjOsRHwlrBrY6MO5OaIoGw%2BfXruKyS2xv0DlhAzNAy1p6cBwpAL0DdUr2FrM9%2FSpBKU61hT1AKN8zpx2CKSFGeE%2BERKjYnE%2BjK9G7tlb75Tj78fxF9%2BgCIqSewEETqoTUn2Lm0aEo9GgbMlnzVfDJX4uN5JDYht7ZgH4RuipAaGsngMHaLiNd%2FY9Xo6DMC%2FK2Q3heCWyook2B%2B%2BFMUCh1dxW1vq1hjilTC%2Fd3CsadC58fhwzm1SeiLxnW9gCbCH5UxJJZb8idiNhpzZt1lVxOqFsYSZ25942eMECY7TZ4C4C5WhLjmELUYz1ixhh5yKiMixOn7hbOkPU%2BD4VIFe082IlcqbFdg18D2vHLBSuex1BcRY%2BIRLzC81Izx8A7F%2F0yZHsuHkmP3Nh%2F36MlRMBG4FNCzKg3u53pt6j1cajAQApaLBCjrfBGz%2FPMxZKReXJDR5ljhKQUgItB40WZWQQmKd9j%2BONqSDLczHH%2FEAuQ4WhmFHRUpuca8uKTuUxBZARqL6GmA%2Bl%2BEY48n8csooLu4Nm5MNSui8wGOqUBtLaAojDVEaEUHrt%2FYrJzlce6aJv8uv2Ib9eWQ%2Fd97sFLBtZH3tXaNjT5wyxr9jIt%2FSbDKcUdbY9UfII8xV2kerQx75reu981LLXDuU7cNGB0REFpd63%2B%2FS0HgvYxTO%2BCSLi8g7TzlxJX4tlPhaN71DJLpWqWzdNwu%2BekKOzt1weIiQ%2FJ89dZQDpCtb5rNHT9sH0LUaSmUBhMKCHG4M0639BxNSmV&X-Amz-Signature=545a3ecf60736523d535dbd3f5d6d80faf35f35fdacb8932b952d83cbe11ff2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    - Move the cursor to **"Network"**, right-click, and select **"Refresh Network"** to search for Ethernet devices.

        ![Instruction page for “Search/Refresh- Refresh Network”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/e1130dda-4efe-414f-bcae-fec7a32bdfce/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSG67HWL%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDxKGnj8AGt4SYU%2FXzPt9tNpw4MHeQQ4mAnD3UsESNpDQIgJJ0sYdMcnLP24hG8s9lr4Jh%2BYiSPbHAicgJyON9Em0Eq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDN%2F8BUK33J5DyDImrircA%2BP0vobyjIyYchpqhzJ0OoRww3foxMLrLK0d%2BJsHvUVm4EpnlTrH6P0J5V7CEuL%2FtghIhzF1AezcIbRfa%2BnflB3gjktIFTz4Yt2GzesFunVmuKUrDhSWu%2FT3ynZixm5RJvVAh2UzvCQx6S86k7drEMLI9iucH7%2FzN4TwJlleL0qOOiejGA0hZIpAfky%2FNNONyPoq40%2BUokTT6W2g4%2FVwqho1SjirPmhTEAPm8SY38io%2FjV4bte8Lh6vHjG3vxkcFaDHpb4VcKAYa8FfnO5mlBDjAmi3tMjExESYzf4iEISqo8dO6%2BYEpPnomAluRLFFEFhIhBZMkjGZGdDtZcRJ9dkvCjSkMNc6ZnrzExvm0DSBARkstlQS2HfgibHZ%2F7elgZpz8nLTZXHisbwAehXlu%2B7HI1mqe9SwnPK9o4D2vUcdlA3HFpSbu4HsePIxygBl9HLO345whM%2BfqmOmxK30TrKjR4FmqnNev7s4PBHjinsoP5IZXUgupo7AhcwtoPEkoDJVe8vqkpFm7lOSUlV9UIYKmrgjY%2F6a5axqf2GdOpVZG8fCxLzZ261JATTD9yjtvwmoUl4tilgJzIsI%2FyEfbSfjE9BSNlC6hGlRh2g%2B5QJnWNLTrAxuISgzeuWNRMLiwi8wGOqUBqb29onie2Bmoq00%2FpdLNau6uv1bI%2FJYaHhSj0VCWevVEhE3vpZusnefR%2FmWMI%2BckNuzy%2F5zpTKCOWUvIQ4RoTCieuRYH6NfZAbCtMsJV%2F3xdYMYqsW9WO8oDFZRwXy9xtmm05CvEfdi7PvJU5fhv5owcH5Llyki6g79fHyh4An8OtgzsKTIG3XNAPfn8Xn7BeWO0YTQn740hu39aOF4Q1RHCZ5%2BE&X-Amz-Signature=c3bd519ab2e3981f20b77eb31023bf65062e3c7ade0d586708259d203480bcef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    > ‼️ If network devices cannot be found in WDM, please first check whether the IP address and domain settings of your host are within the **same domain** as the device's IP address.


## 🌐 Add Simulated Device


    ---


    To add a simulated device and view its pinmap and supported test panel, please follow these steps:


    👉 Click "**View**" in the menu bar.
    👉 Select "**Add Simulated** **Device**".
    👉 You can hold the **Ctrl key** to select multiple devices, then click "OK" to confirm.


    These steps will help you add simulated devices and view their detailed information.


    ![Instruction page for “Add Simulated Device”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/a1a617fc-23ee-499e-a31d-e398ad093069/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4OW7K3%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICfDIFGm1zCT4xH3uw8S1x9YOW5AzRoavH5wq2vAJTq6AiALXDHFG69N8DCoqnFclGvgtzQPcbgAr0shECnMJdlUrSr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMxNtasOCGKZsRbY%2BtKtwDzRGB9PnuDN3Wkd%2BR6zDrglCy3CQuEOkfbeE7k7Po9Ge4r2qcjemvCa7%2BnI6qhA5g0MSjSvitt1gmiImGZLOrhMA4xwY1aCmisnDwtBfMYI4Ryl6zNxSas%2BBGUDYHbMnqvkf4814WCrSVu36%2B8%2FboBWZlIkymAFNAQmQ3iYV0UPBNHciHurZUZ%2FeNr7QrtcSX4sDJBg8w7%2B9FhWYoIOBqj0gdX%2B3oQPwp2HMTi689uxefbUsISeFDkqpmDOOZ7DSluFYtCc%2FTfp9XXRrKDrTDk87LkVkRI6A8eVMkdIvSlJGMdtRr4T9YZpEMveLbblzvYAeY%2F1pqMGdKVaK8r9RVMzsayFipIKUcC9BM364ppAtmoVzZ%2BdpPeYn81uXuFryN8xLdPaaSzzRbSGHhihieQbiCV3xmW9pp5%2Bk3%2BJQld2aGFrBe3yJT%2FtgY82v0Q%2B90ljT3hbin6unqhV2F%2BHw%2FqLQXICgDv95POw29i9alBS5RYHo3FbRzL6RdtkLGqper9l1NjTb0KFSfQei0Uo8jMqEar113Q%2BU4lq0rlmK78GxLAfFrwMAU0V4t42cKFx7dxTtvEPqsPnDWPNwrc7N5BmJXIAgQEaSEObkQcCFw0e%2FfI7AHLyaiR3JyX10w166LzAY6pgGxWLvMBHrgXUajpWhnoTcq532%2F2R3QPLRB0BjWsplBeGbLdxkP8woAtdbaH8r8FX%2FmPBKDLGjtwQmZqdK18t2QOODGhEcqIyVK9ZJ5l3v9EfHp6E2L1IVaKSDcTz9dvwmZo7RjWb3y57e1mll4FTK5HaT2NqVJuYgHV7zhEJlKFgVKVR6vKBHPJOm1edRKE1rV9Tka6sOck4Nz6eN3T7g3ciJ1Zdtn&X-Amz-Signature=cffa7c46156b681076db44ce9ceacbcd1c282754e40707bbfbc66c5a7299caec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Identifying Network Devices with Flashing LED


    ---


    You can easily identify a specific network device among multiple WPC network devices by using the flashing LED. Please follow these steps:


    👉 Go to “**Network device list**” and move the cursor to that device.


    👉 Right-click, and select **"Toggle Blink State".**


    It will cause LED to start rapidly flashing on the network device. To stop the flashing, please click **"Toggle Blink State"** again.
    


    > ‼️ This function will only affect WPC network devices.


    ![Instruction page for “How to identify network devices with LED” ](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/736b5b74-2988-4f4c-bc0a-cf625ee1c81c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TOZZCDB%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDaCpmND4eFsVhTnFMV%2FT475feBbhD4HDyEFsUQjYK9mAiB7fZO7PJNsPe1kTec%2Fw7Ss8RcjEEL92B8Hl6Le81YI7ir%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMbc2d%2BivXVxMITRBFKtwDECNTdRiNB96%2FvFc9TTOM668J4hg42HsCSGCLXRTfLM98kE446%2FJ%2FW4WcErvyei8w8c6e7jgm%2B9q4LIAKeUuZCXNpvs8jSx80tcJooPdxuut5mIJCpFDEkD5IeZnq9WxappH9g9lGFTiDkgqmx4OTWY4%2BVjlq0K7TbU8qKrbVQxf1vQmP4t0dd7mvfjHot5wjEZLI3OTkXJe3ayjYbX7Oq1AJaqznjXAdCzi6U30lTalXZGsRR8MMrqsCTdYVtdIJ4dTWgRfqaOeWE2AqiuLIi0zN2kJD9%2BdJyYbA%2FodWDNI8%2B7GNoW6i4l7YfIkHm0Njz7mIz3rY%2FD07y0tHGYLx5AArCR6sO56eY3iETHAIH704Wp7xb0YK0wnvjiI5Y0FQG107wY7r6CCpS4XI7RUC0qCBys44spriLh5XRofct82mWdToE5RJM197RrD9xlXkmq3aYe7IEHAZXQWFvcAtb6Loal4gbGuH6jyZ8NRSW0vMJcGe9EypMCQCoOVDBT4NJryrxpqI2QPfMqotPbG0EfMKoL7X%2FUgsnpeX5HjnCKvQHP1cAZQApxnyn2ZCXoaEpJ4MHKFF1F5FBQgfEYUJIJkgS8f8b1sPTmjlBpWo%2BNbq2aRhTbld1Mkzdkswuq%2BLzAY6pgHeEBZG1hYvKFwUa6EH7lUyxrErqLyezAfLcXhn6gyXGs%2BKtFFLDia08JRjT28%2FmHVjhMT9KPjacTCY1TrcHoKg7xPLTbb643SmZVlP3JiPasEVt21HyZsaDzU96rb8l6rBlBOoa9ezC2dTEwfZD1twA%2FAsAjs%2FSEJjYL4eC%2BDloGAnpLYqmedy0vB5xXz1%2Fc13lkjPCjG12IMyktBeDEdsFoc4MMLT&X-Amz-Signature=040940b7e439f70c443e6df9aa2f6082f18597e2b657f50de367af6c9c9971d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 🛠 Function List For USB Device


---


## 🌐 Refresh


    ---


Please click the **"Refresh"** button to reload the product information.


    ![Instruction page for “Refresh USB device”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/02b37620-51dd-498f-8f36-7cfc3e7a3d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRD5GWP%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDzEDkcjQJaSTzyk%2FO%2BvYCVxV6wj5gLE6uoBUWioLNOoQIhAN%2BnW8zGaI9zO0JBx%2FmWf3pTLr%2FmzMfMM90SHSbCiPF0Kv8DCA4QABoMNjM3NDIzMTgzODA1IgwVLjlTjDSG1UihbL0q3AOSLiqM6vJc%2FVbFAFuRgp%2BOv%2BfzlhxhcMkwcIBU14X0SZHjKyQnyfAKznnWRZ3Nn0huIBp6%2F0aUAL7XrW752EKlnDNmZ8y%2BawXYsdWyLAgJkCdpOSccC2SnAJ2QNC5E%2BlBq8H1%2BZkTL7lVNzEgbNwt663BbajLpmbjnlOGngY2%2BEyE3GSadlUQ1v5vriPTzilKbH6UYHS8b2m7G9W%2BbRwxLPwCAtnu7alc4CqqljHsFT9c0dM8H75fgd2BBWBrRQnBHxY0jD0xKgZnePPGIONs9iSdNTa7Fr9%2BJpx5CHKeJyx8AG1DHLXBRP2%2FAVANAyl%2BxX4g3qj05m75HkOf86byp2cb%2BItDZQfexLQbbJlkTuOTk3MemBT0k%2BzqYO0l8Uc825%2FQ2q4UvszJ5e9mdpfCSkesbdFMfcdDUkhv%2Fb5DSH%2BFMECCPKF1MTeaGxlf0A2C5WZ1VDr79ivCuFtd6zZRAAO7kcD5owuZ7z30z3zBApcnLVlbbRSPe%2BICnn4lLBJ9Gk9W3yjwxRO4tyYXlXtka%2BfCSZqI6iODp6vAKUo4KgvoQm6kaifLQs9vlIegm56c1tCVgDsEZ1eb3Zq7lJ09SlweaMBCDrXi4PzT%2Fxi4L31G6HgrZ51NdGc0GZTDLrovMBjqkAXzzD7KFdXbSyHbWCDVGluC669OhBfiEVsQwHUKR6kHE7R6rNbuMHmT%2BN9DmuYTJiLymKs1H945i7mjC3H10N47ZiQE2tsY3su%2FN27UrgmCUsRtU6a7n%2FZVK8vYxZeEy0YCwTclGz0elxTQwHSc4hSIpN4jBpJvVqpvpDP0hZ8PZ7hiS4Pr10ZqVjVH7bk3jx6%2BdzLer6y22FwSGcFQoAfyZ38pC&X-Amz-Signature=f58f5f558ebeb9332524b6b7ada55c744bc7d403c6fb216bdaa34cf77ee8abf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Pinout


    ---


Please click the **"Pinout"** button to display the pin map. The window can be resized according to the user's needs.


    ![Instruction page for Pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/ae999f98-6946-4852-a0de-c758e3bea891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CN7AFZ%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIB4eMFHvCEecqjD0zTe5ABwcnl2bSE%2FQjuRxC0HBVPdEAiEAoJDN5PKD9qaGmha5qCHZXRcbEd8jJl4SJR8E1YnHfiUq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDPqVTo8AD%2FISG%2B2smyrcAxe4lTQhvjVolUK7PT95ZqB%2FnHaYeECHAnIi56%2FEzug4DY3Y16VswCxF5EMke28g2myxjH0tTghCGw3r8%2BAgOj6%2BvwYj%2BDYTpd%2FoNZNkR3r1DOOHlmS1gWXBKfQa8J5j893DrMUhIA%2BgP7FJ%2BF6jM2OoJwcxTUE9kW0KJKl%2BITDOhCBvMurSLDCONaqsnWWRiC01U2oEv68Sd406f6RpXaYUV7S%2F3IAKzpiivjcnw6rGUqph9EspAIBlOzUdvPJ9T7GHOzY%2F4ZCWDBkarL5K%2Bx9mUFKUE3dpx9dOP3xAGfr81ekh0tPmcLjnjGeOWMLpGkfO2vINMUWIO40sAKy8S%2ByvibI8XQFbM%2FFG6%2Fo5dOrve2dsZUTd3TNpNayjiZIbFF6yrWFk9k7EF%2Fgllso2RGQKZ1Ct0UUj60CEewvZFxv9El0PxPKbYVC%2FqU%2BWCRyJ5Rbsd459s27MElAmyqt4mqJRDcPa7XEHEV0Fhn45rtaRaOHbXfG4DUOBqi2YCXPBF0WBx1OMICQCNzQJSkTL6RRpqZo0deLwKr10VB0oUDPLGK41JbrGiUSauR3LPRq5K9d4x5wWqF5INwlUqHVTfrhnK1ZmV0qOZn2%2FcF57sBHP6EG02%2FeG%2Bq%2BvjAXlMPGui8wGOqUBQYz4haE4shl2bFr0tyL7zbRmbvza8TPp1z%2F4MUvNmPxYVKxqd92YVf3aWK0eiIoL1DQ2ylENupAjAVq6JzgnWfUXcsfNM2NMBLmuBiXKnGHkARAiRs9wIK2vxLrthnYeBzbyQRze%2FJoIoV%2FV8UpAiYjWblFUZbPNp%2FLjPpJ4dHPpoBa3NN%2BKe8Ycm905LrTcE%2FHL6c0fRGkfAnyNwGm7ui5P%2Fuvi&X-Amz-Signature=9465123c933fe0b22de775c8beab956107987ab4e02a8ad07b0423121be6a268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![USB-DAQ-F1-AD’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1a7c8bc9-b2af-4296-b98d-95a78d483045/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CN7AFZ%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIB4eMFHvCEecqjD0zTe5ABwcnl2bSE%2FQjuRxC0HBVPdEAiEAoJDN5PKD9qaGmha5qCHZXRcbEd8jJl4SJR8E1YnHfiUq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDPqVTo8AD%2FISG%2B2smyrcAxe4lTQhvjVolUK7PT95ZqB%2FnHaYeECHAnIi56%2FEzug4DY3Y16VswCxF5EMke28g2myxjH0tTghCGw3r8%2BAgOj6%2BvwYj%2BDYTpd%2FoNZNkR3r1DOOHlmS1gWXBKfQa8J5j893DrMUhIA%2BgP7FJ%2BF6jM2OoJwcxTUE9kW0KJKl%2BITDOhCBvMurSLDCONaqsnWWRiC01U2oEv68Sd406f6RpXaYUV7S%2F3IAKzpiivjcnw6rGUqph9EspAIBlOzUdvPJ9T7GHOzY%2F4ZCWDBkarL5K%2Bx9mUFKUE3dpx9dOP3xAGfr81ekh0tPmcLjnjGeOWMLpGkfO2vINMUWIO40sAKy8S%2ByvibI8XQFbM%2FFG6%2Fo5dOrve2dsZUTd3TNpNayjiZIbFF6yrWFk9k7EF%2Fgllso2RGQKZ1Ct0UUj60CEewvZFxv9El0PxPKbYVC%2FqU%2BWCRyJ5Rbsd459s27MElAmyqt4mqJRDcPa7XEHEV0Fhn45rtaRaOHbXfG4DUOBqi2YCXPBF0WBx1OMICQCNzQJSkTL6RRpqZo0deLwKr10VB0oUDPLGK41JbrGiUSauR3LPRq5K9d4x5wWqF5INwlUqHVTfrhnK1ZmV0qOZn2%2FcF57sBHP6EG02%2FeG%2Bq%2BvjAXlMPGui8wGOqUBQYz4haE4shl2bFr0tyL7zbRmbvza8TPp1z%2F4MUvNmPxYVKxqd92YVf3aWK0eiIoL1DQ2ylENupAjAVq6JzgnWfUXcsfNM2NMBLmuBiXKnGHkARAiRs9wIK2vxLrthnYeBzbyQRze%2FJoIoV%2FV8UpAiYjWblFUZbPNp%2FLjPpJ4dHPpoBa3NN%2BKe8Ycm905LrTcE%2FHL6c0fRGkfAnyNwGm7ui5P%2Fuvi&X-Amz-Signature=916b9d58af8508f56f7c96c13ecd6430ac41ddf1110ad676a9280e69d0794d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Update Firmware


    ---

    1. Please click the "**Update Firmware**" button to begin updating the firmware for the USB device.

    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/ee596fe9-ea82-4e18-8dd3-21f20691932b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS3ABCS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCx9RsCmdPINJ%2BVYZ6cxrrwneMN1jX76lndh3bRKIV1vQIgSWt4tdyXMj0ndHCIycX71FANiUzeDsMNfotRKhpFDZwq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDO4advHbV0UGO4JHbSrcA%2FHkhb2haZ6AxaIyReYnpRbImFoaEGVeuR2iHKBo5Tdtf9scs1BDqWboeNdOUCVHK9I8pMFO%2B%2Bntyicnuz3b0JwOl%2Brq%2BrX4wMCVQe2rcMji5%2Fh7Tv5xFT9vCCeDjDOXi6IiAi%2FnS2faaiU%2BJP5O%2BoIQHXLgzTVgaYbx8qRoJ7LFUHUPSyg5rXntG7DoW3G7wkAYBtLWGdTJJRrddPgbNPRry5BMRQRcidEsSLkLe2BOp1GNDJcxSaILP32gDEDfTB2GpZZnLAIzmpN1Uu0Sj4a%2FM10BxZxRROot%2BDVz29WhpWHXrQD9j0hmAtfhbzyyUsx1EKHDvGYmss%2BVTf3BMrdktXWJt3EnWikxHiIYL8yyjl8N5uN4va46swsy0QNU%2BRSMi1iem4R3jBoZyYNS8Xi6Z6Fzp%2FsmNRfAubwZzy64llLSDpo2k1VToi%2BY1vmWhgZRTcrD1Vwxok4ia6JHOhVwu8go5oGRPyxf6o%2FbIPVeC%2FbDFVpWcXc5Uu1YOejvt6M4TqxPT7JXjgwx12LepfV38Kh38Ly%2FCiLfD959CstLKP1IdA33m0pAucyxZR8NK%2BKIuMD865LONBk8kfYv2GdAKFowJ4x6mDtpNSLN2mg31zoLcGvmyi7yT20aMNGvi8wGOqUByqsdUoaO8%2Bf67SwcJ7lznLG0GUu75Gu6kkloQRGenFlPrIOrpr9UAF6%2BG8fCmSsUDWZjwn%2Fp7cWYRDJwJrrh1xSZ6FLspL8B0hMpJ5ClNVsiEzY%2BwiRp2amwh5tziBDh%2F%2F%2FC2VYaKSKIoX5c%2FTnG%2BoNRJ0cbYXwfadFl932ZKQ4q78L2mUBeCuYDMYqR70tWPzMOEKIsOB9dal%2FqjQS9t67ZnfnY&X-Amz-Signature=bfdf77ae845f114792811c34958de7d7ee372738c491affcc5497beac43189d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 👉 This mark ⚠️ indicates that the firmware is not up to date. 


> 👉 This mark ✅ indicates that the firmware is up to date. 

    1. If you want to update the firmware, please click **OK**; otherwise, click **Cancel**.

    ![Instruction page for “Updating Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/360a90e0-7f19-4b2e-a3c6-07efdcf11eae/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS3ABCS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCx9RsCmdPINJ%2BVYZ6cxrrwneMN1jX76lndh3bRKIV1vQIgSWt4tdyXMj0ndHCIycX71FANiUzeDsMNfotRKhpFDZwq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDO4advHbV0UGO4JHbSrcA%2FHkhb2haZ6AxaIyReYnpRbImFoaEGVeuR2iHKBo5Tdtf9scs1BDqWboeNdOUCVHK9I8pMFO%2B%2Bntyicnuz3b0JwOl%2Brq%2BrX4wMCVQe2rcMji5%2Fh7Tv5xFT9vCCeDjDOXi6IiAi%2FnS2faaiU%2BJP5O%2BoIQHXLgzTVgaYbx8qRoJ7LFUHUPSyg5rXntG7DoW3G7wkAYBtLWGdTJJRrddPgbNPRry5BMRQRcidEsSLkLe2BOp1GNDJcxSaILP32gDEDfTB2GpZZnLAIzmpN1Uu0Sj4a%2FM10BxZxRROot%2BDVz29WhpWHXrQD9j0hmAtfhbzyyUsx1EKHDvGYmss%2BVTf3BMrdktXWJt3EnWikxHiIYL8yyjl8N5uN4va46swsy0QNU%2BRSMi1iem4R3jBoZyYNS8Xi6Z6Fzp%2FsmNRfAubwZzy64llLSDpo2k1VToi%2BY1vmWhgZRTcrD1Vwxok4ia6JHOhVwu8go5oGRPyxf6o%2FbIPVeC%2FbDFVpWcXc5Uu1YOejvt6M4TqxPT7JXjgwx12LepfV38Kh38Ly%2FCiLfD959CstLKP1IdA33m0pAucyxZR8NK%2BKIuMD865LONBk8kfYv2GdAKFowJ4x6mDtpNSLN2mg31zoLcGvmyi7yT20aMNGvi8wGOqUByqsdUoaO8%2Bf67SwcJ7lznLG0GUu75Gu6kkloQRGenFlPrIOrpr9UAF6%2BG8fCmSsUDWZjwn%2Fp7cWYRDJwJrrh1xSZ6FLspL8B0hMpJ5ClNVsiEzY%2BwiRp2amwh5tziBDh%2F%2F%2FC2VYaKSKIoX5c%2FTnG%2BoNRJ0cbYXwfadFl932ZKQ4q78L2mUBeCuYDMYqR70tWPzMOEKIsOB9dal%2FqjQS9t67ZnfnY&X-Amz-Signature=31cd423e11dbddd84e8b479cf7b4fd5e2ae3eca308718282dfb613712f27efe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    1. Please choose the bin file.

    ![Instruction page for “Choose bin file”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/aaf63223-9a1f-4182-a396-1afc17274455/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS3ABCS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCx9RsCmdPINJ%2BVYZ6cxrrwneMN1jX76lndh3bRKIV1vQIgSWt4tdyXMj0ndHCIycX71FANiUzeDsMNfotRKhpFDZwq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDO4advHbV0UGO4JHbSrcA%2FHkhb2haZ6AxaIyReYnpRbImFoaEGVeuR2iHKBo5Tdtf9scs1BDqWboeNdOUCVHK9I8pMFO%2B%2Bntyicnuz3b0JwOl%2Brq%2BrX4wMCVQe2rcMji5%2Fh7Tv5xFT9vCCeDjDOXi6IiAi%2FnS2faaiU%2BJP5O%2BoIQHXLgzTVgaYbx8qRoJ7LFUHUPSyg5rXntG7DoW3G7wkAYBtLWGdTJJRrddPgbNPRry5BMRQRcidEsSLkLe2BOp1GNDJcxSaILP32gDEDfTB2GpZZnLAIzmpN1Uu0Sj4a%2FM10BxZxRROot%2BDVz29WhpWHXrQD9j0hmAtfhbzyyUsx1EKHDvGYmss%2BVTf3BMrdktXWJt3EnWikxHiIYL8yyjl8N5uN4va46swsy0QNU%2BRSMi1iem4R3jBoZyYNS8Xi6Z6Fzp%2FsmNRfAubwZzy64llLSDpo2k1VToi%2BY1vmWhgZRTcrD1Vwxok4ia6JHOhVwu8go5oGRPyxf6o%2FbIPVeC%2FbDFVpWcXc5Uu1YOejvt6M4TqxPT7JXjgwx12LepfV38Kh38Ly%2FCiLfD959CstLKP1IdA33m0pAucyxZR8NK%2BKIuMD865LONBk8kfYv2GdAKFowJ4x6mDtpNSLN2mg31zoLcGvmyi7yT20aMNGvi8wGOqUByqsdUoaO8%2Bf67SwcJ7lznLG0GUu75Gu6kkloQRGenFlPrIOrpr9UAF6%2BG8fCmSsUDWZjwn%2Fp7cWYRDJwJrrh1xSZ6FLspL8B0hMpJ5ClNVsiEzY%2BwiRp2amwh5tziBDh%2F%2F%2FC2VYaKSKIoX5c%2FTnG%2BoNRJ0cbYXwfadFl932ZKQ4q78L2mUBeCuYDMYqR70tWPzMOEKIsOB9dal%2FqjQS9t67ZnfnY&X-Amz-Signature=e987558ab519a6ff9473c4d0a6a66e112e8d4c79d204a6140f41579bd44088ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    1. WDM is going to update the firmware. Please click the **"OK"** button.

    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/c9524e3e-051c-48b2-8110-3a50ef66bb59/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS3ABCS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCx9RsCmdPINJ%2BVYZ6cxrrwneMN1jX76lndh3bRKIV1vQIgSWt4tdyXMj0ndHCIycX71FANiUzeDsMNfotRKhpFDZwq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDO4advHbV0UGO4JHbSrcA%2FHkhb2haZ6AxaIyReYnpRbImFoaEGVeuR2iHKBo5Tdtf9scs1BDqWboeNdOUCVHK9I8pMFO%2B%2Bntyicnuz3b0JwOl%2Brq%2BrX4wMCVQe2rcMji5%2Fh7Tv5xFT9vCCeDjDOXi6IiAi%2FnS2faaiU%2BJP5O%2BoIQHXLgzTVgaYbx8qRoJ7LFUHUPSyg5rXntG7DoW3G7wkAYBtLWGdTJJRrddPgbNPRry5BMRQRcidEsSLkLe2BOp1GNDJcxSaILP32gDEDfTB2GpZZnLAIzmpN1Uu0Sj4a%2FM10BxZxRROot%2BDVz29WhpWHXrQD9j0hmAtfhbzyyUsx1EKHDvGYmss%2BVTf3BMrdktXWJt3EnWikxHiIYL8yyjl8N5uN4va46swsy0QNU%2BRSMi1iem4R3jBoZyYNS8Xi6Z6Fzp%2FsmNRfAubwZzy64llLSDpo2k1VToi%2BY1vmWhgZRTcrD1Vwxok4ia6JHOhVwu8go5oGRPyxf6o%2FbIPVeC%2FbDFVpWcXc5Uu1YOejvt6M4TqxPT7JXjgwx12LepfV38Kh38Ly%2FCiLfD959CstLKP1IdA33m0pAucyxZR8NK%2BKIuMD865LONBk8kfYv2GdAKFowJ4x6mDtpNSLN2mg31zoLcGvmyi7yT20aMNGvi8wGOqUByqsdUoaO8%2Bf67SwcJ7lznLG0GUu75Gu6kkloQRGenFlPrIOrpr9UAF6%2BG8fCmSsUDWZjwn%2Fp7cWYRDJwJrrh1xSZ6FLspL8B0hMpJ5ClNVsiEzY%2BwiRp2amwh5tziBDh%2F%2F%2FC2VYaKSKIoX5c%2FTnG%2BoNRJ0cbYXwfadFl932ZKQ4q78L2mUBeCuYDMYqR70tWPzMOEKIsOB9dal%2FqjQS9t67ZnfnY&X-Amz-Signature=1d401cb7ddcc3366c1af399768dcca3e0f7166b314db734d9cf64ffd3a774d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    1. Updating firmware

    ![Instruction page for “Updating Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/82d10b66-7cc4-461b-88dc-d70646e27b40/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJS3ABCS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCx9RsCmdPINJ%2BVYZ6cxrrwneMN1jX76lndh3bRKIV1vQIgSWt4tdyXMj0ndHCIycX71FANiUzeDsMNfotRKhpFDZwq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDO4advHbV0UGO4JHbSrcA%2FHkhb2haZ6AxaIyReYnpRbImFoaEGVeuR2iHKBo5Tdtf9scs1BDqWboeNdOUCVHK9I8pMFO%2B%2Bntyicnuz3b0JwOl%2Brq%2BrX4wMCVQe2rcMji5%2Fh7Tv5xFT9vCCeDjDOXi6IiAi%2FnS2faaiU%2BJP5O%2BoIQHXLgzTVgaYbx8qRoJ7LFUHUPSyg5rXntG7DoW3G7wkAYBtLWGdTJJRrddPgbNPRry5BMRQRcidEsSLkLe2BOp1GNDJcxSaILP32gDEDfTB2GpZZnLAIzmpN1Uu0Sj4a%2FM10BxZxRROot%2BDVz29WhpWHXrQD9j0hmAtfhbzyyUsx1EKHDvGYmss%2BVTf3BMrdktXWJt3EnWikxHiIYL8yyjl8N5uN4va46swsy0QNU%2BRSMi1iem4R3jBoZyYNS8Xi6Z6Fzp%2FsmNRfAubwZzy64llLSDpo2k1VToi%2BY1vmWhgZRTcrD1Vwxok4ia6JHOhVwu8go5oGRPyxf6o%2FbIPVeC%2FbDFVpWcXc5Uu1YOejvt6M4TqxPT7JXjgwx12LepfV38Kh38Ly%2FCiLfD959CstLKP1IdA33m0pAucyxZR8NK%2BKIuMD865LONBk8kfYv2GdAKFowJ4x6mDtpNSLN2mg31zoLcGvmyi7yT20aMNGvi8wGOqUByqsdUoaO8%2Bf67SwcJ7lznLG0GUu75Gu6kkloQRGenFlPrIOrpr9UAF6%2BG8fCmSsUDWZjwn%2Fp7cWYRDJwJrrh1xSZ6FLspL8B0hMpJ5ClNVsiEzY%2BwiRp2amwh5tziBDh%2F%2F%2FC2VYaKSKIoX5c%2FTnG%2BoNRJ0cbYXwfadFl932ZKQ4q78L2mUBeCuYDMYqR70tWPzMOEKIsOB9dal%2FqjQS9t67ZnfnY&X-Amz-Signature=4b8354935cbeeb48576e319ddd0488f5f815e899b62f866c1edef4acecba18e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    > ‼️ Do not turn off the computer or disconnect the device during the process. If the firmware update fails, the device must be sent back to the WPC for repair.


# 🛠 Function List For Ethernet Device


---


## 🌐 Refresh


    ---


Please click the **"Refresh"** button to reload the product information.


    ![Instruction page for “Refresh ethernet device”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/eb2ac6e0-7670-4e36-a54c-c387f3f0b72d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSMQLEHV%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCKWjN78Y1ao%2FFpnQoxSfWLR1Xg0KkgpNsXpdIIZjyDmgIgI%2BRcBxzCIy%2FzeuIdSRjFlmW7848cxfkeUueXJIj5n3Qq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDP5pPG8xrOKKiX%2FdXyrcA9aNhmUbin1tg3iGDs6s8QHn%2BSRWvQMpSate7PoVwiedS1CL5nzsNSw0ffcYE3BjxqGaqW0oF0oOkH7XVT6aztzNiLrsH2j3oURD434oXM8VlQnFZ7AIChrugNnu9icRQnhKVEJIUg5IojUXkWhvqZfGSIZZugWxa%2Fjyc71x8z%2BUX1hv0KDE5C10o30JXLMcJaM%2FAyGjOK3OXgTRWndM2iF8QBXsWJb9Yzppp0iypsJk3gdjo2liu%2F3kxOE4Jde9ls6zViGeaj7%2BqBa3IixrwztIE1QvnHDcKgNFfOISUE%2B%2Fz8AytEFFEpT1ULlMZoBtmWXBFOMBng2EN74XjwHi6cAM4aDq%2Bw7DSq%2BEHvssS05inxDbl9kBI63ohIpKKKHx%2Fg0FHt45JAij9x97O2VLgATf7NtWkmy8r%2FddnW0YIK0566tvNvKgVybq1my%2FuCPjWG2rqycxsF69OhIU3na%2FG4knpndRUY8AerXlXWfzoZwwegxHOtERujT%2BMd20YbFxNUMdYR%2FVd9dtjiPXQRzcKQeR0zTyfGCoLUqvMclf81OUutic1%2FuDRJT4pM5RwJy0i12uMK8XgxKmH8t019mheQWDPrksmv5M2NsY0u%2BNs73jFS5qcEJavC%2Fq80kkMIiwi8wGOqUBDc8EKc%2BHmwa34U6%2FMDSrjzOdOwRWPdO7ULJ5%2FzM%2FJhaUFFvqPR54pwrWmqo2dZSewLEDUvnnV6oZXyyRS5JIclEKUqLlBdt%2BJN2jBsKdpSkdg%2FQQE9Erp%2BLtrDaj3FrBIBcSKbNgsyuCSvEmSbgeHn3CCiPKBpBrtsFGw%2F0wD9DvL6RyH8q%2BzVmuWGuyimr3pzsgEbpVZlHqbsf5l0WnUsO%2FV3Hi&X-Amz-Signature=605109b0f969fff2fbfd176d56f944230b286ebdf876ffe34ae04c07d2038f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Pinout


    ---


Please click the **"Pinout"** button to display the pin map. The window can be resized according to the user's needs.


    ![Instruction page for “Pinout”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/928d2a68-32ff-4c6c-81c4-817e28d95e0c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAV54AVU%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFX8w8htCib%2B9TXSn%2BUXtE%2F1Qzc%2Brr%2BpZ8QG7OyhVqsLAiEAzJbJVEq40eP0ZpSA1Z7%2FDUVEI%2F%2B86zPX5qOwnljxNwUq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDMQ%2B%2FjU6RjhacVHY9yrcA5E4uEcK8gXGumn2N3N9ckHoxfG0PbyhICsBWLOGFmXepbovk2y0jEHKI%2Bxc%2F%2F6%2Fw3DRunTDLcFAr2NwCZvQpwic2RkMiWPr0ZDqb0pnS8IhtEq7sFpwGca18tusSFs%2ByBGKRWDTRUSmHjOhizLcTUMO%2FiKWGq3W1sitBDNHgXLzgpqb%2FT4s1%2BTOY83Wfk7cIggWbDMA01TWnhZ4p4Ip7Xduf0BEWfByUJCrLb6qUuzltog6lKvy7eUcnVJNNC4FRhAPl%2F9nNSg62XVAAzb8PtWYchvODxz2GcN7MZChCCOkx2r1%2Fu4sAZFQBJx38QLNuHUVfaAEH3LvAVXHjOB52O%2B6N8dWhE9%2Fq2r3NSad9QIVfQoC4XcbZKiQbQ%2FKbiIzTtihImo2dK5v7u1jpE%2BU8JBm1bh5H2WJMr%2BivyGorCMD%2FS1f40w4%2BBndC%2FYEilp0Q1pKXxkXfKrH8jjXlBZ%2BRecD5w0BEn23WP5PBiMrNFMxvKQZ5ZJuP7pOJbj7YUO07PDrUvIqpKaXZvm32jIEYRdhgXZZdpXGDNaho4x2U2X%2FssDBORJd49CTYIOCap0secaz2bzsSPi3O8lT%2B%2BMGCxy66dAXr4UDo9eKCepapyn6OknDCWUryt6GaQp4MImwi8wGOqUBHIEGEqoAHHzHBrzbGGGnc1AXLNr%2BvtGL0wYBSKPF%2FXuOxgJBMyCCxpHrp9F5qFgVt6%2FpG1QvDLprRLiKi7VPtRMQoF%2FColDlWLy4wIjguLmhqTUX0MuXBJXKl1OJPq0eFdofsUD%2BbaLtY2ve46rqnlT4Y6j139oQ2ISjGAl3yVw%2Fe5vbidIaeIIKPEDiMRZM5X4gPFgb4XWgTJulSwbgyScl1h6l&X-Amz-Signature=3ae125ed6a0a0ae9fea5a3eaeb37b4517d8ae2cd2e56d8614acbc2c29ca59327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![EthanA’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/9247bc37-1e8b-4bef-a5af-5dee4be072b8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAV54AVU%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIFX8w8htCib%2B9TXSn%2BUXtE%2F1Qzc%2Brr%2BpZ8QG7OyhVqsLAiEAzJbJVEq40eP0ZpSA1Z7%2FDUVEI%2F%2B86zPX5qOwnljxNwUq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDMQ%2B%2FjU6RjhacVHY9yrcA5E4uEcK8gXGumn2N3N9ckHoxfG0PbyhICsBWLOGFmXepbovk2y0jEHKI%2Bxc%2F%2F6%2Fw3DRunTDLcFAr2NwCZvQpwic2RkMiWPr0ZDqb0pnS8IhtEq7sFpwGca18tusSFs%2ByBGKRWDTRUSmHjOhizLcTUMO%2FiKWGq3W1sitBDNHgXLzgpqb%2FT4s1%2BTOY83Wfk7cIggWbDMA01TWnhZ4p4Ip7Xduf0BEWfByUJCrLb6qUuzltog6lKvy7eUcnVJNNC4FRhAPl%2F9nNSg62XVAAzb8PtWYchvODxz2GcN7MZChCCOkx2r1%2Fu4sAZFQBJx38QLNuHUVfaAEH3LvAVXHjOB52O%2B6N8dWhE9%2Fq2r3NSad9QIVfQoC4XcbZKiQbQ%2FKbiIzTtihImo2dK5v7u1jpE%2BU8JBm1bh5H2WJMr%2BivyGorCMD%2FS1f40w4%2BBndC%2FYEilp0Q1pKXxkXfKrH8jjXlBZ%2BRecD5w0BEn23WP5PBiMrNFMxvKQZ5ZJuP7pOJbj7YUO07PDrUvIqpKaXZvm32jIEYRdhgXZZdpXGDNaho4x2U2X%2FssDBORJd49CTYIOCap0secaz2bzsSPi3O8lT%2B%2BMGCxy66dAXr4UDo9eKCepapyn6OknDCWUryt6GaQp4MImwi8wGOqUBHIEGEqoAHHzHBrzbGGGnc1AXLNr%2BvtGL0wYBSKPF%2FXuOxgJBMyCCxpHrp9F5qFgVt6%2FpG1QvDLprRLiKi7VPtRMQoF%2FColDlWLy4wIjguLmhqTUX0MuXBJXKl1OJPq0eFdofsUD%2BbaLtY2ve46rqnlT4Y6j139oQ2ISjGAl3yVw%2Fe5vbidIaeIIKPEDiMRZM5X4gPFgb4XWgTJulSwbgyScl1h6l&X-Amz-Signature=562c5a5f58e00edfd07792e3fa14a58b988c5ab57600275df9a66e70dc4d9803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Set Alias


    ---


    If multiple WPC products are connected simultaneously, you can assign nicknames or aliases to the devices. Please follow these steps:


    👉 Name the device **EthanA-WPC** in the Device Alias field.


    👉 Click **"Set Alias"**.


    👉 After confirming that the alias name is correct, click **"OK"**.


    👉 You will be prompted to restart the device; please click **"OK"**.


    👉 After the restart, you will see the device list on the left change to **EthanA-WPC**.


    
Once these steps are completed, the device alias name will be successfully updated to **EthanA-WPC**.


    ![Instruction page for “Set Alias”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/b2f69251-695e-430f-be53-71d2b7009461/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWOHVND%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAnZe1xT02EwnfPtEivANLzAEvswsW%2B%2FwYsgNzmDyjbTAiASqg2YNz3hxm2vez2ofNawKgR3FFDln0Xpth24MBaxYyr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMdkeAoYpR1cIKywPiKtwDLYuIfZdbeUToMVwKRL6xYJUQa6Lke736HzxdbbaS0sdipfN6k17Zvlsb79qdBc7avnIpugB%2FkaqyIsWZFuZUTIQkF1hUUmgcV%2FzSH%2FIproAs3sieEZ2DunCzZ4rTZOEvNYdOO4N4rbpMnmwfoXMhArWyU1Bu58UyOvJXlXKrpM0NRb1R09UmnlVQ3%2Bzo9e9JJzB7v8j1bIcohQ%2B6WEjMVKi4t4pmtnec9tnBbyac7M4OfnzDFm3STtXYcxmpCBhjMal4OPJ8LWY7hQnU8n8R2tfUI9Qp8lZqnNTfrMnX%2BiBicErbjJE8MlVcqm%2BSe8bkeIFBPe5kgqfirG%2F5PA%2FwmJabpdJIawWx2kvDB16p%2BXxxPwRp%2ByZr85J6eHF2mCL3bfxxTGAVL8us%2B0%2BWFqU2im5KNDtaq90xPbVAumukYaoZ7HCga%2Fhmf4%2Fl4byEwLSLhJinyMK3MyqYMeIe5a6ZDb6CjI9a3%2B6hCHgPjr12upn0XQT0OlEYcuUg%2Bp%2FVcaBDlK9D8NjqK%2BUB%2F7hZrJVp1%2BUZ9COr%2B05a1cs%2FKUNJ0sZ79Zoey%2FsYwY4LXpIwDFeSaPRJi5hDRrgfbQl1yT6SpnGePhy9o%2B3TqyiJItY8m22sMaEjkPj9IpLyvLUwh7CLzAY6pgFNgMixo3W9GvFsah9ztDXhB0%2B0OIijxNaBV7Ols2b3LwhIpPK%2FXc2sZENEekuFxB7aW2nL5z5D1wZgD6dfG577oogrfNF%2F1vp8ZxNvpqh%2Bn1WetJXEnUZaONduRJQUmtNQuioX9OokUWEW3A1xfRAb1%2FyoTRGINuuRXd8RIzTJLC3O4QnmYsKNad9QbmOasbRzHklgeL5U53gszzhVXuvlJPD%2FAR%2F7&X-Amz-Signature=7515b7afb0459a2cbc606b84701399247a85da3b7bf721c1dc562faaae1c8907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Set IP


    ---


    If you want to change the device's IP address, please follow these steps:


    👉 Enter **192.168.1.20** in the **IP Address** field.


    👉 Click the **"Set IP"** button.


    👉 After confirming that the IP Address displays as **192.168.1.120**, click **"OK"**.


    👉 WDM will prompt you to restart the device; please click **"OK"**.
    
    Once these steps are completed, the device's IP Address will be successfully updated to **192.168.1.120**.
    


    ![Instruction page for “Set IP”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/233f8dfa-1486-4bf2-94f4-eef656e2d5e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOXFLOU%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC5VL4quFI0ujdzdSrjbAoueBGYRBZZrPSvZHUr1EmAiAiAMFEZZdw3jiIIvXXGNexbsnAjHwUUH%2FqbHTeX0v310Fyr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMeNEGCfyp86vGdCeEKtwDfr09%2BQKkn%2BTCshhuXo8wmPMxSe87XC5JlzH73R%2Bosh4K2mTpmbA0KujwbpFZJLLFHQi0D67YHSVLiDzucExSZFokVf0DTrUNoP9X%2FwcAvjxU0zMnjHbduidd179%2B9%2BduNY%2BUGMXJX2vVGUxebMulmNmCInFfhngD9%2B3E66%2FRm5J0lRPsyma9sLqVhF3I9MNu6eVzhPmXfnqNWTZYf30iayD6QHl6XMyK62fYv%2F%2BD%2FjaaJxBQU4%2FLEC%2BHFFHn14ztpwxqPAAzL6pClyLwwp9bEPct%2Fw7p7za5ntNLkRygl%2FlVibjpbJHN74bJ9EgWYE52c0NmMmSNnGjINHqsKJe3sBRCEnVi6t5c9JaGSEZxMXXcT6QNPvioBAZEn3oXSm9%2BjN%2BgUKAIlXC3jmFoaBCIYKyeKqU8N3xO3bxRGye5eRgUuYLkUTLVcz6Ceb%2BJzkUeG4xxIzf4nhfxGRQ52juBr4AE0TMAOOxahjTdEuGuniUTIC6IBpRZ0pU6X1FEvz1FcxjCiRaC1Huvu1yRXQBEju2JPc9O%2Bh7cm7ia9bzl9nmBGqufQktTxgosruToKAMYYPn1fc5kYtRPYMOVk%2FhscvpJdAl2RjVNwTEj3F28P9Dq0IMYKamOYps6Xk8w4K%2BLzAY6pgEmlHGig2k7kgFKfa0VPKpvHFPcSRhDM4NARArMc9FH1mVue7Ij3LFUtFWdOzGccv%2BdxSFgP2Cc20ojILlO7pYII2g%2BAIO5ynthCVnTQgnzNRDuwqZ9QXjZ7ypZp4cS07lmgr9V5JDOuCL6BtizCnHPxQGAQI%2BOEdGeWwK2ZPGxMNPSMC1gflyzNJ3HvkZvy0I2TUZYBTaF5s4RutyeZsnhPaar%2BVUt&X-Amz-Signature=79e614ac1b278642fc965e1bd134fd761e799bde213c48c55ddb24df87232037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Set Gateway


    ---


    If you want to change the device's gateway, please follow these steps:


    👉 Enter **192.168.1.18** in the **Gateway** field.


    👉 Click the **"Set Gateway"** button.


    👉 After confirming that the gateway displays as **192.168.1.18**, click **"OK"**.


    👉 WDM will prompt you to restart the device; please click **"OK"**.


    
Once these steps are completed, the device's gateway will be successfully updated to **192.168.1.18**.


    ![Instruction page for “Set Gateway”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/c160c267-7af9-41ce-9d36-7e4db51d6082/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OIFPDE%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDHpgA9JCNTe6vek3DlYnUPIjVWQALbrUX6p6tIS9i%2FngIgQrLRUtazVJ26NWY2dZ1undSAOWTAOouvPnyi63VrABQq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDObvBI7aQZuOcPZniyrcA380vKQH8WuWoa1v85s%2B9g7QlJGs6vAqlpUTn6rs9eYDKpSRWUWZ7QpR0ByMazTYG%2BQkoPGHAKBCfiSYsX%2BzYvwJJ%2FbSHpiiIxDTSJ7ENgTcqpngCNeQFSpVc42%2B7d%2Bz1P8FsTPgVlyTQ6jwas2qYs%2BkAJ69I4cQ9cqM3Tn9LYUyRJG75mw4w3QHTTbPQo2qQV3RK9Fk%2B06cD2%2BFV0lMGJ8A4Gs%2FF2Dra3ibW%2B90Wzk8EPfY9DRDx2yFwwxBx5RT0FnYkR6OUjyjUYPcXo84AjdYMwzUJJz3z5jAvYKgvc%2Fy2lo7%2Fhatoels1aCwbty%2FnLBdsHB%2BuEjuxesIpoNmGLNrPzDRDTLnHIvZFOW95foogxbwPe3WajD5YjntguCf%2BX6cNawczU7ghsOG%2FRE%2BPJQDCGplyE6yFSYlL18aW5IblmDLj2VOzBjgxIm8tAUq4Ml%2Bk8o3U41n21F1i8DJaSRIeseEoaEr6%2B%2FHPAk17x2sMIC%2F2jFWLAtOBi4QYHPcyp7Pf3X1y2quH%2FRTJwTHMARRbfnlmrgkyHVJ0z3T1Rbr678aLf%2F%2Bkvc1d5t%2Fh7K0lJxbPCqqWQ%2BxqCFev9UBex91Uke%2Fu6pbZZ5Bn4k2f85v4LW6FIchQL22kSiEMOCui8wGOqUBZl3cAvtLypfUgDYct3%2F784SGvnyu0nwrxDaZXo8EdWm35DHbWmlE9NvJ9ZiUVMAFjfg8ue9ZZOdoRwVnVRr4lQ9f7tZGVT%2Fe5CaHFa2yh88d6icu7hyEvpS7Q94zGpf56Y58NMUD84L0PfvqxEbdYSPXItkMjfdd%2FEq%2F1%2Bzd7ftbPoxlqNYx%2BnPia%2BEGJjFBCBKfJYKCbJ3PL0B2SjBDikqbfjNM&X-Amz-Signature=5887053429cc5bf61a885f0318e762c8daa343ebeb8a54e0bd9ef29b83a6f6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Reboot


    ---


    Please click the **"Reboot"** button to restart the product.


    ![Instruction page for “Reboot”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/beab65c5-2b3e-4d79-8d40-7ebcfaf19321/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOB6BY4Y%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDfDhwVqTmDD894iEhLBsu1InM6ejKkDwbDsisstBm1xQIhAM0I4Y3t5icPDx3DGehJhhgzwrahyVBmlKKT0QUX1EaWKv8DCA4QABoMNjM3NDIzMTgzODA1IgycwXijAH3U8i6q1sMq3AOZzYHmyMWLBx4ubde%2BeOksxB1Bdfbf%2FsXKo3auVT%2BEyfH%2BoQziUi%2BY1IkOU2mFn90xXgng27M%2FtgushoGn5FH9BOCdQJ%2Bs10jD00sn%2F3TmVRWaf%2BTSX3YppdKEavqLNjc3T%2BjPQceFshAkWuof6PL4%2FO0c7BPeA%2FyDTevmVCpHzhj8W3lSJ8qrfof7XtPHzWN7Cq4srqIEdtIByLHWHTFSDMQcc0vyB%2F%2FWVF3upQ1N7EjcT1CNM%2FZPCwS9V4QdT%2BmVAqmKATBvF0TSIRLQcLgCo8sGn2U9jSBG%2FpXSl4R25piBwUpcQ06jmBtSEWR0VWjKPYprR1EtCjMyAxPBBSmZZouquzE%2BGQglaKF4mz%2FBXFppOchPOAjdplGYUUWaDADpZ4UAMr2B1rnX%2Bn62pT1SKpsnDD9qD%2BVcvWq3w3knWqJgSsYgwGS1M62QpvJboPa8VQFE6Iy1j2je35NjImeBKyQI1C4%2FQ5Xt2aBDTQiMjZqSjOTeLz6NWO9CrKIzDEQAAycSoUTsH0EC2xQk%2Fwpnh1Yfa82ixBWPA55s%2B94%2FAa%2FUuZDdudxy3XFFEmILl7%2B7dbGvUxBum58Tgl3CPOajDh4RKG%2BBjiUFynD6EaxdVqWUsGQ5IS6uYqyEBzDZr4vMBjqkAWHoMJeD6I95T1%2Fw3WgfRbTplVwS36isNp34OFcxh5lCV55nVyxw%2B6Byo9L9pB3RBP62fMpdwjORI8c%2FHFnUIj1WE2Bjoi8ESe2KhaWIU4w8ZZ5U%2F2UekrheTRHHoo1KXTeT0uiX7yaAVLPMZHx6zoJgmfQYhT2iuQZKgP6DVS4p0%2FLafK%2FsBaD5%2FYtjMaxEOuCI%2BxJT%2BP86k%2B1829P4aAcbmqWS&X-Amz-Signature=f766b640161b6f0d9a342b55fb04d84f5a4bc26bb71354ad6350c5e1f4059a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Update Firmware


    ---


    Please click the "**Update Firmware**" button to begin updating the firmware for the Ethernet device.
    


    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/2bd36d95-7ccb-4dd6-b141-cf088a787ef7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7NESPT%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAs40%2FBzQA8%2BSogq%2ByPSl7m02urNyTPsoJJ3GCTP%2BbiKAiBfx1%2FtdWxIO4ttpGBokX0OD1FHJs6dlMuBBnJG2ksTvCr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMCA%2BkdIhn8UtzHTObKtwD116J4%2Byz4TqkdA2UM%2BG1Kf4yZrMCWksotkwwbPTTyMeXNY%2FgDoxRkdL4W%2FggJAkw2eSn4x3aj48YQ7mFV9sS0YuWvIpjQ93EMDOkxmhRt5x9XAK8UBJTi1tVVNdvNQtJ2dZ5nu%2F7qq4a2%2FRxhYX7T%2FY%2FJwlQT4%2F4RMra4VTbpV22nvd9N8CIOAJ80GS%2B4gpmjxKWyVqSmqQClV6TyZerADqpSrDp1k8vGOO%2Fd5OrkV%2BSjDsIWJtCQ8bMDjnKpaIY2SlEHFX2bKbwYPs9gRp9enoCVv2dobMoZxXFzhgWbZM8AurN9v9hFb1NgqIrRBIGH7%2FX%2Fxl0vw8yBDmGCfW%2BxG0J33c62j4HZXmF9Pjv%2B4oMOaOKT%2BsoOL5sDQNLRyKygW6DJIcX%2F8stAQ4SB3NEtW2%2BJqN5cuCv8NGJMxsmA3etTEUyBhw51aHFfkLTk5ur5vuFX6e%2BvHsKGS5eLO1%2BEPyUJWtMEPXZb%2B%2BLJLXSk50xzDD4AfNouCmAohbnC4N1VfPrd2Vj7fvx8%2FiTtA95MPj0vfUUyRI9WGZPY0WGwfwflxGIqUSyntggniJu5HC%2FUn6Z8QLyJ%2FHN3NynsCW16s9ikdP0dSG142HaQoztdof2KI4qV%2BNODlSN27Mwhq%2BLzAY6pgGoHJfORZ0rsnFvJfxZsAquxt6aqB6qTzm8Uo6ISHb7bHSrmJIEGs8v5seOHkgHJ%2BqbDvi80vBA%2FWS78C%2FhKguMHuV8YFCaCLUQN5PIZ038wqBzywZ07pf0VKG6gh5X5sh%2FkZcU4tDiG85PWu1cqkmn4TFtVDhxlsjINKCFeg45NYCk7GcfiBh6wtpP3%2FTSIMuqAp2A9ufPenRO5haxhC5eFl8YD9cX&X-Amz-Signature=d9eaa09846f39d27b506fcad018a341e9cd2f39c05ddc5f60e58459a9f25236f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 👉 This mark ⚠️ indicates that the firmware is not up to date. 


> 👉 This mark ✅ indicates that the firmware is up to date. 

    1. Please choose the bin file.

    ![Instruction page for “Choose bin file”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/5adcb3b5-86e8-4b5a-b95e-3f47463621b2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7NESPT%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAs40%2FBzQA8%2BSogq%2ByPSl7m02urNyTPsoJJ3GCTP%2BbiKAiBfx1%2FtdWxIO4ttpGBokX0OD1FHJs6dlMuBBnJG2ksTvCr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMCA%2BkdIhn8UtzHTObKtwD116J4%2Byz4TqkdA2UM%2BG1Kf4yZrMCWksotkwwbPTTyMeXNY%2FgDoxRkdL4W%2FggJAkw2eSn4x3aj48YQ7mFV9sS0YuWvIpjQ93EMDOkxmhRt5x9XAK8UBJTi1tVVNdvNQtJ2dZ5nu%2F7qq4a2%2FRxhYX7T%2FY%2FJwlQT4%2F4RMra4VTbpV22nvd9N8CIOAJ80GS%2B4gpmjxKWyVqSmqQClV6TyZerADqpSrDp1k8vGOO%2Fd5OrkV%2BSjDsIWJtCQ8bMDjnKpaIY2SlEHFX2bKbwYPs9gRp9enoCVv2dobMoZxXFzhgWbZM8AurN9v9hFb1NgqIrRBIGH7%2FX%2Fxl0vw8yBDmGCfW%2BxG0J33c62j4HZXmF9Pjv%2B4oMOaOKT%2BsoOL5sDQNLRyKygW6DJIcX%2F8stAQ4SB3NEtW2%2BJqN5cuCv8NGJMxsmA3etTEUyBhw51aHFfkLTk5ur5vuFX6e%2BvHsKGS5eLO1%2BEPyUJWtMEPXZb%2B%2BLJLXSk50xzDD4AfNouCmAohbnC4N1VfPrd2Vj7fvx8%2FiTtA95MPj0vfUUyRI9WGZPY0WGwfwflxGIqUSyntggniJu5HC%2FUn6Z8QLyJ%2FHN3NynsCW16s9ikdP0dSG142HaQoztdof2KI4qV%2BNODlSN27Mwhq%2BLzAY6pgGoHJfORZ0rsnFvJfxZsAquxt6aqB6qTzm8Uo6ISHb7bHSrmJIEGs8v5seOHkgHJ%2BqbDvi80vBA%2FWS78C%2FhKguMHuV8YFCaCLUQN5PIZ038wqBzywZ07pf0VKG6gh5X5sh%2FkZcU4tDiG85PWu1cqkmn4TFtVDhxlsjINKCFeg45NYCk7GcfiBh6wtpP3%2FTSIMuqAp2A9ufPenRO5haxhC5eFl8YD9cX&X-Amz-Signature=0580c7a1cae6892a4b94fbdccffc62ec4bec0106896e755b02d21ba9608ca5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    1. WDM is going to update the firmware. Please click the **"OK"** button.

    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/c8866dda-7c1f-4321-aeff-7a88aaf6cd7b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7NESPT%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAs40%2FBzQA8%2BSogq%2ByPSl7m02urNyTPsoJJ3GCTP%2BbiKAiBfx1%2FtdWxIO4ttpGBokX0OD1FHJs6dlMuBBnJG2ksTvCr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMCA%2BkdIhn8UtzHTObKtwD116J4%2Byz4TqkdA2UM%2BG1Kf4yZrMCWksotkwwbPTTyMeXNY%2FgDoxRkdL4W%2FggJAkw2eSn4x3aj48YQ7mFV9sS0YuWvIpjQ93EMDOkxmhRt5x9XAK8UBJTi1tVVNdvNQtJ2dZ5nu%2F7qq4a2%2FRxhYX7T%2FY%2FJwlQT4%2F4RMra4VTbpV22nvd9N8CIOAJ80GS%2B4gpmjxKWyVqSmqQClV6TyZerADqpSrDp1k8vGOO%2Fd5OrkV%2BSjDsIWJtCQ8bMDjnKpaIY2SlEHFX2bKbwYPs9gRp9enoCVv2dobMoZxXFzhgWbZM8AurN9v9hFb1NgqIrRBIGH7%2FX%2Fxl0vw8yBDmGCfW%2BxG0J33c62j4HZXmF9Pjv%2B4oMOaOKT%2BsoOL5sDQNLRyKygW6DJIcX%2F8stAQ4SB3NEtW2%2BJqN5cuCv8NGJMxsmA3etTEUyBhw51aHFfkLTk5ur5vuFX6e%2BvHsKGS5eLO1%2BEPyUJWtMEPXZb%2B%2BLJLXSk50xzDD4AfNouCmAohbnC4N1VfPrd2Vj7fvx8%2FiTtA95MPj0vfUUyRI9WGZPY0WGwfwflxGIqUSyntggniJu5HC%2FUn6Z8QLyJ%2FHN3NynsCW16s9ikdP0dSG142HaQoztdof2KI4qV%2BNODlSN27Mwhq%2BLzAY6pgGoHJfORZ0rsnFvJfxZsAquxt6aqB6qTzm8Uo6ISHb7bHSrmJIEGs8v5seOHkgHJ%2BqbDvi80vBA%2FWS78C%2FhKguMHuV8YFCaCLUQN5PIZ038wqBzywZ07pf0VKG6gh5X5sh%2FkZcU4tDiG85PWu1cqkmn4TFtVDhxlsjINKCFeg45NYCk7GcfiBh6wtpP3%2FTSIMuqAp2A9ufPenRO5haxhC5eFl8YD9cX&X-Amz-Signature=a58967f61af05ef82586a15d2de8d282793602840568858a22761ba43989d095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

    1. Updating firmware

    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/a2c16df7-bac6-4192-ac54-d4ce6fd1ea09/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J7NESPT%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAs40%2FBzQA8%2BSogq%2ByPSl7m02urNyTPsoJJ3GCTP%2BbiKAiBfx1%2FtdWxIO4ttpGBokX0OD1FHJs6dlMuBBnJG2ksTvCr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMCA%2BkdIhn8UtzHTObKtwD116J4%2Byz4TqkdA2UM%2BG1Kf4yZrMCWksotkwwbPTTyMeXNY%2FgDoxRkdL4W%2FggJAkw2eSn4x3aj48YQ7mFV9sS0YuWvIpjQ93EMDOkxmhRt5x9XAK8UBJTi1tVVNdvNQtJ2dZ5nu%2F7qq4a2%2FRxhYX7T%2FY%2FJwlQT4%2F4RMra4VTbpV22nvd9N8CIOAJ80GS%2B4gpmjxKWyVqSmqQClV6TyZerADqpSrDp1k8vGOO%2Fd5OrkV%2BSjDsIWJtCQ8bMDjnKpaIY2SlEHFX2bKbwYPs9gRp9enoCVv2dobMoZxXFzhgWbZM8AurN9v9hFb1NgqIrRBIGH7%2FX%2Fxl0vw8yBDmGCfW%2BxG0J33c62j4HZXmF9Pjv%2B4oMOaOKT%2BsoOL5sDQNLRyKygW6DJIcX%2F8stAQ4SB3NEtW2%2BJqN5cuCv8NGJMxsmA3etTEUyBhw51aHFfkLTk5ur5vuFX6e%2BvHsKGS5eLO1%2BEPyUJWtMEPXZb%2B%2BLJLXSk50xzDD4AfNouCmAohbnC4N1VfPrd2Vj7fvx8%2FiTtA95MPj0vfUUyRI9WGZPY0WGwfwflxGIqUSyntggniJu5HC%2FUn6Z8QLyJ%2FHN3NynsCW16s9ikdP0dSG142HaQoztdof2KI4qV%2BNODlSN27Mwhq%2BLzAY6pgGoHJfORZ0rsnFvJfxZsAquxt6aqB6qTzm8Uo6ISHb7bHSrmJIEGs8v5seOHkgHJ%2BqbDvi80vBA%2FWS78C%2FhKguMHuV8YFCaCLUQN5PIZ038wqBzywZ07pf0VKG6gh5X5sh%2FkZcU4tDiG85PWu1cqkmn4TFtVDhxlsjINKCFeg45NYCk7GcfiBh6wtpP3%2FTSIMuqAp2A9ufPenRO5haxhC5eFl8YD9cX&X-Amz-Signature=10cc0dc7ccaae12bc924277582aa398831a13a4d84a4a99e4d7309170434313a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    > ‼️ Do not turn off the computer or disconnect the device during the process. If the firmware update fails, the device must be sent back to the WPC for repair.


## 🌐 Config SNTP


    ---


    設定 SNTP 的對時功能。


    ![Instruction page for “Config SNTP”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/a4bce76b-1865-4307-8f07-76fc9972f50e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BDASIVC%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDStoZTBl5XjCQ9pO5cSlT8uFn8p1qco5drp%2F14B0ue2gIgLODg0cgG7Iir6gVEwVUwDfj8XC4RBKhBEte8%2BG6h5fIq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDEeVhvUAoRoMSV5SGyrcA2XFHmvWpd7ujDYpFxSR2Ucy2zs%2BqrWtz8tUcMC43jFUsO2XniJrm3SUeZI2YuzyLRDsw3oehMCTmFI51Q1PuHG8whNEh%2FTdPz0A9LKa1pQMyey1B6OvR0DDMdzNLlTRihH%2FZi0eRnwcDGip4MK%2B9yit%2BQB%2BKvLFvuqRx0Vs5kvhHZPx%2B%2By8k6Vphh7PBSWJ2b70Ux5N8mh74HOGyl1XS0%2FhQPMMvngdhnos6VtjMtjEiFjRBWgJPp9%2Bo25MF5pK7bEjigP3RIjIfHdPYhhCTlrbk6tlYjq4Yavg3nB7Ju39usEgHSaxE1xRjPceKTFFc9ND95jmwzqvQqjiV%2B8ku1%2F%2FdswNlr%2Bw%2FnCZh0gZVkMjjAvDkZZRFy2tpa9HjaTYPuxjTu91rnm6EPguaOWi9dvp%2B5uWe9vTO8RweZfhpxtrVzB8qRyj38bnAQvkMjmEAaapu8D5OqoVa7GnvEsjJvJD%2FigWkuETa7X8MrMml%2FZa2cb6L13qfa8TmW%2Bjvhp4QZBXpAkU95f5qUFskv7M5Jas%2FCeRW2jNM2rxVWhpRP%2F9EU06aeScjPzA4xx6p1oS7cU8I8HhenTGAxWm1YF%2BtrPjk66PcNkJFPYAwJtjdkUjz7pMnmQNNXRezP14MNWui8wGOqUB8WttcgQyl98Y2Rc409z9Mv0lYKLJz8MQ2AOOFpQs4L2iMvLHQ9FjmWsBS5p4hmX0ThEysAe7qBO0BPXgAMyFb%2BLkFFfKowoTl6Tj5%2Fd9uXwN7dqcBMDVNP%2Bf1gsE7%2BKXeNGoo%2BwDhXRBqvIDK4eOqnciLCF0TvzSNvwcRTBsCvZCQHdVazBeLSTPMEgO7GndqWJKoT3AzxeNSCOGA9x9CYud5pAW&X-Amz-Signature=d3151796e1bb3862b0bb60cfc7a3648c90879a42e6caa4eb9e2d3d7f3dd2f8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    SNTP 有兩種設定方式：

    > 連線到 NTP server pool（開放伺服器集）對時
    - 在裝置中將 server address 設定成255.255.255.255即可。
    - 確定裝置能連上外網。
    > 連線到自行架設的 NTP server 對時伺服器
    - 將 SNTP server address 設成伺服器 IP 即可。
    - 須注意伺服器 IP 位址和 WPC 裝置 IP 位址必須在同一個子網域。

    > ⚠️ 請注意 IP, submask, gateway 的設定必須符合邏輯。


# 🛠 Function List For WIFI Device


---


## 🌐 Refresh


    ---


Please click the **"Refresh"** button to reload the product information.


    ![Instruction page for “Refresh WIFI device”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/b33c9d97-0b5c-452b-a567-d9229c32d54b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723H3G6A%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIFlORYvU5YizhgbOy%2BuiZWuHS2ekWb6BuIhj8J4nxEcTAiBQftfND3pwv%2B9FJXWf15ppBO722CmhyJRAVUkAovliOir%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMQW8Uy%2FlRT2h7T4PTKtwDHTGGZYtDj6pqUWf1Vlu3YhqIeWsCeo2l5P13Q5RbtJnGmuea21mHhf7CI9Vu3qYO2oHKo07Cu8QppExscMoXvAlzh3ZDGvPz1L%2FZWU2qNDz6MjV8ngA46CSmSk9IUuqeaK4dfkKuJixJIN%2F3h6hnRn9cFDajUpvIW8LH5VSJAkjTzGT4RdQYdSQ0GhSGTxczQhXfGbSKgbqj%2F8jpPd6VSj7CNpfc%2BqB%2F8cBb2fGEmefFYZpxlaeA%2BGcgaQXpR1Ya1Je1akKaLxXyqZVKI4hqbEQQjG2k0zQJv1DUaKT8KBJJ7BQ44wT0UBafWOpwdzGkD57ardNIuUc9KsuQvVplvT3RBAHJQSqP0HbYGa8P%2Faa1woMNmWCxZFQZq4HtE49mPFfW99xRRpcJX9ioQkR%2BSuojJoWbBm530qkYok3C6geahkvC%2FMoJ52tmppHZe%2FcRrPcBpkJq6klUyg%2BPgrc3fh9SdHcOpJJwqCITQNYdaSJogYd6aHMjY2X2TFphggvtns31c38rAWRaqXcLH3g3kZeNrRwEDKPpbbEvS4Tg1%2FMzQ2fACYQpUtEe7SCW4IQ05ke8YPPd3%2Bl9MWY1sYy5UACQmfa6Nn5uh4f5i0%2F7KattIhAQgoI%2Bqb%2BOuJswvq6LzAY6pgE7GYrxrnS2gWWWwr4LmQZgjMimDQeWWHiUYjR6MDw0g6cOUtrnllABGFaHp5ha3o8ZUCivaPCSDZ7HeWmLlkPFDrAROESA2t5Oc9LswdWhuCUTCG6mx738w7LQ4i%2B57e5fTE6BHBzUmgHRLzMV%2B4SNLN5KLlrECh8HaoipGr5upFf6Sxan3zDXRi7DR21rzfKfu4X3572hFawxXHayGXt8LSPqYWTF&X-Amz-Signature=2e29e12ca6d2e022ecb6c92b2e58575ca79e8e600bfbc9046b7e2ed933401c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Pinout


    ---


Please click the **"Pinout"** button to display the pin map. The window can be resized according to the user's needs.


    ![Instruction page for “Pinout”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/c8db06ad-588d-4a53-bed3-1e24d8b07aba/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VML5ZJLX%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGCNcUT1eERX9b66atibg3Aw742q%2BRg5rlgk5w1o86srAiEA9MCugaW8oLGMYr%2Bonf3ybMg49kUxMexZnc1kXZYCTRsq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDB7no7YnTcyhV0C6vCrcA0PrLItF9AYF04jABt6T46G%2Bo84RTgWALBuHQ6Dh1%2BSttq8mRYJv8TJblUhIDoNTIcJo%2FiLVgwWPmtPOcExcT6eG5gHit0V69DkLJuVvlYOu5aHdWratrIdnUHxY83cf7I%2BvFUqqDA78DA6dGcu%2B3E4IYwg4uOpEnnQvaJG4v8sgIOxWR3YcMXAM465TSuiICZ2%2BCtp7%2B0%2Fyb9rl3AdIndV%2F7c56zGCz2U2qR2od0Oe3uWD8buiXwp7evCG3RY45D8pbcoKFYpoAycz6d9NtXVT5wSrw4B6TnW3n%2B7z1PHvYaMtotPBcqn8BKYsgTEPR37IKDxbik6LTSIWxpcP%2F3FlB3Ma2jwfFhQBekP8uw9wOcCEIswhr9O9dxpOdf9rDi1j7KEkN4yvCxeKtMk7MaE63us1w6YCylsZ7rvT6NH9DejzXt%2F08cBLoMc%2FGjlN3cF4aoK7aYwUM2RpnvdeMKom%2BN61Md3xnulg8ekhat8nxQdcGiLwer9ooT7BV%2BoxI9gafsYI6GZcg8KkRO15UrAI0y6ssTW8Dq3H4Y67RDGJG2fgptkl%2F3VHfxtZTIW8SPLmELbIr30uwRr%2FLgJZ3W%2FmfrMdVRWTjmfH4NmPmtG%2FBdp3CIjcxsc2nLPNCMLSui8wGOqUB2kFsn1yVZr7%2FBvd2d5JZV8yOf2Cv1Fs1yhmWgws3Zah3jwF8wEYGLykAjYTJTKxI%2FG0yryIgzrMAdlHgKtY0nGguaXBFqKX7K6dXAsCIeCTfE01mZSXimZQaxyroAIhIGfRLAy8kdI6Ld3qhltbP7J6j0cv8bQtGqhHnRjvZSepm2n4YRY%2FqcfpT1CaH5%2BSemEJx3s3NFA6cuG6ecRn3%2BCHYKyPF&X-Amz-Signature=2682118ec1636d3002f9ef640e53cdee9326a4468b83844f3d0e414ddfbb9fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![WIFIDAQE3AH’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/d0ecdebb-2049-4657-8d9c-a314a9e8756a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VML5ZJLX%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGCNcUT1eERX9b66atibg3Aw742q%2BRg5rlgk5w1o86srAiEA9MCugaW8oLGMYr%2Bonf3ybMg49kUxMexZnc1kXZYCTRsq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDB7no7YnTcyhV0C6vCrcA0PrLItF9AYF04jABt6T46G%2Bo84RTgWALBuHQ6Dh1%2BSttq8mRYJv8TJblUhIDoNTIcJo%2FiLVgwWPmtPOcExcT6eG5gHit0V69DkLJuVvlYOu5aHdWratrIdnUHxY83cf7I%2BvFUqqDA78DA6dGcu%2B3E4IYwg4uOpEnnQvaJG4v8sgIOxWR3YcMXAM465TSuiICZ2%2BCtp7%2B0%2Fyb9rl3AdIndV%2F7c56zGCz2U2qR2od0Oe3uWD8buiXwp7evCG3RY45D8pbcoKFYpoAycz6d9NtXVT5wSrw4B6TnW3n%2B7z1PHvYaMtotPBcqn8BKYsgTEPR37IKDxbik6LTSIWxpcP%2F3FlB3Ma2jwfFhQBekP8uw9wOcCEIswhr9O9dxpOdf9rDi1j7KEkN4yvCxeKtMk7MaE63us1w6YCylsZ7rvT6NH9DejzXt%2F08cBLoMc%2FGjlN3cF4aoK7aYwUM2RpnvdeMKom%2BN61Md3xnulg8ekhat8nxQdcGiLwer9ooT7BV%2BoxI9gafsYI6GZcg8KkRO15UrAI0y6ssTW8Dq3H4Y67RDGJG2fgptkl%2F3VHfxtZTIW8SPLmELbIr30uwRr%2FLgJZ3W%2FmfrMdVRWTjmfH4NmPmtG%2FBdp3CIjcxsc2nLPNCMLSui8wGOqUB2kFsn1yVZr7%2FBvd2d5JZV8yOf2Cv1Fs1yhmWgws3Zah3jwF8wEYGLykAjYTJTKxI%2FG0yryIgzrMAdlHgKtY0nGguaXBFqKX7K6dXAsCIeCTfE01mZSXimZQaxyroAIhIGfRLAy8kdI6Ld3qhltbP7J6j0cv8bQtGqhHnRjvZSepm2n4YRY%2FqcfpT1CaH5%2BSemEJx3s3NFA6cuG6ecRn3%2BCHYKyPF&X-Amz-Signature=0f0850062f1135be5752e1fb430d12cbbf480d1e987aa542b39e40a6a9f751b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Set IP


    ---


    If you want to change the device's IP address, please follow these steps:


    👉 Enter **192.168.5.37** in the **IP Address** field.


    👉 Click the **"Set IP"** button.


    👉 After confirming that the IP Address displays as **192.168.5.37**, click **"OK"**.


    👉 WDM will prompt you to restart the device; please click **"OK"**.


    Once these steps are completed, the device's IP Address will be successfully updated to **192.168..5.37**.


    ![Instruction page for “Set IP”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/98eb1787-5a06-42ec-9917-cdd901f85d2f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUTA7OD%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDdV92Ee2%2B9MXoub0QDF91QX4tenYNNDpwLJLv59Wy%2BpQIhANJwOopXzYjOUwZ9bu1Ggkg7uOqxe5kR7VuSAO8pOseiKv8DCA4QABoMNjM3NDIzMTgzODA1Igw4DKUUGtIpTItVuI0q3APn3MXihEMh3E5lVaNr1w7ycGQPZFOV0Bc9B%2F7pe8RaMqavDLhFnVhJQRiQcMotv3N87psK%2BuPlLtye6lBXKyCuIVxWQZO7t6Zw1IEZW%2FsMcRu8dXubYYUKL%2F88ofZelYWbRAqXJCAT8GunuEZ2tFDIvqtkTHU%2BpozxgLFaFDeYk%2BZzqg%2FHqQlHhnCFCdl6JyDU7RhYOiG3SctIuZUlAn%2BIyfd7ak2Vsj3KcgmHPc6S0PI9ZSGPiQT3WU7K8gx61J%2FfNniSjfwFhbhDdWmSnm6oZYADs5MjQtrn%2FFWXsAVZIUSFyk156XNxw%2Fa5NOU9f165VHPsnKm%2BbuswwkMU16RpMq0b4AIISKnCTePEenrTWbv2xLg066Fsw1ZL%2B7nmL51CfJWByPE7etHRTTtvA9VqYC01t%2FD9CogE%2BPp%2F0LVGZO3Lo%2BjR2JYnKYGwaO1SUCV5g%2B%2Bd1oac03vZXk7x1HS8QdL9ox45e2Ya%2Bl4iMeZ1bMFKVatwcOft%2BFqkm%2F%2BTemTgvIfP3iMwI%2B338vOa7XhUsLI%2F%2BAjLMB97UnSDRHnZN2FH9h%2Fo8d91uD4GCLXt24bx4hKx2lE63jf5o2DEMSBTbfnAoX7VAZ4DhKeKfuDRmuDLeHWvTzYKqKWsIDCHsIvMBjqkAapQwybBPgO8ryaWlR6OAp9JM13hWOUwtoQ%2FUzhA%2Fiz7MDZehSJByTiXw4CJ5T6yits42hFpUIhEUJPVYVn6Gy5ziQ8PoNScuGiQID3H38OLSWy1A8hCQUitYPbFmYhXm%2F%2FPtLJDFzCdDzTnJZZjP6Bov%2FSjfDcUPSwnlLkdnKf0vu7QtPZ15ehF79z5PI4QZWQiYr6X7p4RpNks%2BO66l0MENcz0&X-Amz-Signature=716d8a4c98b257a928cc29a541381b7af7c803d38fb4909aa96c520323ec534f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Reboot


    ---


    Please click the **"Reboot"** button to restart the product.


    ![Instruction page for “Reboot”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/332a441c-4f53-4905-af02-1b4c1b928094/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR7FTACU%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC2i54mZV10GFL5uo69ouHZi%2Fy%2BQstpB9bsBEBQJASsbAIgJoojTbZAEbXJaiEE3uDBu9QX8%2FWBWQZP%2FjcsSkIC03Eq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDFLmmOummVo4DLgzGyrcA8nx1mHr26lVSDtaycoL2Xs0Q0PsVBju9DASL11qMrGD%2BvMzr7TE%2B%2Bv4anAJNyFFxEV3PzGcocJ426xhulwj%2FdfYbmh2m02uOz4lMbJ5%2B%2BcjRpA4Jgcq4MWGg9yMrA2BaZJZpnTZ8pgfxWXELn5eLPvuoKT%2BeDbNkKCOanBB0%2FUeVCkLoh5xQP4G4hK9N8ITqLmy4stsh730HMiADzCgRXu2KJvCsWt%2BOKm6cozWbylyZAZb94yBrbGdTLGPXzwe%2FkVHDnmWH9QLSYUSOnGmsYudstM5biaP8eYaWPdhmWb%2FkfwzNWXu6MTfs%2B%2FeHARuoFRQYEfoctXaqQWAbW%2BAxBC1vtTOhk%2FR%2FbhkCjjO7QtvP4I0PqifiTTbjtW%2BvoX0qkxTyhDxdycErwXvhRWpYUAPKQwFYU6Hvl%2BBtmmDjEVyZkSdL6otRKuIP7ScGLG9sg1C79fNlyEBuv5%2BQgZeWx5o61330u6OqPrJRHEJ0RnuZHFd1m6G4oD%2FdiScxeOFoVeH%2BodYlThNAH%2F93I%2F16vvqAh6k7zLLweQtWsHiYWHopfjqbgF5qe1QoJ31L1mKKXD9i1ru3A%2FT73XnyEofuZhlTguF%2FpNRj%2Baz3BrpDfFv1KhSq7sArvm5EWBfMN%2Bui8wGOqUBpwX3KJSmI9vG16rDz6XXdsYBNRsYQVKaIP5lNX75GPWq2fbPxREUj1tzgnQgJ3Wl%2BMYoSyr9M8TsWGW6eSOPk%2B0JgWzh83Sg%2BfCFuh%2BgefGctRA%2FJQ%2FPr95SnVEe%2FqwwMYcWfq2gtVbV64NS6Ua4%2BWBPCcswvlaRDjykDXswtZz4iBfIBG%2B5oVDRKJ4yC3URyUESgDdXiBnu%2FcGhRe%2FzxK7noB%2Fx&X-Amz-Signature=52e84f9cf7439494943025867247fba1c55029721621c6ced666d40c5b7974df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Update Firmware


    ---

1. Please click the "**Update Firmware**" button to begin updating the firmware for the WIFI device.

    ![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/43496c96-5a7c-4f67-8ed1-5c124905d9b7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AETMJ5D%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIALpyNJP2AQGe3GC9zDtogpaSqTGLLgmdJFoenLZvaqVAiAdEMj7aqSGkSYY3GcPtd%2BMpodT4BgcRu%2BSm%2FO6E1tl%2FCr%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMC1Z0m%2BcP99hAGhUKKtwDJXtBVEjCwVOdnRyJd7vBpz%2F8izD8Rjd3B1WMOgJzyDbYfU6qX0yH0S4pbLT9fJ%2BN2TfWnhVNtJgj7%2Bg94BKWB5l36uXovT9GPQCUKf9VWhoij885LQLFSL4WU6J4UN09EMvlsHA2LVZLW7SDCGryFwDTBn2fI%2FOh9K36HFOxnabL0PyxFuKTyiB9STqaT4P1ScIKTmUc%2BCuJI2NDcSo6JPzpZN3PkfjSDQJb%2FHSu6dFn5UngJfWt%2FA%2Bqv%2FN7vV%2BVr5q6SjB5GdEuTURRZDt9WKhf%2Bg8RuvOaXy3kl1Kx8bl%2B0eJZA%2BE3DyunvJPc3OyDgTwjWsekUobV1Q3Qaqm8q7qvEo%2BqLmknl8QCZj2j%2BWXO1gTy%2B1Yxhej1VR13A9tq8eb4%2BBNn%2B22u9RtbObNgwhwKdCmC0Q0KONcGGpD4%2B52NmASB2BKj9waLXKlnHXsvwuTpJAZT2ty%2FbjP8ciwOn1fpe%2Bt35g6TC2DE%2B0JB3tXiadlEXuj3nydKxpsFJXUxDBhvl6ag0t2AlTP19HMTu7idlTdbYrqhu22NeasIm0zYcW%2BXnNpXEecyl4Lalc6jXVgsaFfghnDI108%2F5KO5rfXFE%2BKrG8UMojew0ruhxHqbc8nFzc5dQxo%2F8CowxK6LzAY6pgFFpj%2FpwSCt2OSMY4n9m4ahihI7kNWoqVeCguNMWCIrKXisNrCJBLa5UXdoqqNEGRvCx5qGKowVjtEVraJvQD1ndQBKMVR9V9erJD%2FOCcjOaWgiAhrZqnxhjf6qDkucCzmAuXmEeT0bw8vjybug5HEMJYz0zzjnibN3M56LERsZbEk2oOcUcYHzlz3LCqiPYfT1SkqDs7hTMRhPKw7Slde67e6%2FaZD3&X-Amz-Signature=41c9d10596e99f0e3a886965e4acc94adb23135357c9b873cf1fdb7cad61790b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> 👉 This mark ⚠️ indicates that the firmware is not up to date.


> 👉 This mark ✅ indicates that the firmware is up to date. 

1. Please choose the bin file.

![Instruction page for “Choose bin file”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1719a179-5e2a-4b69-aa5c-e27fc0e9d539/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRBX5SN%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIED%2FAzmWTbgbuT6WzDiblXgRU%2Bpf88Fo0mrSQYmGFXasAiAhSgiI%2FoXcBHe2cti13m3%2F0T478ygLZMX2GKJMKzGqGyr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMrcOsI5yBkPb7uNgRKtwDwcg1NcaubehSGmbcLkv1s0AR4B4RgAjcxLu0CvNaHwby1VzvxOT4sgYYanXomSpGkpYR8%2Bj1avJaF3MsKbJA%2BJmgSVWYAlWz%2BJWcOg%2BozVvibnr%2Fy65eOj9aammIZx0NuzKi%2B9u7jsNxzLXsgo33jSgxrmi%2FWVPJP02rVNSQVkdxwmKehejGHkRhxm5DXuxic7cuGOvquOtun6U3bS3RGuOMssAdTvL8PzUU5TOGXUgVv979zRaWTga3iLnimG8ILV6N9QiqRETn%2F5s7jUeWbPUeLXEOpA2aybLU0s1wsxibwL8kYnpRXfrOM76xOj18F6rt%2BAlw%2Bej%2FQfHpjgREs396yx4gvAj5Wh2ndUV%2F35ZFHpgE4BYqdZA5oEo0X9Cc3HwOs28Q1zetqbCv3MgIar5Kqymbre4uft57iIURoyssYxthTkiJBZrO5vOPLt2eNYDxAH8Wrh42sUnLNXvRd09IVvD1NhLvmR3H6vNLeQSfkuF0FdAj54uwTSrNSRX3bJaAigTzoaMorodNcoN2Xq1Bvy7siF%2ByY5XioKTv2fbScAjA%2Bv7lSBlfrqIeCEhkX0ZAcNd%2F%2F4KUd0KRY06WWS7XjXw9V8VDQc%2B5OyRig9npCHIk7A%2FJ7esL4PswuLCLzAY6pgGqo3jKlEjnONiHMHhgS6BIoJX1PLRqKde2ItG9MbfGnxkKW8gPeEBYnDstY5kvNT0KdS0HcjM9CUpj7jbhRJWGWVaMJ7Xi63Z0tLtVq%2Bkn5pJE1dU%2FaeBgGWqAtIbBUzMFW2E36GdIkhI25AJdh44z9dvo62xjd%2Bo2asPnYXPghv9byYinrWIaMKPkeOVSKtsckTLV7hGo%2Ffw5cI1krkAj8VqIPrpW&X-Amz-Signature=f4eef3db73b85932d12889d45840fd86adfb2ed9ede27fb87cf7c032a2b00f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. WDM is going to update the firmware. Please click the **"OK"** button.

![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/d2fad5ce-acbe-4a65-a6ea-460e1677eb10/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRBX5SN%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIED%2FAzmWTbgbuT6WzDiblXgRU%2Bpf88Fo0mrSQYmGFXasAiAhSgiI%2FoXcBHe2cti13m3%2F0T478ygLZMX2GKJMKzGqGyr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMrcOsI5yBkPb7uNgRKtwDwcg1NcaubehSGmbcLkv1s0AR4B4RgAjcxLu0CvNaHwby1VzvxOT4sgYYanXomSpGkpYR8%2Bj1avJaF3MsKbJA%2BJmgSVWYAlWz%2BJWcOg%2BozVvibnr%2Fy65eOj9aammIZx0NuzKi%2B9u7jsNxzLXsgo33jSgxrmi%2FWVPJP02rVNSQVkdxwmKehejGHkRhxm5DXuxic7cuGOvquOtun6U3bS3RGuOMssAdTvL8PzUU5TOGXUgVv979zRaWTga3iLnimG8ILV6N9QiqRETn%2F5s7jUeWbPUeLXEOpA2aybLU0s1wsxibwL8kYnpRXfrOM76xOj18F6rt%2BAlw%2Bej%2FQfHpjgREs396yx4gvAj5Wh2ndUV%2F35ZFHpgE4BYqdZA5oEo0X9Cc3HwOs28Q1zetqbCv3MgIar5Kqymbre4uft57iIURoyssYxthTkiJBZrO5vOPLt2eNYDxAH8Wrh42sUnLNXvRd09IVvD1NhLvmR3H6vNLeQSfkuF0FdAj54uwTSrNSRX3bJaAigTzoaMorodNcoN2Xq1Bvy7siF%2ByY5XioKTv2fbScAjA%2Bv7lSBlfrqIeCEhkX0ZAcNd%2F%2F4KUd0KRY06WWS7XjXw9V8VDQc%2B5OyRig9npCHIk7A%2FJ7esL4PswuLCLzAY6pgGqo3jKlEjnONiHMHhgS6BIoJX1PLRqKde2ItG9MbfGnxkKW8gPeEBYnDstY5kvNT0KdS0HcjM9CUpj7jbhRJWGWVaMJ7Xi63Z0tLtVq%2Bkn5pJE1dU%2FaeBgGWqAtIbBUzMFW2E36GdIkhI25AJdh44z9dvo62xjd%2Bo2asPnYXPghv9byYinrWIaMKPkeOVSKtsckTLV7hGo%2Ffw5cI1krkAj8VqIPrpW&X-Amz-Signature=5e3b1a95bc7fc9a180b920bc93ade773351d40b7921e0a32fe6c79a1604d09c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

1. Updating firmware

![Instruction page for “Update Firmware”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/cca52bab-dad6-4793-9635-e89733b528f0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRBX5SN%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIED%2FAzmWTbgbuT6WzDiblXgRU%2Bpf88Fo0mrSQYmGFXasAiAhSgiI%2FoXcBHe2cti13m3%2F0T478ygLZMX2GKJMKzGqGyr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMrcOsI5yBkPb7uNgRKtwDwcg1NcaubehSGmbcLkv1s0AR4B4RgAjcxLu0CvNaHwby1VzvxOT4sgYYanXomSpGkpYR8%2Bj1avJaF3MsKbJA%2BJmgSVWYAlWz%2BJWcOg%2BozVvibnr%2Fy65eOj9aammIZx0NuzKi%2B9u7jsNxzLXsgo33jSgxrmi%2FWVPJP02rVNSQVkdxwmKehejGHkRhxm5DXuxic7cuGOvquOtun6U3bS3RGuOMssAdTvL8PzUU5TOGXUgVv979zRaWTga3iLnimG8ILV6N9QiqRETn%2F5s7jUeWbPUeLXEOpA2aybLU0s1wsxibwL8kYnpRXfrOM76xOj18F6rt%2BAlw%2Bej%2FQfHpjgREs396yx4gvAj5Wh2ndUV%2F35ZFHpgE4BYqdZA5oEo0X9Cc3HwOs28Q1zetqbCv3MgIar5Kqymbre4uft57iIURoyssYxthTkiJBZrO5vOPLt2eNYDxAH8Wrh42sUnLNXvRd09IVvD1NhLvmR3H6vNLeQSfkuF0FdAj54uwTSrNSRX3bJaAigTzoaMorodNcoN2Xq1Bvy7siF%2ByY5XioKTv2fbScAjA%2Bv7lSBlfrqIeCEhkX0ZAcNd%2F%2F4KUd0KRY06WWS7XjXw9V8VDQc%2B5OyRig9npCHIk7A%2FJ7esL4PswuLCLzAY6pgGqo3jKlEjnONiHMHhgS6BIoJX1PLRqKde2ItG9MbfGnxkKW8gPeEBYnDstY5kvNT0KdS0HcjM9CUpj7jbhRJWGWVaMJ7Xi63Z0tLtVq%2Bkn5pJE1dU%2FaeBgGWqAtIbBUzMFW2E36GdIkhI25AJdh44z9dvo62xjd%2Bo2asPnYXPghv9byYinrWIaMKPkeOVSKtsckTLV7hGo%2Ffw5cI1krkAj8VqIPrpW&X-Amz-Signature=525a1f364619c2671df8a385e8f6def5d92f1a6f0e31afa54404ea6e3beff514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


> ‼️ Do not turn off the computer or disconnect the device during the process. If the firmware update fails, the device must be sent back to the WPC for repair.


## 🌐 AP Mode


    ---


## 🌐 SSID/PW


    ---


    Please click the **"SSID/PW"** button to change the device's SSID and password through WDM.
    


    ![Instruction page for “SSID/PW”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/c52bc42b-359f-418b-bede-dbe7112303a8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJGGLLS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIEsZqJqh%2FP06jx8XXX6vFYRBbu65mE%2BFaOY9Jl88bgApAiEAlfwT4T8x%2BGOE5A0Ueyo96QFi1DHXRKK48uMEF61v3xIq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDBPAwMARE8JryxAFmSrcA6NrpNadnQTbOCmIwpoqQhICJGjBYTRnHjLX7RXF%2BQgh6G0dgavBZSJD33ZoUIwCj706klh0dvOCxZ6TdhtVGaiTVLbK3Govrqh%2B7WH83WcON7S8Waf%2BBW%2BsXuj3FfV0c8wvE2tUWJZWZxINxhsPBCkGURsDFsFZs8YXjWm1gjRso%2Fi8xEn4G3rRZtH%2F2a%2BqBK437A6caFep%2FxtQmqH0zNFaGZ%2B4mxNpM3GR1XDEAhJHYFNwdpiQVg2tc7d5gR5p54nUeKL20QjgQvWMCRVsh1k9wHQIBWLWYICYsTjuEmVBoccXVDwemKCDQn8i87%2F%2Fnsk8fdmvmfzUNuFGGi0HrXTn8DR%2Bo8q2wWrQGU06f1XlBBFV%2F3HH2gC%2BgBSEuvnuA31uIJoWWgMTtpvobZ8CBCqoc9IsO6dtxLaih%2Fij7ZPbkiiwICyfbXn4QtJLIAzxXrASqvcuHgDR1%2B2gAXAhTZgCj%2BnyKSuXS8MURQl6BYtHNUqFMyRWrn91hizBAd6StIIYgH0IEhZITwGgyKzVZH6BMgXFDCKpB9EES6yeVOh0M2SV7UwrPXOxqOEJZH2vPaxvvBM3%2BnRWilkaXr9ZDIrlHvNV1lyDxv6skSv6oZmxEpdh3EUGfjAx1xjfMNWui8wGOqUBQwtwrMEo8uITSqdDOtKZL21YeLug%2Bi%2BdsVoLRydf%2FD879MbDhPLHuVsxyyb6NFeMb5jDMET6J9gFNWVfBWC5MRbeIBxc2NPcet5hjhUZd2pvv23GT2iB4Mw8KqbqtD0ti6Dh5BWabfqvU6XnueuiYVhv0j7ATmk10CYs1ejeW39HibTiPEPdWJU2%2F%2BpJEvXHQgrraPfMUYfYTCLmvUwE4GDv80zm&X-Amz-Signature=218c3139e699b6a63a36e0da24271a2e62a0d2408add4a48ac011f2d21669eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Instruction page for “Password Configuration”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/11c363f3-d2e5-4aba-ad78-290d9039e6af/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJGGLLS%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIEsZqJqh%2FP06jx8XXX6vFYRBbu65mE%2BFaOY9Jl88bgApAiEAlfwT4T8x%2BGOE5A0Ueyo96QFi1DHXRKK48uMEF61v3xIq%2FwMIDhAAGgw2Mzc0MjMxODM4MDUiDBPAwMARE8JryxAFmSrcA6NrpNadnQTbOCmIwpoqQhICJGjBYTRnHjLX7RXF%2BQgh6G0dgavBZSJD33ZoUIwCj706klh0dvOCxZ6TdhtVGaiTVLbK3Govrqh%2B7WH83WcON7S8Waf%2BBW%2BsXuj3FfV0c8wvE2tUWJZWZxINxhsPBCkGURsDFsFZs8YXjWm1gjRso%2Fi8xEn4G3rRZtH%2F2a%2BqBK437A6caFep%2FxtQmqH0zNFaGZ%2B4mxNpM3GR1XDEAhJHYFNwdpiQVg2tc7d5gR5p54nUeKL20QjgQvWMCRVsh1k9wHQIBWLWYICYsTjuEmVBoccXVDwemKCDQn8i87%2F%2Fnsk8fdmvmfzUNuFGGi0HrXTn8DR%2Bo8q2wWrQGU06f1XlBBFV%2F3HH2gC%2BgBSEuvnuA31uIJoWWgMTtpvobZ8CBCqoc9IsO6dtxLaih%2Fij7ZPbkiiwICyfbXn4QtJLIAzxXrASqvcuHgDR1%2B2gAXAhTZgCj%2BnyKSuXS8MURQl6BYtHNUqFMyRWrn91hizBAd6StIIYgH0IEhZITwGgyKzVZH6BMgXFDCKpB9EES6yeVOh0M2SV7UwrPXOxqOEJZH2vPaxvvBM3%2BnRWilkaXr9ZDIrlHvNV1lyDxv6skSv6oZmxEpdh3EUGfjAx1xjfMNWui8wGOqUBQwtwrMEo8uITSqdDOtKZL21YeLug%2Bi%2BdsVoLRydf%2FD879MbDhPLHuVsxyyb6NFeMb5jDMET6J9gFNWVfBWC5MRbeIBxc2NPcet5hjhUZd2pvv23GT2iB4Mw8KqbqtD0ti6Dh5BWabfqvU6XnueuiYVhv0j7ATmk10CYs1ejeW39HibTiPEPdWJU2%2F%2BpJEvXHQgrraPfMUYfYTCLmvUwE4GDv80zm&X-Amz-Signature=88b3dcb9fa7d3d0c4bc5d4a2f776eccaacd0259779aaae8c5b1bd44800e752ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Monitor


    ---


    Please click the **"Monitor"** button to read the battery power and RSSI signal strength
    


    ![Instruction page for “Monitor Battery Power & RSSI Strength”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/83295eb1-c011-4f55-844f-1086e69efa72/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5BAXHO%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDNOPRCAmrKt3Vc0zD9zG%2B1BYeFkBCvufdT%2FRHVh6iSnAiAIZGrMw9dkd8yaFUX97sTxr97vqwHAQcYni9b0%2FnTcGir%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMHV4fXlY3DhMoCBbyKtwDlgo4M2bQbf2GmdMBoxSrgjkNcw8ZDntUf5qijR6%2FkCmwENKGNErzQnj%2Bt8k3sxWFaPFHdPSkevbML7NRy%2B7dE%2BgOa%2FZ76vAhKalK32swQuOrvRS9iSBhhCtSFi%2FfDUB23f2tZQDU4%2Bb2%2FjXRTGmTV8QnDn%2BGf3k9tGzVx0TInaswXG99IhPieO0IaUzS9i%2FSMWqFhGlcYGfT%2FNFVVwO2gTVEwkHVbco4J8vGDAnBGylWT24LQe5uBz4wJIpcYY5Kw2AMy7iAgSNPAGkoAfgTbT4vSk%2FNtwNvaObVLOChA%2BTGpdxxKxxXGBtIDUnSbWgImX2f%2BJ769%2BYf1dzK9D0oDoCqGZyHSHSP%2FYsXx1V9gsOuRPWaZirW0DPPugBzZl10RiqaF%2BGrR8LrLUc4vzbk1rTudo86jiVW%2FmQQrQuMYIwuGc6f7EQ66v1ypv6fLkj%2Blu7Mv1NKOYWaHkDaDVnGitx85BRroKd%2B%2Fwfw0VnfEjvBThEcs9j7qvrbzt3Tw0QnJhJ4v0c8f5FhI8X1lgKpFnJM1TxjHsXagPTFWKliipWdvzRn6KCHsAiqbG%2FNAsKx6Cm7GbofFjKHin%2BvouIJKOYfvKypL1EryNVFer9Q7Asr21JBZMLvCWS%2FrGowh7CLzAY6pgFH0xDNsDIyX%2BSwajs6Fy1NwmJ4A1ySNUQ1krLAgDJQArESCWtowQpkNe1PNo75giMw55ka7BgYi6ivfr7YOLEYlb9mK524rbR788P%2Bm36P6a9DykbWlp17ZK9XlOKXA4NPunYp3sjoGVhtnD4VvBbJ5M006Ft%2B3uifzlMwfj%2B7LXYnJbxyl%2BL2u5AdmXIgeWneGZwNzHNenWEtnIE1kiKMWvrkl8TU&X-Amz-Signature=8e9325df1f41f7911f24eb921d1fdfdd471684806ad01472f2f1653627e89014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Demo page for “Monitor Battery Power & RSSI Strength”](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1756d23c-4c9d-4875-a08c-573960134e9c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY5BAXHO%2F20260204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260204T053256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIDNOPRCAmrKt3Vc0zD9zG%2B1BYeFkBCvufdT%2FRHVh6iSnAiAIZGrMw9dkd8yaFUX97sTxr97vqwHAQcYni9b0%2FnTcGir%2FAwgOEAAaDDYzNzQyMzE4MzgwNSIMHV4fXlY3DhMoCBbyKtwDlgo4M2bQbf2GmdMBoxSrgjkNcw8ZDntUf5qijR6%2FkCmwENKGNErzQnj%2Bt8k3sxWFaPFHdPSkevbML7NRy%2B7dE%2BgOa%2FZ76vAhKalK32swQuOrvRS9iSBhhCtSFi%2FfDUB23f2tZQDU4%2Bb2%2FjXRTGmTV8QnDn%2BGf3k9tGzVx0TInaswXG99IhPieO0IaUzS9i%2FSMWqFhGlcYGfT%2FNFVVwO2gTVEwkHVbco4J8vGDAnBGylWT24LQe5uBz4wJIpcYY5Kw2AMy7iAgSNPAGkoAfgTbT4vSk%2FNtwNvaObVLOChA%2BTGpdxxKxxXGBtIDUnSbWgImX2f%2BJ769%2BYf1dzK9D0oDoCqGZyHSHSP%2FYsXx1V9gsOuRPWaZirW0DPPugBzZl10RiqaF%2BGrR8LrLUc4vzbk1rTudo86jiVW%2FmQQrQuMYIwuGc6f7EQ66v1ypv6fLkj%2Blu7Mv1NKOYWaHkDaDVnGitx85BRroKd%2B%2Fwfw0VnfEjvBThEcs9j7qvrbzt3Tw0QnJhJ4v0c8f5FhI8X1lgKpFnJM1TxjHsXagPTFWKliipWdvzRn6KCHsAiqbG%2FNAsKx6Cm7GbofFjKHin%2BvouIJKOYfvKypL1EryNVFer9Q7Asr21JBZMLvCWS%2FrGowh7CLzAY6pgFH0xDNsDIyX%2BSwajs6Fy1NwmJ4A1ySNUQ1krLAgDJQArESCWtowQpkNe1PNo75giMw55ka7BgYi6ivfr7YOLEYlb9mK524rbR788P%2Bm36P6a9DykbWlp17ZK9XlOKXA4NPunYp3sjoGVhtnD4VvBbJ5M006Ft%2B3uifzlMwfj%2B7LXYnJbxyl%2BL2u5AdmXIgeWneGZwNzHNenWEtnIE1kiKMWvrkl8TU&X-Amz-Signature=f1e44c0cf7891df1b92eb0f809ec204c5c35d31a960f88077f1a06d62c6ec877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# 🛠 Test Panel


---


> ✅ [AI Test Panel](/83076c31a6744b1dbddaa03e9b685d67)


> ✅ [AO Test Panel](/3b0b4323bd264c62bbebafdb03afec68)


> ✅ [AHRS Test Panel](/036a1a7386a54f16984f6cd59c40e810)


> ✅ [Counter Test Panel](/54df44860b5e46c890b3d36a7f78fb3d)


> ✅ [DI Test Panel](/161a115c84504d8f972c1a3d8d501ed1)


> ✅ [DO Test Panel](/b6f5cb9f623a425a8f375416a8928046)


> ✅ [DPOT Test Panel](/56f3906f3ca84a40b821831a9483e25e)


> ✅ [Encoder Test Panel](/ffd6bffa597a42fbbb7d0380619e9238)


> ✅ [I2C Test Panel](/d1dec8abd3f943e3af12d454c790b71f)


> ✅ [Matrix Test Panel](/955d378765fa45ec9dfabcc8b3ecf6f7)


> ✅ [Motion Test Panel](/8f1f04163d0d4d3a8c6fa883498f4f3a)


> ✅ [MUX Test Panel](/73f6b38ae99b405293019d21568232d9)


> ✅ [PWM Test Panel](/be3d5214b4514dc6a2f17238f8ca6ba4)


> ✅ [Relay Test Panel](/6424cf349bad4901b834de91a4aa3201)


> ✅ [ServoDrive Test Panel](/3a7b639fc14e4f5f88e16d5e5896fabb)


> ✅ [SPI Test Panel](/2b986aab5d61422f91a02ec1d2773999)


> ✅ [StrpDrive Test Panel](/81bbd6cebaf74352914f43a476ace283)


> ✅ [Thermo Test Panel](/650daad2062443bebb86f8baaad00fdc)


> ✅ [UART Test Panel](/ac2dd7dffab541608d4b27c749d715e7)

