//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["니 애비도 범죄자 병신 같은 페륜년", "미친년이네", "몸파는년인줄", "자살해라 병신년들아", "노친네들 암 걸려 죽던말든 내알빠아니지", "이새끼들 존나 암걸리네", "암 걸려 뒈지고 싶냐?", "애새끼들이 덜 처맞아서 그래", "저모양이니 갈수록 애새끼들이 또라이가 되는거지", "쓰레기 새끼들아 지들은 존나 특별할줄 아는갑지 깔깔", "지들은 생각안하고 항상 남탓이지 병신들"];
function randomLetter() {
    letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    return letterToGuess;
}

//랜덤한 문자의 크기를 리턴하는 함수
function randomSize() {
    return Math.floor(Math.random()*100);
}

//양음으로 랜덤한 속도를 생성하는 함수
function randomSpeed(maxSpeed) {
    return Math.floor(Math.random() * 5 + 3) * maxSpeed;
}

//var canvas = document.getElementById('myCanvas');
//var ctx = canvas.getContext('2d');

//var x = [];
//var y = [];
//var speed = [];
//var fps = 30;

//MovingText의 생성자 함수
var W = window.innerWidth;
var H = window.innerHeight;

//canvas.width = W;
//canvas.height = H;

var canvasWidth = W;
var canvasHeight = H;

function MovingText() {
    //위치와 속도 생성
    this.x = W;
    this.y = nextRandomInteger(canvasHeight);
    this.vx = randomSpeed(15);
    this.vy = 0;
    var fSize = randomSize();

    //문서 객체를 생성
    this.body = document.createElement('h1');
    this.body.innerHTML = randomLetter();
    this.body.style.position = "absolute";
    this.body.style.fontSize = fSize + 'px';
    if (fSize > 70 || fSize < 30) {
        this.body.style.fontSize = '50px';
    }

    //문서 객체를 document.body에 추가
    document.body.appendChild(this.body);

    this.body.addEventListener('mouseover', function(e) {
    	this.over = true;
    }.bind(this));
   this.body.addEventListener('mouseout', function(e) {
    	this.over = false;
    }.bind(this));

   //윈도우 크기 조정
	function reSize() {
	    var oW = document.body.offsetWidth;
	    var oH = document.body.offsetHeight;
	    document.body.style.width = W ;
	    document.body.style.height = H ;
	}
}

MovingText.prototype.move = function () {
    //범위검사
    if (this.x > canvasWidth) {
        this.vx *= -1; 
    } else if (this.x < 0 - canvasWidth) {
        this.x = W;
        this.y = nextRandomInteger(canvasHeight);
        this.body.innerHTML = randomLetter();
    }
    if (this.y > H - this.height) {
        this.y = this.y - this.height;
    }
    //이동
    this.x += this.over ? this.vx * 0.05 : this.vx;
    this.y += this.vy;
    //화면에 이동 표시
    this.body.style.left = this.x + 'px';
    this.body.style.top = this.y + 'px';

};

//window.onload
window.onload = function () {
    //변수를 선언
    var movingTexts = [];

    //배열에 MovingText 객체를 생성
    for (var i = 0; i < 11; i++) {
        movingTexts.push(new MovingText());
    }

    //움직임
    setInterval(function () {
        for (var i in movingTexts) {
            movingTexts[i].move();
        }
    }, 1000 / 60);
};