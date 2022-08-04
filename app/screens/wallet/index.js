import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import React from "react"
import { color } from "../../theme"

export const Wallet = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.walletStyle}>
        <Image source={require('../../assets/wallet.png')}  />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: -65 }}>
        <Text style={{ color: "#fff", fontWeight: "700" }}>Connect Your Wallet</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("ConnectWallet2")} style={styles.btn}>
          <Text style={{ color: color.text }}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.BottomIndicator}>
        <Image source={require("../../assets/BottomIndicator.png")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.background,
    flex: 1,
  },
  walletStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 100,
  },
  btn: {
    backgroundColor: color.primary,
    border: 1,
    // width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    borderRadius: 8,
    width: 150,
  },
  BottomIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 180,
  },
})
