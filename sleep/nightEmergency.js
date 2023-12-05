let link = "https://emergency.nofap.com/redirect?religious=true&cat=em"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pushTheButton() {
    document.getElementById("press").play();
    document.getElementById("emergency-button").style.color = 'white';
    await sleep(1750);
    window.innerWidth > 812 ? window.open(link,"_blank") : location.href = link
    await sleep(1750);
    document.getElementById("emergency-button").style.color = 'red';
}