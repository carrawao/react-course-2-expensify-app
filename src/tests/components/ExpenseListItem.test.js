import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import ShallowRenderer from 'react-test-renderer/shallow';

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {... expenses[0]} />);

    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<ExpenseListItem {...expenses[0]} />);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});