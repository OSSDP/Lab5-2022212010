
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
        "resourceId": "student_id_187b1ada_5ngh",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "student_id_187b1ada_5ngh",
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
          "path": "student_id",
          "fullPath": "student_id",
          "isExpression": false,
          "value": "student_id"
        },
        "dataField": "student_id",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "学号",
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
        "resourceId": "name_cd4d8a2b_lj1y",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "name_cd4d8a2b_lj1y",
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
        "caption": "姓名",
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
        "resourceId": "gender_b09c1344_gzd2",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "gender_b09c1344_gzd2",
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
          "path": "gender",
          "fullPath": "gender",
          "isExpression": false,
          "value": "gender"
        },
        "dataField": "gender",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "性别",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "男",
            "value": "man"
          },
          {
            "disabled": false,
            "name": "女",
            "value": "woman"
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
        "resourceId": "password_72231dcb_iwrs",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "password_72231dcb_iwrs",
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
        "resourceId": "birth_99cae752_zwqe",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "birth_99cae752_zwqe",
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
          "path": "birth",
          "fullPath": "birth",
          "isExpression": false,
          "value": "birth"
        },
        "dataField": "birth",
        "dataType": "date",
        "multiLanguage": false,
        "caption": "生日",
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
          "type": "date",
          "dateFormat": "yyyy-MM-dd"
        }
      },
      {
        "type": "GridField",
        "resourceId": "major_615161ef_22fk",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "major_615161ef_22fk",
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
          "path": "major",
          "fullPath": "major",
          "isExpression": false,
          "value": "major"
        },
        "dataField": "major",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "专业名称",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "计算机",
            "value": "cs"
          },
          {
            "disabled": false,
            "name": "数学",
            "value": "math"
          },
          {
            "disabled": false,
            "name": "中文",
            "value": "Chinese"
          },
          {
            "disabled": false,
            "name": "法律",
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
        "resourceId": "phone_PhoneNumber_46c77ec9_ljvn",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "phone_PhoneNumber_46c77ec9_ljvn",
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
          "path": "phone_PhoneNumber",
          "fullPath": "phone.PhoneNumber",
          "isExpression": false,
          "value": "phone_PhoneNumber"
        },
        "dataField": "phone.phoneNumber",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "手机电话号码",
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
      },
      {
        "type": "GridField",
        "resourceId": "email_Email_503c6e67_8ros",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "email_Email_503c6e67_8ros",
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
          "fullPath": "Email.Email",
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
      },
      {
        "type": "GridField",
        "resourceId": "state_c7b052e8_jonh",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "state_c7b052e8_jonh",
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
          "path": "state",
          "fullPath": "State",
          "isExpression": false,
          "value": "state"
        },
        "dataField": "state",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "正常",
            "value": "zc"
          },
          {
            "disabled": false,
            "name": "禁用",
            "value": "jy"
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
        name: 'datagridRemove1',
        params: {
            id: '',
            refreshCommandName: '',
            refreshCommandFrameId: '',
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

    @NgCommand({
        name: 'datagridEdit1',
        params: {
            url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
            params: '',
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
        name: 'datagridRemove2',
        params: {
            id: '{DATA~/#{root-component}/id}',
            refreshCommandName: 'Load1',
            refreshCommandFrameId: '#{data-grid-component}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public datagridRemove2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridEdit2',
        params: {
            url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
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
    public datagridEdit2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridChangePage1',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: '#{root-component}'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public datagridChangePage1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridChangePage2',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: '#{root-component}'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public datagridChangePage2(commandParam?: any): Observable<any> { return; }

}