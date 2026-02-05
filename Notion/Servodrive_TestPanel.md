
# Introduction


---


      WPC-EDrive-SRV 是一款網路介面的單軸伺服馬達整合型驅動器。使用者可透過 Servo Drive Test Panel 設定驅動器與調整細部參數。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1c685e51-3a8c-4c7b-bba9-a0b989de53d1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=65879a5481ae78b53b9a96d18a2aa185be62b6386770e015dc8d446e782b1930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


# System configuration


---


驅動器系統設定。包含匯入／匯出／重置驅動器設定，以及更新驅動器韌體。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/fb9693db-92e6-4388-995e-62772d06a6c0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=7d25e05e33f92ee9ce5ba2799f0a7b1f4b014c9723df6b5d6fb625b801bd5341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

- Button Description

    ---


    | **Button**      | **Description** |
    | --------------- | --------------- |
    | Import file     | 匯入驅動器設定檔        |
    | Export file     | 匯出驅動器設定檔        |
    | Restore default | 將驅動器回復成預設值      |
    | Update firmware | 更新驅動器韌體         |


> 💡 WDM 上更新的韌體為網路介面，若要更新驅動器的韌體，則需要在此處更新。


# Control tuning


---


初次使用驅動器、更換不同型號的馬達或是移植到不同的機構時，需要調教驅動器以提供最佳的控制表現。馬達調機的步驟主要分為三個部分，第一個部分是馬達單體的設定，Step1~3，包含使用的馬達型號以及解除馬達的煞車。第二個部分是尋找馬達的特性，Step4~6，包含自動尋找馬達的相電組、相電感、轉動慣量等等，以免除翻閱馬達手冊上的不便。最後一個部分是設定馬達頻寬，Step7，以設定頻寬的方式，調整馬達的出力與抵抗外力的程度。


### Step1 - Fill motor specification


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/39314267-f3e9-4890-94cc-5bfb6ed17ace/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=49d3f4a692512485b779d088e2e9ebb9fa87aa7e5cca777a96db03615152d8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    第一步要設定馬達的型號或規格。這裡可點選 Model No. 選擇馬達型號，const. torque、input 3phase current、rated freq.、rated rev. 將會自動填入對應的馬達型號。若選單內沒有對應的馬達型號，請依照馬達銘牌的參數設定 const. torque、input 3phase current、rated freq.、rated rev.。


> 💡 Panasonic 的馬達銘牌以貼紙的形式標示在馬達側面。


### Step2 - Configure electric parameter


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/6e61bf33-e3b1-4c87-81af-8dd97be299c9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=5483df8e458ff74ed79695ff9eae994f3ca8bf22ddaf1b432f7d268e162e001c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    此步驟可細部設定馬達的電機參數。若在前一步驟已設定馬達型號或馬達參數，請按 Next 繼續下一步驟。


### Step3 - Release brake


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/97247292-97c5-416f-abae-4ed89d594aa6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=8634bb98452e1960f08fa43970afa4b073732cd3bd1b6f2fce2ae2a297af9a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    若馬達附帶煞車機構，請在此步驟解除煞車。


> 💡 控制煞車的腳位請參照 [WPC EDriveSRV User Guide](/cff94060d0124705850fdc9d5d1523ef)。


### Step4 - Perform System Identification (Electrical)


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/18f2916d-df88-4ab6-9169-4e8756afdba2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=958f25b6687b714d3b3f0a0e83c10962abf4920426ca5dc9ed6aa02caa98e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    此步驟將透過系統鑑別的方式自動尋找馬達的相電阻與相電感。按下 Run 後馬達會微微轉動到定點，經過 2 秒後馬達會發出嗶的長音。成功的話，畫面中間會顯示打勾的符號。


    若馬達沒有發出嗶的長音，請提高 Max voltage 或略微降低 Target current，但 Target current 建議至少大於 0.5A。


> ⚠️ 若 Target current 設定值超過馬達的最大可容許電流，可能會損壞馬達。


### Step5 - System Identification (Mechanical)


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/3fa25bfc-c7d5-4a3f-9152-799bdc674792/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=56bfffefd3e3207518154a122840d4cd3c84053c5de17611f20616f78f185452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    此頁面為系統鑑別說明頁，可直接跳過。


### Step6 - Perform System Identification (Mechanical)


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1f1268bc-aea0-4e14-8e9f-b4fd5e0fd67c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=87ff6ba2e904865f7beb8fa6da17a203fd5ea4f27924e654c78cb96d3e2a6054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    此頁面的目標是鑑別機械上的參數，包含轉動慣量、黏滯係數等等，以利後面的控制增益調整。


操作的步驟如下

1. 按下 Servo on 啟動馬達
2. 設定剛好可使馬達正反轉的扭力值
3. 正轉馬達一段距離，按下 Set end position，並且與機構邊界保持足夠遠的距離(⚠️)
4. 反轉馬達一段距離，按下 Set start position，並且與機構邊界保持足夠遠的距離(⚠️)
5. 按下 Start identification
6. 馬達會以設定的扭力值往返 Start and end position，並且調整扭力值
7. 馬達會往返三次，並且輸出擬合的軌跡

> ⚠️ 步驟六會以扭力控制的方式往返 Start and end position，因此馬達移動的位置”必定”會超過設定值，故設定時請與機構邊界保持足夠遠的距離。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/83383728-eb31-416a-8363-4cf9928bae77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=05b29d54d8c1b67eed4cfd17c706dcc6b47971f3959d5ce29b59d8758f01df05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    完成鑑別後會如上圖所示。右上圖表的橘色虛線為擬合線，若此線明顯往上或往下漂移，並且與實際移動位置相距過遠，代表機構上有配重不平衡的問題。左側欄則標示擬合的程度，若 R square 大於 80% 則代表擬合成功。


> 💡 R square 的計算與右上圖表的擬合線無直接相關，只要 R square 大於 80% 即可按 Next 繼續下一步驟。


### Step7 - Configure Controller Bandwidth  


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/1af80d4d-4db2-4d30-aded-4ba325806f7e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=9c8c1c594ab3b7079bfb66b9bde5702dc47f3d2fccffc6ffc82ef85ab10f4f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    此步驟為設定馬達的頻寬，意旨馬達是否可精準的移動到指定位置以及抵抗外力的程度，頻寬越高馬達的出力越大、可更精準的移動到指定的位置、抵抗外力的程度越強，但過大的頻寬有可能造成馬達與機構的共振。

- Configuration Description

    | **Button**   | **Description** |
    | ------------ | --------------- |
    | Bandwidth    | 控制頻寬            |
    | Distance     | 寸動距離            |
    | Velocity     | 軌跡規劃的最大速度       |
    | Acceleration | 軌跡規劃的加速度        |
    | Deceleration | 軌跡規劃的減速度        |


    完成後按 Next 會詢問是否完成設定，若點選 Yes，則會將本次的設定值存入驅動器內，並且將設定檔儲存到 (WDM路徑)\data\ServoTune\data\Configs\(設定檔檔名).ini。


# Friction compensation


---


      若使用者有短距離來回且高精度的移動需求，可開啟 Friction compensation 以提供最佳的控制表現。在短距離來回移動時，容易受到靜摩擦力的影響導致 stick slip 的現象發生。如果觀察伺服馬達的軌跡，會在轉折處看到明顯的停滯現象。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/3878a369-5e66-42ae-8fd4-63ba14257001/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=30ea5abc4fca704e0d9e8bf06b2150ef2776b6d74fdec29e9878e3de5c7814f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


       stick slip 同樣也會影響馬達在短距離移動下的收斂速度與最終的收斂範圍。為了處理短距離移動的精度與收斂速度，EDrive-SRV 研發了 Friction compensation 以解決此問題。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/d18690f2-68e1-42cd-b242-4ed78d1cb76e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNCJWUL%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEmfyCUkwpSwkuR5LxjEWTtQvCKqBX%2BZXUE%2F6T5GbQdFAiAy7c3%2B%2BGjizlXbQZLYCzNHa8qhkfwwXyVNxYCxSqJXeyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMYLEtK%2FcImYw8SPBtKtwDGekt22WBFTVtqhUc%2FdoNURoR%2FlbRO8gDyZ5O7JiV3FvBTxqYGXQN6Q80PbGvdIXF9%2FVAEy8jo3gtX1zec8VUZxgwpGPbKAmXAcebILfL5fhVhzBAjBEkkw10%2F%2FaOikYKEfm8qTVLOz0px2N5ala9ARHKzrYY1gsMFS92j5e4bpM9xCR1e5PtFQY3fbKDbBRnIFQCx2BIRJWzaThQWiL%2FHnoXpMHPx5JM5Psp5Kf1s%2BvsoStAb9PCyf%2F4es00%2F4EiR1RyosA7EEFAJHBt2BrednN9S%2FPi6BsgTekEc4OC1%2F2KnkHKL1wfWX1E4%2FUCqks0tLuOBlb10tZXp0jXELQap5riq%2FmZ1O%2BcOFWVQTCTqJQk%2Bz8eo1NgLm3n4wnilRvdWd6YnMDTFVEW799tlHTR%2BDQzqkozOixT10%2FyVGC8HB2hEtScAG2gDTWdD7U4QdkFJxB0BkZesJkjYYNzIQ3AUjh5bRDl0tnqijeFQSNLoqed%2Fe3kMuJq2OlZp1lad05HBYMquCC65IwN3a5xJuIZBRmKIHRDbUFtfNlMQK7%2B8TgNE6wdnIOtrJWMZCNs8oQB1ttnLlLsS1J2HfjrBtOCNF20rdclvtyT5%2Bl90zCXMoTD4iBrpz0c2RNltMkwzPiPzAY6pgH8dB5lsOWoTzBLMJolyvrnRuzNzq3ggbmeqtxJcG%2Bd99NLt7shfDuDSUgTUv45qiPQuK6%2BphnP2S28hsiP9byiIJXXkS2qOiloebr0Gjvdsx17v8ID3mbAHuypZz2oI2LWXgZvYiBJc9WzX82oFb1npes9dSX1NT5jTJsJbvhdx2bSmmefnmHeDuCu7K4LPv%2FTiz%2FOJwpPei8XeqlBDdlVqJS17zWS&X-Amz-Signature=f52a7a21ca527449dbb5277e6e244e51782afe3c07a0bc20e4c3bcbb3dc43138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


設定 Friction compensation 的步驟如下

1. 按下 Servo on 啟動馬達控制
2. 設定 Round trip 的 Amplitude 與 Frequency
3. 設定 Precision control 的 Pos bound （通常為 Round trip 的 Amplitude 的十分之一）
4. 按下 Round trip
5. 啟動 Precision control
6. 觀察靜摩擦力造成的影響是否被消除，若沒有被消除則將 Pos bound 再略微下調

> 💡 若 Pos bound 的值調低到 Round trip 的 Amplitude 的二十分之一以下，但還無法消除靜摩擦力造成的影響時，請適當調高馬達控制的頻寬。


> 💡 Precision control 的 switching gain 通常為 0.95，數值越大，抑制靜摩擦力的力量也會越大，但過大的數值可能會造成振動。

- Button Description - Round trip config

    ---


    | **Button**      | **Options**                         | **Description** |
    | --------------- | ----------------------------------- | --------------- |
    | Amplitude [Rev] |                                     | 來回移動的振幅         |
    | Frequency [Hz]  |                                     | 來回移動的頻率         |
    | Signal type     | Sine / Triangle / Square / Sawtooth | 來回移動的軌跡模式       |

- Button Description - center

    ---


    | **Button**        | **Description** |
    | ----------------- | --------------- |
    | Bandwidth [rad/s] | 馬達控制的頻寬         |
    | Servo on          | 馬達激磁            |
    | Distance [Turn]   | 寸動距離            |
    | ⬅                 | 反轉              |
    | ➡️                | 正轉              |
    | Round trip        | 來回移動            |

- Button Description - Precision control config

    ---


    | **Button**             | **Description**                  |
    | ---------------------- | -------------------------------- |
    | Enable                 | 啟動 friction compensation         |
    | Pos bound [Rev]        | 啟動 friction compensation 的位置誤差範圍 |
    | switching gain (0 ~ 1) | 切換增益                             |


# Adaptive notch filter


---


若馬達與機構有共振的現象，可開啟 Adaptive notch filter 抑制共振的問題。


馬達在驅動部分機構時，可能出現振動的現象並且伴隨著特定頻率的聲音。此現象為馬達與機構的共振。通常這種機構在學理上具有彈簧成分的特性，例如使用皮帶驅動或是機構掛有懸臂等，都會在結構上添加共振頻率。為解決此現象，EDrive-SRV 提供 Adaptive notch filter 抑制共振。也就是馬達在驅動機構時，會經由一種特殊的濾波器把特定頻率的成分去除，如此一來就不會激發結構上的共振現象。


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/3d6765e5-848a-4935-b3e2-534976ad2f1c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSG6U7S%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDJs4INkrj3CX8AGeiFJXr5iofP6Li9ELrqG%2FKXpxPFfQIhAMCf5KFCU%2BaCDAmI17RRVC8IfnXa%2BMMkb4g1gxBKr2k9Kv8DCCMQABoMNjM3NDIzMTgzODA1Igz9%2Bep5woJhFCoPmpkq3ANXsTNc%2F%2FDVyKefdy2QSp8ZpgAeGA4L0LplG1RkSUV7IHdaEH%2B1NoseZczrxuzVzYQtFb5h6s7F7VZW27t6ApprbUYHmkB3gaBUuxjJ8rbpXHPyOH4gLD5xlRjl2XcTuDVttXzYepe%2FBt5x9KArkMnm%2B4JpcvWdd0bLRBormtf5Uk4U3aay4tNIb1mAZ58gKYHu3OBq4TlaEKBc6gNh%2BttyAdyBrPgVNy9a2Uo81SIzBtlL%2FGJPPX0ia5kxYT1WH0NBYv%2BN8WsX4G%2BIh82MFyxLj%2BarPsfoRWe0h443Hp2yHD72LDvvPSIKlFR3LnUekpmvK0w8LQC5lkIczC0tP%2BPtLEgKf0GXOJcNIfvh89P3lRWFiBkakIUREjTy8fVXLKayuTCWt9H7TMUlw6xYv0D3YhV5h54OBZHG3zTt49dfAEVKAk0Xu3gSjAk%2FDzcPrpRTqwFI0eDpC5eTnPZF7rswqTto6HoD5hUS4AbNMXcOYP6hibIbc9UPsr%2FiRgy%2BC6F7graHCB9ASc9k4NLjIfpz6zChNSiRt%2FaMm%2BIQR696tILuycSp3Dd0ceFPk%2BMSnQE5M%2BAOdxginGNtCdBWmbNaefws2b85C6X21uglBQEhwVjmYEJDtSrG01fzfTDG%2BI%2FMBjqkAaYX284ub87NAmS69wu%2BJX63sLXaYQzfC%2Bk%2BAC9rH74myXJ3khkFMBqn931lXaS5QuktXzZvTfZbN3ktqcWnyUWsrklXCefzA825y6w0UPuemtgk4tMohT%2BBnrW2igA6EkSCqDxoQ46VZhyqE9kycHWWqfLmqPVYQK188vxth16V1D8w5%2BPekyk%2FmXFBC1%2F%2BJW5KWhcX2UsIdmRrOpJtoOIfgv0Z&X-Amz-Signature=50c1b6ef27595f9e03c9c1e4721e4a4dbb0f149ade6b054963844e91dc482925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


設定 Adaptive notch filter 的步驟如下

1. 按下 Servo on 激磁馬達
2. 按下 Round trip 使馬達來回移動，此時應該會聽到馬達與機構共振的聲音
3. 按下 Enable ANF
4. 按下 Frequency estimator，此時會看到右下圖表的估測頻率往某共振頻率收斂
5. 按下 Suppress vibration，此時會明顯聽到共振的聲音變低沉或消失
6. 待共振的聲音變低沉或消失後，按下 Frequency estimator 暫停估測共振頻率
7. 若馬達與機構沒有發生共振，即可按下右上角的叉叉，保存設定後並退出程式。若共振的聲音變低沉，但沒有消失，則重複步驟 4~7。

> 💡 馬達與機構的共振頻率通常會有 1~3 個，因此抑制一個共振頻率後，有可能還需要抑制第二個共振頻率、甚至需要到第三個。


> 💡 步驟 4 估測到的頻率與步驟 5 估測到的頻率可能會不同，因為整個驅動系統並非只有機構本身，而是還包含馬達系統，因此抑制共振的演算法開啟時，可能會導致整個系統的共振頻率往下移動。

- Button Description - trajectory config

    | **Button**             | **Options**                         | **Description** |
    | ---------------------- | ----------------------------------- | --------------- |
    | Velocity [RPS]         |                                     | 來回移動的振幅         |
    | Acceleration [RPS/sec] |                                     | 來回移動的頻率         |
    | Signal type            | Sine / Triangle / Square / Sawtooth | 來回移動的軌跡模式       |

- Button Description - center

    | **Button**        | **Description** |
    | ----------------- | --------------- |
    | Bandwidth [rad/s] | 馬達控制的頻寬         |
    | Servo on          | 馬達激磁            |
    | Distance [Turn]   | 寸動距離            |
    | ⬅                 | 反轉              |
    | ➡️                | 正轉              |
    | Round trip        | 來回移動            |

- Button Description - Adaptive notch filter config

    | **Button**             | **Description**          |
    | ---------------------- | ------------------------ |
    | Enable                 | 啟動 Adaptive notch filter |
    | Frequency estimator    | 啟動 Frequency estimator   |
    | Suppress vibration     | 啟動抑制共振                   |
    | Min freq [Hz]          | 最低可估測頻率                  |
    | Damping ratio [0~1]    | Notch filter濾除的頻率寬度      |
    | Adaptive step size     | 估測共振頻率的速度                |
    | Set frequency          | 手動設定 Notch filter 的頻率    |
    | Notch filter freq [Hz] | Notch filter 的頻率         |


# Misc configuration


---


此處可設定細部參數，如過電流保護與 inposition。


## Configure current protection


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/172dc68a-1da8-4a11-beff-1cb8e841e2a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSG6U7S%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDJs4INkrj3CX8AGeiFJXr5iofP6Li9ELrqG%2FKXpxPFfQIhAMCf5KFCU%2BaCDAmI17RRVC8IfnXa%2BMMkb4g1gxBKr2k9Kv8DCCMQABoMNjM3NDIzMTgzODA1Igz9%2Bep5woJhFCoPmpkq3ANXsTNc%2F%2FDVyKefdy2QSp8ZpgAeGA4L0LplG1RkSUV7IHdaEH%2B1NoseZczrxuzVzYQtFb5h6s7F7VZW27t6ApprbUYHmkB3gaBUuxjJ8rbpXHPyOH4gLD5xlRjl2XcTuDVttXzYepe%2FBt5x9KArkMnm%2B4JpcvWdd0bLRBormtf5Uk4U3aay4tNIb1mAZ58gKYHu3OBq4TlaEKBc6gNh%2BttyAdyBrPgVNy9a2Uo81SIzBtlL%2FGJPPX0ia5kxYT1WH0NBYv%2BN8WsX4G%2BIh82MFyxLj%2BarPsfoRWe0h443Hp2yHD72LDvvPSIKlFR3LnUekpmvK0w8LQC5lkIczC0tP%2BPtLEgKf0GXOJcNIfvh89P3lRWFiBkakIUREjTy8fVXLKayuTCWt9H7TMUlw6xYv0D3YhV5h54OBZHG3zTt49dfAEVKAk0Xu3gSjAk%2FDzcPrpRTqwFI0eDpC5eTnPZF7rswqTto6HoD5hUS4AbNMXcOYP6hibIbc9UPsr%2FiRgy%2BC6F7graHCB9ASc9k4NLjIfpz6zChNSiRt%2FaMm%2BIQR696tILuycSp3Dd0ceFPk%2BMSnQE5M%2BAOdxginGNtCdBWmbNaefws2b85C6X21uglBQEhwVjmYEJDtSrG01fzfTDG%2BI%2FMBjqkAaYX284ub87NAmS69wu%2BJX63sLXaYQzfC%2Bk%2BAC9rH74myXJ3khkFMBqn931lXaS5QuktXzZvTfZbN3ktqcWnyUWsrklXCefzA825y6w0UPuemtgk4tMohT%2BBnrW2igA6EkSCqDxoQ46VZhyqE9kycHWWqfLmqPVYQK188vxth16V1D8w5%2BPekyk%2FmXFBC1%2F%2BJW5KWhcX2UsIdmRrOpJtoOIfgv0Z&X-Amz-Signature=a6c0ce15c61acbff92c5dbbe1e2850246a03e7eb894735350a250f540ff0d168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


      此頁面可設定電流保護，如電流峰值保護、電流均值保護。電流保護通常用來保護馬達撞擊機構或卡住時避免驅動器輸出過大的電流燒壞馬達。

- Button Description

    | **Button**                | **Description** |
    | ------------------------- | --------------- |
    | Enable current protection | 啟動電流保護          |
    | Peak current limit [A]    | 電流峰值閾值          |
    | Saturation current [A]    | 最大驅動電流          |
    | Average current limit [A] | 電流均值閾值          |


## Configure inposition


---


![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/7aaca47a-b987-4e1e-855f-f3f69dd5aee3/9cda30d4-1155-45d7-8d14-a7599edd15e6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXSG6U7S%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T022245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDJs4INkrj3CX8AGeiFJXr5iofP6Li9ELrqG%2FKXpxPFfQIhAMCf5KFCU%2BaCDAmI17RRVC8IfnXa%2BMMkb4g1gxBKr2k9Kv8DCCMQABoMNjM3NDIzMTgzODA1Igz9%2Bep5woJhFCoPmpkq3ANXsTNc%2F%2FDVyKefdy2QSp8ZpgAeGA4L0LplG1RkSUV7IHdaEH%2B1NoseZczrxuzVzYQtFb5h6s7F7VZW27t6ApprbUYHmkB3gaBUuxjJ8rbpXHPyOH4gLD5xlRjl2XcTuDVttXzYepe%2FBt5x9KArkMnm%2B4JpcvWdd0bLRBormtf5Uk4U3aay4tNIb1mAZ58gKYHu3OBq4TlaEKBc6gNh%2BttyAdyBrPgVNy9a2Uo81SIzBtlL%2FGJPPX0ia5kxYT1WH0NBYv%2BN8WsX4G%2BIh82MFyxLj%2BarPsfoRWe0h443Hp2yHD72LDvvPSIKlFR3LnUekpmvK0w8LQC5lkIczC0tP%2BPtLEgKf0GXOJcNIfvh89P3lRWFiBkakIUREjTy8fVXLKayuTCWt9H7TMUlw6xYv0D3YhV5h54OBZHG3zTt49dfAEVKAk0Xu3gSjAk%2FDzcPrpRTqwFI0eDpC5eTnPZF7rswqTto6HoD5hUS4AbNMXcOYP6hibIbc9UPsr%2FiRgy%2BC6F7graHCB9ASc9k4NLjIfpz6zChNSiRt%2FaMm%2BIQR696tILuycSp3Dd0ceFPk%2BMSnQE5M%2BAOdxginGNtCdBWmbNaefws2b85C6X21uglBQEhwVjmYEJDtSrG01fzfTDG%2BI%2FMBjqkAaYX284ub87NAmS69wu%2BJX63sLXaYQzfC%2Bk%2BAC9rH74myXJ3khkFMBqn931lXaS5QuktXzZvTfZbN3ktqcWnyUWsrklXCefzA825y6w0UPuemtgk4tMohT%2BBnrW2igA6EkSCqDxoQ46VZhyqE9kycHWWqfLmqPVYQK188vxth16V1D8w5%2BPekyk%2FmXFBC1%2F%2BJW5KWhcX2UsIdmRrOpJtoOIfgv0Z&X-Amz-Signature=77b7a36561099cd5fee106ef75ef59ba0ec327505cb899003bc21d082fa61559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


      此頁面可設定 Inposition，也就是驅動器收到指定位置（set point）時，判斷馬達是否到位。指處的判別是馬達的位置誤差在誤差範圍內，並保持一段時間，就視為馬達到位。

- Button Description

    | **Button**          | **Description** |
    | ------------------- | --------------- |
    | In range [deg]      | Inposition 範圍   |
    | In range time [sec] | Inposition 判定時間 |

