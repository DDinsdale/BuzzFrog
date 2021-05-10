var total = 0;
var correct = 0;

function IncorrectFunction(){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
    total++;
    if(total == 2){
        document.getElementById("q2a1").disabled = true;
        document.getElementById("q2a2").disabled = true;
        document.getElementById("q2a3").disabled = true;
        document.getElementById("q2a4").disabled = true;
    }
    if(total == 3){
        document.getElementById("q3a1").disabled = true;
        document.getElementById("q3a2").disabled = true;
        document.getElementById("q3a3").disabled = true;
        document.getElementById("q3a4").disabled = true;
    }

    if(total == 4){
        document.getElementById("q4a1").disabled = true;
        document.getElementById("q4a2").disabled = true;
        document.getElementById("q4a3").disabled = true;
        document.getElementById("q4a4").disabled = true;
    }
}

function CorrectFunction(){
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a4").disabled = true;
    document.getElementById("q1a3").disabled = true;
    total++;
    correct++;
    if(total == 2){
        document.getElementById("q2a1").disabled = true;
        document.getElementById("q2a2").disabled = true;
        document.getElementById("q2a3").disabled = true;
        document.getElementById("q2a4").disabled = true;
    }

    if(total == 3){
        document.getElementById("q3a1").disabled = true;
        document.getElementById("q3a2").disabled = true;
        document.getElementById("q3a3").disabled = true;
        document.getElementById("q3a4").disabled = true;
    }

    if(total == 4){
        document.getElementById("q4a1").disabled = true;
        document.getElementById("q4a2").disabled = true;
        document.getElementById("q4a3").disabled = true;
        document.getElementById("q4a4").disabled = true;
    }
}
function SubmitFunction(){
    alert("you scored " + correct + "/" + total + "!" );
}