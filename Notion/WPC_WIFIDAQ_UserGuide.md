
# 🛠 WIFI DAQ


## 🌐 **Naming**


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/09d65637-1e15-4f21-a56a-460155902095/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQAJZY6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkV%2FiyvHW9paLRECQsX2Xv2J4h1PQnuUs476HWzuw8AAiEA1XMgxDZ4evLN2Z%2FGu46FF6ac%2BWAYb4DH9XAFtzCLR%2FUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH4IdW9rIrCIQRgESrcA018mU57YyacYxWS3A5Y0x%2FmdAf47Ja%2BEbs5cCcGIZAkj3Ya%2FGtghE%2BX3iJjUId%2FYgc8iI2sa4Kvg7ogViXwQJTjA%2Fnlsg7f9ElJZXk%2BRGnbjv7jrAS%2FtpAJ0n2aM40%2BgH9B437hsPkHd6xzGOtyY6XWgcPuGsdara1PqR5kCYdMMrWMYOZnh8nevuJ4FYaTsDMQBJlOzfl%2FH3OdCURSugOrAhh%2BB%2FXCnZduWYV4aS345vRQtud8Lau9mlEVsgo7YNNX3Z1Gq1REe1GplxAvU8RVnx1Xfwc6wgk5Qg5oZAdO8D4MRUDWQH8Iv3sgDbWjInwafBkT9i8%2Fy3EFxcpDXocPY3xGnZK62e%2FTLo7CJOL2FlpfF%2Br0iFDbQL3f0ihB7LM0ZbQl8rugNiDerZLrOx8FDqBp874LiZiNGIQQ%2B2oQ0zV6p8tp3Ea63DPVcXBOYZYR1gxugYkSNmvEkgX5LPAWZmeFu40BZepYIgYI13G%2FNOZXNTs0TZVwultMxai7QZX07%2FRjKh6WCGZgxCwN4JdOunVKdMX153%2BxOPgOAuxIbxfcFFim2EPfyN0y5NmCrfj%2FFs2kzubkfPVfilWAhZAOsaWjPU62xun7k4gq%2FX3%2B8BEoLcKvo9v72xOWMIe27MsGOqUB1%2Be8yejaWk3k%2BRSjlmcwZX01v20QmJeYZ8nkxKf1YTHJi%2BhORYHh3iCxlBxbqvrxAb67nxAyhBwazrpYcJhOXSIJD0uDgpB9H5gJdY2ebr56Xib1mJdUZd03wkx4bgOBtIYNpRYK9r7DrX91WBb8a6JVtQ6DGVMvgs3Ag1Nx8X%2FuNMCY3fWSCyk5XjU9KKNWTA4JKVhAuEt8HIcxNjRxx%2FUe5C4p&X-Amz-Signature=37ebe4c5524cf04e18addd05c679e19563b52f7f80f3a59142a78c5dabb6654b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


---


## 🌐 WIFIDAQ Connection Process


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1c5bece0-5df0-4a2c-ac81-386f97c8f3ca/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQAJZY6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkV%2FiyvHW9paLRECQsX2Xv2J4h1PQnuUs476HWzuw8AAiEA1XMgxDZ4evLN2Z%2FGu46FF6ac%2BWAYb4DH9XAFtzCLR%2FUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH4IdW9rIrCIQRgESrcA018mU57YyacYxWS3A5Y0x%2FmdAf47Ja%2BEbs5cCcGIZAkj3Ya%2FGtghE%2BX3iJjUId%2FYgc8iI2sa4Kvg7ogViXwQJTjA%2Fnlsg7f9ElJZXk%2BRGnbjv7jrAS%2FtpAJ0n2aM40%2BgH9B437hsPkHd6xzGOtyY6XWgcPuGsdara1PqR5kCYdMMrWMYOZnh8nevuJ4FYaTsDMQBJlOzfl%2FH3OdCURSugOrAhh%2BB%2FXCnZduWYV4aS345vRQtud8Lau9mlEVsgo7YNNX3Z1Gq1REe1GplxAvU8RVnx1Xfwc6wgk5Qg5oZAdO8D4MRUDWQH8Iv3sgDbWjInwafBkT9i8%2Fy3EFxcpDXocPY3xGnZK62e%2FTLo7CJOL2FlpfF%2Br0iFDbQL3f0ihB7LM0ZbQl8rugNiDerZLrOx8FDqBp874LiZiNGIQQ%2B2oQ0zV6p8tp3Ea63DPVcXBOYZYR1gxugYkSNmvEkgX5LPAWZmeFu40BZepYIgYI13G%2FNOZXNTs0TZVwultMxai7QZX07%2FRjKh6WCGZgxCwN4JdOunVKdMX153%2BxOPgOAuxIbxfcFFim2EPfyN0y5NmCrfj%2FFs2kzubkfPVfilWAhZAOsaWjPU62xun7k4gq%2FX3%2B8BEoLcKvo9v72xOWMIe27MsGOqUB1%2Be8yejaWk3k%2BRSjlmcwZX01v20QmJeYZ8nkxKf1YTHJi%2BhORYHh3iCxlBxbqvrxAb67nxAyhBwazrpYcJhOXSIJD0uDgpB9H5gJdY2ebr56Xib1mJdUZd03wkx4bgOBtIYNpRYK9r7DrX91WBb8a6JVtQ6DGVMvgs3Ag1Nx8X%2FuNMCY3fWSCyk5XjU9KKNWTA4JKVhAuEt8HIcxNjRxx%2FUe5C4p&X-Amz-Signature=4a68ad49399879bb8965c1e96ad04683e070eed1d094b4fd3b475eaadfd6abdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 Appearance


---


![WIFI-DAQ-E3-A](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/e59894a5-0320-4b45-9ded-2da6f96976f1/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQAJZY6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkV%2FiyvHW9paLRECQsX2Xv2J4h1PQnuUs476HWzuw8AAiEA1XMgxDZ4evLN2Z%2FGu46FF6ac%2BWAYb4DH9XAFtzCLR%2FUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH4IdW9rIrCIQRgESrcA018mU57YyacYxWS3A5Y0x%2FmdAf47Ja%2BEbs5cCcGIZAkj3Ya%2FGtghE%2BX3iJjUId%2FYgc8iI2sa4Kvg7ogViXwQJTjA%2Fnlsg7f9ElJZXk%2BRGnbjv7jrAS%2FtpAJ0n2aM40%2BgH9B437hsPkHd6xzGOtyY6XWgcPuGsdara1PqR5kCYdMMrWMYOZnh8nevuJ4FYaTsDMQBJlOzfl%2FH3OdCURSugOrAhh%2BB%2FXCnZduWYV4aS345vRQtud8Lau9mlEVsgo7YNNX3Z1Gq1REe1GplxAvU8RVnx1Xfwc6wgk5Qg5oZAdO8D4MRUDWQH8Iv3sgDbWjInwafBkT9i8%2Fy3EFxcpDXocPY3xGnZK62e%2FTLo7CJOL2FlpfF%2Br0iFDbQL3f0ihB7LM0ZbQl8rugNiDerZLrOx8FDqBp874LiZiNGIQQ%2B2oQ0zV6p8tp3Ea63DPVcXBOYZYR1gxugYkSNmvEkgX5LPAWZmeFu40BZepYIgYI13G%2FNOZXNTs0TZVwultMxai7QZX07%2FRjKh6WCGZgxCwN4JdOunVKdMX153%2BxOPgOAuxIbxfcFFim2EPfyN0y5NmCrfj%2FFs2kzubkfPVfilWAhZAOsaWjPU62xun7k4gq%2FX3%2B8BEoLcKvo9v72xOWMIe27MsGOqUB1%2Be8yejaWk3k%2BRSjlmcwZX01v20QmJeYZ8nkxKf1YTHJi%2BhORYHh3iCxlBxbqvrxAb67nxAyhBwazrpYcJhOXSIJD0uDgpB9H5gJdY2ebr56Xib1mJdUZd03wkx4bgOBtIYNpRYK9r7DrX91WBb8a6JVtQ6DGVMvgs3Ag1Nx8X%2FuNMCY3fWSCyk5XjU9KKNWTA4JKVhAuEt8HIcxNjRxx%2FUe5C4p&X-Amz-Signature=aa489510d8542cf0b012635721570961f610e3bb0f09a2bd1b4b59079e711cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 LED Status


    | LED   | Information                                                                                                     |
    | ----- | --------------------------------------------------------------------------------------------------------------- |
    | Red   | A constant red light indicates AP mode, which requires accessing the web interface to configure Wi-Fi settings. |
    | Green | A constant green light indicates that the device is in a connectable state.                                     |
    | Blue  | A constant blue light indicates that the device is in a connected state.                                        |


## 🌐 Change the domain IP without using WDM.


    When you receive the WifiDAQ, please note that the factory default domain is SSID "WPC Systems" with an IP address of 192.168.5.3x.


    ### **Initial Status**


    ---

    - When the WifiDAQ is powered on and cannot connect to the router, it will enter AP mode, at which point the LED indicator will show red.

    ![5464C9A4-E9A9-4E1F-BB06-F88FDB79E07E.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/11d51148-fa75-45c9-bfdf-a4cb6fe89d3c/5464C9A4-E9A9-4E1F-BB06-F88FDB79E07E.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AQ77CO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWploGBt8rvYcc7r%2BlNsPrK%2F8dB9tUpAScYh98v5h04AiEAhm3n%2BVuV2UAhya9i%2B176gvgyyVLNgfI6OuFp6bERgwwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHosztBStmb6XsKtMyrcA1HqlZIc0si%2FK8zIr%2BMoXLETlxD2SYOSazgivz%2BGMdQT3N5X1CufeCYqYjfNjWLkLWEiSO7L8Kw4bzCB0kd9Bm43tP5zxfN8%2Bk%2Bm3Yiku%2F5kElAD5NZpb45TtaPkes4Bmbh%2BQCAqgXwMA7UkI3YLplIt%2BDEEcPLDvl75kKuf5H1pLbRPUg77AXV%2FSc8Po5aOhn%2F4TLoHlmS2LlaJ4aXzrULlNx7PCF3nNnrpltaoN8vJ86f%2BK%2FvuEdVXyjlCchMLp3g9uvh2yT8lMBFFkkle%2F7h6zG%2BzYGO5%2BtEZXjLvifxMYGAFIPrlqkSFUoPIXn4al%2Bjdg1Rl2%2B6yqly9%2FFTbtdDs7L3HsBPwWZkTnPK8iMQyTaM2r6qFhbcNszi%2BhgZRypHydlo6J9BUby0gl3fcIcMy0j9M%2BafQKN%2Fo8ojYO7%2Fo7ioLuSabl7fCty2f5XXLRcpZeLL8dtq5n22jA5SRC48Iz49%2BAp3dweGAJhpAw3iouSujGFJ6djtPwiNxUhBbQwWswKIVseQ%2Bd8ve1DgkCmKnJDXs1m7XwBbDUJtDEKVQRb%2FPTXeh%2Bh5xCOzqAN%2FtD2yDY9g1%2BmYMLPgfPw75xv%2BUYP4afSpthBc7d4JmjLZcPSTPs3%2FzcHmKEF6XML%2B27MsGOqUBlG0USjTynXDFUsL%2F%2FADisn%2FCjMLCIYMBvbd1L5fKgZgNC568AEq4%2BT3gJi6a8tMCm9DowFIzZM%2FK2Gv7B0Dbn%2FeV2K9gXs8rGt2A7l9z%2F5ikw2DWIH%2BTsX222wHu7%2BRUxIi6jno%2BAs0I8MLdOrKFkBgapUyyJMp2mJI%2Bmoax%2Buw0DtDidJ6%2B44hzcnxFQPPJWMYtnoAbMj7oMQkA1V%2Bq3G%2Bjwamc&X-Amz-Signature=15124051b2656180607eacacc069d2fcc1c40a43d3e418c6b8f942514989277b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### Computer connected to WifiDAQ


    ---

    - Connect the computer's Wi-Fi to "WPC_DAQ_62e814".

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/589fcdc2-75d5-4aea-963f-2a39850c1654/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AQ77CO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWploGBt8rvYcc7r%2BlNsPrK%2F8dB9tUpAScYh98v5h04AiEAhm3n%2BVuV2UAhya9i%2B176gvgyyVLNgfI6OuFp6bERgwwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHosztBStmb6XsKtMyrcA1HqlZIc0si%2FK8zIr%2BMoXLETlxD2SYOSazgivz%2BGMdQT3N5X1CufeCYqYjfNjWLkLWEiSO7L8Kw4bzCB0kd9Bm43tP5zxfN8%2Bk%2Bm3Yiku%2F5kElAD5NZpb45TtaPkes4Bmbh%2BQCAqgXwMA7UkI3YLplIt%2BDEEcPLDvl75kKuf5H1pLbRPUg77AXV%2FSc8Po5aOhn%2F4TLoHlmS2LlaJ4aXzrULlNx7PCF3nNnrpltaoN8vJ86f%2BK%2FvuEdVXyjlCchMLp3g9uvh2yT8lMBFFkkle%2F7h6zG%2BzYGO5%2BtEZXjLvifxMYGAFIPrlqkSFUoPIXn4al%2Bjdg1Rl2%2B6yqly9%2FFTbtdDs7L3HsBPwWZkTnPK8iMQyTaM2r6qFhbcNszi%2BhgZRypHydlo6J9BUby0gl3fcIcMy0j9M%2BafQKN%2Fo8ojYO7%2Fo7ioLuSabl7fCty2f5XXLRcpZeLL8dtq5n22jA5SRC48Iz49%2BAp3dweGAJhpAw3iouSujGFJ6djtPwiNxUhBbQwWswKIVseQ%2Bd8ve1DgkCmKnJDXs1m7XwBbDUJtDEKVQRb%2FPTXeh%2Bh5xCOzqAN%2FtD2yDY9g1%2BmYMLPgfPw75xv%2BUYP4afSpthBc7d4JmjLZcPSTPs3%2FzcHmKEF6XML%2B27MsGOqUBlG0USjTynXDFUsL%2F%2FADisn%2FCjMLCIYMBvbd1L5fKgZgNC568AEq4%2BT3gJi6a8tMCm9DowFIzZM%2FK2Gv7B0Dbn%2FeV2K9gXs8rGt2A7l9z%2F5ikw2DWIH%2BTsX222wHu7%2BRUxIi6jno%2BAs0I8MLdOrKFkBgapUyyJMp2mJI%2Bmoax%2Buw0DtDidJ6%2B44hzcnxFQPPJWMYtnoAbMj7oMQkA1V%2Bq3G%2Bjwamc&X-Amz-Signature=1ee7a8da2278281fac01d2dec5d15c0f4c2af71a53a618d1fca2b92366339c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ### Configure network


    ---

    - Open a web browser and enter the IP address `192.168.4.1`.
    - On the opened webpage, perform the necessary network settings.

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/fc872cc7-ada6-4765-8ffe-6e39f1fed446/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AQ77CO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWploGBt8rvYcc7r%2BlNsPrK%2F8dB9tUpAScYh98v5h04AiEAhm3n%2BVuV2UAhya9i%2B176gvgyyVLNgfI6OuFp6bERgwwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHosztBStmb6XsKtMyrcA1HqlZIc0si%2FK8zIr%2BMoXLETlxD2SYOSazgivz%2BGMdQT3N5X1CufeCYqYjfNjWLkLWEiSO7L8Kw4bzCB0kd9Bm43tP5zxfN8%2Bk%2Bm3Yiku%2F5kElAD5NZpb45TtaPkes4Bmbh%2BQCAqgXwMA7UkI3YLplIt%2BDEEcPLDvl75kKuf5H1pLbRPUg77AXV%2FSc8Po5aOhn%2F4TLoHlmS2LlaJ4aXzrULlNx7PCF3nNnrpltaoN8vJ86f%2BK%2FvuEdVXyjlCchMLp3g9uvh2yT8lMBFFkkle%2F7h6zG%2BzYGO5%2BtEZXjLvifxMYGAFIPrlqkSFUoPIXn4al%2Bjdg1Rl2%2B6yqly9%2FFTbtdDs7L3HsBPwWZkTnPK8iMQyTaM2r6qFhbcNszi%2BhgZRypHydlo6J9BUby0gl3fcIcMy0j9M%2BafQKN%2Fo8ojYO7%2Fo7ioLuSabl7fCty2f5XXLRcpZeLL8dtq5n22jA5SRC48Iz49%2BAp3dweGAJhpAw3iouSujGFJ6djtPwiNxUhBbQwWswKIVseQ%2Bd8ve1DgkCmKnJDXs1m7XwBbDUJtDEKVQRb%2FPTXeh%2Bh5xCOzqAN%2FtD2yDY9g1%2BmYMLPgfPw75xv%2BUYP4afSpthBc7d4JmjLZcPSTPs3%2FzcHmKEF6XML%2B27MsGOqUBlG0USjTynXDFUsL%2F%2FADisn%2FCjMLCIYMBvbd1L5fKgZgNC568AEq4%2BT3gJi6a8tMCm9DowFIzZM%2FK2Gv7B0Dbn%2FeV2K9gXs8rGt2A7l9z%2F5ikw2DWIH%2BTsX222wHu7%2BRUxIi6jno%2BAs0I8MLdOrKFkBgapUyyJMp2mJI%2Bmoax%2Buw0DtDidJ6%2B44hzcnxFQPPJWMYtnoAbMj7oMQkA1V%2Bq3G%2Bjwamc&X-Amz-Signature=1011d9337b0315cb3910cb645309995feb06caaabc66669ce5dc03be69f41250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/150250da-5ec3-4dbc-85ee-9fb174ae89b0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645AQ77CO%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWploGBt8rvYcc7r%2BlNsPrK%2F8dB9tUpAScYh98v5h04AiEAhm3n%2BVuV2UAhya9i%2B176gvgyyVLNgfI6OuFp6bERgwwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHosztBStmb6XsKtMyrcA1HqlZIc0si%2FK8zIr%2BMoXLETlxD2SYOSazgivz%2BGMdQT3N5X1CufeCYqYjfNjWLkLWEiSO7L8Kw4bzCB0kd9Bm43tP5zxfN8%2Bk%2Bm3Yiku%2F5kElAD5NZpb45TtaPkes4Bmbh%2BQCAqgXwMA7UkI3YLplIt%2BDEEcPLDvl75kKuf5H1pLbRPUg77AXV%2FSc8Po5aOhn%2F4TLoHlmS2LlaJ4aXzrULlNx7PCF3nNnrpltaoN8vJ86f%2BK%2FvuEdVXyjlCchMLp3g9uvh2yT8lMBFFkkle%2F7h6zG%2BzYGO5%2BtEZXjLvifxMYGAFIPrlqkSFUoPIXn4al%2Bjdg1Rl2%2B6yqly9%2FFTbtdDs7L3HsBPwWZkTnPK8iMQyTaM2r6qFhbcNszi%2BhgZRypHydlo6J9BUby0gl3fcIcMy0j9M%2BafQKN%2Fo8ojYO7%2Fo7ioLuSabl7fCty2f5XXLRcpZeLL8dtq5n22jA5SRC48Iz49%2BAp3dweGAJhpAw3iouSujGFJ6djtPwiNxUhBbQwWswKIVseQ%2Bd8ve1DgkCmKnJDXs1m7XwBbDUJtDEKVQRb%2FPTXeh%2Bh5xCOzqAN%2FtD2yDY9g1%2BmYMLPgfPw75xv%2BUYP4afSpthBc7d4JmjLZcPSTPs3%2FzcHmKEF6XML%2B27MsGOqUBlG0USjTynXDFUsL%2F%2FADisn%2FCjMLCIYMBvbd1L5fKgZgNC568AEq4%2BT3gJi6a8tMCm9DowFIzZM%2FK2Gv7B0Dbn%2FeV2K9gXs8rGt2A7l9z%2F5ikw2DWIH%2BTsX222wHu7%2BRUxIi6jno%2BAs0I8MLdOrKFkBgapUyyJMp2mJI%2Bmoax%2Buw0DtDidJ6%2B44hzcnxFQPPJWMYtnoAbMj7oMQkA1V%2Bq3G%2Bjwamc&X-Amz-Signature=277820cf2f27903a64b7f8d4bb96732a2528815e07b442c3a6c23be1234ac9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    > ‼️ - Please ensure that your computer is successfully connected to the "WPC_DAQ_62e814" network; otherwise, you will not be able to access the settings page.
    >
    > - If you need to change the domain or other network parameters of the WifiDAQ, please save your changes and restart the device after completing the settings on the page.


    By following the steps above, you can successfully configure the WifiDAQ and connect it to the desired network.


## 🌐 Change the domain IP with using WDM.


## 🌐 Update The Firmware Via WDM.


# 🛠 **Product List**


##  🌐 WIFI-DAQ-E3-A


    ### Feature


    ---

    1. Analog input: 8ch simultaneous and 16-bit single-ended
    2. Max. sampling rate: 10kHz
    3. Input range: +/-10V
    4. Web-based configurator
    5. 802.11 b/g/n Wi-Fi
    6. 2.4 to 2.5GHz
    7. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![WIFI-DAQ-E3-A’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/8ea08c07-ebc5-4764-a30d-f193c68d2357/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53XCAQQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwNJR0FoZygjWwEcue2taSGRIWiuJQuU3LzZfeQLKBQAiEAy%2B831MzijD6WKnSbbbmLEaxmhEFzlRB45HVZrbD8jd8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkCYs8nVb4kmbHdfyrcA3xhCp3kp8L8YkukjT4Iw2vQH7lI0%2FhJ%2Bg8yz5%2FvY6d%2FmwTPF%2FpERDNEnJCvpxljwTzRjKz8gm0QHrBFFUmQqtMG3lYmDxv0eXZ9ggLpNX8j5YaFuWdQystcM787RZeiAF6hMCovSKEZX41L7x%2BnX5BQodvSlAlJGH7ftoRmv8DdXAOCdZcA9VO4oI3IlDYZ9bxobp%2Fpm9WoHn9%2FBsG3k8pmogOG5DwEYD94IUYvnAQOA7A4QbHuIqzyjhlS%2BbOEMqEf0tg3VXirZplp8vCupj1nA2%2BZOGtKO0h%2Bm7dgW4U3TxAhv%2BL1qMNUnLBk1vHAQG9JiJILkbZy7my1viRrDS81P1c3pHnjygT4vQumo2QZOWkOFfIfed7Vmc0I4I2bxE%2FyiTFRoV8exbfhrbT4MBjFAfhXQ5bNJZ874PsjP%2BuemlRunbCVSBjCbKQnAPNLEtx7CfHRe2ua7XJpW2d%2FPIOPiq2%2FzGrsKecwTgFa4ORjgYEANW0ppA9E5%2BEdTJLmHvXSHkv5d7qTqXr0kDR1fHTE70YbCcQsfmGie3uWK6ztFVDBxRbbbHjTLIOOMq3dOCzxlsY5Yv08aCZzyXceWQB6jO1yUx1b%2FbIg4tDnVwg7OjAziriis%2FnzO72dMJC27MsGOqUBUiNo081ZdRbSrPoQSF4Kh2%2BuZn0XG7Xqix4t6PdnKuH3UY5Hacgk%2B3k37YoNrepXn6x%2FiWP4XO4R9VSa4pSUNK2TLt0ua%2FRexhrs8QHjb7zN%2Fyzp%2FGDy7gmnVQDh89CEfndBc5KkniOdefuGssZOBcVL%2B%2F%2BV7jvCW6P7ZiQGa1xr5X8OH6jkjotgSbMlZtoGp%2BHphiqs%2Fh4b%2BzKlHkTVAPOQZyb3&X-Amz-Signature=17d7acd7c7a5a66ca3c762ad6da92fc0a4094ec720c5dc1b6a53c83427f9c1ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 WIFI-DAQ-E3-AH


    ### Feature


    ---

    1. Analog input: 8ch simultaneous and 16-bit single-ended
    2. Max. sampling rate: 10kHz
    3. Input range: +/-10V
    4. Built-in 9DoF IMU with posture estimation
    5. Web-based configurator
    6. 802.11 b/g/n Wi-Fi
    7. 2.4GHz to 2.5GHz
    8. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![WIFI-DAQ-E3-AH’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/8ea08c07-ebc5-4764-a30d-f193c68d2357/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674Y2FEPN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWK1KDj2wyIRlYnTekUVm37dEcCijbZ9NVfylDqdSx7gIhANXSlzgVidT5jQTyiXUak8uzB%2FMUVI2cqO8A7e7PiJthKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH3eyMZ4mCDWghfm4q3AM3uy8nPmjFiSHcy%2FurwZiQtbL6U9tQmqmGrS8tlRiZZPeZzq540HTd6B6PK%2BEm2D2KPaZQ%2Bpj4PiuA00d14%2Fixl7aGwJUg%2F%2Br7GZErsiPikKDS3Y9X0LsesZMjSwis8CQQk96JOpk32pzhIiqFVpSU1m%2F2mIvN1a2nqlcpO1shCa63zH01%2BUat6xe6fQ9XmHtrzAt1mYORriT0k0u0kOmldjO%2BH5bK1nOxT5CRWbDwQHdhf0jPSQwmQZ7FOsN0JLS9oMfMiXpdOcoBXIbcjCKSN00Y2kjyar%2FqqmoLSTKU%2BQVGBxSqdM7sOYIS0Z90KKrq%2BD8RuixoDF2%2BFjjDBn7ZQ5s%2FoKHSp5MH6HqQFoydJijc9%2Bihk2InVeIR8TgqJgpp5BXw8%2B7%2FbUz%2FbC%2F8XmuUkgY5a75rniKDnfqyfxaLhDS5zEnLfymrpOs%2FEBVYMF0rYzml%2BFI1376EP%2FHA%2Fag30%2BWKRDboTzFwzYbM2ZQZw4u8QWLiQTDTUAhkb52fUojNSQ1zu7XpTDfxhYiH6SaCMdFY8fQxkUsvUq9h2gSS3C3KOLBDSVuBhNf2iHQpwbqcm5fOyiK6lmFDrjmpo54ZaK8QP5ISVbADLXhqMWZhrhnnbElyGGqmBteIhjCTtOzLBjqkAW9jcL0N1UrgukmL0mV31XMZcoVSWZKhnx7%2B0EmILzzB8wiI5XZ8Nf4NpU0sYOSflhkeekLOQ%2FJDMyTissEHbZd2Abvq4JDgBcn91cAsgqoJTKFtk0LYBshMsGvYWbu5fGIGdVyF9W%2BqEkZ4QbAn%2FKSNCgFTcU1hCWJx%2FoLIxSaYfn%2FrcU2E68yTTfBKCVxCTkHfr0qfyrr9%2BGnefhYyLrr9AY26&X-Amz-Signature=3942708d3f8ecc5c6a585ae2d578dbda0dde4267658e081d4d627bf0e75f56db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


##  🌐 WIFI-DAQ-F4-A


    ### Feature


    ---

    1. Analog input: 8ch simultaneous and 16-bit single-ended
    2. Max. sampling rate: 20kHz
    3. Input range: +/-10V
    4. Web-based configurator
    5. 802.11 b/g/n Wi-Fi
    6. 2.4GHz to 2.5GHz
    7. Support [Python](https://wpc-systems-ltd.github.io/WPC_Python_driver_release/), [C#](https://wpc-systems-ltd.github.io/WPC_CSharp_driver_release/), and [LabVIEW](/ca1d9d570ec44097b4cdd0cebee0a77f)

    ### Pinout


    ---


    ![WIFI-DAQ-F4-A’s pinout](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/8ea08c07-ebc5-4764-a30d-f193c68d2357/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LPLGHP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T083722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLgzzkxkUgis6Ifvn%2BxKgO7eE01IiG2NRKf4oT2N3QZQIhANt0Dz6nBb7320I2IzhWFlyCCGFnb9E2pxSlQzjTHQP1KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqo3HzWrzSKAfo614q3ANG1WrjVEmV3njHAQ9Qm%2Bub6DFLdYg7oUDEjLQ91PoOVuI9ICo8kcc90KS2tmCmUz%2BCiPRisINLqPKlC%2FVxBvlKTbBp1seFaY2w2Oc4P6lh4Pmaie2WKyP1dsK39D4Za%2F8DusWINzDcU2bJ2o1PT3khvzkIQu3f3IpnFbyqmw39%2B4FARuULeEb9PoBjQR58J4ByjAWRGobEd08DmP862UnrbuUI5jev8ohG3D%2BTM38nlMYNkUfu%2F%2BVt2eoGZf9rEpT2mIP1PXBfA295lPN1OWdvwMBmRn1odQvJs%2FPx48lIX2%2B1RjEfrn4CZ2519M1lFT3YhvlskALhxcy1r%2BeJmqZ0GY4gY%2Fpykog709yEvDBJ3Rr4twSvlrV8e3GtXyUBAicRuSrFq0skd2H9Z%2BoaKkR8LFPghCjFC%2B5%2F6UcVXQKVvoHdiYM64nYlH8Pv3iyFuXPFI2cjfjge29tfsEqNjgkgQ1rQkGFYpSqDSHhp7LTbfjkQcbdAzGQm60xxlBNzW4Os2PKNnuOY3fVtfi5n%2BxZGwwBRze1auMcNyKpRTBOQbClNrxw4nZawGgjGV5tLRlXMAGKgb3DvCOXkVdtOHvga7ea7xlfKFsjemmB%2FUB0x91RwAxsXpU4yu7WHujCTtezLBjqkASf1PKKexIuCedMXgcoC1LmcdDMUZiHGODkwTVL9klONAVlKLG0j6aT8%2BdqI8MISeDR%2B4finKrUI50OpHVfD%2Fic5aYPBG5Knnyrf8HJGy6He%2F9PLFC%2FlzigKJyttMt4wuLilSXgRIeKkf7ZMsuIaR0Afk9JOdyKvUD3cTSS9iAX1Hob0o5yTzLsAJRgM2fbRdGLAiRCjkulgpZqNlQCTDKM0SAk5&X-Amz-Signature=579d3f04ef45d731d2c7f945720a13c2cae8f67105fbb78faea797aa3cebb8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

