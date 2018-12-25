mouseScroll();
function mouseScroll() {
    var box1 = document.getElementById("box1");
    box1.onmousewheel = function (event) {
        event = event || window.event;
        // alert(event.wheelDelta);
        if (event.wheelDelta > 0 ){
            box1.style.height = box1.clientHeight + 10 + "px";
        }else {
            box1.style.height = box1.clientHeight - 10 + "px";
        }
    };

    //火狐不支持onmousewheel
    box1.addEventListener("DOMMouseScroll",function (event) {
        event = event || window.event;
       // alert(event.detail);
        if (event.detail > 0){
            box1.style.height = box1.clientHeight + 10 + "px";
        }else {
            box1.style.height = box1.clientHeight -10 + "px";
        };
    },false);
};