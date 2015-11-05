//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["손주 두번만 보고싶었으면 딸도 죽이겠네", "언플까지해서 아들만 지키려는 여편네", "이런년은 방송계에서 퇴출해줬으면 좋겠다", "배아파서 낳았다고 다 부모취급 하면 안될듯", "돈띁어낼 생각만 할텐데 위하긴 개뿔", "피해자코스프레 역겹다. 속네가 뻔히 드러나는걸", "노름쟁이한테 돈 갖다주는건 밑빠진 독에 물붓기", "부모라면 자식이 번돈 저러진 않을텐데 진짜 병이지", "그냥 닥치고있어 아무것도 모르면 등신아", "북한이여? 쌀떨어지면 도발하고...", "그럼 그렇게 하세요.치매인증질 그만 하시고"];
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