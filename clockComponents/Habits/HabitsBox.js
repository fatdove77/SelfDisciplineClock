import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HabitsBox = () => {
  return (
    <View style = {{display:'flex',alignItems: 'center',justifyContent:'center',borderRadius:15}}>
      <View style = {{marginTop:10,backgroundColor:'#f7f9f8',borderRadius:10,display:'flex',justifyContent:'center',alignItems: 'center',width:180,height:20}}>
        <Text style = {{color:'#0d0d0d'}}>今日无事，无忧无虑。</Text>
      </View>
    </View>
  )
}

export default HabitsBox

const styles = StyleSheet.create({})