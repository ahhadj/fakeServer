var { fakeUser } = require("./common.js");
var faker = require("faker");

const categories = [
  {
    category: "Desktop",
    types: ["Windows", "Linux", "Mac"],
  },
  {
    category: "Workstation",
    types: ["Windows", "Linux", "Mac"],
  },
  {
    category: "Server",
    types: ["Windows", "Linux", "Unix"],
  },
  {
    category: "WebApp",
    types: ["WebApp"],
  },
  {
    category: "C/S App",
    types: ["C/S App"],
  },
  {
    category: "File",
    types: ["pdf", "image", "word", "excel", "ppt"],
  },
  {
    category: "Folder",
    types: ["Folder"],
  },
];

const attrType = {
  id: "type",
  type: "enum",
  values: [
    "Windows",
    "Linux",
    "Mac",
    "Unix",
    "WebApp",
    "C/S App",
    "pdf",
    "image",
    "word",
    "excel",
    "ppt",
    "Folder",
  ],
};

const attrCategory = {
  id: "category",
  type: "enum",
  values: [
    "Desktop",
    "Workstation",
    "Server",
    "WebApp",
    "C/S App",
    "File",
    "Folder",
  ],
};

const attrName = {
  id: "name",
  type: "string",
  values: [],
};

const attrGroup = {
  id: "group",
  type: "enum",
  values: [
    "Security",
    "Finance",
    "Human Resource",
    "R&D",
    "IT",
    "Sales",
    "Marketing",
  ],
};
const attrProtocol = {
  id: "protocol",
  type: "enum",
  values: ["SSH", "HTTPS", "RDP"],
};
const attrTag = {
  id: "tags",
  type: "enum",
  values: ["risk", "safe", "read only", "read write", "sensative"],
};

const attributes = [
  attrType,
  attrCategory,
  attrGroup,
  attrProtocol,
  attrTag,
  attrName,
];

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
    protocol: faker.random.arrayElement(attrProtocol.values),
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
    let c = faker.random.arrayElement(categories);
    let t = faker.random.arrayElement(c.types);
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
    let ip = faker.internet.ip();
    let connectionNumber = faker.random.number({ min: 1, max: 5 });
    for (let i = 0; i < connectionNumber; i++) {
      connections.push(fakeConnection(id));
    }
    let tagNumber = faker.random.number(5);
    let tagSet = new Set();
    let group = faker.random.arrayElement(attrGroup.values);
    for (let i = 0; i < tagNumber; i++) {
      tagSet.add(faker.random.arrayElement(attrTag.values));
    }
    let description = faker.hacker.phrase();
    resources.push({
      category: c.category,
      description,
      type: t,
      createTime,
      hostname,
      id,
      name,
      realm,
      resourceStatus,
      status,
      ip,
      group,
      tags: [...tagSet],
    });
  }
  let users = [fakeUser(1, faker)];
  return { connections, resources, users, attributes };
}

module.exports = generateData;
