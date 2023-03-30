import React,{useState,useEffect} from 'react'
import { View, Text, Platform } from 'react-native'
import { Provider, ActionSheet, Button } from '@ant-design/react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
const  ActionList =  (props)=> {
  const [clicked,setClicked] = useState('none');
  const [text,setText] = useState('');
  useEffect(()=>{
    if(clicked=='我的习惯'){
      console.log(props)
      // navigation.navigate("我的习惯")
      // props.jumpToMyHabits();
      // props.navigation.navigate('今日习惯')
    }
  },[clicked])
  const showActionSheet = () => {
    const BUTTONS = [
      '我的习惯',
      '我的一天',
      '自习室',
      '学霸模式',
    ]
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
      },
      (buttonIndex) => {
        setClicked(BUTTONS[buttonIndex])
        if(BUTTONS[buttonIndex]!=undefined)
          props.jumpToMyHabits(BUTTONS[buttonIndex])
      },
    )
  }
    return (
        <View >
          <View style={[{ display:'flex',alignItems: 'center',justifyContent: 'center'}]}>
            <Ionicons onPress={showActionSheet} name="ellipsis-horizontal-outline" style = {{color:'black',position: 'absolute',right:20,fontSize:30}}/>
          </View>
        </View>
    )
}
export default ActionList;
