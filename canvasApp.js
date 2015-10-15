	window.addEventListener("load", eventWindowLoaded, false);

	function eventWindowLoaded() {
		canvasApp();
	}
	function canvasSupport() {
		return Modernizr.canvas;
	}
	function canvasApp() {
		//var letters = ["뭘 입혀도 연탄장수", "디자인이 아깝다", "사장 미친겨?", "대체 뭔 생각으로 얘를 뽑은거야?", "죽쒀서 개주네", "연탄장수 ㅋㅋㅋ", "영 아니올시다", "스탭들이 빨리합시다만 열창", "머리도 안감는다 하더라", "아 드러~!", "화장해도 연탄재..."];
		//var lettersGuessed;
		//var letterIndex;
	    var x = [];
	    var y = [];
	    //var r = [];
	    var speed = [];
	    var x1 = [];
	    var y1 = [];
	    var speed1 = [];
	    var x2 = [];
	    var y2 = [];
	    var speed2 = [];
	    var x3 = [];
	    var y3 = [];
	    var speed3 = [];
	    var x4 = [];
	    var y4 = [];
	    var speed4 = [];
	    /*var x5 = [];
	    var y5 = [];
	    var speed5 = [];
	    var x6 = [];
	    var y6 = [];
	    var speed6 = [];
	    var x7 = [];
	    var y7 = [];
	    var speed7 = [];
	    var x8 = [];
	    var y8 = [];
	    var speed8 = [];
	    var x9 = [];
	    var y9 = [];
	    var speed9 = [];*/
		if (!canvasSupport()) {
			return;
		}
	    var canvas = document.getElementById('myCanvas');
	    var ctx = canvas.getContext('2d');
	    //var fps = 30;
		var W = window.innerWidth;
		var H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;
	 	
		var timeOut = setInterval(init(), 40000);

	 	function init() {
		    var circle = function(x, y) {
				ctx.font = "50px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("뭘 입혀도 연탄장수", x, y);
		    }
		    var circle1 = function(x1, y1) {
				ctx.font = "30px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("디자인이 아깝다", x1, y1);
		    }
		    var circle2 = function(x2, y2) {
				ctx.font = "38px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("사장 미친겨?", x2, y2);
		    }
		    var circle3 = function(x3, y3) {
				ctx.font = "35px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("대체 뭔 생각으로 얘를 뽑은거야?", x3, y3);
		    }
		    var circle4 = function(x4, y4) {
				ctx.font = "30px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("죽쒀서 개주네", x4, y4);
		    }
		    /*var circle5 = function(x5, y5) {
				ctx.font = "28px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("연탄장수 ㅋㅋㅋ", x5, y5);
		    }
		    var circle6 = function(x6, y6) {
				ctx.font = "36px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("머리도 안감는다 하더라", x6, y6);
		    }
		    var circle7 = function(x7, y7) {
				ctx.font = "40px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("아 드러~!", x7, y7);
		    }
		    var circle8 = function(x8, y8) {
				ctx.font = "42px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("화장해도 연탄재...", x8, y8);
		    }
		    var circle9 = function(x9, y9) {
				ctx.font = "30px Noto Sans KR";
			    ctx.fillStyle = "white";
			    ctx.fillText("영 아니올시다", x9, y9);
		    }*/
		    //var lastUpdate = new Date();
		    var update = function() {
		        window.requestAnimationFrame(update);
		        //var now = new Date();
		        //if(now - lastUpdate < (100 / fps)) return;
		        //lastUpdate = now;
		        for(var i = 0; i < 1; i++) {
		          x.push(W);
		          y.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed.push(Math.random()*1000);
		        }

		        ctx.clearRect(0, 0, canvas.width , canvas.height);

		        for(var i = 0; i < x.length; i++) {
		          circle(x[i], y[i]);
		          x[i] = x[i] - speed[i]++;
		          y[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x1.push(W);
		          y1.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed1.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle1(x1[i], y1[i]);
		          x1[i] = x1[i] - speed1[i]++;
		          y1[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x2.push(W);
		          y2.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed2.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle2(x2[i], y2[i]);
		          x2[i] = x2[i] - speed2[i]++;
		          y2[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x3.push(W);
		          y3.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed3.push(Math.random()*700);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle3(x3[i], y3[i]);
		          x3[i] = x3[i] - speed3[i]++;
		          y3[i] -= (Math.random()*10 - 2);
		        }
		        for(var i = 0; i < 1; i++) {
		          x4.push(W);
		          y4.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed4.push(Math.random()*500);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle4(x4[i], y4[i]);
		          x4[i] = x4[i] - speed4[i]++;
		          y4[i] -= (Math.random()*12 - 8);
		        }
		        /*for(var i = 0; i < 1; i++) {
		          x5.push(W);
		          y5.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed5.push(Math.random()*800);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle5(x5[i], y5[i]);
		          x5[i] = x5[i] - speed5[i]++;
		          y5[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x6.push(W);
		          y6.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed6.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle6(x6[i], y6[i]);
		          x6[i] = x6[i] - speed6[i]++;
		          y6[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x7.push(W);
		          y7.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed7.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle7(x7[i], y7[i]);
		          x7[i] = x7[i] - speed7[i]++;
		          y7[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x8.push(W);
		          y8.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed8.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle8(x8[i], y8[i]);
		          x8[i] = x8[i] - speed8[i]++;
		          y8[i] -= (Math.random()*12 - 8);
		        }
		        for(var i = 0; i < 1; i++) {
		          x9.push(W);
		          y9.push(canvas.height * Math.random());
		          //r.push(20*Math.random());
		          speed9.push(Math.random()*1000);
		        }
		        for(var i = 0; i < x.length; i++) {
		          circle9(x9[i], y9[i]);
		          x9[i] = x9[i] - speed9[i]++;
		          y9[i] -= (Math.random()*12 - 8);
		        }*/
		    }
	      	window.requestAnimationFrame(update);
			//return;
		}
		//canvasApp();
	}