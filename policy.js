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

const resourceTemplate = {
	category: 'string',
	createTime: 0,
	hostname: 'string',
	id: 'string',
	name: 'string',
	realm: 'string',
	riskScore: 0,
	tags: []
};

const userTemplate = {
	description: 'string',
	email: 'string',
	enabled: true,
	firstName: 'string',
	id: 'string',
	lastName: 'string',
	outerId: 'string',
	phone: 'string',
	realm: 'string',
	username: 'string',
	createTime: 0
};

function fakeValue(field, example) {
	if (field.includes('Time')) {
		return faker.date.between('2018-01-01', '2020-07-30').toDateString;
	}
	if (Array.isArray(example)) {
		let arr = [];
		let length = faker.random.number(3);
		for (let i = 0; i < length; i++) {
			arr.push(faker.random.word());
		}
		return arr;
	}
	switch (typeof example) {
		case 'number':
			return faker.random.number(100);
		case 'string':
			return faker.random.words(2);
		case 'boolean':
			return faker.random.boolean();
	}
}

function fakeRuleWithTemplate(template) {
	let field = faker.random.arrayElement(Object.keys(template));
	let value = fakeValue(field, template[field]);
	return {
		field,
		type: faker.random.arrayElement(enumRuleType),
		value
	};
}

function fakePolicyWithTemplate(template) {
	let policy = {
		exclude: faker.random.boolean(),
		rules: []
	};
	let ruleNumber = faker.random.number(5);
	for (let i = 0; i < ruleNumber; i++) {
		policy.rules.push(fakeRuleWithTemplate(template));
	}
	return policy;
}

function fakePolicy(id) {
	let connectPolicy = fakePolicyWithTemplate(connectionTemplate);
	let resourcePolicy = fakePolicyWithTemplate(resourceTemplate);
	let resourceStatusPolicy = fakePolicyWithTemplate(resourceTemplate);
	let userPolicy = fakePolicyWithTemplate(userTemplate);
	let userStatusPolicy = fakePolicyWithTemplate(userTemplate);
	return {
		exclude: faker.random.boolean(),
		createTime: faker.date.between('2018-01-01', '2020-07-30').toDateString,
		startTime: faker.date.between('2018-01-01', '2020-07-30').toDateString,
		endTime: faker.date.between('2018-01-01', '2020-07-30').toDateString,
		forbidden: faker.random.boolean(),
		id,
		name: faker.random.word(),
		connectPolicy,
		resourcePolicy,
		resourceStatusPolicy,
		userPolicy,
		userStatusPolicy
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
