function response(t) {
    console.log(t);
    if (t == "happy") {
        const all = document.querySelectorAll('*');

        all.forEach((j) => {
            let i = Math.floor(Math.random() * 40) - 45/2;
            j.style.transform = 'rotate(' + i + 'deg)';
        });
    }
    if (t == "neutral") {
        const all = document.querySelectorAll('*');

        all.forEach((j) => {
            let i = Math.floor(Math.random() * 40) - 45/2;
            let k = Math.floor(Math.random() * 40) - 45/2;
            j.style.transform = 'translate(' + i + 'px,' + k + 'px)';
        });
    }
    if (t == "sad") {
        const all = document.querySelectorAll('*');

        all.forEach((j) => {
            j.style.transform = '';
        });
    }
    document.querySelectorAll('.emotionArea')[0].style.animationDirection = "reverse";
}