
# Introduction


---


     WPC-EDrive-ST 是一個網路介面的單軸步進馬達整合型驅動器，使用者可透過 Step Drive Test Panel 設定驅動器與調整細部參數。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/6804a94a-2435-459b-b6d9-72d063249d43/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOITOT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDbUzpHAYXG94pVU5Zhrhz0L33Z7Bxjz1afHC9Oj90GGAiEA%2FC4Ihh3f1Eh2msEKuwy01m5eBlM05vR8pWqCJUs632Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzHIhRgooGgk%2FTLgSrcA%2Bwtov00KA35WoEusIWXjzrx1%2FQmHKCnSVC84HE587%2BeeS2W9DlqfChiyTsHLP6ir3DyIsbhgewi%2FUSmbyuXPT%2FLLgfN04Igk0SFr1Hrg8Rw0SRHHB0i%2BhqWLNkulFmfAXLIFULNtAJR9O3TSyoceIjXtNFVAR44YjN7%2FdRu0pAx4PjUglbPKMJzhH20dh5zzS4ZiYhT%2BMxAt7OudTBskmchKJo699SONxOWbfwhZqBWzxlud3MM%2BbaPgiCwBGYJU5nl0T784n6y3H%2B4bPXZb4T%2FROikrsNIZ4aN4%2FMg9enlmgoJl%2BhF0TbOsaA5ULS%2FTgBPFqWVVasIh4iJT%2BPLtzNNk2Z0ieWOqAV%2FjubmiFzaP8KywgJCfcdYPBrmBbwADOlYrP8Y6fItE1270yrFp4L75NYxFknwtV5%2BizQPJ1rnYH9yf6GGLZUNtxiYvdQz3XEbYcXhAeireMCseug9rcLsHRi1%2F82AsIGq5JQiw47e6aGLHI67HZLYjRNhsDSjdjB7Zuwh6PzaHY0s3Zbzn6WanhJcqviS9Fu1B4yviNHZLJLmI9GnY7h5NKITlSXy4pk7VRSYd09BjacqLwGcsfHTzuyTGHxh2WU1GixNqvo5IZqBrUWFOVCOYqIGMLX5j8wGOqUBgse5TVlMBOMX5173lTOXJbtS%2FIOqtPOOkg8pduCWzjgerIOIvgFteNQotQ6qR%2FXwEHCh6LqWFjYCCCb3EoYt%2FTBM65cFoIHfehsZRpRxrGem0pDhUTeuQh1an4Zi%2B2V4Oq3pbAC5UrWwOMirA3HHxuMRd47kuc9rHf2S2T52hU%2BkTgtL9aRN0ylX0ABwZjLlnIhf5Rlull%2Fbqppb9kxlqK8WwS9B&X-Amz-Signature=9cbedb7a57a17db8810b50b69568798aa7a073ca80fe89cb7dc312f34b76527f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# Driver setup


---


     Driver setup 可設定 EDrive-ST 的保持電流、運轉電流以及每步對應的解析度，同時也提供馬達寸動與顯示馬達狀態的功能，讓使用者可在簡潔的畫面內設定完成。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/b010212f-ccea-42f1-b82b-57920f757507/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOITOT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDbUzpHAYXG94pVU5Zhrhz0L33Z7Bxjz1afHC9Oj90GGAiEA%2FC4Ihh3f1Eh2msEKuwy01m5eBlM05vR8pWqCJUs632Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzHIhRgooGgk%2FTLgSrcA%2Bwtov00KA35WoEusIWXjzrx1%2FQmHKCnSVC84HE587%2BeeS2W9DlqfChiyTsHLP6ir3DyIsbhgewi%2FUSmbyuXPT%2FLLgfN04Igk0SFr1Hrg8Rw0SRHHB0i%2BhqWLNkulFmfAXLIFULNtAJR9O3TSyoceIjXtNFVAR44YjN7%2FdRu0pAx4PjUglbPKMJzhH20dh5zzS4ZiYhT%2BMxAt7OudTBskmchKJo699SONxOWbfwhZqBWzxlud3MM%2BbaPgiCwBGYJU5nl0T784n6y3H%2B4bPXZb4T%2FROikrsNIZ4aN4%2FMg9enlmgoJl%2BhF0TbOsaA5ULS%2FTgBPFqWVVasIh4iJT%2BPLtzNNk2Z0ieWOqAV%2FjubmiFzaP8KywgJCfcdYPBrmBbwADOlYrP8Y6fItE1270yrFp4L75NYxFknwtV5%2BizQPJ1rnYH9yf6GGLZUNtxiYvdQz3XEbYcXhAeireMCseug9rcLsHRi1%2F82AsIGq5JQiw47e6aGLHI67HZLYjRNhsDSjdjB7Zuwh6PzaHY0s3Zbzn6WanhJcqviS9Fu1B4yviNHZLJLmI9GnY7h5NKITlSXy4pk7VRSYd09BjacqLwGcsfHTzuyTGHxh2WU1GixNqvo5IZqBrUWFOVCOYqIGMLX5j8wGOqUBgse5TVlMBOMX5173lTOXJbtS%2FIOqtPOOkg8pduCWzjgerIOIvgFteNQotQ6qR%2FXwEHCh6LqWFjYCCCb3EoYt%2FTBM65cFoIHfehsZRpRxrGem0pDhUTeuQh1an4Zi%2B2V4Oq3pbAC5UrWwOMirA3HHxuMRd47kuc9rHf2S2T52hU%2BkTgtL9aRN0ylX0ABwZjLlnIhf5Rlull%2Fbqppb9kxlqK8WwS9B&X-Amz-Signature=1460eb472fb25b42fb5d61450ed9b5a9f24a307f789abbb64ccfe9bb3d41ee20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Current Configuration Description

    |                             | **Current Range 1A**     | **Current Range 2A**     | **Current Range 3A**     |
    | --------------------------- | ------------------------ | ------------------------ | ------------------------ |
    | **Hold/Run Current Factor** | **Hold/Run Current (A)** | **Hold/Run Current (A)** | **Hold/Run Current (A)** |
    | 0                           | 0.03125                  | 0.0625                   | 0.09375                  |
    | 1                           | 0.0625                   | 0.125                    | 0.1875                   |
    | **⋮**                       | **⋮**                    | **⋮**                    | **⋮**                    |
    | 20                          | 0.65625                  | 1.3125                   | 1.96875                  |
    | **⋮**                       | **⋮**                    | **⋮**                    | **⋮**                    |
    | 31                          | 1                        | 2                        | 3                        |

- Resolution Configuration Description

    | **Step/Revolution** |
    | ------------------- |
    | 200                 |
    | 400                 |
    | **⋮**               |
    | 12800               |
    | **⋮**               |
    | 51200               |

- Motion Description

    | **Button**                | **Description** |
    | ------------------------- | --------------- |
    | Servo on                  | 馬達激磁            |
    | ⬅                         | 反轉              |
    | ➡️                        | 正轉              |
    | Distance [Step]           | 移動距離            |
    | Velocity [Step/sec]       | 移動轉速            |
    | Acceleration [Step/sec^2] | 移動加速度           |

- Running Status Description

    | **Button**    | **Description** |
    | ------------- | --------------- |
    | Hit Rev Limit | 碰觸到正向極限開關       |
    | Hit Fw Limit  | 碰觸到反向極限開關       |
    | Pos Reached   | 到達位置命令          |
    | Vel Reached   | 到達速度命令          |
    | Stopped       | 停止狀態            |
    | Over Torque   | 扭力過大            |
    | Driver Error  | 驅動器異常           |
    | Cfg Reseted   | 設定已被重置          |


# Anti-vibration tuning


---


     在驅動重負載等情境下，使用者會需要使用較大的電流驅動馬達，但過大的電流值可能會在低轉速下造成震動。因此 EDrive-ST 提供使用者抑制震動的調整流程。


     步驟如下

1. Set start and end position。設定來回轉動的位置。
2. Tuning anti-vibration parameter。設定抑制震動的轉速範圍。

## Set start and end position


---


     此頁面為設定馬達來回轉動的範圍。操作步驟如下圖的文字方塊所示。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/fa7f1468-9857-4ceb-8067-94f30a64bb63/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOITOT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDbUzpHAYXG94pVU5Zhrhz0L33Z7Bxjz1afHC9Oj90GGAiEA%2FC4Ihh3f1Eh2msEKuwy01m5eBlM05vR8pWqCJUs632Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzHIhRgooGgk%2FTLgSrcA%2Bwtov00KA35WoEusIWXjzrx1%2FQmHKCnSVC84HE587%2BeeS2W9DlqfChiyTsHLP6ir3DyIsbhgewi%2FUSmbyuXPT%2FLLgfN04Igk0SFr1Hrg8Rw0SRHHB0i%2BhqWLNkulFmfAXLIFULNtAJR9O3TSyoceIjXtNFVAR44YjN7%2FdRu0pAx4PjUglbPKMJzhH20dh5zzS4ZiYhT%2BMxAt7OudTBskmchKJo699SONxOWbfwhZqBWzxlud3MM%2BbaPgiCwBGYJU5nl0T784n6y3H%2B4bPXZb4T%2FROikrsNIZ4aN4%2FMg9enlmgoJl%2BhF0TbOsaA5ULS%2FTgBPFqWVVasIh4iJT%2BPLtzNNk2Z0ieWOqAV%2FjubmiFzaP8KywgJCfcdYPBrmBbwADOlYrP8Y6fItE1270yrFp4L75NYxFknwtV5%2BizQPJ1rnYH9yf6GGLZUNtxiYvdQz3XEbYcXhAeireMCseug9rcLsHRi1%2F82AsIGq5JQiw47e6aGLHI67HZLYjRNhsDSjdjB7Zuwh6PzaHY0s3Zbzn6WanhJcqviS9Fu1B4yviNHZLJLmI9GnY7h5NKITlSXy4pk7VRSYd09BjacqLwGcsfHTzuyTGHxh2WU1GixNqvo5IZqBrUWFOVCOYqIGMLX5j8wGOqUBgse5TVlMBOMX5173lTOXJbtS%2FIOqtPOOkg8pduCWzjgerIOIvgFteNQotQ6qR%2FXwEHCh6LqWFjYCCCb3EoYt%2FTBM65cFoIHfehsZRpRxrGem0pDhUTeuQh1an4Zi%2B2V4Oq3pbAC5UrWwOMirA3HHxuMRd47kuc9rHf2S2T52hU%2BkTgtL9aRN0ylX0ABwZjLlnIhf5Rlull%2Fbqppb9kxlqK8WwS9B&X-Amz-Signature=fdda9893d4c9c5226bdba083e1b1964d24e5e431348ea750f75daa94db83db1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 操作步驟如下
    1. 激磁馬達
    2. 正轉馬達直到到達期望的結束位置，並按下 Set End Position
    3. 反轉馬達直到到達期望的開始位置，並按下 Set Start Position
- Button Description

    | **Button**                | **Description** |
    | ------------------------- | --------------- |
    | Servo on                  | 馬達激磁            |
    | ⬅                         | 反轉              |
    | ➡️                        | 正轉              |
    | Set Start Position        | 設定開始位置          |
    | Set End Position          | 設定結束位置          |
    | Distance [Step]           | 移動距離            |
    | Velocity [Step/sec]       | 移動轉速            |
    | Acceleration [Step/sec^2] | 移動加速度           |


## Tuning anti-vibration parameter


---


     此頁面為設定抑制震動的轉速範圍。操作步驟如下圖的文字方塊所示。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/ab585990-d8b2-4b9b-92ea-7ab11ed9df06/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOITOT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDbUzpHAYXG94pVU5Zhrhz0L33Z7Bxjz1afHC9Oj90GGAiEA%2FC4Ihh3f1Eh2msEKuwy01m5eBlM05vR8pWqCJUs632Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzHIhRgooGgk%2FTLgSrcA%2Bwtov00KA35WoEusIWXjzrx1%2FQmHKCnSVC84HE587%2BeeS2W9DlqfChiyTsHLP6ir3DyIsbhgewi%2FUSmbyuXPT%2FLLgfN04Igk0SFr1Hrg8Rw0SRHHB0i%2BhqWLNkulFmfAXLIFULNtAJR9O3TSyoceIjXtNFVAR44YjN7%2FdRu0pAx4PjUglbPKMJzhH20dh5zzS4ZiYhT%2BMxAt7OudTBskmchKJo699SONxOWbfwhZqBWzxlud3MM%2BbaPgiCwBGYJU5nl0T784n6y3H%2B4bPXZb4T%2FROikrsNIZ4aN4%2FMg9enlmgoJl%2BhF0TbOsaA5ULS%2FTgBPFqWVVasIh4iJT%2BPLtzNNk2Z0ieWOqAV%2FjubmiFzaP8KywgJCfcdYPBrmBbwADOlYrP8Y6fItE1270yrFp4L75NYxFknwtV5%2BizQPJ1rnYH9yf6GGLZUNtxiYvdQz3XEbYcXhAeireMCseug9rcLsHRi1%2F82AsIGq5JQiw47e6aGLHI67HZLYjRNhsDSjdjB7Zuwh6PzaHY0s3Zbzn6WanhJcqviS9Fu1B4yviNHZLJLmI9GnY7h5NKITlSXy4pk7VRSYd09BjacqLwGcsfHTzuyTGHxh2WU1GixNqvo5IZqBrUWFOVCOYqIGMLX5j8wGOqUBgse5TVlMBOMX5173lTOXJbtS%2FIOqtPOOkg8pduCWzjgerIOIvgFteNQotQ6qR%2FXwEHCh6LqWFjYCCCb3EoYt%2FTBM65cFoIHfehsZRpRxrGem0pDhUTeuQh1an4Zi%2B2V4Oq3pbAC5UrWwOMirA3HHxuMRd47kuc9rHf2S2T52hU%2BkTgtL9aRN0ylX0ABwZjLlnIhf5Rlull%2Fbqppb9kxlqK8WwS9B&X-Amz-Signature=9c009fc83966d4d8c4e8eda66ff01d14f97fe49983e75daa21421f1c124f8755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- 操作步驟如下
1. 按下 Servo on 激磁馬達
2. 按下 Enable 開啟低轉速震動抑制功能
3. 按下 Round Trip，使馬達不斷的來回移動
4. 提高轉速直到馬達開始震動
5. 略為減少轉速直到馬達停止震動
6. 按下 Set Threshold 設定抑制震動的範圍
- Button Description

    | **Button**                | **Description** |
    | ------------------------- | --------------- |
    | Servo on                  | 馬達激磁            |
    | Round Trip                | 馬達開始來回移動        |
    | Velocity [Step/sec]       | 移動轉速            |
    | Acceleration [Step/sec^2] | 移動加速度           |
    | Enable                    | 啟動低轉速抑制功能       |
    | Set Threshold             | 設定低轉速抑制範圍       |
    | Reset Threshold           | 重置低轉速抑制範圍       |


# File configuration


---


EDrive-ST 提供使用者匯出以及匯入設定檔的功能。令使用者可以調整完驅動器後，可以將相同的設定檔佈署到其他驅動器。另外也可作為備份功能使用。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/fc52b15f-49f8-4faa-a484-8963baa63dab/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIOITOT%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDbUzpHAYXG94pVU5Zhrhz0L33Z7Bxjz1afHC9Oj90GGAiEA%2FC4Ihh3f1Eh2msEKuwy01m5eBlM05vR8pWqCJUs632Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJzHIhRgooGgk%2FTLgSrcA%2Bwtov00KA35WoEusIWXjzrx1%2FQmHKCnSVC84HE587%2BeeS2W9DlqfChiyTsHLP6ir3DyIsbhgewi%2FUSmbyuXPT%2FLLgfN04Igk0SFr1Hrg8Rw0SRHHB0i%2BhqWLNkulFmfAXLIFULNtAJR9O3TSyoceIjXtNFVAR44YjN7%2FdRu0pAx4PjUglbPKMJzhH20dh5zzS4ZiYhT%2BMxAt7OudTBskmchKJo699SONxOWbfwhZqBWzxlud3MM%2BbaPgiCwBGYJU5nl0T784n6y3H%2B4bPXZb4T%2FROikrsNIZ4aN4%2FMg9enlmgoJl%2BhF0TbOsaA5ULS%2FTgBPFqWVVasIh4iJT%2BPLtzNNk2Z0ieWOqAV%2FjubmiFzaP8KywgJCfcdYPBrmBbwADOlYrP8Y6fItE1270yrFp4L75NYxFknwtV5%2BizQPJ1rnYH9yf6GGLZUNtxiYvdQz3XEbYcXhAeireMCseug9rcLsHRi1%2F82AsIGq5JQiw47e6aGLHI67HZLYjRNhsDSjdjB7Zuwh6PzaHY0s3Zbzn6WanhJcqviS9Fu1B4yviNHZLJLmI9GnY7h5NKITlSXy4pk7VRSYd09BjacqLwGcsfHTzuyTGHxh2WU1GixNqvo5IZqBrUWFOVCOYqIGMLX5j8wGOqUBgse5TVlMBOMX5173lTOXJbtS%2FIOqtPOOkg8pduCWzjgerIOIvgFteNQotQ6qR%2FXwEHCh6LqWFjYCCCb3EoYt%2FTBM65cFoIHfehsZRpRxrGem0pDhUTeuQh1an4Zi%2B2V4Oq3pbAC5UrWwOMirA3HHxuMRd47kuc9rHf2S2T52hU%2BkTgtL9aRN0ylX0ABwZjLlnIhf5Rlull%2Fbqppb9kxlqK8WwS9B&X-Amz-Signature=8afc384b03203e98cb8a4bc756aca59cbe0c5dd16cdb3681da46c1639b3705d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

