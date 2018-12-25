var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var img = document.getElementById("img");
drafting(box1);
drafting(box2);
drafting(img);

function drafting(obj) {

    
    obj.style.position = "absolute"
    //获取页面的可见宽高
    let bodyW = document.documentElement.clientWidth
    let bodyH = document.documentElement.clientHeight
    let boxW = obj.clientWidth
    let boxH = obj.clientHeight
    obj.style.left = (bodyW-boxW)/2 + "px"
    obj.style.top = (bodyH-boxH)/2 + "px"

    
    obj.onmousedown = function (event) {

        //取消ie浏览器默认行为
        /*if (obj.setCapture){
            obj.setCapture();
        } */
        obj.setCapture && obj.setCapture();

        //求偏移量，鼠使标停在点击位置
        var ol = event.clientX - obj.offsetLeft;
        var ot = event.clientY - obj.offsetTop;

        document.onmousemove = function (event) {
            event = event || window.event;
            //获取鼠标当前坐标
            var left =  event.clientX;
            var top = event.clientY;
            //获取滚动条位置
            var stop = document.body.scrollTop || document.documentElement.scrollTop;
            var sleft = document.body.scrollLeft || document.documentElement.scrollLeft;
            //设置showBox的left，top属性
            obj.style.left = left + sleft - ol + "px";
            obj.style.top = top + stop - ot + "px";
        };

        document.onmouseup = function () {
            //取消鼠标移动事件
            document.onmousemove = null;
            //取消鼠标松开事件
            document.onmouseup = null;
        };
        //取消浏览器的默认行为
        return false;
        //取消ie浏览器默认行为
        obj.releaseCapture && obj.releaseCapture();
    };
};
