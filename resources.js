var { fakeUser } = require("./common.js");
var {
  attributes,
  attrCategory,
  attrType,
  attrDepartment,
  attrGroup,
  attrTag,
  attrProtocol,
} = require("./attributes.js");
var faker = require("faker");

const enumStatus = ["enabled", "disabled"];

function fakeConnection(resourceId) {
  let linkNum = faker.random.number({ max: 3, min: 1 });
  let links = [];
  for (let i = 0; i < linkNum; i++) {
    links.push(faker.internet.email());
  }
  return {
    createTime: faker.date.between("2018-01-01", "2020-07-30")
      .toLocaleTimeString,
    description: faker.hacker.phrase(),
    fileTransfer: faker.random.boolean(),
    id: faker.random.number(99999),
    maxConnections: faker.random.number(20),
    maxConnectionsPerUser: faker.random.number(5),
    name: faker.random.word(),
    outerId: faker.random.number(99999),
    password: faker.internet.password(),
    port: faker.random.number({ min: 80, max: 99999 }),
    protocol: faker.random.arrayElement(attrProtocol.options),
    realm: faker.address.city(),
    riskScore: faker.random.number(10),
    sensitivityLevel: faker.random.number(5),
    sessionRecord: faker.random.boolean(),
    username: faker.internet.userName(),
    resourceId,
    links,
  };
}

function generateData() {
  var resources = [];
  var connections = [];

  for (let id = 0; id < 80; id++) {
    let c = faker.random.arrayElement(attrCategory.options);
    let t = faker.random.arrayElement(attrType.filterRules[c]);
    let createTime = faker.date
      .between("2018-01-01", "2020-07-30")
      .toISOString()
      .split("T");
    let hostname = faker.internet.domainName();
    let name = faker.random.word();
    let realm = faker.address.city();
    let resourceStatus = {
      cpu: faker.random.number(10),
    };
    let status = faker.random.arrayElement(enumStatus);
    let address = faker.internet.ip();
    let location = faker.random.word();
    let department = faker.random.arrayElement(attrDepartment.options);
    let route = faker.random.word();
    let connectionNumber = faker.random.number({ min: 1, max: 5 });
    for (let i = 0; i < connectionNumber; i++) {
      connections.push(fakeConnection(id));
    }
    let tagNumber = faker.random.number(5);
    let tagSet = new Set();
    let group = faker.random.arrayElement(attrGroup.options);
    for (let i = 0; i < tagNumber; i++) {
      tagSet.add(faker.random.arrayElement(attrTag.options));
    }
    let description = faker.hacker.phrase();
    resources.push({
      category: c,
      description,
      type: t,
      createTime,
      hostname,
      id,
      name,
      realm,
      resourceStatus,
      status,
      address,
      group,
      tags: [...tagSet],
      location,
      department,
      route,
    });
  }
  let users = [fakeUser(1, faker)];
  return { connections, resources, users, attributes };
}

module.exports = generateData;
