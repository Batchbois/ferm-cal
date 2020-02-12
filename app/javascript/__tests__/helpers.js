import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router
} from 'react-router-dom'

export function withRouter(component) {
    const div = document.createElement('div');
    return ReactDOM.render(<Router>{component}</Router>, div);
}
