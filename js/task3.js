function btnClick(){
    var num = Math.floor(Math.random() * 55) + 12;
    document.getElementById("output").innerText = num;
    console.log(num);
}