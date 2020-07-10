var { fakeUser } = require('./common.js');
var faker = require('faker');

const categories = [
	{
		category: 'Desktop',
		types: [ 'Windows', 'Linux', 'Mac' ]
	},
	{
		category: 'Workstation',
		types: [ 'Windows', 'Linux', 'Mac' ]
	},
	{
		category: 'Server',
		types: [ 'Windows', 'Linux', 'Unix' ]
	},
	{
		category: 'WebApp',
		types: [ 'WebApp' ]
	},
	{
		category: 'C/S App',
		types: [ 'C/S App' ]
	},
	{
		category: 'File',
		types: [ 'pdf', 'image', 'word', 'excel', 'ppt' ]
	},
	{
		category: 'Folder',
		types: [ 'Folder' ]
	}
];

const enumStatus = [ 'enabled', 'disabled' ];

function fakeConnection() {
	return {
		createTime: faker.date.between('2018-01-01', '2020-07-30').toLocaleTimeString,
		description: faker.hacker.phrase(),
		fileTransfer: faker.random.boolean(),
		id: faker.random.number(99999),
		maxConnections: faker.random.number(20),
		maxConnectionsPerUser: faker.random.number(5),
		name: faker.name.title(),
		outerId: faker.random.number(99999),
		password: faker.internet.password(),
		port: faker.random.number({ min: 80, max: 99999 }),
		protocol: faker.internet.protocol(),
		realm: faker.address.city(),
		riskScore: faker.random.number(10),
		sensitivityLevel: faker.random.number(5),
		sessionRecord: faker.random.boolean(),
		username: faker.internet.userName()
	};
}

function generateData() {
	var resources = [];

	for (let id = 0; id < 80; id++) {
		let c = faker.random.arrayElement(categories);
		let t = faker.random.arrayElement(c.types);
		let createTime = faker.date.between('2018-01-01', '2020-07-30').toISOString().split('T');
		let hostname = faker.internet.domainName();
		let name = faker.system.fileName();
		let realm = faker.address.city();
		let resourceStatus = {
			cpu: faker.random.number(10)
		};
		let status = faker.random.arrayElement(enumStatus);
		let ip = faker.internet.ip();
		let connections = [];
		let connectionNumber = faker.random.number(10);
		for (let i = 0; i < connectionNumber; i++) {
			connections.push(fakeConnection());
		}
		let tags = [];
		let tagNumber = faker.random.number(5);
		for (let i = 0; i < tagNumber; i++) {
			tags.push(faker.hacker.noun());
		}
		resources.push({
			category: c.category,
			type: t,
			createTime,
			hostname,
			id,
			name,
			realm,
			resourceStatus,
			status,
			ip,
			tags,
			connectList: connections
		});
	}
	let users = [ fakeUser(1, faker) ];
	return { resources, users };
}

module.exports = generateData;
