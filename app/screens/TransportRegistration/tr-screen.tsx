import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableHighlight,  } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text, GradientBackground, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"

const addLogo = require("./add.png")
const uploadLogo = require("./upload.png")


const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[6],
}

const CONTAINER2: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[5],
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}

const TEXT2: TextStyle = {
  color: color.palette.lightGrey,
  fontFamily: typography.primary,
}

const BOLD: TextStyle = { fontWeight: "bold" }

const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}

const TITLE_WRAPPER2: TextStyle = {
  ...TEXT,
  textAlign: "left",
}

const TITLE_WRAPPER3: TextStyle = {
  ...TEXT2,
  textAlign: "center",
}

const TITLE_WRAPPER4: TextStyle = {
  ...TEXT2,
  textAlign: "left",
  alignSelf: 'stretch',
  borderBottomWidth: 2,
  borderBottomColor: color.palette.lightGrey,
  
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  lineHeight: 40,
  textAlign: "center",
}

const TITLE2: TextStyle = {
  ...TEXT2,
  fontSize: 20,
  lineHeight: 40,
  textAlign: "center",
}

const TITLE3: TextStyle = {
  ...TEXT2,
  fontSize: 16,
  lineHeight: 20,
  textAlign: "center",
}

const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[3],
  backgroundColor: color.primary,
  borderRadius: 50,
  maxWidth: 200,
  marginLeft: 30,

}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  letterSpacing: 2,
}

const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[5],
  paddingHorizontal: spacing[8],
}

const line: TextStyle ={
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingVertical: spacing[3],
}

const row: ViewStyle ={
  flexDirection: 'row',
}

const left: ViewStyle ={
  height: 200,
  // backgroundColor: 'red',
  flex: 1,
}

const right: ViewStyle ={
  height: 200,
  // backgroundColor: 'blue',
  flex: 1,
}

const logo: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 115,
  height: 100,
}

const x: ViewStyle ={
  paddingVertical: spacing[5],
}

export const trScreen: FC<StackScreenProps<NavigatorParamList, "TransportRegistration">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("DriverDetails")

    return (
      <View testID="TransRegScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />
        
        <Screen preset="scroll" backgroundColor={color.transparent}>

          <View style={CONTAINER}> 
            <View style={x}>
              <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Transport Registration" />
              <Text style={{...TITLE2, ...TITLE_WRAPPER3}} text="Please fill all the required fields." />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Company Name" />
              <TextInput style={TITLE_WRAPPER4} />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Vin Number" />
              <TextInput style={TITLE_WRAPPER4} secureTextEntry={true} />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Company Location" />
              <TextInput style={TITLE_WRAPPER4} />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Vehicle Licenceplate" />
              <TextInput style={TITLE_WRAPPER4} secureTextEntry={true} />
            </View>
          </View>
         
          <View style={line}></View>

          <View style={{...row, ...CONTAINER2}}>
              <View style={left}>
                <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Copy of Insurance" />
                <Text style={{...TITLE3, ...TITLE_WRAPPER3}} text="Upload a Copy of Insurance" />
                <TouchableHighlight onPress={()=>{}}>
                  <View>
                   <Image source={uploadLogo} style={logo} />
                  </View>
                </TouchableHighlight>
              </View>
              <View style={right}>
                <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Add your Services" />
                <Text style={{...TITLE3, ...TITLE_WRAPPER3}} text="Kindly Add the Service you offer" />
                <TouchableHighlight onPress={()=>{}}>
                  <View>
                    <Image source={addLogo} style={logo} />
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          
        </Screen>


        <SafeAreaView>
          <View style={FOOTER_CONTENT}>
            <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              text="Next"
              onPress={nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  },
)
