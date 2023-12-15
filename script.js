
(function () {
    let loginForm = document.getElementById("calculateForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        let radius = document.getElementById("radius").value;
        let segmentHeightOne = document.getElementById("segmentHeightOne").value;
        let segmentHeightTwo = document.getElementById("segmentHeightTwo").value;

        let circleSquare = Math.PI * Math.pow(radius, 2);
        // console.log('circleSquare: ' + circleSquare);

        let segmentOneSquare = calculateRes(radius, segmentHeightOne);
        // console.log('segmentOneSquare: ' + segmentOneSquare);

        let segmentTwoSquare = calculateRes(radius, segmentHeightTwo);
        // console.log('segmentTwoSquare: ' + segmentHeightTwo);

        let result = circleSquare - segmentOneSquare - segmentTwoSquare;
        // console.log('RESULT: ' + result);

        document.getElementById("calculationResult").value = result;
    });

}());

function calculateRes(radius, segmentHeight) {
    let segmentAngle = calculateChordAngle(radius, segmentHeight);
    let segmentSquare = calculateSegmentSquare(radius, segmentAngle);
    return segmentSquare;
}

function calculateChordAngle(radius, segmentHeight) {
    let angle = 2 * Math.acos(1 - (segmentHeight / radius));
    let degreeAngle = angle * (180 / Math.PI);
    return degreeAngle;
}

function calculateSegmentSquare(radius, segmentAngle) {
    segmentRadians = segmentAngle * Math.PI/180;
    return ((Math.pow(radius, 2) / 2) * ((Math.PI * (segmentAngle/180)) -  Math.sin(segmentRadians) ) );
}