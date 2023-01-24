const express = require('express');
const app = express();

const verifTime=(req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    // if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    //     next();
    // } else {
    //    return res.status(503).send('Service Unavailable');
    // }

    if(currentDay == 0 || currentDay == 6 ||currentHour < 9 || currentHour>17){
        return res.status(503).send('Service Unavailable');
    }
    next()
};
app.use(verifTime)


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Homepage.html')
})


app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+'/OurServices.html')
})


app.get('/Contactus',(req,res)=>{
    res.sendFile(__dirname+'/Contactus.html')
})










app.listen(5000, () => {
    console.log('Server running on port 5000');
});