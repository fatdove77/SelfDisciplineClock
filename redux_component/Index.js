import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
import React,{useState} from 'react'

//引入相关hooks
import { useSelector,useDispatch } from 'react-redux'
//引入reducers中的相应方法
import { increment,decrement } from '../store/features/counterSlice'
import { getMovieData } from '../store/features/movieSlice'
const Index = ()=> {
  //通过useSelector直接拿到store中定义的value
  const {value} = useSelector((store)=>store.counter)
  const {list} = useSelector((store)=>store.movie)
  //通过useDispatch 派发事件
  const dispatch = useDispatch();
  const [amount,setAmount] = useState(1);
  return (
    <View>
      <Text>index</Text>
      <Text>{value}</Text>
      <TextInput value = {amount} onChangeText = {(text)=>setAmount(+text)}  />
      <Button title = "加" onPress={()=>{dispatch(increment({value:amount}))}}></Button>
      <Button title = "减" onPress={()=>{dispatch(decrement())}}></Button>
      <Button title = "获取数据" onPress={()=>{dispatch(getMovieData())}}></Button>
      <View>
        {
          list.map((item)=>{return <Text key = {item.tvId} >{item.name} </Text>})
        }
      </View>
    </View>
  )
}

export default Index;