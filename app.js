const express = require('express');
const app = express();
const indexRouter = require("./routes/index");
const CarsRouter = require("./routes/cars");

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use('/', (req, res) => {
//     res.redirect('/cars');
// } )

app.use('/', indexRouter);
app.use('/cars', CarsRouter);

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 요청을 기다리는 중`);
})
