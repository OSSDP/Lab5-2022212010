{
  "Header" : {
    "Code" : "Student",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "Student",
    "FileName" : "Student.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "8628e96e-c1e2-45f6-a7ef-ec9428d0714e",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "72adcfce-f060-42b0-bdc7-77d33f079593",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "Student.frm",
      "Name" : "Student.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "8628e96e-c1e2-45f6-a7ef-ec9428d0714e",
    "Contents" : {
      "module" : {
        "id" : "Student",
        "code" : "Student",
        "name" : "Student",
        "caption" : "Student",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-08T14:56:57.453Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "eapiId" : "b34f5ef6-7e2e-40e4-95ef-4c263b90d095",
          "eapiCode" : "Student_frm",
          "eapiName" : "Student_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "entities" : [ {
            "label" : "students",
            "id" : "8fa91a80-e952-4ed4-b87c-c1dd752aa255",
            "type" : {
              "$type" : "EntityType",
              "entities" : [ ],
              "fields" : [ {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "id",
                "id" : "5124f73b-6cd9-4d6c-8182-c7936b94b675",
                "path" : "ID",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "ID",
                "originalId" : "5124f73b-6cd9-4d6c-8182-c7936b94b675",
                "bindingPath" : "id",
                "bindingField" : "id",
                "name" : "主键"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "version",
                "id" : "66e663da-d074-4dd9-b2c0-7db33363d517",
                "path" : "Version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "code" : "Version",
                "originalId" : "66e663da-d074-4dd9-b2c0-7db33363d517",
                "bindingPath" : "version",
                "bindingField" : "version",
                "name" : "版本"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "student_id",
                "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                "path" : "student_id",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "student_id",
                "originalId" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                "bindingPath" : "student_id",
                "bindingField" : "student_id",
                "name" : "学号"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "name",
                "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                "path" : "name",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "name",
                "originalId" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                "bindingPath" : "name",
                "bindingField" : "name",
                "name" : "姓名"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "gender",
                "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                "path" : "gender",
                "type" : {
                  "$type" : "EnumType",
                  "valueType" : {
                    "$type" : "StringType",
                    "displayName" : "字符串",
                    "length" : 36,
                    "name" : "String"
                  },
                  "enumValues" : [ {
                    "disabled" : false,
                    "name" : "男",
                    "value" : "man"
                  }, {
                    "disabled" : false,
                    "name" : "女",
                    "value" : "woman"
                  } ],
                  "displayName" : "枚举",
                  "name" : "Enum"
                },
                "code" : "gender",
                "originalId" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                "bindingPath" : "gender",
                "bindingField" : "gender",
                "name" : "性别"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "password",
                "id" : "72231dcb-4fa5-491b-bca7-a1c25f92a4ea",
                "path" : "password",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "password",
                "originalId" : "72231dcb-4fa5-491b-bca7-a1c25f92a4ea",
                "bindingPath" : "password",
                "bindingField" : "password",
                "name" : "密码"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "birth",
                "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
                "path" : "birth",
                "type" : {
                  "$type" : "DateType",
                  "displayName" : "日期",
                  "name" : "Date"
                },
                "code" : "birth",
                "originalId" : "99cae752-386f-4b3f-be5e-e7291871d419",
                "bindingPath" : "birth",
                "bindingField" : "birth",
                "name" : "生日"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "major",
                "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                "path" : "major",
                "type" : {
                  "$type" : "EnumType",
                  "valueType" : {
                    "$type" : "StringType",
                    "displayName" : "字符串",
                    "length" : 36,
                    "name" : "String"
                  },
                  "enumValues" : [ {
                    "disabled" : false,
                    "name" : "计算机",
                    "value" : "cs"
                  }, {
                    "disabled" : false,
                    "name" : "数学",
                    "value" : "math"
                  }, {
                    "disabled" : false,
                    "name" : "中文",
                    "value" : "Chinese"
                  }, {
                    "disabled" : false,
                    "name" : "法律",
                    "value" : "falv"
                  } ],
                  "displayName" : "枚举",
                  "name" : "Enum"
                },
                "code" : "major",
                "originalId" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                "bindingPath" : "major",
                "bindingField" : "major",
                "name" : "专业名称"
              }, {
                "$type" : "ComplexField",
                "label" : "phone",
                "id" : "46c77ec9-8075-437a-925f-99f919799c58",
                "path" : "phone",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : true,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "label" : "phoneNumber",
                    "id" : "46c77ec9-88d1-4769-bb7a-5490d92893fa",
                    "path" : "phone.PhoneNumber",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 36,
                      "name" : "String"
                    },
                    "code" : "PhoneNumber",
                    "originalId" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
                    "bindingPath" : "phone.phoneNumber",
                    "bindingField" : "phone_PhoneNumber",
                    "name" : "手机电话号码"
                  } ],
                  "name" : "PhoneNumber46c7",
                  "displayName" : "手机电话号码"
                },
                "code" : "phone",
                "originalId" : "46c77ec9-8075-437a-925f-99f919799c58",
                "bindingPath" : "phone",
                "bindingField" : "phone",
                "name" : "手机电话号码"
              }, {
                "$type" : "ComplexField",
                "label" : "email",
                "id" : "503c6e67-3268-440e-a14d-61be98e99669",
                "path" : "Email",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : true,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "label" : "email",
                    "id" : "503c6e67-fa0f-456c-9c58-7ab52433e9b2",
                    "path" : "Email.Email",
                    "type" : {
                      "$type" : "StringType",
                      "displayName" : "字符串",
                      "length" : 500,
                      "name" : "String"
                    },
                    "code" : "Email",
                    "originalId" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
                    "bindingPath" : "email.email",
                    "bindingField" : "email_Email",
                    "name" : "邮箱"
                  } ],
                  "name" : "Email503c",
                  "displayName" : "邮箱"
                },
                "code" : "Email",
                "originalId" : "503c6e67-3268-440e-a14d-61be98e99669",
                "bindingPath" : "email",
                "bindingField" : "email",
                "name" : "邮箱"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "state",
                "id" : "c7b052e8-afdf-4a2c-8ac8-814fc57c39d9",
                "path" : "State",
                "type" : {
                  "$type" : "EnumType",
                  "valueType" : {
                    "$type" : "StringType",
                    "displayName" : "字符串",
                    "length" : 36,
                    "name" : "String"
                  },
                  "enumValues" : [ {
                    "disabled" : false,
                    "name" : "正常",
                    "value" : "zc"
                  }, {
                    "disabled" : false,
                    "name" : "禁用",
                    "value" : "jy"
                  } ],
                  "displayName" : "枚举",
                  "name" : "Enum"
                },
                "code" : "State",
                "originalId" : "c7b052e8-afdf-4a2c-8ac8-814fc57c39d9",
                "bindingPath" : "state",
                "bindingField" : "state",
                "name" : "状态"
              } ],
              "primary" : "id",
              "displayName" : "学生表",
              "name" : "Student"
            },
            "code" : "Student",
            "name" : "学生表"
          } ],
          "id" : "2378b78c-87a2-48c3-9173-35ddfa1d85d8",
          "sourceType" : "vo",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "Student_frm",
          "sourceUri" : "api/apporder/df/v1.0/Student_frm",
          "name" : "Student_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "Student_state_machine",
          "name" : "Student_frm",
          "uri" : "3204c118-d5ac-48f9-9cda-baf9a15c5c19",
          "code" : "Student_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "学生表",
          "fields" : [ ],
          "stateMachine" : "Student_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Load",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "code" : "Search1",
            "name" : "查询数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : ""
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            }, {
              "name" : "pageSize",
              "shownName" : "分页大小",
              "value" : ""
            }, {
              "name" : "pageIndex",
              "shownName" : "当前页码",
              "value" : ""
            } ],
            "handlerName" : "Search",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "code" : "RemoveRows1",
            "name" : "删除多行数据",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{UISTATE~/#{data-grid-component}/ids}"
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "77556491-41c0-4356-8ccf-25e39817060e",
            "code" : "Add1",
            "name" : "在新页签中新增数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : ""
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}"
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : ""
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : "{DATA~/#{data-grid-component}/id}"
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "在新页签中编辑数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : ""
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/#{data-grid-component}/id}",
              "defaultValue" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{data-grid-component}/id}"
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/root-component/originalFilterConditionList}"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : ""
            } ],
            "handlerName" : "Filter",
            "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
            "shortcut" : { },
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "40211756-ab27-43a9-bfdc-e9df53b544e5",
            "code" : "rootAdd1",
            "name" : "在新页签中新增数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndAdd1\"}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "c7491249-418c-4800-9fb6-48a291b0e44c",
            "code" : "rootEdit1",
            "name" : "在新页签中编辑数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : "{DATA~/#{data-grid-component}/id}"
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "4db92f81-d70c-46ba-aef7-d1683e67f8c2",
            "code" : "rootView1",
            "name" : "在新页签中查看数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
              "value" : ""
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "6a982776-d7d0-4886-a4c9-b1f36a027e6b",
            "code" : "rootRemoveRows1",
            "name" : "删除多行数据1",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          }, {
            "id" : "a8b7c4da-2f4b-4532-8423-06f82efe27d7",
            "code" : "rootRemove1",
            "name" : "删除当前数据1",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : ""
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          }, {
            "id" : "18b66ab7-a167-4337-8ee4-89166fb464ba",
            "code" : "rootRemove2",
            "name" : "删除当前数据2",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : ""
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          }, {
            "id" : "ccffbb95-ee03-4276-bc83-ec9b96d317ff",
            "code" : "rootRemoveRows2",
            "name" : "删除多行数据2",
            "params" : [ {
              "name" : "ids",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{root-component}/version}{DATA~/#{root-component}/student_id}{DATA~/#{root-component}/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          }, {
            "id" : "dcb5f822-264a-4294-9075-dd5986bfa6df",
            "code" : "rootRemove3",
            "name" : "删除当前数据3",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "root-component"
          } ],
          "states" : [ {
            "id" : "ad1250a9-fe0c-4dcf-81fe-9c2c52608c66",
            "category" : "locale",
            "code" : "originalFilterConditionList",
            "name" : "筛选方案筛选条件",
            "type" : "String"
          } ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "data-grid-component-viewmodel",
          "code" : "data-grid-component-viewmodel",
          "name" : "学生表",
          "fields" : [ {
            "type" : "Form",
            "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
            "fieldName" : "student_id",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
            "fieldName" : "gender",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "72231dcb-4fa5-491b-bca7-a1c25f92a4ea",
            "fieldName" : "password",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
            "fieldName" : "birth",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
            "fieldName" : "major",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "46c77ec9-88d1-4769-bb7a-5490d92893fa",
            "fieldName" : "phone_PhoneNumber",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "503c6e67-fa0f-456c-9c58-7ab52433e9b2",
            "fieldName" : "email_Email",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c7b052e8-afdf-4a2c-8ac8-814fc57c39d9",
            "fieldName" : "state",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "#{root-component}"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "9ef61b02-ffe8-41e1-9a20-3a63591a6ec3",
            "code" : "datagridRemove1",
            "name" : "删除当前数据1",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : ""
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : ""
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : ""
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "991bea70-a219-4744-b379-957afc316c3d",
            "code" : "datagridEdit1",
            "name" : "在新页签中编辑数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : ""
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : ""
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "d84d8709-93bb-4c6c-bf11-44489869e2f1",
            "code" : "datagridRemove2",
            "name" : "删除当前数据2",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : "Load1"
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : "#{data-grid-component}"
            }, {
              "name" : "successMsg",
              "shownName" : "删除成功提示信息",
              "value" : ""
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "f971df61-368f-4669-a214-256ca531ba4a",
            "code" : "datagridEdit2",
            "name" : "在新页签中编辑数据2",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToEdit",
              "shownName" : "待编辑数据的标识",
              "value" : ""
            }, {
              "name" : "enableRefresh",
              "shownName" : "支持刷新列表数据",
              "value" : ""
            }, {
              "name" : "tabName",
              "shownName" : "标签页标题",
              "value" : ""
            }, {
              "name" : "destructuring",
              "shownName" : "是否解构参数",
              "value" : ""
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "8524c040-b3f2-446f-9dc3-55d064f24691",
            "code" : "datagridChangePage1",
            "name" : "切换页码1",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "#{root-component}"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "afcab2b2-e1fa-4d1a-9921-04c1ff0bffb2",
            "code" : "datagridChangePage2",
            "name" : "切换页码2",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "切换页面后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "目标组件",
              "value" : "#{root-component}"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : true,
            "targetComponent" : "data-grid-component"
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "pagination" : {
            "enable" : true,
            "pageSize" : 20,
            "pageList" : "10,20,30,50,100"
          },
          "enableValidation" : false,
          "allowEmpty" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "componentType" : "Frame",
          "viewModel" : "root-viewmodel",
          "onInit" : "Filter1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-is-managelist  f-page-has-scheme"
            },
            "size" : null,
            "contents" : [ {
              "id" : "query-scheme-container-o1fj",
              "type" : "Section",
              "appearance" : {
                "class" : "f-section-scheme f-section-in-managelist"
              },
              "visible" : true,
              "mainTitle" : "",
              "subTitle" : "",
              "headerClass" : "",
              "titleClass" : "",
              "extendedHeaderAreaClass" : "",
              "toolbarClass" : "",
              "extendedAreaClass" : "",
              "contentTemplateClass" : "",
              "fill" : false,
              "expanded" : true,
              "enableMaximize" : false,
              "enableAccordion" : false,
              "accordionMode" : "default",
              "showHeader" : false,
              "headerTemplate" : "",
              "titleTemplate" : "",
              "extendedHeaderAreaTemplate" : "",
              "toolbarTemplate" : "",
              "extendedAreaTemplate" : "",
              "contents" : [ {
                "id" : "query-scheme-o1fj",
                "type" : "QueryScheme",
                "fieldConfigs" : [ {
                  "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                  "labelCode" : "student_id",
                  "code" : "student_id",
                  "name" : "学号",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                    "controltype" : "text",
                    "require" : false
                  }
                }, {
                  "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                  "labelCode" : "name",
                  "code" : "name",
                  "name" : "姓名",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                    "controltype" : "text",
                    "require" : false
                  }
                }, {
                  "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                  "labelCode" : "gender",
                  "code" : "gender",
                  "name" : "性别",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "男",
                      "value" : "man"
                    }, {
                      "disabled" : false,
                      "name" : "女",
                      "value" : "woman"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null,
                    "idField" : "value",
                    "textField" : "name",
                    "uri" : ""
                  }
                }, {
                  "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
                  "labelCode" : "birth",
                  "code" : "birth",
                  "name" : "生日",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "returnFormat" : "yyyy-MM-dd",
                    "weekSelect" : false,
                    "startFieldCode" : "birth",
                    "endFieldCode" : "birth"
                  },
                  "beginPlaceHolder" : "",
                  "endPlaceHolder" : ""
                }, {
                  "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                  "labelCode" : "major",
                  "code" : "major",
                  "name" : "专业名称",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "计算机",
                      "value" : "cs"
                    }, {
                      "disabled" : false,
                      "name" : "数学",
                      "value" : "math"
                    }, {
                      "disabled" : false,
                      "name" : "中文",
                      "value" : "Chinese"
                    }, {
                      "disabled" : false,
                      "name" : "法律",
                      "value" : "falv"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null,
                    "idField" : "value",
                    "textField" : "name",
                    "uri" : ""
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                  "labelCode" : "student_id",
                  "code" : "student_id",
                  "name" : "学号",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                    "controltype" : "text",
                    "require" : false
                  }
                }, {
                  "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                  "labelCode" : "name",
                  "code" : "name",
                  "name" : "姓名",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                    "controltype" : "text",
                    "require" : false
                  }
                }, {
                  "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                  "labelCode" : "gender",
                  "code" : "gender",
                  "name" : "性别",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "男",
                      "value" : "man"
                    }, {
                      "disabled" : false,
                      "name" : "女",
                      "value" : "woman"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null,
                    "idField" : "value",
                    "textField" : "name",
                    "uri" : ""
                  }
                }, {
                  "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
                  "labelCode" : "birth",
                  "code" : "birth",
                  "name" : "生日",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "99cae752-386f-4b3f-be5e-e7291871d419",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "returnFormat" : "yyyy-MM-dd",
                    "weekSelect" : false,
                    "startFieldCode" : "birth",
                    "endFieldCode" : "birth"
                  },
                  "beginPlaceHolder" : "",
                  "endPlaceHolder" : ""
                }, {
                  "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                  "labelCode" : "major",
                  "code" : "major",
                  "name" : "专业名称",
                  "placeHolder" : "",
                  "control" : {
                    "id" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "计算机",
                      "value" : "cs"
                    }, {
                      "disabled" : false,
                      "name" : "数学",
                      "value" : "math"
                    }, {
                      "disabled" : false,
                      "name" : "中文",
                      "value" : "Chinese"
                    }, {
                      "disabled" : false,
                      "name" : "法律",
                      "value" : "falv"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null,
                    "idField" : "value",
                    "textField" : "name",
                    "uri" : ""
                  }
                } ],
                "formId" : "Student",
                "isDisabled" : false,
                "presetQuerySolutionName" : "默认筛选方案",
                "isControlInline" : true,
                "visible" : true,
                "onQuery" : "Filter1",
                "binding" : null,
                "enableInitQuery" : false,
                "showCompleteLabel" : false,
                "expanded" : true,
                "enableHistory" : false,
                "filterText" : "筛选",
                "openAdvancedMode" : false,
                "queryAfterValueChange" : false,
                "hideOrgselector" : false
              } ],
              "isScrollSpyItem" : false,
              "toolbar" : {
                "type" : "SectionToolbar",
                "position" : "inHead",
                "contents" : [ ]
              }
            }, {
              "id" : "page-header",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-header"
              },
              "size" : null,
              "contents" : [ {
                "id" : "header-nav",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-page-header-base"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "header-title-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-title"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "page-header-title",
                    "type" : "HtmlTemplate",
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'Student'}}</h4>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false,
                  "isLikeCardContainer" : false
                }, {
                  "id" : "page-header-toolbar",
                  "type" : "ToolBar",
                  "appearance" : {
                    "class" : "col-7 f-toolbar"
                  },
                  "size" : null,
                  "items" : [ {
                    "id" : "button-add",
                    "type" : "ToolBarItem",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "text" : "新增",
                    "visible" : true,
                    "click" : "rootAdd1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "text" : "编辑",
                    "visible" : true,
                    "click" : "rootEdit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-view",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canView']",
                    "text" : "查看",
                    "visible" : true,
                    "click" : "rootView1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-delete",
                    "type" : "ToolBarItem",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canRemove']",
                    "text" : "删除",
                    "visible" : true,
                    "click" : "rootRemove3",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  } ],
                  "visible" : true,
                  "buttonSize" : "default",
                  "popDirection" : "default"
                } ],
                "visible" : true,
                "isScrollspyContainer" : false,
                "isLikeCardContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "isLikeCardContainer" : false
            }, {
              "id" : "page-main",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "data-grid-component-ref",
                "type" : "ComponentRef",
                "component" : "data-grid-component",
                "visible" : true
              } ],
              "visible" : true,
              "isScrollspyContainer" : false,
              "isLikeCardContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false,
            "isLikeCardContainer" : false
          } ],
          "appearance" : null,
          "visible" : true,
          "afterViewInit" : null
        }, {
          "id" : "data-grid-component",
          "type" : "Component",
          "componentType" : "dataGrid",
          "viewModel" : "data-grid-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-wrapper f-utils-fill-flex-column"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "data-grid-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-grid f-section-in-managelist"
            },
            "size" : null,
            "mainTitle" : "",
            "subTitle" : "",
            "headerClass" : "",
            "titleClass" : "",
            "extendedHeaderAreaClass" : "",
            "toolbarClass" : "",
            "extendedAreaClass" : "",
            "contentTemplateClass" : "",
            "fill" : true,
            "expanded" : true,
            "enableMaximize" : true,
            "enableAccordion" : true,
            "accordionMode" : "default",
            "showHeader" : false,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "dataGrid",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "appearance" : {
                "class" : "f-component-grid"
              },
              "size" : null,
              "dataSource" : "students",
              "fields" : [ {
                "id" : "student_id_187b1ada_5ngh",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "学号",
                "captionTemplate" : null,
                "dataField" : "student_id",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "student_id",
                  "field" : "187b1ada-deb6-4bbf-b454-ae2f03019104",
                  "fullPath" : "student_id"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "name_cd4d8a2b_lj1y",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "姓名",
                "captionTemplate" : null,
                "dataField" : "name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "cd4d8a2b-4696-434b-b3d6-ec4ee806a138",
                  "fullPath" : "name"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "gender_b09c1344_gzd2",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "性别",
                "captionTemplate" : null,
                "dataField" : "gender",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "gender",
                  "field" : "b09c1344-806c-4f91-82f5-54dd31c279aa",
                  "fullPath" : "gender"
                },
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "男",
                  "value" : "man"
                }, {
                  "disabled" : false,
                  "name" : "女",
                  "value" : "woman"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false
              }, {
                "id" : "password_72231dcb_iwrs",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "密码",
                "captionTemplate" : null,
                "dataField" : "password",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "password",
                  "field" : "72231dcb-4fa5-491b-bca7-a1c25f92a4ea",
                  "fullPath" : "password"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "birth_99cae752_zwqe",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "生日",
                "captionTemplate" : null,
                "dataField" : "birth",
                "dataType" : "date",
                "binding" : {
                  "type" : "Form",
                  "path" : "birth",
                  "field" : "99cae752-386f-4b3f-be5e-e7291871d419",
                  "fullPath" : "birth"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "date",
                  "dateFormat" : "yyyy-MM-dd"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "localizationType" : "Date",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false
              }, {
                "id" : "major_615161ef_22fk",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "专业名称",
                "captionTemplate" : null,
                "dataField" : "major",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "major",
                  "field" : "615161ef-a709-431a-b0b7-77a0dec433d9",
                  "fullPath" : "major"
                },
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "计算机",
                  "value" : "cs"
                }, {
                  "disabled" : false,
                  "name" : "数学",
                  "value" : "math"
                }, {
                  "disabled" : false,
                  "name" : "中文",
                  "value" : "Chinese"
                }, {
                  "disabled" : false,
                  "name" : "法律",
                  "value" : "falv"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false
              }, {
                "id" : "phone_PhoneNumber_46c77ec9_ljvn",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "手机电话号码",
                "captionTemplate" : null,
                "dataField" : "phone.phoneNumber",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "phone_PhoneNumber",
                  "field" : "46c77ec9-88d1-4769-bb7a-5490d92893fa",
                  "fullPath" : "phone.PhoneNumber"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "email_Email_503c6e67_8ros",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "邮箱",
                "captionTemplate" : null,
                "dataField" : "email.email",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "email_Email",
                  "field" : "503c6e67-fa0f-456c-9c58-7ab52433e9b2",
                  "fullPath" : "Email.Email"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false,
                "localizationType" : "Date"
              }, {
                "id" : "state_c7b052e8_jonh",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "状态",
                "captionTemplate" : null,
                "dataField" : "state",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "state",
                  "field" : "c7b052e8-afdf-4a2c-8ac8-814fc57c39d9",
                  "fullPath" : "State"
                },
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "正常",
                  "value" : "zc"
                }, {
                  "disabled" : false,
                  "name" : "禁用",
                  "value" : "jy"
                } ],
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "groupAggregate" : {
                  "type" : "none",
                  "formatter" : {
                    "type" : "none"
                  }
                },
                "styler" : "",
                "colTemplate" : "",
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "none"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "captionTipContent" : "",
                "captionTipStyler" : "",
                "enableBatchEdit" : false
              } ],
              "focusedItem" : null,
              "focusedIndex" : null,
              "identifyField" : null,
              "multiSelect" : false,
              "selectable" : null,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "fitColumns" : true,
              "autoFitColumns" : false,
              "virtualized" : false,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : "ChangePage1",
              "onSelectionChange" : null,
              "fieldEditable" : false,
              "appendRow" : null,
              "disable" : false,
              "pageChange" : "datagridChangePage1",
              "pageSizeChanged" : "datagridChangePage2",
              "styler" : "",
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "showLineNumber" : false,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "showFooter" : false,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "pagination" : true,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageSize" : false,
              "editable" : null,
              "fixedColumns" : [ ],
              "enableCommandColumn" : true,
              "onEditClicked" : "datagridEdit2",
              "onDeleteClicked" : "datagridRemove2",
              "commandColumnWidth" : 120,
              "showCommandColumn" : true,
              "checkedChange" : null,
              "footerHeight" : 29,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "rowClick" : null,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
              "maxHeight" : 300,
              "rowHeight" : 30,
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "visible" : true,
              "showGotoInput" : false,
              "scrollBarShowMode" : "auto",
              "showScrollArrow" : false,
              "footerPosition" : "bottom",
              "footerStyler" : null,
              "selectOnEditing" : false,
              "selectionMode" : "default",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "enableScheme" : false,
              "beforeEdit" : null,
              "nowrap" : true,
              "mergeCell" : false,
              "remoteSort" : false,
              "columnSorted" : null,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "AutoColumnWidthUseDblclick" : true,
              "pagerContentTemplate" : null,
              "expandGroupRows" : true,
              "useBlankWhenDataIsEmpty" : false,
              "checked" : null,
              "unChecked" : null,
              "checkAll" : null,
              "unCheckAll" : null,
              "filterChanged" : null,
              "enableEditStateFilterSorting" : false,
              "showConfirmWhenSchemeChanged" : false,
              "enableSetMultiHeaders" : false,
              "allowEmpty" : true,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20
            } ],
            "visible" : true,
            "isScrollSpyItem" : false,
            "toolbar" : {
              "type" : "SectionToolbar",
              "position" : "inHead",
              "contents" : [ ]
            }
          } ],
          "visible" : true,
          "afterViewInit" : null
        } ],
        "webcmds" : [ {
          "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "ListController.webcmd",
          "refedHandlers" : [ {
            "host" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "handler" : "Load"
          }, {
            "host" : "71ae8a4c-6202-4875-9246-2e2d959da37f",
            "handler" : "Search"
          }, {
            "host" : "77556491-41c0-4356-8ccf-25e39817060e",
            "handler" : "Add"
          }, {
            "host" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "handler" : "View"
          }, {
            "host" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "handler" : "Edit"
          }, {
            "host" : "6d5a354f-871f-43e6-82bc-7837184380d3",
            "handler" : "RemoveRows"
          }, {
            "host" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "handler" : "ChangePage"
          }, {
            "host" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "handler" : "Remove"
          }, {
            "host" : "40211756-ab27-43a9-bfdc-e9df53b544e5",
            "handler" : "Add"
          }, {
            "host" : "c7491249-418c-4800-9fb6-48a291b0e44c",
            "handler" : "Edit"
          }, {
            "host" : "f9d16154-ea07-416f-a974-a0e31415b764",
            "handler" : "Edit"
          }, {
            "host" : "4db92f81-d70c-46ba-aef7-d1683e67f8c2",
            "handler" : "View"
          }, {
            "host" : "d8fe061c-efba-4792-a100-5a58696013a0",
            "handler" : "Edit"
          }, {
            "host" : "1070e0a3-0802-409d-aefb-76cf9a8ea9c9",
            "handler" : "Edit"
          }, {
            "host" : "9ef61b02-ffe8-41e1-9a20-3a63591a6ec3",
            "handler" : "Remove"
          }, {
            "host" : "6a982776-d7d0-4886-a4c9-b1f36a027e6b",
            "handler" : "RemoveRows"
          }, {
            "host" : "991bea70-a219-4744-b379-957afc316c3d",
            "handler" : "Edit"
          }, {
            "host" : "d84d8709-93bb-4c6c-bf11-44489869e2f1",
            "handler" : "Remove"
          }, {
            "host" : "f971df61-368f-4669-a214-256ca531ba4a",
            "handler" : "Edit"
          }, {
            "host" : "a8b7c4da-2f4b-4532-8423-06f82efe27d7",
            "handler" : "Remove"
          }, {
            "host" : "18b66ab7-a167-4337-8ee4-89166fb464ba",
            "handler" : "Remove"
          }, {
            "host" : "ccffbb95-ee03-4276-bc83-ec9b96d317ff",
            "handler" : "RemoveRows"
          }, {
            "host" : "8524c040-b3f2-446f-9dc3-55d064f24691",
            "handler" : "ChangePage"
          }, {
            "host" : "afcab2b2-e1fa-4d1a-9921-04c1ff0bffb2",
            "handler" : "ChangePage"
          }, {
            "host" : "dcb5f822-264a-4294-9075-dd5986bfa6df",
            "handler" : "Remove"
          } ],
          "code" : "ListController",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        }, {
          "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
          "path" : "igix/Web/WebCmp/bo-webcmp/metadata/webcmd/data-commands",
          "name" : "LoadCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "handler" : "Filter"
          } ],
          "code" : "LoadCommands",
          "nameSpace" : "Inspur.GS.Gsp.Web.WebCmp"
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-organization-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "declarations" : {
          "events" : [ ],
          "commands" : [ ],
          "states" : [ ]
        },
        "subscriptions" : [ ],
        "extraImports" : [ ],
        "expressions" : [ ],
        "metadataId" : "8628e96e-c1e2-45f6-a7ef-ec9428d0714e",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "query-scheme-o1fj",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onQuery",
                "name" : "查询事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-add",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "40211756-ab27-43a9-bfdc-e9df53b544e5",
                "label" : "rootAdd1",
                "name" : "在新页签中新增数据1",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndAdd1\"}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : ""
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-edit",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "c7491249-418c-4800-9fb6-48a291b0e44c",
                "label" : "rootEdit1",
                "name" : "在新页签中编辑数据1",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : "{DATA~/#{data-grid-component}/id}"
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : ""
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-view",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "4db92f81-d70c-46ba-aef7-d1683e67f8c2",
                "label" : "rootView1",
                "name" : "在新页签中查看数据1",
                "handlerName" : "View",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
                  "value" : ""
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : ""
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "root-component",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onInit",
                "name" : "初始化事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
                "label" : "Filter1",
                "name" : "过滤并加载数据1",
                "handlerName" : "Filter",
                "params" : [ {
                  "name" : "filter",
                  "shownName" : "过滤条件",
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : ""
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
                "label" : "LoadCommands",
                "name" : "数据加载相关命令"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "8524c040-b3f2-446f-9dc3-55d064f24691",
                "label" : "datagridChangePage1",
                "name" : "切换页码1",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "#{root-component}"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "pageSizeChanged",
                "name" : "分页条数变化事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "afcab2b2-e1fa-4d1a-9921-04c1ff0bffb2",
                "label" : "datagridChangePage2",
                "name" : "切换页码2",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "#{root-component}"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "scrollYLoad",
                "name" : "滚动加载事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
                "label" : "ChangePage1",
                "name" : "切换页码",
                "handlerName" : "ChangePage",
                "params" : [ {
                  "name" : "loadCommandName",
                  "shownName" : "切换页面后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "#{root-component}"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "onEditClicked",
                "name" : "操作列点击编辑"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "f971df61-368f-4669-a214-256ca531ba4a",
                "label" : "datagridEdit2",
                "name" : "在新页签中编辑数据2",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "fb6d45a4-f283-4a22-a0b9-708d6f8164d7"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
                }, {
                  "name" : "idToEdit",
                  "shownName" : "待编辑数据的标识",
                  "value" : ""
                }, {
                  "name" : "enableRefresh",
                  "shownName" : "支持刷新列表数据",
                  "value" : ""
                }, {
                  "name" : "tabName",
                  "shownName" : "标签页标题",
                  "value" : ""
                }, {
                  "name" : "destructuring",
                  "shownName" : "是否解构参数",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            }, {
              "event" : {
                "label" : "onDeleteClicked",
                "name" : "操作列点击删除"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "d84d8709-93bb-4c6c-bf11-44489869e2f1",
                "label" : "datagridRemove2",
                "name" : "删除当前数据2",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/#{root-component}/id}"
                }, {
                  "name" : "refreshCommandName",
                  "shownName" : "删除后回调方法",
                  "value" : "Load1"
                }, {
                  "name" : "refreshCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "#{data-grid-component}"
                }, {
                  "name" : "successMsg",
                  "shownName" : "删除成功提示信息",
                  "value" : ""
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-delete",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "root-component",
                "viewModelId" : "root-viewmodel"
              },
              "command" : {
                "id" : "dcb5f822-264a-4294-9075-dd5986bfa6df",
                "label" : "rootRemove3",
                "name" : "删除当前数据3",
                "handlerName" : "Remove",
                "params" : [ {
                  "id" : "f4860465-7597-4a04-13c9-45da176d3073",
                  "name" : "id",
                  "value" : "{DATA~/#{root-component}/id}",
                  "shownName" : "待删除数据的标识",
                  "description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "id",
                    "Name" : "待删除数据的标识",
                    "Description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "f4860465-7597-4a04-13c9-45da176d3073",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                  "name" : "refreshCommandName",
                  "value" : "",
                  "shownName" : "删除后回调方法",
                  "description" : "可选，可以指定删除数据后的回调方法，通常用来刷新数据，例如：指定LoadList方法",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "refreshCommandName",
                    "Name" : "删除后回调方法",
                    "Description" : "可选，可以指定删除数据后的回调方法，通常用来刷新数据，例如：指定LoadList方法",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "ComboLookup",
                      "context" : {
                        "data" : {
                          "type" : "string",
                          "value" : ":CommandsTree"
                        },
                        "columns" : {
                          "type" : "array",
                          "value" : "[{\"field\":\"id\",\"title\":\"Id\"},{\"field\":\"name\",\"title\":\"命令名称\"}]"
                        }
                      }
                    },
                    "Id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                  "name" : "refreshCommandFrameId",
                  "value" : "",
                  "shownName" : "目标组件",
                  "description" : "回调方法所在的组件标识",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "refreshCommandFrameId",
                    "Name" : "目标组件",
                    "Description" : "回调方法所在的组件标识",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Select",
                      "context" : {
                        "data" : {
                          "type" : "string",
                          "value" : ":Components"
                        }
                      }
                    },
                    "Id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                  "name" : "successMsg",
                  "value" : "",
                  "shownName" : "删除成功提示信息",
                  "description" : "可选，默认为“删除成功！”，如果不希望提示成功信息，可以传入{\"showMessage\": false }",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : null,
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "successMsg",
                    "Name" : "删除成功提示信息",
                    "Description" : "可选，默认为“删除成功！”，如果不希望提示成功信息，可以传入{\"showMessage\": false }",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "isNewGenerated" : true,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
                "label" : "ListController",
                "name" : "列表控制器"
              }
            } ]
          }
        } ]
      },
      "options" : {
        "enableTextArea" : true,
        "renderMode" : "compile",
        "enableDeleteSourceCode" : true,
        "changeSetPolicy" : "valid",
        "enableServerSideChangeDetection" : false
      }
    },
    "CreationDate" : null
  },
  "ExtendRule" : null,
  "RelativePath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}