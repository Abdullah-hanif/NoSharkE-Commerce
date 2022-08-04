import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native"

import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import * as Animatable from "react-native-animatable"
import backgroundColor from "../../components/gradient-background/gradient-background.story"
import { NONE } from "apisauce"

export const SignUp = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      })
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      })
    }
  }
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      })
    } else {
      setData({
        ...data,
        isValidUser: false,
      })
    }
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StatusBar backgroundColor="#202020" barStyle="light-content" />
          <View style={styles.subheader}>
            <View>
            <Image source={require("../../assets/new_noah_s_logo.png")} style={styles.img} />
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={styles.txt}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.header}>

          </View>
          <Animatable.View animation="fadeInUpBig" style={[styles.footer, {}]}>
            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 25,
                },
              ]}
            >
              Sign Up
            </Text>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 2,
                width: 90,
                paddingTop: 3,
              }}
            />

            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  marginTop: 10,
                },
              ]}
            >
              Name
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "white",
                    paddingBottom: 3,
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Image
                    source={require("../../assets/green-tik.png")}
                    style={{ width: 15, height: 15 }}
                  />
                </Animatable.View>
              ) : null}
            </View>
            {/* ============================== */}
            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  marginTop: 10,
                },
              ]}
            >
              SurName
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="SurName"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "white",
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Image
                    source={require("../../assets/green-tik.png")}
                    style={{ width: 15, height: 15 }}
                  />
                </Animatable.View>
              ) : null}
            </View>

            {/* ======================= */}
            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  marginTop: 20,
                },
              ]}
            >
              Email
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "white",
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Image
                    source={require("../../assets/green-tik.png")}
                    style={{ width: 15, height: 15 }}
                  />
                </Animatable.View>
              ) : null}
            </View>
            {data.isValidUser ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
              </Animatable.View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  marginTop: 10,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: "white",
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Image source={require("../../assets/eyeclose.png")} style={{ marginTop: 30 }} />
                ) : (
                  <Image
                    source={require("../../assets/eye-open.png")}
                    style={{ width: 30, height: 15 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
            )}

            {/* ============================== */}

            <Text
              style={[
                styles.text_footer,
                {
                  color: "white",
                  marginTop: 10,
                },
              ]}
            >
              Confirm Password
            </Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={[
                  styles.textInput,
                  {
                    color: "white",
                  },
                ]}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Image source={require("../../assets/eyeclose.png")} style={{ marginTop: 30 }} />
                ) : (
                  <Image
                    source={require("../../assets/eye-open.png")}
                    style={{ width: 30, height: 15 }}
                  />
                )}
              </TouchableOpacity>
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
              </Animatable.View>
            )}

            {/* <TouchableOpacity>
          <Text style={{ color: "white", marginTop: 15, marginLeft: 210 }}>
            {" "}
            <Image source={require("../../assets/lock.png")} /> Forgot password?
          </Text>
        </TouchableOpacity> */}
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate("KYCverification")}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#cb16ff",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up <Image source={require("../../assets/buttonArrow.png")} />
                </Text>
              </TouchableOpacity>

              <View style={{ marginTop: 10 }}>
                <Text style={{ color: "#fff", fontSize: 15 }}>Login With</Text>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ marginRight: 20 }}>
                  <Image source={require("../../assets/google.png")} style={{ height: 30 }} />
                </View>
                <View>
                  <Image source={require("../../assets/apple.png")} />
                </View>
              </View>
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <Image source={require("../../assets/BottomIndicator.png")} />
              </View>
            </View>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    marginTop: 30,
    marginLeft: 0,
    width: 60,
    height: 60,
  },
  txt: {
    color: "white",
    marginTop: 40,
    fontSize: 16,
  },
  subheader: {
    flexDirection: "row",
    justifyContent:'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
    marginBottom: 5,
  },
  footer: {
    flex: 13,
    backgroundColor: "#404040",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 13,
    // marginTop:20,
  },
  action: {
    flexDirection: "row",
    marginTop: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    // paddingBottom: 8,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 1 : -16,
    paddingLeft: 1,
    marginTop: 8,

    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 13,
  },
  button: {
    alignItems: "center",
    marginTop: 1,
  },
  signIn: {
    width: "45%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#cb16ff",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
