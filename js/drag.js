var taskStartX;
var taskStartY;


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
      taskStartX = event.target.x;
      taskStartY = event.target.y;

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


      var  dropCenter = {
          x: 60,
          y: 30
        };

        interact(draggableElement).draggable({
         snap: {
    targets: [
      { x: 20, y: 300, range: 50 },
      { x: 10, y: 200 /* use default range below */},
    ],
    range: 300 // for targets that don't specify a range
    }
        });
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