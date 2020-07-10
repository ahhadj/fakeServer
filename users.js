var faker = require('faker');

function fakeUser(id) {
	let createTime = faker.date.between('2018-01-01', '2020-07-30').toDateString;
	let description = faker.hacker.phrase();
	let email = faker.internet.email();
	let enabled = faker.random.boolean();
	let firstName = faker.name.firstName();
	let lastName = faker.name.lastName();
	let outerId = faker.internet.mac();
	let phone = faker.phone.phoneNumber();
	let realm = faker.address.state();
	let username = faker.internet.userName();
	return {
		createTime,
		description,
		email,
		enabled,
		firstName,
		lastName,
		outerId,
		phone,
		realm,
		username
	};
}

function generateData() {
	let users = [];
	for (let id = 0; id < 80; id++) {
		users.push(fakeUser(id));
	}
	return { users };
}

module.exports = generateData;
