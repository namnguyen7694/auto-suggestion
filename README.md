# DEMO: 
Open index.html file in root folder to run demo.

Try to type "b", "bo" or other word to see other results.

# FEATURES:
- [x] Dynamic block suggestion order & block category name
- [x] Turn on/off the display of each block with the checkbox 
- [x] Support Product card display (with category name "products")
- [x] Support remote data source (following our sample structure below)
- [x] Responsive


# GUIDE TO USE IN YOUR SEARCH BOX:

## In your html file with Search box input which you want to apply suggestion:

1. Require **jQuery, jQuery-ui** (and Axios when you use axios to fetch your api) CDN as below:

_Example_:
```
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
```

2. Require script & css style to the relative path of folder **custom-auto-suggestion**:

_Example_:
```
<script src="custom-auto-suggestion/index.js"></script>
<link rel="stylesheet" href="custom-auto-suggestion/index.css" />
```

3. Set your Search box input with **id="custom-auto-complete"**
4. Run our script with optional parameter **Categories array** (you can change order of these block). By default, categories order is ["suggestions", "collections", "products"]
```
<script>
  $(document).ready(function () {
    autoSuggestion();
  });
</script>
```
5. Define an async **handleSearch** function in your script to fetch data for auto_complete source
#### Api data sample property:
* Product : { **category**, id, **value**, brand, price, image, label, url }
* Collection, Term and other Block: { **category**, id, **value**, url }
 _**bold** property is required_
 
#### JSON Data return structure : 
    {category_key : [data] }
 

