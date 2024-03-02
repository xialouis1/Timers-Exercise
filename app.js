function countDown(num) {
    if(typeof num !== 'number') {
        throw new Error("Parameter must be a number.");
    }

    const IntervalID_countdown = setInterval(function() {
        num--;
        console.log(num);

        if(num <= 1) {
            clearInterval(IntervalID_countdown);
            console.log("DONE!");
        } 
    }, 
    1000);
}