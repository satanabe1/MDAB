使用方法
---
### 基本編
プラグインの追加　＞　フリープラグインに以下を記述

```
<script src="http://www.google.com/jsapi"></script>
<script>google.load('jquery','1')</script>
<script>(function(j){j(function(){$=jQuery=j})})($)</script>

<script src="mdab.js"></script>
```

Markdown形式で記述したい文章を mdab クラスを設定した divタグで囲む

```
<div class="mdab">
ここにmarkdown形式で記述
</div>
```

例:

```
<div class="mdab">
hogehoge
--
asdf  
1234  
lkjh
</div>
```

