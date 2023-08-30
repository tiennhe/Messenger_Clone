import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import ChatComponent from './src/Components/ChatComponent';
import CallComponent from './src/Components/CallComponent';
import PhoneBookComponent from './src/Components/PhoneBookComponent';
import NewsComponent from './src/Components/NewsComponent';

const Stack = createStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

const HomeTabs = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Đoạn Chat"
        screenOptions={{
          headerLeft: () => (
            <View
              style={{
                backgroundColor: '#C0C0C0',
                marginLeft: 6,
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <Image
                  source={require('./src/Images/menu.png')}
                  style={{width: 20, height: 20, alignItems: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
          ),
        }}>
        <Tab.Screen
          name="Đoạn Chat"
          component={ChatComponent}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Images/chat.png')}
                style={{width: 20, height: 20}}
                resizeMode="stretch"
              />
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#C0C0C0',
                    marginLeft: 6,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    marginRight: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <Image
                      source={require('./src/Images/camera.png')}
                      style={{width: 20, height: 20, alignItems: 'center'}}
                      resizeMode="stretch"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    backgroundColor: '#C0C0C0',
                    marginLeft: 6,
                    width: 40,
                    height: 40,
                    marginRight: 5,
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.openDrawer();
                    }}>
                    <Image
                      source={require('./src/Images/pencil.png')}
                      style={{width: 20, height: 20, alignItems: 'center'}}
                      resizeMode="stretch"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cuộc Gọi"
          component={CallComponent}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Images/video-calling-app.png')}
                style={{width: 20, height: 20}}
                resizeMode="stretch"
              />
            ),
            headerRight:()=>(
              <View style = {{flexDirection:'row'}}>
               <View
              style={{
                backgroundColor: '#C0C0C0',
                marginLeft: 6,
                width: 40,
                height: 40,
                borderRadius: 50,
                marginRight:5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity >
                <Image
                  source={require('./src/Images/phone.png')}
                  style={{width: 20, height: 20, alignItems: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#C0C0C0',
                marginLeft: 6,
                width: 40,
                height: 40,
                marginRight:5,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity >
                <Image
                  source={require('./src/Images/video-calling-app.png')}
                  style={{width: 20, height: 20, alignItems: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
              </View>
          ),
          }}
        />
        <Tab.Screen
          name="Danh Bạ"
          component={PhoneBookComponent}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Images/contacts.png')}
                style={{width: 20, height: 20}}
                resizeMode="stretch"
              />
            ),headerRight:()=>(
              <View
              style={{
                backgroundColor: '#C0C0C0',
                marginLeft: 6,
                width: 40,
                height: 40,
                marginRight:5,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity >
                <Image
                  source={require('./src/Images/contacts.png')}
                  style={{width: 20, height: 20, alignItems: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            ),
            
          }}
        />
        <Tab.Screen
          name="Tin"
          component={NewsComponent}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./src/Images/order-tracking.png')}
                style={{width: 20, height: 20}}
                resizeMode="stretch"
              />
            ),

            
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const HomeMesenger = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Đoạn Chat">
        <Stack.Screen name="Đoạn Chat" component={HomeTabs} options={{
        
          
        }}/>
        <Drawer.Screen name="Chat" component={ChatComponent} options={{
         
        }} />
        <Drawer.Screen name="Call" component={CallComponent} />
        <Drawer.Screen name="PhoneBook" component={PhoneBookComponent} />
        <Drawer.Screen name="News" component={NewsComponent} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <HomeMesenger />;
};

export default App;

const styles = StyleSheet.create({});
