import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
} from "react-native";

export default function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen}>
        <View style={styles.container2}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
                source={require("./imgs/vsmart.png")}
              />
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                Điện Thoại Vsmart Joy 3 Hàng chính hãng
              </Text>
            </View>
          </View>
          <View style={{ flex: 3,  backgroundColor: "#C4C4C4",}}>
            <View
              style={{
                flex: 0.5,
              }}
            >
              <Text
                style={{
                  fontSize: 18, margin: 5, marginLeft: 15
                }}
              >
                Chọn một màu bên dưới:
              </Text>
            </View>
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                flex: 7,
              }}
            >
              <View style={[styles.box, { backgroundColor: "#C5F1FB" }]} />
              <View style={[styles.box, { backgroundColor: "red" }]} />
              <View style={[styles.box, { backgroundColor: "black" }]} />
              <View style={[styles.box, { backgroundColor: "#234896" }]} />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.buttonXong}
                onPress={() => setModalOpen(false)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Xong
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          style={{ width: 500, height: 400, resizeMode: "contain" }}
          source={require("./imgs/vsmart.png")}
        />
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: 16 }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={{ paddingLeft: 10, paddingTop: 10, flexDirection: "row" }}>
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("./imgs/Star1.png")}
          />
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("./imgs/Star1.png")}
          />
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("./imgs/Star1.png")}
          />
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("./imgs/Star1.png")}
          />
          <Image
            style={{ width: 25, height: 25, resizeMode: "contain" }}
            source={require("./imgs/Star1.png")}
          />
          <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 30 }}>
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.money}>1.790.000 đ</Text>
          <Text style={styles.moneyline}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <TouchableOpacity
            style={[styles.button, {}]}
            onPress={() => {
              alert("you clicked me");
            }}
          >
            <Image
              source={require("./imgs/ques.png")}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 25 }}>
          <TouchableOpacity
            style={styles.buttonTT}
            onPress={() => {
              setModalOpen(true);
            }}
          >
            <Text
              style={{
                fontSize: 18, paddingLeft: 90
              }}
            >
              4 MÀU-CHỌN MÀU
            </Text>
            <Image
              source={require("./imgs/next.png")}
              style={{ width: 25, height: 25, resizeMode: "contain", paddingLeft: 120}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonMua}
          onPress={() => {
            alert("you clicked me");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonXong: {
    backgroundColor: "#1952E294",
    width: 330,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
  },
  container2: {
    justifyContent: "center",
    flex: 1,
  },
  buttonMua: {
    backgroundColor: "red",
    width: 350,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTT: {
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 1,
    width: 330,
    height: 40,
    marginBottom: 20,
    shadowColor: "#303838",
  },
  button: {
    paddingTop: 17,
    paddingLeft: 5,
  },
  text: {
    color: "red",
    paddingTop: 20,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  money: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  moneyline: {
    fontSize: 15,
    paddingTop: 24,
    paddingLeft: 40,
    fontWeight: "bold",
    color: "gray",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  body: {
    flex: 3,
    paddingLeft: 15,
  },
  header: {
    flex: 5,
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
});
