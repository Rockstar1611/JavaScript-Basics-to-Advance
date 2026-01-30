class Car
{
    setValues(brand,price,color)
    {
        this.brand=brand;
        this.price=price;
        this.color=color;
    }
    move()
    {
        console.log("Car is Moving.!")
    }
    getValues()
    {
        console.log("Brand: "+this.brand)
        console.log("Price: "+this.price)
        console.log("Color: "+this.color)
    }
}
let cr=new Car()
cr.setValues("Tata",1500000,"Black")
cr.move()
cr.getValues()