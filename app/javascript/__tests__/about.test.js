import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from '../components/pages/aboutus';

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<AboutUs />, div);
});
