function send(event){
    if (event instanceof KeyboardEvent && event.key != "Enter"){
        return;
    }
    var val = document.getElementById("chatArea").value;
    if (val == null || val == ""){
        return;
    }
    var me  = document.createElement("p");
    me.innerHTML = "我：" + val;
    me.style.color = "blue";
    document.getElementsByClassName("content")[0].appendChild(me);
    //此处发ajax

    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://127.0.0.1:12306/chat?text=" + val);
    ajax.send();
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200){
            console.log(ajax.responseText)
            var temp = document.createElement("p");
            temp.innerHTML = "机器人：" + JSON.parse(ajax.responseText).text;
            document.getElementsByClassName("content")[0].appendChild(temp);
            document.getElementById("chatArea").value = "";
        }
    }
}
