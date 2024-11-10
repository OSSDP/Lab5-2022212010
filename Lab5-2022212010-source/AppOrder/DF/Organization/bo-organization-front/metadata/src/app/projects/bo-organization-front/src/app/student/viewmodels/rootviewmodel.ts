
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            filter: '',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Search1',
        params: {
            filter: '',
            sort: '',
            pageSize: '',
            pageIndex: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' },
            pageSize: { type: 'int' },
            pageIndex: { type: 'int' }
        }
    })
    public Search1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'RemoveRows1',
        params: {
            ids: '{UISTATE~/#{data-grid-component}/ids}'
        },
        paramDescriptions: {
            ids: { type: 'decimal' }
        }
    })
    public RemoveRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            url: '',
            params: '{"action":"LoadAndAdd1"}'
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'View1',
        params: {
            url: '',
            params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
            idToView: '{DATA~/#{data-grid-component}/id}'
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' }
        }
    })
    public View1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            url: '',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
            idToEdit: '{DATA~/#{data-grid-component}/id}'
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToEdit: { type: 'string' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Remove1',
        params: {
            id: '{DATA~/#{data-grid-component}/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public Remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Filter1',
        params: {
            filter: '{UISTATE~/root-component/originalFilterConditionList}',
            sort: ''
        },
        paramDescriptions: {
            filter: { type: 'string' },
            sort: { type: 'string' }
        }
    })
    public Filter1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootAdd1',
        params: {
            url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
            params: '{"action":"LoadAndAdd1"}',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public rootAdd1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootEdit1',
        params: {
            url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/#{data-grid-component}/id}"}',
            idToEdit: '{DATA~/#{data-grid-component}/id}',
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
    public rootEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootView1',
        params: {
            url: 'fb6d45a4-f283-4a22-a0b9-708d6f8164d7',
            params: '{"action":"LoadAndView1", "id":"{DATA~/#{data-grid-component}/id}"}',
            idToView: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public rootView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootRemoveRows1',
        params: {
            ids: '{DATA~/#{root-component}/id}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            ids: { type: 'decimal' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public rootRemoveRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootRemove1',
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
    public rootRemove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootRemove2',
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
    public rootRemove2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootRemoveRows2',
        params: {
            ids: '{DATA~/#{root-component}/version}{DATA~/#{root-component}/student_id}{DATA~/#{root-component}/id}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            ids: { type: 'decimal' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public rootRemoveRows2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'rootRemove3',
        params: {
            id: '{DATA~/#{root-component}/id}',
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
    public rootRemove3(commandParam?: any): Observable<any> { return; }

}