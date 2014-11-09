
var numImages = 17;
var images = {
    ground: {
        url: "images/ground.png",
        image: new Image(),
    },
    ker: {
        url: "images/ker.png",
        image: new Image(),
    },
    evilPumpkin: {
        url: "images/evilPumpkinSmall.png",
        image: new Image(),
    },
    smashedPumpkin: {
        url: "images/smashed.png",
        image: new Image(),
    },
    pumpkinChild: {
        url: "images/pumpkinChild.png",
        image: new Image(),
    },
    alkoFront: {
        url: "images/alkoFrontSmall.png",
        image: new Image(),
    },
    alkoLeft0: {
        url: "images/alkoLeftSmall0.png",
        image: new Image(),
    },
    alkoLeft1: {
        url: "images/alkoLeftSmall1.png",
        image: new Image(),
    },
    alkoLeft2: {
        url: "images/alkoLeftSmall2.png",
        image: new Image(),
    },
    alkoLeft3: {
        url: "images/alkoLeftSmall1.png",
        image: new Image(),
    },
    alkoRight1: {
        url: "images/alkoRightSmall.png",
        image: new Image(),
    },
    alkoRight3: {
        url: "images/alkoRightSmall.png",
        image: new Image(),
    },
    alkoRight2: {
        url: "images/alkoRightSmall2.png",
        image: new Image(),
    },
    alkoRight0: {
        url: "images/alkoRightSmall0.png",
        image: new Image(),
    },
    woman: {
        url: "images/woman.png",
        image: new Image(),
    },
    womanCry: {
        url: "images/womanCry.png",
        image: new Image(),
    },
    house: {
        url: "images/dom.png",
        image: new Image(),
    },
    strom: {
        url: "images/stromT.png",
        image: new Image(),
    },
}
function loadResources(){
    for (var i in images) {
    images[i].image.onload = function () {
        if (--numImages == 0) {
            animate();
        }
    }
    images[i].image.src = images[i].url;
}
    
}


