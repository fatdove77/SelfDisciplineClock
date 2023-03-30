//导出简单的加减法运算
import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  arr:[
  ]
}
 const habitsSlice = createSlice({
  name:'habits',  //定义actions的头
  initialState,  //state的初始值
  reducers:{ 
    addHabits:(state,{payload})=>{
      console.log(payload)
      let i;
      let element = state.arr.find((item,index)=>{
        i = index;
        return item.habitName == payload.habitName&&item.habitIcon==payload.habitIcon&&item.color == payload.color;
      })
      //isFirst代表习惯唯一
      if(element==undefined){
        state.arr.push(payload);
      }
      else{
        //不如队但是要修改flag让习惯显示
        state.arr[i].isShow = true;
        console.log('习惯从新被添加了')
      }
      console.log(state.arr);
    },
    //payload传入的是index
    //代表这个习惯杯完成了,取消首页显示，并且坚持时间加一天，下一次只有再添加相同习惯的情况下才会再次显示 ，进入addHabit的if判断
    setHabitShow:(state,{payload})=>{
      console.log(payload);
      state.arr[payload].isShow = false;
      state.arr[payload].keepDays +=1;
    }
  }
})


//这里调出的是actions对象 increment:'counter/increment'
export const {addHabits,setHabitShow} = habitsSlice.actions;

//调出reducers中加减的函数
export default habitsSlice.reducer