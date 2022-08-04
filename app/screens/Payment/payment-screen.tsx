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

const uploadLogo1 = require("./SHOE.png")
const uploadLogo2 = require("./pick_icon.png")
const uploadLogo3 = require("./dot_icon.png")

const div = require("./div2.png")

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  marginTop: 20,
  paddingHorizontal: 18,
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
  ...TEXT2,
  ...BOLD,
  textAlign: "left",
  borderBottomWidth: 2,
  paddingBottom: 10,
  borderBottomColor: "#4E4E4C",
  fontSize: 15,
}
const TITLE_WRAPPER5: TextStyle = {
  ...TEXT,
  ...BOLD,
  marginBottom: 20,
  fontSize: 16,
  textAlign: "left",
}

const TITLE_WRAPPER4_1: TextStyle = {
    ...TEXT2,
    ...BOLD,
    textAlign: "left",
    marginBottom: 15,
    fontSize: 13,
  }

const TITLE_WRAPPER5_1: TextStyle = {
    ...TEXT,
    ...BOLD,
    marginBottom: 15,
    fontSize: 18,
    textAlign: "left",
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
  ...TEXT,
  textAlign: "left",
  marginTop: 15,
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
  borderColor: color.palette.white,
  borderWidth: 1,
  borderRadius: 15,
  marginTop: 15,
  marginBottom: 20,
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
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[3],
  backgroundColor: color.primary,
  borderRadius: 30,
  width: 170,
  marginTop: 30,
  marginLeft: 90,
  marginBottom: 30,
}

const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  fontSize: 15,
  ...BOLD,
}

const CONTINUE_TEXT2: TextStyle = {
  color: color.palette.white,
  fontSize: 15,
}

const row: ViewStyle = {
  flexDirection: "row",
  marginTop: 20,
}

const left: ViewStyle = {
  flex: 0.7,
  marginRight: 25,
  marginLeft:5,
  
}

const right: ViewStyle = {
  flex: 1,
}

const logo: ImageStyle = {
  alignSelf: "center",

}

const logo3: ImageStyle = {
    // alignSelf: "center",
    marginRight: 20,  
  }

const logo2: ImageStyle = {
  alignSelf: "center",
  width: 360,
  height: 80,
}

export const payScreen: FC<StackScreenProps<NavigatorParamList, "Payment">> = observer(
  ({ navigation }) => {
    const nextScreen = () =>{
       navigation.navigate("QuoteRequest")}

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
            <Text style={TITLE_WRAPPER6} text="Payment Method" />

            <TouchableHighlight onPress={() => {}}>
              <View style={{ ...row, ...CONTINUE2 }}>
                <Image source={uploadLogo3} style={logo3} />
                <Text style={CONTINUE_TEXT2} text="UST" />
              </View>
            </TouchableHighlight>

            <Text style={TITLE_WRAPPER6} text="Payment Details" />

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Name of Product" />
              <Text style={TITLE_WRAPPER4} text="Lorem Ipsum" />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Price" />
              <Text style={TITLE_WRAPPER4} text="$381.99." />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER5} text="Category" />
              <Text style={TITLE_WRAPPER4} text="Lorem Ipsum" />
            </View>

            <View style={{ ...row, ...x }}>
              <View style={left}>
                <Image source={uploadLogo1} style={logo} />
              </View>

              <View style={right}>
                <Text style={TITLE_WRAPPER5_1} text="Lorem Ipsum" />
                <Text style={TITLE_WRAPPER4_1} text="isjij sdifsoidu, ajsijasdo asidj ioa fsoid ufois diofu soid ufoisud fouso hasvdja..." />
                <Text style={TITLE_WRAPPER5_1} text="US $381.99" />
              </View>
            </View>

            <Button
              testID="next-screen-button"
              style={CONTINUE3}
              textStyle={CONTINUE_TEXT}
              text="Place Order"
              onPress={nextScreen}
            />
          </View>
        </Screen>
      </View>
    )
  },
)
