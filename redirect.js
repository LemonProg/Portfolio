const github = document.querySelector("#github");
const insta = document.querySelector("#insta");
const youtube = document.querySelector("#youtube");
const tiktok = document.querySelector("#tiktok");
const tracker = document.querySelector("#tracker");

github.addEventListener("click", (ev) => {
    send("https://www.github.com/LemonProg");
    ev.preventDefault();
});
insta.addEventListener("click", (ev) => {
    send("https://www.instagram.com/nathan.cohencoffl/");
    ev.preventDefault();
});
youtube.addEventListener("click", (ev) => {
    send("https://www.youtube.com/channel/UC0ex4QAnse_LPZx2qKSv_Tw");
    ev.preventDefault();
});
tiktok.addEventListener("click", (ev) => {
    send("https://www.tiktok.com/@pocsky83");
    ev.preventDefault();
});
tracker.addEventListener("click", (ev) => {
    send("https://tracker.gg/valorant/profile/riot/LEMON%20%E3%82%B7%23ZORO/overview");
    ev.preventDefault();
});

function send(url) {
    window.open(url, '_blank');
};
    
