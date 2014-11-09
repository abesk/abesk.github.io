var alko = {
    x: 55  + 55 / 2,
    y: 55  + 55 / 2,
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

var mother ={
    x: 55 * (map[0].length - 2), 
    y: 55,
    hasChild: true,
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