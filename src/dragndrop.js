const dragndrop = {
    dragging: undefined,

    dropZone: function(dropZoneQuery) {
        function handleDragOver(e) {
            e.preventDefault();
            this.setAttribute('dropping', true);
        }
        function handleDragLeave(e) {
            e.preventDefault();
            this.setAttribute('dropping', false);
        }
        function handleDrop(e) {
            e.preventDefault();
            
            var draggedEl = dragndrop.dragging;
            var dropZoneEl = this;

            dropZoneEl.appendChild(draggedEl);
        }

        document.querySelectorAll(dropZoneQuery).forEach(element => {
            element.setAttribute('dropping', false);

            //events: drag over & leave/end, drop
            element.addEventListener('dragover', handleDragOver, false);
            element.addEventListener('dragleave', handleDragLeave, false);
            element.addEventListener('dragend', handleDragLeave, false);
            element.addEventListener('drop', handleDrop, false);
        });
    },

    draggable: function(draggableElsQuery) {
        function handleDragStart(e) {
            if(dragndrop.dragging == undefined) {
                dragndrop.dragging = this;
                dragndrop.dragging.setAttribute('dragging', true);
            }
        }
        function handleDragEnd(e) {
            e.preventDefault();
            if(dragndrop.dragging != undefined) {
                dragndrop.dragging.setAttribute('dragging', false);
                dragndrop.dragging = undefined;
            }
        }

        document.querySelectorAll(draggableElsQuery).forEach(element => {
            element.setAttribute('draggable', true);
            element.setAttribute('dragging', false);

            if(!element.hasAttribute('id')) {
                element.setAttribute('id',`_${(~~(Math.random()*1e8)).toString(16)}`);
            }

            //events: drag start & end
            element.addEventListener('dragstart', handleDragStart, false);
            element.addEventListener('dragend', handleDragEnd, false);
        });
    }
}
