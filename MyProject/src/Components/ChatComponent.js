import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {relative} from 'path';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatDetailComponent from './ChatDetailComponent';
import {useNavigation} from '@react-navigation/native';
const Stack = createStackNavigator();


const {width, height} = Dimensions.get('window');
const data = [
  {
    id: '1',
    name: 'Hoàng Anh  Nguyệt',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 1,
    messages: [
      {
        nameid: 1,
        message: 'hello',
      },
    ],
  },
  {
    id: '2',
    name: 'Hà Trọng Huy',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 0,
  },
  {
    id: '3',
    name: 'Nguyễn Đức Tùng',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 1,
  },
  {
    id: '4',
    name: 'Hồng Hạnh',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
  },
  {
    id: '5',
    name: 'Đào Toàn',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 1,
    messages: [
      {
        nameid: 1,
        message: 'hello',
      },
    ],
  },
  {
    id: '6',
    name: 'Đỗ Duy Mạnh',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 1,
    messages: [
      {
        nameid: 1,
        message: 'hello',
      },
    ],
  },
  {
    id: '7',
    name: 'Quán Văn Luân',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 0,
    messages: [
      {
        nameid: 1,
        message: 'hello',
      },
    ],
  },
  {
    id: '8',
    name: 'Vũ Việt Hải',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
    status: 1,
    messages: [
      {
        nameid: 1,
        message: 'hello',
      },
    ],
  },
  // Thêm các mục khác vào đây
];


const ChatComponent = ({navigation}) => {
  const [search, setsearch] = useState('');

  return (
    <View style  = {{flex:1}}>
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          value={search}
          placeholder="Tìm Kiếm"
          onChangeText={text => setsearch(text)}
          style={{
            width: width * 0.9,
            height: 50,
            backgroundColor: '#C0C0C0',
            margin: 10,
            borderRadius: 50,
            paddingLeft: 35,
            fontSize: 15,
          }}></TextInput>
        <Image
          source={require('./../Images/search.png')}
          style={{width: 20, height: 20, position: 'absolute', left: 20}}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {data.map(item => (
            <View
              key={item.id}
              style={{
                width: 80,
                height: 110,
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: `${item.image}`}}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                }}
              />
              {item.status == 1 ? (
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 50,
                    backgroundColor: 'green',
                    marginTop: -15,
                    marginRight: -38,
                  }}></View>
              ) : null}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text numberOfLines={2} style={{textAlign: 'center'}}>
                  {item.name}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {data.map((item, index) => (
        <TouchableOpacity  key ={index} onPress={()=>navigation.navigate('ChatDetail' ,item )}>
          <View
        
            style={{
              width: width * 0.8,

              margin: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: `${item.image}`}}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                }}
              />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                {item.messages && item.messages.length > 0 ? (
                  item.messages.map(message => (
                    <View>
                      <Text>{message.message}</Text>
                    </View>
                  ))
                ) : (
                  <View>
                    <Text>No messages available</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    <TouchableOpacity onPress={()=>navigation.navigate('ChatDetail')}>
      <Text>Press Me</Text>
    </TouchableOpacity>
    </View>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({});
