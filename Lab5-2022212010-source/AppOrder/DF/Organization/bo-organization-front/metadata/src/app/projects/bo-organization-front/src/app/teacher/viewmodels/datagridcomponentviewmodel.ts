
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "teacher_id_e14b3b80_1rz4",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "teacher_id_e14b3b80_1rz4",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "teacher_id",
          "fullPath": "teacher_id",
          "isExpression": false,
          "value": "teacher_id"
        },
        "dataField": "teacher_id",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "教师工号",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "name_c8912fac_r0fz",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "name_c8912fac_r0fz",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "name",
          "fullPath": "name",
          "isExpression": false,
          "value": "name"
        },
        "dataField": "name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "教师姓名",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "department_949fe0ca_ttk3",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "department_949fe0ca_ttk3",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "department",
          "fullPath": "department",
          "isExpression": false,
          "value": "department"
        },
        "dataField": "department",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "所在院系",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "计算机学院",
            "value": "cs"
          },
          {
            "disabled": false,
            "name": "数学学院",
            "value": "math"
          },
          {
            "disabled": false,
            "name": "中文学院",
            "value": "Chinese"
          },
          {
            "disabled": false,
            "name": "法学院",
            "value": "falv"
          }
        ],
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "change",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "password_dc6f345c_vpuv",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "password_dc6f345c_vpuv",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "password",
          "fullPath": "password",
          "isExpression": false,
          "value": "password"
        },
        "dataField": "password",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "密码",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "email_Email_d61de382_gryz",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "email_Email_d61de382_gryz",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "email_Email",
          "fullPath": "email.Email",
          "isExpression": false,
          "value": "email_Email"
        },
        "dataField": "email.email",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "邮箱",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      }
    ],
    "multiSelect": false,
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: '#{root-component}'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridEdit1',
        params: {
            url: 'df0de510-c510-474e-80a9-27c04654c084',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
            idToEdit: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToEdit: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public datagridEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridRemove1',
        params: {
            id: '{DATA~/#{root-component}/id}',
            refreshCommandName: 'Filter1',
            refreshCommandFrameId: '#{root-component}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public datagridRemove1(commandParam?: any): Observable<any> { return; }

}