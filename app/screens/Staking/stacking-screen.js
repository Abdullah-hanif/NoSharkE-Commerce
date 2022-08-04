import * as React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { color, spacing, typography } from "../../theme"

export const StakingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.Cart}>
            <Text style={styles.text}> Staking</Text>

            <Image source={require("./image.png")} style={styles.pic} />
          </View>

          <View style={styles.Carts}>
            <Text style={styles.texts}> Stake NAM</Text>
            <Text style={styles.sectext}> Enter The value you want to Stake</Text>
            <Text style={styles.threetxt}> NAM</Text>

            <View
              style={{
                // backgroundColor:"white",
                width: 90,
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 4,
                justifyContent: "center",
                marginLeft: 50,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={styles.txtinput}> $100 </Text>
            </View>
            <View style={styles.center}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Balance: <Text style={styles.txtpri}>Connect to see Balance</Text>
              </Text>
            </View>
            <Text style={{ marginTop: 14, marginLeft: 45, color: "white" }}>
              {" "}
              Minimun value 100
            </Text>
            <Text style={styles.fourtxt}> Enter the number of week would </Text>
            <Text style={styles.fivetxt}> you like to stake</Text>

            <Text style={styles.sixtxt}>Weeks</Text>

            <View
              style={{
                // backgroundColor:"white",
                width: 90,
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 4,
                justifyContent: "center",
                marginLeft: 50,
                marginTop: 4,
                alignItems: "center",
              }}
            >
              <Text style={styles.txtinput}> -- 8 + </Text>
            </View>

            <Text style={styles.seventxt}>
              {" "}
              Tokens Locked Until: <Text style={styles.txtpri}> 15th jan 2022</Text>
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Marketplace")}
            >
              <Text style={styles.btn}>Stake</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "column", marginTop: -355, marginLeft: 20 }}>
              <Text
                style={{
                  borderRadius: 360,
                  backgroundColor: color.primary,
                  width: 20,
                  color: "white",
                }}
              >
                {" "}
                1
              </Text>
              <View
                style={{ backgroundColor: color.primary, width: 1, height: 120, marginLeft: 8 }}
              ></View>
              <Text
                style={{
                  marginTop: 1,
                  borderRadius: 360,
                  backgroundColor: color.primary,
                  width: 20,
                  color: "white",
                }}
              >
                {" "}
                2
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  center: {
    marginLeft: 150,
    marginTop: -35,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  texts: {
    marginTop: 1,
    color: "white",
    fontSize: 20,
    marginLeft: 130,
  },
  txtinput: {
    color: "white",
    fontSize: 20,
  },
  sectext: {
    marginTop: 8,
    marginLeft: 40,
    color: "gray",
    fontSize: 17,
  },
  threetxt: {
    marginTop: 10,
    marginLeft: 45,
    color: "white",
  },
  fourtxt: {
    marginTop: 20,
    marginLeft: 45,
    color: "white",
  },
  fivetxt: {
    marginTop: 1,
    marginLeft: 45,
    color: "white",
  },
  sixtxt: {
    marginTop: 15,
    marginLeft: 50,
    color: "white",
  },
  seventxt: {
    marginTop: 18,
    marginLeft: 55,
    fontSize: 15,
    color: "white",
  },
  txtpri: {
    marginTop: 30,
    marginLeft: 55,
    color: color.primary,
    fontSize: 15,
  },
  Cart: {
    marginTop: 5,
    marginLeft: 20,
    width: "90%",
    flex: 2,
    backgroundColor: "#404040",
    border: 1,
    borderRadius: 15,
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 20,
  },

  pic: {
    marginTop: 30,
    height: 80,
    width: "20%",
    marginLeft: 10,
    marginTop: 50,
    border: 1,
    borderRadius: 20,
  },
  Carts: {
    marginTop: 5,
    marginLeft: 20,
    width: "90%",
    flex: 4,
    backgroundColor: "#404040",
    border: 1,
    borderRadius: 15,
    flexDirection: "column",
    height: 450,
  },

  btn: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: color.primary,
    color: "white",
    paddingLeft: 48,
    paddingTop: 9,
    height: 50,
  },
  button: {
    alignContent: "center",
    borderRadius: 20,
    marginTop: 15,
    paddingLeft: 20,
    width: 170,
    marginLeft: 80,
  },
})
