//导出简单的加减法运算
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  value:0, 
  title:'redux toolkit pre'
}
//这里可以加export也可以不加
 const counterSlice = createSlice({
  name:'counter',  //定义actions的头
  initialState,  //state的初始值
  reducers:{ 
    //同时生成action：counter/increment
    //这里的payload就是action creator中返回的action中的payload
    increment:(state,{payload})=>{
      console.log(state);
      state.value+=payload.value //这里的value和上面value对应
    },
    decrement:(state)=>{
      state.value-=1;
    }
  }
})

console.log(counterSlice.reducer)

//这里调出的是actions对象 increment:'counter/increment'
export const {increment, decrement} = counterSlice.actions;

//调出reducers中加减的函数
export default counterSlice.reducer