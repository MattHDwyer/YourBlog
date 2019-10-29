const { express, morgan, mongoose, expressLayouts, passport, session, flash } = require('./app-utilities')

const app = express();
const PORT = process.env.port || 4000;

app.use(morgan('dev'));

// DB Config:
const { db, dbOptions, dbConnection } = require('./database-utilities');


// Passport Middleware
require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());


// Views with EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// 
app.use(express.urlencoded({ extended: false }))


// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Global Flash
app.use(flash());

// Global Vars:
app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});



// Routes:
app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/admin'))
app.use('/register', require('./routes/register'))
app.use('/profile', require('./routes/profile'))
app.use('/login', require('./routes/login'))



app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

