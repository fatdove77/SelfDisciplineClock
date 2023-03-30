//导出简单的加减法运算
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  arr:[
  ]
}
//这里可以加export也可以不加
 const daysSlice = createSlice({
  name:'days',  //定义actions的头
  initialState,  //state的初始值
  reducers:{ 
    //同时生成action：counter/increment
    //这里的payload就是action creator中返回的action中的payload
    addDays:(state,{payload})=>{
      console.log(payload)
      // payload.goalDay = JSON.stringify(payload.goalDay);
      state.arr.push(payload);
      console.log(state.arr);
    }
  }
})


//这里调出的是actions对象 increment:'counter/increment'
export const {addDays} = daysSlice.actions;

//调出reducers中加减的函数
export default daysSlice.reducer