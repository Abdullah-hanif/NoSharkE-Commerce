import React from "react"
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { color } from "../../theme"
// import Icon from "react-native-vector-icons/AntDesign"

export const ShippersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.txt}>Shippers</Text>
      </View>
      <View style={styles.cartm}>
        <View style={styles.cart}>
          <View>
            <View>
              <Image source={require("../shippers/1.jpeg")} style={styles.img} />
            </View>
            <View style={{alignItems:'center'}}> 
            <Text style={styles.txt1}>Pj's transport Service</Text>
            <Text style={styles.txt1}>Trinity,TX</Text>
            <Image source={require("../../assets/ratingstars.png")}/>
            <Text style={styles.txt1}>31 Month citizenshipper</Text>
            <Text style={styles.txt1}>885 completed shipment</Text>
            <Text style={styles.txt1}>Cancellation rate 0%</Text>
          </View>
          </View>
          <View style={styles.btnCenter}>
          <TouchableOpacity onPress={() => navigation.navigate("dms")} style={styles.btn}>
            <Text style={styles.btxt}>Request Quote</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart}>
          <View>
            <View>
              <Image source={require("../shippers/1.jpeg")} style={styles.img} />
            </View>
            <View style={{alignItems:'center'}}> 
            <Text style={styles.txt1}>Pj's transport Service</Text>
            <Text style={styles.txt1}>Trinity,TX</Text>
            <Image source={require("../../assets/ratingstars.png")}/>
            <Text style={styles.txt1}>31 Month citizenshipper</Text>
            <Text style={styles.txt1}>885 completed shipment</Text>
            <Text style={styles.txt1}>Cancellation rate 0%</Text>
          </View>
          </View>

          <View style={styles.btnCenter}>
          <TouchableOpacity onPress={() => navigation.navigate("dms")} style={styles.btn}>
            <Text style={styles.btxt}>Request Quote</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cartm}>
        <View style={styles.cart}>
          <View>
            <View>
              <Image source={require("../shippers/1.jpeg")} style={styles.img} />
            </View>
            <View style={{alignItems:'center'}}> 
            <Text style={styles.txt1}>Pj's transport Service</Text>
            <Text style={styles.txt1}>Trinity,TX</Text>
            <Image source={require("../../assets/ratingstars.png")}/>
            <Text style={styles.txt1}>31 Month citizenshipper</Text>
            <Text style={styles.txt1}>885 completed shipment</Text>
            <Text style={styles.txt1}>Cancellation rate 0%</Text>
           </View>
          </View>
          <View style={styles.btnCenter}>
          <TouchableOpacity onPress={() => navigation.navigate("dms")} style={styles.btn}>
            <Text style={styles.btxt}>Request Quote</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cart}>
          <View>
            <View>
              <Image source={require("../shippers/1.jpeg")} style={styles.img} />
            </View>
            <View style={{alignItems:'center'}}> 
            <Text style={styles.txt1}>Pj's transport Service</Text>
            <Text style={styles.txt1}>Trinity,TX</Text>
            <Image source={require("../../assets/ratingstars.png")}/>
            <Text style={styles.txt1}>31 Month citizenshipper</Text>
            <Text style={styles.txt1}>885 completed shipment</Text>
            <Text style={styles.txt1}>Cancellation rate 0%</Text>
            </View>
          </View>
          <View style={styles.btnCenter}>
          <TouchableOpacity onPress={() => navigation.navigate("dms")} style={styles.btn}>
            <Text style={styles.btxt}>Request Quote</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
  },
  view: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: color.palette.white,
    fontSize: 20,
    fontWeight: "bold",
  },

  txt1: {
    color: "white",
    marginTop: 5,
  },

  view: {
    alignItems: "center",
    height: 30,
    justifyContent: "center",
  },

  img: {
    border: 11,
    borderRadius: 360,
    height: 50,
    width: 50,
    marginTop: 10,
    alignSelf:'center'
  },
  btnCenter:{
    alignItems:'center',
    marginBottom:10
  },
  btn: {
    backgroundColor: color.primary,
    border: 1,
     width: "78%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  btxt: {
    color: "white",
  },
  cart: {
    height: 265,
    width: "47%",
    border: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: '#404040',
    justifyContent: "center",
    marginHorizontal:5,
    marginTop: 8,
    
  },
  cartm: {
    flexDirection:"row-reverse",
    marginTop:0
  },
})
