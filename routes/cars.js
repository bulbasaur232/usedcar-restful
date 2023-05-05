const express = require('express');
const router = express.Router();

class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let cars = [
    new Car('ferrari', 'red'),
    new Car('bmw', 'blue'),
    new Car('benz', 'black'),
    new Car('porsche', 'gray'),
];


//GET, 전체 car 조회 
router.get('/', (req, res, next) => {
    res.json(cars);
});

//GET, 단일 car 조회, route parameter로 받음
router.get('/:name', (req, res, next) => {
    const { name: findName } = req.params;
    res.json(cars.find((car) => 
        car.name == findName
    ));
});

//POST, 새로운 car 등록, form-data로 받음
router.post("/", (req, res, next) => {
    const {name, color} = req.body;
    newCar = new Car(name, color);
    cars.push(newCar);

    res.json(newCar);
});

//PATCH, 기존의 car 색깔 수정, query string으로 받음
router.patch('/', (req, res, next) => {
    const { name: findName, color:newColor } = req.query;
    cars.map((car) => {
        if(car.name === findName){
            car.color = newColor;
        }
        return car;
    })

    res.json(cars);
});

//DELETE, 지정한 car 삭제, route parameter로 받음
router.delete('/:name', (req, res, next) => {
    const { name: delName } = req.params;
    cars = cars.filter((car) => 
        car.name !== delName
    );

    return res.json(cars);
});

module.exports = router;