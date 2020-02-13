import React from 'react';
import ReactDOM from 'react-dom';
import NotSignedInLanding from '../components/pages/landingpage';

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<NotSignedInLanding />, div);
});
