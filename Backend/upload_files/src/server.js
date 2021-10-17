
const app = require('./index')
const connect = require('./configs/db');
const usersController = require('./controllers/user.controller');
const galleryController = require('./controllers/gallery.controller');

app.use('/users',usersController);
app.use('/gallerys',galleryController);
app.listen(3001, async function() {
    await connect();
    console.log("listening on 3001");
    })


