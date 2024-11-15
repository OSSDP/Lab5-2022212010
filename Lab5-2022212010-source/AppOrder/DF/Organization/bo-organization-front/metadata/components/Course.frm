{
  "Header" : {
    "Code" : "Course",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "Course",
    "FileName" : "Course.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "a3644adc-7932-464a-8d00-f19221373b2b",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "264b0de5-7619-4493-8192-1853f3809850",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "Course.frm",
      "Name" : "Course.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "a3644adc-7932-464a-8d00-f19221373b2b",
    "Contents" : {
      "module" : {
        "id" : "Course",
        "code" : "Course",
        "name" : "Course",
        "caption" : "Course",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-09T13:25:00.093Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "eapiId" : "e6025682-6b2f-4b30-8547-8e0796ccd7a2",
          "eapiCode" : "Course_frm",
          "eapiName" : "Course_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "name" : "Course_frm",
          "id" : "c2dd87db-465f-456d-b634-e1618020d675",
          "sourceUri" : "api/apporder/df/v1.0/Course_frm",
          "sourceType" : "vo",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "variables" : [ ],
          "entities" : [ {
            "name" : "课程表",
            "id" : "1e6559ee-16bc-4fd9-b403-b739971ef900",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "主键",
                "id" : "ece48b07-a07e-4516-824e-ef9cdaf87405",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "bindingField" : "id",
                "bindingPath" : "id",
                "code" : "ID",
                "label" : "id",
                "originalId" : "ece48b07-a07e-4516-824e-ef9cdaf87405"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "版本",
                "id" : "2caadeea-35e0-4efa-ac2d-3a6a5529a6c8",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "bindingField" : "version",
                "bindingPath" : "version",
                "code" : "Version",
                "label" : "version",
                "originalId" : "2caadeea-35e0-4efa-ac2d-3a6a5529a6c8"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "课程编号",
                "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "courseId",
                "bindingField" : "courseId",
                "bindingPath" : "courseId",
                "code" : "courseId",
                "label" : "courseId",
                "originalId" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "课程名称",
                "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "course_name",
                "bindingField" : "course_name",
                "bindingPath" : "course_name",
                "code" : "course_name",
                "label" : "course_name",
                "originalId" : "0fe03859-e264-42ea-bf7c-036bbbf86549"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "课程学分",
                "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "credits",
                "bindingField" : "credits",
                "bindingPath" : "credits",
                "code" : "credits",
                "label" : "credits",
                "originalId" : "94b90941-beef-473f-acdf-8ee16183ae31"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "授课教师",
                "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "teacher_id",
                "bindingField" : "teacher_id",
                "bindingPath" : "teacher_id",
                "code" : "teacher_id",
                "label" : "teacher_id",
                "originalId" : "15e20fea-976b-407f-be36-2b1c23615cdd"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "最大选课人数",
                "id" : "3b170260-120d-4d54-9969-ab8e81748093",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "max_students",
                "bindingField" : "max_students",
                "bindingPath" : "max_students",
                "code" : "max_students",
                "label" : "max_students",
                "originalId" : "3b170260-120d-4d54-9969-ab8e81748093"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "课程学期",
                "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "semester",
                "bindingField" : "semester",
                "bindingPath" : "semester",
                "code" : "semester",
                "label" : "semester",
                "originalId" : "72076de8-d624-4799-8c56-225c35c38dfe"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "课程安排",
                "id" : "58813dc6-0046-49c8-8269-4becf6337d9c",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "schedule",
                "bindingField" : "schedule",
                "bindingPath" : "schedule",
                "code" : "schedule",
                "label" : "schedule",
                "originalId" : "58813dc6-0046-49c8-8269-4becf6337d9c"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "课程状态",
                "id" : "4663043d-914b-44ad-89e4-091a013e0505",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 36,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "disabled" : false,
                    "name" : "进行中",
                    "value" : "jxz"
                  }, {
                    "disabled" : false,
                    "name" : "已结束",
                    "value" : "yjs"
                  } ]
                },
                "path" : "State",
                "bindingField" : "state",
                "bindingPath" : "state",
                "code" : "State",
                "label" : "state",
                "originalId" : "4663043d-914b-44ad-89e4-091a013e0505"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "Course",
              "displayName" : "课程表"
            },
            "code" : "Course",
            "label" : "courses"
          } ],
          "code" : "Course_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "Course_state_machine",
          "name" : "Course_frm",
          "uri" : "d7950003-1035-43ff-b764-e43ac2d2b5f5",
          "code" : "Course_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "课程表",
          "fields" : [ ],
          "stateMachine" : "Course_state_machine",
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
              "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "在新页签中查看数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
            }, {
              "name" : "params",
              "shownName" : "附加参数",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
            }, {
              "name" : "idToView",
              "shownName" : "待查看数据的标识",
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
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "在新页签中编辑数据",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{data-grid-component}/id}"
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
            "isNewGenerated" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/#{root-component}/originalFilterConditionList}"
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
          "name" : "课程表",
          "fields" : [ {
            "type" : "Form",
            "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
            "fieldName" : "courseId",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
            "fieldName" : "course_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
            "fieldName" : "credits",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
            "fieldName" : "teacher_id",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "3b170260-120d-4d54-9969-ab8e81748093",
            "fieldName" : "max_students",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
            "fieldName" : "semester",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "58813dc6-0046-49c8-8269-4becf6337d9c",
            "fieldName" : "schedule",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "4663043d-914b-44ad-89e4-091a013e0505",
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
            "id" : "1f96e6d7-1225-4030-ab82-23c4fd311130",
            "code" : "datagridEdit1",
            "name" : "在新页签中编辑数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
            "id" : "84e1d95e-9315-4592-af7b-b78e3f6e00c1",
            "code" : "datagridRemove1",
            "name" : "删除当前数据1",
            "params" : [ {
              "name" : "id",
              "shownName" : "待删除数据的标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "refreshCommandName",
              "shownName" : "删除后回调方法",
              "value" : "Filter1"
            }, {
              "name" : "refreshCommandFrameId",
              "shownName" : "目标组件",
              "value" : "#{root-component}"
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
              "class" : "f-page f-page-is-managelist f-page-has-scheme"
            },
            "size" : null,
            "contents" : [ {
              "id" : "query-scheme-section",
              "type" : "Section",
              "appearance" : {
                "class" : "f-section-scheme f-section-in-managelist"
              },
              "size" : null,
              "fill" : false,
              "expanded" : true,
              "showHeader" : false,
              "contents" : [ {
                "id" : "query-scheme-1",
                "type" : "QueryScheme",
                "appearance" : null,
                "fieldConfigs" : [ {
                  "id" : "ece48b07-a07e-4516-824e-ef9cdaf87405",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "ece48b07-a07e-4516-824e-ef9cdaf87405",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "2caadeea-35e0-4efa-ac2d-3a6a5529a6c8",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "2caadeea-35e0-4efa-ac2d-3a6a5529a6c8",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false,
                    "startFieldCode" : "Version",
                    "endFieldCode" : "Version"
                  }
                }, {
                  "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                  "labelCode" : "courseId",
                  "code" : "courseId",
                  "name" : "课程编号",
                  "control" : {
                    "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                  "labelCode" : "course_name",
                  "code" : "course_name",
                  "name" : "课程名称",
                  "control" : {
                    "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
                  "labelCode" : "credits",
                  "code" : "credits",
                  "name" : "课程学分",
                  "control" : {
                    "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                  "labelCode" : "teacher_id",
                  "code" : "teacher_id",
                  "name" : "授课教师",
                  "control" : {
                    "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "3b170260-120d-4d54-9969-ab8e81748093",
                  "labelCode" : "max_students",
                  "code" : "max_students",
                  "name" : "最大选课人数",
                  "control" : {
                    "id" : "3b170260-120d-4d54-9969-ab8e81748093",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
                  "labelCode" : "semester",
                  "code" : "semester",
                  "name" : "课程学期",
                  "control" : {
                    "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "58813dc6-0046-49c8-8269-4becf6337d9c",
                  "labelCode" : "schedule",
                  "code" : "schedule",
                  "name" : "课程安排",
                  "control" : {
                    "id" : "58813dc6-0046-49c8-8269-4becf6337d9c",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "4663043d-914b-44ad-89e4-091a013e0505",
                  "labelCode" : "State",
                  "code" : "State",
                  "name" : "课程状态",
                  "control" : {
                    "id" : "4663043d-914b-44ad-89e4-091a013e0505",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "进行中",
                      "value" : "jxz"
                    }, {
                      "disabled" : false,
                      "name" : "已结束",
                      "value" : "yjs"
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
                  "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                  "labelCode" : "courseId",
                  "code" : "courseId",
                  "name" : "课程编号",
                  "control" : {
                    "id" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                  "labelCode" : "course_name",
                  "code" : "course_name",
                  "name" : "课程名称",
                  "control" : {
                    "id" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
                  "labelCode" : "credits",
                  "code" : "credits",
                  "name" : "课程学分",
                  "control" : {
                    "id" : "94b90941-beef-473f-acdf-8ee16183ae31",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                  "labelCode" : "teacher_id",
                  "code" : "teacher_id",
                  "name" : "授课教师",
                  "control" : {
                    "id" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
                  "labelCode" : "semester",
                  "code" : "semester",
                  "name" : "课程学期",
                  "control" : {
                    "id" : "72076de8-d624-4799-8c56-225c35c38dfe",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                } ],
                "formId" : "Course",
                "isDisabled" : false,
                "presetQuerySolutionName" : "默认筛选方案",
                "onQuery" : "Filter1",
                "isControlInline" : true,
                "visible" : true,
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
              "visible" : true,
              "mainTitle" : "主标题",
              "subTitle" : "",
              "headerClass" : "",
              "titleClass" : "",
              "extendedHeaderAreaClass" : "",
              "toolbarClass" : "",
              "extendedAreaClass" : "",
              "contentTemplateClass" : "",
              "enableMaximize" : false,
              "enableAccordion" : true,
              "accordionMode" : "default",
              "headerTemplate" : "",
              "titleTemplate" : "",
              "extendedHeaderAreaTemplate" : "",
              "toolbarTemplate" : "",
              "extendedAreaTemplate" : "",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'Course'}}</h4>"
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
                    "click" : "Add1",
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
                    "click" : "Edit1",
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
                    "click" : "View1",
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
                    "click" : "Remove1",
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
              "dataSource" : "courses",
              "fields" : [ {
                "id" : "courseId_f727a729_2l2j",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程编号",
                "captionTemplate" : null,
                "dataField" : "courseId",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "courseId",
                  "field" : "f727a729-a38a-43a9-b08e-c9b9e2c806f8",
                  "fullPath" : "courseId"
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
                "id" : "course_name_0fe03859_zolf",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程名称",
                "captionTemplate" : null,
                "dataField" : "course_name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "course_name",
                  "field" : "0fe03859-e264-42ea-bf7c-036bbbf86549",
                  "fullPath" : "course_name"
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
                "id" : "credits_94b90941_e0xq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程学分",
                "captionTemplate" : null,
                "dataField" : "credits",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "credits",
                  "field" : "94b90941-beef-473f-acdf-8ee16183ae31",
                  "fullPath" : "credits"
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
                "id" : "teacher_id_15e20fea_lxuh",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "授课教师",
                "captionTemplate" : null,
                "dataField" : "teacher_id",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "teacher_id",
                  "field" : "15e20fea-976b-407f-be36-2b1c23615cdd",
                  "fullPath" : "teacher_id"
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
                "id" : "max_students_3b170260_6s75",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "最大选课人数",
                "captionTemplate" : null,
                "dataField" : "max_students",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "max_students",
                  "field" : "3b170260-120d-4d54-9969-ab8e81748093",
                  "fullPath" : "max_students"
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
                "id" : "semester_72076de8_1eqr",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程学期",
                "captionTemplate" : null,
                "dataField" : "semester",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "semester",
                  "field" : "72076de8-d624-4799-8c56-225c35c38dfe",
                  "fullPath" : "semester"
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
                "id" : "schedule_58813dc6_8qob",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程安排",
                "captionTemplate" : null,
                "dataField" : "schedule",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "schedule",
                  "field" : "58813dc6-0046-49c8-8269-4becf6337d9c",
                  "fullPath" : "schedule"
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
                "id" : "state_4663043d_cg5t",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "课程状态",
                "captionTemplate" : null,
                "dataField" : "state",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "state",
                  "field" : "4663043d-914b-44ad-89e4-091a013e0505",
                  "fullPath" : "State"
                },
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "进行中",
                  "value" : "jxz"
                }, {
                  "disabled" : false,
                  "name" : "已结束",
                  "value" : "yjs"
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
              "pageChange" : "ChangePage1",
              "pageSizeChanged" : "ChangePage1",
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
              "onEditClicked" : "datagridEdit1",
              "onDeleteClicked" : "datagridRemove1",
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
            "host" : "1f96e6d7-1225-4030-ab82-23c4fd311130",
            "handler" : "Edit"
          }, {
            "host" : "84e1d95e-9315-4592-af7b-b78e3f6e00c1",
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
        "metadataId" : "a3644adc-7932-464a-8d00-f19221373b2b",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "query-scheme-1",
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
                  "value" : "{UISTATE~/#{root-component}/originalFilterConditionList}"
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
                "id" : "77556491-41c0-4356-8ccf-25e39817060e",
                "label" : "Add1",
                "name" : "在新页签中新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
                "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
                "label" : "Edit1",
                "name" : "在新页签中编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
                "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
                "label" : "View1",
                "name" : "在新页签中查看数据",
                "handlerName" : "View",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
                }, {
                  "name" : "params",
                  "shownName" : "附加参数",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}"
                }, {
                  "name" : "idToView",
                  "shownName" : "待查看数据的标识",
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
                "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
                "label" : "Remove1",
                "name" : "删除当前数据",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/#{data-grid-component}/id}"
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
                  "value" : "{UISTATE~/#{root-component}/originalFilterConditionList}"
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
                "label" : "pageSizeChanged",
                "name" : "分页条数变化事件"
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
                "id" : "1f96e6d7-1225-4030-ab82-23c4fd311130",
                "label" : "datagridEdit1",
                "name" : "在新页签中编辑数据1",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "f565dcb3-5e0a-4719-8015-b01cfb8eb7a4"
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
                "id" : "84e1d95e-9315-4592-af7b-b78e3f6e00c1",
                "label" : "datagridRemove1",
                "name" : "删除当前数据1",
                "handlerName" : "Remove",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "待删除数据的标识",
                  "value" : "{DATA~/#{root-component}/id}"
                }, {
                  "name" : "refreshCommandName",
                  "shownName" : "删除后回调方法",
                  "value" : "Filter1"
                }, {
                  "name" : "refreshCommandFrameId",
                  "shownName" : "目标组件",
                  "value" : "#{root-component}"
                }, {
                  "name" : "successMsg",
                  "shownName" : "删除成功提示信息",
                  "value" : ""
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