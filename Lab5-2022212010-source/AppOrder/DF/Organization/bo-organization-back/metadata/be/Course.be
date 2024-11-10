{
  "Header" : {
    "Code" : "Course",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "CertId" : null,
    "Name" : "课程表",
    "FileName" : "Course.be",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "a780589e-5fce-49c0-a5e9-aacca560c654",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "f67e27eb-c119-475b-8e6f-0a859a610421",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
      "Code" : "Course.be",
      "Name" : "Course.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "ID" : "a780589e-5fce-49c0-a5e9-aacca560c654",
    "Code" : "Course",
    "Name" : "课程表",
    "GeneratingAssembly" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "39d0d6ff-5920-431b-903c-2c12e0c42b03"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "7c61662b-7b22-4c30-a37f-608f7ddb316a",
      "Code" : "Course",
      "Name" : "课程表",
      "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Course.Course",
      "ContainElements" : [ {
        "ID" : "e7da3dc4-5e45-4c3b-8c6f-fc5a2c81c75b",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "086627e1-b357-4e01-bbe0-734e98f78cfe",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "39d0d6ff-5920-431b-903c-2c12e0c42b03",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "0ed31b9e-91e0-437b-b886-1460eadcef55",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "8c72e32b-edd1-4bd2-85bc-798e4874073c",
        "LabelID" : "courseId",
        "ChildAssociations" : [ ],
        "ColumnID" : "473dc625-b5f4-4882-b641-d3664650d09f",
        "Code" : "courseId",
        "Name" : "课程编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BizTagIds" : [ "a0ee86bc-659c-4b72-8c9a-0f39ef3e590a" ],
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "CreatingTime",
          "BillCodeName" : "课程",
          "BillCodeID" : "4d34712e-fda9-47a7-8831-5f560faad0cd"
        }
      }, {
        "ID" : "aa3b410e-c182-469d-8dc0-32a564f13eee",
        "LabelID" : "course_name",
        "ChildAssociations" : [ ],
        "ColumnID" : "9c6ba9af-0e72-4792-8054-6c4880b93576",
        "Code" : "course_name",
        "Name" : "课程名称",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "d79b50d9-d7b3-4d40-a1b2-1b6b1b285210",
        "LabelID" : "credits",
        "ChildAssociations" : [ ],
        "ColumnID" : "975dff58-6514-4f73-b8e6-f9ffb6ca22f2",
        "Code" : "credits",
        "Name" : "课程学分",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "97e24f33-4387-4817-8b53-074b4c5b59e0",
        "LabelID" : "teacher_id",
        "ChildAssociations" : [ ],
        "ColumnID" : "c4e55f7b-ed71-4e2f-970c-842eed27da96",
        "Code" : "teacher_id",
        "Name" : "授课教师",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "573086f1-f183-4abf-9a32-a5de7b24de88",
        "LabelID" : "max_students",
        "ChildAssociations" : [ ],
        "ColumnID" : "c5508846-8ae7-4e41-afb9-ddc322273a38",
        "Code" : "max_students",
        "Name" : "最大选课人数",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "f569a757-7ff3-480d-b3f9-ba4dd1d16718",
        "LabelID" : "semester",
        "ChildAssociations" : [ ],
        "ColumnID" : "1035b967-61d0-48dd-9295-fd81219ad659",
        "Code" : "semester",
        "Name" : "课程学期",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "050b41cd-ecc9-4be8-b810-139d924dffb3",
        "LabelID" : "schedule",
        "ChildAssociations" : [ ],
        "ColumnID" : "6a2e612e-b593-4624-b824-88c0d8383690",
        "Code" : "schedule",
        "Name" : "课程安排",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "ceaa7c3c-33c1-47a2-8047-5859f2d53a79",
        "LabelID" : "State",
        "ChildAssociations" : [ ],
        "ColumnID" : "d4ee4f65-e1c5-415e-9246-7afb2b381cab",
        "Code" : "State",
        "Name" : "课程状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Course.Course.State.jxz",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "jxz",
          "Value" : "jxz",
          "Name" : "进行中"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.Course.Course.State.yjs",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "yjs",
          "Value" : "yjs",
          "Name" : "已结束"
        } ]
      } ],
      "RefObjectName" : "e6f0042e-a943-470a-9acd-a02633c118a9",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "e7da3dc4-5e45-4c3b-8c6f-fc5a2c81c75b",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "a780589e-5fce-49c0-a5e9-aacca560c654"
    },
    "Variables" : {
      "ID" : "4921147c-bff6-45f4-8275-5f4edbc95199",
      "Code" : "CourseVariable",
      "Name" : "课程表变量",
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