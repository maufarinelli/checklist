import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';
import {TextInput} from './TextInput';
import * as checklistItemsActions from '../../../actions/checklistItemsActions';

function setupComponent() {
	return shallow(<TextInput />);
}

describe('TextInput tests', () => {
	it('should render an input text with a default initial state', () => {
		const component = setupComponent();
		expect(component.state().text).toEqual('');
	});

	it('should set text state to the typed value', () => {
		const component = setupComponent();

		component.find('input').simulate('change', { target: { value: 'A' }});
		expect(component.state().text).toEqual('A');
	});

	it('should create a checklist item when user click Enter', () => {
		const component = setupComponent();

		component.find('input').simulate('change', { target: { value: 'A' }});
		component.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });

		console.log('component.props()', component.props());
		expect(component.unrendered.props.actions.createChecklistItem.calledOnce).toEqual(true);
	});
});