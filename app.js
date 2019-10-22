const { express, morgan, mongoose, expressLayouts } = require('./app-utilities')


const app = express();
const PORT = process.env.port || 4000;

app.use(morgan('dev'));

const { db, dbOptions, dbConnection } = require('./database-utilities');
mongoose.connect(db, dbOptions, dbConnection);

app.set('view engine', 'ejs')

app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/admin'))
app.use('/register', require('./routes/register'))
app.use('/profile', require('./routes/profile'))

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));

