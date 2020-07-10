function fakeUser(id, faker) {
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
		id,
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

module.exports = { fakeUser };
