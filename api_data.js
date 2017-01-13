define({ "api": [
  {
    "type": "get",
    "url": "/archive/organizations/{id}/{revision}",
    "title": "View organization revision",
    "version": "1.0.0",
    "group": "Archive",
    "name": "ViewOrganizationRevision",
    "description": "<p>Shows organization revision</p>",
    "permission": [
      {
        "name": "Chief"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"revision\": 1,\n    \"action\": \"create\",\n    \"dt_datetime\": \"2016-05-24 22:11\",\n    \"code\": \"123654789\",\n    \"name\": \"Organization name\",\n    \"address\": \"Address\",\n    \"attestat_number\": \"123465,\n    \"chief_name\": \"John Doe\",\n    \"chief_position_name\": \"Position name\",\n    \"chief_phone\": \"+79210101010\",\n    \"chief_email\": \"chief@example.com\",\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/archive/controllers/OrganizationController.php",
    "groupTitle": "Archive"
  },
  {
    "type": "get",
    "url": "/archive/organizations",
    "title": "View organization archive",
    "version": "1.0.0",
    "group": "Archive",
    "name": "ViewOrganizations",
    "description": "<p>Shows organization archive</p>",
    "permission": [
      {
        "name": "Chief"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"revision\": 1,\n        \"action\": \"create\",\n        \"dt_datetime\": \"2016-05-24 22:11\",\n        \"code\": \"123654789\",\n        \"name\": \"Organization name\",\n        \"address\": \"Address\",\n        \"attestat_number\": \"123465,\n        \"chief_name\": \"John Doe\",\n        \"chief_position_name\": \"Position name\",\n        \"chief_phone\": \"+79210101010\",\n        \"chief_email\": \"chief@example.com\",\n    },\n    {\n        \"id\": 1,\n        \"revision\": 2,\n        \"action\": \"update\",\n        \"dt_datetime\": \"2016-05-24 22:11\",\n        \"code\": \"123654789\",\n        \"name\": \"Organization name\",\n        \"address\": \"Address\",\n        \"attestat_number\": \"123465,\n        \"chief_name\": \"John Doe\",\n        \"chief_position_name\": \"Position name\",\n        \"chief_phone\": \"+79210101010\",\n        \"chief_email\": \"chief@example.com\",\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/archive/controllers/OrganizationController.php",
    "groupTitle": "Archive"
  },
  {
    "type": "get",
    "url": "/archive/patients/{id}/{revision}",
    "title": "View patient revision",
    "version": "1.0.0",
    "group": "Archive",
    "name": "ViewPatientRevision",
    "description": "<p>Shows patient revision</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"revision\": 2,\n    \"action\": \"update\",\n    \"dt_datetime\": \"2016-05-24 22:11\",\n    \"snils\": \"123-111-565 22\",\n    \"inn\": \"112263645489\",\n    \"name\": \"Petr\",\n    \"patronymic\": \"Petrovich,\n    \"surname\": \"Petrov\",\n    \"birthday\": \"1995-01-01\",\n    \"birthplace\": \"Birth place\",\n},",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/archive/controllers/PatientController.php",
    "groupTitle": "Archive"
  },
  {
    "type": "get",
    "url": "/archive/patients",
    "title": "View patient archive",
    "version": "1.0.0",
    "group": "Archive",
    "name": "ViewPatients",
    "description": "<p>Shows patient archive</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"revision\": 1,\n        \"action\": \"create\",\n        \"dt_datetime\": \"2016-05-24 22:11\",\n        \"snils\": \"123-111-565 22\",\n        \"inn\": \"112263645489\",\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n        \"birthday\": \"1995-01-01\",\n        \"birthplace\": \"Birth place\",\n    },\n    {\n        \"id\": 1,\n        \"revision\": 2,\n        \"action\": \"update\",\n        \"dt_datetime\": \"2016-05-24 22:11\",\n        \"snils\": \"123-111-565 22\",\n        \"inn\": \"112263645489\",\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n        \"birthday\": \"1995-01-01\",\n        \"birthplace\": \"Birth place\",\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/archive/controllers/PatientController.php",
    "groupTitle": "Archive"
  },
  {
    "type": "post",
    "url": "/biosignals",
    "title": "Upload biosignal",
    "version": "1.0.0",
    "group": "Biosignal",
    "name": "CreateBiosignal",
    "description": "<p>Uploads biosignal binary data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Binary",
            "optional": false,
            "field": "data",
            "description": "<p>Biosignal binary data</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Patient"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/BiosignalController.php",
    "groupTitle": "Biosignal"
  },
  {
    "type": "put",
    "url": "/doctors/{id}",
    "title": "Update patient",
    "version": "1.0.0",
    "group": "Doctor",
    "name": "UpdateDoctor",
    "description": "<p>Updates patient information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Doctor's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "patronymic",
            "description": "<p>Doctor's patronymic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "surname",
            "description": "<p>Doctor's surname</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"name\":\"Not found\",\n    \"message\":\"Not found\",\n    \"code\":0,\n    \"status\":404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/DoctorController.php",
    "groupTitle": "Doctor"
  },
  {
    "type": "get",
    "url": "/doctors/{id}",
    "title": "View all patients",
    "version": "1.0.0",
    "group": "Doctor",
    "name": "ViewAllDoctors",
    "description": "<p>Shows all patients information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/DoctorController.php",
    "groupTitle": "Doctor"
  },
  {
    "type": "get",
    "url": "/doctors/{id}",
    "title": "View patient's information",
    "version": "1.0.0",
    "group": "Doctor",
    "name": "ViewDoctor",
    "description": "<p>Shows patient information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"Petr\",\n    \"patronymic\": \"Petrovich,\n    \"surname\": \"Petrov\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"name\":\"Not found\",\n    \"message\":\"Not found\",\n    \"code\":0,\n    \"status\":404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/DoctorController.php",
    "groupTitle": "Doctor"
  },
  {
    "type": "post",
    "url": "/invites",
    "title": "Create invite",
    "version": "1.0.0",
    "group": "Invite",
    "name": "CreateInvite",
    "description": "<p>Creates new invite code and returns it</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Doctor|Chief"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"code\": \"f6asd54f98asd74f6vs6df54sdfg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"email\": [\"First error\", \"Second error\"],\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/InviteController.php",
    "groupTitle": "Invite"
  },
  {
    "type": "get",
    "url": "/invites",
    "title": "Get all invites",
    "version": "1.0.0",
    "group": "Invite",
    "name": "GetAllInvites",
    "description": "<p>Shows all invites created by current user</p>",
    "permission": [
      {
        "name": "Doctor|Chief"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1\",\n        \"email\": \"test@example.com\",\n        \"created_at\": \"2016-05-17 18:00:00\",\n        \"registered\": true,\n        \"role\": \"patient\"\n    },\n    {\n        \"id\": \"2\",\n        \"email\": \"test2@example.com\",\n        \"created_at\": \"2016-05-17 18:50:00\",\n        \"registered\": false,\n        \"role\": \"patient\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/InviteController.php",
    "groupTitle": "Invite"
  },
  {
    "type": "get",
    "url": "/invites/{id}",
    "title": "Get invite",
    "version": "1.0.0",
    "group": "Invite",
    "name": "GetInvite",
    "description": "<p>Shows invite</p>",
    "permission": [
      {
        "name": "Doctor|Chief"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Invite's id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n    \"id\": \"1\",\n    \"email\": \"test@example.com\",\n    \"created_at\": \"2016-05-17 18:00:00\",\n    \"registered\": true,\n    \"role\": \"patient\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/InviteController.php",
    "groupTitle": "Invite"
  },
  {
    "type": "put",
    "url": "/organizations",
    "title": "Update organization",
    "version": "1.0.0",
    "group": "Organization",
    "name": "UpdateOrganization",
    "description": "<p>Updates organization</p>",
    "permission": [
      {
        "name": "Chief"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Organization's code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Organization's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Organization's address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attestat_number",
            "description": "<p>Organization's attestat number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chief_name",
            "description": "<p>Organization's chief name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chief_position_name",
            "description": "<p>Organization's chief position</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chief_phone",
            "description": "<p>Organization's chief phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chief_email",
            "description": "<p>Organization's chief email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"code\": [\"First error\", \"Second error\"]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"name\":\"Not found\",\n    \"message\":\"Not found\",\n    \"code\":0,\n    \"status\":404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/organization/controllers/OrganizationController.php",
    "groupTitle": "Organization"
  },
  {
    "type": "get",
    "url": "/organizations",
    "title": "View organization",
    "version": "1.0.0",
    "group": "Organization",
    "name": "ViewOrganization",
    "description": "<p>Shows organization data</p>",
    "permission": [
      {
        "name": "Chief"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": \"123654789\",\n    \"name\": \"Organization name\",\n    \"address\": \"Address\",\n    \"attestat_number\": \"123465,\n    \"chief_name\": \"John Doe\",\n    \"chief_position_name\": \"Position name\",\n    \"chief_phone\": \"+79210101010\",\n    \"chief_email\": \"chief@example.com\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/organization/controllers/OrganizationController.php",
    "groupTitle": "Organization"
  },
  {
    "type": "put",
    "url": "/patients/{id}",
    "title": "Update patient",
    "version": "1.0.0",
    "group": "Patient",
    "name": "UpdatePatient",
    "description": "<p>Updates patient information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "snils",
            "description": "<p>Patient's snils</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inn",
            "description": "<p>Patient's inn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Patient's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "patronymic",
            "description": "<p>Patient's patronymic</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "surname",
            "description": "<p>Patient's surname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthday",
            "description": "<p>Patient's birthday</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birthplace",
            "description": "<p>Patient's birthplace</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>Patient's gender</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"snils\": [\"First error\"]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"name\":\"Not found\",\n    \"message\":\"Not found\",\n    \"code\":0,\n    \"status\":404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/PatientController.php",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "/patients/{id}",
    "title": "View all patients",
    "version": "1.0.0",
    "group": "Patient",
    "name": "ViewAllPatients",
    "description": "<p>Shows all patients information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": 1,\n        \"snils\": \"123-111-565 22\",\n        \"inn\": \"112263645489\",\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n        \"birthday\": \"1995-01-01\",\n        \"birthplace\": \"Birth place\",\n        \"gender\": 0,\n    },\n    {\n        \"id\": 2,\n        \"snils\": \"123-111-565 22\",\n        \"inn\": \"112263645489\",\n        \"name\": \"Petr\",\n        \"patronymic\": \"Petrovich,\n        \"surname\": \"Petrov\",\n        \"birthday\": \"1995-01-01\",\n        \"birthplace\": \"Birth place\",\n        \"gender\": 0,\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/PatientController.php",
    "groupTitle": "Patient"
  },
  {
    "type": "get",
    "url": "/patients/{id}",
    "title": "View patient's information",
    "version": "1.0.0",
    "group": "Patient",
    "name": "ViewPatient",
    "description": "<p>Shows patient information</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"snils\": \"123-111-565 22\",\n    \"inn\": \"112263645489\",\n    \"name\": \"Petr\",\n    \"patronymic\": \"Petrovich,\n    \"surname\": \"Petrov\",\n    \"birthday\": \"1995-01-01\",\n    \"birthplace\": \"Birth place\",\n    \"gender\": 0,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        },
        {
          "title": "Not found",
          "content": "HTTP/1.1 404 Not found\n{\n    \"name\":\"Not found\",\n    \"message\":\"Not found\",\n    \"code\":0,\n    \"status\":404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/PatientController.php",
    "groupTitle": "Patient"
  },
  {
    "type": "put",
    "url": "/user/password",
    "title": "Change password",
    "version": "1.0.0",
    "group": "Recovery",
    "name": "PasswordRecover",
    "description": "<p>Updates user's password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Recovery code</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"password\": [\"First error\"],\n        \"code\": [\"First error\"],\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/RecoveryController.php",
    "groupTitle": "Recovery"
  },
  {
    "type": "post",
    "url": "/recovery",
    "title": "Request recovery",
    "version": "1.0.0",
    "group": "Recovery",
    "name": "RequestRecovery",
    "description": "<p>Creates new password recovery token and sends it by email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"email\": [\"First error\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/RecoveryController.php",
    "groupTitle": "Recovery"
  },
  {
    "type": "post",
    "url": "/tests",
    "title": "Upload test data",
    "version": "1.0.0",
    "group": "Test",
    "name": "CreateTest",
    "description": "<p>Uploads test data</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"question1\": \"1\",\n  \"question2\": \"2\",\n  \"question3\": \"3\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "Patient"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/TestController.php",
    "groupTitle": "Test"
  },
  {
    "type": "get",
    "url": "/tests/[id]",
    "title": "Get tests",
    "version": "1.0.0",
    "group": "Test",
    "name": "GetTest",
    "description": "<p>Shows uploaded tests by all patients (or if patient's id is specified by only that patient)</p>",
    "permission": [
      {
        "name": "Doctor"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>Patient's id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "All patients:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1\",\n        \"patient_id\": \"1\",\n        \"created_at\": \"2016-05-17 18:00:00\",\n        \"data\": {\n            \"question1\": \"1\",\n            \"question2\": \"2\",\n            \"question3\": \"3\"\n        }\n    },\n    {\n        \"id\": \"2\",\n        \"patient_id\": \"2\",\n        \"created_at\": \"2016-05-17 19:00:00\",\n        \"data\": {\n            \"question1\": \"3\",\n            \"question2\": \"4\",\n            \"question3\": \"5\"\n        }\n    }\n]",
          "type": "json"
        },
        {
          "title": "Single patient:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"id\": \"1\",\n        \"patient_id\": \"1\",\n        \"created_at\": \"2016-05-17 18:00:00\",\n        \"data\": {\n            \"question1\": \"1\",\n            \"question2\": \"2\",\n            \"question3\": \"3\"\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"name\":\"Unauthorized\",\n    \"message\":\"You are requesting with an invalid credential.\",\n    \"code\":0,\n    \"status\":401\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"name\":\"Forbidden\",\n    \"message\":\"You are not allowed to perform this action.\",\n    \"code\":0,\n    \"status\":403\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/emr/controllers/TestController.php",
    "groupTitle": "Test"
  },
  {
    "type": "post",
    "url": "/tokens",
    "title": "Create token",
    "version": "1.0.0",
    "group": "Token",
    "name": "CreateToken",
    "description": "<p>Creates and returns new authentication token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"token\": \"f6asd54f98asd74f6vs6df54sdfg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"email\": [\"First error\"],\n        \"password\": [\"First error\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/TokenController.php",
    "groupTitle": "Token"
  },
  {
    "type": "delete",
    "url": "/tokens",
    "title": "Delete token",
    "version": "1.0.0",
    "group": "Token",
    "name": "DeleteToken",
    "description": "<p>Deletes current user's authentication token.</p>",
    "permission": [
      {
        "name": "Authenticated user"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/TokenController.php",
    "groupTitle": "Token"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create user",
    "version": "1.0.0",
    "group": "User",
    "name": "CreateUser",
    "description": "<p>Creates new user and returns authentication token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inviteCode",
            "description": "<p>User's invite code</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "Guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"token\": \"f6asd54f98asd74f6vs6df54sdfg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"errors\": {\n        \"email\": [\"First error\"],\n        \"password\": [\"First error\"]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/user/controllers/UserController.php",
    "groupTitle": "User"
  }
] });
