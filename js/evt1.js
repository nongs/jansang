//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["입에서 시궁창 몸에서 썩은내", "그냥 폐에다가 꽂아라 쓰레기들아", "노노 꼬운게 아니라 역겨운거", "병자들이 돌아댕기네", "그래서 사회생활은 어떻게 하냐? 머저리들", "한방에 벌레일망타진", "기분 개같이 더럽네", "암이나 걸려 뒈져 쓰글넘들", "만나면똥지릴 놈들", "대가리에 든거 없는 것들이 왜 이렇게 많은지", "미개한건 어디나 다 미개하네"];
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
    return Math.random() * maxSpeed + Math.random() * maxSpeed / 2;
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

//윈도우 크기 조정
function reSize() {
    var oW = window.offsetWidth;
    var oH = window.offsetHeight;
    document.body.style.width = W ;
    document.body.style.height = H ;
}

function MovingText() {
    //위치와 속도 생성
    this.x = W;
    this.y = nextRandomInteger(canvasHeight);
    this.vx = randomSpeed(100);
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
    this.x += this.vx;
    this.y += this.vy;
    //화면에 이동 표시
    this.body.style.left = this.x + 'px';
    this.body.style.top = this.y + 'px';

    $(function(){
        $('h1').on({
            mouseenter: function () { $(this).css('z-index', '5'); },
            mouseleave: function () { $(this).css('z-index', '1'); }
        });
    });
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