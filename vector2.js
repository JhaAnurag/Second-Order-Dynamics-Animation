class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    subtract(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    multiply(s) {
        return new Vector2(this.x * s, this.y * s);
    }

    divide(s) {
        return new Vector2(this.x / s, this.y / s);
    }
}
