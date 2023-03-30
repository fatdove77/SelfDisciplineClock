import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const EmptyDay = (props) => {
  const addSwiperDays = ()=>{
    console.log("添加倒数日")
    props.addSwiperDays();
  }
  return (
    <View style={styles.container} >
      <View style ={ styles.empty}>
        <Ionicons name="add-circle-outline" style={styles.addIcon} onPress = {()=>addSwiperDays()} />
        <Text>添加倒数日</Text>
      </View>
    </View>
    
  )
}

export default EmptyDay

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  empty:{
    width: '95%',
    height:150,
    backgroundColor:'#ededed',
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  addIcon:{
    fontSize:80,
    color:'grey'
  }
})