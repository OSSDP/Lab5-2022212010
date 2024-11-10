{
  "Header" : {
    "Code" : "Student",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "CertId" : null,
    "Name" : "学生表",
    "FileName" : "Student.be",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "e76f67d2-c50b-43d5-ac31-258165d2d26b",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "PhoneNumber",
      "Name" : "手机电话号码",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
      "CertId" : null,
      "NameSpace" : "Inspur.Gsp.Common.CommonUdt",
      "Code" : "Email",
      "Name" : "邮箱",
      "Type" : "UnifiedDataType",
      "BizobjectID" : "CommonUdt"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "3cfc8918-81b9-405f-b2a2-f2d3c25bae98",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
      "Code" : "Student.be",
      "Name" : "Student.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "ID" : "e76f67d2-c50b-43d5-ac31-258165d2d26b",
    "Code" : "Student",
    "Name" : "学生表",
    "GeneratingAssembly" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "97521df5-8b00-4abe-8c2d-c555912b655e"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "96b7f1d7-5333-4e15-bc60-e23d5a68971e",
      "Code" : "Student",
      "Name" : "学生表",
      "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student",
      "ContainElements" : [ {
        "ID" : "4ae86e62-0726-49a3-a09e-eed9a5d8be7d",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "db93f548-86db-49df-9d22-9d43d07f38ec",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "97521df5-8b00-4abe-8c2d-c555912b655e",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "17b697b1-5606-4431-bfc2-efa07ede92f2",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "f183e061-eb19-4554-92e9-9e228863f9e5",
        "LabelID" : "student_id",
        "ChildAssociations" : [ ],
        "ColumnID" : "02f13062-7361-48ee-9fa1-4295d8f0bb39",
        "Code" : "student_id",
        "Name" : "学号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BizTagIds" : [ "a0ee86bc-659c-4b72-8c9a-0f39ef3e590a" ],
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "学生",
          "BillCodeID" : "58a844d8-59e0-42b0-86d3-233f3a1bec72"
        }
      }, {
        "ID" : "c0c5a895-b4ad-4308-a638-8c17264821e7",
        "LabelID" : "name",
        "ChildAssociations" : [ ],
        "ColumnID" : "9d6681ff-6bf5-4021-aec6-0bf5f873f64c",
        "Code" : "name",
        "Name" : "姓名",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "4ab35753-eef9-4167-a716-3f2319871b8e",
        "LabelID" : "gender",
        "ChildAssociations" : [ ],
        "ColumnID" : "3c408d1d-5f93-4ff0-b389-ecd1ffc65b73",
        "Code" : "gender",
        "Name" : "性别",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.gender.man",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "man",
          "Value" : "man",
          "Name" : "男"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.gender.woman",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "woman",
          "Value" : "woman",
          "Name" : "女"
        } ]
      }, {
        "ID" : "92bc07f2-591b-434b-a6ae-c508e40e1574",
        "LabelID" : "password",
        "ChildAssociations" : [ ],
        "ColumnID" : "7c8ff972-e1a7-4093-9d89-7aa945ccb08c",
        "Code" : "password",
        "Name" : "密码",
        "MDataType" : "String",
        "DefaultValue" : "1qaz!QAZ",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "bb8955bb-6df2-4bf8-b6db-ff05d20dce92",
        "LabelID" : "birth",
        "ChildAssociations" : [ ],
        "ColumnID" : "4eda416c-b96d-4cea-abce-32a50e8d8d5f",
        "Code" : "birth",
        "Name" : "生日",
        "MDataType" : "Date",
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "b848ae28-013f-4448-a156-b477850bc5eb",
        "LabelID" : "major",
        "ChildAssociations" : [ ],
        "ColumnID" : "e875957d-e222-458a-8fcc-e70000e79f82",
        "Code" : "major",
        "Name" : "专业名称",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.major.cs",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "cs",
          "Value" : "cs",
          "Name" : "计算机"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.major.math",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "math",
          "Value" : "math",
          "Name" : "数学"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.major.Chinese",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "StringIndex" : "Chinese",
          "Value" : "Chinese",
          "Name" : "中文"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.major.falv",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "StringIndex" : "falv",
          "Value" : "falv",
          "Name" : "法律"
        } ]
      }, {
        "ID" : "f29868ab-86bc-4306-bd7c-00642d4f50b1",
        "LabelID" : "phone",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "210ea934-c538-4f1a-a3e1-452dae882696",
          "LabelID" : "phone_PhoneNumber",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "50619215-6640-4e99-a269-12058157b78f",
          "Code" : "phone_PhoneNumber",
          "Name" : "手机电话号码",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "50619215-6640-4e99-a269-12058157b78f",
        "Code" : "phone",
        "Name" : "手机电话号码",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "b0c5529f-88d1-4769-bb7a-5490d92893fa",
        "UdtName" : "手机电话号码",
        "MappingRelation" : [ {
          "210ea934-c538-4f1a-a3e1-452dae882696" : "b0c5529f-88d1-4769-bb7a-5490d92893fa"
        } ]
      }, {
        "ID" : "7da92e51-aee6-446a-8b00-caa7802fb2f3",
        "LabelID" : "Email",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "3922a688-0172-43ed-ae4f-7f4518634be6",
          "LabelID" : "Email_Email",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "ce44e711-4a5a-41c0-a93d-54a7a4c6631e",
          "Code" : "Email_Email",
          "Name" : "邮箱",
          "MDataType" : "String",
          "Length" : 500,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "ce44e711-4a5a-41c0-a93d-54a7a4c6631e",
        "Code" : "Email",
        "Name" : "邮箱",
        "MDataType" : "String",
        "Length" : 500,
        "IsRequire" : true,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
        "UdtName" : "邮箱",
        "MappingRelation" : [ {
          "3922a688-0172-43ed-ae4f-7f4518634be6" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2"
        } ]
      }, {
        "ID" : "a40a81e4-8059-45a5-8a89-1a0648605e5a",
        "LabelID" : "State",
        "ChildAssociations" : [ ],
        "ColumnID" : "263c127b-5f0e-4c8a-893f-c7a8d3960bd4",
        "Code" : "State",
        "Name" : "状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.State.zc",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "zc",
          "Value" : "zc",
          "Name" : "正常"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Student.Student.State.jy",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "jy",
          "Value" : "jy",
          "Name" : "禁用"
        } ]
      } ],
      "RefObjectName" : "d5ce7e71-2c2f-4dc3-8049-30647a526598",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "4ae86e62-0726-49a3-a09e-eed9a5d8be7d",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "e76f67d2-c50b-43d5-ac31-258165d2d26b"
    },
    "Variables" : {
      "ID" : "15e8460c-5cec-49a7-b647-c75b0b35b3bb",
      "Code" : "StudentVariable",
      "Name" : "学生表变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "AppOrder/DF/Organization/bo-organization-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}