import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/reducer'
const store = createStore(reducer)


export default store