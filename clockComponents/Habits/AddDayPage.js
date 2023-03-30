import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

//引入reducers中的相应方法
import { useSelector,useDispatch } from 'react-redux'
import { isShow } from '../../store/features/isShowDaySlice'
const AddDayPage = ({navigation}) => {
  const {flag} = useSelector((store)=>store.isShowDay)
  const {arr} = useSelector((store)=>store.days);
  //通过useDispatch 派发事件
  console.log(typeof arr)
  const dispatch = useDispatch();
  useEffect(()=>{console.log(arr)},[flag,arr])
  //跳转到添加倒数日的界面
  const addPage = ()=>{
    navigation.navigate('添加倒数日')
  }



   

  return (
    <SafeAreaView style={styles.container}>
      <View >
        {
          arr.map((item,index)=>{
            return (
              <View key={index} style = {styles.dayItem}>
                <View style = {[styles.restDays,{backgroundColor:item.color}]}>
                  <Text style = {{fontSize:20,color:'#ffffff',fontWeight:'600'}}>{item.restDays}</Text>
                </View>
                <Text style = {{color:'#a7a8ac',marginLeft:10}}>{item.dayName}</Text>
              </View>
            )
          })
        }
      </View>
      <View style = {{position: "absolute",bottom:10,left:168}}>
        <Ionicons name="add-circle" style = {styles.addIcon} onPress = {()=>{addPage()}} />
      </View>
      
    </SafeAreaView>
    
  )
}

export default AddDayPage

const styles = StyleSheet.create({
  container:{
    height: '100%',
    // display:'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  addIcon:{
    fontSize:60,
  },
  dayItem:{
    marginLeft:10,
    height:60,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  },
  restDays:{
    width:40,
    backgroundColor:'pink',
    height:'100%',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    

  }
})