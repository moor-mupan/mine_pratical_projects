/*js原生代码开始*/
{
    /*获取所有的元素*/
    var outer = document.getElementById('outer');
    var imglist = document.getElementById('imglist');
    var navlist = document.getElementById("navlist");
    var imgArr = document.getElementsByTagName('img');
    var allA = document.getElementsByTagName('a');
    /*设置imglist的宽*/
    imglist.style.width = 500*imgArr.length+"px";
    /*设置navlist居中*/
    navlist.style.left = (outer.offsetWidth/2 - navlist.offsetWidth/2)+"px";
    /*默认显示图片的索引0*/
    var index = 0;
    var timer;
    var one;
    var two;
    allA[index].style.backgroundColor = "black";
    /*遍历allA*/
    for (var i=0; i<allA.length; i++){
        /*为allA添加一个num属性保存索引*/
        allA[i].num = i;
        /*点击圆点平滑切花图片*/
        allA[i].onclick = function () {
            /*去除默认圆点的背景*/
            allA[index].style.backgroundColor = "";
            index = this.num;
            if (imglist.offsetLeft > index * -500){
                clearInterval(timer);
                timer = setInterval(function () {
                    imglist.style.left = imglist.offsetLeft - 50 + "px";
                    if (imglist.offsetLeft == index * -500){
                        clearInterval(timer);
                    }
                },50);
            }else if(imglist.offsetLeft < index * -500){
                clearInterval(timer);
                timer = setInterval(function () {
                    imglist.style.left = imglist.offsetLeft + 50 + "px";
                    if (imglist.offsetLeft == index * -500){
                        clearInterval(timer);
                    }
                },50);
            }
            // imglist.style.left = index * -500 + "px";
            /*为点击圆点添加背景颜色*/
            allA[index].style.backgroundColor = "black";
        };
    };
    /*自动切换图片*/
    if (imglist.offsetLeft > (-500 * imgArr.length)) {
        clearInterval(one);
        one = setInterval(function () {
            imglist.style.left = imglist.offsetLeft - 500 + 'px';
            if (imglist.offsetLeft == -500 * imgArr.length){
                imglist.style.left = 0 + "px";
            }
            for(var i=0 ; i<allA.length ; i++){
                allA[i].style.backgroundColor = "";
            }
            index = imglist.offsetLeft / -500;
            if (index > 4){
                index = 0;
            }
            allA[index].style.backgroundColor = "black";
            outer.onmouseenter = function () {
                clearInterval(one);
                outer.onmouseleave = function () {
                    one = setInterval(function () {
                        imglist.style.left = imglist.offsetLeft - 500 + 'px';
                        if (imglist.offsetLeft == -500 * imgArr.length){
                            imglist.style.left = 0 + "px";
                        }
                    },2000);
                }
            }
        },2000);
    }

}
/*js原生代码结束*/

/*jQuery代码开始*/
/*{
    var $outer = $('#outer');
    var $imglist = $('#imglist');
    var $navlist = $('#navlist');
    var $imgArr = $('#imglist>img');
    var $allA = $('#navlist>li>a');
    var index = 0;
    var timer;
    /!*设置样式*!/
    $imglist.width($imgArr.length*500);
    // left = $outer.width()/2 - $navlist.width()/2;
    $navlist.css('left','197.5px');
    //默认索引为0的被选中
    $($allA[index]).css('background','black');
    for (var i=0; i<$allA.length; i++) {
        //添加一num属性存储i的值
        $allA[i].num = i;
        //绑定点击监听1
        $($allA[i]).click(function () {
            $allA.css('background', '');
            $($allA[this.num]).css('background', 'black');
            index = this.num;
            if (index * -500 < $imglist[0].offsetLeft){
                clearInterval(timer);
                timer = setInterval(function () {
                    $imglist[0].style.left = $imglist[0].offsetLeft -50 + "px";
                    if (index * -500 == $imglist[0].offsetLeft){
                        clearInterval(timer);
                    }
                },50)
            }
            if (index * -500 > $imglist[0].offsetLeft){
                clearInterval(timer);
                timer = setInterval(function () {
                    $imglist[0].style.left = $imglist[0].offsetLeft +50 + "px";
                    if (index * -500 == $imglist[0].offsetLeft){
                        clearInterval(timer);
                    }
                },50)
            }

        })
    }
    //点击切换图片完成


}*/
/*jQuery代码结束*/








