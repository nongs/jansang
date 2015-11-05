//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["어휴 30넘어서 추하다 추해", "젇나 말라깽이... 환자인줄", "좀 귀여운척 하는 연기 안했으면...", "진짜못생겼다 ㅋㅋ", "다 늙어서 뭐하는건지 쯧쯧", "인물이 그리없나...", "나이처먹고 저짓하니 흉물스럽네", "빨리 꺼져버렸으면 좋겠다", "똑바로좀 살아라", "진짜 주졌다 이년", "인간인척하지마라 역겨우니까"];
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