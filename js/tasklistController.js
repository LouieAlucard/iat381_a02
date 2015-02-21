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

	    ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height*0.3,100,0,2*Math.PI);
		ctx.stroke();
    }

    draw();
}]);


