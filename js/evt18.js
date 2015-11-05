//랜덤한 정수를 생성
function nextRandomInteger(limit) {
    return Math.round(Math.random()*limit);
}

//랜덤한 문자를 리턴하는 함수
var letters = ["퍽이나 희망찬 하루보내것다 쯧쯧", "천박한데 완장차는거 좋아하는 종자들이 그렇지", "저게 죳같으면 그만 두고 나가", "조선시대 노비도 아니고 어휴", "얼마나 대가리에 똥이 들었으면...", "개같은 년놈들이네", "꼴에 부녀회랍시고 지들끼리 선동해서 해놨을걸 상상하니", "이제 삶이 좀 윤택해졌냐? 시발새끼들아?", "저 사람들 싹다 자살좀 ㅋㅋ", "미친인간들 아주 지랄을 해요", "니자식들 키워서나 시켜 쓰레기같은 새끼들아"];
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