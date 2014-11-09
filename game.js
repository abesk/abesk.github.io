window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();
var ctx = document.getElementById('canvas').getContext('2d');
var leftPress = false;
var rightPress = false;
var upPress = false;
var downPress = false;
var time = new Date();

document.addEventListener("keyup", function (event) {

    if (event.keyCode == 37) {
        leftPress = false;
        if (rightPress) {
            alko.scaleX = 1;
        }
    }
    if (event.keyCode == 39) {
        rightPress = false;
        if (leftPress) {
            alko.scaleX = -1;
        }
    }
    if (event.keyCode == 38) {
        upPress = false;
        if (downPress) {
            alko.scaleY = 1;
        }
    }
    if (event.keyCode == 40) {
        downPress = false;
        if (upPress) {
            alko.scaleY = -1;
        }
    }
    if (!(rightPress || leftPress)) {
        alko.movingX = false;
        alko.accelerationX = 0;
        alko.speedX = 0;
    }
    if (!(downPress || upPress)) {
        alko.movingY = false;
        alko.accelerationY = 0;
        alko.speedY = 0;
    }
});
document.addEventListener("keydown", function (event) {
    //left
    //left
    if (event.keyCode == 37) {
        if (alko.scaleX == 1) {
            alko.accelerationX = 0;
        }
        alko.scaleX = -1;
        alko.accelerationX = 0.1;
        alko.movingX = true;
        leftPress = true;
    }
    //up
    if (event.keyCode == 38) {
        if (alko.scaleY == 1) {
            alko.accelerationX = 0;
        }
        alko.scaleY = -1;
        alko.accelerationY = 0.1;
        alko.movingY = true;
        upPress = true;
    }
    if (event.keyCode == 40) {
        if (alko.scaleY == -1) {
            alko.accelerationX = 0;
        }
        alko.scaleY = 1;
        alko.accelerationY = 0.1;
        alko.movingY = true;
        downPress = true;
    }
    if (event.keyCode == 39) {

        if (alko.scaleX == -1) {
            alko.accelerationX = 0;
        }
        alko.scaleX = 1;

        alko.accelerationX = 0.1;
        alko.movingX = true;
        rightPress = true;

    }
    return false;
});

var numImages = 13;
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
    house: {
        url: "images/dom.png",
        image: new Image(),
    },
    strom: {
        url: "images/stromT.png",
        image: new Image(),
    },
}
for (var i in images) {
    images[i].image.onload = function () {
        if (--numImages == 0) {
            animate();
        }
    }
    images[i].image.src = images[i].url;
}


var alko = {
    x: 55 * 1 + 55 / 2,
    y: 55 * 1 + 55 / 2,
    width: 22,
    height: 50,
    speedX: 0,
    speedY: 0,
    accelerationX: 0,
    accelerationY: 0,
    scaleX: 1,
    scaleY: 0,
    velocityX: 0,
    velocityY: 0,
    frame: 0
}



var Pumpkin = function (x, y, dir) {
    this.x = x || 0;
    this.y = y || 0;
    this.direction = dir || 0;



    var moveToDirection = function (direction) {
        direction = direction % 4;
        if (direction == 0) {
            return [0, -1];
        } else if (direction == 1) {
            return [1, 0];
        }
        else if (direction == 2) {
            return [0, 1];

        } else if (direction == 3) {
            return [-1, 0];
        }
        console.log(direction);
        return [0, 0];
    }

    this.move = function () {
        var move = moveToDirection(this.direction);
        this.x += move[0] * 2.75;
        this.y += move[1] * 2.75;

    }

    this.nextMove = function () {
        var x = this.x / 55;
        var y = this.y / 55;
        var right = moveToDirection(this.direction + 1);
        var up = moveToDirection(this.direction);

        var left = moveToDirection(this.direction + 3);
        var down = moveToDirection(this.direction + 2);

        if (map[y + right[1]][x + right[0]] == " ") {
            this.direction += 1;
        } else if (map[y + up[1]][x + up[0]] == " ") {
            //do nothing
        } else if (map[y + left[1]][x + left[0]] == " ") {
            this.direction += 3;
        } else {
            this.direction += 2;
        }

        this.direction = this.direction % 4;

    }

}

var pumpkins = [
    new Pumpkin(55, 55 * (map.length - 2)),
    new Pumpkin(55 * (map[0].length - 2), 55 * (map.length - 2)),
            //new Pumpkin(18*55, 6*55, 2)
]

var smashed = [];

var detectCollision = function (rect1, rect2) {
    return (rect1.x - rect1.width / 2 < rect2.x + rect2.width / 2 &&
            rect1.x + rect1.width / 2 > rect2.x - rect2.width / 2 &&
            rect1.y - rect1.height / 2 < rect2.y + rect2.height / 2 &&
            rect1.height / 2 + rect1.y > rect2.y - rect2.height / 2);
}


var mapCollision = function (obj) {
    var collision = false;
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[0].length; x++) {
            if (map[y][x] == "#" && detectCollision(obj, {
                x: x * 55 + 55 / 2,
                y: y * 55 + 55 / 2,
                width: 55,
                height: 55,
            })) {
                collision = true;
                break;
            }
        }
    }
    return collision;
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(214, 91, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (alko.movingX) {

        alko.speedX = alko.speedX + alko.accelerationX;
        if (alko.speedX > 5) {
            alko.speedX = 5;
        }

        alko.velocityX = alko.speedX * alko.scaleX;
        //alko.velocityY = alko.speed + alko.scaleY;
    } else {
        alko.velocityX = 0;
    }
    if (alko.x < 10) {
        alko.x = 10;
    }
    if (alko.x > 1190) {
        alko.x = 1190;
    }
    if (alko.movingY) {

        alko.speedY = alko.speedY + alko.accelerationY;
        if (alko.speedY > 5) {
            alko.speedY = 5;
        }
        alko.velocityY = alko.speedY * alko.scaleY;
    } else {
        alko.velocityY = 0;
    }
    if (!mapCollision({
        x: alko.x + alko.velocityX,
        y: alko.y + alko.velocityY,
        width: alko.width / 2,
        height: alko.height /2
    })) {
        alko.x = alko.x + alko.velocityX;
        alko.y = alko.y + alko.velocityY;
    }


    for (var i = 0; i < pumpkins.length; i++) {
        if (!pumpkins[i])
            continue;
        if (detectCollision(alko, {
            x: pumpkins[i].x + 55 / 2,
            y: pumpkins[i].y + 55 / 2,
            width: 25,
            height: 25
        })) {

            smashed.push(pumpkins[i]);
            delete pumpkins[i];
        }
    }

    pumpkins.forEach(function (pumpkin) {
        if (pumpkin.x % 55 == 0 && pumpkin.y % 55 == 0) {
            pumpkin.nextMove();
        }
        pumpkin.move();
    });


     
    var alkoImg = images.alkoFront.image;
    var noseOffset = 20;
    var xOffset = -12;
    var yOffset = -22;
    var now = new Date();
    if(now - time > 600/(alko.speedX*1.5 +1)){
        time = now;
        alko.frame = ++alko.frame % 4; 
        
    }
    if (alko.movingX) {
        alkoImg = (alko.scaleX == 1) ?  images["alkoRight"+alko.frame].image : images["alkoLeft"+alko.frame].image;
        xOffset = -28;
        yOffset = -21;
    }

    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[0].length; x++) {
            ctx.drawImage(images.ground.image, x * 55, y * 55 + 55);

        }
    }
    var alinoDrawed = false;
    smashed.forEach(function(pumpkin){
        pumpkin.rendered= false;
    })
    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[0].length; x++) {
            if (map[y][x] == "#") {
                ctx.drawImage(images.ker.image, x * 55, y * 55 + 55 - 23);
            }
        }
        smashed.forEach(function (pumpkin) {
            if(!pumpkin.rendered &&  pumpkin.y < y * 55 + 55){
                ctx.drawImage(images.smashedPumpkin.image, pumpkin.x, pumpkin.y + 11 + 55);
                pumpkin.rendered = true;
            }
        })
        if (!alinoDrawed && alko.y < y * 55 + 55) {
            ctx.drawImage(alkoImg, alko.x + xOffset, alko.y + yOffset + 55);
            alinoDrawed = true;
        }
    }

    ctx.drawImage(images.house.image, 1000, 0);
    ctx.drawImage(images.woman.image, 1110, 25);
    smashed.forEach(function (pumpkin) {
        if(!pumpkin.rendered){
            ctx.drawImage(images.smashedPumpkin.image, pumpkin.x, pumpkin.y + 11 + 55);
        }
    })

    pumpkins.forEach(function (pumpkin) {
        if (!alinoDrawed && alko.y < pumpkin.y) {
            ctx.drawImage(alkoImg, alko.x + xOffset, alko.y + yOffset + 55);
            alinoDrawed = true;
        }
        ctx.drawImage(images.evilPumpkin.image, pumpkin.x, pumpkin.y + 55);

    });
    if (!alinoDrawed) {
        ctx.drawImage(alkoImg, alko.x + xOffset, alko.y + yOffset + 55);
    }
   
   ctx.drawImage(images.strom.image, 500, 420);




    requestAnimFrame(function () {
        animate();
    });
}

