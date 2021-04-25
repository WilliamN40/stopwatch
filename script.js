document.addEventListener("DOMContentLoaded",() => {
    const timer = document.querySelector("#count");
    const startstop = document.querySelector("#startstop");
    const reset = document.querySelector("#reset");
    var timePlay = false;
    startstop.addEventListener("click", () => {
        if(startstop.innerHTML == "Start"){
            timePlay = true;
            startstop.innerHTML = "Stop";
        }
        else{
            timePlay = false;
            startstop.innerHTML = "Start";
        }
    })
    reset.addEventListener("click", () => {
        timePlay = false;
        timer.innerHTML = 0;
    })
                
    function Check(){
        if(timePlay){
            timer.innerHTML = parseInt(timer.innerHTML) + 1;
        }}

    setInterval(Check, 1000);
});