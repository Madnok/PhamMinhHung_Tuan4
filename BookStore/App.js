import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";

export default function App() {
  const [gia,SetPrice] = React.useState('141.800 đ')
  const [count, setCount] = React.useState(1)
  const onPressAdd = () => setCount(prevCount => prevCount + 1);
  const onPressRemove = () => setCount(prevCount => prevCount - 1);
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
          <View style={{flexDirection:"row"}}>
              <Image source={require("./img/book.png")} style={styles.bookImg}></Image>
              <View style={styles.view1Text}>
                <Text style={styles.textTit}>Nguyên hàm tích phân ứng dụng</Text>
                <Text style={styles.textTit}>Cung cấp bởi Tiki Trading</Text>
                <Text style={styles.textGiaGiam}>{gia}</Text>
                <Text style={styles.textGiaGoc}>{gia}</Text>
                <View style={styles.view1Button}>
                  <TouchableOpacity title='-' style={styles.buttonAddRemove} onPress={(onPressRemove)}>
                    <Text style={{fontSize:15}}>-</Text> 
                    </TouchableOpacity>
                    <Text style={{marginRight: 10, marginTop:0, fontSize:15}}>1</Text>
                    <TouchableOpacity title='+' style={styles.buttonAddRemove} onPress={(onPressAdd)}>
                    <Text style={{fontSize:15}}>+</Text>
                    </TouchableOpacity>
                    <Text style={{color:'blue',paddingTop:5, paddingLeft: 100, fontWeight: "800", fontSize:15}}>Mua sau</Text>
                </View>
              </View>
          </View>
          <View style={{flexDirection:"row", marginTop:8}}>
              <Text style={{fontWeight: "800",paddingLeft:14}}>Mã giảm giá đã lưu</Text>
              <Text style={{paddingLeft:10, color: 'blue', fontWeight: "800",paddingLeft:20}}>Xem tại đây</Text>
              
        </View>
          <View style={{flexDirection:'row', marginTop:16,paddingTop:20,paddingLeft:15,alignItems:"center",justifyContent:"space-between"}}>
            <TextInput
              style={{paddingLeft:20,width:99, height:45,fontWeight: "700", width: "50%", borderWidth:1, fontSize: 18}}>
            <Image source={require('./img/yellow_block.png')} style={{justifyContent:'flex-start'}}/>
            <Text>  Mã Giảm Giá</Text>
            </TextInput>
            <TouchableOpacity style={{backgroundColor: '#0A5EB7', width:99, height:45, padding:13}}>
            <Text style={{paddingLeft:7, color:'white', fontWeight:'700', fontSize: 15}}>ÁP DỤNG</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1.5, width: "100%", justifyContent:'space-between'}}>
        <View>
          <View style={{padding:10,backgroundColor: 'white', marginTop: 20, flexDirection:"row"}}>
            <Text style={{marginLeft: 5, fontSize:16, fontWeight:'700'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{marginLeft: 5, fontSize:16, fontWeight:'700', color: 'blue'}}>Nhập tại đây</Text>
          </View>
          <View style={{padding:10,backgroundColor: 'white', marginTop: 20, flexDirection:"row"}}>
            <Text style={{marginLeft: 5, fontSize:20, fontWeight:'700'}}>Tạm tính</Text>
            <Text style={{marginLeft: 210, fontSize:20, fontWeight:'700', color: 'red'}}>{141800*count} đ</Text>
          </View>
          <View style={{padding:"4%", backgroundColor: 'white', marginTop:105}}>
            <View style={{backgroundColor: 'white',flexDirection:"row"}}>
              <Text style={{marginLeft: 5, fontSize:20, fontWeight:'700'}}>Thành tiền</Text>
              <Text style={{marginLeft: 180, fontSize:20, fontWeight:'700', color: 'red'}}>{141800*count} đ</Text>
            </View>
            <TouchableOpacity style={{marginTop:15,marginLeft:20,width: 331, height:45,padding:10, backgroundColor:'red'}}>
                <Text style={{paddingLeft:55, color:'white', fontWeight:'700', fontSize: 20}}>TIẾN HÀNH ĐẶT HÀNG</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"gray",
  },
  view1:{
    backgroundColor:"white",
    width: '100%',
    height: 330 ,
    paddingTop: 40,
  },
  bookImg:{
    height:150,
    width: 120,
    flexDirection: "column",
    top:5,
    left:15,
  },
  view1Text:{
    flex:1,
    paddingLeft:40,
    flexDirection:"column",
    flexWrap:"wrap",
    alignItems:"flex-start",  
  },
  textTit:{
    fontWeight: "700",
    fontSize:14,
    marginBottom: 5,
    paddingBottom:5,
  },
  textGiaGiam:{
    color:"red",
    fontWeight: "700",
    fontSize:22,
  },
  textGiaGoc:{
    color:"gray",
    fontWeight: "700",
    fontSize:16,
    paddingTop:10,
    textDecorationLine: 'line-through',
  },
  view1Button:{
    flexDirection: "row",
    paddingTop:10
  },
  buttonAddRemove:{
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 8,
    backgroundColor: "#C4C4C4",
  },
});
