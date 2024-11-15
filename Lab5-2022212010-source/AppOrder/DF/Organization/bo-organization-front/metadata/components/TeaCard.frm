{
  "Header" : {
    "Code" : "TeaCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
    "CertId" : null,
    "Name" : "TeaCard",
    "FileName" : "TeaCard.frm",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "c2f9a725-34ee-4a74-81d9-1ca4ee7df8f4",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "644ae8f2-e05f-4b31-bf54-dd76bf81f9b0",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
      "Code" : "TeaCard.frm",
      "Name" : "TeaCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Id" : "c2f9a725-34ee-4a74-81d9-1ca4ee7df8f4",
    "Contents" : {
      "module" : {
        "id" : "TeaCard",
        "code" : "TeaCard",
        "name" : "TeaCard",
        "caption" : "TeaCard",
        "type" : "Module",
        "creator" : "admin",
        "creationDate" : "2024-11-08T14:32:53.176Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "eapiId" : "cb703097-ef26-4add-b0db-53f55a5db51b",
          "eapiCode" : "TeaCard_frm",
          "eapiName" : "TeaCard_frm",
          "eapiNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "voPath" : "AppOrder/DF/Organization/bo-organization-front/metadata/components",
          "voNameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front",
          "entities" : [ {
            "label" : "teachers",
            "id" : "5c9f5ea0-7af1-4425-aae0-4202abd81013",
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
                "id" : "c8328da6-2a3a-432a-a3d5-630b1dedd9e6",
                "path" : "ID",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "ID",
                "originalId" : "c8328da6-2a3a-432a-a3d5-630b1dedd9e6",
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
                "id" : "c2e310ab-7ad9-4ccd-bf0d-7f65488fc63f",
                "path" : "Version",
                "type" : {
                  "$type" : "DateTimeType",
                  "displayName" : "日期时间",
                  "name" : "DateTime"
                },
                "code" : "Version",
                "originalId" : "c2e310ab-7ad9-4ccd-bf0d-7f65488fc63f",
                "bindingPath" : "version",
                "bindingField" : "version",
                "name" : "版本"
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
                "id" : "740eae77-25d2-4738-9c99-6b4ab6271abd",
                "path" : "teacher_id",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "teacher_id",
                "originalId" : "740eae77-25d2-4738-9c99-6b4ab6271abd",
                "bindingPath" : "teacher_id",
                "bindingField" : "teacher_id",
                "name" : "教师工号"
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
                "id" : "6bb901d3-2961-44f8-9794-3b87b26512a3",
                "path" : "name",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "name",
                "originalId" : "6bb901d3-2961-44f8-9794-3b87b26512a3",
                "bindingPath" : "name",
                "bindingField" : "name",
                "name" : "教师姓名"
              }, {
                "$type" : "SimpleField",
                "require" : false,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "department",
                "id" : "c9f3ece4-921d-4ad2-ab64-1e2b8bc83fc9",
                "path" : "department",
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
                  "displayName" : "枚举",
                  "name" : "Enum"
                },
                "code" : "department",
                "originalId" : "c9f3ece4-921d-4ad2-ab64-1e2b8bc83fc9",
                "bindingPath" : "department",
                "bindingField" : "department",
                "name" : "所在院系"
              }, {
                "$type" : "SimpleField",
                "require" : true,
                "multiLanguage" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "defaultValue" : "",
                "readonly" : false,
                "label" : "password",
                "id" : "fa170110-0e31-4995-854f-742de2594430",
                "path" : "password",
                "type" : {
                  "$type" : "StringType",
                  "displayName" : "字符串",
                  "length" : 36,
                  "name" : "String"
                },
                "code" : "password",
                "originalId" : "fa170110-0e31-4995-854f-742de2594430",
                "bindingPath" : "password",
                "bindingField" : "password",
                "name" : "密码"
              }, {
                "$type" : "ComplexField",
                "label" : "email",
                "id" : "f1849de7-1186-42b4-9a7d-f8d1828b2398",
                "path" : "email",
                "type" : {
                  "$type" : "ObjectType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "require" : false,
                    "multiLanguage" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "defaultValue" : "",
                    "readonly" : false,
                    "label" : "email",
                    "id" : "f1849de7-fa0f-456c-9c58-7ab52433e9b2",
                    "path" : "email.Email",
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
                  "name" : "EmailF184",
                  "displayName" : "邮箱"
                },
                "code" : "email",
                "originalId" : "f1849de7-1186-42b4-9a7d-f8d1828b2398",
                "bindingPath" : "email",
                "bindingField" : "email",
                "name" : "邮箱"
              } ],
              "primary" : "id",
              "displayName" : "教师表",
              "name" : "Teacher"
            },
            "code" : "Teacher",
            "name" : "教师表"
          } ],
          "id" : "2c352cbd-42fd-4aa6-ab53-643e4dcbb460",
          "sourceType" : "vo",
          "variables" : [ ],
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "code" : "TeaCard_frm",
          "sourceUri" : "api/apporder/df/v1.0/TeaCard_frm",
          "name" : "TeaCard_frm"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "TeaCard_state_machine",
          "name" : "TeaCard_frm",
          "uri" : "12b5ebbf-32e0-457d-9a6d-8fe3c044f2f1",
          "code" : "TeaCard_frm",
          "nameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Front"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "教师表",
          "fields" : [ ],
          "stateMachine" : "TeaCard_state_machine",
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
          "name" : "教师表",
          "fields" : [ {
            "type" : "Form",
            "id" : "6bb901d3-2961-44f8-9794-3b87b26512a3",
            "fieldName" : "name",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "c9f3ece4-921d-4ad2-ab64-1e2b8bc83fc9",
            "fieldName" : "department",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "fa170110-0e31-4995-854f-742de2594430",
            "fieldName" : "password",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "f1849de7-fa0f-456c-9c58-7ab52433e9b2",
            "fieldName" : "email_Email",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">{{'title'|lang:lang:'TeaCard'}}</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
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
                "id" : "name_6bb901d3_ktiz",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "教师姓名",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "name",
                  "field" : "6bb901d3-2961-44f8-9794-3b87b26512a3",
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
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
              }, {
                "id" : "department_c9f3ece4_a2k0",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "所在院系",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "department",
                  "field" : "c9f3ece4-921d-4ad2-ab64-1e2b8bc83fc9",
                  "fullPath" : "department"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
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
                "path" : "department",
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
                "id" : "password_fa170110_iy7o",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "密码",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "password",
                  "field" : "fa170110-0e31-4995-854f-742de2594430",
                  "fullPath" : "password"
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
                "path" : "password",
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
                "id" : "email_Email_f1849de7_52ya",
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
                  "field" : "f1849de7-fa0f-456c-9c58-7ab52433e9b2",
                  "fullPath" : "email.Email"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
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
                "maxHeight" : 500,
                "labelAutoOverflow" : false,
                "updateOn" : "blur"
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
        "metadataId" : "c2f9a725-34ee-4a74-81d9-1ca4ee7df8f4",
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