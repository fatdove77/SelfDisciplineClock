import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const CountDown = () => {
  const [span, setSpan] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
  const [start,setStart] = useState(false);
    useEffect(() => { // 时间转换处理
      console.log(start);
      if(start==true){
        const internal = setInterval(() => {
          setHour(Math.floor(span / 3600));
          setMinute(Math.floor((span % 3600) / 60));
          setSecond(span % 60);
          setSpan(span + 1);
      }, 1000);
      return () => clearInterval(internal);
      }
    });
    const addZero = (num)=>{
      if(num<10){
        return '0'+num;
      }
      else return num
    }

    const startClock = ()=>{
      setStart(!start);
      
    }
  return (
    <View style = {{height:'80%',display: 'flex', alignItems:'center',justifyContent:'space-around'}}>
      <View>
      <Ionicons name="alarm" style = {{fontSize:40,marginTop:20}} onPress ={()=>{console.log(1)}}></Ionicons>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          {addZero(hour)}小时{addZero(minute)}分钟{addZero(second)}秒
        </Text>
      </View>
      <View style = {{display:'flex',flexDirection:'row',alignItems:'space-around'}}>
        <View  style = {{marginRight:80,borderRadius:100}}>
        <Button  
          title = "添加习惯"
          color = 'pink'
          onPress = {()=>{startClock()}}
          ></Button>
        </View>
        
        <View >
          <Button  
            title = "开始计时"
            color = 'pink'
            onPress = {()=>{startClock()}}
            ></Button>
        </View>
      </View>
      
    </View>
    
    
  )
}

export default CountDown

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    width:350,
    height:350,
    backgroundColor:'ffffff',
    borderRadius:350,
    borderWidth:3,

  },
  text:{
    // height:'100%',
    height:40,
    color:'#0d0d0d',
    fontWeight:"bold",
    fontSize:30
  }

})