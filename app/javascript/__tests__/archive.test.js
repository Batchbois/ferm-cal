import React from 'react';
import ReactDOM from 'react-dom';
import Archive from '../components/pages/archive';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders archive (completed batches) list', () => {
    const batches = [ "one", "two", "three"]
    const wrapper = shallow(<Archive batches={batches}/>)
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('li')).toBeDefined();
})


it('renders a batch', () => {
    const batches = [ "one", "two", "three"]
    // Check if an element in the Component exists
    const wrapper = shallow(<Archive batches={batches}/>)
    expect(wrapper.contains(<li key="one" className="list-group-item">one</li>)).toBeDefined()
})
