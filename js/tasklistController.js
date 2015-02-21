todoApp.controller('taskListCtrl', ['$scope', '$document', function ($scope, $document) {

    var canvas = $document.find('canvas')[0];
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext('2d');

    function draw(){

    	//background - linear gradient
        ctx.rect(0, 0, canvas.width, canvas.height);
	    var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
	    grd.addColorStop(0, '#487690');   
		grd.addColorStop(0.3, '#1d909e');   
	    grd.addColorStop(1, '#00bcb1');
	    ctx.fillStyle = grd;
	    ctx.fill();

	    //large task circle
	    ctx.translate(canvas.width/2,canvas.height*0.4); 

	    var disR = 200;
	    var angle = 0;
	    var coords = [];
	    while (angle < 360) {
	    	coords.push([disR*Math.cos(Math.PI*(angle/180)), disR*Math.sin(Math.PI*(angle/180))]);
	    	angle = angle + 24;
	    }

		for(var i = 0; i < coords.length; i++){
		    ctx.beginPath();
		    ctx.arc(coords[i][0], coords[i][1], 20, 0, Math.PI * 2, true);
		    ctx.fill();
		}

		



		
    }

    draw();
}]);


