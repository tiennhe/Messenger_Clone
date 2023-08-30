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
} from 'react-native';
import React, {useState} from 'react';
import {relative} from 'path';

const {width, height} = Dimensions.get('window');
const data = [
  {
    id: '1',
    name: 'Hoàng Anh  Nguyệt',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:1 , 
      message:[]
  },
  {
    id: '2',
    name: 'Hà Trọng Huy',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:0
       , message:[]
  },
  {
    id: '3',
    name: 'Nguyễn Đức Tùng',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:1
      , message:[]
  },
  {
    id: '4',
    name: 'Hồng Hạnh',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      message:[]
  },
  {
    id: '5',
    name: 'Đào Toàn',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:1
      , message:[]
  },
  {
    id: '6',
    name: 'Đỗ Duy Mạnh',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:1
      , message:[]
  },
  {
    id: '7',
    name: 'Quán Văn Luân',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:0
      , message:[]
  },
  {
    id: '8',
    name: 'Vũ Việt Hải',
    image:
      'https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-3d-800x500.jpg',
      status:1
      , message:[]
  },
  // Thêm các mục khác vào đây
];
const renderItem = ({item}) => (
  <View style={{flexDirection: 'row'}}>
    <Text>{item.name}</Text>
  </View>
);


const ChatComponent = () => {

  
  const [search, setsearch] = useState('');
  return (
    <SafeAreaView>
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
          {
            item.status==1?    <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 50,
              backgroundColor: 'green',
              marginTop: -15,
              marginRight: -38,
            }}></View>:null
          }
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
    </SafeAreaView>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({});
