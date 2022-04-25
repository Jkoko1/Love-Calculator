var YourName = prompt("Please enter your name");

var PartName = prompt("Please enter your partner's name");

function Love(YourName, PartName) {
    
    var Perc = Math.round(Math.random() * 101);

    var LoveCalc = YourName + " and " + PartName + " are " + Perc + "% match!!!";

    alert(LoveCalc);
    
}

Love(YourName, PartName);