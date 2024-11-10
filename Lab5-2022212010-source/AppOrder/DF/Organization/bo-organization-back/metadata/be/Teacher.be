{
  "Header" : {
    "Code" : "Teacher",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "CertId" : null,
    "Name" : "教师表",
    "FileName" : "Teacher.be",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "ba3f6b84-9c87-4647-8e95-5778bf0d688f",
    "IsTranslating" : false
  },
  "Refs" : [ {
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
      "ID" : "f53f4c03-f2a7-431b-9691-098060d7b171",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
      "Code" : "Teacher.be",
      "Name" : "Teacher.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "ID" : "ba3f6b84-9c87-4647-8e95-5778bf0d688f",
    "Code" : "Teacher",
    "Name" : "教师表",
    "GeneratingAssembly" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "373eda0c-c84d-48fe-b2dc-d4d5861a5b80"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "edb899c8-808d-4081-9f32-473b92b3ba1d",
      "Code" : "Teacher",
      "Name" : "教师表",
      "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Teacher.Teacher",
      "ContainElements" : [ {
        "ID" : "1c0090b1-df29-4736-91de-1da5b6f1517e",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "a7baab87-9fee-485b-bca4-d899bf2ae235",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "373eda0c-c84d-48fe-b2dc-d4d5861a5b80",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "7531ce42-a61c-49b2-a0d0-657b9f384ad5",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "798aaa66-98ec-46a7-81a6-5c7603ccce82",
        "LabelID" : "teacher_id",
        "ChildAssociations" : [ ],
        "ColumnID" : "fdcc06b6-1739-436b-b22d-31d1c6499b4c",
        "Code" : "teacher_id",
        "Name" : "教师工号",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true,
        "BizTagIds" : [ "a0ee86bc-659c-4b72-8c9a-0f39ef3e590a" ],
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "CreatingTime",
          "BillCodeName" : "老师工号",
          "BillCodeID" : "97bbdaf6-f9b9-44e7-bee6-f7da3cfabd4a"
        }
      }, {
        "ID" : "08f5541d-00df-4f29-8b1e-c0e5f894f1e9",
        "LabelID" : "name",
        "ChildAssociations" : [ ],
        "ColumnID" : "ee1fb1ec-3eb0-4ee6-9718-ecbd961112b1",
        "Code" : "name",
        "Name" : "教师姓名",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "188f76e7-d4ef-47ca-9b8f-7d05c7479fd1",
        "LabelID" : "department",
        "ChildAssociations" : [ ],
        "ColumnID" : "56af926d-782a-4c0a-a389-efbe947660c4",
        "Code" : "department",
        "Name" : "所在院系",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Teacher.Teacher.department.cs",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "cs",
          "Value" : "cs",
          "Name" : "计算机学院"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Teacher.Teacher.department.math",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "math",
          "Value" : "math",
          "Name" : "数学学院"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Teacher.Teacher.department.Chinese",
          "Index" : 2,
          "IsDefaultEnum" : false,
          "StringIndex" : "Chinese",
          "Value" : "Chinese",
          "Name" : "中文学院"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Teacher.Teacher.department.falv",
          "Index" : 3,
          "IsDefaultEnum" : false,
          "StringIndex" : "falv",
          "Value" : "falv",
          "Name" : "法学院"
        } ]
      }, {
        "ID" : "9d64d359-d58c-46e8-a470-55cd322478a9",
        "LabelID" : "password",
        "ChildAssociations" : [ ],
        "ColumnID" : "945ff043-c416-445c-ac93-a3d1cfe18959",
        "Code" : "password",
        "Name" : "密码",
        "MDataType" : "String",
        "DefaultValue" : "1qaz!QAZ",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "c098217e-650b-42cf-9fa7-76e19b4c1531",
        "LabelID" : "email",
        "ChildAssociations" : [ ],
        "ChildElements" : [ {
          "ID" : "7561fc1d-d520-483b-86bd-b43abfbce3ab",
          "LabelID" : "email_Email",
          "I18nResourceInfoPrefix" : "",
          "ChildAssociations" : [ ],
          "ColumnID" : "460f90b3-5056-4e57-8c77-071d71f8cbe5",
          "Code" : "email_Email",
          "Name" : "邮箱",
          "MDataType" : "String",
          "Length" : 500,
          "EnableRtrim" : true
        } ],
        "ColumnID" : "460f90b3-5056-4e57-8c77-071d71f8cbe5",
        "Code" : "email",
        "Name" : "邮箱",
        "MDataType" : "String",
        "Length" : 500,
        "IsUdt" : true,
        "EnableRtrim" : true,
        "UdtID" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2",
        "UdtName" : "邮箱",
        "MappingRelation" : [ {
          "7561fc1d-d520-483b-86bd-b43abfbce3ab" : "7b81be0f-fa0f-456c-9c58-7ab52433e9b2"
        } ]
      } ],
      "RefObjectName" : "10ff7792-ae38-4054-a74f-4f4b928c5c0a",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "1c0090b1-df29-4736-91de-1da5b6f1517e",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "ba3f6b84-9c87-4647-8e95-5778bf0d688f"
    },
    "Variables" : {
      "ID" : "78d089bb-5f91-42a5-92a7-ceb20d495f5b",
      "Code" : "TeacherVariable",
      "Name" : "教师表变量",
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