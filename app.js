const { express, morgan, mongoose, expressLayouts, passport, session } = require('./app-utilities')

const app = express();
const PORT = process.env.port || 4000;

app.use(morgan('dev'));

// DB Config:
const { db, dbOptions, dbConnection } = require('./database-utilities');


// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport Middleware
require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());

// Views with EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Routes:
app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/admin'))
app.use('/register', require('./routes/register'))
app.use('/profile', require('./routes/profile'))
app.use('/login', require('./routes/login'))



app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

