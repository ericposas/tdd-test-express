import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'react-toastify/dist/ReactToastify.css'
import rootReducer from './reducers/rootReducer'
import App from './components/App'
import './index.scss'

const rootElement = document.getElementById('root')
const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
