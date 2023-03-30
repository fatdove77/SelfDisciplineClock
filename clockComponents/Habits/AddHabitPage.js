/* tslint:disable:no-console */
import React,{useEffect, useState} from 'react'
import { TextInput,View,Text,Button,StyleSheet, ScrollView, FlatList, Image } from 'react-native'
import { DatePicker, List, Provider,TextareaItem } from '@ant-design/react-native'
import { useSelector,useDispatch } from 'react-redux'
import { addHabits } from '../../store/features/habitsSlice'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddHabitPage = ({navigation}) => {
  const habitsIcon = [
    {path:require('../../assets/h1.png')},
    {path:require('../../assets/h2.png')},
    {path:require('../../assets/h3.png')},
    {path:require('../../assets/h4.png')},
    {path:require('../../assets/h5.png')},
    {path:require('../../assets/h6.png')},
    {path:require('../../assets/h7.png')},
    {path:require('../../assets/h8.png')},
    {path:require('../../assets/h9.png')},
    {path:require('../../assets/h10.png')},
    {path:require('../../assets/h11.png')},
    {path:require('../../assets/h12.png')},
  ];
  const colorArray = [
    {color:'#FFC0CB'},
    {color:'#DA70D6'},
    {color:'#EE82EE'},
    {color:'#800080'},
    {color:'#FFC0CB'},
    {color:'#C0C0C0'},
    {color:'#FF0000'},
    {color:'#F08080'},
    {color:'#E9967A'},
    {color:'#F4A460'},
    {color:'#FFDEAD'},
    {color:'#FFDEAD'},
    {color:'#FFFF00'},
    {color:'#FFD700'},
    {color:'#F5F5DC'},
    {color:'#00FF00'},
    {color:'#2E8B57'},
    {color:'#00FA9A'},
    {color:'#00CED1'},
    {color:'#5F9EA0'},
    ]
  const [habit,setHabit]=useState(
    {
      habitName:undefined,
      habitIcon: undefined,
      habitEncourage:'',
      color:'pink',
      keepDays:0,
      isShow:true
    }
) 
  const {arr} = useSelector((store)=>store.habits);
  const dispatch = useDispatch();
//控制图标数组的角标
const [index,setIndex] = useState(0);
useEffect(()=>{},[habit,index,arr]);
const changeHabitName = (text)=>{
  setHabit((prev)=>{return{...prev,habitName:text}});
}

const changeColor = (color)=>{
  setHabit((prev)=>{return {...prev,color:color}});
}
const HabitsItem = (title)=>{
  return (
    <TouchableWithoutFeedback onPress = {()=>{setIndex(title.index)}}>
      <Image  style = {{marginHorizontal:10,marginTop:5, width:50,height:50} }source = {title.path}></Image>
    </TouchableWithoutFeedback>
     )
}

//redux添加习惯
const submitHabit = ()=>{
  let h = habit;
  h.habitIcon = habitsIcon[index].path;
  dispatch(addHabits(habit));
  navigation.navigate("我的习惯")
}


const Item = (title)=>{
  const [cc,setCc] = useState(title.title);
  const changeColor = ()=>{
    title.changeColor(cc)
  }
  return(
    <TouchableWithoutFeedback  onPress = {()=>{changeColor()}}>
      <View style = {[styles.colorItem,{backgroundColor:title.title}]}></View>
    </TouchableWithoutFeedback>
    
  )
}

  return (
    <View style = {{height: '100%',backgroundColor:'#ffffff',padding:10,}}>
      <View style = {{display:'flex',alignItems:'center',justifyContent:'center'}} >
        <View style = {{width:52,height:52,position:'absolute',bottom:49,left:160.5,borderWidth:10,borderColor:habit.color,borderRadius:100}}>
        </View>
        <Image  style = {{width:50,height:50}}source = {habitsIcon[index].path}></Image>
          
          <TextInput  
          style={{backgroundColor:'#eeeeee',width:150,height:40,borderRadius:10,marginTop:10,fontSize:16,textAlign:'center'}}
          // placeholder="(例如： 考研、爱人生日)"
          value = {habit.habitName}
          placeholder = '输入习惯名称'
          onChangeText={text => changeHabitName(text)} 
          ></TextInput>
      </View>
      <View >
        <View style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <Ionicons name="book" style = {{color:'pink',fontSize:15,marginRight:5}}></Ionicons>
          <Text>选择习惯图标</Text>
        </View>
        <FlatList
        style = {{marginVertical:10,backgroundColor:'#eeeeee',height:60,display:'flex',borderRadius:10}}
        horizontal = {true}
        data = {habitsIcon}
        renderItem={({item,index}) => <HabitsItem  path = {item.path} index = {index}/>}
        ></FlatList>
        
      </View>
      <View >
        <View style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Ionicons name="book" style = {{color:'pink',fontSize:15,marginRight:5}}></Ionicons>
          <Text>选择一个背景颜色</Text>
          <View style = {[styles.colorChoose,{backgroundColor:habit.color}]}></View>
        </View>
        <FlatList
            style = {{marginVertical:10,backgroundColor:'#eeeeee',height:30,display:'flex',borderRadius:10}}
            horizontal = {true}
            data = {colorArray}
            renderItem={({item,index}) => <Item changeColor = {changeColor} title = {item.color} index = {index}/>}
            >
          </FlatList>
      </View>
      <View >
        <View style = {{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <Ionicons name="book" style = {{color:'pink',fontSize:15,marginRight:5}}></Ionicons>
          <Text>写一句激励自己的话</Text>
        </View>
        <TextareaItem 
        style={{marginVertical:10,backgroundColor:'#eeeeee',display:'flex',borderRadius:10}}
        rows={4} 
        // value
        placeholder="要向一颗微不足道的小星学习，可以微弱，但要有光"  />
      </View>
      <View>
       <Button 
       title='提交' 
       onPress={()=>submitHabit()}
       color = 'pink'
       ></Button>
      </View>
    
  </View>
  )
}

export default AddHabitPage

const styles = StyleSheet.create({
  colorChoose:{
    marginTop:10,
    marginLeft:5,
    width:20,
    height:20,
    borderRadius:100
  },
  colorItem:{
    width:20,
    height:20,
    borderRadius:100,
    backgroundColor:'green',
    marginTop:5,
    marginHorizontal:5
  }
})