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
import { Button, Screen, Text, GradientBackground, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"

const img = require("./token_image.png")

const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const CONTAINER2: ViewStyle = {
  marginTop: 10,
  backgroundColor: "#404040",
  height: 620,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
  flex: 1,
  paddingBottom: 30,
}

const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}

const TEXT2: TextStyle = {
  color: color.palette.lightGrey,
  fontFamily: typography.primary,
  textAlign: "center",
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

const TITLE_WRAPPER4: ViewStyle = {
  ...TEXT2,
  borderWidth: 2,
  borderRadius: 5,
  borderColor: color.palette.white,
  width: 150,
}

const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
  lineHeight: 40,
  marginTop: 10,
  textAlign: "center",
}

const TITLE2: TextStyle = {
  ...TEXT,
  fontSize: 20,
  lineHeight: 40,
  textAlign: "center",
}

const TITLE3: TextStyle = {
  fontSize: 22,
  lineHeight: 20,
  textAlign: "center",
}

const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[3],
  backgroundColor: color.primary,
  borderRadius: 10,
  width: 150,
  marginTop: 10,
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 20,
}

const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[5],
  paddingHorizontal: spacing[8],
}

const line: TextStyle = {
  borderBottomColor: color.palette.lightGrey,
  borderBottomWidth: 1,
  paddingVertical: spacing[3],
}

const row: ViewStyle = {
  flexDirection: "row",
}

const left: ViewStyle = {
  // backgroundColor: 'red',
  flex: 1,
  paddingHorizontal: 8,
}

const middle: ViewStyle = {
  // backgroundColor: 'blue',
  flex: 1,
  paddingHorizontal: 8,
}

const right: ViewStyle = {
  // backgroundColor: 'green',
  flex: 1,
  paddingHorizontal: 8,
}

const logo: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 150,
  height: 150,
}

const x: ViewStyle = {
  marginTop: 70,
}

const y: ViewStyle = {
  marginTop: 15,
}

const z: ViewStyle = {
    marginTop: 50,
  }

export const bnScreen: FC<StackScreenProps<NavigatorParamList, "BuyNAM">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("Staking")

    return (
      <View testID="BuyNamScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />

        <Screen preset="scroll" backgroundColor={color.transparent}>
          <View style={CONTAINER}>
            <Text style={TITLE} text="Buy Tokens" />

            <View style={CONTAINER2}>
              <View>
                <Image source={img} style={logo} />
              </View>
              <Text style={TITLE2} text="Enter the Amount here" />

              <View style={z}>
                <Text style={TITLE3} text="NAM" />
              </View>

              <View style={y}>
                <TextInput
                  style={TITLE_WRAPPER4}
                  placeholder="EX:200"
                  placeholderTextColor="#939AA4"
                />
              </View>

              <View style={x}>
                <Text style={TITLE} text="0.004 UST" />
              </View>

              <Button
                testID="next-screen-button"
                style={CONTINUE}
                textStyle={CONTINUE_TEXT}
                text="Buy"
                onPress={nextScreen}
              />
            </View>
          </View>
        </Screen>
      </View>
    )
  },
)
