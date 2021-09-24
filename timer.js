var start = document.getElementById("start");
var reset = document.getElementById("reset");

const hour = document.getElementById("thour");
const min = document.getElementById("tmin");
const sec = document.getElementById("tsec");
var countdownTimer = null;

start.addEventListener('click', function(){

    function startTimer()
    {
        countdownTimer =  setInterval(timer,1000);
    }

        startTimer();

})


reset.addEventListener('click', function(){
    hour.value = 0;
    min.value = 0;
    sec.value = 0
    clearInterval(countdownTimer);

})

const timer =  () =>{

if(hour.value == 0 && min .value== 0 && sec.value == 0){
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if(sec.value != 0){
        sec.value--;
    } else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    } else if(hour.value != 0 && min.value == 0){
        min.value = 60;
        hour.value--;
    }
    return;
}


