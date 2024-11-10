{
  "Header" : {
    "Code" : "SaleOrder",
    "Type" : "GSPBusinessEntity",
    "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back",
    "CertId" : null,
    "Name" : "业务订单",
    "FileName" : "SaleOrder.be",
    "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "aa3b3e82-8530-4ba9-8a77-fdcbd372f2fe",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "90e313f0-df66-4c49-8b28-b0e9a0964ab1",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Merchant.Merchant.Back",
      "Code" : "Merchant",
      "Name" : "商户",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "f8f7bbf8-b84e-fbc9-9cf8-b9945a03a13d"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "c59fb9ad-aad0-4ead-949f-3ec72d9c182c",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Employee.Employee.Back",
      "Code" : "Employee",
      "Name" : "行政人员",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "9840e5b7-e61c-bb93-ad7a-e477b36521de"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "093737eb-c70e-48ff-9c7f-c8b1d9be8628",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.DF.Goods.Goods.Back",
      "Code" : "Goods",
      "Name" : "商品",
      "Type" : "GSPBusinessEntity",
      "BizobjectID" : "39865584-a2f9-e5df-8a36-5c2cda798961"
    }
  }, {
    "DependentMetadata" : {
      "ID" : "3c30eca5-8f54-4cee-8099-9d99b50fbe5f",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back",
      "Code" : "SaleOrder.be",
      "Name" : "SaleOrder.be",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d"
    }
  } ],
  "Content" : {
    "ID" : "aa3b3e82-8530-4ba9-8a77-fdcbd372f2fe",
    "Code" : "SaleOrder",
    "Name" : "业务订单",
    "GeneratingAssembly" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back",
    "IsUseNamespaceConfig" : true,
    "VersionControlInfo" : {
      "VersionControlElementId" : "b80dc51f-0c2e-468d-a5c8-5a356324d0b5"
    },
    "IsSimplifyGen" : true,
    "MainObject" : {
      "ID" : "e2cba429-c95c-4867-a0a1-d511600a6f9a",
      "Code" : "SaleOrder",
      "Name" : "业务订单",
      "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder",
      "ContainElements" : [ {
        "ID" : "7a27ef7f-83fd-4dda-b4a1-1964cc1ec5ee",
        "LabelID" : "ID",
        "ChildAssociations" : [ ],
        "ColumnID" : "373d0cc9-e6d7-4c4a-ac51-003cba71a53f",
        "Code" : "ID",
        "Name" : "主键",
        "MDataType" : "String",
        "Length" : 36,
        "IsRequire" : true,
        "EnableRtrim" : true
      }, {
        "ID" : "b80dc51f-0c2e-468d-a5c8-5a356324d0b5",
        "LabelID" : "Version",
        "ChildAssociations" : [ ],
        "ColumnID" : "e1415bd6-ce85-4b1a-a1af-14d0348ab179",
        "Code" : "Version",
        "Name" : "版本",
        "MDataType" : "DateTime",
        "EnableRtrim" : true
      }, {
        "ID" : "0dff6cae-f888-430d-b0c9-836177183c87",
        "LabelID" : "OrderCode",
        "ChildAssociations" : [ ],
        "ColumnID" : "aab4461b-cda2-4db4-a59c-012df174c997",
        "Code" : "OrderCode",
        "Name" : "订单编号",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true,
        "BillCodeConfig" : {
          "CanBillCode" : true,
          "CodeGenerateOccasion" : "SavingTime",
          "BillCodeName" : "业务订单",
          "BillCodeID" : "d2cca971-9b6f-42a2-94d7-aadd65c8870e"
        }
      }, {
        "ID" : "024019ed-bc82-4fd3-9d24-0f3df662e1cb",
        "LabelID" : "Merchant",
        "ChildAssociations" : [ {
          "ID" : "3c7ea746-4ea5-4c4e-a38d-5c1d04451a26",
          "RefElementCollection" : [ {
            "ID" : "fa8f237c-92bf-4c72-9869-972cb22caeff",
            "LabelID" : "Merchant_MerchantName",
            "ChildAssociations" : [ ],
            "ColumnID" : "680af7ed-1a35-4f69-ab67-173a2df99c3e",
            "Code" : "MerchantName",
            "Name" : "商户名称",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "910cdc80-692d-43be-aa56-6d6f21e3a33c",
            "EnableRtrim" : true
          }, {
            "ID" : "e5e66144-74d1-4f6b-bacd-d2d5eb21b645",
            "LabelID" : "Merchant_MerchantCode",
            "ChildAssociations" : [ ],
            "ColumnID" : "2873caa8-2496-44d9-8c4e-1616f0e488dd",
            "Code" : "MerchantCode",
            "Name" : "商户编号",
            "MDataType" : "String",
            "Length" : 36,
            "IsRefElement" : true,
            "RefElementID" : "022f5d98-a6b6-4fa5-8481-c6ef009995b7",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "90e313f0-df66-4c49-8b28-b0e9a0964ab1",
          "RefModelName" : "商户",
          "RefModelCode" : "Merchant",
          "RefModelPkgName" : "Inspur.GS.AppOrder.DF.Merchant.Merchant.Back",
          "RefObjectID" : "28aec447-bd40-405f-819d-0381b1b83856",
          "RefObjectCode" : "Merchant",
          "RefObjectName" : "商户",
          "KeyCollection" : [ {
            "SourceElement" : "a3ea4e00-3163-44e8-bb40-cf835ff91b2a",
            "SourceElementDisplay" : "主键",
            "TargetElement" : "024019ed-bc82-4fd3-9d24-0f3df662e1cb",
            "TargetElementDisplay" : "商户",
            "RefDataModelName" : ""
          } ],
          "AssoModelInfo" : {
            "ModelConfigId" : "Inspur.GS.AppOrder.DF.Merchant.Merchant.Back.Merchant",
            "MainObjCode" : "Merchant"
          }
        } ],
        "ColumnID" : "0b33e14a-a3c3-4f25-ae31-e15905af1ba8",
        "Code" : "Merchant",
        "Name" : "商户",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "27b26987-1a46-4d7c-8e8c-42d14207edac",
        "LabelID" : "OrderTime",
        "ChildAssociations" : [ ],
        "ColumnID" : "3c287e95-7637-429e-9a91-6a863d177450",
        "Code" : "OrderTime",
        "Name" : "下单时间",
        "MDataType" : "String",
        "Length" : 30,
        "EnableRtrim" : true
      }, {
        "ID" : "ca4eae5f-e717-4788-9eb7-d5acdd7b014b",
        "LabelID" : "PayMethod",
        "ChildAssociations" : [ ],
        "ColumnID" : "5a0bf5a9-363d-4f71-aa50-c402fc029ded",
        "Code" : "PayMethod",
        "Name" : "支付方式",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "Name" : "现金",
          "Index" : 0,
          "StringIndex" : "Cash",
          "Value" : "Cash",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.Cash",
          "IsDefaultEnum" : true
        }, {
          "Name" : "银联",
          "Index" : 1,
          "StringIndex" : "Upay",
          "Value" : "Upay",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.Upay",
          "IsDefaultEnum" : false
        }, {
          "Name" : "微信",
          "Index" : 2,
          "StringIndex" : "WeChat",
          "Value" : "WeChat",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.WeChat",
          "IsDefaultEnum" : false
        }, {
          "Name" : "支付宝",
          "Index" : 3,
          "StringIndex" : "AliPay",
          "Value" : "AliPay",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.PayMethod.AliPay",
          "IsDefaultEnum" : false
        } ]
      }, {
        "ID" : "cbc58713-4981-4fa3-8a39-c284e5d25302",
        "LabelID" : "OrderType",
        "ChildAssociations" : [ ],
        "ColumnID" : "a86bc93d-3bba-4937-ac9e-4029cfaa133b",
        "Code" : "OrderType",
        "Name" : "订单类型",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "Name" : "备货订单",
          "Index" : 0,
          "StringIndex" : "bh",
          "Value" : "bh",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderType.bh",
          "IsDefaultEnum" : true
        }, {
          "Name" : "发货订单",
          "Index" : 1,
          "StringIndex" : "fh",
          "Value" : "fh",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderType.fh",
          "IsDefaultEnum" : false
        } ]
      }, {
        "ID" : "97fb6e6f-0ed9-4d45-9e07-b538c7460088",
        "LabelID" : "OrderPerson",
        "ChildAssociations" : [ {
          "ID" : "c37ffcc8-018f-4fe5-9ff6-ea9d5d5b2378",
          "RefElementCollection" : [ {
            "ID" : "dca4500a-69ef-4129-a760-405784e45099",
            "LabelID" : "OrderPerson_Name",
            "ChildAssociations" : [ ],
            "ColumnID" : "9a32485b-9d64-41d9-b024-a1e444e9a80f",
            "Code" : "Name",
            "Name" : "名称",
            "MDataType" : "String",
            "Length" : 1000,
            "IsRefElement" : true,
            "RefElementID" : "9a66ba74-9003-4f5a-be5e-851bf28031ef",
            "EnableRtrim" : true
          }, {
            "ID" : "add0c8cb-143c-469f-87c0-fdd6d7040c4e",
            "LabelID" : "OrderPerson_Code",
            "ChildAssociations" : [ ],
            "ColumnID" : "7d273cbd-ef4d-49d1-9ca1-210417161c2c",
            "Code" : "Code",
            "Name" : "编号",
            "MDataType" : "String",
            "Length" : 1000,
            "IsRefElement" : true,
            "RefElementID" : "4b9a0bff-2f9e-4656-b7bf-6e98468109cc",
            "EnableRtrim" : true
          } ],
          "RefModelID" : "c59fb9ad-aad0-4ead-949f-3ec72d9c182c",
          "RefModelName" : "行政人员",
          "RefModelCode" : "Employee",
          "RefModelPkgName" : "Inspur.GS.AppOrder.DF.Employee.Employee.Back",
          "RefObjectID" : "a733b7c7-6046-4d15-b93e-f23bf0f9aad8",
          "RefObjectCode" : "Employee",
          "RefObjectName" : "行政人员",
          "KeyCollection" : [ {
            "SourceElement" : "c853a3fd-031e-414b-8afd-72abdec31f7d",
            "SourceElementDisplay" : "主键",
            "TargetElement" : "97fb6e6f-0ed9-4d45-9e07-b538c7460088",
            "TargetElementDisplay" : "下单人",
            "RefDataModelName" : ""
          } ],
          "AssoModelInfo" : {
            "ModelConfigId" : "Inspur.GS.AppOrder.DF.Employee.Employee.Back.Employee",
            "MainObjCode" : "Employee"
          }
        } ],
        "ColumnID" : "60114908-c9fa-4b03-a165-6ea1fa7cdb4e",
        "Code" : "OrderPerson",
        "Name" : "下单人",
        "ObjectType" : "Association",
        "MDataType" : "String",
        "Length" : 36,
        "EnableRtrim" : true
      }, {
        "ID" : "b60ffcea-baa6-45ba-9ea7-091a62b52360",
        "LabelID" : "Telephone",
        "ChildAssociations" : [ ],
        "ColumnID" : "c5ce1fa3-20eb-4bb0-8a26-b2175a665239",
        "Code" : "Telephone",
        "Name" : "联系电话",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true
      }, {
        "ID" : "bb5bc9e7-d524-4b3f-80ea-5cbcb7ad8ada",
        "LabelID" : "OrderState",
        "ChildAssociations" : [ ],
        "ColumnID" : "e5dc1d5b-96b8-4776-b705-788864f275c6",
        "Code" : "OrderState",
        "Name" : "订单状态",
        "ObjectType" : "Enum",
        "MDataType" : "String",
        "Length" : 20,
        "EnableRtrim" : true,
        "EnumIndexType" : 1,
        "ContainEnumValues" : [ {
          "Name" : "未开始",
          "Index" : 0,
          "StringIndex" : "None",
          "Value" : "None",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderState.None",
          "IsDefaultEnum" : true
        }, {
          "Name" : "进行中",
          "Index" : 1,
          "StringIndex" : "Ongoing",
          "Value" : "Ongoing",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderState.Ongoing",
          "IsDefaultEnum" : false
        }, {
          "Name" : "已完成",
          "Index" : 2,
          "StringIndex" : "Done",
          "Value" : "Done",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderState.Done",
          "IsDefaultEnum" : false
        }, {
          "Name" : "异常",
          "Index" : 3,
          "StringIndex" : "Error",
          "Value" : "Error",
          "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.SaleOrder.OrderState.Error",
          "IsDefaultEnum" : false
        } ]
      }, {
        "ID" : "73ed5b80-5c8f-407e-804e-d6d8e0f7033d",
        "LabelID" : "Remark",
        "ChildAssociations" : [ ],
        "ColumnID" : "e59266be-835a-477b-a606-e56d7ffbc7cd",
        "Code" : "Remark",
        "Name" : "备注",
        "MDataType" : "String",
        "Length" : 100,
        "EnableRtrim" : true
      }, {
        "ID" : "863d068c-e917-4b64-aab6-c40f9bd3af63",
        "LabelID" : "TotalPrice",
        "ChildAssociations" : [ ],
        "ColumnID" : "aedc04be-84d7-4f83-9624-95b5a0b4b7a9",
        "Code" : "TotalPrice",
        "Name" : "订单金额",
        "MDataType" : "Decimal",
        "Length" : 10,
        "Precision" : 2,
        "EnableRtrim" : true
      } ],
      "ContainChildObjects" : [ {
        "ID" : "d0099f0b-a2e8-44d9-8b47-262cfc5c9cda",
        "Code" : "OrderItems",
        "Name" : "订单明细",
        "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.OrderItems",
        "ContainElements" : [ {
          "ID" : "1805ecb4-2feb-4b24-a51c-3a145a53b5fe",
          "LabelID" : "ID",
          "ChildAssociations" : [ ],
          "ColumnID" : "6ebeb497-b5d0-4bd3-af79-ef914d0806e9",
          "Code" : "ID",
          "Name" : "主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "54e9369b-1f67-477f-a2aa-8209d33ff134",
          "LabelID" : "ParentID",
          "ChildAssociations" : [ ],
          "ColumnID" : "9a9526e6-8512-4c04-9c7f-6b8463f3a291",
          "Code" : "ParentID",
          "Name" : "上级对象主键",
          "MDataType" : "String",
          "Length" : 36,
          "IsRequire" : true,
          "EnableRtrim" : true
        }, {
          "ID" : "ec6cd550-97c9-4840-ab01-c665868dfe55",
          "LabelID" : "Goods",
          "ChildAssociations" : [ {
            "ID" : "e04ee1c6-e3db-4eb2-b9a8-19b510bcf284",
            "RefElementCollection" : [ {
              "ID" : "14781c2e-3893-4abc-8ed7-52554377183d",
              "LabelID" : "Goods_GoodsName",
              "ChildAssociations" : [ ],
              "ColumnID" : "893b0d59-22d2-4c7d-90d1-8686dd239928",
              "Code" : "GoodsName",
              "Name" : "商品名称",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "7de76016-70c7-48b1-873b-ab6ecb67a3dc",
              "EnableRtrim" : true
            }, {
              "ID" : "06a7f0ec-8e65-4bc6-9a87-9d561c7eb19e",
              "LabelID" : "Goods_GoodsCode",
              "ChildAssociations" : [ ],
              "ColumnID" : "0bf8e373-6913-45af-96b5-def6d1f31f11",
              "Code" : "GoodsCode",
              "Name" : "商品编号",
              "MDataType" : "String",
              "Length" : 36,
              "IsRefElement" : true,
              "RefElementID" : "84721949-f4ca-4656-8d3a-b6efa1a7be61",
              "EnableRtrim" : true
            } ],
            "RefModelID" : "093737eb-c70e-48ff-9c7f-c8b1d9be8628",
            "RefModelName" : "商品",
            "RefModelCode" : "Goods",
            "RefModelPkgName" : "Inspur.GS.AppOrder.DF.Goods.Goods.Back",
            "RefObjectID" : "16b36a8c-9eaf-423d-b6a4-3e986b8dad93",
            "RefObjectCode" : "Goods",
            "RefObjectName" : "商品",
            "KeyCollection" : [ {
              "SourceElement" : "5f6f262e-e0b3-4540-82e9-f8753d1a9e15",
              "SourceElementDisplay" : "主键",
              "TargetElement" : "ec6cd550-97c9-4840-ab01-c665868dfe55",
              "TargetElementDisplay" : "商品",
              "RefDataModelName" : ""
            } ],
            "AssoModelInfo" : {
              "ModelConfigId" : "Inspur.GS.AppOrder.DF.Goods.Goods.Back.Goods",
              "MainObjCode" : "Goods"
            }
          } ],
          "ColumnID" : "77407484-1381-4903-a536-cacb9a2ae1c3",
          "Code" : "Goods",
          "Name" : "商品",
          "ObjectType" : "Association",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "9195c810-8d2c-49fb-b8f8-d82ed33dbc77",
          "LabelID" : "Specification",
          "ChildAssociations" : [ ],
          "ColumnID" : "00cc1dc9-0624-434f-b474-cde6037f617d",
          "Code" : "Specification",
          "Name" : "规格型号",
          "MDataType" : "String",
          "Length" : 36,
          "EnableRtrim" : true
        }, {
          "ID" : "a083fc20-16d2-476e-bb33-cf596b970815",
          "LabelID" : "Quality",
          "ChildAssociations" : [ ],
          "ColumnID" : "79c734bf-64ef-4ad5-8f2d-6c5bc450bac3",
          "Code" : "Quality",
          "Name" : "数量",
          "MDataType" : "Integer",
          "EnableRtrim" : true
        }, {
          "ID" : "e3a142cd-a63c-4140-a062-b4da5c7f3848",
          "LabelID" : "Price",
          "ChildAssociations" : [ ],
          "ColumnID" : "66e11095-1c92-4189-82ee-fb7a03e33e81",
          "Code" : "Price",
          "Name" : "标准单价",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "b3553f6e-3229-4023-b00e-3e35da3b9e4e",
          "LabelID" : "ActualPrice",
          "ChildAssociations" : [ ],
          "ColumnID" : "1603b754-dcda-4760-b723-e281c374b7df",
          "Code" : "ActualPrice",
          "Name" : "实际单价",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "84b8e6dd-8fa0-44f8-bde9-a5d0c2cb901f",
          "LabelID" : "DiscountType",
          "ChildAssociations" : [ ],
          "ColumnID" : "7cb7e739-911f-4246-83da-bc09c4d47838",
          "Code" : "DiscountType",
          "Name" : "折扣类型",
          "ObjectType" : "Enum",
          "MDataType" : "String",
          "Length" : 20,
          "EnableRtrim" : true,
          "EnumIndexType" : 1,
          "ContainEnumValues" : [ {
            "Name" : "无折扣",
            "Index" : 0,
            "StringIndex" : "none",
            "Value" : "none",
            "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.OrderItems.DiscountType.none",
            "IsDefaultEnum" : true
          }, {
            "Name" : "折扣",
            "Index" : 1,
            "StringIndex" : "zk",
            "Value" : "zk",
            "I18nResourceInfoPrefix" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back.SaleOrder.OrderItems.DiscountType.zk",
            "IsDefaultEnum" : false
          } ]
        }, {
          "ID" : "341d24be-e0d7-46a1-8ef6-e1b8e8977ea9",
          "LabelID" : "Discount",
          "ChildAssociations" : [ ],
          "ColumnID" : "25e9d15d-65aa-452d-8d51-eb4079928dac",
          "Code" : "Discount",
          "Name" : "折扣",
          "MDataType" : "String",
          "Length" : 10,
          "EnableRtrim" : true
        }, {
          "ID" : "3b2aee14-e1a4-4e14-9abd-0350cb3a5527",
          "LabelID" : "Amount",
          "ChildAssociations" : [ ],
          "ColumnID" : "f6502a0d-6c27-4246-92a9-06ae0af3e56e",
          "Code" : "Amount",
          "Name" : "结算金额",
          "MDataType" : "Decimal",
          "Length" : 10,
          "Precision" : 2,
          "EnableRtrim" : true
        }, {
          "ID" : "93c1834c-a08a-4f78-bb64-ae71e9e60b8e",
          "LabelID" : "Remark",
          "ChildAssociations" : [ ],
          "ColumnID" : "aae15287-cbe4-45b2-a5c0-f6c6de09429c",
          "Code" : "Remark",
          "Name" : "备注",
          "MDataType" : "String",
          "Length" : 100,
          "EnableRtrim" : true
        } ],
        "RefObjectName" : "53bd190b-712c-4265-9774-c6aff8421afd",
        "ObjectType" : 1,
        "ColumnGenerateID" : {
          "ElementID" : "1805ecb4-2feb-4b24-a51c-3a145a53b5fe",
          "GenerateType" : "Guid",
          "ColumnParameters" : [ ]
        },
        "BelongModelID" : "aa3b3e82-8530-4ba9-8a77-fdcbd372f2fe",
        "Keys" : [ {
          "SourceElement" : "54e9369b-1f67-477f-a2aa-8209d33ff134",
          "SourceElementDisplay" : "上级对象主键",
          "TargetElement" : "7a27ef7f-83fd-4dda-b4a1-1964cc1ec5ee",
          "TargetElementDisplay" : "主键",
          "RefDataModelName" : ""
        } ],
        "ParentObjectID" : "e2cba429-c95c-4867-a0a1-d511600a6f9a"
      } ],
      "RefObjectName" : "eb654c50-8e79-4ba0-8bb3-e08ca2b5d57e",
      "ColumnGenerateID" : {
        "ElementID" : "7a27ef7f-83fd-4dda-b4a1-1964cc1ec5ee",
        "GenerateType" : "Guid",
        "ColumnParameters" : [ ]
      },
      "BelongModelID" : "aa3b3e82-8530-4ba9-8a77-fdcbd372f2fe"
    },
    "Variables" : {
      "ID" : "00eb3317-1da9-4984-a669-2fe029f349f5",
      "Code" : "SaleOrderVariable",
      "Name" : "业务订单变量",
      "I18nResourceInfoPrefix" : ""
    },
    "ComponentAssemblyName" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Back"
  },
  "ExtendRule" : null,
  "RelativePath" : "AppOrder/Order/SaleOrder/bo-saleorder-back/metadata/be",
  "ExtendProperty" : "{\"enableEntryBills\":false}",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}