{
  "Header" : {
    "Code" : "SaleOrderList",
    "Type" : "Form",
    "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Front",
    "CertId" : null,
    "Name" : "业务订单列表",
    "FileName" : "SaleOrderList.frm",
    "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d",
    "Language" : null,
    "Extendable" : false,
    "ID" : "cb6fdd29-fa4c-4d2e-a4f4-8aca260f000f",
    "IsTranslating" : false
  },
  "Refs" : [ {
    "DependentMetadata" : {
      "ID" : "67f09bac-5644-4187-bea1-c6496cb2c90f",
      "CertId" : null,
      "NameSpace" : "Inspur.GS.AppOrder.Order.SaleOrder.SaleOrder.Front",
      "Code" : "SaleOrderList.frm",
      "Name" : "SaleOrderList.frm",
      "Type" : "ResourceMetadata",
      "BizobjectID" : "110200f5-ac63-a59d-8b68-324ba954cd9d"
    }
  } ],
  "Content" : {
    "code" : null,
    "name" : null,
    "Contents" : {
      "module" : {
        "id" : "SaleOrderList",
        "code" : "SaleOrderList",
        "name" : "业务订单列表",
        "caption" : "业务订单列表",
        "type" : "Module",
        "creator" : "wang-xh",
        "creationDate" : "2022-09-14T02:34:58.325Z",
        "updateVersion" : "191104",
        "showTitle" : true,
        "bootstrap" : "list-template",
        "templateId" : "list-template",
        "schemas" : [ {
          "name" : "业务订单列表_frm",
          "id" : "3b30a3f8-f1e9-4d99-90a1-4256e3665001",
          "entities" : [ {
            "name" : "业务订单",
            "id" : "b77c7989-54f7-4fb2-a253-57cebb1955b9",
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
                "id" : "1e1940d1-48c7-4b45-92ec-14d3c0576a04",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "ID",
                "code" : "ID",
                "label" : "id",
                "originalId" : "1e1940d1-48c7-4b45-92ec-14d3c0576a04",
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
                "id" : "a0e8ca42-865c-4a52-bd61-e9b72b258fbb",
                "type" : {
                  "$type" : "DateTimeType",
                  "name" : "DateTime",
                  "displayName" : "日期时间"
                },
                "path" : "Version",
                "code" : "Version",
                "label" : "version",
                "originalId" : "a0e8ca42-865c-4a52-bd61-e9b72b258fbb",
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
                "id" : "ec2867f9-5c05-42e0-9436-e6f50163f846",
                "type" : {
                  "$type" : "StringType",
                  "length" : 36,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderCode",
                "code" : "OrderCode",
                "label" : "orderCode",
                "originalId" : "ec2867f9-5c05-42e0-9436-e6f50163f846",
                "bindingField" : "orderCode",
                "bindingPath" : "orderCode"
              }, {
                "$type" : "ComplexField",
                "name" : "商户",
                "id" : "d92cc542-88ae-4dd9-9f18-32857f515091",
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
                    "id" : "f3522307-4768-464c-b621-6e2523d71453",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantName",
                    "code" : "MerchantName",
                    "label" : "merchant_MerchantName",
                    "originalId" : "f3522307-4768-464c-b621-6e2523d71453",
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
                    "id" : "27b1f59e-c778-457e-9daf-eb6d5bd40fb9",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Merchant.Merchant_MerchantCode",
                    "code" : "MerchantCode",
                    "label" : "merchant_MerchantCode",
                    "originalId" : "27b1f59e-c778-457e-9daf-eb6d5bd40fb9",
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
                "originalId" : "d92cc542-88ae-4dd9-9f18-32857f515091",
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
                "id" : "561f63c7-52e2-484f-ae88-df273d8220c7",
                "type" : {
                  "$type" : "StringType",
                  "length" : 30,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "OrderTime",
                "code" : "OrderTime",
                "label" : "orderTime",
                "originalId" : "561f63c7-52e2-484f-ae88-df273d8220c7",
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
                "id" : "1fd626cf-a62c-400c-8ad9-a889ee3abe1c",
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
                "originalId" : "1fd626cf-a62c-400c-8ad9-a889ee3abe1c",
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
                "id" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01",
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
                "originalId" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01",
                "bindingField" : "orderType",
                "bindingPath" : "orderType"
              }, {
                "$type" : "ComplexField",
                "refElementId" : null,
                "name" : "下单人",
                "id" : "08a6a5fd-2eef-41be-a770-1c538227b762",
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
                    "id" : "215eda5d-c0ee-452d-ab00-604a623882dc",
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
                    "originalId" : "215eda5d-c0ee-452d-ab00-604a623882dc"
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
                    "id" : "ba879c14-c15d-4d10-a7e5-92527d2ebeea",
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
                    "originalId" : "ba879c14-c15d-4d10-a7e5-92527d2ebeea"
                  } ],
                  "entities" : [ ],
                  "primary" : "orderPerson",
                  "name" : "EmployeeC37f",
                  "displayName" : "行政人员"
                },
                "path" : "OrderPerson",
                "code" : "OrderPerson",
                "label" : "orderPerson",
                "originalId" : "08a6a5fd-2eef-41be-a770-1c538227b762",
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
                "id" : "762d4bec-16b0-45fc-9574-15f7abb353b1",
                "type" : {
                  "$type" : "StringType",
                  "length" : 20,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Telephone",
                "code" : "Telephone",
                "label" : "telephone",
                "originalId" : "762d4bec-16b0-45fc-9574-15f7abb353b1",
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
                "id" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb",
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
                "originalId" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb",
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
                "id" : "a42078eb-57f4-43bf-b836-6b10010f88a4",
                "type" : {
                  "$type" : "StringType",
                  "length" : 100,
                  "name" : "String",
                  "displayName" : "字符串"
                },
                "path" : "Remark",
                "code" : "Remark",
                "label" : "remark",
                "originalId" : "a42078eb-57f4-43bf-b836-6b10010f88a4",
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
                "id" : "3f4e3b0d-9208-4123-8f73-d5017f3597e5",
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
                "originalId" : "3f4e3b0d-9208-4123-8f73-d5017f3597e5",
                "bindingField" : "totalPrice",
                "bindingPath" : "totalPrice"
              } ],
              "entities" : [ {
                "name" : "订单明细",
                "id" : "6acb3244-8de8-4196-9744-e8d43f754c7b",
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
                    "id" : "df1cbe26-5af7-4259-a9e2-e42ec1096820",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ID",
                    "code" : "ID",
                    "label" : "id",
                    "originalId" : "df1cbe26-5af7-4259-a9e2-e42ec1096820",
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
                    "id" : "b67a9114-4e02-4fea-af2e-169a0284f996",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "ParentID",
                    "code" : "ParentID",
                    "label" : "parentID",
                    "originalId" : "b67a9114-4e02-4fea-af2e-169a0284f996",
                    "bindingField" : "parentID",
                    "bindingPath" : "parentID"
                  }, {
                    "$type" : "ComplexField",
                    "name" : "商品",
                    "id" : "a9823e91-3e87-424f-8cba-8cb3cccc8052",
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
                        "id" : "d9ea1704-09b9-4825-975d-5f9278c822b6",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsName",
                        "code" : "GoodsName",
                        "label" : "goods_GoodsName",
                        "originalId" : "d9ea1704-09b9-4825-975d-5f9278c822b6",
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
                        "id" : "f63c42e2-6a21-4d41-82df-790146754f01",
                        "type" : {
                          "$type" : "StringType",
                          "length" : 36,
                          "name" : "String",
                          "displayName" : "字符串"
                        },
                        "path" : "Goods.Goods_GoodsCode",
                        "code" : "GoodsCode",
                        "label" : "goods_GoodsCode",
                        "originalId" : "f63c42e2-6a21-4d41-82df-790146754f01",
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
                    "originalId" : "a9823e91-3e87-424f-8cba-8cb3cccc8052",
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
                    "id" : "fcd260c1-754c-46b9-8bbe-24ce31452be2",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 36,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Specification",
                    "code" : "Specification",
                    "label" : "specification",
                    "originalId" : "fcd260c1-754c-46b9-8bbe-24ce31452be2",
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
                    "id" : "9b5d5f05-9071-4c84-857c-798966e04410",
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
                    "originalId" : "9b5d5f05-9071-4c84-857c-798966e04410",
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
                    "id" : "3e9ebd34-8a0d-4bf9-8392-951518b73fae",
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
                    "originalId" : "3e9ebd34-8a0d-4bf9-8392-951518b73fae",
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
                    "id" : "bbb5d06e-a17a-423b-a27e-f82d32ca6216",
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
                    "originalId" : "bbb5d06e-a17a-423b-a27e-f82d32ca6216",
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
                    "id" : "438ba46d-47ce-4911-8a65-61aa0eab1acf",
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
                    "originalId" : "438ba46d-47ce-4911-8a65-61aa0eab1acf",
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
                    "id" : "18311f80-7004-4424-8d71-19ad6ab03209",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 10,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Discount",
                    "code" : "Discount",
                    "label" : "discount",
                    "originalId" : "18311f80-7004-4424-8d71-19ad6ab03209",
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
                    "id" : "56da5aaf-4775-4646-a375-47db5a0bf0c9",
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
                    "originalId" : "56da5aaf-4775-4646-a375-47db5a0bf0c9",
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
                    "id" : "df6d76fb-3cde-48ac-be6d-e0006aa4f1a0",
                    "type" : {
                      "$type" : "StringType",
                      "length" : 100,
                      "name" : "String",
                      "displayName" : "字符串"
                    },
                    "path" : "Remark",
                    "code" : "Remark",
                    "label" : "remark",
                    "originalId" : "df6d76fb-3cde-48ac-be6d-e0006aa4f1a0",
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
          "code" : "SaleOrderList_frm",
          "extendProperties" : {
            "enableStdTimeFormat" : true
          },
          "sourceUri" : "api/apporder/order/v1.0/SaleOrderList_frm",
          "eapiId" : "bf42ae24-f3e3-4b92-8719-d03b1c441b61"
        } ],
        "states" : [ ],
        "contents" : [ ],
        "stateMachines" : [ {
          "id" : "SaleOrderList_state_machine",
          "name" : "业务订单列表状态机",
          "uri" : "f65b51f0-3677-411c-9a33-370e609ef181"
        } ],
        "viewmodels" : [ {
          "id" : "root-viewmodel",
          "code" : "root-viewmodel",
          "name" : "业务订单",
          "fields" : [ ],
          "stateMachine" : "SaleOrderList_state_machine",
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "93ee1cd2-cf0b-40b3-b99f-958a3d1fad1c",
            "code" : "Load1",
            "name" : "加载数据",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "",
              "description" : "过滤条件"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "description" : "排序条件"
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
              "value" : "",
              "description" : null
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "description" : null
            }, {
              "name" : "pageSize",
              "shownName" : "分页大小",
              "value" : "",
              "description" : null
            }, {
              "name" : "pageIndex",
              "shownName" : "当前页码",
              "value" : "",
              "description" : null
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
              "shownName" : "待删除行id集合",
              "value" : "{UISTATE~/data-grid-component/ids}",
              "description" : null
            } ],
            "handlerName" : "RemoveRows",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "extensions" : [ ],
            "isInvalid" : false
          }, {
            "id" : "77556491-41c0-4356-8ccf-25e39817060e",
            "code" : "Add1",
            "name" : "新增数据",
            "params" : [ {
              "id" : "cb4250e7-2911-0d35-c21c-469232265847",
              "name" : "url",
              "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
              "shownName" : "卡片菜单id",
              "description" : "卡片菜单id",
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
                "Name" : "卡片菜单id",
                "Description" : "卡片菜单id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "cb4250e7-2911-0d35-c21c-469232265847",
                "IsRetVal" : false,
                "EditorType" : "MenuIdSelector"
              }
            }, {
              "id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
              "name" : "params",
              "value" : "{\"action\":\"LoadAndAdd1\"}",
              "shownName" : "路由参数",
              "description" : "路由参数",
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
                "Name" : "路由参数",
                "Description" : "路由参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
              "name" : "enableRefresh",
              "value" : "",
              "shownName" : "启用数据刷新",
              "description" : "启用数据刷新",
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
                "Code" : "enableRefresh",
                "Name" : "启用数据刷新",
                "Description" : "启用数据刷新",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
              "name" : "tabName",
              "value" : "",
              "shownName" : "标签页标题",
              "description" : "标签页标题",
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
                "Description" : "标签页标题",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
              "name" : "destructuring",
              "value" : "",
              "shownName" : "是否解构参数",
              "description" : "是否解构参数",
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
                "Code" : "destructuring",
                "Name" : "是否解构参数",
                "Description" : "是否解构参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "Add",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "52fdcac3-46c8-466e-aa5d-19920ece2076",
            "code" : "View1",
            "name" : "查看数据",
            "params" : [ {
              "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
              "name" : "url",
              "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
              "shownName" : "卡片菜单id",
              "description" : "卡片菜单id",
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
                "Name" : "卡片菜单id",
                "Description" : "卡片菜单id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                "IsRetVal" : false,
                "EditorType" : "MenuIdSelector"
              }
            }, {
              "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
              "name" : "params",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "shownName" : "路由参数",
              "description" : "路由参数",
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
                "Name" : "路由参数",
                "Description" : "路由参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
              "name" : "idToView",
              "value" : "",
              "shownName" : "要查看的数据id",
              "description" : "要查看的数据id",
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
                "Name" : "要查看的数据id",
                "Description" : "要查看的数据id",
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
              "shownName" : "启用数据刷新",
              "description" : "启用数据刷新",
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
                "Code" : "enableRefresh",
                "Name" : "启用数据刷新",
                "Description" : "启用数据刷新",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
              "name" : "tabName",
              "value" : "",
              "shownName" : "标签页标题",
              "description" : "标签页标题",
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
                "Description" : "标签页标题",
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
                "defaultValue" : null,
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
                "controlSource" : null,
                "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "7ade9996-0531-4401-b1bc-fb9ec8ee3f8e",
            "code" : "Edit1",
            "name" : "编辑数据",
            "params" : [ {
              "id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
              "name" : "url",
              "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
              "shownName" : "卡片菜单id",
              "description" : "卡片菜单id",
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
                "Name" : "卡片菜单id",
                "Description" : "卡片菜单id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                "IsRetVal" : false,
                "EditorType" : "MenuIdSelector"
              }
            }, {
              "id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
              "name" : "params",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "shownName" : "路由参数",
              "description" : "路由参数",
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
                "Name" : "路由参数",
                "Description" : "路由参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
              "name" : "idToEdit",
              "value" : "",
              "shownName" : "要编辑的数据id",
              "description" : "要编辑的数据id",
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
                "Code" : "idToEdit",
                "Name" : "要编辑的数据id",
                "Description" : "要编辑的数据id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
              "name" : "enableRefresh",
              "value" : "",
              "shownName" : "启用数据刷新",
              "description" : "启用数据刷新",
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
                "Code" : "enableRefresh",
                "Name" : "启用数据刷新",
                "Description" : "启用数据刷新",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
              "name" : "tabName",
              "value" : "",
              "shownName" : "标签页标题",
              "description" : "标签页标题",
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
                "Description" : "标签页标题",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
              "name" : "destructuring",
              "value" : "",
              "shownName" : "是否解构参数",
              "description" : "是否解构参数",
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
                "Code" : "destructuring",
                "Name" : "是否解构参数",
                "Description" : "是否解构参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "debae2dd-3387-48cf-90ba-96e74ab5a8e5",
            "code" : "Remove1",
            "name" : "删除数据",
            "params" : [ {
              "id" : "f4860465-7597-4a04-13c9-45da176d3073",
              "name" : "id",
              "value" : "{DATA~/data-grid-component/id}",
              "shownName" : "要删除的数据id数组",
              "description" : "要删除的数据id数组",
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
                "Code" : "id",
                "Name" : "要删除的数据id数组",
                "Description" : "要删除的数据id数组",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "f4860465-7597-4a04-13c9-45da176d3073",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
              "name" : "refreshCommandName",
              "value" : "",
              "shownName" : "数据刷新命令名称",
              "description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
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
                "Code" : "refreshCommandName",
                "Name" : "数据刷新命令名称",
                "Description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
              "name" : "refreshCommandFrameId",
              "value" : "",
              "shownName" : "数据刷新命令对应的FrameId",
              "description" : "数据刷新命令对应的FrameId",
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
                "Code" : "refreshCommandFrameId",
                "Name" : "数据刷新命令对应的FrameId",
                "Description" : "数据刷新命令对应的FrameId",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
              "name" : "successMsg",
              "value" : "",
              "shownName" : "提示信息",
              "description" : "选填",
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
                "Code" : "successMsg",
                "Name" : "提示信息",
                "Description" : "选填",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "root-component"
          }, {
            "id" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "code" : "Filter1",
            "name" : "过滤并加载数据1",
            "params" : [ {
              "name" : "filter",
              "shownName" : "过滤条件",
              "value" : "{UISTATE~/root-component/originalFilterConditionList}",
              "description" : "过滤条件"
            }, {
              "name" : "sort",
              "shownName" : "排序条件",
              "value" : "",
              "description" : "排序条件"
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
          "name" : "业务订单",
          "fields" : [ {
            "type" : "Form",
            "id" : "ec2867f9-5c05-42e0-9436-e6f50163f846",
            "fieldName" : "orderCode",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "f3522307-4768-464c-b621-6e2523d71453",
            "fieldName" : "merchant_Merchant_MerchantName",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "561f63c7-52e2-484f-ae88-df273d8220c7",
            "fieldName" : "orderTime",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "1fd626cf-a62c-400c-8ad9-a889ee3abe1c",
            "fieldName" : "payMethod",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur",
            "fieldSchema" : { }
          }, {
            "type" : "Form",
            "id" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01",
            "fieldName" : "orderType",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb",
            "fieldName" : "orderState",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "change"
          }, {
            "type" : "Form",
            "id" : "3f4e3b0d-9208-4123-8f73-d5017f3597e5",
            "fieldName" : "totalPrice",
            "groupId" : null,
            "groupName" : null,
            "updateOn" : "blur"
          }, {
            "type" : "Form",
            "id" : "215eda5d-c0ee-452d-ab00-604a623882dc",
            "fieldName" : "orderPerson_OrderPerson_Name",
            "groupId" : "",
            "groupName" : "",
            "valueChanging" : "",
            "valueChanged" : "",
            "updateOn" : "blur",
            "fieldSchema" : {
              "name" : "下单人"
            }
          } ],
          "serviceRefs" : [ ],
          "commands" : [ {
            "id" : "1a1b7c33-38f0-469f-a017-223086ee6259",
            "code" : "ChangePage1",
            "name" : "切换页码",
            "params" : [ {
              "name" : "loadCommandName",
              "shownName" : "数据加载命令名称",
              "value" : "Filter1",
              "description" : "数据加载的命令名称"
            }, {
              "name" : "loadCommandFrameId",
              "shownName" : "数据加载命令框架id",
              "value" : "root-component",
              "description" : "数据加载命令所在的框架id"
            } ],
            "handlerName" : "ChangePage",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "cfa2bf22-c952-4e28-ac09-909d0bea9b99",
            "code" : "datagridcomponentviewmodelEdit1",
            "name" : "编辑数据1",
            "params" : [ {
              "id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
              "name" : "url",
              "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
              "shownName" : "卡片菜单id",
              "description" : "卡片菜单id",
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
                "Name" : "卡片菜单id",
                "Description" : "卡片菜单id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                "IsRetVal" : false,
                "EditorType" : "MenuIdSelector"
              }
            }, {
              "id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
              "name" : "params",
              "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "shownName" : "路由参数",
              "description" : "路由参数",
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
                "Name" : "路由参数",
                "Description" : "路由参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
              "name" : "idToEdit",
              "value" : "",
              "shownName" : "要编辑的数据id",
              "description" : "要编辑的数据id",
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
                "Code" : "idToEdit",
                "Name" : "要编辑的数据id",
                "Description" : "要编辑的数据id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
              "name" : "enableRefresh",
              "value" : "",
              "shownName" : "启用数据刷新",
              "description" : "启用数据刷新",
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
                "Code" : "enableRefresh",
                "Name" : "启用数据刷新",
                "Description" : "启用数据刷新",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
              "name" : "tabName",
              "value" : "",
              "shownName" : "标签页标题",
              "description" : "标签页标题",
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
                "Description" : "标签页标题",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
              "name" : "destructuring",
              "value" : "",
              "shownName" : "是否解构参数",
              "description" : "是否解构参数",
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
                "Code" : "destructuring",
                "Name" : "是否解构参数",
                "Description" : "是否解构参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "Edit",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "64e39442-1834-4797-a447-dae59b75b1cd",
            "code" : "datagridcomponentviewmodelRemove1",
            "name" : "删除数据1",
            "params" : [ {
              "id" : "f4860465-7597-4a04-13c9-45da176d3073",
              "name" : "id",
              "value" : "{DATA~/data-grid-component/id}",
              "shownName" : "要删除的数据id数组",
              "description" : "要删除的数据id数组",
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
                "Code" : "id",
                "Name" : "要删除的数据id数组",
                "Description" : "要删除的数据id数组",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "f4860465-7597-4a04-13c9-45da176d3073",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
              "name" : "refreshCommandName",
              "value" : "",
              "shownName" : "数据刷新命令名称",
              "description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
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
                "Code" : "refreshCommandName",
                "Name" : "数据刷新命令名称",
                "Description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
              "name" : "refreshCommandFrameId",
              "value" : "",
              "shownName" : "数据刷新命令对应的FrameId",
              "description" : "数据刷新命令对应的FrameId",
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
                "Code" : "refreshCommandFrameId",
                "Name" : "数据刷新命令对应的FrameId",
                "Description" : "数据刷新命令对应的FrameId",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
              "name" : "successMsg",
              "value" : "",
              "shownName" : "提示信息",
              "description" : "选填",
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
                "Code" : "successMsg",
                "Name" : "提示信息",
                "Description" : "选填",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "Remove",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
            "targetComponent" : "data-grid-component"
          }, {
            "id" : "0e3d5671-459e-40e0-ba20-8134fe21a415",
            "code" : "datagridcomponentviewmodelView1",
            "name" : "查看数据1",
            "params" : [ {
              "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
              "name" : "url",
              "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
              "shownName" : "卡片菜单id",
              "description" : "卡片菜单id",
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
                "Name" : "卡片菜单id",
                "Description" : "卡片菜单id",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                "IsRetVal" : false,
                "EditorType" : "MenuIdSelector"
              }
            }, {
              "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
              "name" : "params",
              "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
              "shownName" : "路由参数",
              "description" : "路由参数",
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
                "Name" : "路由参数",
                "Description" : "路由参数",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
              "name" : "idToView",
              "value" : "",
              "shownName" : "要查看的数据id",
              "description" : "要查看的数据id",
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
                "Name" : "要查看的数据id",
                "Description" : "要查看的数据id",
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
              "shownName" : "启用数据刷新",
              "description" : "启用数据刷新",
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
                "Code" : "enableRefresh",
                "Name" : "启用数据刷新",
                "Description" : "启用数据刷新",
                "ParameterType" : "string",
                "controlSource" : null,
                "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                "IsRetVal" : false,
                "EditorType" : null
              }
            }, {
              "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
              "name" : "tabName",
              "value" : "",
              "shownName" : "标签页标题",
              "description" : "标签页标题",
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
                "Description" : "标签页标题",
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
                "defaultValue" : null,
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
                "controlSource" : null,
                "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                "IsRetVal" : false,
                "EditorType" : null
              }
            } ],
            "handlerName" : "View",
            "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72",
            "isInvalid" : false,
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
          "enableValidation" : false
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
                  "id" : "1e1940d1-48c7-4b45-92ec-14d3c0576a04",
                  "labelCode" : "ID",
                  "code" : "ID",
                  "name" : "主键",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "a0e8ca42-865c-4a52-bd61-e9b72b258fbb",
                  "labelCode" : "Version",
                  "code" : "Version",
                  "name" : "版本",
                  "control" : {
                    "controltype" : "date",
                    "require" : false,
                    "format" : "yyyy-MM-dd"
                  }
                }, {
                  "id" : "ec2867f9-5c05-42e0-9436-e6f50163f846",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "订单编号",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "3c7ea746-4ea5-4c4e-a38d-5c1d04451a26",
                  "labelCode" : "Merchant.Merchant",
                  "code" : "Merchant",
                  "name" : "商户",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "f3522307-4768-464c-b621-6e2523d71453",
                  "labelCode" : "Merchant.Merchant_MerchantName",
                  "code" : "MerchantName",
                  "name" : "商户名称",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "27b1f59e-c778-457e-9daf-eb6d5bd40fb9",
                  "labelCode" : "Merchant.Merchant_MerchantCode",
                  "code" : "MerchantCode",
                  "name" : "商户编号",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "561f63c7-52e2-484f-ae88-df273d8220c7",
                  "labelCode" : "OrderTime",
                  "code" : "OrderTime",
                  "name" : "下单时间",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "1fd626cf-a62c-400c-8ad9-a889ee3abe1c",
                  "labelCode" : "PayMethod",
                  "code" : "PayMethod",
                  "name" : "支付方式",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01",
                  "labelCode" : "OrderType",
                  "code" : "OrderType",
                  "name" : "订单类型",
                  "control" : {
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "备货订单",
                      "value" : "bh"
                    }, {
                      "name" : "发货订单",
                      "value" : "fh"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "08a6a5fd-2eef-41be-a770-1c538227b762",
                  "labelCode" : "OrderPerson",
                  "code" : "OrderPerson",
                  "name" : "下单人",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "762d4bec-16b0-45fc-9574-15f7abb353b1",
                  "labelCode" : "Telephone",
                  "code" : "Telephone",
                  "name" : "联系电话",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb",
                  "labelCode" : "OrderState",
                  "code" : "OrderState",
                  "name" : "订单状态",
                  "control" : {
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "未完成",
                      "value" : "none"
                    }, {
                      "name" : "已完成",
                      "value" : "done"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "a42078eb-57f4-43bf-b836-6b10010f88a4",
                  "labelCode" : "Remark",
                  "code" : "Remark",
                  "name" : "备注",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "3f4e3b0d-9208-4123-8f73-d5017f3597e5",
                  "labelCode" : "TotalPrice",
                  "code" : "TotalPrice",
                  "name" : "订单金额",
                  "control" : {
                    "controltype" : "number",
                    "require" : false,
                    "className" : "",
                    "textAlign" : "left",
                    "precision" : 2,
                    "isBigNumber" : false
                  }
                } ],
                "presetFieldConfigs" : [ {
                  "id" : "ec2867f9-5c05-42e0-9436-e6f50163f846",
                  "labelCode" : "OrderCode",
                  "code" : "OrderCode",
                  "name" : "订单编号",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "f3522307-4768-464c-b621-6e2523d71453",
                  "labelCode" : "Merchant.Merchant_MerchantName",
                  "code" : "MerchantName",
                  "name" : "商户名称",
                  "control" : {
                    "controltype" : "text",
                    "require" : false,
                    "className" : ""
                  }
                }, {
                  "id" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01",
                  "labelCode" : "OrderType",
                  "code" : "OrderType",
                  "name" : "订单类型",
                  "control" : {
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "备货订单",
                      "value" : "bh"
                    }, {
                      "name" : "发货订单",
                      "value" : "fh"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                }, {
                  "id" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb",
                  "labelCode" : "OrderState",
                  "code" : "OrderState",
                  "name" : "订单状态",
                  "control" : {
                    "controltype" : "dropdown",
                    "require" : false,
                    "valueType" : "1",
                    "enumValues" : [ {
                      "name" : "未完成",
                      "value" : "none"
                    }, {
                      "name" : "已完成",
                      "value" : "done"
                    } ],
                    "className" : "",
                    "multiSelect" : false,
                    "panelHeight" : null
                  }
                } ],
                "formId" : "SaleOrderList",
                "isDisabled" : false,
                "presetQuerySolutionName" : "默认筛选方案",
                "onQuery" : "Filter1",
                "isControlInline" : true,
                "visible" : true,
                "binding" : null,
                "enableInitQuery" : false,
                "showCompleteLabel" : false,
                "expanded" : true,
                "enableHistory" : false
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
                    "html" : "<span class=\"f-title-icon f-text-orna-manage\"><i class=\"f-icon f-icon-page-title-administer\"></i></span><h4 class=\"f-title-text\">业务订单列表</h4>"
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
                "isScrollspyContainer" : false
              } ],
              "visible" : true,
              "isScrollspyContainer" : false
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
              "isScrollspyContainer" : false
            } ],
            "visible" : true,
            "isScrollspyContainer" : false
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
              "dataSource" : "saleOrders",
              "fields" : [ {
                "id" : "orderCode_ec2867f9_gibi",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单编号",
                "captionTemplate" : null,
                "dataField" : "orderCode",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderCode",
                  "field" : "ec2867f9-5c05-42e0-9436-e6f50163f846"
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
                "linkedLabelEnabled" : true,
                "linkedLabelClick" : "datagridcomponentviewmodelView1",
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
                "path" : "orderCode",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "localizationType" : "Date"
              }, {
                "id" : "merchant_Merchant_MerchantName_f3522307_md2o",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "商户名称",
                "captionTemplate" : null,
                "dataField" : "merchant.merchant_MerchantName",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "merchant_Merchant_MerchantName",
                  "field" : "f3522307-4768-464c-b621-6e2523d71453"
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
                "path" : "merchant.merchant_MerchantName",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
                "localizationType" : "Date"
              }, {
                "id" : "totalPrice_3f4e3b0d_rodh",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单金额",
                "captionTemplate" : null,
                "dataField" : "totalPrice",
                "dataType" : "number",
                "binding" : {
                  "type" : "Form",
                  "path" : "totalPrice",
                  "field" : "3f4e3b0d-9208-4123-8f73-d5017f3597e5"
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
                "path" : "totalPrice",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "orderType_abc3ef8c_8dp6",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单类型",
                "captionTemplate" : null,
                "dataField" : "orderType",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderType",
                  "field" : "abc3ef8c-1e13-43dd-90fc-eb1a1e5eaa01"
                },
                "enumData" : [ {
                  "name" : "备货订单",
                  "value" : "bh"
                }, {
                  "name" : "发货订单",
                  "value" : "fh"
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
                "path" : "orderType",
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "payMethod_1fd626cf_xrxu",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "支付方式",
                "binding" : {
                  "type" : "Form",
                  "path" : "payMethod",
                  "field" : "1fd626cf-a62c-400c-8ad9-a889ee3abe1c",
                  "fullPath" : "PayMethod"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "payMethod",
                "dataType" : "enum",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
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
                "tipMode" : "auto"
              }, {
                "id" : "orderState_11bb3c55_qzd7",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "订单状态",
                "captionTemplate" : null,
                "dataField" : "orderState",
                "dataType" : "enum",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderState",
                  "field" : "11bb3c55-e7a3-4c14-8f2a-fc2a46f977cb"
                },
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
                "colTemplate" : "<div style=\"display: flex;flex-direction: row;align-items: center;\">\r\n\t<ng-container [ngSwitch]=\"ctx.rowData['orderState']\">\r\n\t\t<ng-container *ngSwitchCase=\"'None'\">\r\n\t\t\t<span class=\"badge badge-round-info\" style=\"margin-right: 5px;background: rgb(193, 210, 240);\"></span> 未开始\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Ongoing'\">\r\n\t\t\t<span class=\"badge badge-round-info\" style=\"margin-right: 5px;background: rgb(0, 255, 0);\"></span> 进行中\r\n\t\t</ng-container>\r\n        <ng-container *ngSwitchCase=\"'Done'\">\r\n\t\t\t<span class=\"badge badge-round-info\" style=\"margin-right: 5px;background: rgb(0, 255, 10);\"></span> 已完成\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Error'\">\r\n\t\t\t<span class=\"badge badge-round-danger\" style=\"margin-right: 5px;background: rgb(255, 165, 0);\"></span> 异常\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</div>",
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
                "path" : "orderState",
                "idField" : "value",
                "textField" : "name",
                "readonly" : false,
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto"
              }, {
                "id" : "orderPerson_OrderPerson_Name_215eda5d_j241",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单人",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderPerson_OrderPerson_Name",
                  "field" : "215eda5d-c0ee-452d-ab00-604a623882dc",
                  "fullPath" : "OrderPerson.OrderPerson_Name"
                },
                "appearance" : null,
                "size" : {
                  "width" : 120
                },
                "readonly" : false,
                "dataField" : "orderPerson.orderPerson_Name",
                "dataType" : "string",
                "displayTemplate" : null,
                "captionTemplate" : null,
                "editor" : null,
                "draggable" : false,
                "frozen" : "none",
                "sortable" : true,
                "enumData" : null,
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
                  "type" : "none"
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
                "localizationType" : "Date"
              }, {
                "id" : "orderTime_561f63c7_m5ec",
                "type" : "GridField",
                "controlSource" : "Farris",
                "caption" : "下单时间",
                "captionTemplate" : null,
                "dataField" : "orderTime",
                "dataType" : "string",
                "binding" : {
                  "type" : "Form",
                  "path" : "orderTime",
                  "field" : "561f63c7-52e2-484f-ae88-df273d8220c7"
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
                "path" : "orderTime",
                "readonly" : false,
                "idField" : "value",
                "textField" : "name",
                "visible" : true,
                "allowGrouping" : true,
                "tipMode" : "auto",
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
              "filterable" : false,
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
              "onEditClicked" : "datagridcomponentviewmodelEdit1",
              "onDeleteClicked" : "datagridcomponentviewmodelRemove1",
              "commandColumnWidth" : 120,
              "checkedChange" : null,
              "footerHeight" : 29,
              "filterType" : "none",
              "enableSmartFilter" : false,
              "lineNumberTitle" : "",
              "rowClick" : null,
              "headerWrap" : false,
              "emptyTemplate" : null,
              "emptyDataHeight" : 240,
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
              "pagerContentTemplate" : null,
              "pageList" : "10,20,30,50,100",
              "pageSize" : 20,
              "checked" : null,
              "unChecked" : null,
              "checkAll" : null,
              "unCheckAll" : null,
              "filterChanged" : null
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
            "host" : "3805a58a-a1ee-4edc-99d6-351e2a8df22d",
            "handler" : "Add"
          }, {
            "host" : "cfa2bf22-c952-4e28-ac09-909d0bea9b99",
            "handler" : "Edit"
          }, {
            "host" : "64e39442-1834-4797-a447-dae59b75b1cd",
            "handler" : "Remove"
          }, {
            "host" : "0e3d5671-459e-40e0-ba20-8134fe21a415",
            "handler" : "View"
          } ]
        }, {
          "id" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9",
          "path" : "igix/Web/WebCmp/bo-webcmp/metadata/webcmd/data-commands",
          "name" : "LoadCommands.webcmd",
          "refedHandlers" : [ {
            "host" : "0d36eb0a-fe86-4769-b232-b84c72dcc02f",
            "handler" : "Filter"
          } ]
        } ],
        "serviceRefs" : [ ],
        "projectName" : "bo-saleorder-front",
        "showType" : "page",
        "toolbar" : {
          "items" : { },
          "configs" : { }
        },
        "expressions" : [ ],
        "metadataId" : "cb6fdd29-fa4c-4d2e-a4f4-8aca260f000f",
        "actions" : [ {
          "sourceComponent" : {
            "id" : "query-scheme-1",
            "viewModelId" : "root-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "onQuery",
                "name" : "查询"
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
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}",
                  "description" : "过滤条件"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : "",
                  "description" : "排序条件"
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9"
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
                "name" : "新增数据",
                "handlerName" : "Add",
                "params" : [ {
                  "id" : "cb4250e7-2911-0d35-c21c-469232265847",
                  "name" : "url",
                  "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
                  "shownName" : "卡片菜单id",
                  "description" : "卡片菜单id",
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
                    "Name" : "卡片菜单id",
                    "Description" : "卡片菜单id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "cb4250e7-2911-0d35-c21c-469232265847",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndAdd1\"}",
                  "shownName" : "路由参数",
                  "description" : "路由参数",
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
                    "Name" : "路由参数",
                    "Description" : "路由参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "ee492ea6-57f9-ce39-6e5b-3e4ea3350898",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "启用数据刷新",
                  "description" : "启用数据刷新",
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
                    "Code" : "enableRefresh",
                    "Name" : "启用数据刷新",
                    "Description" : "启用数据刷新",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "6f174254-d33d-1236-994a-fb48f0a306d8",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "标签页标题",
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
                    "Description" : "标签页标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "d8902678-d71d-5d10-a151-1114a0c1c4da",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
                  "name" : "destructuring",
                  "value" : "",
                  "shownName" : "是否解构参数",
                  "description" : "是否解构参数",
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
                    "Code" : "destructuring",
                    "Name" : "是否解构参数",
                    "Description" : "是否解构参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "5ddcfd0b-c390-6f09-2a31-748b9ed4f759",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                "name" : "编辑数据",
                "handlerName" : "Edit",
                "params" : [ {
                  "id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                  "name" : "url",
                  "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
                  "shownName" : "卡片菜单id",
                  "description" : "卡片菜单id",
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
                    "Name" : "卡片菜单id",
                    "Description" : "卡片菜单id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "路由参数",
                  "description" : "路由参数",
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
                    "Name" : "路由参数",
                    "Description" : "路由参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                  "name" : "idToEdit",
                  "value" : "",
                  "shownName" : "要编辑的数据id",
                  "description" : "要编辑的数据id",
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
                    "Code" : "idToEdit",
                    "Name" : "要编辑的数据id",
                    "Description" : "要编辑的数据id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "启用数据刷新",
                  "description" : "启用数据刷新",
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
                    "Code" : "enableRefresh",
                    "Name" : "启用数据刷新",
                    "Description" : "启用数据刷新",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "标签页标题",
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
                    "Description" : "标签页标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                  "name" : "destructuring",
                  "value" : "",
                  "shownName" : "是否解构参数",
                  "description" : "是否解构参数",
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
                    "Code" : "destructuring",
                    "Name" : "是否解构参数",
                    "Description" : "是否解构参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                "name" : "查看数据",
                "handlerName" : "View",
                "params" : [ {
                  "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                  "name" : "url",
                  "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
                  "shownName" : "卡片菜单id",
                  "description" : "卡片菜单id",
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
                    "Name" : "卡片菜单id",
                    "Description" : "卡片菜单id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "路由参数",
                  "description" : "路由参数",
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
                    "Name" : "路由参数",
                    "Description" : "路由参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                  "name" : "idToView",
                  "value" : "",
                  "shownName" : "要查看的数据id",
                  "description" : "要查看的数据id",
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
                    "Name" : "要查看的数据id",
                    "Description" : "要查看的数据id",
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
                  "shownName" : "启用数据刷新",
                  "description" : "启用数据刷新",
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
                    "Code" : "enableRefresh",
                    "Name" : "启用数据刷新",
                    "Description" : "启用数据刷新",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "标签页标题",
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
                    "Description" : "标签页标题",
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
                    "defaultValue" : null,
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
                    "controlSource" : null,
                    "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                "name" : "删除数据",
                "handlerName" : "Remove",
                "params" : [ {
                  "id" : "f4860465-7597-4a04-13c9-45da176d3073",
                  "name" : "id",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "要删除的数据id数组",
                  "description" : "要删除的数据id数组",
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
                    "Code" : "id",
                    "Name" : "要删除的数据id数组",
                    "Description" : "要删除的数据id数组",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "f4860465-7597-4a04-13c9-45da176d3073",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                  "name" : "refreshCommandName",
                  "value" : "",
                  "shownName" : "数据刷新命令名称",
                  "description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
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
                    "Code" : "refreshCommandName",
                    "Name" : "数据刷新命令名称",
                    "Description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                  "name" : "refreshCommandFrameId",
                  "value" : "",
                  "shownName" : "数据刷新命令对应的FrameId",
                  "description" : "数据刷新命令对应的FrameId",
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
                    "Code" : "refreshCommandFrameId",
                    "Name" : "数据刷新命令对应的FrameId",
                    "Description" : "数据刷新命令对应的FrameId",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                  "name" : "successMsg",
                  "value" : "",
                  "shownName" : "提示信息",
                  "description" : "选填",
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
                    "Code" : "successMsg",
                    "Name" : "提示信息",
                    "Description" : "选填",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                  "value" : "{UISTATE~/root-component/originalFilterConditionList}",
                  "description" : "过滤条件"
                }, {
                  "name" : "sort",
                  "shownName" : "排序条件",
                  "value" : "",
                  "description" : "排序条件"
                } ],
                "cmpId" : "54bddc89-5f7e-4b91-9c45-80dd6606cfe9"
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
            "id" : "orderCode_ec2867f9_gibi",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "linkedLabelClick",
                "name" : "标签超链事件"
              },
              "targetComponent" : {
                "id" : "data-grid-component",
                "viewModelId" : "data-grid-component-viewmodel"
              },
              "command" : {
                "id" : "0e3d5671-459e-40e0-ba20-8134fe21a415",
                "label" : "datagridcomponentviewmodelView1",
                "name" : "查看数据1",
                "handlerName" : "View",
                "params" : [ {
                  "id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                  "name" : "url",
                  "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
                  "shownName" : "卡片菜单id",
                  "description" : "卡片菜单id",
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
                    "Name" : "卡片菜单id",
                    "Description" : "卡片菜单id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "6169fcac-ab66-d3bf-66f8-2a8ee4ffc31e",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndView1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "路由参数",
                  "description" : "路由参数",
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
                    "Name" : "路由参数",
                    "Description" : "路由参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "f337083a-32ef-6f66-a78e-b86938c8890a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "5dd191f6-b4a1-91b3-bdab-f9aac8c105ba",
                  "name" : "idToView",
                  "value" : "",
                  "shownName" : "要查看的数据id",
                  "description" : "要查看的数据id",
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
                    "Name" : "要查看的数据id",
                    "Description" : "要查看的数据id",
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
                  "shownName" : "启用数据刷新",
                  "description" : "启用数据刷新",
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
                    "Code" : "enableRefresh",
                    "Name" : "启用数据刷新",
                    "Description" : "启用数据刷新",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "c8fd36e7-f507-5931-30ac-2d0c82919e61",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "ff8249ec-37ac-c52b-b2cf-328b5b0011fe",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "标签页标题",
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
                    "Description" : "标签页标题",
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
                    "defaultValue" : null,
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
                    "controlSource" : null,
                    "Id" : "1ee9c6b8-3eb1-ca43-7711-1bc284293b5a",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
            "id" : "dataGrid",
            "viewModelId" : "data-grid-component-viewmodel",
            "map" : [ {
              "event" : {
                "label" : "pageChange",
                "name" : "切换页码"
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
                  "shownName" : "数据加载命令名称",
                  "value" : "Filter1",
                  "description" : "数据加载的命令名称"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "数据加载命令框架id",
                  "value" : "root-component",
                  "description" : "数据加载命令所在的框架id"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                  "shownName" : "数据加载命令名称",
                  "value" : "Filter1",
                  "description" : "数据加载的命令名称"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "数据加载命令框架id",
                  "value" : "root-component",
                  "description" : "数据加载命令所在的框架id"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                  "shownName" : "数据加载命令名称",
                  "value" : "Filter1",
                  "description" : "数据加载的命令名称"
                }, {
                  "name" : "loadCommandFrameId",
                  "shownName" : "数据加载命令框架id",
                  "value" : "root-component",
                  "description" : "数据加载命令所在的框架id"
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                "id" : "cfa2bf22-c952-4e28-ac09-909d0bea9b99",
                "label" : "datagridcomponentviewmodelEdit1",
                "name" : "编辑数据1",
                "handlerName" : "Edit",
                "params" : [ {
                  "id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                  "name" : "url",
                  "value" : "21f6f7ab-cb0b-44df-97db-65fbf944705a",
                  "shownName" : "卡片菜单id",
                  "description" : "卡片菜单id",
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
                    "Name" : "卡片菜单id",
                    "Description" : "卡片菜单id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "e0dfac7a-5d3b-a812-f009-bb1eae6399cc",
                    "IsRetVal" : false,
                    "EditorType" : "MenuIdSelector"
                  }
                }, {
                  "id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                  "name" : "params",
                  "value" : "{\"action\":\"LoadAndEdit1\", \"id\":\"{DATA~/data-grid-component/id}\"}",
                  "shownName" : "路由参数",
                  "description" : "路由参数",
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
                    "Name" : "路由参数",
                    "Description" : "路由参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "410b8521-e099-97df-0ec3-23c1e328e0d9",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                  "name" : "idToEdit",
                  "value" : "",
                  "shownName" : "要编辑的数据id",
                  "description" : "要编辑的数据id",
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
                    "Code" : "idToEdit",
                    "Name" : "要编辑的数据id",
                    "Description" : "要编辑的数据id",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "315f74ad-52f1-e449-f239-f3aa7bfc9261",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                  "name" : "enableRefresh",
                  "value" : "",
                  "shownName" : "启用数据刷新",
                  "description" : "启用数据刷新",
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
                    "Code" : "enableRefresh",
                    "Name" : "启用数据刷新",
                    "Description" : "启用数据刷新",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "bd24f01a-45b7-f243-42d4-7694f82f79cc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                  "name" : "tabName",
                  "value" : "",
                  "shownName" : "标签页标题",
                  "description" : "标签页标题",
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
                    "Description" : "标签页标题",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "4bf319ab-9fe7-2b8e-8f34-c2af138ebe37",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                  "name" : "destructuring",
                  "value" : "",
                  "shownName" : "是否解构参数",
                  "description" : "是否解构参数",
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
                    "Code" : "destructuring",
                    "Name" : "是否解构参数",
                    "Description" : "是否解构参数",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "232ecadc-cb80-61ee-c1a2-3e4fda11c3ee",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
                "id" : "64e39442-1834-4797-a447-dae59b75b1cd",
                "label" : "datagridcomponentviewmodelRemove1",
                "name" : "删除数据1",
                "handlerName" : "Remove",
                "params" : [ {
                  "id" : "f4860465-7597-4a04-13c9-45da176d3073",
                  "name" : "id",
                  "value" : "{DATA~/data-grid-component/id}",
                  "shownName" : "要删除的数据id数组",
                  "description" : "要删除的数据id数组",
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
                    "Code" : "id",
                    "Name" : "要删除的数据id数组",
                    "Description" : "要删除的数据id数组",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "f4860465-7597-4a04-13c9-45da176d3073",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                  "name" : "refreshCommandName",
                  "value" : "",
                  "shownName" : "数据刷新命令名称",
                  "description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
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
                    "Code" : "refreshCommandName",
                    "Name" : "数据刷新命令名称",
                    "Description" : "数据刷新命令名称（设计时对应表单上的命令编号）",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "a1221a25-dbfc-d0b0-c9b4-e5a2f62bee69",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                  "name" : "refreshCommandFrameId",
                  "value" : "",
                  "shownName" : "数据刷新命令对应的FrameId",
                  "description" : "数据刷新命令对应的FrameId",
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
                    "Code" : "refreshCommandFrameId",
                    "Name" : "数据刷新命令对应的FrameId",
                    "Description" : "数据刷新命令对应的FrameId",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "90b23f34-fc4a-f74b-8f0a-a9521e80a9ab",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                }, {
                  "id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                  "name" : "successMsg",
                  "value" : "",
                  "shownName" : "提示信息",
                  "description" : "选填",
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
                    "Code" : "successMsg",
                    "Name" : "提示信息",
                    "Description" : "选填",
                    "ParameterType" : "string",
                    "controlSource" : null,
                    "Id" : "e5686bb9-ab18-54fb-1f8f-cac34b6c7dbc",
                    "IsRetVal" : false,
                    "EditorType" : null
                  }
                } ],
                "cmpId" : "70b4abd4-9f2c-4b7c-90e9-6ac6f4b74c72"
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
        "renderMode" : "compile"
      }
    },
    "CreationDate" : null,
    "Id" : "cb6fdd29-fa4c-4d2e-a4f4-8aca260f000f"
  },
  "ExtendRule" : null,
  "RelativePath" : "AppOrder/Order/SaleOrder/bo-saleorder-front/metadata/components",
  "ExtendProperty" : "",
  "Extended" : false,
  "PreviousVersion" : null,
  "Version" : null,
  "Properties" : null
}