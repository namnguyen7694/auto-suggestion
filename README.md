## GUIDE: 

# In your html file with Search box input which you want to apply suggestion:

1. Require **jQuery, jQuery-ui** (and Axios when you use axios to fetch your api) CDN as below:
_Example_:
```
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
```

2. Require script & css style from folder **custom-auto-suggestion**:
```
<script src="/auto-suggestion/custom-auto-suggestion/index.js"></script>
<link rel="stylesheet" href="/auto-suggestion/custom-auto-suggestion/index.css" />
```
3. Set your Search box input with **id="custom-auto-complete"**
4. Run our script with optional parameter **Categories array** (you can change order of block). By default, categories order is ["suggestions", "collections", "products"]
```
<script>
  $(document).ready(function () {
    autoSuggestion();
  });
</script>
```

