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
    Desktop: ["Windows", "Linux", "Mac"],
    Workstation: ["Windows", "Linux", "Mac"],
    Server: ["Windows", "Linux", "Unix"],
    WebApp: ["WebApp"],
    "C/S App": ["C/S App"],
    File: ["pdf", "image", "word", "excel", "ppt"],
    Folder: ["Folder"],
  },
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
  ],
};

const attrName = {
  name: "name",
  type: "string",
  maxLength: 30,
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
  ],
};
const attrProtocol = {
  name: "protocol",
  type: "enum",
  options: ["SSH", "HTTPS", "RDP"],
};
const attrTag = {
  name: "tags",
  type: "list",
  options: ["risk", "safe", "read only", "read write", "sensative"],
};

const attrDepartment = {
  name: "department",
  type: "enum",
  options: ["TEC", "SALES", "IT", "Finance"],
};

const attrLocation = {
  name: "location",
  type: "string",
  maxLength: 30,
};

const attrAddress = {
  name: "address",
  type: "string",
  maxLength: 30,
};

const attrModel = {
  name: "model",
  type: "string",
  maxLength: 30,
};

const attrRoute = {
  name: "route",
  type: "string",
  maxLength: 30,
};

const resourceAttributes = [
  attrType,
  attrCategory,
  attrGroup,
  attrTag,
  attrName,
  attrDepartment,
  attrLocation,
  attrAddress,
  attrModel,
  attrRoute,
];

const connectAttributes = [
  attrProtocol
];

const attributes = [
  {
    id: "Resource",
    name: "Resource",
    fields: resourceAttributes
  },
  {
    id: "User",
    name: "User",
    fields: []
  },
  {
    id: "Connect",
    name: "Connect",
    fields: connectAttributes
  },
];

module.exports = {
  attributes,
  attrType,
  attrCategory,
  attrDepartment,
  attrGroup,
  attrTag,
  attrProtocol,
};
