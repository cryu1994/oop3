function VehicleConstructor(Name, Wheels, Speed, Passengers){
    if(!(this instanceof VehicleConstructor)){
        console.log("returning the cars and more things");
        return new VehichelConstructor(Name, Wheels, Passengers, Speed);
    }
    word = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.distance_traveled = 0;
    this.name = Name;
    this.wheels = Wheels;
    this.speed = Speed;
    this.passengers = Passengers;
    this.vin = createvin();
    VehicleConstructor.prototype.noise = function(){
        var noise = "Hi, I am a " + this.name + ". I have " + this.wheels + " wheels and I can go up to " + this.speed + ". I can have " + this.passengers + " passengers";
        console.log(noise);
        return this;
    };
    VehicleConstructor.prototype.update_distance = function(){
        this.distance_traveled += this.speed;
        return this.distance_traveled;
    };
    VehicleConstructor.prototype.check_mile = function () {
        console.log("Miles: " + this.distance_traveled);
        return this;
    };
    VehicleConstructor.prototype.move = function(){
        this.noise();
        this.update_distance();
        return this;
    };
    function createvin () {
        var vin = "";
        for(var i = 0; i < 7; i++){
            vin += word[Math.floor(Math.random()* 35)];
            console.log(vin);
        }
        return vin;
    }

}

var car = new VehicleConstructor('Audi', 4, 4 ,25);
car.move().check_mile();