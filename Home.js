import * as React from 'react';
import { Text, View,Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect,useState } from 'react';
import {  Provider,Toast } from '@ant-design/react-native';
import HomePage from './clockComponents/Habits/HomePage';
import 'react-native-gesture-handler';
import Clock from './clockComponents/TomatoClock/Clock'
const pp = ()=>{
  return (
    <View>
      <Text>1</Text>
    </View>
  )
}

const pp1 = ()=>{
  return (
    <View>
      <Text>12</Text>
    </View>
  )
}



const Tab = createBottomTabNavigator(
);

export default function App() {
  return (
    <Provider >
  <NavigationContainer>
        <Tab.Navigator
         barStyle={{ backgroundColor: 'pink' }}
        
        style = {{position:'absolute'}}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === '今日习惯') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === '我的') {
                iconName = focused ? 'person' : 'person-outline';
              }
              else if (route.name === '番茄钟') {
                iconName = focused ? 'stopwatch' : 'stopwatch-outline';
              }

              // You can return any component that you like here!
              return <Ionicons  name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            },
          })}
        >
          <Tab.Screen name="今日习惯"  component={HomePage}
          options={{
            headerStyle:{backgroundColor: '#ffffff'},
            headerShown: false,
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
            headerRight:()=><Ionicons onPress={()=>console.log(11)} name="ellipsis-horizontal-outline" style = {{position: 'absolute',right:20,fontSize:30}} />,
          }}
          />
          <Tab.Screen name="番茄钟" component={Clock}
          options={{
            headerStyle:{backgroundColor: '#ffffff'},
            // headerShown: false,
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '700',
              fontSize:18
            },
            // headerLeft:()=><Button title = "ss" ></Button>  //左侧按钮
          }}
          />
          <Tab.Screen name="我的" component={pp1}
          options={{
            // header:null,
            headerStyle:{backgroundColor: '#ededed',},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500'
            }}}
          />
          
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}
