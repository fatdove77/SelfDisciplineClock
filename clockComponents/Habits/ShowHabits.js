import { Image, StyleSheet, Text, View,TouchableNativeFeedback } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector,useDispatch, } from 'react-redux'
import { addHabits,setHabitShow } from '../../store/features/habitsSlice'
import { Toast } from '@ant-design/react-native';

export default function ShowHabits() {
  const {arr}  = useSelector((store)=>store.habits);
  const dispatch = useDispatch();
  useEffect(()=>{},[arr]);
  const ShowHabits = ()=>{
    return (
      arr.map((item,index)=>{
        if(item.isShow==true){
          return (
            <TouchableNativeFeedback onPress = {()=>{dispatch(setHabitShow(index));Toast.info({
              content: '打卡成功',
            })}}>
              <View style = {styles.habitItem}>
                <Image source = {item.habitIcon}></Image>
                <Text>{item.habitName}</Text>
                <Text>累计：{item.keepDays}天</Text>
              </View>
            </TouchableNativeFeedback>
            
          )
        }
      })
    )
    
  }
  return (
    <View style = {styles.habitsBox}>
      <ShowHabits></ShowHabits>
    </View>
  )
}

const styles = StyleSheet.create({
  habitsBox:{
    display:'flex',
    flexDirection:'row',
    padding:20,
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  habitItem:{
    width:100,
    height:100,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginVertical:10,
  }
})