const server = require('./server');
// Ahmed comment Dec3
const port = process.env.PORT || 3000;

server.create()
    .then(app => {
        app.listen(port, () => {
            console.log(`Server has started on port ${port}!`);
        });
    }).catch(err => console.log(err));
