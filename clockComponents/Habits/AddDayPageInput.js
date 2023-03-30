/* tslint:disable:no-console */
import React,{useEffect, useState} from 'react'
import { TextInput,View,Text,Button,StyleSheet, ScrollView, FlatList } from 'react-native'
import { DatePicker, List, Provider } from '@ant-design/react-native'
import { useSelector,useDispatch } from 'react-redux'
import { isShow } from '../../store/features/isShowDaySlice'
import { addDays } from '../../store/features/daysSlice'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

 const AddDayPageInput = ({navigation})=>{
  const [value,setValue] = useState(undefined)
  const now = new Date().toLocaleDateString();
  const [dayMessage,setDayMessage] = useState(
    {
      goalDay:undefined,
      dayName:'生日',
      restDays:0,
      color:'pink',
    }
  )
  const {flag} = useSelector((store)=>store.isShowDay)
  const {arr} = useSelector((store)=>store.days)
  console.log(arr);
  //通过useDispatch 派发事件
  const dispatch = useDispatch();
  useEffect(()=>{console.log(dayMessage)},[flag,arr,dayMessage])
  const onChange = (value)=> {
    setDayMessage((prev)=>{return {...prev,goalDay:value}});
  }
  const changeDayName = (text)=>{
    setDayMessage((prev)=>{return {...prev,dayName:text}});
  }

  const submitDays = ()=>{
    let day = JSON.parse(JSON.stringify(dayMessage));
    console.log(dayMessage.goalDay);
    let difftime = dayMessage.goalDay-new Date();
    console.log(difftime);
    day.restDays = parseInt(difftime/1000/24/3600)+1;
    day.goalDay = day.goalDay.slice(0,10);
    dispatch(addDays(day));
    dispatch(isShow());
    navigation.navigate('倒数日')
  }


  const changeColor = (color)=>{
    console.log(color);
    setDayMessage((prev)=>{return {...prev,color:color}});
  }


  //修改颜色函数
  
  const colorArray = [
    {color:'#FFA07A'},
    {color:'#FA8072'},
    {color:'#E9967A'},
    {color:'#F08080'},
    {color:'#CD5C5C'},
    {color:'#DC143C'},
    {color:'#B22222'},
    {color:'#FF0000'},
    {color:'#8B0000'},
    {color:'#FF7F50'},
    {color:'#FF6347'},
    {color:'#FF4500'},
    {color:'#FFD700'},
    {color:'#FFA500'},
    {color:'#FF8C00'},
    {color:'#FF8C00'},
    {color:'#FFFACD'},
    {color:'#FFFACD'},
    {color:'#FFEFD5'},
    {color:'#FFE4B5'},
    {color:'#FFDAB9'},
    {color:'#EEE8AA'},
    {color:'#F0E68C'},
    {color:'#BDB76B'},
    {color:'#FFFF00'},
    {color:'#7CFC00'},
    {color:'#7FFF00'},
    {color:'#32CD32'},
    {color:'#00FF00'},
    {color:'#228B22'},
    {color:'#008000'},
    {color:'#006400'},
    {color:'#ADFF2F'},
    {color:'#9ACD32'},
    {color:'#00FF7F'},
    {color:'#00FA9A'},
    {color:'#90EE90'},
    {color:'#98FB98'},
    {color:'#8FBC8F'},
    {color:'#3CB371'},
    {color:'#E0FFFF'},
    {color:'#00FFFF'},
    {color:'#00FFFF'},
    {color:'#7FFFD4'},
    {color:'#66CDAA'},
    {color:'#AFEEEE'},
    {color:'#40E0D0'},
    {color:'#48D1CC'},
    {color:'#00CED1'},
    {color:'#20B2AA'},
    {color:'#5F9EA0'},
    {color:'#008B8B'},
    {color:'#008080'},
    {color:'#B0E0E6'},
    {color:'#ADD8E6'},
    {color:'#87CEFA'},
    {color:'#87CEEB'},
    {color:'#00BFFF'},
    {color:'#B0C4DE'},
    {color:'#1E90FF'},
    {color:'#6495ED'},
    {color:'#4682B4'},
    {color:'#4169E1'},
    {color:'#0000FF'},
    {color:'#0000CD'},
    {color:'#E6E6FA'},
    {color:'#D8BFD8'},
    {color:'#DDA0DD'},
    {color:'#EE82EE'},
    {color:'#DA70D6'},
    {color:'#FF00FF'},
    {color:'#FF00FF'},
    {color:'#BA55D3'},
    {color:'#9370DB'},
    {color:'#8A2BE2'},
    {color:'#9400D3'},
    {color:'#90EE90'},
    {color:'#98FB98'},
    {color:'#8FBC8F'},
    {color:'#3CB371'},
    ]
  const Item = (title)=>{
    console.log(title)
    const [cc,setCc] = useState(title.title);
    const changeColor = ()=>{
      console.log(cc);
      title.changeColor(cc)
    }
    return(
      <TouchableWithoutFeedback  onPress = {()=>{changeColor()}}>
        <View style = {[styles.colorItem,{backgroundColor:title.title}]}></View>
      </TouchableWithoutFeedback>
      
    )
     
  }


    return (
      <Provider>
        <View style = {{height: '100%',backgroundColor:'#ffffff',padding:10,}}>
          <View >
            <Text style = {{marginTop:10}}>事件</Text>
            <TextInput  
            style={{backgroundColor:'#eeeeee',borderRadius:10,marginTop:10,padding:12,fontSize:17,height:50}}
            // placeholder="(例如： 考研、爱人生日)"
            value = {dayMessage.dayName}
            onChangeText={text => changeDayName(text)} 
            ></TextInput>
          </View>
          <View >
            <Text style = {{marginTop:10}}>日期选择</Text>
            <List style = {{marginTop:10}}>
              <DatePicker
                value={dayMessage.goalDay}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date()}
                maxDate={new Date(2026, 11, 3)}
                onChange={onChange}
                format="YYYY-MM-DD">
                <List.Item style = {{backgroundColor : "#eeeeee",borderRadius:10}} >日期</List.Item>
              </DatePicker>
            </List>
          </View>
          <View >
            <View style = {{display:'flex',flexDirection: 'row',alignItems:'center'}}>
              <Text style = {{marginTop:10}}>背景颜色</Text>
              <View style = {[styles.colorChoose,{backgroundColor:dayMessage.color}]}></View>
            </View>
            <FlatList
            style = {{marginVertical:10,backgroundColor:'#eeeeee',height:30,display:'flex',borderRadius:10}}
            horizontal = {true}
            data = {colorArray}
            renderItem={({item,index}) => <Item changeColor = {changeColor} title = {item.color} index = {index}/>}
            >
            </FlatList>
          </View>
          <View>
            <Button 
            color = "#ffd700"
            title='保存' onPress={()=>submitDays()}></Button>
          </View>
          
        </View>
      </Provider>
    )
  }

export default AddDayPageInput

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