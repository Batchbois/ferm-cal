import React from 'react';
import ReactDOM from 'react-dom';
import BatchShow from '../components/pages/batchshow';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { getBatches, deleteBatch, updateBatch } from '../components/apiCalls.js'
// import {withRouter} from "./helpers.js"
jest.mock('../components/apiCalls.js')

Enzyme.configure({ adapter: new Adapter() })

describe('batchShow', () => {
  let mockBatch = {
    id: 1,
    user_id: 2,
    name: "Ham",
    start_date: "literally right now"
  }
  let mockfx = jest
    .fn();
  let findId = mockfx(1)
//
it("should call mock function (mockfn)", () => {
    let mockfx = jest.fn( );
    let findId = mockfx(1)
})
expect(findId).toBeUndefined()
// expect(findId).toHaveBeenCalled()
})

  // beforeEach(() => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(mockBatch)
  //     });
  //   });
  // });

// it('BatchShow renders without crashing', () => {
//     const wrapper = shallow(
//   <BatchShow
//     match={{params: {id: 1}, isExact: true, path: "", url: ""}}
//   />
// );
//
// expect(getBatches).toHaveBeenCalledWith(mockBatch)
// expect(wrapper.containsMatchingElement(<h2>Details for 1</h2>)).mockfx.mock.toBeTruthy();
// })
// })
//     describe('BatchShow', () => {
//     beforeEach(() => {
//         // getBatches.mockImplementation(() => {
//         //     return Promise.resolve([{id:1, ferment: 'Test', description: 'Back of Test', start_date: '101010', user_id: 1}])
//         // })
//         const wrapper = shallow(<BatchShow/>)
//         const mockBatch = {name: "roger", start_date: '101010'}
//         const expected = [{name: "roger", start_date: '101010'}]
//
//     })
//     it('should retrieve a list of my flashcards after mounting', () => {
//         shallow(<BatchShow />)
//         expect(wrapper).toHaveBeenCalled()
//         // expect(wrapper.contains(<li key="one" className="list-group-item">one</li>)).toBeDefined()
//     })
// })
    //when the addFlashcard method has been added to FlashcardMangage
//     it('should update state with a new flashcard when addFlashcard is called', async () => {
//         postFlashcards.mockImplementation(() => {
//             return Promise.resolve(
//                 {id: 2, front: 'Test', back: 'Back of Test', source: 'Source of Test', subject: 'My List', user_id: 1}
//             )
//         })
//         const wrapper = shallow(<FlashcardManage />)
//         const mockFlashcard = {id: 2, front: 'Test', back: 'Back of Test', source: 'Source of Test', subject: 'My List', user_id: 1}
//         const expected = [{id: 1, front: 'Test', back: 'Back of Test', source: 'Source of Test', subject: 'My List', user_id: 1}, mockFlashcard]
//
//
//         await wrapper.instance().postFlashcard(mockFlashcard)
//
//         expect(postFlashcards).toHaveBeenCalledWith(mockFlashcard)
//         expect(wrapper.state('My List')).toEqual(expected)
//     })
// })
//

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
