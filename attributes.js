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

const attrConnectType = {
  name: "type",
  type: "enum",
  options: [
    "text",
    "image",
    "App",
    "File"
  ]
};

const attrProtocol = {
  name: "protocol",
  type: "enum",
  options: [
    "SSH",
    "HTTPS",
    "RDP"
  ],
  filterBy: "type",
  filterRules: {
    text: ["SSH"],
    image: ["HTTPS","RDP"],
    App: [],
    File: []
  },
};

const attrPort = {
  name: "port",
  type: "number"
}

const attrAccount = {
  name: "account",
  type: "string",
  maxLength: 30
}

const attrCredential = {
  name: "credential",
  type: "list"
}

const attrSensitivityLevel = {
  name: "sensitivity_level",
  type: "enum",
  options: [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5"
  ]
}

const attrCredentialType = {
  name: "credential_type",
  type: "enum",
  options: [
    "T1",
    "T2",
    "T3",
    "T4"
  ]
}

const attrRiskScore = {
  name: "risk_score",
  type: "number"
}

const attrMaxConnections = {
  name: "max_connections",
  type: "number"
}

const attrMaxConnectionsPerUser = {
  name: "max_connections_per_user",
  type: "number"
}

const attrResolution = {
  name: "resolution",
  type: "enum",
  options: []
}

const attrAllowCopy = {
  name: "allow_copy",
  type: "boolean"
}

const attrAllowPaste = {
  name: "allow_paste",
  type: "boolean"
}

const attrAllowDownload = {
  name: "allow_file_copy",
  type: "boolean"
}

const attrAllowUpdate = {
  name: "allow_file_update",
  type: "boolean"
}

const attrCommandAllow = {
  name: "commands_allowed",
  type: "list"
}

const attrCommandNotAllow = {
  name: "commands_not_allowed",
  type: "list"
}

const connectAttributes = [
  attrName,
  attrConnectType,
  attrProtocol,
  attrPort,
  attrCredential,
  attrAccount,
  attrSensitivityLevel,
  attrRiskScore,
  attrResolution,
  attrMaxConnections,
  attrMaxConnectionsPerUser,
  attrAllowCopy,
  attrAllowPaste,
  attrAllowDownload,
  attrAllowUpdate,
  attrCommandAllow,
  attrCommandNotAllow,
  attrCredentialType
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
  attrSensitivityLevel,
  attrConnectType,
  attrCredentialType
};
