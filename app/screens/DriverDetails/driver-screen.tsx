import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableHighlight,  } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text, GradientBackground, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"

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
  textAlign: "center", 
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
  paddingVertical: spacing[5],
}

export const driverScreen: FC<StackScreenProps<NavigatorParamList, "driverDetails">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("QuoteRequest")

    return (
      <View testID="DriDetScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />
        
        <Screen preset="scroll" backgroundColor={color.transparent}>

          <View style={CONTAINER}> 
            <View style={x}>
              <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Driver Details" />
              <Text style={{...TITLE2, ...TITLE_WRAPPER3}} text="Please fill all the required fields." />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Driver Name" />
              <TextInput style={TITLE_WRAPPER4} />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Date of Birth" />
                <View style={row}>
                    <View style={left}>
                        <TextInput style={TITLE_WRAPPER4} placeholder="Day" placeholderTextColor="#939AA4" />

                    </View>

                    <View style={middle}>
                        <TextInput style={TITLE_WRAPPER4} placeholder="Month" placeholderTextColor="#939AA4"/>

                    </View>
                    <View style={right}>
                         <TextInput style={TITLE_WRAPPER4} placeholder="Year" placeholderTextColor="#939AA4"/>

                    </View>
                </View>
            </View>

          </View>
         
          <View style={line}></View>

          <View style={CONTAINER2}>
              <View>
                <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Copy of License" />
                <Text style={{...TITLE3, ...TITLE_WRAPPER3}} text="Upload a Copy of License" />
                <TouchableHighlight onPress={()=>{}}>
                  <View>
                   <Image source={uploadLogo} style={logo} />
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
              text="Complete"
              onPress={nextScreen}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  },
)
