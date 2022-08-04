import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, keyboardType } from "react-native"
import { color, spacing } from '../../theme';

export const Sending_screen = ({navigation}) => {
  const nextScreen = () => navigation.navigate("???")

  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })

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
  return (
    <View style={styles.mainContainer}>

      <View style={styles.mainHeading}>
        <Text style={styles.mainHeading}> Sending Request Screen </Text>
        <Text style={styles.subHeading}> Time Frame </Text>

      </View>
      <View style={{
        flexDirection: "row",
        width: '50%',
        alignSelf: 'center',

        marginTop: 10, backgroundColor: '#404040'
      }}>
        <View style={styles.number}>
        <TextInput
            placeholderTextColor="#666666"
            editable
            maxLength={3}
            keyboardType="numeric"
            style={[
              styles.textInput,
              {
                color: "white",
                paddingBottom: 0,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <Text style={styles.day}>Days</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.number}>
          <TextInput
            placeholderTextColor="#666666"
            editable
            maxLength={2}
            keyboardType="numeric"
            style={[
              styles.textInput,
              {
                color: "white",
                paddingBottom: 0,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <Text style={styles.day}>hours</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.number}>
          <TextInput
            placeholderTextColor="#666666"
            editable
            maxLength={2}
            keyboardType="numeric"
            style={[
              styles.textInput,
              {
                color: "white",
                paddingBottom: 0,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <Text style={styles.day}>Mins</Text>
        </View>
      </View>
      <View style={styles.x}>
        <Text style={styles.TITLE_WRAPPER2}>Description</Text>
        <TextInput
          placeholder="Your Description"
          placeholderTextColor="#666666"
          editable
          maxLength={1000}
          style={[
            styles.textInput,
            {
              color: "white",
              paddingBottom: 0,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
      </View>
      <View style={styles.x}>
        <Text style={styles.TITLE_WRAPPER2}>Price</Text>

        <TextInput
          placeholder="Price"
          placeholderTextColor="#666666"
          editable
          maxLength={6}
          keyboardType='numeric'
          style={[
            styles.textInput,
            {
              color: "white",
              paddingBottom: 0,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
              </View>
      <View style={styles.gap}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert("Request Submitted")
          }}
        >
          <Text style={styles.btn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.background,
    flex: 1,
  },
  mainHeading: {
    marginTop: 20,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",

  },
  gap: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  subHeading: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  text: {
    color: 'white',
    marginLeft: -20,
    fontWeight: "bold",

  },
  number: {
    height: 55, width: '35%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  day: {
    color: "white",
    fontSize: 10,
    marginLeft: 19,

  },
  line: {
    backgroundColor: color.line,
    width: 1,
    height: 30,
    alignSelf: 'center',
  },
  TITLE_WRAPPER2: {
    //...TEXT,
    textAlign: "left",
    color: "white",
    fontSize: 20
  },
  x: {
    marginLeft: 10,
    paddingVertical: spacing[5],
    color: "white",
    fontSize: 20
  },
  TITLE_WRAPPER5: {
    //  ...TEXT2,
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 5,
    lineHeight: 25,
    color: "white",
    fontSize: 15
  },
  TITLE_WRAPPER6: {
    //  ...TEXT2,
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 10,
    lineHeight: 25,
    color: "white",
    fontSize: 19,
    fontWeight: "bold"
  },
  button: {
    borderRadius: 20,
    marginTop: 6,
    paddingLeft: 20,
    width: 150,


  },
  btn: {
    fontSize: 20,
    borderRadius: 20,
    backgroundColor: color.primary,
    color: "white",
    paddingLeft: 32,
    paddingTop: 9,
    height: 50,


  },
})