{
  "Header" : {
    "Code" : "StuCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "StuCard",
    "FileName" : "StuCard.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "67d7bdb3-8a41-43a1-b542-3bec9af787a4",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "9e47d9f1-bf86-48c5-8b04-7a8870ec7c48",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "StuCard.frm",
      "Name" : "StuCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "67d7bdb3-8a41-43a1-b542-3bec9af787a4",
    "Contents" : {
      "module" : {
        "id" : "StuCard",
        "code" : "StuCard",
        "name" : "StuCard",
        "caption" : "StuCard",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-08T14:28:57.408Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "eapiId" : "04b59fe5-5cc0-4bc9-a438-2ead582e1680",
          "eapiCode" : "StuCard_frm",
          "eapiName" : "StuCard_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "entities" : [ {
            "label" : "students",
            "id" : "2539c484-2faa-4a8d-a434-ab56e8f3440a",
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
                "id" : "3680b8ad-39e9-4691-ba60-fe471d1b3813",
                "path" : "ID",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "ID",
                "originalId" : "3680b8ad-39e9-4691-ba60-fe471d1b3813",
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
                "id" : "5b730460-3b61-45ca-8142-0b6666d3ff50",
                "path" : "Version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "code" : "Version",
                "originalId" : "5b730460-3b61-45ca-8142-0b6666d3ff50",
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
                "id" : "f600c0ec-36d2-4b9a-a8b0-a32e0285d454",
                "path" : "student_id",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "student_id",
                "originalId" : "f600c0ec-36d2-4b9a-a8b0-a32e0285d454",
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
                "id" : "05ec4601-6b7f-460b-b509-40e16e12f815",
                "path" : "name",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "name",
                "originalId" : "05ec4601-6b7f-460b-b509-40e16e12f815",
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
                "id" : "59a52474-09ba-4b7f-97a6-b54b7c4bbbe3",
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
                "originalId" : "59a52474-09ba-4b7f-97a6-b54b7c4bbbe3",
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
                "id" : "475ed361-309b-4f1a-8a66-b9bf72031ff7",
                "path" : "password",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "password",
                "originalId" : "475ed361-309b-4f1a-8a66-b9bf72031ff7",
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
                "id" : "e01f1a35-65be-4259-89ea-ebbd5e55e65d",
                "path" : "birth",
                "type" : {
                  "$type" : "DateType",
                  "displayName" : "日期",
                  "name" : "Date"
                },
                "code" : "birth",
                "originalId" : "e01f1a35-65be-4259-89ea-ebbd5e55e65d",
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
                "id" : "498f38ff-f012-49d4-832d-c612766635e2",
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
                "originalId" : "498f38ff-f012-49d4-832d-c612766635e2",
                "bindingPath" : "major",
                "bindingField" : "major",
                "name" : "专业名称"
              }, {
                "$type" : "ComplexField",
                "label" : "phone",
                "id" : "fdbd27d1-d2fd-46c8-83d3-65cd4f833823",
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
                    "id" : "fdbd27d1-88d1-4769-bb7a-5490d92893fa",
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
                  "name" : "PhoneNumberFdbd",
                  "displayName" : "手机电话号码"
                },
                "code" : "phone",
                "originalId" : "fdbd27d1-d2fd-46c8-83d3-65cd4f833823",
                "bindingPath" : "phone",
                "bindingField" : "phone",
                "name" : "手机电话号码"
              }, {
                "$type" : "ComplexField",
                "label" : "email",
                "id" : "866d9869-cea4-4e12-829b-f0588a36d50d",
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
                    "id" : "866d9869-fa0f-456c-9c58-7ab52433e9b2",
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
                  "name" : "Email866d",
                  "displayName" : "邮箱"
                },
                "code" : "Email",
                "originalId" : "866d9869-cea4-4e12-829b-f0588a36d50d",
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
                "id" : "8f5ef340-ac97-4d88-aea7-818c2012b32c",
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
                "originalId" : "8f5ef340-ac97-4d88-aea7-818c2012b32c",
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
          "id" : "d26288c3-006e-4cae-8a71-889db78f0722",
          "sourceType" : "vo",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "StuCard_frm",
          "sourceUri" : "api/apporder/df/v1.0/StuCard_frm",
          "name" : "StuCard_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "StuCard_state_machine",
          "name" : "StuCard_frm",
          "uri" : "29e1d9a4-05dc-4680-845b-f1fc921f2b13",
          "code" : "StuCard_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "学生表",
          "fields" : [ ],
          "stateMachine" : "StuCard_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "执行加载页面后初始方法",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始方法",
              "value" : "{UISTATE~/#{root-component}/action}"
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "查看一条数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待查看数据的标识",
              "value" : "{UISTATE~/#{root-component}/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "待编辑数据的标识",
              "value" : "{UISTATE~/#{root-component}/id}"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增一条数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Create"
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑当前数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Edit"
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Save",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "code" : "Cancel1",
            "name" : "取消变更",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "切换上一条或下一条1",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "prev"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "切换上一条或下一条2",
            "params" : [ {
              "name" : "id",
              "shownName" : "当前数据标识",
              "value" : "{DATA~/#{root-component}/id}"
            }, {
              "name" : "type",
              "shownName" : "切换类型(prev|next)",
              "value" : "next"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态机动作",
              "value" : "Cancel"
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "states" : [ ],
          "bindTo" : "/",
          "enableUnifiedSession" : false
        }, {
          "id" : "basic-form-viewmodel",
          "code" : "basic-form-viewmodel",
          "name" : "学生表",
          "fields" : [ {
            "type" : "Form",
            "id" : "05ec4601-6b7f-460b-b509-40e16e12f815",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "59a52474-09ba-4b7f-97a6-b54b7c4bbbe3",
            "fieldName" : "gender",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change",
            "fieldSchema" : {
              "editor" : {
                "$type" : "RadioGroup"
              },
              "name" : "性别",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "e01f1a35-65be-4259-89ea-ebbd5e55e65d",
            "fieldName" : "birth",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "498f38ff-f012-49d4-832d-c612766635e2",
            "fieldName" : "major",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "fdbd27d1-88d1-4769-bb7a-5490d92893fa",
            "fieldName" : "phone_PhoneNumber",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "866d9869-fa0f-456c-9c58-7ab52433e9b2",
            "fieldName" : "email_Email",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "8f5ef340-ac97-4d88-aea7-818c2012b32c",
            "fieldName" : "state",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        } ],
        "components" : [ {
          "id" : "root-component",
          "type" : "Component",
          "viewModel" : "root-viewmodel",
          "componentType" : "Frame",
          "onInit" : "Load1",
          "contents" : [ {
            "id" : "root-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-page f-page-card f-page-is-mainsubcard"
            },
            "size" : null,
            "contents" : [ {
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'StuCard'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                    "text" : "新增",
                    "appearance" : {
                      "class" : "btn-primary"
                    },
                    "disable" : "!viewModel.stateMachine['canAdd']",
                    "visible" : true,
                    "click" : "Add1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-edit",
                    "type" : "ToolBarItem",
                    "text" : "编辑",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canEdit']",
                    "visible" : true,
                    "click" : "Edit1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-save",
                    "type" : "ToolBarItem",
                    "text" : "保存",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canSave']",
                    "visible" : true,
                    "click" : "Save1",
                    "items" : [ ],
                    "usageMode" : "button",
                    "modalConfig" : null
                  }, {
                    "id" : "button-cancel",
                    "type" : "ToolBarItem",
                    "text" : "取消",
                    "appearance" : null,
                    "disable" : "!viewModel.stateMachine['canCancel']",
                    "visible" : true,
                    "click" : "Cancel1",
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
              "id" : "main-container",
              "type" : "ContentContainer",
              "appearance" : {
                "class" : "f-page-main"
              },
              "size" : null,
              "contents" : [ {
                "id" : "like-card-container",
                "type" : "ContentContainer",
                "appearance" : {
                  "class" : "f-struct-like-card"
                },
                "size" : null,
                "contents" : [ {
                  "id" : "basic-form-component-ref",
                  "type" : "ComponentRef",
                  "component" : "basic-form-component",
                  "visible" : true
                } ],
                "visible" : true,
                "draggable" : false,
                "isLikeCardContainer" : true,
                "isScrollspyContainer" : false
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
          "id" : "basic-form-component",
          "type" : "Component",
          "viewModel" : "basic-form-viewmodel",
          "componentType" : "form-col-4",
          "appearance" : {
            "class" : "f-struct-wrapper"
          },
          "onInit" : "",
          "contents" : [ {
            "id" : "basic-form-section",
            "type" : "Section",
            "appearance" : {
              "class" : "f-section-form f-section-in-mainsubcard"
            },
            "visible" : true,
            "mainTitle" : "基本信息",
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
            "showHeader" : true,
            "headerTemplate" : "",
            "titleTemplate" : "",
            "extendedHeaderAreaTemplate" : "",
            "toolbarTemplate" : "",
            "extendedAreaTemplate" : "",
            "contents" : [ {
              "id" : "basic-form-layout",
              "type" : "Form",
              "appearance" : {
                "class" : "f-form-layout farris-form farris-form-controls-inline"
              },
              "size" : null,
              "contents" : [ {
                "id" : "name_05ec4601_lmn1",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "姓名",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "05ec4601-6b7f-460b-b509-40e16e12f815",
                  "fullPath" : "name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "name",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "gender_59a52474_g0yq",
                "type" : "RadioGroup",
                "titleSourceType" : "static",
                "title" : "性别",
                "binding" : {
                  "type" : "Form",
                  "path" : "gender",
                  "field" : "59a52474-09ba-4b7f-97a6-b54b7c4bbbe3",
                  "fullPath" : "gender"
                },
                "placeHolder" : "",
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "男",
                  "value" : "man"
                }, {
                  "disabled" : false,
                  "name" : "女",
                  "value" : "woman"
                } ],
                "isHorizontal" : true,
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "dataSourceType" : "static",
                "textField" : "name",
                "valueField" : "value",
                "path" : "gender",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "change"
              }, {
                "id" : "birth_e01f1a35_elhd",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "生日",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "birth",
                  "field" : "e01f1a35-65be-4259-89ea-ebbd5e55e65d",
                  "fullPath" : "birth"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "validation" : null,
                "value" : null,
                "editable" : true,
                "dateRange" : false,
                "showTime" : false,
                "showType" : 1,
                "dateFormat" : "yyyy-MM-dd",
                "returnFormat" : "yyyy-MM-dd",
                "maxValue" : null,
                "minValue" : null,
                "disableDates" : [ ],
                "showWeekNumbers" : false,
                "dateRangeDatesDelimiter" : "~",
                "shortcuts" : [ ],
                "fieldType" : "Date",
                "useDefault" : false,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "localization" : false,
                "path" : "birth",
                "localizationType" : "Date",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "hourStep" : 1,
                "minuteStep" : 1,
                "secondStep" : 1,
                "firstDayOfWeek" : "mo"
              }, {
                "id" : "major_498f38ff_w7gp",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "专业名称",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "major",
                  "field" : "498f38ff-f012-49d4-832d-c612766635e2",
                  "fullPath" : "major"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
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
                "holdPlace" : false,
                "isTextArea" : true,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "idField" : "value",
                "textField" : "name",
                "multiSelect" : false,
                "uri" : "",
                "autoWidth" : true,
                "enableClear" : false,
                "onClear" : null,
                "valueChanged" : null,
                "onShown" : null,
                "onHidden" : null,
                "editable" : false,
                "enableCancelSelected" : false,
                "beforeShow" : null,
                "beforeHide" : null,
                "dataSourceType" : "static",
                "path" : "major",
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "showDisabledItem" : true,
                "labelAutoOverflow" : false,
                "updateOn" : "change"
              }, {
                "id" : "phone_PhoneNumber_fdbd27d1_2f83",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "手机电话号码",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "phone_PhoneNumber",
                  "field" : "fdbd27d1-88d1-4769-bb7a-5490d92893fa",
                  "fullPath" : "phone.PhoneNumber"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 36,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "phone.phoneNumber",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "email_Email_866d9869_4nvh",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "邮箱",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "email_Email",
                  "field" : "866d9869-fa0f-456c-9c58-7ab52433e9b2",
                  "fullPath" : "Email.Email"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 500,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "holdPlace" : false,
                "isTextArea" : true,
                "isPassword" : false,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "enableTips" : true,
                "path" : "email.email",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500
              }, {
                "id" : "state_8f5ef340_3lfl",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "状态",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "state",
                  "field" : "8f5ef340-ac97-4d88-aea7-818c2012b32c",
                  "fullPath" : "State"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "正常",
                  "value" : "zc"
                }, {
                  "disabled" : false,
                  "name" : "禁用",
                  "value" : "jy"
                } ],
                "holdPlace" : false,
                "isTextArea" : true,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "idField" : "value",
                "textField" : "name",
                "multiSelect" : false,
                "uri" : "",
                "autoWidth" : true,
                "enableClear" : false,
                "onClear" : null,
                "valueChanged" : null,
                "onShown" : null,
                "onHidden" : null,
                "editable" : false,
                "enableCancelSelected" : false,
                "beforeShow" : null,
                "beforeHide" : null,
                "dataSourceType" : "static",
                "path" : "state",
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "autoHeight" : false,
                "maxHeight" : 500,
                "showDisabledItem" : true,
                "labelAutoOverflow" : false,
                "updateOn" : "change"
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true,
              "labelAutoOverflow" : false
            } ],
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
          "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
          "path" : "/projects/packages/Inspur.GS.Gsp.Web.WebCmp/webcmd",
          "name" : "CardController.webcmd",
          "refedHandlers" : [ {
            "host" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "handler" : "Load"
          }, {
            "host" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "handler" : "LoadAndAdd"
          }, {
            "host" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "handler" : "LoadAndView"
          }, {
            "host" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "handler" : "LoadAndEdit"
          }, {
            "host" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "handler" : "Add"
          }, {
            "host" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "handler" : "Edit"
          }, {
            "host" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "handler" : "Save"
          }, {
            "host" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
            "handler" : "Cancel"
          }, {
            "host" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "handler" : "ChangeItem"
          }, {
            "host" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "handler" : "ChangeItem"
          } ],
          "code" : "CardController",
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
        "metadataId" : "67d7bdb3-8a41-43a1-b542-3bec9af787a4",
        "actions" : [ {
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
                "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
                "label" : "Add1",
                "name" : "新增一条数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Create"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
                "label" : "Edit1",
                "name" : "编辑当前数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Edit"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-save",
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
                "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
                "label" : "Save1",
                "name" : "保存变更",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
              }
            } ]
          }
        }, {
          "sourceComponent" : {
            "id" : "button-cancel",
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
                "id" : "4f5ed2ec-8def-4a3c-8e7b-397ea93010e8",
                "label" : "Cancel1",
                "name" : "取消变更",
                "handlerName" : "Cancel",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态机动作",
                  "value" : "Cancel"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
                "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
                "label" : "Load1",
                "name" : "执行加载页面后初始方法",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "action",
                  "shownName" : "初始方法",
                  "value" : "{UISTATE~/#{root-component}/action}"
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "isNewGenerated" : false,
                "isInvalid" : false
              },
              "controller" : {
                "id" : "8172a979-2c80-4637-ace7-b13074d3f393",
                "label" : "CardController",
                "name" : "卡片控制器"
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
        "enableServerSideChangeDetection" : true
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