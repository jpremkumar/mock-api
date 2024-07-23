// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = '192.168.1.87'


app.listen(PORT, IP_ADDRESS, () => {
    console.log("Server Listening on PORT:", PORT);
});


app.get('/status', (request, response) => {
    const status = {
        'Status': 'Running'
    };
    response.send(status);
});


const trip = [
        {
            "date": "2019-01-01",
            "trip": 78,
            "tonnage": 2055.36,
            "location": "KH Waste - Bottom dump"
        },
        {
            "date": "2019-01-01",
            "trip": 4,
            "tonnage": 106.55,
            "location": "KH ROM - MSP"
        },
        {
            "date": "2019-01-01",
            "trip": 0,
            "tonnage": 0,
            "location": "KH ROM- METSO"
        },
        {
            "date": "2019-01-02",
            "trip": 78,
            "tonnage": 2055.36,
            "location": "KH Waste - Bottom dump"
        },
        {
            "date": "2019-01-02",
            "trip": 4,
            "tonnage": 106.55,
            "location": "KH ROM - MSP"
        },
        {
            "date": "2019-01-02",
            "trip": 0,
            "tonnage": 0,
            "location": "KH ROM- METSO"
        }
    ];
// };

app.post('/trip', (request, response) => {
    // fetch('./data/ds-trip.json')
    //     .then(response => response.json())
    //     .then(data => {
    response.status(200).send(trip);
    // });
});