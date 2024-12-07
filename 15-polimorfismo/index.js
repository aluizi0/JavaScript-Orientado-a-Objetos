class vehicle{
    move(){
        console.log('Moving');
    }
}

class Car extends vehicle{
    move(){
        console.log('Driving');
    }
}

class Ship extends vehicle{
    move(){
        console.log('Sailing');
    }
}

class Aircraft extends vehicle{
    move(speed){
        console.log(`Flying at ${speed} km/h`);
    }
}

const delorean = new Car();
const blackPearl = new Ship();
const epoch = new Aircraft();

//delorean.move();
//blackPearl.move();
//epoch.move(80);

function start(vehicle){
    console.log('Starting vehicle');
    vehicle.move();
}

start(delorean);
start(blackPearl);
start(epoch);