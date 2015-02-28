var taskStartX;
var taskStartY;
var taskMove = false;




// draggable task icon
interact('.taskIcon')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },

    // call this function on every dragmove event
    onmove: function (event) {

      var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    },

    // call this function on every dragend event
    onend: function (event) {
      var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = 0;
          y = 0,

      // translate the element
      target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  });






interact('.taskBin').dropzone({
  // only accept elements matching this CSS selector
  // accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  // when start dragging
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.style.fill = "green";
  },
  // when hold over dropzone
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
  },
  // when hold but leave dropzone
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    //event.relatedTarget.classList.remove('can-drop');
    //event.relatedTarget.textContent = 'Dragged out';
  },
  // when drop into dropzon
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped';
    //window.location='./index.html';
    console.log(document.getElementsByTagName("svg")[0])
  },
  // when drop
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});


interact('.feature').dropzone({
  overlap: 0.30,

  // when start dragging
  ondropactivate: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    dropzoneElement.classList.add('feature-droppable');
  },

  // when hold over dropzone
  ondragenter: function (event) {
  },

  // when hold but leave dropzone
  ondragleave: function (event) {
  },

  // when drop into dropzon
  ondrop: function (event) {
    var svgGroup = document.getElementsByClassName("detail-group")[0];
    svgGroup.style.display = "block";
    var title = document.getElementsByClassName("detail-title")[0];
    title.innerHTML = "";
    var content = document.getElementsByClassName("detail-content")[0];
    content.innerHTML = "";
    
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    var text = draggableElement.getAttribute("alt");

    var text = text.split("/n");

    title.innerHTML = text[0];
    content.innerHTML = text[1];
  },
  // when drop
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    dropzoneElement.classList.remove('feature-droppable');
  }
});