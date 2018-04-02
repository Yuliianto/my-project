
var x   = document.getElementById("myAudio"); 
var y   = document.getElementById("noUrut"); 
var url = "";
var totalwaktu = x.duration*1000;

function panggil(no) { 	
//SET DELAY UNTUK MEMAINKAN REKAMAN NOMOR URUT		
	totalwaktu=document.getElementById('myAudio').duration;	

	//MAINKAN SUARA NOMOR URUT		
	setTimeout(function() {
			x.pause();
			x.currentTime=0;
			x.play();
	}, totalwaktu);
	totalwaktu=totalwaktu+7000;	
	setTimeout(function() {
			y.pause();
			y.currentTime=0;
			y.play();
	}, totalwaktu);
	totalwaktu=totalwaktu+2000;
	setTimeout(function() {
			url='rekaman/'+no+'.wav';
			y.src=url;	
			y.pause();
			y.currentTime=0;
			y.play();
	}, totalwaktu);
	totalwaktu=totalwaktu+1000;
} 

function pauseAudio() { 
    x.pause(); 
} 

//Author : Yulianto 
//Please don't remove it 