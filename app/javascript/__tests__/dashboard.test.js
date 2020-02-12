import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../components/pages/dashboard';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders task list and batch list', () => {
    const tasks = [ "one", "two", "three"]
    const batches = [ "one", "two", "three"]
    const wrapper = shallow(<Dashboard tasks={tasks} batches={batches}/>)
    expect(wrapper.find('li')).toHaveLength(6);
    expect(wrapper.find('li')).toBeDefined();
})

it('renders task list and batch independently ', () => {
    const tasks = [ "one", "two", "three"]
    const batches = [ "one", "two", "three"]
    const wrapper = shallow(<Dashboard tasks={tasks} batches={batches}/>)
    expect(wrapper.find('#task-items')).toHaveLength(3);
    expect(wrapper.find('#batch-items')).toHaveLength(3);
})

it('renders a list item for each task and batch', () => {
    const tasks = [ "one", "two", "three"]
    const batches = [ "one", "two", "three"]
    // Check if an element in the Component exists
    const wrapper = shallow(<Dashboard tasks={tasks} batches={batches}/>)
    expect(wrapper.contains(<li key="one" className="list-group-item">one</li>)).toBeDefined()
})

// it('renders correct text in item', () => {
//     const tasks = [ "one", "two", "three"]
//     const batches = [ "one", "two", "three"]
//     const wrapper = shallow(<Dashboard tasks={tasks} batches={batches}/>);
//
//    expect(wrapper.find('.list-group list-group-flush').get(0).props).toEqual('one');
//  });

//
// it('renders batch list', () => {
//     const batches = [ "one", "two", "three"]
//     const wrapper = shallow(<Dashboard batches={batches}/>)
//
//     expect(wrapper.find('.batches-list')).toBeDefined();
//     expect(wrapper.find('.batches')).toHaveLength(batches.length)
// })
//

 // it('renders without crashing', () => {
 //   const mockBatch = {id: 2, name: "Pickle", ferment: "pickle", start_date: 101010}
 //   const mockTask =  { due: 101010, description: "pickle", title: "woof"}
 //   const div = document.createElement('div');
 //   ReactDOM.render(<Dashboard />, div)
 //   // withRouter(<Dashboard/>);
 //   // Dashboard.defaultProps = { batches: [], tasks:[] };
 // });



 // it('renders a welcome', ()=>{
 //     const app = mount(<Dashboard />)
 //     expect(app.find('p').text()).toEqual('Welcome to LEARN')
 // })
