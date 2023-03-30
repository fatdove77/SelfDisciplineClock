import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const CountDown = () => {
  const [span, setSpan] = useState(Math.floor((Date.parse(new Date(new Date(new Date().getTime()).setHours(23,59,59,59)))-Date.now()) / 1000)-8*3600);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
 
    useEffect(() => { // 时间转换处理
        const internal = setInterval(() => {
            setHour(Math.floor(span / 3600));
            setMinute(Math.floor((span % 3600) / 60));
            setSecond(span % 60);
            setSpan(span - 1);
        }, 1000);
        return () => clearInterval(internal);
    });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        今日剩余{hour}小时{minute}分钟{second}秒
      </Text>
    </View>
  )
}

export default CountDown

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    // height:20
    // marginBottom:10
  },
  text:{
    lineHeight:20,
    color:'#0d0d0d'
  }

})