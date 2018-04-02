const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const pg = require('pg');

const userController = require('./controllers/userController');
const periodController = require('./controllers/periodController');
const symptomController = require('./controllers/symptomController');
const exportController = require('./controllers/exportController');

const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

const app = express();

<<<<<<< HEAD

//from app.js
const pg = require('pg');
// const passportSetup = require('./config/passport-setup');
// const keys = require('./config/keys');
app.set('view engine', 'ejs');

=======
>>>>>>> 1a152fcc929fcd27fa01e4236715931caf3e32eb
app.use('/auth', authRoutes);

const db = require ('./models/db');
const PORT = 3000;

app.set('view engine', 'ejs');

// Automatically parse urlencoded body content from incoming requests and
// place it in req.body
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './')));
///////////////////////////////////////////////////////////////////////////////

//FIXME 
app.get('/initialCalendar', (req, res) => {
    let calState = {
        calendar: {
            Jan: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Feb: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Mar: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Apr: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            May: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Jun: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Jul: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Aug: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Sep: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Oct: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Nov: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [],
            },
            Dec: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: [],
                8: [],
                9: [],
                10: [],
                11: [],
                12: [],
                13: [],
                14: [],
                15: [],
                16: [],
                17: [],
                18: [],
                19: [],
                20: [],
                21: [],
                22: [],
                23: [],
                24: [],
                25: [],
                26: [],
                27: [],
                28: [],
                29: [],
                30: [],
                31: [
                    {
                        symptoms: [

                        ],
                        period: [

                        ]
                    },
                ],
            },
        }
    };
    res.send(JSON.stringify(calState));
});
/////////////////////////////////////////////////////////////////////////////////

app.use(cookieSession({
    keys: [keys.session.cookieKey],
    maxAge: 24 * 60 * 60 * 1000
  }));
  app.use(cookieParser());

///////////////////////////////////////////////////////////////////////////////

//needs to be after the cookieSession is set
app.use(passport.initialize());
app.use(passport.session());

//set authorize routes
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.render('home');
});

//from app.js
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './views/style.css'));
  })
  app.get('/login', (req, res) => {
    res.render('login');
  })

  app.get('/auth', authRoutes);


app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, './views/style.css'));
  })


app.get('/login', (req, res) => {
res.render('login');
})

app.get('/main', (req, res) => {
res.render('main');
})

app.get('/logout', (req, res) => {
req.logout();
req.session = null;
res.redirect('/logout');
})

app.post('/signup', userController.createUser);
app.post('/period/create', periodController.createPeriod);
app.post('/period/readAll', periodController.readPeriod);
app.post('/period/update/', periodController.updatePeriod);
app.post('/period/delete/', periodController.deletePeriod);
app.post('/symptom/create', symptomController.createSymptom);
app.post('/symptom/readAll', symptomController.readSymptom);
app.post('/symptom/update/', symptomController.updateSymptom);
app.post('/symptom/delete/', symptomController.deleteSymptom);
app.post('/export/csv', exportController.getSymptoms,
                        exportController.exportCSV);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
