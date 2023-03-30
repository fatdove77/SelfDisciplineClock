//导出简单的加减法运算
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  flag:true, 
}
//这里可以加export也可以不加
 const isShowDaySlice = createSlice({
  name:'isShowDay',  //定义actions的头
  initialState,  //state的初始值
  reducers:{ 
    //同时生成action：counter/increment
    //这里的payload就是action creator中返回的action中的payload
    isShow:(state)=>{
      console.log(state);
      state.flag = false
    }
  }
})


//这里调出的是actions对象 increment:'counter/increment'
export const {isShow} = isShowDaySlice.actions;

//调出reducers中加减的函数
export default isShowDaySlice.reducer