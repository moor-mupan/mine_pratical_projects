/*
1.点击开始游戏动态生成100个小格
2.leftclick -->没有雷，显示数字，表示当前小格为中心的8个格没有雷。
                -->有雷则game over
3.rightclick -->有标记取消标记，没有则进行标记
                -->标记是否正确，正确则剩余雷-1
4.已经有数字则点击无效
*/

window.onload = function () {

    var startBtn = document.getElementById('startBtn');
    var outerBox = document.getElementById('outerBox');
    var mineCount = document.getElementById('mineCount');
/*    var close = document.getElementById('close');
    var win = document.getElementById('win');
    var gameover = document.getElementById('gameover');*/
    var startNum = 10;
    var overNum = 10;
    var block;
    var minesindex;
    var mineMap = [];

    allfun();
    function allfun() {
        startBtn.onclick = function () {
            mineCount.innerHTML = '当前还有'+ overNum + '个雷';
            outerBox.style.display = 'block';
            mineCount.style.display = 'block';
            startBtn.style.display = 'none';
            mine();
        };
        outerBox.oncontextmenu = function () {
          return false;
        };

        outerBox.onmousedown = function (e) {
           // 判断当前点击的是哪个小格
           var event = e.target;
           if (e.buttons == 1){
               leftClick(event);
           }else if (e.buttons == 2){
               rightClick(event);
           }
        };
    };

    function mine() {
        for (var i=0; i<10; i++){
            for (var j=0; j<10; j++){
                var con = document.createElement('div');
                outerBox.appendChild(con);
                con.classList.add('block');
                con.setAttribute('id',i +'-'+ j);
                mineMap.push({mine:0});
            }
        }
        while(startNum){
            block = document.getElementsByClassName('block');
            minesindex = Math.floor(Math.random()*100);
            if (mineMap[minesindex].mine === 0){
                mineMap[minesindex].mine = 1;
                block[minesindex].classList.add('islei');
                startNum--;
            };
        };
    };

    function leftClick(dom) {
        var islei = document.getElementsByClassName('islei');
        if (dom && dom.classList.contains('islei')){
            for (var i=0; i<islei.length; i++){
                islei[i].classList.add('show');
            };
            alert('game over');
            outerBox.classList.add('over');
            if (outerBox.classList.contains('over')){
                outerBox.onmousedown = function () {
                    return;
                }
            }
        }else {
            var n = 0;
            var posArr = dom && dom.getAttribute('id').split('-');
            var posX = posArr && +posArr[0];
            var posY = posArr && +posArr[1];
            dom && dom.classList.add('num');
            for (var i=posX-1; i<=posX+1; i++){
                for (var j=posY-1; j<=posY+1; j++){
                    var aroundBox = document.getElementById(i +'-'+ j);
                    if (aroundBox && aroundBox.classList.contains('islei')){
                        n++;
                    }
                }
            }
            dom && (dom.innerHTML = n);
            if (n == 0){
                for (var i=posX-1; i<=posX+1; i++){
                    for (var j=posY-1; j<=posY+1; j++){
                        var nearBox = document.getElementById(i +'-'+ j);
                        if (nearBox && nearBox.length != 0 ){
                            if (!nearBox.classList.contains('check')){
                                //标记已经点过的
                                nearBox.classList.add('check');
                                leftClick(nearBox);
                                //recursive call 递归调用
                            }
                        }
                    }
                }
            }
        };

    };

    function rightClick(dom) {
        //有数字不做任何操作
        if (dom.classList.contains('num')){
            return;
        } 
        //属性切换，有—>无 ，无->有
        dom.classList.toggle('flag');
        if (dom.classList.contains('islei') && dom.classList.contains('flag')){
            overNum--;
        }
        if (dom.classList.contains('islei') && !dom.classList.contains('flag')){
                overNum++;
        }
        mineCount.innerHTML = '当前还有'+ overNum + '个雷';
        if (overNum == 0){
            alert('you win');
            outerBox.classList.add('over');
            if (outerBox.classList.contains('over')){
                outerBox.onmousedown = function () {
                    return;
                }
            }
        }
    };
































};



















