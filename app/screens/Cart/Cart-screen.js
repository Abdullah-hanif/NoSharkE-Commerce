import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { color, spacing, typography } from "../../theme"

export const CartScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> My Order</Text>
      <View style={styles.Cart}>

        <Image source={require("./shoe.jpg")} style={styles.pic} />

        <View style={styles.Cl} >
          <Text> this is card view</Text>
          <Text style={styles.gap} > $35</Text>
          <View style={styles.gapverticle}>
            <Text style={styles.minus}>-</Text>
            <Text style={styles.txt}>1</Text>
            <Text style={styles.minus}>+</Text>
          </View>
        </View>

      </View>

      <View style={styles.Cart}>

        <Image source={require("./shoe.jpg")} style={styles.pic} />

        <View style={styles.Cl} >
          <Text> this is card view</Text>
          <Text style={styles.gap} > $35</Text>
          <View style={styles.gapverticle}>
            <Text style={styles.minus}>-</Text>
            <Text style={styles.txt}>1</Text>
            <Text style={styles.minus}>+</Text>
          </View>
        </View>

      </View>

      <View style={styles.footer}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <View style={styles.textContainer}>
    <View style={{marginVertical:22}}>
      <Text style={{color:color.text,marginHorizontal:20}}>
        Total Amount
      </Text>
    </View>
    <View style={{}}>
      <Text style={{color:color.text,marginHorizontal:20,fontSize:20,fontWeight:'900',marginTop:-16}}>$764.93</Text>
    </View>
    </View>
   
<TouchableOpacity
 onPress={() => navigation.navigate("Checkout")}
style={styles.checkOutBtn}>
  <Text style={{color:color.text,textAlignVertical:'bottom'}}>Checkout</Text>
</TouchableOpacity>
   
   </View>
      </View>
    </View>
  )
}

{/* 

        <View style={styles.Cls} >
         
        
<View>
<Text style={styles.txtcolor}> The Totle Amount</Text>
</View>
<View style={styles.ver}>
<Text style={styles.gaps} > $763.29</Text>
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate("Checkout")}
  >
    <Text style={styles.btn}>Check Out</Text>
  </TouchableOpacity>
</View>
</View> */}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  text: {
    marginTop: 40,
    color: color.palette.white,
  },
  Cart: {
    marginTop: 5,
    width: "100%",
    height: 130,
    backgroundColor: "#404040",
    border: 1,
    borderRadius: 20,
    flexDirection: "row",

  },

  pic: {
    height: 80,
    width: "20%",
    marginLeft: 10,
    marginTop: 5,
    border: 1,
    borderRadius: 20

  },
  Cl: {
    flexDirection: "column",
  },
  gap: {
    marginTop: 20,
    marginLeft: 3,
  },
  gapverticle: {
    flexDirection: "row",
  },
  minus: {
    borderRadius: 360,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 15,
    color: "white",
    fontWeight: "bold",
    backgroundColor: color.background,
    marginLeft: 10,
  },
  txt: {

    fontSize: 18,
    marginLeft: 3,
    fontWeight: "bold",
  },
  footer: {
    
    width: "100%",
    height: 130,
    backgroundColor: "#404040",
    border: 1,
    borderRadius: 1,
    flexDirection:'column',
   marginVertical:'40%'

  },
  Cls: {
    flexDirection: "column",
    // marginLeft: 10,
    alignContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: 20,
  },
  gaps: {
    marginTop: 1,
    marginLeft: 3,
    color: "white",
    fontSize: 25,
    marginRight:90,
  },
  txtcolor: {
    color: "white",
    fontSize: 13,
    alignSelf:'flex-start',
    marginHorizontal:15
  },
  ver: {
    flexDirection: "row",
    marginLeft:25,
  },
  btn: {
    fontSize: 20,
     borderRadius: 20,
    backgroundColor: color.primary,
    color:"white",
    paddingLeft:15,
    paddingTop:9,
    height:50,
  

  },
  checkOutBtn:{
      backgroundColor:color.primary,
      width:'35%',
    height:'65%',
    borderRadius:50,
    alignItems:'center',
    alignSelf:'flex-end',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
     
  }
})
