import React, { FC } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  TouchableHighlight,
} from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Button,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
  CustomHeader3,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"

const uploadLogo1 = require("./delivery_icon.png")
const uploadLogo2 = require("./pick_icon.png")
const div = require("./div2.png")

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  marginTop: 15,
  backgroundColor: "#404040",
  height: 480,
  paddingHorizontal: 15,
  flex: 1,
}

const CONTAINER2: ViewStyle = {
  marginTop: 20,
  marginLeft: 15,
  marginRight: 15,
  backgroundColor: "#404040",
  height: 130,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  flex: 1,
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
  textAlign: "left",
}

const TITLE_WRAPPER2: TextStyle = {
  ...TEXT,
  textAlign: "left",
  marginLeft: -150,
}

const TITLE_WRAPPER3: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 18,
  textAlign: "left",
  marginLeft: 10,
}

const TITLE_WRAPPER4: TextStyle = {
  ...TEXT,
  textAlign: "left",
  borderBottomWidth: 2,
  paddingBottom: 10,
  borderBottomColor: "#4E4E4C",
  fontSize: 18,
}

const TITLE_WRAPPERX: TextStyle = {
  ...TEXT,
  textAlign: "left",
  width: 300,
  borderBottomWidth: 2,
  paddingBottom: 10,
  borderBottomColor: "#4E4E4C",
  fontSize: 18,
}

const TITLE_WRAPPER6: TextStyle = {
  ...TEXT2,
  textAlign: "left",
  marginTop: 15,
}

const TITLE_WRAPPER5: TextStyle = {
  ...TEXT2,
  textAlign: "left",
}

const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  lineHeight: 40,
  textAlign: "center",
}

const x: ViewStyle = {
  paddingVertical: spacing[4],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  backgroundColor: color.primary,
  borderRadius: 15,
  width: 170,
  marginTop: 10,
}

const CONTINUE2: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  backgroundColor: "#404040",
  borderColor: color.primary,
  borderWidth: 1,
  borderRadius: 15,
  width: 170,
  marginTop: 10,
}
const CONTINUE4: ViewStyle = {
  // paddingVertical: spacing[3],
  // paddingHorizontal: spacing[3],
  // backgroundColor: "#404040",
  // borderColor: color.primary,
  // borderWidth: 1,
  // borderRadius: 15,
  width: 62.5,
}

const CONTINUE_TEXT4: TextStyle = {
  textAlign: "right",
  borderBottomWidth: 2,
  paddingBottom: 10,
  borderBottomColor: "#4E4E4C",
  fontSize: 18,
  color: color.primary,
}

const CONTINUE3: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  backgroundColor: color.primary,
  borderRadius: 30,
  width: 125,
  marginTop: 30,
  marginLeft: 120,
}

const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  fontSize: 15,
  ...BOLD,
}

const CONTINUE_TEXT2: TextStyle = {
  color: color.palette.lighterGrey,
  fontSize: 15,
  ...BOLD,
}

const row: ViewStyle = {
  flexDirection: "row",
}

const left: ViewStyle = {
  flex: 1,
}

const right: ViewStyle = {
  flex: 1,
}

const logo: ImageStyle = {
  alignSelf: "center",
  width: 20,
  height: 20,
  marginLeft: 30,
  marginRight: 10,
}

const logo2: ImageStyle = {
  alignSelf: "center",
  width: 360,
  height: 80,
}

export const coScreen: FC<StackScreenProps<NavigatorParamList, "Checkout">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("Payment")

    return (
      <View testID="CoScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />

        <CustomHeader3 titleStyle={TITLE_WRAPPER3} headerText="Checkout" leftIcon="back2" />

        <Screen preset="scroll" backgroundColor={color.transparent}>
          <View style={CONTAINER2}>
            <Text style={TITLE_WRAPPER2} text="Complete your order-50%" />

            <Image source={div} style={logo2} />
          </View>

          <View style={CONTAINER}>
            <Text style={TITLE_WRAPPER6} text="Delivery type" />

            <View style={row}>
              <View style={left}>
                <TouchableHighlight onPress={() => {}}>
                  <View style={{ ...row, ...CONTINUE }}>
                    <Image source={uploadLogo1} style={logo} />
                    <Text style={CONTINUE_TEXT} text="Delivery" />
                  </View>
                </TouchableHighlight>
              </View>
              <View style={right}>
                <TouchableHighlight onPress={() => {}}>
                  <View style={{ ...row, ...CONTINUE2 }}>
                    <Image source={uploadLogo2} style={logo} />
                    <Text style={CONTINUE_TEXT2} text="Pickup" />
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Default address" />
              <Text style={TITLE_WRAPPER4} text="8502 Preston Rd. Inglewood" />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Full name" />
              <View style={row}>
                <Text style={TITLE_WRAPPERX} text="Antonio George" />
                <TouchableHighlight onPress={() => {}}>
                  <View style={CONTINUE4}>
                    <Text style={CONTINUE_TEXT4} text="Edit" />
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Email" />
              <Text style={TITLE_WRAPPER4} text="Unknown@gmail.com" />
            </View>

            <Button
              testID="next-screen-button"
              style={CONTINUE3}
              textStyle={CONTINUE_TEXT}
              text="Continue"
              onPress={nextScreen}
            />
          </View>
        </Screen>
      </View>
    )
  },
)
