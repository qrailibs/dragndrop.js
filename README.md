![dragndrop](https://via.placeholder.com/800x400/232424/0afc77?text=dragndrop.js) 

dragndrop.js is lightweight javascript micro-framework to create drag & drop functionality, Easy-to-use. 

# Installation
1. Copy code of src/dragndrop.min.js
2. Create file dragndrop.min.js in your project dist folder
3. Write `<script src="dist/dragndrop.min.js"></script>` in your .html page

# How to Use
You have to simply initialize drop zone (where elements will be dropped) and
draggables (elements that will be dragged):
```html
<div id="drop-zone"></div>
<div class="draggable">Draggable</div>
<div class="draggable">Draggable</div>
<div class="draggable">Draggable</div>

<script src="dist/dragndrop.min.js"></script>
<script>
dragndrop.dropZone('#drop-zone');
dragndrop.draggable('.draggable');
</script>
```
