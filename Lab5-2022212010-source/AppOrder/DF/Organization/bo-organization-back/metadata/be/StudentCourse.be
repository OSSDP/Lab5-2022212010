{
  "Header" : {
    "Code" : "StudentCourse",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "CertId" : null,
    "Name" : "学生选课表",
    "FileName" : "StudentCourse.be",
    "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709",
    "Language" : null,
    "Extendable" : false,
    "ID" : "465c1f7b-8023-4239-991f-69700d1b3306",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "8f790abc-d7cd-4deb-b5e0-460b4c743ea4",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
      "Code" : "StudentCourse.be",
      "Name" : "StudentCourse.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "e410e4b3-cb73-6d38-ab0e-626b56ccf709"
    }
  } ],
  "Content" : {
    "ID" : "465c1f7b-8023-4239-991f-69700d1b3306",
    "Code" : "StudentCourse",
    "Name" : "学生选课表",
    "GeneratingAssembly" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "0e477d27-3e58-4bf4-a557-18253fb334d9"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "5a50aa41-cec3-4b92-b6c2-00e529ee9d82",
      "Code" : "StudentCourse",
      "Name" : "学生选课表",
      "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.StudentCourse.StudentCourse",
      "ContainElements" : [ {
        "ID" : "1778d72b-2896-4e1b-a1ed-3b6e9bb54862",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "ab9be014-94b0-4c3d-994d-e846b24a811b",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "0e477d27-3e58-4bf4-a557-18253fb334d9",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "861484b0-0459-4342-a400-787affbf32cc",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "4414ed52-3720-4edb-8cee-a54419511a67",
        "LabelID" : "student_id",
        "ChildAssociations" : [ ],
        "ColumnID" : "bf461ee5-33d7-400d-8c6c-ae0530e21ce8",
        "Code" : "student_id",
        "Name" : "学生ID",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true,
        "BizTagIds" : [ "a0ee86bc-659c-4b72-8c9a-0f39ef3e590a" ]
      }, {
        "ID" : "b5f70771-80a1-4ec0-ad41-0409c545f116",
        "LabelID" : "course_id",
        "ChildAssociations" : [ ],
        "ColumnID" : "50ae22f8-157c-4b29-b599-fdb5e26753ad",
        "Code" : "course_id",
        "Name" : "课程ID",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "7c861afe-d795-4e8f-a9a1-1df1abb4ccf0",
        "LabelID" : "State",
        "ChildAssociations" : [ ],
        "ColumnID" : "7702c550-b143-4be4-93e1-469d0fdb4151",
        "Code" : "State",
        "Name" : "选课状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.StudentCourse.StudentCourse.State.xz",
          "Index" : 0,
          "IsDefaultEnum" : true,
          "StringIndex" : "xz",
          "Value" : "xz",
          "Name" : "已选中"
        }, {
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.DF.Organization.Organization.Back.StudentCourse.StudentCourse.State.yc",
          "Index" : 1,
          "IsDefaultEnum" : false,
          "StringIndex" : "yc",
          "Value" : "yc",
          "Name" : "异常"
        } ]
      }, {
        "ID" : "cd178c07-9626-48e0-bbd5-c15c3e00fa4f",
        "LabelID" : "grade",
        "ChildAssociations" : [ ],
        "ColumnID" : "04fb4584-ea69-483d-a655-0940607ae292",
        "Code" : "grade",
        "Name" : "学生成绩",
        "MDataType" : "Decimal",
        "Length" : 18,
        "Precision" : 2,
        "IsRequire" : true,
        "EnableRtrim" : true
      } ],
      "RefObjectName" : "1558c4a5-26e1-475a-9922-a25d81e385c6",
      "ColumnGenerateID" : {
        "ColumnParameters" : [ ],
        "ElementID" : "1778d72b-2896-4e1b-a1ed-3b6e9bb54862",
        "GenerateType" : "Guid"
      },
      "BelongModelID" : "465c1f7b-8023-4239-991f-69700d1b3306"
    },
    "Variables" : {
      "ID" : "7f3d3e51-d0e2-4d68-9d89-439208f6da4e",
      "Code" : "StudentCourseVariable",
      "Name" : "学生选课表变量",
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