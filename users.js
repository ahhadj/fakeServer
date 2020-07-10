var { fakeUser } = require('./common.js');
var faker = require('faker');

function generateData() {
	let users = [];
	for (let id = 0; id < 80; id++) {
		users.push(fakeUser(id, faker));
	}
	return { users };
}

module.exports = generateData;
