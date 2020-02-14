// import React from 'react';
// import ReactDOM from 'react-dom';
// import MainApp from '../components/MainApp.js';
//
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MainApp />, div);
// });
import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainApp from "../components/MainApp";
import { getBatches } from '../components/apiCalls'

// jest.mock('../components/apiCalls.js')

Enzyme.configure({ adapter: new Adapter() });

//bringing our fetches into our component and testing
// component did mount & get batches so we also need to mock the api call funx
//
// describe('MainApp', () => {
//   beforeEach(() => {
//     getBatches.mockImplementation(() => {
//       return Promise.resolve([{
//           id: 1,
//           name: "Kimmychi",
//           start_date: "",
//           description: "yumyy yyummy woops i spelled that wrong",
//           tasks: ["ya", "ya", "ya"] }])
//     });
//   });
// });
// it('should retrieve batches after mounting', () => {
//   shallow(<MainApp/>);
//   expect(getBatches).toHaveBeenCalled();
// });
