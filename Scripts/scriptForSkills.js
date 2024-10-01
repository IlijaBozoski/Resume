function startLoading(id, procent) {
    // Simulate loading
    let progress = 0;
    let elementId = 'loadingBarSkill' + id;
    let interval = setInterval(function () {
        progress += 2;
        document.getElementById(elementId).style.width = progress + '%';
        if (progress >= procent) {
            clearInterval(interval);
            // Wait for 5 seconds before restarting
            setTimeout(function () {
                startLoading(id, procent);
            }, 10000);
        }
    }, 50); // Adjust this value for the loading speed
}

document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(1, 85);
});
document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(2, 65);
});
document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(3, 65);
});
document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(4, 80);
});
document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(5, 82);
});
document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(6, 75);
});

document.addEventListener('DOMContentLoaded', function () {
    // Start loading initially
    startLoading(7, 55);
});
