import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from './redux_component/Index'

//STORE 引用
import { Provider } from 'react-redux';
import store from './store/index'
import Home from './Home'
const App = ()=> {
  return (
      <Provider store={store} >
        <Home  />
        {/* <Index/> */}
      </Provider>
     
  )
}

export default App;