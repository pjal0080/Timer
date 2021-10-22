var start = document.getElementById("start");
var reset = document.getElementById("reset");

const hour = document.getElementById("thour");
const min = document.getElementById("tmin");
const sec = document.getElementById("tsec");


var countdownTimer = null;
var count = 0;


start.addEventListener('click', function(){

   
    function startTimer()
    {
        countdownTimer =  setInterval(timer,1000);
    }

        if(count == 0 && (hour.value != 0 || min.value != 0 || sec.value != 0)){
            startTimer();
            start.disabled = true;
            hour.disabled = true;
            min.disabled = true;
            sec.disabled = true;
            count += 1;
        }

})


reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0
    clearInterval(countdownTimer);

    if(count == 1){
        start.disabled = false;
        hour.disabled = false;
        min.disabled = false;
        sec.disabled = false;
        count = 0;
    }

})

const timer = () => {

if(hour.value == 0 && min .value== 0 && sec.value == 0){
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
        start.disabled = false;
        hour.disabled = false;
        min.disabled = false;
        sec.disabled = false;
        count = 0;
        clearInterval(countdownTimer);
    } 
    else if(sec.value != 0){
        sec.value--;
    }
    else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    } 
    else if(hour.value != 0 && min.value == 0){
        if(sec.value == 0){
            min.value = 59;
            sec.value = 59;
        }
        hour.value--;
    }
   
}


