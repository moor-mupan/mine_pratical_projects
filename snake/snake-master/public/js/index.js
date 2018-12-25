/*
1.点击开始游戏，随机出现食物，蛇，蛇默认向右运动
2.按键 ↑ ↓ ← → 控制
3.吃到食物，食物消失，蛇长度加1
4.碰墙或自身游戏结束
*/
window.onload = function () {
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var speed = document.getElementById('speed');
    var gameBox = document.getElementById('gameBox');
    //初始化长度
    var snakeArr = [
        [2,0,'head'],
        [1,0,'body'],
        [0,0,'body']
    ];
    //使用&this变量保存this并初始化方向
    var $this = this;
    $this.direct = 'right';
    $this.left = false;
    $this.right = false;
    $this.up = true;
    $this.down = true;
    var timer;
    var foodX;
    var foodY;

    food();
    snakeFun();
    bindEvent();

    //生成食物
    function food() {
        var food = document.createElement('div');
        food.style.width = 20 + 'px';
        food.style.height = 20 + 'px';
        foodX = Math.floor(Math.random()*500/20);
        foodY = Math.floor(Math.random()*500/20);
        gameBox.style.position = 'relative';
        food.style.position = 'absolute';
        food.style.left = foodX * 20 + "px";
        food.style.top = foodY * 20 + "px";
        food.style.background = 'yellow';
        gameBox.appendChild(food).setAttribute('class','food');
    }

    //生成蛇
    function snakeFun() {
        for (var i=0; i<snakeArr.length; i++){
            var snake = document.createElement('div');
            snake.style.width = 20 + "px";
            snake.style.height = 20 + "px";
            snake.style.position = "absolute";
            snake.style.left = snakeArr[i][0]*20 + 'px';
            snake.style.top = snakeArr[i][1]*20 + 'px';
            snake.classList.add(snakeArr[i][2]);
            snake.classList.add('snake');
            gameBox.appendChild(snake);
        }
    }

    //移除蛇
    function removeClass(className) {
        var ele = document.getElementsByClassName(className);
        while (ele.length>0){
            ele[0].parentNode.removeChild(ele[0]);
        }
    }

    //绑定事件
    function bindEvent() {
        document.onkeydown = function (e) {
            var code = e.keyCode;
            switch (code){
                case 37:
                    if ($this.left){
                        $this.direct = "left";
                        $this.left = false;
                        $this.right = false;
                        $this.up = true;
                        $this.down = true;
                    }
                    break;
                case 38:
                    if ($this.up){
                        $this.direct = "up";
                        $this.left = true;
                        $this.right = true;
                        $this.up = false;
                        $this.down = false;
                    }
                    break;
                case 39:
                    if ($this.right){
                        $this.direct = "right";
                        $this.left = false;
                        $this.right = false;
                        $this.up = true;
                        $this.down = true;
                    }
                    break;
                case 40:
                    if ($this.down){
                        $this.direct = "down";
                        $this.left = true;
                        $this.right = true;
                        $this.up = false;
                        $this.down = false;
                    }
                    break;
                default:
                    break;
            }
        }
        startBtn.onclick = function (){
            clearInterval(timer);
            //定时调用move()函数
            timer = setInterval(function () {
                move();
            },400);
        }
        stopBtn.onclick =function () {
            clearInterval(timer);
        }
        speed.onclick = function () {
            clearInterval(timer);
            //定时调用move()函数
            timer = setInterval(function () {
                move();
            },100);
        }
    }

    //蛇移动
    function move() {
        for (var i=snakeArr.length-1; i>0; i--){
            snakeArr[i][0] = snakeArr[i-1][0];
            snakeArr[i][1] = snakeArr[i-1][1];
        }
        switch ($this.direct){
            case "right":
                snakeArr[0][0] += 1;
                break;
            case "left":
                snakeArr[0][0] -= 1;
                break;
            case "up":
                snakeArr[0][1] -= 1;
                break;
            case "down":
                snakeArr[0][1] += 1;
                break;
            default:
                break;
        }
        //删除原来的蛇再重新渲染一条蛇
        removeClass('snake');
        snakeFun();

        //判断是否撞墙
        if (snakeArr[0][0]<0||snakeArr[0][0]>24||snakeArr[0][1]<0||snakeArr[0][1]>24){
            //撞墙则清除定时器
            clearInterval(timer);
            alert('gameOver');
        }
        //判断是否吃到自己
        for (var i=1; i<snakeArr.length; i++){
            if (snakeArr[0][0]==snakeArr[i][0]&&snakeArr[0][1]==snakeArr[i][1]){
                clearInterval(timer);
                alert('gameOver');
            }
        }
        //判断是否吃到食物
        if (snakeArr[0][0] == foodX && snakeArr[0][1] == foodY){
            //移除食物再重新生成
            removeClass("food");
            food();

            //添加蛇身长度1
            snakeArr.push([ , ,"body"]);
        }
    }










































}