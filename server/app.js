const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to database

mongoose.connect('mongodb+srv://john:john123@cluster0.s8e1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log("connected to the database")
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
 schema,
 graphiql : true,
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});