{
  "Header" : {
    "Code" : "Teacher",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "Teacher",
    "FileName" : "Teacher.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "aecb04f5-5e1b-4d3c-9847-a34a8ec5b4c9",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "9c6091ed-6cd9-4261-a339-36ac83471688",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "Teacher.frm",
      "Name" : "Teacher.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "aecb04f5-5e1b-4d3c-9847-a34a8ec5b4c9",
    "Contents" : {
      "module" : {
        "id" : "Teacher",
        "code" : "Teacher",
        "name" : "Teacher",
        "caption" : "Teacher",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-09T12:42:57.005Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "eapiId" : "f2325200-a0a9-4b13-8bc0-4e9308dea327",
          "eapiCode" : "Teacher_frm",
          "eapiName" : "Teacher_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "name" : "Teacher_frm",
          "id" : "055c1cdc-6f76-4149-b8f3-dc8987878467",
          "sourceUri" : "api/apporder/df/v1.0/Teacher_frm",
          "sourceType" : "vo",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "variables" : [ ],
          "entities" : [ {
            "name" : "教师表",
            "id" : "b5ddb1ab-5d25-4fc8-8037-542f3ec6302b",
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
                "id" : "639d2693-04b3-4336-94e3-248184d67e3e",
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
                "originalId" : "639d2693-04b3-4336-94e3-248184d67e3e"
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
                "id" : "b6d4bea7-4076-404c-af84-5a70c7cf9278",
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
                "originalId" : "b6d4bea7-4076-404c-af84-5a70c7cf9278"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "教师工号",
                "id" : "e14b3b80-8ee4-4949-815f-4a7bac162052",
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
                "originalId" : "e14b3b80-8ee4-4949-815f-4a7bac162052"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "教师姓名",
                "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "name",
                "bindingField" : "name",
                "bindingPath" : "name",
                "code" : "name",
                "label" : "name",
                "originalId" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "所在院系",
                "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
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
                    "name" : "计算机学院",
                    "value" : "cs"
                  }, {
                    "disabled" : false,
                    "name" : "数学学院",
                    "value" : "math"
                  }, {
                    "disabled" : false,
                    "name" : "中文学院",
                    "value" : "Chinese"
                  }, {
                    "disabled" : false,
                    "name" : "法学院",
                    "value" : "falv"
                  } ]
                },
                "path" : "department",
                "bindingField" : "department",
                "bindingPath" : "department",
                "code" : "department",
                "label" : "department",
                "originalId" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a"
              }, {
                "$type" : "SimpleField",
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "密码",
                "id" : "dc6f345c-3c31-4feb-9921-11cace685d87",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "password",
                "bindingField" : "password",
                "bindingPath" : "password",
                "code" : "password",
                "label" : "password",
                "originalId" : "dc6f345c-3c31-4feb-9921-11cace685d87"
              }, {
                "$type" : "ComplexField",
                "name" : "邮箱",
                "id" : "d61de382-5bce-4907-b5ee-6ecbfdf8b800",
                "type" : {
                  "$type" : "ObjectType",
                  "name" : "EmailD61D",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "邮箱",
                    "id" : "d61de382-fa0f-456c-9c58-7ab52433e9b2",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 500,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "email.Email",
                    "bindingField" : "email_Email",
                    "bindingPath" : "email.email",
                    "code" : "Email",
                    "label" : "email",
                    "originalId" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2"
                  } ],
                  "displayName" : "邮箱"
                },
                "path" : "email",
                "bindingField" : "email",
                "bindingPath" : "email",
                "code" : "email",
                "label" : "email",
                "originalId" : "d61de382-5bce-4907-b5ee-6ecbfdf8b800"
              } ],
              "primary" : "id",
              "entities" : [ ],
              "name" : "Teacher",
              "displayName" : "教师表"
            },
            "code" : "Teacher",
            "label" : "teachers"
          } ],
          "code" : "Teacher_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "Teacher_state_machine",
          "name" : "Teacher_frm",
          "uri" : "9546ed69-1bfe-4eb6-9943-1dbf94ac4af8",
          "code" : "Teacher_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "教师表",
          "fields" : [ ],
          "stateMachine" : "Teacher_state_machine",
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
              "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
              "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
              "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
          "name" : "教师表",
          "fields" : [ {
            "type" : "Form",
            "id" : "e14b3b80-8ee4-4949-815f-4a7bac162052",
            "fieldName" : "teacher_id",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
            "fieldName" : "department",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "dc6f345c-3c31-4feb-9921-11cace685d87",
            "fieldName" : "password",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d61de382-fa0f-456c-9c58-7ab52433e9b2",
            "fieldName" : "email_Email",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
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
            "id" : "e72d71dd-d4dc-4c82-8937-4324d611c604",
            "code" : "datagridEdit1",
            "name" : "在新页签中编辑数据1",
            "params" : [ {
              "name" : "url",
              "shownName" : "功能菜单标识",
              "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
            "id" : "76bc7ada-ccaa-4a96-ac21-5b415749e654",
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
                  "id" : "639d2693-04b3-4336-94e3-248184d67e3e",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "id" : "639d2693-04b3-4336-94e3-248184d67e3e",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "b6d4bea7-4076-404c-af84-5a70c7cf9278",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "id" : "b6d4bea7-4076-404c-af84-5a70c7cf9278",
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd",
                    "weekSelect" : false,
                    "startFieldCode" : "Version",
                    "endFieldCode" : "Version"
                  }
                }, {
                  "id" : "e14b3b80-8ee4-4949-815f-4a7bac162052",
                  "labelCode" : "teacher_id",
                  "code" : "teacher_id",
                  "name" : "教师工号",
                  "control" : {
                    "id" : "e14b3b80-8ee4-4949-815f-4a7bac162052",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
                  "labelCode" : "name",
                  "code" : "name",
                  "name" : "教师姓名",
                  "control" : {
                    "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
                  "labelCode" : "department",
                  "code" : "department",
                  "name" : "所在院系",
                  "control" : {
                    "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "计算机学院",
                      "value" : "cs"
                    }, {
                      "disabled" : false,
                      "name" : "数学学院",
                      "value" : "math"
                    }, {
                      "disabled" : false,
                      "name" : "中文学院",
                      "value" : "Chinese"
                    }, {
                      "disabled" : false,
                      "name" : "法学院",
                      "value" : "falv"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null,
                    "idField" : "value",
                    "textField" : "name",
                    "uri" : ""
                  }
                }, {
                  "id" : "dc6f345c-3c31-4feb-9921-11cace685d87",
                  "labelCode" : "password",
                  "code" : "password",
                  "name" : "密码",
                  "control" : {
                    "id" : "dc6f345c-3c31-4feb-9921-11cace685d87",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "d61de382-fa0f-456c-9c58-7ab52433e9b2",
                  "labelCode" : "email.Email",
                  "code" : "Email",
                  "name" : "邮箱",
                  "control" : {
                    "id" : "d61de382-fa0f-456c-9c58-7ab52433e9b2",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
                  "labelCode" : "name",
                  "code" : "name",
                  "name" : "教师姓名",
                  "control" : {
                    "id" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
                  "labelCode" : "department",
                  "code" : "department",
                  "name" : "所在院系",
                  "control" : {
                    "id" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "disabled" : false,
                      "name" : "计算机学院",
                      "value" : "cs"
                    }, {
                      "disabled" : false,
                      "name" : "数学学院",
                      "value" : "math"
                    }, {
                      "disabled" : false,
                      "name" : "中文学院",
                      "value" : "Chinese"
                    }, {
                      "disabled" : false,
                      "name" : "法学院",
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
                "formId" : "Teacher",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'Teacher'}}</h4>"
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
              "dataSource" : "teachers",
              "fields" : [ {
                "id" : "teacher_id_e14b3b80_1rz4",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "教师工号",
                "captionTemplate" : null,
                "dataField" : "teacher_id",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "teacher_id",
                  "field" : "e14b3b80-8ee4-4949-815f-4a7bac162052",
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
                "id" : "name_c8912fac_r0fz",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "教师姓名",
                "captionTemplate" : null,
                "dataField" : "name",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "c8912fac-99d5-4d1b-8e2c-b97f5bd07503",
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
                "id" : "department_949fe0ca_ttk3",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "所在院系",
                "captionTemplate" : null,
                "dataField" : "department",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "department",
                  "field" : "949fe0ca-b83f-4e9e-ac5f-1ea1e4c3269a",
                  "fullPath" : "department"
                },
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "计算机学院",
                  "value" : "cs"
                }, {
                  "disabled" : false,
                  "name" : "数学学院",
                  "value" : "math"
                }, {
                  "disabled" : false,
                  "name" : "中文学院",
                  "value" : "Chinese"
                }, {
                  "disabled" : false,
                  "name" : "法学院",
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
                "id" : "password_dc6f345c_vpuv",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "密码",
                "captionTemplate" : null,
                "dataField" : "password",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "password",
                  "field" : "dc6f345c-3c31-4feb-9921-11cace685d87",
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
                "id" : "email_Email_d61de382_gryz",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "邮箱",
                "captionTemplate" : null,
                "dataField" : "email.email",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "email_Email",
                  "field" : "d61de382-fa0f-456c-9c58-7ab52433e9b2",
                  "fullPath" : "email.Email"
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
            "host" : "e72d71dd-d4dc-4c82-8937-4324d611c604",
            "handler" : "Edit"
          }, {
            "host" : "76bc7ada-ccaa-4a96-ac21-5b415749e654",
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
        "metadataId" : "aecb04f5-5e1b-4d3c-9847-a34a8ec5b4c9",
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
                  "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
                  "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
                  "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                  "name" : "url",
                  "value" : "df0de510-c510-474e-80a9-27c04654c084",
                  "shownName" : "功能菜单标识",
                  "description" : "必填，请选择查看数据页面的功能菜单",
                  "editorType" : "MenuIdSelector",
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
                    "Code" : "url",
                    "Name" : "功能菜单标识",
                    "Description" : "必填，请选择查看数据页面的功能菜单",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "MenuIdSelector",
                      "context" : null
                    },
                    "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/#{data-grid-component}/id}\"}",
                  "shownName" : "附加参数",
                  "description" : "由列表界面传递给查看数据页面的参数",
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
                    "Code" : "params",
                    "Name" : "附加参数",
                    "Description" : "由列表界面传递给查看数据页面的参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "ConfigurationParameterEditor",
                      "context" : {
                        "schema" : {
                          "type" : "object",
                          "value" : "[{\"id\":\"action\",\"label\":\"action\",\"description\":\"进入页面后执行的初始动作\"},{\"id\":\"id\",\"label\":\"id\",\"description\":\"要查看的数据id\"},{\"id\":\"sync\",\"label\":\"sync\",\"description\":\"进入页面后切换到查看状态\",\"defaultValue\": true,\"editorType\":\"Switch\"}]"
                        }
                      }
                    },
                    "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                  "name" : "idToView",
                  "value" : "{DATA~/#{data-grid-component}/id}",
                  "shownName" : "待查看数据的标识",
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
                    "Code" : "idToView",
                    "Name" : "待查看数据的标识",
                    "Description" : "必填，一般为指向列表当前行id的数据表达式，例如：{DATA~/data-grid-component/id}",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "支持刷新列表数据",
                  "description" : "启用此选项后，由查看数据页面切换回列表页面时，会自动刷新列表数据",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : "true",
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "enableRefresh",
                    "Name" : "支持刷新列表数据",
                    "Description" : "启用此选项后，由查看数据页面切换回列表页面时，会自动刷新列表数据",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "查看数据页签的标题",
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
                    "Code" : "tabName",
                    "Name" : "标签页标题",
                    "Description" : "查看数据页签的标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                  "name" : "destructuring",
                  "value" : "",
                  "shownName" : "是否解构参数",
                  "description" : "是否解构参数",
                  "editorType" : null,
                  "isRetVal" : false,
                  "origin" : {
                    "dict" : null,
                    "required" : null,
                    "defaultValue" : "false",
                    "constraint" : null,
                    "kind" : "DefaultParameter",
                    "controlType" : null,
                    "helpInfo" : null,
                    "paramConstraint" : null,
                    "enumCollection" : [ ],
                    "extensionKeys" : null,
                    "Code" : "destructuring",
                    "Name" : "是否解构参数",
                    "Description" : "是否解构参数",
                    "ParameterType" : "string",
                    "controlSource" : {
                      "type" : "Switch",
                      "context" : null
                    },
                    "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
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
                "id" : "e72d71dd-d4dc-4c82-8937-4324d611c604",
                "label" : "datagridEdit1",
                "name" : "在新页签中编辑数据1",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "url",
                  "shownName" : "功能菜单标识",
                  "value" : "df0de510-c510-474e-80a9-27c04654c084"
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
                "id" : "76bc7ada-ccaa-4a96-ac21-5b415749e654",
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