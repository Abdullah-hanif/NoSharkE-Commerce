import React, { FC } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, TouchableHighlight,  } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text, GradientBackground, AutoImage as Image, CustomHeader } from "../../components"
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
  textAlign: "left",
}

const TITLE_WRAPPER2: TextStyle = {
  ...TEXT,
  textAlign: "left",
}


const TITLE_WRAPPER4: TextStyle = {
  ...TEXT2,
  textAlign: "left", 
  borderBottomWidth: 2,
  paddingTop:10,
  paddingBottom:10,
  borderBottomColor: color.palette.lightGrey,
}

const TITLE_WRAPPER5: TextStyle = {
  ...TEXT2,
  textAlign: "left", 
  paddingTop:10,
  paddingBottom:10,
  lineHeight: 25,
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



const x: ViewStyle ={
  paddingVertical: spacing[5],
}


export const ProfileScreen: FC<StackScreenProps<NavigatorParamList, "ShipperProfile">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("???")

    return (
      <View testID="ShipScreen" style={FULL}>
        <GradientBackground colors={[color.background, color.background]} />
        
        <CustomHeader 
          titleStyle = {TITLE_WRAPPER2}
          headerText = "Farhan Khan"
          leftIcon="back2"
          picture={require("./Ellipse.png")}

        />

        <Screen preset="scroll" backgroundColor={color.transparent}>

          <View style={CONTAINER}> 
            <View style={x}>
              <Text style={{...TITLE, ...TITLE_WRAPPER}} text="Shipper Information" />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Company Name" />
              <Text style={TITLE_WRAPPER4} text="Lorem Ipsum" />
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Address" />
              <Text style={TITLE_WRAPPER4} text="Lorem Ipsum"/>
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="Email" />
              <Text style={TITLE_WRAPPER4} text="Lorem Ipsum"/>
            </View>

            <View style={x}>
              <Text style={TITLE_WRAPPER2} text="About us" />
              <Text style={TITLE_WRAPPER5} text="Lorem Ipsum aisudhauish asidusda sdiuahsiudhaius adiushdiuahusid asiudhauisdh auisdhiaushd aisudhiauhsdiua sdaiushiuahsuida sdiuhausihdiuashd aiushdiuash"/>
            </View>
          </View>
         
        </Screen>

      </View>
    )
  },
)
