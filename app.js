const { express, morgan, mongoose, expressLayouts, session, flash, bodyParser } = require('./app-utilities')

const app = express();
const PORT = process.env.port || 4000;

app.use(morgan('dev'));

// DB Config :
/* Is the line below necessary? Or can it remain in database-utilities */
const { db, dbOptions, dbConnection } = require('./database-utilities');

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))


// Passport Middleware
const passport = require('./config/passport')
app.use(passport.initialize());
app.use(passport.session());


// Views with EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// 
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Global Flash
app.use(flash());

// Global Vars:
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Adding 
app.use( express.static("public") ); 

// Routes:
app.use('/', require('./routes/index'));
app.use('/admin', require('./routes/admin'));
app.use('/register', require('./routes/register'));
app.use('/profile', require('./routes/profile'));
app.use('/login', require('./routes/login'));
app.use('/:id', require('./routes/display'));



app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));