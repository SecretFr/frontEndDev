function startTime(){
    
    var data = new Date()
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();

    m = minCheck(m);
    s = minCheck(s);

    console.log(h,m,s);

    if(h>11){
        document.getElementById("time").innerHTML = "PM " + h + ":" + m + ":" + s;
        if(s>30){
            document.getElementById("time").style.color = "aquamarine";
            document.getElementById("time").style.backgroundColor = "black";
        }
        else{
            document.getElementById("time").style.color = "hotpink";
            document.getElementById("time").style.backgroundColor = "aqua";
        }
    }
    else{
        document.getElementById("time").innerHTML = "AM " + h + ":" + m + ":" + s;
        if(s>30){
            document.getElementById("time").style.color = "aquamarine";
        }
        else{
            document.getElementById("time").style.color = "hotpink";
        }
    }
    setTimeout(startTime, 1000);

}
function minCheck(i){
    if(i<10) {i = "0" + i};
    return i;
}

var cookies = document.cookie;
console.log(cookies);
document.getElementById("cookies").innerHTML = cookies;