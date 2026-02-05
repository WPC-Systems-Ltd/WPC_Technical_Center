
![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/25c0756b-0c8d-4675-8365-d116dbba46bb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYNGNGL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAvR59OuziLF7v5vSdFW9dSat8qMI16MFJtAuEY5ga1EAiAV2RKw8JpSP6qorrIigfeszXeSLaIe%2F7LQXjFW4OJjKyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjSG5jTbCUYjdvEXOKtwDY869dPVIl1ptw7fC0CmnuWM1N5bPib9zlQnp2SJy4Grs37DvsTY4f8EbMTa9qqQj4uoLR9SKAf6EA7ClM%2B4Xt%2FLMOOeKQHZgchAcJ%2F4dd0zluSIyfDlmxsSO%2FWDAkC4ELt9BrI9N82gKRIsXA%2BskYgMpOtmH%2Fq3pFKw9ZmabEBIGciCood3fsS6M1xbPv5OusWhUV9Ua54DYYrbuuVwyt885%2B3dDEgkL4%2FKoMWttSCQpI31D9TMyV0hWPZWoht8puzBDG8amAFLS4Gqsbb6DHMueG0Gq%2Bjzk0DkK%2FrTUzk23tz0OGiP9tLBuufnG0Gz1nSJZGmZshK%2FXzicdKkK2%2BYIvCD%2FXaIr%2BTmPdTNSET%2BXeJ4cGwwfKHkWwaDXHvnL26LgfFxKCPt2cDzV3xHo5G6MvB3cmGLsmFGtSDBP9G3Cm%2B%2BmoVUwB9G9ymxeG16KrkGxc4KPP7GIuALTOdHzb%2BKpfc%2BfI9B3gwuRUI01Sx%2Fu76BmAEVEt74NNN3cL22yE2njjRNaC0SlpFjqQ012VUubIxxk6b7hxs%2Br4E3r69qTWz1H8wK2jsmIs6LTcBOJDl%2B3%2BR5B%2F1BtJPXeG78tlkaG7tYvwIsRldEuaq4kU%2FlwBBqc598t71zawjkYw8fiPzAY6pgG%2FtwhqJpOdau%2BQU8CiHcKrrXzTLAcBSmQgVd%2Fa%2FZ6z7qYlOSpMU6ReOyjVODPCZ2QyclEJhdxnjQAVH8GhZB5Tq41QGmkAgfYbgn%2BGdje8DYiVTEozA8bdz69q7uK8N4qkOjjNKzXRKwtMA8qHIG6zE69MqxqkKxkgOb1l2CCJ5WmPEkImXSvT1S1baFmu7qzmPDdEEOltaCKxkc%2BUujwlutdv0J7w&X-Amz-Signature=01a8e40d5cfcf6f64cea828c3a5ad41c75d9c0f3c1dfa5a61dff66c37ffb97a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 🌐 **軸卡測試程式**


---


 軸卡測試程式的功能非常完整，主要功能描述如下

1. 顯示軸卡即時狀態（脈波輸出狀態、編碼器、光學尺位置、極限開關狀態……等）
2. 對軸卡本身及其 I/O 進行設定
3. 對軸卡 Find reference 進行設定及執行 Find reference
4. 直接對軸卡下達命令並且控制馬達
5. 將當前軸卡設定值儲存成 CONFIG 檔案（*.INI）並提供給後續的驅動程式快速載入設定值使用。
（檔案路徑：Current config file 欄位）

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/7b802578-c44f-47d4-8841-4e463f7724c9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYNGNGL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAvR59OuziLF7v5vSdFW9dSat8qMI16MFJtAuEY5ga1EAiAV2RKw8JpSP6qorrIigfeszXeSLaIe%2F7LQXjFW4OJjKyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjSG5jTbCUYjdvEXOKtwDY869dPVIl1ptw7fC0CmnuWM1N5bPib9zlQnp2SJy4Grs37DvsTY4f8EbMTa9qqQj4uoLR9SKAf6EA7ClM%2B4Xt%2FLMOOeKQHZgchAcJ%2F4dd0zluSIyfDlmxsSO%2FWDAkC4ELt9BrI9N82gKRIsXA%2BskYgMpOtmH%2Fq3pFKw9ZmabEBIGciCood3fsS6M1xbPv5OusWhUV9Ua54DYYrbuuVwyt885%2B3dDEgkL4%2FKoMWttSCQpI31D9TMyV0hWPZWoht8puzBDG8amAFLS4Gqsbb6DHMueG0Gq%2Bjzk0DkK%2FrTUzk23tz0OGiP9tLBuufnG0Gz1nSJZGmZshK%2FXzicdKkK2%2BYIvCD%2FXaIr%2BTmPdTNSET%2BXeJ4cGwwfKHkWwaDXHvnL26LgfFxKCPt2cDzV3xHo5G6MvB3cmGLsmFGtSDBP9G3Cm%2B%2BmoVUwB9G9ymxeG16KrkGxc4KPP7GIuALTOdHzb%2BKpfc%2BfI9B3gwuRUI01Sx%2Fu76BmAEVEt74NNN3cL22yE2njjRNaC0SlpFjqQ012VUubIxxk6b7hxs%2Br4E3r69qTWz1H8wK2jsmIs6LTcBOJDl%2B3%2BR5B%2F1BtJPXeG78tlkaG7tYvwIsRldEuaq4kU%2FlwBBqc598t71zawjkYw8fiPzAY6pgG%2FtwhqJpOdau%2BQU8CiHcKrrXzTLAcBSmQgVd%2Fa%2FZ6z7qYlOSpMU6ReOyjVODPCZ2QyclEJhdxnjQAVH8GhZB5Tq41QGmkAgfYbgn%2BGdje8DYiVTEozA8bdz69q7uK8N4qkOjjNKzXRKwtMA8qHIG6zE69MqxqkKxkgOb1l2CCJ5WmPEkImXSvT1S1baFmu7qzmPDdEEOltaCKxkc%2BUujwlutdv0J7w&X-Amz-Signature=50b91d9eb602da50dfc0b608290ebbc87f7adbf94dcebc3c00ad16a1f4e7ba6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Button Description

    | **Button**              | **Description**  |
    | ----------------------- | ---------------- |
    | Logical Pos             | 軸卡輸出Pulse累積的位置   |
    | Encoder Pos             | Encoder的位置       |
    | F                       | Forward極限開關是否被觸發 |
    | H                       | Home極限開關是否被觸發    |
    | R                       | Reverse極限開關是否被觸發 |
    | INP                     | 馬達是否已經到達指定的位置    |
    | ALM                     | 驅動器是否有發生錯誤       |
    | Stop(red)/start (green) | 馬達是否正在轉動         |

- Icon

    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/2b75e766-96c7-4de9-8080-9a277e7b77d7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5O4RAW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH0J0vCirdH952EqgnzyURRt1mOj%2BUDIsXoFZzkiC0K9AiBaZreV%2BAZzzEvIM6QnA4Gmzqm5Q8BOvmNn81%2Bcy%2F4UPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsB0j25fyb%2BiZ%2BzpFKtwDYUKP0LFtQCYqYuyDqx4Radylll3q1qU%2FP7OFBJ%2BnbxlOfDkc2RtVQ2im6ApRcj9Ec6SlK0pzJW7kHyNDnCcSrza2mtRjOuYx6jRcfreeFqEnUATL3%2FMTyo3bKE2%2BQ5apXtne1ZsStyRsqE4RA2K9axIM%2Fimafqab%2BiEqEi3NZo60jsCngFG9qE5Pza76xskZQb1%2FJQnapmcsVs2n19HAoVOapy58%2BcCyVBQNzsaEzs1qBKiJcVqmC1ngvdS6gHRKUn0NXRagCdsw0zR7jcCvxxz4ZydpFW5H8%2FMLvtMK8xewuCkYPN7M8PWPQPmoqjKF%2BYNlQe58a6b%2BmJM%2FHqq%2BCQeJ7CZ6XAyAKw0iiBa6a0hpxNHnRBm2bH8lGln5Uw7RAM6TS8Hhde0UGnIQnzhl8T9pVESkHPtazyRICrYi5hSfWoSUvACCrgpregVxfGjoZ45EzH7Bpx2AGkDo8eXDN2sH6QIhs0kJAJFO5qV8NewbOilsC2KjtX67XT5ZU04Uj9GO1ZYJ7Jh06WALWo0Ts4zrmtmPWkPTiAZLaim96DLRnkzJyecAxDFyZfttKtZsbmPE4Dl%2Fia%2FR3OyD0CkOwCgLmbfqjGCWMltBJgZuheRrxwYFuVoz1iupsUUwnPmPzAY6pgEq6sUc1%2BRH3Mj9TPsDHJCGkpBSXqEK%2BbdOQ0mXNaLhuTaR9Gr%2BHuIK%2BhFWbUW3wQ%2FKLHm%2FtV3V88TrLeBLB2lJaG%2BtKo3dRm%2FbXe42Fk6YIzqc1VstgfRXlUGwpXzaPHRxiUh9pA2zYExGOT6MHz24PzY9i4jqg3frm%2FqhRuZBKJEIKqp2cE%2FHHCXPNsoRwI4NTq%2F8dZclzg3O%2BO60yTiF%2Bt5FDOFi&X-Amz-Signature=89c43777bc287ddcfd65f675f38e00b633567512ad8ecbb453e7234b2eda7250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/40acdee0-4592-4442-9156-7ffda5cee584/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5O4RAW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH0J0vCirdH952EqgnzyURRt1mOj%2BUDIsXoFZzkiC0K9AiBaZreV%2BAZzzEvIM6QnA4Gmzqm5Q8BOvmNn81%2Bcy%2F4UPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsB0j25fyb%2BiZ%2BzpFKtwDYUKP0LFtQCYqYuyDqx4Radylll3q1qU%2FP7OFBJ%2BnbxlOfDkc2RtVQ2im6ApRcj9Ec6SlK0pzJW7kHyNDnCcSrza2mtRjOuYx6jRcfreeFqEnUATL3%2FMTyo3bKE2%2BQ5apXtne1ZsStyRsqE4RA2K9axIM%2Fimafqab%2BiEqEi3NZo60jsCngFG9qE5Pza76xskZQb1%2FJQnapmcsVs2n19HAoVOapy58%2BcCyVBQNzsaEzs1qBKiJcVqmC1ngvdS6gHRKUn0NXRagCdsw0zR7jcCvxxz4ZydpFW5H8%2FMLvtMK8xewuCkYPN7M8PWPQPmoqjKF%2BYNlQe58a6b%2BmJM%2FHqq%2BCQeJ7CZ6XAyAKw0iiBa6a0hpxNHnRBm2bH8lGln5Uw7RAM6TS8Hhde0UGnIQnzhl8T9pVESkHPtazyRICrYi5hSfWoSUvACCrgpregVxfGjoZ45EzH7Bpx2AGkDo8eXDN2sH6QIhs0kJAJFO5qV8NewbOilsC2KjtX67XT5ZU04Uj9GO1ZYJ7Jh06WALWo0Ts4zrmtmPWkPTiAZLaim96DLRnkzJyecAxDFyZfttKtZsbmPE4Dl%2Fia%2FR3OyD0CkOwCgLmbfqjGCWMltBJgZuheRrxwYFuVoz1iupsUUwnPmPzAY6pgEq6sUc1%2BRH3Mj9TPsDHJCGkpBSXqEK%2BbdOQ0mXNaLhuTaR9Gr%2BHuIK%2BhFWbUW3wQ%2FKLHm%2FtV3V88TrLeBLB2lJaG%2BtKo3dRm%2FbXe42Fk6YIzqc1VstgfRXlUGwpXzaPHRxiUh9pA2zYExGOT6MHz24PzY9i4jqg3frm%2FqhRuZBKJEIKqp2cE%2FHHCXPNsoRwI4NTq%2F8dZclzg3O%2BO60yTiF%2Bt5FDOFi&X-Amz-Signature=0aa832c8c8521ad89d032a9f16a1fe6451093084ec1ddeed7c5ea16868d770e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/5d91e4a6-f8fd-47c0-b683-0af8d414006d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5O4RAW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH0J0vCirdH952EqgnzyURRt1mOj%2BUDIsXoFZzkiC0K9AiBaZreV%2BAZzzEvIM6QnA4Gmzqm5Q8BOvmNn81%2Bcy%2F4UPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsB0j25fyb%2BiZ%2BzpFKtwDYUKP0LFtQCYqYuyDqx4Radylll3q1qU%2FP7OFBJ%2BnbxlOfDkc2RtVQ2im6ApRcj9Ec6SlK0pzJW7kHyNDnCcSrza2mtRjOuYx6jRcfreeFqEnUATL3%2FMTyo3bKE2%2BQ5apXtne1ZsStyRsqE4RA2K9axIM%2Fimafqab%2BiEqEi3NZo60jsCngFG9qE5Pza76xskZQb1%2FJQnapmcsVs2n19HAoVOapy58%2BcCyVBQNzsaEzs1qBKiJcVqmC1ngvdS6gHRKUn0NXRagCdsw0zR7jcCvxxz4ZydpFW5H8%2FMLvtMK8xewuCkYPN7M8PWPQPmoqjKF%2BYNlQe58a6b%2BmJM%2FHqq%2BCQeJ7CZ6XAyAKw0iiBa6a0hpxNHnRBm2bH8lGln5Uw7RAM6TS8Hhde0UGnIQnzhl8T9pVESkHPtazyRICrYi5hSfWoSUvACCrgpregVxfGjoZ45EzH7Bpx2AGkDo8eXDN2sH6QIhs0kJAJFO5qV8NewbOilsC2KjtX67XT5ZU04Uj9GO1ZYJ7Jh06WALWo0Ts4zrmtmPWkPTiAZLaim96DLRnkzJyecAxDFyZfttKtZsbmPE4Dl%2Fia%2FR3OyD0CkOwCgLmbfqjGCWMltBJgZuheRrxwYFuVoz1iupsUUwnPmPzAY6pgEq6sUc1%2BRH3Mj9TPsDHJCGkpBSXqEK%2BbdOQ0mXNaLhuTaR9Gr%2BHuIK%2BhFWbUW3wQ%2FKLHm%2FtV3V88TrLeBLB2lJaG%2BtKo3dRm%2FbXe42Fk6YIzqc1VstgfRXlUGwpXzaPHRxiUh9pA2zYExGOT6MHz24PzY9i4jqg3frm%2FqhRuZBKJEIKqp2cE%2FHHCXPNsoRwI4NTq%2F8dZclzg3O%2BO60yTiF%2Bt5FDOFi&X-Amz-Signature=01990cc168755914788bc0ed6d1bc67b0b4df46e39f5d3a45ea5acba3550b669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/30c0c37f-9e56-4c69-b6d2-439b961a286d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5O4RAW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH0J0vCirdH952EqgnzyURRt1mOj%2BUDIsXoFZzkiC0K9AiBaZreV%2BAZzzEvIM6QnA4Gmzqm5Q8BOvmNn81%2Bcy%2F4UPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsB0j25fyb%2BiZ%2BzpFKtwDYUKP0LFtQCYqYuyDqx4Radylll3q1qU%2FP7OFBJ%2BnbxlOfDkc2RtVQ2im6ApRcj9Ec6SlK0pzJW7kHyNDnCcSrza2mtRjOuYx6jRcfreeFqEnUATL3%2FMTyo3bKE2%2BQ5apXtne1ZsStyRsqE4RA2K9axIM%2Fimafqab%2BiEqEi3NZo60jsCngFG9qE5Pza76xskZQb1%2FJQnapmcsVs2n19HAoVOapy58%2BcCyVBQNzsaEzs1qBKiJcVqmC1ngvdS6gHRKUn0NXRagCdsw0zR7jcCvxxz4ZydpFW5H8%2FMLvtMK8xewuCkYPN7M8PWPQPmoqjKF%2BYNlQe58a6b%2BmJM%2FHqq%2BCQeJ7CZ6XAyAKw0iiBa6a0hpxNHnRBm2bH8lGln5Uw7RAM6TS8Hhde0UGnIQnzhl8T9pVESkHPtazyRICrYi5hSfWoSUvACCrgpregVxfGjoZ45EzH7Bpx2AGkDo8eXDN2sH6QIhs0kJAJFO5qV8NewbOilsC2KjtX67XT5ZU04Uj9GO1ZYJ7Jh06WALWo0Ts4zrmtmPWkPTiAZLaim96DLRnkzJyecAxDFyZfttKtZsbmPE4Dl%2Fia%2FR3OyD0CkOwCgLmbfqjGCWMltBJgZuheRrxwYFuVoz1iupsUUwnPmPzAY6pgEq6sUc1%2BRH3Mj9TPsDHJCGkpBSXqEK%2BbdOQ0mXNaLhuTaR9Gr%2BHuIK%2BhFWbUW3wQ%2FKLHm%2FtV3V88TrLeBLB2lJaG%2BtKo3dRm%2FbXe42Fk6YIzqc1VstgfRXlUGwpXzaPHRxiUh9pA2zYExGOT6MHz24PzY9i4jqg3frm%2FqhRuZBKJEIKqp2cE%2FHHCXPNsoRwI4NTq%2F8dZclzg3O%2BO60yTiF%2Bt5FDOFi&X-Amz-Signature=0bf3634035cec76bbb69c2c85c2175ed09204225c94bf46a9088c9cc19300caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/22d8417e-8001-4194-8451-0dc4fd1ab694/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5O4RAW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIH0J0vCirdH952EqgnzyURRt1mOj%2BUDIsXoFZzkiC0K9AiBaZreV%2BAZzzEvIM6QnA4Gmzqm5Q8BOvmNn81%2Bcy%2F4UPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMsB0j25fyb%2BiZ%2BzpFKtwDYUKP0LFtQCYqYuyDqx4Radylll3q1qU%2FP7OFBJ%2BnbxlOfDkc2RtVQ2im6ApRcj9Ec6SlK0pzJW7kHyNDnCcSrza2mtRjOuYx6jRcfreeFqEnUATL3%2FMTyo3bKE2%2BQ5apXtne1ZsStyRsqE4RA2K9axIM%2Fimafqab%2BiEqEi3NZo60jsCngFG9qE5Pza76xskZQb1%2FJQnapmcsVs2n19HAoVOapy58%2BcCyVBQNzsaEzs1qBKiJcVqmC1ngvdS6gHRKUn0NXRagCdsw0zR7jcCvxxz4ZydpFW5H8%2FMLvtMK8xewuCkYPN7M8PWPQPmoqjKF%2BYNlQe58a6b%2BmJM%2FHqq%2BCQeJ7CZ6XAyAKw0iiBa6a0hpxNHnRBm2bH8lGln5Uw7RAM6TS8Hhde0UGnIQnzhl8T9pVESkHPtazyRICrYi5hSfWoSUvACCrgpregVxfGjoZ45EzH7Bpx2AGkDo8eXDN2sH6QIhs0kJAJFO5qV8NewbOilsC2KjtX67XT5ZU04Uj9GO1ZYJ7Jh06WALWo0Ts4zrmtmPWkPTiAZLaim96DLRnkzJyecAxDFyZfttKtZsbmPE4Dl%2Fia%2FR3OyD0CkOwCgLmbfqjGCWMltBJgZuheRrxwYFuVoz1iupsUUwnPmPzAY6pgEq6sUc1%2BRH3Mj9TPsDHJCGkpBSXqEK%2BbdOQ0mXNaLhuTaR9Gr%2BHuIK%2BhFWbUW3wQ%2FKLHm%2FtV3V88TrLeBLB2lJaG%2BtKo3dRm%2FbXe42Fk6YIzqc1VstgfRXlUGwpXzaPHRxiUh9pA2zYExGOT6MHz24PzY9i4jqg3frm%2FqhRuZBKJEIKqp2cE%2FHHCXPNsoRwI4NTq%2F8dZclzg3O%2BO60yTiF%2Bt5FDOFi&X-Amz-Signature=ffd9cbf8fa4160188bb79b536a2cebd63e4767bfa945593eb317575fd9f236b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> Open Motion config panel
> Servo on/off
> Halt
> Open interactive control panel
> Reset position to 0

## 🌐 Motion I/O config panel


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/805df6ed-876d-4614-bb03-90208e48723e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYNGNGL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAvR59OuziLF7v5vSdFW9dSat8qMI16MFJtAuEY5ga1EAiAV2RKw8JpSP6qorrIigfeszXeSLaIe%2F7LQXjFW4OJjKyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjSG5jTbCUYjdvEXOKtwDY869dPVIl1ptw7fC0CmnuWM1N5bPib9zlQnp2SJy4Grs37DvsTY4f8EbMTa9qqQj4uoLR9SKAf6EA7ClM%2B4Xt%2FLMOOeKQHZgchAcJ%2F4dd0zluSIyfDlmxsSO%2FWDAkC4ELt9BrI9N82gKRIsXA%2BskYgMpOtmH%2Fq3pFKw9ZmabEBIGciCood3fsS6M1xbPv5OusWhUV9Ua54DYYrbuuVwyt885%2B3dDEgkL4%2FKoMWttSCQpI31D9TMyV0hWPZWoht8puzBDG8amAFLS4Gqsbb6DHMueG0Gq%2Bjzk0DkK%2FrTUzk23tz0OGiP9tLBuufnG0Gz1nSJZGmZshK%2FXzicdKkK2%2BYIvCD%2FXaIr%2BTmPdTNSET%2BXeJ4cGwwfKHkWwaDXHvnL26LgfFxKCPt2cDzV3xHo5G6MvB3cmGLsmFGtSDBP9G3Cm%2B%2BmoVUwB9G9ymxeG16KrkGxc4KPP7GIuALTOdHzb%2BKpfc%2BfI9B3gwuRUI01Sx%2Fu76BmAEVEt74NNN3cL22yE2njjRNaC0SlpFjqQ012VUubIxxk6b7hxs%2Br4E3r69qTWz1H8wK2jsmIs6LTcBOJDl%2B3%2BR5B%2F1BtJPXeG78tlkaG7tYvwIsRldEuaq4kU%2FlwBBqc598t71zawjkYw8fiPzAY6pgG%2FtwhqJpOdau%2BQU8CiHcKrrXzTLAcBSmQgVd%2Fa%2FZ6z7qYlOSpMU6ReOyjVODPCZ2QyclEJhdxnjQAVH8GhZB5Tq41QGmkAgfYbgn%2BGdje8DYiVTEozA8bdz69q7uK8N4qkOjjNKzXRKwtMA8qHIG6zE69MqxqkKxkgOb1l2CCJ5WmPEkImXSvT1S1baFmu7qzmPDdEEOltaCKxkc%2BUujwlutdv0J7w&X-Amz-Signature=6c603f72aee1a3170170e5f62a0f42a7bd891bdfde6262f2576af7909f91e54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Button Description

    | **Button**           | **Options**                                         | **Description**          |
    | -------------------- | --------------------------------------------------- | ------------------------ |
    | Stepper Output       | <u>Step/Dir(One Pulse)</u>/<u>CW/CCW(Two Pulse)</u> | 設定 Pulse 輸出模式            |
    | Axis Direction       | Original Direction/Inverse Direction                | 設定馬達轉動的方向                |
    | Encoder Direction    | Original Direction/Inverse Direction                | 設定 Encoder 的方向           |
    | Servo On Polarity    | Active Low/Active High                              | 設定 Servo on 的極性          |
    | Encoder Ring         | Disable/Enable                                      | 設定 Encoder 表示方式          |
    | Step Per Revolution  |                                                     | 設定一圈對應的 Step 數           |
    | Encoder Divisor      |                                                     | 設定 Encoder 位置數值的比例       |
    | Forward Limit        | Disable/Enable                                      | 設定是否啟用 Forward 極限開關的限位保護 |
    | Reverse Limit        | Disable/Enable                                      | 設定是否啟用 Reverse 極限開關的限位保護 |
    | Forward Polarity     | Active Low/Active High                              | 設定 Forward 極限開關的極性       |
    | Home Polarity        | Active Low/Active High                              | 設定 Home 極限開關的極性          |
    | Reverse Polarity     | Active Low/Active High                              | 設定 Reverse 極限開關的極性       |
    | Index Polarity       | Active Low/Active High                              | 設定 Index 極限開關的極性         |
    | Limit Stop Type      | Decelerate/Halt                                     | 設定限位保護停止的方式              |
    | Alarm In             | Disable/Enable                                      | 設定是否啟用 Alarm In          |
    | Alarm In Polarity    | Active Low/Active High                              | 設定 Alarm In 的極性          |
    | In-position          | Disable/Enable                                      | 設定是否啟用 In-position       |
    | In-position Polarity | Active Low/Active High                              | 設定 In-position 的極性       |
    | Apply All            |                                                     | 把該軸的設定應用在全部軸上            |


---


## 🌐 Motion Move panel


---


### Simple Move


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/7cfde377-89e4-424e-a7a9-0565d62467d3/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYNGNGL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAvR59OuziLF7v5vSdFW9dSat8qMI16MFJtAuEY5ga1EAiAV2RKw8JpSP6qorrIigfeszXeSLaIe%2F7LQXjFW4OJjKyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjSG5jTbCUYjdvEXOKtwDY869dPVIl1ptw7fC0CmnuWM1N5bPib9zlQnp2SJy4Grs37DvsTY4f8EbMTa9qqQj4uoLR9SKAf6EA7ClM%2B4Xt%2FLMOOeKQHZgchAcJ%2F4dd0zluSIyfDlmxsSO%2FWDAkC4ELt9BrI9N82gKRIsXA%2BskYgMpOtmH%2Fq3pFKw9ZmabEBIGciCood3fsS6M1xbPv5OusWhUV9Ua54DYYrbuuVwyt885%2B3dDEgkL4%2FKoMWttSCQpI31D9TMyV0hWPZWoht8puzBDG8amAFLS4Gqsbb6DHMueG0Gq%2Bjzk0DkK%2FrTUzk23tz0OGiP9tLBuufnG0Gz1nSJZGmZshK%2FXzicdKkK2%2BYIvCD%2FXaIr%2BTmPdTNSET%2BXeJ4cGwwfKHkWwaDXHvnL26LgfFxKCPt2cDzV3xHo5G6MvB3cmGLsmFGtSDBP9G3Cm%2B%2BmoVUwB9G9ymxeG16KrkGxc4KPP7GIuALTOdHzb%2BKpfc%2BfI9B3gwuRUI01Sx%2Fu76BmAEVEt74NNN3cL22yE2njjRNaC0SlpFjqQ012VUubIxxk6b7hxs%2Br4E3r69qTWz1H8wK2jsmIs6LTcBOJDl%2B3%2BR5B%2F1BtJPXeG78tlkaG7tYvwIsRldEuaq4kU%2FlwBBqc598t71zawjkYw8fiPzAY6pgG%2FtwhqJpOdau%2BQU8CiHcKrrXzTLAcBSmQgVd%2Fa%2FZ6z7qYlOSpMU6ReOyjVODPCZ2QyclEJhdxnjQAVH8GhZB5Tq41QGmkAgfYbgn%2BGdje8DYiVTEozA8bdz69q7uK8N4qkOjjNKzXRKwtMA8qHIG6zE69MqxqkKxkgOb1l2CCJ5WmPEkImXSvT1S1baFmu7qzmPDdEEOltaCKxkc%2BUujwlutdv0J7w&X-Amz-Signature=4c622018365d47a4db2cb35913af76f9fe92bbbbbc2d5f93e22c06f57fdcddab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Button Description

    ---


    | **Button**                | **Options**                                  | **Description**   |
    | ------------------------- | -------------------------------------------- | ----------------- |
    | Operation Mode            | Absolute Position/Relative Position/Velocity | 馬達的移動模式           |
    | Target Position (step)    |                                              | 馬達的目標位置           |
    | Velocity (step/sec)       |                                              | 馬達的移動速度           |
    | Acceleration (step/sec^2) |                                              | 馬達的移動加速度          |
    | Deceleration (step/sec^2) |                                              | 馬達的移動減速度          |
    | Blend                     |                                              | 更新馬達的目標位置、速度、加減速度 |
    | Run                       |                                              | 馬達開始轉動            |
    | Stop                      |                                              | 馬達停止轉動            |


---


### Find Ref


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/df5acb7e-96a9-45ae-8892-c00fa23e2b73/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PYNGNGL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAvR59OuziLF7v5vSdFW9dSat8qMI16MFJtAuEY5ga1EAiAV2RKw8JpSP6qorrIigfeszXeSLaIe%2F7LQXjFW4OJjKyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMjSG5jTbCUYjdvEXOKtwDY869dPVIl1ptw7fC0CmnuWM1N5bPib9zlQnp2SJy4Grs37DvsTY4f8EbMTa9qqQj4uoLR9SKAf6EA7ClM%2B4Xt%2FLMOOeKQHZgchAcJ%2F4dd0zluSIyfDlmxsSO%2FWDAkC4ELt9BrI9N82gKRIsXA%2BskYgMpOtmH%2Fq3pFKw9ZmabEBIGciCood3fsS6M1xbPv5OusWhUV9Ua54DYYrbuuVwyt885%2B3dDEgkL4%2FKoMWttSCQpI31D9TMyV0hWPZWoht8puzBDG8amAFLS4Gqsbb6DHMueG0Gq%2Bjzk0DkK%2FrTUzk23tz0OGiP9tLBuufnG0Gz1nSJZGmZshK%2FXzicdKkK2%2BYIvCD%2FXaIr%2BTmPdTNSET%2BXeJ4cGwwfKHkWwaDXHvnL26LgfFxKCPt2cDzV3xHo5G6MvB3cmGLsmFGtSDBP9G3Cm%2B%2BmoVUwB9G9ymxeG16KrkGxc4KPP7GIuALTOdHzb%2BKpfc%2BfI9B3gwuRUI01Sx%2Fu76BmAEVEt74NNN3cL22yE2njjRNaC0SlpFjqQ012VUubIxxk6b7hxs%2Br4E3r69qTWz1H8wK2jsmIs6LTcBOJDl%2B3%2BR5B%2F1BtJPXeG78tlkaG7tYvwIsRldEuaq4kU%2FlwBBqc598t71zawjkYw8fiPzAY6pgG%2FtwhqJpOdau%2BQU8CiHcKrrXzTLAcBSmQgVd%2Fa%2FZ6z7qYlOSpMU6ReOyjVODPCZ2QyclEJhdxnjQAVH8GhZB5Tq41QGmkAgfYbgn%2BGdje8DYiVTEozA8bdz69q7uK8N4qkOjjNKzXRKwtMA8qHIG6zE69MqxqkKxkgOb1l2CCJ5WmPEkImXSvT1S1baFmu7qzmPDdEEOltaCKxkc%2BUujwlutdv0J7w&X-Amz-Signature=5051e945c04a5c30adce783aec39a18df6e56cc15e1210f46c6f6078730e6a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Button Description

    | **Button**                            | **Options**                                    | **Description** |
    | ------------------------------------- | ---------------------------------------------- | --------------- |
    | Find Reference Select                 | Find Home/Find Forward
    Find Reverse/Find Index | 設定尋找參考點目標       |
    | Search Direction                      | Forward/Reverse                                | 一開始尋找的方向        |
    | Search Velocity  (step/sec)           |                                                | 尋找的速度           |
    | Search Accel  (step/sec^2)            |                                                | 尋找時的加速度         |
    | Approach Velocity Percent($%$%)       |                                                | 接近參考點時的速度百分比    |
    | Offset Position (step)                |                                                | 尋找到參考點後，再次移動的位置 |
    | Reset Position After Ref found        | Disable/Enable                                 | 尋找到參考點後，是否要重製位置 |
    | Find                                  |                                                | 開始尋找參考點         |
    | Stop                                  |                                                | 停止尋找參考點         |
    | Idle(Gray)/Finding(Gray)/Found(Green) |                                                | 尋找參考點時的狀態       |

