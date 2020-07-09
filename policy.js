var faker = require('faker');

const connectionTemplate = {
	createTime: 0,
	description: 'string',
	fileTransfer: true,
	id: 'string',
	maxConnections: 0,
	maxConnectionsPerUser: 0,
	name: 'string',
	outerId: 'string',
	password: 'string',
	port: 0,
	protocol: 'string',
	realm: 'string',
	riskScore: 0,
	sensitivityLevel: 0,
	sessionRecord: true,
	username: 'string'
};

const enumRuleType = [ 'equal', 'not equal', 'in', 'not in', 'include', 'contains' ];

function fakeValue(example) {
	switch (typeof example) {
		case 'number':
			return faker.random.number(100);
		case 'string':
			return faker.random.words(2);
		case 'boolean':
			return faker.random.boolean();
	}
}

function fakeConnectionRule() {
	let field = faker.random.arrayElement(Object.keys(connectionTemplate));
	let value = fakeValue(connectionTemplate[field]);
	return {
		field,
		type: faker.random.arrayElement(enumRuleType),
		value
	};
}

function fakePolicy(id) {
	let connectPolicy = {
		exclude: faker.random.boolean(),
		rules: []
	};
	let connectPolicyNumber = faker.random.number(5);
	for (let i = 0; i < connectPolicyNumber; i++) {
		connectPolicy.rules.push(fakeConnectionRule());
	}
	return {
		exclude: faker.random.boolean(),
		createTime: faker.date.between('2018-01-01', '2020-07-30').toDateString,
		endTime: faker.date.between('2018-01-01', '2020-07-30').toDateString,
		forbidden: faker.random.boolean(),
		id,
		name: faker.random.word(),
		connectPolicy
	};
}

function generateData() {
	let policyes = [];
	for (let id = 0; id < 80; id++) {
		policyes.push(fakePolicy(id));
	}
	return { policyes };
}

module.exports = generateData;
