import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { Button, Carousel } from '@ant-design/react-native'
import { addDays } from '../../store/features/daysSlice'
import { useSelector,useDispatch } from 'react-redux'
function CountDownDay  (props) {
  let carousel = null|| Carousel
  const  [selectedIndex,setSelectedIndex] = useState(2);
  const  [autoplay,setAutoplay] = useState(true);
  const [dayMessage,setDayMessage] = useState([{}])
  const {arr} = useSelector((store)=>store.days)
  useEffect(()=>{setDayMessage(arr)},[arr])
   
  const onHorizontalSelectedIndexChange = (index) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index)
    setSelectedIndex(index);
  }
    return (
      <View>
        <TouchableOpacity
        onPress = {()=>{props.addSwiperDays()}}>
        <View style = {{paddingHorizontal:10}} >
          <Carousel
            style={styles.wrapper}
            selectedIndex={selectedIndex}
            autoplay
            infinite
            afterChange={onHorizontalSelectedIndexChange}
            ref={(ref) => (carousel = ref)}>
           {
            dayMessage.map((item,index)=>{
              return (
                <View key = {index} style={[styles.containerHorizontal,{backgroundColor:item.color,borderRadius:10,opacity:0.8}]} onPress = {()=>{props.addSwiperDays()}}  >
                  <Text style = {styles.restDays}>{item.restDays}  Days</Text>
                  <Text style = {styles.dayName}>{item.dayName}</Text>
                  <Text style = {styles.goalDay} >{item.goalDay}</Text>
                  <Image style = {styles.rainBow} source={require('../../assets/彩虹.png')}/>
                </View>
              )
            })
           }
          </Carousel>
        </View>
        </TouchableOpacity>
      </View>

      
    )
  }

export default CountDownDay;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  empty:{
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
    borderRadius:20
    
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    borderRadius:20,
    // opacity:0.6
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
  restDays:{
    fontSize:22,
    color:'black',
    fontWeight:'600',
    fontFamily:'sans-serif',
    position:'relative',
    right:100,
    bottom:10

  },
  dayName:{
    fontSize:18,
    color:'black',
    fontFamily:'Georgia',
    position:'relative',
    right:130,
    fontWeight:'800'
  },
  goalDay:{
    fontSize:15,
    fontFamily:'Georgia',
    position:'relative',
    right:113
  },
  rainBow:{
    position:'absolute',
    top:20,
    right:10
  }
})
