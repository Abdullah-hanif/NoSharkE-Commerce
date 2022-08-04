import { StyleSheet, Text, View, TouchableOpacity, Image ,ScrollView} from "react-native"
import React from "react"
import { color } from "../../theme"

export const SignUpWallet = ({navigation}) => {


  return (
    <ScrollView style={styles.MainContainer}>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={{ color: color.text, fontWeight: "600" }}>Choose From The Following</Text>
        <Text style={{ color: color.dim, marginTop: 10 }}>Please Select one the following </Text>
        <Text style={{ color: color.dim, marginTop: 5 }}>you want to become.</Text>
      </View>

      {/* ==============inner container */}
      <View style={{ alignItems: "center" }}>
        <View style={styles.InnerContainer}>
          <Text style={{ color: color.text, fontWeight: "700", fontSize: 20, marginTop: 10 }}>
            Become a Buyer
          </Text>
          <Text style={{ color: color.dim, marginTop: 10 }}>Lorem dolor sit amet,consectetur</Text>
          <Text style={{ color: color.dim, marginTop: 8 }}>adjpiscingtum non,</Text>

          <View
            style={{
              backgroundColor: color.primary,
              borderRadius: 10,
              width: 80,
              height: 35,
              marginTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("BuyNAM")} style={{ alignItems: "center", marginTop: 7 }}>
              <Text style={{ color: color.text }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View></View>
      </View>
      <View style={{ alignItems: "center", marginTop: -18 }}>
        <View style={styles.InnerContainer}>
          <Text style={{ color: color.text, fontWeight: "700", fontSize: 20, marginTop: 8 }}>
            Become a Seller
          </Text>
          <Text style={{ color: color.dim, marginTop: 10 }}>Lorem dolor sit amet,consectetur</Text>
          <Text style={{ color: color.dim, marginTop: 8 }}>adjpiscingtum non,</Text>

          <View
            style={{
              backgroundColor: color.primary,
              borderRadius: 10,
              width: 80,
              height: 35,
              marginTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("mint")} style={{ alignItems: "center", marginTop: 7 }}>
              <Text style={{ color: color.text }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View></View>
      </View>
      <View style={{ alignItems: "center", marginTop: -18 }}>
        <View style={styles.InnerContainer}>
          <Text style={{ color: color.text, fontWeight: "700", fontSize: 20, marginTop: 10 }}>
            Shipping/transport Service
          </Text>
          <Text style={{ color: color.dim, marginTop: 10 }}>Lorem dolor sit amet,consectetur</Text>
          <Text style={{ color: color.dim, marginTop: 8 }}>adjpiscingtum non,</Text>

          <View
            style={{
              backgroundColor: color.primary,
              borderRadius: 10,
              width: 80,
              height: 35,
              marginTop: 15,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("TransportRegistration")} style={{ alignItems: "center", marginTop: 7 }}>
              <Text style={{ color: color.text }}>Start</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View></View>
      </View>
      <View style={styles.BottomIndicator}>
        <Image source={require("../../assets/BottomIndicator.png")} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: color.background,
  },
  InnerContainer: {
    marginTop: 40,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#404040",
    width: 350,
    height: 160,
    // marginHorizontal:18
  },
  BottomIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 80,
  },
})
