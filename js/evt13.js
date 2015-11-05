//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["어휴 드러운것들", "똥오줌이나 마셔라", "고추가 너무 작아서 이해력이 딸리나 보네", "존나 혐오스럽다", "이런 날씨뉴스에 왜이런 댓글이?", "자들거리는 소리 존나 크게들린다", "니들 머리 속만큼 가관일까", "제발 꺼져라 병신년들 필요없음", "느그애비도 퇴물인데 고려장해드려야지", "말이 안통하네. 대화는 인간이랑 하는 거라고 할머니가 그러셨지", "한강에뛰어들어라.. 더숨쉬고 피해끼치지말고"];
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
    return Math.floor(Math.random() * 3 +1) * maxSpeed;
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
    this.x = nextRandomInteger(canvasWidth) - 300;
    this.y = 0 - canvasHeight + 20;
    this.vx = 0;
    this.vy = randomSpeed(15);
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
    if(this.x < 0) {
        this.x = nextRandomInteger(canvasWidth);
    } else if(this.x > W - 400) {
        this.x = nextRandomInteger(canvasWidth)-400;
    }
    if (this.y < 0 - canvasHeight) {
        this.vy *= -1;
    } else if (this.y > canvasHeight) {
        this.x = nextRandomInteger(canvasWidth) - 100;
        this.y = 0 - canvasHeight + 20;
        this.body.innerHTML = randomLetter();
    }
    if (this.y > H - this.height) {
        this.y = this.y - this.height;
    }
    //이동
    this.y += this.over ? this.vy * 0.05 : this.vy;
    this.x += this.vx;
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