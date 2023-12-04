function btnClick(){
    var time = Math.floor(Math.random() * (2592000000 - 86400000)) + 86400000 ;
    var ms = time,
        sec = Math.floor(ms / 1000);
        min = Math.floor(sec / 60);
        hour = Math.floor(min / 60);
        day = Math.floor(hour / 24);
    var output = "Суток: " + day + "\n Часов: " + hour + "\n Минут: " + min + "\n Секунд: " + sec + "\n Милисекунд: " + ms
    document.getElementById("output").innerText = output;
    console.log(output);
}