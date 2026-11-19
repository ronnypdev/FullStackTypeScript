export {};

namespace AbstractNamespace {
  class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`wheels: ${this.wheelCount}`);
    }
  }
}

class MotorCycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
    console.log(`MotorCycle has ${this.wheelCount}`);
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
    console.log(`MotorCycle has ${this.wheelCount}`);
  }

  showNumberOfWheels() {
    console.log(`wheels: ${this.wheelCount}`);
  }
}

const motorCycle = new MotorCycle();
motorCycle.updateWheelCount(1);
const autoMobile = new Automobile();
autoMobile.updateWheelCount(3);
