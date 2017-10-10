import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';
import {TextInput} from './TextInput';
import * as checklistItemsActions from '../../../actions/checklistItemsActions';

function setupComponent() {
	let props = {
		actions: {
			createChecklistItem: sinon.spy()
		}
	}
	return shallow(<TextInput {...props} />);
}

describe('TextInput tests', () => {
	it('should render an input text with a default initial state', () => {
		const component = setupComponent();

		expect(component.find('input').type()).toEqual('input');
		expect(component.state().text).toEqual('');
	});

	it('should set text state to the typed value', () => {
		const component = setupComponent();
		component.find('input').simulate('change', { target: { value: 'A' }});

		expect(component.state().text).toEqual('A');

		component.find('input').simulate('change', { target: { value: 'ABC' }});
		expect(component.state().text).toEqual('ABC');
	});

	it('should create a checklist item when user click Enter', () => {
		const component = setupComponent();
		component.find('input').simulate('change', { target: { value: 'A' }});
		component.find('input').simulate('keyPress', { key: 'Enter', keyCode: 13, which: 13, preventDefault: () => {} });

		expect(component.unrendered.props.actions.createChecklistItem.withArgs('A').calledOnce).toEqual(true);
		expect(component.state().text).toEqual('');
	});
});