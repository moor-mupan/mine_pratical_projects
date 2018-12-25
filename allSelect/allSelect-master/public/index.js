var MyFun = new function () {
    var checkedAllBtn = document.getElementById('checkedAllBtn');
    var checkedNoBtn = document.getElementById('checkedNoBtn');
    var checkedRevBtn = document.getElementById('checkedRevBtn');
    var checkedAllBox = document.getElementById('checkedAllBox');
    var sendBtn = document.getElementById('sendBtn');
    var items = document.getElementsByName('items');
   // 全选
    checkedAllBtn.onclick = function () {
        var items = document.getElementsByName('items');
        for (var i=0 ; i<items.length ; i++){
            items[i].checked = true;
        }
        var checkedAllBox = document.getElementById('checkedAllBox');
        checkedAllBox.checked = true;
    }
    // 全不选
    checkedNoBtn.onclick = function () {
        for (var i=0 ; i<items.length ; i++){
            items[i].checked = false;
        }
        checkedAllBox.checked = false;
    }
    //全选/全不选
    checkedAllBox.onclick = function () {
        for (var i=0 ; i<items.length ; i++){
            items[i].checked = this.checked;
        }
        if (!items[i].checked){
            this.checked = false;
        }else {
            this.checked = true;
        }
    }
    //反选
    checkedRevBtn.onclick = function () {
        checkedAllBox.checked = true;
        for (var i=0 ; i<items.length ; i++){
            items[i].checked = !items[i].checked;
            if (!items[i].checked){
                checkedAllBox.checked = false;
            }
        }
    }
    //为四个多选框分别绑定点击响应函数
    for (var i=0;i<items.length;i++){
        items[i].onclick = function () {
            checkedAllBox.checked = true;
            for (var j=0 ; j<items.length ; j++){
                if (!items[j].checked){
                    checkedAllBox.checked = false;
                }
            }
        }
    }
    //提交
    sendBtn.onclick = function () {
        var send = document.getElementById('send');
        send.style.display = 'block';
        var ps = document.getElementsByTagName('p');
        for (var j=0;j<ps.length;j++){
            if (ps.length>=0){
                send.removeChild(ps[j]);
            }
        }
        for (var i=0;i<items.length;i++){
            if(items[i].checked){
                var p = document.createElement('p');
                p.innerHTML = items[i].value;
                send.appendChild(p);
            }
        }
    }















}
MyFun();