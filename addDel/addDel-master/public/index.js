/*增加*/
add();
function add() {
    var addEmpButton = document.getElementById('addEmpButton');
    addEmpButton.onclick = function () {
        //创建tr
        var tr = document.createElement('tr');
        //创建td
        var nametd = document.createElement('td');
        var emailtd = document.createElement('td');
        var salarytd = document.createElement('td');
        var atd = document.createElement('td');
        //创建a
        var a = document.createElement('a');
        a.href = "javascript:;";
        //获取新增值
        var name = document.getElementsByTagName('input')[0].value;
        var email = document.getElementsByTagName('input')[1].value;
        var salary = document.getElementsByTagName('input')[2].value;
        //创建文本节点
        var nameText = document.createTextNode(name);
        var emailText = document.createTextNode(email);
        var salaryText = document.createTextNode(salary);
        var delText = document.createTextNode("Delete");
        //添加文本节点
        nametd.appendChild(nameText);
        emailtd.appendChild(emailText);
        salarytd.appendChild(salaryText);
        a.appendChild(delText);
        //添加td
        atd.appendChild(a);
        tr.appendChild(nametd);
        tr.appendChild(emailtd);
        tr.appendChild(salarytd);
        tr.appendChild(atd);
        //添加tr
        var table = document.getElementById('employeeTable');
        var tbody = table.getElementsByTagName('tbody')[0];
        tbody.appendChild(tr);
        del();
    }
}

/*删除*/
del();
function del() {
    var a = document.getElementsByTagName('a');
    for (var i=0; i<a.length; i++){
        a[i].onclick = function () {
            var tr = this.parentNode.parentNode;
            var name = tr.children[0].innerHTML;
            if (confirm('确定要删除'+name+'吗？')){
                tr.parentNode.removeChild(tr);
            }
            return false;
        }
    }



}
