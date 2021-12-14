
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true // validation
	},
	email: {
		type: String,
		required: true	
	},
	password: {
		type: String,
		required: true	
	}
}, { timestamps: true }); // keeps timestamps for CRUD actions to our models

// Lets create a model
// We pass the name of the model as a first argument
// The name is important. It will pluralize it and look for a collection in our db
// We pass the schema as the second argument
const User = mongoose.model('User', userSchema)

module.exports = User // export it to use it somewhere else in the application

