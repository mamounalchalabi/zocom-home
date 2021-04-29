const { app } = require('./core'); 
const { db, update } = require('./db')

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


// Here I get all devices from JSON.
app.get('/devices', (req, res) => {
    res.json(db)
})

// Here you can turn on the AC. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/ac/AC1/on"
app.get("/ac/:id/:on", (req, res) => {
    // I put ID so I can put for example; AC1 in the URL.
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let acControl = req.params.on === "on"
     ?
     true : false;
    
    // with db.get I just take whats inside the devices
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on for example temperature.
    .assign({ on: acControl , temperature:20 })
    .value();
    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `Ac ${id} is now ${acControl} ` });
  });


// Here you can turn on the blind. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/blind/BLI1/on"
  app.get("/blind/:id/:on", (req, res) => {
    // I put ID so I can put for example; BLI1 in the URL.
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let blindControl = req.params.on === "on"
     ?
     true : false;

  // with db.get I just take whats inside the devices
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ on: blindControl, state:"down" })
    .value();
    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `Blind ${id} is now ${blindControl} ` });
  })

// Here you can turn on the lights. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/lights/LIG1/on"
  app.get("/lights/:id/:on", (req, res) => {
    // I put ID so I can put for example; LIG1 in the URL.
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let lightsControl = req.params.on === "on"
     ?
     true : false;

    // with db.get I just take whats inside the devices
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ on: lightsControl ,brightness:0.8 ,color:"#ED16FF" })
    .value();
    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `light ${id} is now ${lightsControl}` });
  });

// Here you can turn on the camera faking. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/camera/CAM1/on"
  app.get("/camera/:id/:on", (req, res) => {
    // I put ID so I can put for example; CAM1 in the URL.   
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let cameraControl = req.params.on === "on"
     ?
     true : false;

    // with db.get I just take whats inside the devices 
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ on: cameraControl })

    .value();

    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `Camera ${id} is now ${cameraControl}` });
  });

// Here you can open the lock. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/lock/LOC1/on"
  app.get("/lock/:id/:locked", (req, res) => {
    // I put ID so I can put for example; CAM1 in the URL.  
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let lockControl = req.params.locked === "on"
     ?
     true : false;

    // with db.get I just take whats inside the devices 
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ locked: lockControl, code:8899 })
    .value();

    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `lock ${id} is now ${lockControl}` });
  });

// Here you can turn on the vacuum. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/vacuum/VAC1/on"
  app.get("/vacuum/:id/:on", (req, res) => {
    // I put ID so I can put for example; CAM1 in the URL.      
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let vacuumControl = req.params.on === "on"
     ?
     true : false;

    // with db.get I just take whats inside the devices 
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ on: vacuumControl })
    .value();

    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `Vacuum ${id} is now ${vacuumControl}` });
  });


// Here you can turn on the vacuum. You can also turn it off by typing instead of /on, do like /off
// "https://localhost:3000/speaker/SPE1/on"
  app.get("/speaker/:id/:on", (req, res) => {
    // I put ID so I can put for example; CAM1 in the URL.  
    let id = req.params.id;
    // I have a variabel that checks if its on then its true, else its false.
    let speakerControl = req.params.on === "on"
     ?
     true : false;

    // with db.get I just take whats inside the devices 
    db.get("devices")
    .find({ id: id })
    // with .assign I can turn on whatever I write inside assign.
    .assign({ on: speakerControl, stream:{name : 'Astronaut In The Ocean'} })
    .value();
    
    // Here it will update so it can refresh the front-end page.
    update();
  
    res.send({ msg: `Speaker ${id} is now ${speakerControl}` });
  });


