import React from 'react';
import ReactDOM from 'react-dom';
import BatchShow from '../components/pages/batchshow';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {withRouter} from "./helpers.js"

Enzyme.configure({ adapter: new Adapter() })
//this is copied and needs to be updated
it('BatchShow renders without crashing', () => {
    const wrapper = shallow(
  <Details
    required={true}
    match={{params: {id: 1}, isExact: true, path: "", url: ""}}
  />
);
expect(wrapper.containsMatchingElement(<h2>Details for 1</h2>)).toBeTruthy();



// it('BatchShow renders without crashing', () => {
//     let props = {
//         match: {
//             params: {
//                 id: '1',
//                 name: "Pickle", ferment: "pickle", start_date: 101010
//             }
//         },
//         batch: batch
//     }
//   withRouter(<BatchShow {...props}/>)
// })
//
// it('renders archive (completed batches) list', () => {
//     const batches = [ "one", "two", "three"]
//     const wrapper = shallow(<BatchShow batches={batches}/>)
//     expect(wrapper.find('li')).toHaveLength(3);
//     expect(wrapper.find('li')).toBeDefined();
// })
//
//
// it('renders a batch', () => {
//     const batches = [ "one", "two", "three"]
//     // Check if an element in the Component exists
//     const wrapper = shallow(<BatchShow batches={batches}/>)
//     expect(wrapper.contains(<li key="one" className="list-group-item">one</li>)).toBeDefined()
// })
