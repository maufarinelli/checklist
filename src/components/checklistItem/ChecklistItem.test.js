import expect from 'expect';
import React from 'react';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ChecklistItem from './ChecklistItem';

configure({ adapter: new Adapter() });

function setupComponent() {
	const props = {
		id: '',
		name: '',
		label: '',
		checked: false,
		onCheckboxChange: function() {},
		onDelete: function() {}
	};

	return shallow(<ChecklistItem {...props} />);
}

describe('Checklist tests', () => {
	let component;

	beforeEach(function() {
		component = setupComponent();
	});

	it('should render an ChecklistItem text with a default initial state', () => {
		expect(component.find('input').prop('type')).toEqual('checkbox');
		expect(component.find('input').prop('name')).toEqual('');
		expect(component.find('input').prop('id')).toEqual('');
		expect(component.find('input').prop('checked')).toBeFalsy();

		expect(component.find('label').text()).toEqual('');

		expect(component.find('button').prop('data-id')).toEqual('');

		expect(component.state().checked).toBeFalsy();
	});

	afterEach(function() {
		component = null;
	});
});