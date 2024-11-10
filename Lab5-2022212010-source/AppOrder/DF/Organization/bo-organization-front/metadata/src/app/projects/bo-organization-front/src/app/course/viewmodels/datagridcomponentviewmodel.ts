
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
        "resourceId": "courseId_f727a729_2l2j",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "courseId_f727a729_2l2j",
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
          "path": "courseId",
          "fullPath": "courseId",
          "isExpression": false,
          "value": "courseId"
        },
        "dataField": "courseId",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "课程编号",
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
        "resourceId": "course_name_0fe03859_zolf",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "course_name_0fe03859_zolf",
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
          "path": "course_name",
          "fullPath": "course_name",
          "isExpression": false,
          "value": "course_name"
        },
        "dataField": "course_name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "课程名称",
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
        "resourceId": "credits_94b90941_e0xq",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "credits_94b90941_e0xq",
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
          "path": "credits",
          "fullPath": "credits",
          "isExpression": false,
          "value": "credits"
        },
        "dataField": "credits",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "课程学分",
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
        "resourceId": "teacher_id_15e20fea_lxuh",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "teacher_id_15e20fea_lxuh",
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
        "caption": "授课教师",
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
        "resourceId": "max_students_3b170260_6s75",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "max_students_3b170260_6s75",
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
          "path": "max_students",
          "fullPath": "max_students",
          "isExpression": false,
          "value": "max_students"
        },
        "dataField": "max_students",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "最大选课人数",
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
        "resourceId": "semester_72076de8_1eqr",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "semester_72076de8_1eqr",
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
          "path": "semester",
          "fullPath": "semester",
          "isExpression": false,
          "value": "semester"
        },
        "dataField": "semester",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "课程学期",
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
        "resourceId": "schedule_58813dc6_8qob",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "schedule_58813dc6_8qob",
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
          "path": "schedule",
          "fullPath": "schedule",
          "isExpression": false,
          "value": "schedule"
        },
        "dataField": "schedule",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "课程安排",
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
        "resourceId": "state_4663043d_cg5t",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "state_4663043d_cg5t",
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
        "caption": "课程状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "disabled": false,
            "name": "进行中",
            "value": "jxz"
          },
          {
            "disabled": false,
            "name": "已结束",
            "value": "yjs"
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
        name: 'datagridEdit1',
        params: {
            url: 'f565dcb3-5e0a-4719-8015-b01cfb8eb7a4',
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