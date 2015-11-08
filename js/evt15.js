//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["얼마나 무식하면 쯧쯧", "가면갈수록 별로다 걸레같아", "개 똥통 철학 지껄이지 말고 책이나 좀 읽어라", "성적 취향 인증? 범죄아냐?", "아몰랑 유행이냐? 입쳐닫고있네", "어떤 정신 상태면 이럴수가 있는지 진짜 심각하다", "별게다 섹시하다 변태녀낰ㅋ", "개쓰레기년. 지 본색을 사정없이 들어내 버리네", "걍 접어라 노래도 네 얼굴도 안 듣고 안 보고 싶다", "연관검색어 '영악' 졸지에 이미지 메이킹 제대로햇네ㅋ", "잘가라 미친년아"];
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