import expect from 'expect';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { createMockStore } from 'redux-test-utils';
import {CheckListManager} from './CheckListManager';

configure({ adapter: new Adapter() });

const mockChecklist = [{
    id: 1,
    title: 'Title 1',
    items: [{
        id: '1',
        name: 'test',
        label: 'Test',
        checked: true
    },
        {
            id: '2',
            name: 'test2',
            label: 'Test2',
            checked: false
        },
        {
            id: '3',
            name: 'test3',
            label: 'Test3',
            checked: true
        }]
}];

const shallowWithStore = (component, store) => {
    const context = {
        store
    };
    return shallow(component, { context });
};

function setupComponent() {
    const state = {checklists: mockChecklist};
    const store = createMockStore(state);

    return shallowWithStore(<CheckListManager />, store);
}

describe('CheckListManager tests', () => {
    it('should render an CheckListManager with a default initial state', () => {
        const component = setupComponent();

        console.log('component : ###', component.debug());
        console.log('STATE : ###', component.state());
        //expect(component.find('ListForm').length).toBe(1);
        expect(component.state().checklists).toEqual(mockChecklist);
        
    });
});