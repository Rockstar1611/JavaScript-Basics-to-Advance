class Vehicle
{
    usage="Trnsportation"
    start()
    {
        console.log("Vehicle is started")
    }
    stop()
    {
        console.log("Vehicle is stopped")
    }
}
class Car extends Vehicle
{
    noWheels=4;
    drive()
    {
        console.log("Drive a Car.!")
    }
    display1()
    {
        console.log("Number of wheels in a car is: "+this.noWheels)
        console.log("use of Car is: "+this.usage)
    }
}
class Bike extends Vehicle
{
    noWheels=2;
    ride()
    {
        console.log("Ride a Bike.!")
    }
    display2()
    {
        console.log("Numbers of wheels in a bike is: "+this.noWheels)
        console.log("ues of bike is: "+this.usage)
    }
}
let cr=new Car()
cr.start()
cr.drive()
cr.stop()
cr.display1()

let br=new Bike()
br.start()
br.ride()
br.stop()
br.display2()