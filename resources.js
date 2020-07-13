var { fakeUser } = require("./common.js");
var faker = require("faker");
const { fake } = require("faker");

const attrType = {
  name: "type",
  type: "enum",
  options: [
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
  filterBy: "category",
  filterRules: {
    "Desktop": ["Windows", "Linux", "Mac"],
    "Workstation": ["Windows", "Linux", "Mac"],
    "Server": ["Windows", "Linux", "Unix"],
    "WebApp": ["WebApp"],
    "C/S App": ["C/S App"],
    "File": ["pdf", "image", "word", "excel", "ppt"],
    "Folder": ["Folder"]
  }
};

const attrCategory = {
  name: "category",
  type: "enum",
  options: [
    "Desktop",
    "Workstation",
    "Server",
    "WebApp",
    "C/S App",
    "File",
    "Folder",
  ]
};

const attrName = {
  name: "name",
  type: "string",
  maxLength: 30
};

const attrGroup = {
  name: "group",
  type: "enum",
  options: [
    "Security",
    "Finance",
    "Human Resource",
    "R&D",
    "IT",
    "Sales",
    "Marketing",
  ]
};
const attrProtocol = {
  name: "protocol",
  type: "enum",
  options: ["SSH", "HTTPS", "RDP"]
};
const attrTag = {
  name: "tags",
  type: "enum",
  options: ["risk", "safe", "read only", "read write", "sensative"],
};

const attrDepartment = {
  name: "department",
  type: "enum",
  options: ["TEC", "SALES", "IT", "Finance"]
};

const attrLocation = {
  name: "location",
  type: "string",
  maxLength: 30
};

const attrAddress = {
  name: "address",
  type: "string",
  maxLength: 30
};

const attrModel = {
  name: "model",
  type: "string",
  maxLength: 30
};

const attrRoute = {
  id: "route",
  type: "string",
  maxLength: 30
};

const resourceAttributes = [
  attrType,
  attrCategory,
  attrGroup,
  attrProtocol,
  attrTag,
  attrName,
  attrDepartment,
  attrLocation,
  attrAddress,
  attrModel,
  attrRoute
];

const attributes = [
  {
    "id": "Resource",
    "name":"Resource",
    "fields": resourceAttributes
  },
  {
    "id": "User",
    "name":"User",
    "fields": []
  },
  {
    "id": "Connect",
    "name":"Connect",
    "fields": []
  }
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
    console.log('category: ' + c + ', type: ' + t);
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
      route
    });
  }
  let users = [fakeUser(1, faker)];
  return { connections, resources, users, attributes };
}

module.exports = generateData;
