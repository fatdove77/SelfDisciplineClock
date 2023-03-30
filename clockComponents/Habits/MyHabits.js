import { SafeAreaView, StyleSheet, Text, View,TouchableWithoutFeedback,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch, } from 'react-redux'
import { addHabits } from '../../store/features/habitsSlice'
const AddHabits = ({navigation}) => {
  // const [habit,setHabit]=useState(
  //     {
  //       habitName:undefined,
  //       habitIcon: '',
  //       habitEncourage:''
  //     }
  // ) 
  const {arr} = useSelector((store)=>store.habits);
  useEffect(()=>{console.log(arr)},[arr]);
  //展示习惯列表
  function ShowHabitsList (){
    return (
      arr.map((item,index)=>{
        console.log(item);
        return (
          <View key={index}>
            <View style = {[styles.habitItem,{backgroundColor:arr[index].color}]}>
              <Image source = {item.habitIcon} style = {{height:50,width:50}}></Image>
              <Text style = {{marginLeft:10,fontSize:16,fontWeight:'600',color:'black'}}>{item.habitName}</Text>
              <View style = {{display:'flex',alignItems: 'center',position:'absolute',right:20}}>
                <Text style = {{fontSize:16,color:'black'}}>{item.keepDays}d</Text>
                <Text style = {{fontSize:16,color:'black'}}>坚持天数</Text>
              </View>
            </View>
            
          </View>
        )
      })
    )
  }
  function IsShow(){
    if(arr.length==0){
      return (
        <View>
          {/* <Text>1</Text> */}
        </View>
      )
    }
    return (<ShowHabitsList></ShowHabitsList>)

  }

  return (
    <SafeAreaView style = {{height:'100%',backgroundColor: '#ffffff'}}>
      <View style = {styles.habits}>
        <IsShow></IsShow>
        <TouchableWithoutFeedback
        onPress = {()=>{navigation.navigate('添加习惯')}}>
          <View style = {styles.empty}>
            <Text>+ 添加一个自定义习惯</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}

export default AddHabits

const styles = StyleSheet.create({
  habits:{
    padding:10
  },
  empty:{
    backgroundColor:'#f5f6f8',
    height:60,
    borderRadius:10,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  habitItem:{
    display: 'flex',
    alignItems: 'center',
    flexDirection:'row',
    borderRadius:10,
    marginBottom:10,
    padding:10
  }
})