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

function randomGame() {
    let count = 0;
    let random = -1;

    const IntervalID_timer = setInterval(function() {
        count++;
        random = Math.random();

        if(random > 0.75) {
            clearInterval(IntervalID_timer);
            console.log(`Number of tries: ${count}`);
        }
    }, 1000);
}