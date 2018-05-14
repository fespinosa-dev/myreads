import React from 'react'
import ReactDOM from 'react-dom'
import MyReadApp from './MyReadApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'



ReactDOM.render(<BrowserRouter><MyReadApp /></BrowserRouter>, document.getElementById('root'))
