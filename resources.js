var { fakeUser } = require("./common.js");
var {
  attributes,
  attrCategory,
  attrType,
  attrDepartment,
  attrGroup,
  attrTag,
  attrProtocol,
  attrConnectType,
  attrSensitivityLevel,
  attrCredentialType
} = require("./attributes.js");
var faker = require("faker");

const enumStatus = ["enabled", "disabled"];

function fakeConnection(resourceId) {
  const credentialCount = faker.random.number(3);
  let credential = [];
  for (let i = 0; i < credentialCount; ++i) {
    const type = faker.random.arrayElement(attrCredentialType.options);
    const value = faker.internet.password();
    credential.push({
      type,
      value
    })
  }
  const type = faker.random.arrayElement(attrConnectType.options);
  const protocol = faker.random.arrayElement(attrProtocol.filterRules[type]);
  return {
    createTime: faker.date.between("2018-01-01", "2020-07-30")
      .toLocaleTimeString,
    description: faker.hacker.phrase(),
    id: faker.random.number(99999),
    maxConnections: faker.random.number(20),
    maxConnectionsPerUser: faker.random.number(5),
    name: faker.random.word(),
    outerId: faker.random.number(99999),
    type,
    protocol,
    port: faker.random.number({ min: 80, max: 99999 }),
    account: faker.random.word(),
    sensitivity_level: faker.random.arrayElement(attrSensitivityLevel.options),
    risk_score: faker.random.number(10),
    credential,
    allow_copy: faker.random.boolean(),
    allow_paste: faker.random.boolean(),
    allow_file_download: faker.random.boolean(),
    allow_file_update: faker.random.boolean(),
    commands_allowed: [
      {
        action: "mount",
        command: "smbmount_dir"
      }
    ],
    commands_not_allowd: [
      {
        action: "mount",
        command: "smbmount_dir"
      }
    ],
    resourceId
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
