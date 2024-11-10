{
  "Header" : {
    "Code" : "CourseCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "CourseCard",
    "FileName" : "CourseCard.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "725c831f-9ac3-448c-87d3-1a0b5559ecf2",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "83a5c02e-193e-4e66-94e1-cb3be806c1ac",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "CourseCard.frm",
      "Name" : "CourseCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "725c831f-9ac3-448c-87d3-1a0b5559ecf2",
    "Contents" : {
      "module" : {
        "id" : "CourseCard",
        "code" : "CourseCard",
        "name" : "CourseCard",
        "caption" : "CourseCard",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-08T14:39:20.562Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "eapiId" : "fb0c863c-4931-43af-a050-8386651f05d7",
          "eapiCode" : "CourseCard_frm",
          "eapiName" : "CourseCard_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "entities" : [ {
            "label" : "courses",
            "id" : "f2899fe4-2398-4612-b4dc-ea1b70f4392e",
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
                "id" : "f50ed50a-7f94-429f-81a0-5a37a6280fa9",
                "path" : "ID",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "ID",
                "originalId" : "f50ed50a-7f94-429f-81a0-5a37a6280fa9",
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
                "id" : "dc533778-7c87-49d9-ad28-bf6b0f3343b5",
                "path" : "Version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "code" : "Version",
                "originalId" : "dc533778-7c87-49d9-ad28-bf6b0f3343b5",
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
                "label" : "courseId",
                "id" : "b5545594-ab4f-4b0e-8827-b068b8f3252e",
                "path" : "courseId",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "courseId",
                "originalId" : "b5545594-ab4f-4b0e-8827-b068b8f3252e",
                "bindingPath" : "courseId",
                "bindingField" : "courseId",
                "name" : "课程编号"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "course_name",
                "id" : "03e8313b-f37d-4563-93f3-fa5f88781e2c",
                "path" : "course_name",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "course_name",
                "originalId" : "03e8313b-f37d-4563-93f3-fa5f88781e2c",
                "bindingPath" : "course_name",
                "bindingField" : "course_name",
                "name" : "课程名称"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "credits",
                "id" : "ded82c86-911c-418a-8d1c-e35935d5bd47",
                "path" : "credits",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "credits",
                "originalId" : "ded82c86-911c-418a-8d1c-e35935d5bd47",
                "bindingPath" : "credits",
                "bindingField" : "credits",
                "name" : "课程学分"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "teacher_id",
                "id" : "e62946f4-0801-4a9f-8f09-10f94b390873",
                "path" : "teacher_id",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "teacher_id",
                "originalId" : "e62946f4-0801-4a9f-8f09-10f94b390873",
                "bindingPath" : "teacher_id",
                "bindingField" : "teacher_id",
                "name" : "授课教师"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "max_students",
                "id" : "87371daf-0850-4999-8a14-6f906cdbade4",
                "path" : "max_students",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "max_students",
                "originalId" : "87371daf-0850-4999-8a14-6f906cdbade4",
                "bindingPath" : "max_students",
                "bindingField" : "max_students",
                "name" : "最大选课人数"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "semester",
                "id" : "ed40d007-d874-4e2c-a45a-9a8eed7da50c",
                "path" : "semester",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "semester",
                "originalId" : "ed40d007-d874-4e2c-a45a-9a8eed7da50c",
                "bindingPath" : "semester",
                "bindingField" : "semester",
                "name" : "课程学期"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "schedule",
                "id" : "47f274b5-71c8-4bd8-90d2-8a5eaebf8e62",
                "path" : "schedule",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "schedule",
                "originalId" : "47f274b5-71c8-4bd8-90d2-8a5eaebf8e62",
                "bindingPath" : "schedule",
                "bindingField" : "schedule",
                "name" : "课程安排"
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
                "id" : "f8a51308-2dd4-4484-a260-9771b82441be",
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
                    "name" : "进行中",
                    "value" : "jxz"
                  }, {
                    "disabled" : false,
                    "name" : "已结束",
                    "value" : "yjs"
                  } ],
                  "displayName" : "枚举",
                  "name" : "Enum"
                },
                "code" : "State",
                "originalId" : "f8a51308-2dd4-4484-a260-9771b82441be",
                "bindingPath" : "state",
                "bindingField" : "state",
                "name" : "课程状态"
              } ],
              "primary" : "id",
              "displayName" : "课程表",
              "name" : "Course"
            },
            "code" : "Course",
            "name" : "课程表"
          } ],
          "id" : "d4455e77-c01c-408c-ad64-1a70287f7553",
          "sourceType" : "vo",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "CourseCard_frm",
          "sourceUri" : "api/apporder/df/v1.0/CourseCard_frm",
          "name" : "CourseCard_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "CourseCard_state_machine",
          "name" : "CourseCard_frm",
          "uri" : "ee53d5cc-b132-40e8-9fc8-0ade7608fdfd",
          "code" : "CourseCard_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "课程表",
          "fields" : [ ],
          "stateMachine" : "CourseCard_state_machine",
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
          "name" : "课程表",
          "fields" : [ {
            "type" : "Form",
            "id" : "03e8313b-f37d-4563-93f3-fa5f88781e2c",
            "fieldName" : "course_name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "ded82c86-911c-418a-8d1c-e35935d5bd47",
            "fieldName" : "credits",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "e62946f4-0801-4a9f-8f09-10f94b390873",
            "fieldName" : "teacher_id",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "Course.teacher_id",
                  "displayName" : "老师",
                  "idField" : "id",
                  "type" : "ViewObject",
                  "helpCode" : "Teacher"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'name':'teacher_id'}",
                "helpId" : "6a86929f-24af-4a00-817c-9f0dba3b7ebb"
              },
              "name" : "授课教师",
              "require" : true,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "87371daf-0850-4999-8a14-6f906cdbade4",
            "fieldName" : "max_students",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "ed40d007-d874-4e2c-a45a-9a8eed7da50c",
            "fieldName" : "semester",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "47f274b5-71c8-4bd8-90d2-8a5eaebf8e62",
            "fieldName" : "schedule",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "f8a51308-2dd4-4484-a260-9771b82441be",
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'CourseCard'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                "id" : "course_name_03e8313b_71j3",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "课程名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "course_name",
                  "field" : "03e8313b-f37d-4563-93f3-fa5f88781e2c",
                  "fullPath" : "course_name"
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
                "path" : "course_name",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "credits_ded82c86_trz4",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "课程学分",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "credits",
                  "field" : "ded82c86-911c-418a-8d1c-e35935d5bd47",
                  "fullPath" : "credits"
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
                "path" : "credits",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "teacher_id_e62946f4_3geq",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "授课教师",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "teacher_id",
                  "field" : "e62946f4-0801-4a9f-8f09-10f94b390873",
                  "fullPath" : "teacher_id"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : true,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "Course.teacher_id",
                  "displayName" : "老师",
                  "idField" : "id",
                  "type" : "ViewObject",
                  "helpCode" : "Teacher"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "List",
                "multiSelect" : false,
                "pageList" : "10,20,30,50",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'name':'teacher_id'}",
                "lookupStyle" : "popup",
                "holdPlace" : false,
                "isTextArea" : true,
                "useTip" : false,
                "useFavorite" : true,
                "noSearch" : false,
                "maxSearchLength" : 36,
                "enableToSelect" : true,
                "isRecordSize" : false,
                "lookupPicking" : null,
                "lookupPicked" : null,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "enableExtendLoadMethod" : true,
                "editable" : false,
                "enableFullTree" : false,
                "enableClear" : true,
                "clear" : null,
                "loadTreeDataType" : "default",
                "expandLevel" : -1,
                "enableCascade" : false,
                "cascadeStatus" : "enable",
                "onShown" : null,
                "onHidden" : null,
                "beforeShow" : null,
                "beforeHide" : null,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "textAlign" : "left",
                "useExtendInfo" : false,
                "extInfoFields" : null,
                "extInfoFormatter" : null,
                "customFormatter" : null,
                "customNavFormatter" : null,
                "selectFirstInNav" : false,
                "loadDataWhenOpen" : true,
                "onlySelectLeaf" : "default",
                "viewType" : "text",
                "autoHeight" : false,
                "maxHeight" : 500,
                "autoWidth" : true,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "quickSelect" : {
                  "enable" : false,
                  "showItemsCount" : 10,
                  "formatter" : null,
                  "showMore" : true
                },
                "treeToList" : false,
                "navTreeToList" : false,
                "showNavigation" : true,
                "showCascadeControl" : true,
                "linkConfig" : {
                  "enable" : false,
                  "config" : [ ]
                },
                "showSelected" : false,
                "useNewLayout" : false,
                "enableMultiFieldSearch" : false,
                "separator" : ",",
                "path" : "teacher_id",
                "isRTControl" : false,
                "labelAutoOverflow" : false,
                "updateOn" : "blur",
                "helpId" : "6a86929f-24af-4a00-817c-9f0dba3b7ebb"
              }, {
                "id" : "max_students_87371daf_flsf",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "最大选课人数",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "max_students",
                  "field" : "87371daf-0850-4999-8a14-6f906cdbade4",
                  "fullPath" : "max_students"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
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
                "path" : "max_students",
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
                "id" : "semester_ed40d007_ybja",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "课程学期",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "semester",
                  "field" : "ed40d007-d874-4e2c-a45a-9a8eed7da50c",
                  "fullPath" : "semester"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
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
                "path" : "semester",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "formatValidation" : {
                  "type" : "none",
                  "expression" : "",
                  "message" : ""
                },
                "autoHeight" : false,
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "schedule_47f274b5_solj",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "课程安排",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "schedule",
                  "field" : "47f274b5-71c8-4bd8-90d2-8a5eaebf8e62",
                  "fullPath" : "schedule"
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
                "path" : "schedule",
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
                "id" : "state_f8a51308_ceb3",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "课程状态",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "state",
                  "field" : "f8a51308-2dd4-4484-a260-9771b82441be",
                  "fullPath" : "State"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "disabled" : false,
                  "name" : "进行中",
                  "value" : "jxz"
                }, {
                  "disabled" : false,
                  "name" : "已结束",
                  "value" : "yjs"
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
        "metadataId" : "725c831f-9ac3-448c-87d3-1a0b5559ecf2",
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