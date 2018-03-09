var blue =0;
var red =0;
var yellow =0;
var green =0;
var win = 0;
var losses = 0;
var rand = 0;
var total =0;

$(document).ready(function(){
	generateNumbers();

	$('#blue').on('click',function(){
		total = total + blue;
		$('#six_1').text(total);
		if(total > rand){
			losses ++;
			generateNumbers();
		} else if(total==rand){
			win ++;
			generateNumbers();
		}
	});

	$('#red').on('click',function(){
		total = total + red;
		$('#six_1').text(total);
		if(total > rand){
			losses ++;
			generateNumbers();
		} else if(total==rand){
			win ++;
			generateNumbers();
		}
	});

	$('#yellow').on('click',function(){
		total = total + yellow;
		$('#six_1').text(total);
		if(total > rand){
			losses ++;
			generateNumbers();
		} else if(total==rand){
			win ++;
			generateNumbers();
		}
	});

	$('#green').on('click',function(){
		total = total + green;
		$('#six_1').text(total);
		if(total > rand){
			losses ++;
			generateNumbers();
		} else if(total==rand){
			win ++;
			generateNumbers();
		}
	});

});

function generateNumbers(){
	blue = Math.ceil(Math.random() * 12);
	red = Math.ceil(Math.random() * 12);
	yellow = Math.ceil(Math.random() * 12);
	green = Math.ceil(Math.random() * 12);
	rand = Math.floor(Math.random() * 101) + 19;
	total =0;
	$('#six_1').text(total);
	$('#third_1').text(rand);
	$('#win').text(win);
	$('#losses').text(losses);
}

