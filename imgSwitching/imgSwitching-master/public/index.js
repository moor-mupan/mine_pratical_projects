var Switching = new function () {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var imgs = document.getElementsByTagName('img');
    var index = 0;
    var imgArray = ["public/images/1.jpg","public/images/2.jpg","public/images/3.jpg","public/images/4.jpg","public/images/5.jpg"]
    var p = document.getElementsByTagName('p');
    p[0].innerHTML = "一共"+imgArray.length+"张图片当前第"+(index+1)+"张";
    //点击切换到上一张
    btn1.onclick = function () {
        index--;
        if (index < 0){
            index = imgArray.length-1;
        }
        imgs[0].src = imgArray[index];
        p[0].innerHTML = "一共"+imgArray.length+"张图片当前第"+(index+1)+"张";
    }

    // 点击切换到下一张
    btn2.onclick = function () {
        index++;
        if (index >imgArray.length-1){
            index = 0;
        }
        imgs[0].src = imgArray[index];
        p[0].innerHTML = "一共"+imgArray.length+"张图片当前第"+(index+1)+"张";
    }














}
