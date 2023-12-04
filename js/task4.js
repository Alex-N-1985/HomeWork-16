function btnClick(){
    var n1 = Math.floor(Math.random() * 256),
        n2 = Math.floor(Math.random() * 256),
        n3 = Math.floor(Math.random() * 256),
        n4 = Math.floor(Math.random() * 100) / 100;
    var color = "rgba(" + n1 + "," + n2 + "," + n3 + "," + n4 + ")";
    document.getElementById("output").style.background = color;
    document.getElementById("output").innerText = color;
    console.log(color);
}