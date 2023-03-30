import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import CountDown from './CountDown'
import CountDownDay  from './CountDownDay'
import EmptyDay from './EmptyDay'
import {createStackNavigator} from '@react-navigation/stack';
import AddDayPage from './AddDayPage'
import AddDayPageInput from './AddDayPageInput'
import Ionicons from 'react-native-vector-icons/Ionicons';
//引入reducers中的相应方法
import { useSelector,useDispatch, } from 'react-redux'
import { isShow } from '../../store/features/isShowDaySlice'
import { addDays } from '../../store/features/daysSlice'
import ActionList from './ActionList'
import HabitsBox from './HabitsBox'
import MyHabits from './MyHabits'
import AddHabitPage from './AddHabitPage'
import ShowHabits from './ShowHabits'
const Stack = createStackNavigator();
const HomePage = ({navigation}) => {
 //用isShowDay控制是轮播还是空状态
  const {flag} = useSelector((store)=>store.isShowDay)
  let {arr} = useSelector((store)=>store.days)
  console.log(typeof arr);
  //通过useDispatch 派发事件
  const dispatch = useDispatch();
  useEffect(()=>{console.log("flag")},[flag])
  


  //进入添加日期的界面
  const addSwiperDays = ()=>{
    console.log('s')
    navigation.navigate('倒数日')
   
  }

  //进入我的习惯界面
  
  return (
    <View  style = {{height:'100%',backgroundColor:'#ffffff'}}>
      {/* <Text>{flag}</Text> */}
      <CountDown></CountDown>
      {flag ?<EmptyDay addSwiperDays = {addSwiperDays} />:<CountDownDay addSwiperDays= {addSwiperDays}/>}
      <HabitsBox></HabitsBox>  
      <ShowHabits></ShowHabits>  
    </View>
    
  )
}

function NavigationComponent({navigation}) {
  const jumpToMyHabits = (name)=>{
    navigation.navigate(name)
  }
  return (
      <Stack.Navigator initialRouteName="今日习惯">
        <Stack.Screen name="今日习惯" component={HomePage} 
        options = {{
          headerStyle:{backgroundColor: '#ffffff'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
            headerRight:()=>{return (
              <View style = {{display: 'flex',alignItems: 'center',justifyContent:'center'}}>
                <ActionList navigation = {navigation} jumpToMyHabits = {jumpToMyHabits}></ActionList>
                {/* <Ionicons onPress={()=>{navigation.navigate('倒数日')}} name="ellipsis-horizontal-outline" style = {{position: 'absolute',right:20,fontSize:30}}/> */}
              </View>
            
            )},
        }} />
        <Stack.Screen name="倒数日" component={AddDayPage} 
        options = {{
          headerStyle:{backgroundColor: '#ffffff'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
        }}/>
        <Stack.Screen name="添加倒数日" component={AddDayPageInput} 
        options = {{
          headerStyle:{backgroundColor: '#ffffff'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
        }}/>
        <Stack.Screen name="我的习惯" component={MyHabits} 
        options = {{
          headerStyle:{backgroundColor: '#ffffff'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
        }}/>
        <Stack.Screen name="添加习惯" component={AddHabitPage} 
        options = {{
          headerStyle:{backgroundColor: '#ffffff'},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
        }}/>
      </Stack.Navigator>
  );
}


export default NavigationComponent

const styles = StyleSheet.create({})  