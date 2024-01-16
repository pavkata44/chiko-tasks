// JS za zadacha 5

function checkRecord() {
    console.clear();
    let worldRecord = 8;
    let worldRecordAttempt = Math.floor(Math.random() * 11);
    console.log("Current world record: " + worldRecord);
    console.log("New world record attempt: " + worldRecordAttempt);

    if (worldRecord < worldRecordAttempt) {
        console.log("World record is broken. New Wolrd record is: " + worldRecordAttempt);
    } else if (worldRecord > worldRecordAttempt || worldRecord == worldRecordAttempt) {
        console.log("World record is not broken")
    }
}