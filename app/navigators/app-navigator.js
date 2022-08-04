/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
import { useColorScheme } from "react-native"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  WelcomeScreen,
  Login,
  SignUp,
  DemoScreen,
  DemoListScreen,
  trScreen,
  driverScreen,
  MintScreen,
  DmsScreen,
  CartScreen,
  StakingScreen,
  Wallet,
  SignUpWallet,
  bnScreen,
  ShippersScreen,
  ProfileScreen2,
  ProfileScreen,
  QuoteScreen,
  coScreen,
  payScreen,
  BuyerScreen,
  ProductScreen,
  MarketPlace,
  kycScreen,
  Sending_screen,
} from "../screens"
import { navigationRef, useBackButtonHandler } from "./navigation-utilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="dms"
    >
      <Stack.Screen name="dms" component={DmsScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="login" component={Login} /> 
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="ConnectWallet" component={Wallet} />
      <Stack.Screen name="ConnectWallet2" component={SignUpWallet} />
      <Stack.Screen name="BuyNAM" component={bnScreen} />
      <Stack.Screen name="Staking" component={StakingScreen} /> 
      <Stack.Screen name="Checkout" component={coScreen} />
      <Stack.Screen name="Payment" component={payScreen} />
      <Stack.Screen name="DriverDetails" component={driverScreen} />
      <Stack.Screen name="TransportRegistration" component={trScreen} />

      <Stack.Screen name="BuyerProfile" component={BuyerScreen} />
      <Stack.Screen name="KYCverification" component={kycScreen} />

      <Stack.Screen name="ShipperProfile" component={ProfileScreen} />
      <Stack.Screen name="shippers" component={ShippersScreen} />
      <Stack.Screen name="SellerProfile" component={ProfileScreen2} />
      <Stack.Screen name="Cart" component={CartScreen} />

      <Stack.Screen name="ProductPage" component={ProductScreen} />
      <Stack.Screen name="QuoteRequest" component={QuoteScreen} />
      {/* <Stack.Screen name="dms" component={DmsScreen} /> */}

      <Stack.Screen name="demoList" component={DemoListScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="mint" component={MintScreen} />
      <Stack.Screen name="Marketplace" component={MarketPlace} />

      <Stack.Screen name="Sending_Request_Screen" component={Sending_screen} />

    </Stack.Navigator>
  )
}

export const AppNavigator = (props) => {
  const colorScheme = useColorScheme()
  useBackButtonHandler(canExit)
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName) => exitRoutes.includes(routeName)
