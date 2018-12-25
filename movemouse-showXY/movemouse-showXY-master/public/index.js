MyFun();
function MyFun() {
    var move = document.getElementById("move");
    var showBox = document.getElementById("showBox");
    showBox.style.display = "none";
    move.onmousemove = function(event){
        showBox.style.display = "block";
        //解决兼容性问题
        event = event || window.event;

        var x = event.clientX;
        var y = event.clientY;
        // alert("x = "+x + " , y = "+y);
        showBox.innerHTML = "x = "+x + " , y = "+y;

        /*显示框随鼠标移动*/
        //获取鼠标当前坐标
        var left =  event.clientX;
        var top = event.clientY;
        //获取滚动条位置
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        var sleft = document.body.scrollLeft || document.documentElement.scrollLeft;
        //设置showBox的left，top属性
        showBox.style.left = left + sleft + "px";
        showBox.style.top = top + stop + "px";

        //当鼠标离开元素时触发
        move.onmouseout = function () {
            showBox.style.display = "none";
        }
    };



}










