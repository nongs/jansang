//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["나같아도 돌려먹힌 애랑은 안하겠다", "너무 나대는거아냐?", "성적인 노리개와 쓰레기로 전락함...", "돌려먹혀서 싫다는데 부끄러운줄 모르나?", "별거러지가 다기어나오네", "이미지 관리 오지네. 참 뻔뻔하다", "주제에 우습고 같잖아서 상대 안 하는거", "멍청함이 뚝뚝 떨어지는 말에 충격", "사진만 봐도 역겹네", "쯧쯧 가만히있어라 걍", "어유 구질구질해"];
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