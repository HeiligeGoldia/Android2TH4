import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex: 5, backgroundColor: '#FFFFFF', width: '100%', paddingTop: 25, padding: 10}}>
        <View style={{flex: 2, flexDirection: "row"}}>
          <View style={{flex: 1}}>
            <Image source={require('./imgs/book.png')}/>
            <Text style={{fontSize: 12, paddingTop: 20}}>Mã giảm giá đã lưu</Text>
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontWeight: "bold"}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontWeight: "bold", paddingTop: 6, paddingBottom: 6}}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{fontWeight: "bold", color: "red", fontSize: 18}}>141.800 đ</Text>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid', paddingTop: 8, paddingBottom: 7}}>141.800 đ</Text>
            <View style={{flexDirection: "row", alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {
                alert("-")
              }}><Image source={require('./imgs/btnminus.png')}/></TouchableOpacity>
              <Text style={{paddingLeft: 10, paddingRight: 10, fontWeight: "bold", fontSize: 16}}>0</Text>
              <TouchableOpacity onPress={() => {
                alert("+")
              }}><Image source={require('./imgs/btnadd.png')}/></TouchableOpacity>
              <Pressable onPress={() => {
                alert("Ok")
              }} style={{paddingLeft: 100}}><Text style={{fontWeight: "bold", color: "#0089D7"}}>Mua sau</Text></Pressable>
            </View>
            <Pressable onPress={() => {
              alert("Hi")
            }} style={{paddingTop: 20}}><Text style={{fontSize: 12, fontWeight: "bold", color: "#0089D7"}}>Xem tại đây</Text></Pressable>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
            <View style={{flexDirection: "row", borderColor: "#8A8A8A", borderWidth: 1, alignItems: 'center', height: 50, width: 200}}>
              <View style={{backgroundColor: "#F2DD1B", width: 32, height: 16, margin: 7 }}></View>
              <TextInput placeholder='Mã giảm giá'></TextInput>
            </View>
            <Pressable style={{backgroundColor: "#00629B", height: 50, width: 100, margin: 25, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: "#FFFFFF", fontWeight: "bold", fontSize: 18}}>Áp dụng</Text>
            </Pressable>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#FFFFFF', width: '100%', margin: 20, flexDirection: "row", alignItems: 'center'}}>
        <Text style={{fontWeight: "bold"}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Pressable onPress={() => {
          alert("Here")
        }} style={{paddingLeft: 12}}><Text style={{fontWeight: "bold", color: 'blue'}}>Nhập tại đây?</Text></Pressable>
      </View>
      <View style={{flex: 1, backgroundColor: '#FFFFFF', width: '100%', flexDirection: "row"}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>Tạm tính</Text>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15, padding: 20, paddingLeft: 150}}>141.800 đ</Text>
      </View>
      <View style={{flex: 1, width: '100%'}}></View>
      <View style={{flex: 1, width: '100%'}}></View>
      <View style={{flex: 1, width: '100%'}}></View>
      <View style={{flex: 2, backgroundColor: '#FFFFFF', width: '100%'}}>
        <View style={{flex: 1, flexDirection: "row"}}>
          <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 16, padding: 20}}>Thành tiền</Text>
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 16, padding: 20, paddingLeft: 150}}>141.800 đ</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <Pressable onPress={() => {
            alert("Order")
          }} style={{backgroundColor: 'red', width: 320, height: 40, alignItems: 'center', justifyContent:'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
