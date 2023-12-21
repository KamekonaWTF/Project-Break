function changeBg() {
    const images = [
        'url("./assets/wallpapers/bg1.jpg")',
        'url("./assets/wallpapers/bg2.jpg")',
        'url("./assets/wallpapers/bg3.jpg")',
        'url("./assets/wallpapers/bg4.jpg")',
        'url("./assets/wallpapers/bg5.jpg")',
        'url("./assets/wallpapers/bg6.jpg")',
        'url("./assets/wallpapers/bg7.jpg")',
        'url("./assets/wallpapers/bg8.jpg")',
        'url("./assets/wallpapers/bg9.jpg")',
        'url("./assets/wallpapers/bg0.jpg")',
    ]

    const bg = document.querySelector('.wallpaper')
    const bgRandom = images[Math.floor(Math.random()* images.length)];

    bg.style.backgroundImage = bgRandom;
}

setInterval(changeBg, 10000)
