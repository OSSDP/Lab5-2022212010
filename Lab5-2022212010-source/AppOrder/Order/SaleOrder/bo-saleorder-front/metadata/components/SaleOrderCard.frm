{
  "Header" : {
    "Code" : "SaleOrderCard",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Front",
    "CertId" : null,
    "Name" : "订单维护",
    "FileName" : "SaleOrderCard.frm",
    "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "9983be53-6bea-4050-b216-6069e270d44f",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "765d35bf-1df2-4f1c-a4c5-d8c5a0ce455a",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Front",
      "Code" : "SaleOrderCard.frm",
      "Name" : "SaleOrderCard.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Contents" : {
      "module" : {
        "id" : "SaleOrderCard",
        "code" : "SaleOrderCard",
        "name" : "订单维护",
        "caption" : "订单维护",
        "type" : "Module",
        "creator" : "wang-xh",
        "creationDate" : "2022-09-14T02:38:05.213Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "card-template",
        "templateId" : "card-template",
        "schemas" : [ {
          "name" : "订单维护_frm",
          "id" : "ad12fca3-caa8-427d-a1ee-f1ce13d7b9ee",
          "entities" : [ {
            "name" : "业务订单",
            "id" : "533d0acd-fc75-40c2-9ed7-b01243a15b2d",
            "type" : {
              "$type" : "EntityType",
              "fields" : [ {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : true,
                "name" : "主键",
                "id" : "9fdf7d62-a967-41fd-bcb7-881894ccd23b",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "code" : "ID",
                "label" : "id",
                "originalId" : "9fdf7d62-a967-41fd-bcb7-881894ccd23b",
                "bindingField" : "id",
                "bindingPath" : "id"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "DateBox",
                  "format" : "'yyyy-MM-dd'"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "版本",
                "id" : "0d39b9e8-0c71-4fce-b39a-287cda2ecc06",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "code" : "Version",
                "label" : "version",
                "originalId" : "0d39b9e8-0c71-4fce-b39a-287cda2ecc06",
                "bindingField" : "version",
                "bindingPath" : "version"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "订单编号",
                "id" : "1c8bd21f-170d-49d3-a5cf-89f7e1cf06a7",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "code" : "OrderCode",
                "label" : "orderCode",
                "originalId" : "1c8bd21f-170d-49d3-a5cf-89f7e1cf06a7",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode"
              }, {
                "$type" : "ComplexField",
                "name" : "商户",
                "id" : "f2cea256-5859-4e32-8f46-ff580505f2ff",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "商户",
                    "id" : "3c7ea746-4ea5-4c4e-a38d-5c1d04451a26",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant",
                    "code" : "Merchant",
                    "label" : "merchant",
                    "originalId" : "3c7ea746-4ea5-4c4e-a38d-5c1d04451a26",
                    "bindingField" : "merchant",
                    "bindingPath" : "merchant.merchant"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "910cdc80-692d-43be-aa56-6d6f21e3a33c",
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "商户名称",
                    "id" : "b27406c8-a01c-4a2c-bdd2-585f3268673e",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantName",
                    "code" : "MerchantName",
                    "label" : "merchant_MerchantName",
                    "originalId" : "b27406c8-a01c-4a2c-bdd2-585f3268673e",
                    "bindingField" : "merchant_Merchant_MerchantName",
                    "bindingPath" : "merchant.merchant_MerchantName"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "022f5d98-a6b6-4fa5-8481-c6ef009995b7",
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "商户编号",
                    "id" : "1469ef1a-a157-41a2-aed2-7e438d19edf5",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantCode",
                    "code" : "MerchantCode",
                    "label" : "merchant_MerchantCode",
                    "originalId" : "1469ef1a-a157-41a2-aed2-7e438d19edf5",
                    "bindingField" : "merchant_Merchant_MerchantCode",
                    "bindingPath" : "merchant.merchant_MerchantCode"
                  } ],
                  "entities" : [ ],
                  "primary" : "merchant",
                  "name" : "Merchant3c7e",
                  "displayName" : "商户"
                },
                "path" : "Merchant",
                "code" : "Merchant",
                "label" : "merchant",
                "originalId" : "f2cea256-5859-4e32-8f46-ff580505f2ff",
                "bindingField" : "merchant",
                "bindingPath" : "merchant"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "下单时间",
                "id" : "b3e111b3-b6ea-488f-a6a4-d162127cab3f",
                "type" : {
                  "$type" : "StringType",
                  "length" : 30,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderTime",
                "code" : "OrderTime",
                "label" : "orderTime",
                "originalId" : "b3e111b3-b6ea-488f-a6a4-d162127cab3f",
                "bindingField" : "orderTime",
                "bindingPath" : "orderTime"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "支付方式",
                "id" : "a000bf9a-ca26-4e69-b567-60ecfe967746",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "现金",
                    "value" : "Cash"
                  }, {
                    "name" : "银联",
                    "value" : "Upay"
                  }, {
                    "name" : "微信",
                    "value" : "WeChat"
                  }, {
                    "name" : "支付宝",
                    "value" : "AliPay"
                  } ]
                },
                "path" : "PayMethod",
                "code" : "PayMethod",
                "label" : "payMethod",
                "originalId" : "a000bf9a-ca26-4e69-b567-60ecfe967746",
                "bindingField" : "payMethod",
                "bindingPath" : "payMethod"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "订单类型",
                "id" : "d14b583d-8771-418f-a1f3-764a9dd54752",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "备货订单",
                    "value" : "bh"
                  }, {
                    "name" : "发货订单",
                    "value" : "fh"
                  } ]
                },
                "path" : "OrderType",
                "code" : "OrderType",
                "label" : "orderType",
                "originalId" : "d14b583d-8771-418f-a1f3-764a9dd54752",
                "bindingField" : "orderType",
                "bindingPath" : "orderType"
              }, {
                "$type" : "ComplexField",
                "refElementId" : null,
                "name" : "下单人",
                "id" : "69eb1c8c-a20f-4abc-8418-ab2d6e6b1ee6",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "require" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "下单人",
                    "id" : "c37ffcc8-018f-4fe5-9ff6-ea9d5d5b2378",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson",
                    "bindingField" : "orderPerson",
                    "bindingPath" : "orderPerson.orderPerson",
                    "label" : "orderPerson",
                    "code" : "OrderPerson",
                    "originalId" : "c37ffcc8-018f-4fe5-9ff6-ea9d5d5b2378"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "9a66ba74-9003-4f5a-be5e-851bf28031ef",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "require" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "名称",
                    "id" : "db7ea81d-b27c-409c-9c1d-e1078cb22c07",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 1000,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_Name",
                    "bindingField" : "orderPerson_OrderPerson_Name",
                    "bindingPath" : "orderPerson.orderPerson_Name",
                    "label" : "orderPerson_Name",
                    "code" : "Name",
                    "originalId" : "db7ea81d-b27c-409c-9c1d-e1078cb22c07"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : "4b9a0bff-2f9e-4656-b7bf-6e98468109cc",
                    "defaultValue" : "",
                    "multiLanguage" : false,
                    "require" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "readonly" : false,
                    "name" : "编号",
                    "id" : "8d28e829-e8db-4d42-b3cd-0942a8b67f17",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 1000,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "OrderPerson.OrderPerson_Code",
                    "bindingField" : "orderPerson_OrderPerson_Code",
                    "bindingPath" : "orderPerson.orderPerson_Code",
                    "label" : "orderPerson_Code",
                    "code" : "Code",
                    "originalId" : "8d28e829-e8db-4d42-b3cd-0942a8b67f17"
                  } ],
                  "entities" : [ ],
                  "primary" : "orderPerson",
                  "name" : "EmployeeC37f",
                  "displayName" : "行政人员"
                },
                "path" : "OrderPerson",
                "code" : "OrderPerson",
                "label" : "orderPerson",
                "originalId" : "69eb1c8c-a20f-4abc-8418-ab2d6e6b1ee6",
                "bindingField" : "orderPerson",
                "bindingPath" : "orderPerson"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "联系电话",
                "id" : "2f511548-81ea-4838-9f52-db752d978689",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Telephone",
                "code" : "Telephone",
                "label" : "telephone",
                "originalId" : "2f511548-81ea-4838-9f52-db752d978689",
                "bindingField" : "telephone",
                "bindingPath" : "telephone"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "EnumField"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "订单状态",
                "id" : "46c317ac-0f5e-4699-a628-ce394d90449f",
                "type" : {
                  "$type" : "EnumType",
                  "name" : "Enum",
                  "displayName" : "枚举",
                  "valueType" : {
                    "$type" : "StringType",
                    "length" : 20,
                    "name" : "String",
                    "displayName" : "字符串"
                  },
                  "enumValues" : [ {
                    "name" : "未开始",
                    "value" : "None"
                  }, {
                    "name" : "进行中",
                    "value" : "Ongoing"
                  }, {
                    "name" : "已完成",
                    "value" : "Done"
                  }, {
                    "name" : "异常",
                    "value" : "Error"
                  } ]
                },
                "path" : "OrderState",
                "code" : "OrderState",
                "label" : "orderState",
                "originalId" : "46c317ac-0f5e-4699-a628-ce394d90449f",
                "bindingField" : "orderState",
                "bindingPath" : "orderState"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "TextBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "备注",
                "id" : "499e8db2-42ab-44ba-bbf7-1fae44bf0080",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "code" : "Remark",
                "label" : "remark",
                "originalId" : "499e8db2-42ab-44ba-bbf7-1fae44bf0080",
                "bindingField" : "remark",
                "bindingPath" : "remark"
              }, {
                "$type" : "SimpleField",
                "refElementId" : null,
                "defaultValue" : "",
                "readonly" : false,
                "editor" : {
                  "$type" : "NumericBox"
                },
                "multiLanguage" : false,
                "require" : false,
                "name" : "订单金额",
                "id" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2",
                "type" : {
                  "$type" : "NumericType",
                  "length" : 10,
                  "name" : "Number",
                  "displayName" : "数字",
                  "precision" : 2
                },
                "path" : "TotalPrice",
                "code" : "TotalPrice",
                "label" : "totalPrice",
                "originalId" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2",
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice"
              } ],
              "entities" : [ {
                "name" : "订单明细",
                "id" : "dbdc1cbd-3746-40c9-a6d8-0fed5bb0f51c",
                "type" : {
                  "$type" : "EntityType",
                  "fields" : [ {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : true,
                    "name" : "主键",
                    "id" : "1be84b26-98a4-4502-b40c-e4cf79c33343",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "code" : "ID",
                    "label" : "id",
                    "originalId" : "1be84b26-98a4-4502-b40c-e4cf79c33343",
                    "bindingField" : "id",
                    "bindingPath" : "id"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : true,
                    "name" : "上级对象主键",
                    "id" : "db198c4e-0058-4a1c-95a4-35a73bac3bac",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "code" : "ParentID",
                    "label" : "parentID",
                    "originalId" : "db198c4e-0058-4a1c-95a4-35a73bac3bac",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID"
                  }, {
                    "$type" : "ComplexField",
                    "name" : "商品",
                    "id" : "3a4307e9-bfe2-40a2-b8f9-1b030e6912f3",
                    "type" : {
                      "$type" : "EntityType",
                      "fields" : [ {
                        "$type" : "SimpleField",
                        "refElementId" : null,
                        "defaultValue" : "",
                        "readonly" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "require" : false,
                        "name" : "商品",
                        "id" : "e04ee1c6-e3db-4eb2-b9a8-19b510bcf284",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods",
                        "code" : "Goods",
                        "label" : "goods",
                        "originalId" : "e04ee1c6-e3db-4eb2-b9a8-19b510bcf284",
                        "bindingField" : "goods",
                        "bindingPath" : "goods.goods"
                      }, {
                        "$type" : "SimpleField",
                        "refElementId" : "7de76016-70c7-48b1-873b-ab6ecb67a3dc",
                        "defaultValue" : "",
                        "readonly" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "require" : false,
                        "name" : "商品名称",
                        "id" : "f04dc624-bac4-4609-95dc-0b0707017d67",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsName",
                        "code" : "GoodsName",
                        "label" : "goods_GoodsName",
                        "originalId" : "f04dc624-bac4-4609-95dc-0b0707017d67",
                        "bindingField" : "goods_Goods_GoodsName",
                        "bindingPath" : "goods.goods_GoodsName"
                      }, {
                        "$type" : "SimpleField",
                        "refElementId" : "84721949-f4ca-4656-8d3a-b6efa1a7be61",
                        "defaultValue" : "",
                        "readonly" : false,
                        "editor" : {
                          "$type" : "TextBox"
                        },
                        "multiLanguage" : false,
                        "require" : false,
                        "name" : "商品编号",
                        "id" : "022a53f4-fb29-42f7-9a1a-2218c8ec94f8",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsCode",
                        "code" : "GoodsCode",
                        "label" : "goods_GoodsCode",
                        "originalId" : "022a53f4-fb29-42f7-9a1a-2218c8ec94f8",
                        "bindingField" : "goods_Goods_GoodsCode",
                        "bindingPath" : "goods.goods_GoodsCode"
                      } ],
                      "entities" : [ ],
                      "primary" : "goods",
                      "name" : "GoodsE04E",
                      "displayName" : "商品"
                    },
                    "path" : "Goods",
                    "code" : "Goods",
                    "label" : "goods",
                    "originalId" : "3a4307e9-bfe2-40a2-b8f9-1b030e6912f3",
                    "bindingField" : "goods",
                    "bindingPath" : "goods"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "规格型号",
                    "id" : "31b92e40-426b-4f5f-9fcd-43036e1efcf5",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Specification",
                    "code" : "Specification",
                    "label" : "specification",
                    "originalId" : "31b92e40-426b-4f5f-9fcd-43036e1efcf5",
                    "bindingField" : "specification",
                    "bindingPath" : "specification"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "数量",
                    "id" : "d1e85f51-bd34-471b-9216-9b8dd83823a9",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 0,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 0
                    },
                    "path" : "Quality",
                    "code" : "Quality",
                    "label" : "quality",
                    "originalId" : "d1e85f51-bd34-471b-9216-9b8dd83823a9",
                    "bindingField" : "quality",
                    "bindingPath" : "quality"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "标准单价",
                    "id" : "b57c8582-20cf-4ed9-9592-91643061fea1",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "Price",
                    "code" : "Price",
                    "label" : "price",
                    "originalId" : "b57c8582-20cf-4ed9-9592-91643061fea1",
                    "bindingField" : "price",
                    "bindingPath" : "price"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "实际单价",
                    "id" : "64a437b5-e46a-433f-a592-b3992fe3d12f",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "ActualPrice",
                    "code" : "ActualPrice",
                    "label" : "actualPrice",
                    "originalId" : "64a437b5-e46a-433f-a592-b3992fe3d12f",
                    "bindingField" : "actualPrice",
                    "bindingPath" : "actualPrice"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "EnumField"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "折扣类型",
                    "id" : "c9b47bda-1c6c-4841-95cb-4436ae35a14f",
                    "type" : {
                      "$type" : "EnumType",
                      "name" : "Enum",
                      "displayName" : "枚举",
                      "valueType" : {
                        "$type" : "StringType",
                        "length" : 20,
                        "name" : "String",
                        "displayName" : "字符串"
                      },
                      "enumValues" : [ {
                        "name" : "无折扣",
                        "value" : "none"
                      }, {
                        "name" : "折扣",
                        "value" : "zk"
                      } ]
                    },
                    "path" : "DiscountType",
                    "code" : "DiscountType",
                    "label" : "discountType",
                    "originalId" : "c9b47bda-1c6c-4841-95cb-4436ae35a14f",
                    "bindingField" : "discountType",
                    "bindingPath" : "discountType"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "折扣",
                    "id" : "451b4df4-d6b6-44c8-a779-661761841b17",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 10,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Discount",
                    "code" : "Discount",
                    "label" : "discount",
                    "originalId" : "451b4df4-d6b6-44c8-a779-661761841b17",
                    "bindingField" : "discount",
                    "bindingPath" : "discount"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "NumericBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "结算金额",
                    "id" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b",
                    "type" : {
                      "$type" : "NumericType",
                      "length" : 10,
                      "name" : "Number",
                      "displayName" : "数字",
                      "precision" : 2
                    },
                    "path" : "Amount",
                    "code" : "Amount",
                    "label" : "amount",
                    "originalId" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b",
                    "bindingField" : "amount",
                    "bindingPath" : "amount"
                  }, {
                    "$type" : "SimpleField",
                    "refElementId" : null,
                    "defaultValue" : "",
                    "readonly" : false,
                    "editor" : {
                      "$type" : "TextBox"
                    },
                    "multiLanguage" : false,
                    "require" : false,
                    "name" : "备注",
                    "id" : "186e624e-326c-4e4f-8f2c-5baf7fe152cc",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Remark",
                    "code" : "Remark",
                    "label" : "remark",
                    "originalId" : "186e624e-326c-4e4f-8f2c-5baf7fe152cc",
                    "bindingField" : "remark",
                    "bindingPath" : "remark"
                  } ],
                  "entities" : [ ],
                  "primary" : "id",
                  "name" : "OrderItems",
                  "displayName" : "订单明细"
                },
                "code" : "OrderItems",
                "label" : "orderItemss"
              } ],
              "primary" : "id",
              "name" : "SaleOrder",
              "displayName" : "业务订单"
            },
            "code" : "SaleOrder",
            "label" : "saleOrders"
          } ],
          "sourceType" : "vo",
          "variables" : [ ],
          "code" : "SaleOrderCard_frm",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceUri" : "api/apporder/order/v1.0/SaleOrderCard_frm",
          "eapiId" : "a3559459-317d-4c75-9b62-73a570c7069f"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SaleOrderCard_state_machine",
          "name" : "订单维护状态机",
          "uri" : "3acdc3db-5c0b-49ad-ae9b-149f5ec048f2"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "业务订单",
          "fields" : [ ],
          "stateMachine" : "SaleOrderCard_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "e05264fb-796d-43fb-b83b-9e2f3866c328",
            "code" : "Load1",
            "name" : "加载",
            "params" : [ {
              "name" : "action",
              "shownName" : "初始动作",
              "value" : "{UISTATE~/root-component/action}",
              "description" : null
            } ],
            "handlerName" : "Load",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "246a275c-88c9-4c8a-aa82-be6a950a4325",
            "code" : "LoadAndAdd1",
            "name" : "加载并新增",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Create",
              "description" : null
            } ],
            "handlerName" : "LoadAndAdd",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "70acc053-fa15-45be-851c-cf694e1bcaf7",
            "code" : "LoadAndView1",
            "name" : "加载并查看",
            "params" : [ {
              "name" : "id",
              "shownName" : "数据id",
              "value" : "{UISTATE~/root-component/id}",
              "description" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Cancel",
              "description" : null
            } ],
            "handlerName" : "LoadAndView",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "3e72ee6f-8f7b-4f29-aa0e-5887f2861117",
            "code" : "LoadAndEdit1",
            "name" : "加载并编辑",
            "params" : [ {
              "name" : "id",
              "shownName" : "数据id",
              "value" : "{UISTATE~/root-component/id}",
              "description" : null
            }, {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Edit",
              "description" : null
            } ],
            "handlerName" : "LoadAndEdit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "f90aadfa-988c-4da5-a5db-1416c3333794",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Create",
              "description" : null
            } ],
            "handlerName" : "Add",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "a323e27b-b9c6-4848-93b9-f117403a94ff",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Edit",
              "description" : null
            } ],
            "handlerName" : "Edit",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "31b814db-01e4-407d-8fad-0f08dbb01999",
            "code" : "Save1",
            "name" : "保存数据",
            "params" : [ {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Cancel",
              "description" : null
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
              "shownName" : "状态迁移动作",
              "value" : "Cancel",
              "description" : null
            } ],
            "handlerName" : "Cancel",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "c8504c24-33e8-487a-91ce-2218b803fe01",
            "code" : "ChangeItem1",
            "name" : "ChangeItem",
            "params" : [ {
              "name" : "id",
              "shownName" : "id",
              "value" : "{DATA~/root-component/id}",
              "description" : null
            }, {
              "name" : "type",
              "shownName" : "type",
              "value" : "prev",
              "description" : "上一条prev;下一条next"
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}",
              "description" : "当前卡片所属列表页的功能id"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Cancel",
              "description" : null
            } ],
            "handlerName" : "ChangeItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "4a0cfb1a-1262-41a2-aeb9-c8edd5c09683",
            "code" : "ChangeItem2",
            "name" : "ChangeItem2",
            "params" : [ {
              "name" : "id",
              "shownName" : "id",
              "value" : "{DATA~/root-component/id}",
              "description" : null
            }, {
              "name" : "type",
              "shownName" : "type",
              "value" : "next",
              "description" : "上一条prev;下一条next"
            }, {
              "name" : "parentId",
              "shownName" : "parentId",
              "value" : "{UISTATE~/root-component/innerData/WEB_FORM_ROUTER_PARENT_ID}",
              "description" : "当前卡片所属列表页的功能id"
            }, {
              "name" : "transitionAction",
              "shownName" : "状态迁移动作",
              "value" : "Cancel",
              "description" : null
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
          "name" : "业务订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "1c8bd21f-170d-49d3-a5cf-89f7e1cf06a7",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b27406c8-a01c-4a2c-bdd2-585f3268673e",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SaleOrder.merchant_Merchant_MerchantName",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "merchantName",
                "displayType" : "TreeList",
                "mapFields" : "{'id':'merchant.merchant','merchantCode':'merchant.merchant_MerchantCode','merchantName':'merchant.merchant_MerchantName'}",
                "helpId" : "fd41004a-fa48-4cfc-a9cb-b642a7336e8f"
              },
              "name" : "商户名称",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "b3e111b3-b6ea-488f-a6a4-d162127cab3f",
            "fieldName" : "orderTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "DateBox"
              },
              "name" : "下单时间",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "a000bf9a-ca26-4e69-b567-60ecfe967746",
            "fieldName" : "payMethod",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "d14b583d-8771-418f-a1f3-764a9dd54752",
            "fieldName" : "orderType",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "2f511548-81ea-4838-9f52-db752d978689",
            "fieldName" : "telephone",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "46c317ac-0f5e-4699-a628-ce394d90449f",
            "fieldName" : "orderState",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "订单总额"
            }
          }, {
            "type" : "Form",
            "id" : "db7ea81d-b27c-409c-9c1d-e1078cb22c07",
            "fieldName" : "orderPerson_OrderPerson_Name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "SaleOrder.orderPerson_OrderPerson_Name",
                  "displayName" : "行政人员帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "name",
                "displayType" : "List",
                "mapFields" : "{'id':'orderPerson.orderPerson','code':'orderPerson.orderPerson_Code','name':'orderPerson.orderPerson_Name'}",
                "helpId" : "7a9fbe3b-c1ac-4650-b5cd-29c5bfb6c78e"
              },
              "name" : "下单人",
              "require" : false,
              "readonly" : false
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ ],
          "states" : [ ],
          "bindTo" : "/",
          "parent" : "root-viewmodel",
          "enableValidation" : true
        }, {
          "id" : "orderitems-component-viewmodel",
          "code" : "orderitems-component-viewmodel",
          "name" : "订单明细",
          "fields" : [ {
            "type" : "Form",
            "id" : "f04dc624-bac4-4609-95dc-0b0707017d67",
            "fieldName" : "goods_Goods_GoodsName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "editor" : {
                "$type" : "LookupEdit",
                "dataSource" : {
                  "uri" : "OrderItems.goods_Goods_GoodsName",
                  "displayName" : "商品帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "valueField" : "id",
                "textField" : "goodsName",
                "displayType" : "List",
                "mapFields" : "{'id':'goods.goods','goodsName':'goods.goods_GoodsName','goodsCode':'goods.goods_GoodsCode','specification':'specification'}",
                "helpId" : "f8681d7b-6966-4a27-b72c-961735af8484"
              },
              "name" : "商品名称",
              "require" : false,
              "readonly" : false
            }
          }, {
            "type" : "Form",
            "id" : "31b92e40-426b-4f5f-9fcd-43036e1efcf5",
            "fieldName" : "specification",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "d1e85f51-bd34-471b-9216-9b8dd83823a9",
            "fieldName" : "quality",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "b57c8582-20cf-4ed9-9592-91643061fea1",
            "fieldName" : "price",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "64a437b5-e46a-433f-a592-b3992fe3d12f",
            "fieldName" : "actualPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "实际结算单价"
            }
          }, {
            "type" : "Form",
            "id" : "c9b47bda-1c6c-4841-95cb-4436ae35a14f",
            "fieldName" : "discountType",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "451b4df4-d6b6-44c8-a779-661761841b17",
            "fieldName" : "discount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b",
            "fieldName" : "amount",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "实际结算金额"
            }
          } ],
          "states" : [ ],
          "bindTo" : "/orderItemss",
          "parent" : "root-viewmodel",
          "commands" : [ {
            "id" : "c6f3cff1-dd9e-47b1-b367-d04c7fa8a5e4",
            "code" : "orderitemsAddItem1",
            "name" : "新增子表数据",
            "params" : [ ],
            "handlerName" : "AddItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "80e3a769-9a0e-44b0-b83f-3d8ee8b833ba",
            "code" : "orderitemsRemoveItem1",
            "name" : "删除子表数据",
            "params" : [ {
              "name" : "id",
              "shownName" : "数据id",
              "value" : "{DATA~/#{orderitems-component}/orderItemss/id}",
              "description" : null
            } ],
            "handlerName" : "RemoveItem",
            "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393",
            "extensions" : [ ],
            "isInvalid" : false
          } ],
          "serviceRefs" : [ ],
          "enableValidation" : true,
          "pagination" : {
            "enable" : false
          }
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
                    "html" : "<span class=\"f-title-icon f-text-orna-bill\"><i class=\"f-icon f-icon-page-title-record\"></i></span><h4 class=\"f-title-text\">订单维护</h4><div class=\"f-title-pagination\"><span class=\"f-icon f-icon-arrow-w\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem1()\"></span><span class=\"f-icon f-icon-arrow-e\" [ngClass]=\"{'f-state-disabled':!viewModel.stateMachine['canEdit']}\" (click)=\"viewModel.stateMachine['canEdit']&&viewModel.ChangeItem2()\"></span></div>"
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
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
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
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
                }, {
                  "id" : "detail-container",
                  "type" : "ContentContainer",
                  "appearance" : {
                    "class" : "f-struct-wrapper"
                  },
                  "size" : null,
                  "contents" : [ {
                    "id" : "detail-section",
                    "type" : "Section",
                    "appearance" : {
                      "class" : "f-section-tabs f-section-in-mainsubcard"
                    },
                    "visible" : true,
                    "mainTitle" : "",
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
                    "enableAccordion" : true,
                    "accordionMode" : "default",
                    "showHeader" : false,
                    "headerTemplate" : "",
                    "titleTemplate" : "",
                    "extendedHeaderAreaTemplate" : "",
                    "toolbarTemplate" : "",
                    "extendedAreaTemplate" : "",
                    "contents" : [ {
                      "id" : "detail-tab",
                      "type" : "Tab",
                      "controlSource" : "Farris",
                      "appearance" : {
                        "class" : "f-component-tabs f-tabs-has-grid"
                      },
                      "selected" : "orderitems-tab-page",
                      "size" : null,
                      "position" : "top",
                      "contents" : [ {
                        "id" : "orderitems-tab-page",
                        "type" : "TabPage",
                        "controlSource" : "Farris",
                        "title" : "订单明细",
                        "appearance" : null,
                        "size" : null,
                        "removeable" : false,
                        "headerTemplate" : null,
                        "contents" : [ {
                          "id" : "orderitems-component-ref",
                          "type" : "ComponentRef",
                          "component" : "orderitems-component",
                          "visible" : true
                        } ],
                        "toolbar" : {
                          "id" : "orderitems-tab-toolbar",
                          "type" : "TabToolbar",
                          "position" : "inHead",
                          "contents" : [ {
                            "id" : "orderitemsAddButton",
                            "type" : "TabToolbarItem",
                            "title" : "新增",
                            "disable" : "!viewModel.stateMachine['canAddDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.orderitems-component-viewmodel.orderitemsAddItem1"
                          }, {
                            "id" : "orderitemsRemoveButton",
                            "type" : "TabToolbarItem",
                            "title" : "删除",
                            "disable" : "!viewModel.stateMachine['canRemoveDetail']",
                            "appearance" : {
                              "class" : "btn btn-secondary f-btn-ml"
                            },
                            "visible" : true,
                            "click" : "root-viewmodel.orderitems-component-viewmodel.orderitemsRemoveItem1"
                          } ]
                        },
                        "visible" : true
                      } ],
                      "tabChange" : null,
                      "tabRemove" : null,
                      "contentFill" : false,
                      "autoTitleWidth" : false,
                      "titleWidth" : 0,
                      "titleLength" : 7,
                      "visible" : true
                    } ],
                    "isScrollSpyItem" : false,
                    "toolbar" : {
                      "type" : "SectionToolbar",
                      "position" : "inHead",
                      "contents" : [ ]
                    }
                  } ],
                  "visible" : true,
                  "isScrollspyContainer" : false
                } ],
                "visible" : true,
                "draggable" : false,
                "isLikeCardContainer" : true,
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
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
            "enableAccordion" : true,
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
                "id" : "orderCode_1c8bd21f_rv5r",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "订单编号",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "1c8bd21f-170d-49d3-a5cf-89f7e1cf06a7"
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
                "path" : "orderCode",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "updateOn" : "blur"
              }, {
                "id" : "merchant_Merchant_MerchantName_b27406c8_ld7a",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "商户名称",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_MerchantName",
                  "field" : "b27406c8-a01c-4a2c-bdd2-585f3268673e",
                  "fullPath" : "Merchant.Merchant_MerchantName"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "SaleOrder.merchant_Merchant_MerchantName",
                  "displayName" : "商户帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "merchantName",
                "valueField" : "id",
                "displayType" : "TreeList",
                "multiSelect" : false,
                "pageList" : "10,20,30,50,100",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'id':'merchant.merchant','merchantCode':'merchant.merchant_MerchantCode','merchantName':'merchant.merchant_MerchantName'}",
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
                "tabindex" : 0,
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
                "autoWidth" : true,
                "maxHeight" : null,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "path" : "merchant.merchant_MerchantName",
                "isRTControl" : false,
                "updateOn" : "blur",
                "helpId" : "fd41004a-fa48-4cfc-a9cb-b642a7336e8f"
              }, {
                "id" : "totalPrice_b8332a1a_b0q0",
                "type" : "NumericBox",
                "titleSourceType" : "static",
                "title" : "订单总额",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "textAlign" : "left",
                "precisionSourceType" : "static",
                "precision" : 2,
                "validation" : null,
                "maxValue" : null,
                "minValue" : null,
                "step" : 1,
                "useThousands" : true,
                "formatter" : null,
                "parser" : null,
                "canNull" : true,
                "bigNumber" : false,
                "maxLength" : 10,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : -1,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "showZero" : true,
                "showButton" : true,
                "path" : "totalPrice",
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "updateOn" : "blur"
              }, {
                "id" : "orderType_d14b583d_368i",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "订单类型",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderType",
                  "field" : "d14b583d-8771-418f-a1f3-764a9dd54752"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "name" : "备货订单",
                  "value" : "bh"
                }, {
                  "name" : "发货订单",
                  "value" : "fh"
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
                "path" : "orderType",
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              }, {
                "id" : "orderState_46c317ac_5sdb",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "订单状态",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderState",
                  "field" : "46c317ac-0f5e-4699-a628-ce394d90449f"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "name" : "未开始",
                  "value" : "None"
                }, {
                  "name" : "进行中",
                  "value" : "Ongoing"
                }, {
                  "name" : "已完成",
                  "value" : "Done"
                }, {
                  "name" : "异常",
                  "value" : "Error"
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
                "path" : "orderState",
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "updateOn" : "change"
              }, {
                "id" : "payMethod_a000bf9a_4w1q",
                "type" : "EnumField",
                "titleSourceType" : "static",
                "title" : "支付方式",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "payMethod",
                  "field" : "a000bf9a-ca26-4e69-b567-60ecfe967746",
                  "fullPath" : "PayMethod"
                },
                "placeHolder" : "",
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "enumData" : [ {
                  "name" : "现金",
                  "value" : "Cash"
                }, {
                  "name" : "银联",
                  "value" : "Upay"
                }, {
                  "name" : "微信",
                  "value" : "WeChat"
                }, {
                  "name" : "支付宝",
                  "value" : "AliPay"
                } ],
                "idField" : "value",
                "textField" : "name",
                "holdPlace" : false,
                "isTextArea" : true,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
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
                "viewType" : "text",
                "noSearch" : false,
                "maxSearchLength" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "path" : "payMethod",
                "updateOn" : "blur"
              }, {
                "id" : "orderPerson_OrderPerson_Name_db7ea81d_8uui",
                "type" : "LookupEdit",
                "titleSourceType" : "static",
                "title" : "下单人",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderPerson_OrderPerson_Name",
                  "field" : "db7ea81d-b27c-409c-9c1d-e1078cb22c07",
                  "fullPath" : "OrderPerson.OrderPerson_Name"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "dataSource" : {
                  "uri" : "SaleOrder.orderPerson_OrderPerson_Name",
                  "displayName" : "行政人员帮助",
                  "idField" : "id",
                  "type" : "ViewObject"
                },
                "textField" : "name",
                "valueField" : "id",
                "displayType" : "List",
                "multiSelect" : false,
                "pageList" : "10,20,30,50,100",
                "pageSize" : 20,
                "pageIndex" : null,
                "pagination" : null,
                "dialogTitle" : "",
                "showMaxButton" : null,
                "showCloseButton" : null,
                "resizable" : null,
                "buttonAlign" : null,
                "mapFields" : "{'id':'orderPerson.orderPerson','code':'orderPerson.orderPerson_Code','name':'orderPerson.orderPerson_Name'}",
                "lookupStyle" : "popup",
                "holdPlace" : false,
                "isTextArea" : true,
                "useTip" : false,
                "useFavorite" : true,
                "noSearch" : false,
                "maxSearchLength" : 1000,
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
                "tabindex" : 0,
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
                "autoWidth" : true,
                "maxHeight" : null,
                "showHeader" : true,
                "beforeSelectData" : null,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "enableContextMenu" : false,
                "path" : "orderPerson.orderPerson_Name",
                "isRTControl" : false,
                "updateOn" : "blur",
                "fieldValueChanging" : "",
                "fieldValueChanged" : "",
                "helpId" : "7a9fbe3b-c1ac-4650-b5cd-29c5bfb6c78e"
              }, {
                "id" : "orderTime_b3e111b3_eyqk",
                "type" : "DateBox",
                "titleSourceType" : "static",
                "title" : "下单时间",
                "controlSource" : "Farris",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "orderTime",
                  "field" : "b3e111b3-b6ea-488f-a6a4-d162127cab3f",
                  "fullPath" : "OrderTime"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
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
                "fieldType" : "String",
                "useDefault" : false,
                "holdPlace" : false,
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "visible" : true,
                "isTextArea" : true,
                "tabindex" : 0,
                "hasDefaultFocus" : false,
                "focusState" : null,
                "titleWidth" : null,
                "localization" : false,
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false,
                "path" : "orderTime",
                "localizationType" : "Date",
                "isRTControl" : false,
                "updateOn" : "blur"
              }, {
                "id" : "telephone_2f511548_a7y3",
                "type" : "TextBox",
                "titleSourceType" : "static",
                "title" : "联系电话",
                "appearance" : {
                  "class" : "col-12 col-md-6 col-xl-3 col-el-2"
                },
                "size" : null,
                "binding" : {
                  "type" : "Form",
                  "path" : "telephone",
                  "field" : "2f511548-81ea-4838-9f52-db752d978689"
                },
                "readonly" : "!viewModel.stateMachine['editable']",
                "require" : false,
                "disable" : false,
                "placeHolder" : "",
                "format" : null,
                "validation" : null,
                "value" : null,
                "maxLength" : 20,
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
                "path" : "telephone",
                "enableAppend" : false,
                "inputAppendType" : "button",
                "inputAppendDisabled" : false
              } ],
              "controlsInline" : true,
              "formAutoIntl" : true,
              "visible" : true
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
        }, {
          "id" : "orderitems-component",
          "type" : "Component",
          "viewModel" : "orderitems-component-viewmodel",
          "appearance" : {
            "class" : "f-struct-is-subgrid"
          },
          "contents" : [ {
            "id" : "orderitems-component-layout",
            "type" : "ContentContainer",
            "appearance" : {
              "class" : "f-grid-is-sub f-utils-flex-column"
            },
            "size" : null,
            "contents" : [ {
              "id" : "dataGrid_orderitems",
              "type" : "DataGrid",
              "controlSource" : "Farris",
              "dataSource" : "orderItemss",
              "fields" : [ {
                "id" : "goods_Goods_GoodsName_f04dc624_p43q",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商品名称",
                "captionTemplate" : null,
                "dataField" : "goods.goods_GoodsName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "goods_Goods_GoodsName",
                  "field" : "f04dc624-bac4-4609-95dc-0b0707017d67"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "goods_Goods_GoodsName_f04dc624_7jii",
                  "type" : "LookupEdit",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "goods_Goods_GoodsName",
                    "field" : "f04dc624-bac4-4609-95dc-0b0707017d67",
                    "fullPath" : "Goods.Goods_GoodsName"
                  },
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "dataSource" : {
                    "uri" : "OrderItems.goods_Goods_GoodsName",
                    "displayName" : "商品帮助",
                    "idField" : "id",
                    "type" : "ViewObject"
                  },
                  "textField" : "goodsName",
                  "valueField" : "id",
                  "displayType" : "List",
                  "multiSelect" : false,
                  "pageList" : "10,20,30,50,100",
                  "pageSize" : 20,
                  "pageIndex" : null,
                  "pagination" : null,
                  "dialogTitle" : "",
                  "showMaxButton" : null,
                  "showCloseButton" : null,
                  "resizable" : null,
                  "buttonAlign" : null,
                  "mapFields" : "{'id':'goods.goods','goodsName':'goods.goods_GoodsName','goodsCode':'goods.goods_GoodsCode','specification':'specification'}",
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
                  "tabindex" : 0,
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
                  "autoWidth" : true,
                  "maxHeight" : null,
                  "showHeader" : true,
                  "beforeSelectData" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "enableContextMenu" : false,
                  "path" : "goods.goods_GoodsName",
                  "isRTControl" : false,
                  "updateOn" : "blur",
                  "helpId" : "f8681d7b-6966-4a27-b72c-961735af8484",
                  "readonly" : false
                },
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
                "path" : "goods.goods_GoodsName",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "localizationType" : "Date"
              }, {
                "id" : "specification_31b92e40_n6ue",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "规格型号",
                "captionTemplate" : null,
                "dataField" : "specification",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "specification",
                  "field" : "31b92e40-426b-4f5f-9fcd-43036e1efcf5"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "specification_31b92e40_7fne",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "specification",
                    "field" : "31b92e40-426b-4f5f-9fcd-43036e1efcf5"
                  },
                  "readonly" : false,
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
                  "path" : "specification",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false
                },
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
                "path" : "specification",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "localizationType" : "Date"
              }, {
                "id" : "quality_d1e85f51_ziwq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "数量",
                "captionTemplate" : null,
                "dataField" : "quality",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "quality",
                  "field" : "d1e85f51-bd34-471b-9216-9b8dd83823a9"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "quality_d1e85f51_461x",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "quality",
                    "field" : "d1e85f51-bd34-471b-9216-9b8dd83823a9"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 0,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 0,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "quality",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false
                },
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
                  "type" : "number",
                  "precision" : 0,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "quality",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "price_b57c8582_weq9",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "标准单价",
                "captionTemplate" : null,
                "dataField" : "price",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "price",
                  "field" : "b57c8582-20cf-4ed9-9592-91643061fea1"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "price_b57c8582_6xzi",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "price",
                    "field" : "b57c8582-20cf-4ed9-9592-91643061fea1"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 10,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "price",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "updateOn" : "blur"
                },
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
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "price",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "discountType_c9b47bda_wxfi",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "折扣类型",
                "binding" : {
                  "type" : "Form",
                  "path" : "discountType",
                  "field" : "c9b47bda-1c6c-4841-95cb-4436ae35a14f",
                  "fullPath" : "DiscountType"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "discountType",
                "dataType" : "enum",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : {
                  "id" : "discountType_c9b47bda_iqoz",
                  "type" : "EnumField",
                  "titleSourceType" : "static",
                  "title" : "折扣类型",
                  "controlSource" : "Farris",
                  "appearance" : {
                    "class" : ""
                  },
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "discountType",
                    "field" : "c9b47bda-1c6c-4841-95cb-4436ae35a14f",
                    "fullPath" : "DiscountType"
                  },
                  "placeHolder" : "",
                  "require" : false,
                  "disable" : false,
                  "enumData" : [ {
                    "name" : "无折扣",
                    "value" : "none"
                  }, {
                    "name" : "折扣",
                    "value" : "zk"
                  } ],
                  "idField" : "value",
                  "textField" : "name",
                  "holdPlace" : false,
                  "isTextArea" : true,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "tabindex" : 0,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
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
                  "viewType" : "text",
                  "noSearch" : false,
                  "maxSearchLength" : null,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "path" : "discountType",
                  "readonly" : false,
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : [ {
                  "name" : "无折扣",
                  "value" : "none"
                }, {
                  "name" : "折扣",
                  "value" : "zk"
                } ],
                "idField" : "value",
                "textField" : "name",
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
                "linkedLabelEnabled" : false,
                "linkedLabelClick" : null,
                "textAlign" : "left",
                "hAlign" : "left",
                "vAlign" : "middle",
                "formatter" : {
                  "type" : "enum"
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "visible" : true,
                "enableFilter" : false,
                "headerStyler" : "",
                "styler" : "",
                "localization" : false,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "colTemplate" : "<span *ngIf=\"ctx.rowData.discountType === 'none'\">\r\n   <span class=\"badge-round-danger mr-2\"></span>{{'GridField/discountType_c9b47bda_wxfi/enumData/none'|lang:lang:'无折扣'}}\r\n</span>\r\n<span *ngIf=\"ctx.rowData.discountType === 'zk'\">\r\n   <span class=\"badge-round-info mr-2\"></span>{{'GridField/discountType_c9b47bda_wxfi/enumData/zk'|lang:lang:'折扣'}}\r\n</span>",
                "iconConfigForEnumData" : {
                  "type" : "process",
                  "iconEnumMapping" : {
                    "dangerRound" : "none",
                    "infoRound" : "zk"
                  }
                }
              }, {
                "id" : "discount_451b4df4_2jhk",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "折扣",
                "captionTemplate" : null,
                "dataField" : "discount",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "discount",
                  "field" : "451b4df4-d6b6-44c8-a779-661761841b17"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "discount_451b4df4_2b62",
                  "type" : "TextBox",
                  "titleSourceType" : "static",
                  "title" : "文本",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "discount",
                    "field" : "451b4df4-d6b6-44c8-a779-661761841b17"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "format" : null,
                  "validation" : null,
                  "value" : null,
                  "maxLength" : 10,
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
                  "path" : "discount",
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "updateOn" : "blur"
                },
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
                "path" : "discount",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "localizationType" : "Date"
              }, {
                "id" : "actualPrice_64a437b5_kzoq",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "实际结算单价",
                "captionTemplate" : null,
                "dataField" : "actualPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "actualPrice",
                  "field" : "64a437b5-e46a-433f-a592-b3992fe3d12f"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "actualPrice_64a437b5_ch64",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "actualPrice",
                    "field" : "64a437b5-e46a-433f-a592-b3992fe3d12f"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 10,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "actualPrice",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "updateOn" : "blur"
                },
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
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "actualPrice",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "amount_2fbc4129_n57p",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "实际结算金额",
                "captionTemplate" : null,
                "dataField" : "amount",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "amount",
                  "field" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b"
                },
                "enumData" : null,
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "displayTemplate" : null,
                "editor" : {
                  "id" : "amount_2fbc4129_vr56",
                  "type" : "NumericBox",
                  "titleSourceType" : "static",
                  "title" : "数值框",
                  "controlSource" : "Farris",
                  "appearance" : null,
                  "size" : null,
                  "binding" : {
                    "type" : "Form",
                    "path" : "amount",
                    "field" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b"
                  },
                  "readonly" : false,
                  "require" : false,
                  "disable" : false,
                  "placeHolder" : "",
                  "textAlign" : "left",
                  "precisionSourceType" : "static",
                  "precision" : 2,
                  "validation" : null,
                  "maxValue" : null,
                  "minValue" : null,
                  "step" : 1,
                  "useThousands" : true,
                  "formatter" : null,
                  "parser" : null,
                  "canNull" : true,
                  "bigNumber" : false,
                  "maxLength" : 10,
                  "holdPlace" : false,
                  "linkedLabelEnabled" : false,
                  "linkedLabelClick" : null,
                  "visible" : true,
                  "isTextArea" : true,
                  "tabindex" : -1,
                  "hasDefaultFocus" : false,
                  "focusState" : null,
                  "titleWidth" : null,
                  "showZero" : true,
                  "showButton" : true,
                  "path" : "amount",
                  "localization" : false,
                  "enableAppend" : false,
                  "inputAppendType" : "button",
                  "inputAppendDisabled" : false,
                  "updateOn" : "blur"
                },
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "sortOrder" : null,
                "resizeable" : true,
                "aggregate" : {
                  "type" : "sum",
                  "formatter" : {
                    "precision" : 2,
                    "thousand" : ",",
                    "prefix" : "结算金额合计：",
                    "suffix" : "",
                    "decimal" : ".",
                    "type" : "number"
                  },
                  "styler" : "(value, rowData, rowIndex) => {\r\n    return {\r\n        style: {\r\n            background: '#e6f7ff',\r\n            fontWeight: 800\r\n        }\r\n    };\r\n}"
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
                  "type" : "number",
                  "precision" : 2,
                  "thousand" : ",",
                  "decimal" : "."
                },
                "showTips" : false,
                "tipContent" : null,
                "multiLanguage" : false,
                "enableFilter" : false,
                "headerStyler" : "",
                "localization" : false,
                "path" : "amount",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              } ],
              "appearance" : {
                "class" : "f-component-grid f-utils-fill"
              },
              "size" : null,
              "disable" : false,
              "focusedItem" : null,
              "focusedIndex" : null,
              "pagination" : false,
              "lockPagination" : "viewModel.stateMachine&&viewModel.stateMachine['editable']",
              "showPageList" : false,
              "identifyField" : null,
              "multiSelect" : false,
              "showCheckbox" : false,
              "showAllCheckbox" : false,
              "checkOnSelect" : false,
              "selectOnCheck" : false,
              "selectable" : null,
              "itemTemplate" : null,
              "toolBar" : null,
              "summary" : null,
              "groupable" : false,
              "group" : null,
              "showGroupColumn" : true,
              "groupFormatter" : null,
              "groupStyler" : null,
              "groupFooter" : false,
              "editable" : "viewModel.stateMachine['editable']",
              "fieldEditable" : true,
              "fitColumns" : true,
              "autoFitColumns" : false,
              "multiSort" : false,
              "showBorder" : false,
              "striped" : true,
              "onSelectionChange" : "",
              "styler" : "",
              "showLineNumber" : false,
              "filterable" : false,
              "appendRow" : "orderitemsAddItem1",
              "pageChange" : null,
              "disableRow" : null,
              "beforeSelect" : null,
              "beforeUnSelect" : null,
              "beforeCheck" : null,
              "beforeUnCheck" : null,
              "dblClickRow" : null,
              "virtualized" : false,
              "showFooter" : true,
              "footerTemplate" : "",
              "footerDataFrom" : "client",
              "footerDataCommand" : null,
              "footerHeight" : 29,
              "enableFilterRow" : false,
              "remoteFilter" : false,
              "showFilterBar" : false,
              "useControlPanel" : false,
              "autoHeight" : false,
              "rowClick" : null,
              "showSelectedList" : false,
              "selectedItemFormatter" : null,
              "lineNumberWidth" : 36,
              "enableMorePageSelect" : false,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
              "rowHeight" : 30,
              "showPageSize" : false,
              "fixedColumns" : [ ],
              "enableCommandColumn" : false,
              "onEditClicked" : "",
              "onDeleteClicked" : "",
              "commandColumnWidth" : 120,
              "checkedChange" : null,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "enableHighlightCell" : false,
              "enableEditCellStyle" : false,
              "showRowGroupPanel" : false,
              "enableDragColumn" : false,
              "groupSummaryPosition" : "groupFooterRow",
              "clearSelectionsWhenDataIsEmpty" : true,
              "keepSelect" : true,
              "enableEditByCard" : "none",
              "pageSizeChanged" : null,
              "visible" : true,
              "showGotoInput" : false,
              "scrollBarShowMode" : "auto",
              "showScrollArrow" : false,
              "footerPosition" : "bottom",
              "selectOnEditing" : false,
              "selectionMode" : "default",
              "enableContextMenu" : false,
              "disableGroupOnEditing" : true,
              "enableSimpleMode" : false,
              "beforeEdit" : null,
              "nowrap" : true,
              "mergeCell" : false,
              "remoteSort" : false,
              "columnSorted" : null,
              "enableHeaderGroup" : false,
              "headerGroup" : null,
              "AutoColumnWidthUseDblclick" : true,
              "virtualizedAsyncLoad" : false,
              "scrollYLoad" : null,
              "pagerContentTemplate" : null
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
          } ],
          "componentType" : "dataGrid",
          "visible" : true,
          "onInit" : null,
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
          }, {
            "host" : "c6f3cff1-dd9e-47b1-b367-d04c7fa8a5e4",
            "handler" : "AddItem"
          }, {
            "host" : "80e3a769-9a0e-44b0-b83f-3d8ee8b833ba",
            "handler" : "RemoveItem"
          } ]
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-saleorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ {
          "fieldId" : "64a437b5-e46a-433f-a592-b3992fe3d12f",
          "expression" : [ {
            "id" : "64a437b5-e46a-433f-a592-b3992fe3d12f_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.ToBigDecimal(SaleOrder.orderItemss[0].discount)*SaleOrder.orderItemss[0].price\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b",
          "expression" : [ {
            "id" : "2fbc4129-51f8-4cd6-b719-9727ad167f7b_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"SaleOrder.orderItemss[0].actualPrice*SaleOrder.orderItemss[0].quality\",\"sexpr\":\"\"}"
          } ]
        }, {
          "fieldId" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2",
          "expression" : [ {
            "id" : "b8332a1a-6e7e-4ea1-8a38-e90a8c3c97d2_compute",
            "type" : "compute",
            "value" : "{\"expr\":\"DefaultFunction.SumByProp(\\\"SaleOrder.orderItemss\\\",\\\"amount\\\")\",\"sexpr\":\"\"}"
          } ]
        } ],
        "metadataId" : "9983be53-6bea-4050-b216-6069e270d44f",
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
                "name" : "新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态迁移动作",
                  "value" : "Create",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
                "name" : "编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态迁移动作",
                  "value" : "Edit",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
                "name" : "保存数据",
                "handlerName" : "Save",
                "params" : [ {
                  "name" : "transitionAction",
                  "shownName" : "状态迁移动作",
                  "value" : "Cancel",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
                  "shownName" : "状态迁移动作",
                  "value" : "Cancel",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
            "id" : "orderitemsAddButton",
            "viewModelId" : "orderitems-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderitems-component",
                "viewModelId" : "orderitems-component-viewmodel"
              },
              "command" : {
                "id" : "c6f3cff1-dd9e-47b1-b367-d04c7fa8a5e4",
                "label" : "orderitemsAddItem1",
                "name" : "新增子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
            "id" : "orderitemsRemoveButton",
            "viewModelId" : "orderitems-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "click",
                "name" : "点击事件"
              },
              "targetComponent" : {
                "id" : "orderitems-component",
                "viewModelId" : "orderitems-component-viewmodel"
              },
              "command" : {
                "id" : "80e3a769-9a0e-44b0-b83f-3d8ee8b833ba",
                "label" : "orderitemsRemoveItem1",
                "name" : "删除子表数据",
                "handlerName" : "RemoveItem",
                "params" : [ {
                  "name" : "id",
                  "shownName" : "数据id",
                  "value" : "{DATA~/#{orderitems-component}/orderItemss/id}",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
                "name" : "加载",
                "handlerName" : "Load",
                "params" : [ {
                  "name" : "action",
                  "shownName" : "初始动作",
                  "value" : "{UISTATE~/root-component/action}",
                  "description" : null
                } ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
            "id" : "dataGrid_orderitems",
            "viewModelId" : "orderitems-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "appendRow",
                "name" : "回车新增行事件"
              },
              "targetComponent" : {
                "id" : "orderitems-component",
                "viewModelId" : "orderitems-component-viewmodel"
              },
              "command" : {
                "id" : "c6f3cff1-dd9e-47b1-b367-d04c7fa8a5e4",
                "label" : "orderitemsAddItem1",
                "name" : "新增子表数据",
                "handlerName" : "AddItem",
                "params" : [ ],
                "cmpId" : "8172a979-2c80-4637-ace7-b13074d3f393"
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
        "renderMode" : "compile"
      }
    },
    "CreationDate" : null,
    "Id" : "9983be53-6bea-4050-b216-6069e270d44f"
  },
  "ExtendRule" : null,
  "RelativePath" : "AppOrder/Order/SaleOrder/bo-saleorder-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}