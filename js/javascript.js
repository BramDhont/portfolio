$(document).ready(function (){
	
    		$('#col-1').animate({left:'36%', opacity: '+1'},500);
    		$('#col-2').animate({left:'37%', opacity: '+1'},700);
    		$('#col-3').animate({left:'38%', opacity: '+1'},900);
    		$('#col-4').animate({left:'39%', opacity: '+1'},1100);
    		$('#col-5').animate({left:'40%', opacity: '+1'},1300);
    		$('#col-6').animate({left:'41%', opacity: '+1'},1500);
    		$('#col-7').animate({left:'42%', opacity: '+1'},1700);
            $('#col-slide-1').hide();
            $('#col-slide-2').hide();
            $('#col-slide-3').hide();
            $('#col-slide-4').hide();
            $('#col-slide-5').hide();
            $('#col-slide-6').hide();
            $('#col-slide-7').hide();

            function hanger(){
                var speed = 100;
                $(this).animate({marginBottom:'-40px'},speed);
                $(this).animate({marginBottom:'+40px'},speed);
                $(this).animate({marginBottom:'-30px'},speed);
                $(this).animate({marginBottom:'+30px'},speed);
                $(this).animate({marginBottom:'-20px'},speed);
                $(this).animate({marginBottom:'+20px'},speed);
                $(this).animate({marginBottom:'-15px'},speed);
                $(this).animate({marginBottom:'+15px'},speed);
                $(this).animate({marginBottom:'-10px'},speed);
                $(this).animate({marginBottom:'+10px'},speed);
                $(this).animate({marginBottom:'-5px'},speed);
                $(this).animate({marginBottom:'+5px'},speed);
                $(this).animate({marginBottom:'-2px'},speed);
                $(this).animate({marginBottom:'+2px'},speed);
            }

    	$('#col-1').click(function() {
    		$('#col-slide-1').slideToggle(200);
            hanger();
    	});
        $('#col-2').click(function() {
            $('#col-slide-2').slideToggle(200);
            hanger();
        });
        $('#col-3').click(function() {
            $('#col-slide-3').slideToggle(200);
            hanger();
        });
        $('#col-4').click(function() {
            $('#col-slide-4').slideToggle(200);
            hanger();
        });
        $('#col-5').click(function() {
            $('#col-slide-5').slideToggle(200);
            hanger();
        });
        $('#col-6').click(function() {
            $('#col-slide-6').slideToggle(200);
            hanger();
        });
        $('#col-7').click(function() {
            $('#col-slide-7').slideToggle(200);
            hanger();
        });
	});
