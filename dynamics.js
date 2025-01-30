class SecondOrderDynamics {
    constructor(f, z, r, x0) {
        this.updateConstants(f, z, r);
        this.xp = x0;
        this.y = x0;
        this.yd = new Vector2();
    }

    updateConstants(f, z, r) {
        const safeF = Math.max(f, 0.0001);
        this.k1 = z / (Math.PI * safeF);
        this.k2 = 1 / ((2 * Math.PI * safeF) * (2 * Math.PI * safeF));
        this.k3 = r * z / (2 * Math.PI * safeF);
    }

    update(T, x, xd = null) {
        if (!xd) {
            xd = x.subtract(this.xp).divide(T);
            this.xp = x;
        }
        this.y = this.y.add(this.yd.multiply(T));
        const acceleration = x.add(xd.multiply(this.k3))
                            .subtract(this.y)
                            .subtract(this.yd.multiply(this.k1))
                            .divide(this.k2);
        this.yd = this.yd.add(acceleration.multiply(T));
        return this.y;
    }
}
