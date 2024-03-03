class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const myCircle = new Circle();
console.log(myCircle.toString()); // circle[radius=1,color=red]
console.log("Area:", myCircle.getArea()); // Area: 3.141592653589793
console.log("Circumference:", myCircle.getCircumference()); // Circumference: 6.283185307179586
myCircle.setRadius(2.5);
console.log(myCircle.toString()); // circle[radius=2.5,color=red]
