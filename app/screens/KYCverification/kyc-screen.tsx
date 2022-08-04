import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableHighlight,  } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text, GradientBackground, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[6],
}

const CONTAINER2: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  paddingVertical: spacing[5],
  flex: 1,
  height: 200,
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
  lineHeight: 30,
  textAlign: "center",
}

const TITLE3: TextStyle = {
  ...TEXT2,
  fontSize: 16,
  lineHeight: 20,
  textAlign: "center",
}

const CONTINUE: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[0],
  backgroundColor: color.primary,
  borderRadius: 10,
  maxWidth: 130,
  marginLeft: 65,
  marginTop: -70,

}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  fontSize: 18,
    ...BOLD,
}

const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[8],
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
// backgroundColor: 'red',
  flex: 1,
  paddingHorizontal: 8,
}

const middle: ViewStyle ={
    // backgroundColor: 'blue',
    flex: 1,
    paddingHorizontal: 8,
}

const right: ViewStyle ={
    // backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 8,
}

const logo: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 115,
  height: 100,
}

const x: ViewStyle ={
  paddingVertical: spacing[3],
}

const x1: ImageStyle ={
height: 500,
width: 300,
alignContent: "center",
resizeMode: 'contain',
marginLeft: 15,

}

export const kycScreen: FC<StackScreenProps<NavigatorParamList, "KYCverification">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("ConnectWallet")

    return (
      <View testID="KYCScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />
        
        <Screen preset="scroll" backgroundColor={color.transparent}>

          <View style={CONTAINER}> 

            <View style={x}>
              <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Verification" />
              <Text style={{...TITLE2, ...TITLE_WRAPPER3}} text="Please Verify that you are a real human" />
            </View>

            <View style={x}>
              <Image style={x1} source={require("../../assets/Verification.png") } />
            </View>

          </View>
         
          <View style={FOOTER_CONTENT}>
            <Button
              testID="next-screen-button"
              style={CONTINUE}
              textStyle={CONTINUE_TEXT}
              text="Take Selfie"
              onPress={nextScreen}
            />
          </View>
          
        </Screen>

      </View>
    )
  },
)
