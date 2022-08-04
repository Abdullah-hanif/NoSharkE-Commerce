import React from "react"
import { View, Text, SafeAreaView, StyleSheet, Image ,TextInput} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { color } from "../../theme"
// import Icon from "react-native-vector-icons/AntDesign"

export const DmsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.cart}>
        <Image source={require("../shippers/1.jpeg")} style={styles.img} />
        <Text style={styles.txt1}>Farhan Khan</Text>
        <Text style={styles.txt2}>.Online</Text>
      </View>
      <View style={styles.To}>
        <View style={styles.line}></View>
        <View style={styles.txt3}>
        <Text style={{color:color.text,alignSelf:'center'}}>Today</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View>
        <View style={styles.cn}>
          <Text style={styles.msg}>Hey How are you</Text>
        </View>
       
        <View style={{marginBottom:10,marginLeft:20,paddingBottom:0}}>
          <Text style={styles.timing}>12:50 PM</Text>
          </View>
        <View>


         <Text style={styles.msgL}>I am fine thank you</Text>
        </View>
        <Text style={styles.timingL}>06:50 AM</Text>
        <View style={styles.cn}>
          <Text style={styles.msg}>Hey How are you</Text>
        </View>
        <View style={{marginBottom:10,marginLeft:20,paddingBottom:0,paddingTop:0}}>
        <Text style={styles.timing}> 2 mint ago</Text>
        </View>
        <Text style={styles.msgL}>I am fine thank you</Text>
        <Text style={styles.timingL}>Just Now</Text>
      </View>
      </View>
      <View style={styles.cart1}>
        <View>
        <TextInput placeholder="please Type Something..." placeholderTextColor="white"  style={{backgroundColor:color.background,marginLeft:10,marginTop:15}} />
        </View>
        <View style={styles.snd}>
          <TouchableOpacity onPress={() => navigation.navigate("BuyerProfile")} style={{width:40,height:40,}}   >
          <Image source={require('../../assets/sendArrow.png')} style={{width:20,height:20,marginTop:10,alignSelf:'center'}}/>
        </TouchableOpacity> 
        </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: 'space-between',
  },
  img: {
    border: 1,
    borderRadius: 360,
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  txt1: {
    color: "white",
    marginLeft: 10,
  },
  txt2: {
    color: "green",
    marginLeft: 10,
  },
  txt3: {
    color: "white",
    height: 30,
    width: "30%",
    border: 1,
    borderRadius:50,
    borderColor: color.background,
    backgroundColor: color.background,
    paddingTop: 5,
    
  },
  cart: {
    height: 50,
    width: "100%",
    border: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: color.background,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
  },
  cart1: {

    justifyContent:'space-between',
    height: 70,
    flexDirection:'row',
    width: "100%",
    backgroundColor: color.background,
    //justifyContent: "center",
    
    
    
  },
  line: {
    backgroundColor: color.background,
    height: 3,
    width: "45%",
  },
  To: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",

  },
  msg: {
    color: "white",
  },
  msgL: {
    backgroundColor: color.storybookDarkBg,
    color:color.text,
    alignSelf: 'flex-end',
    padding: 12,
 marginHorizontal:20,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
  },
  timing: {
    color: "white",
    marginTop: 8,
    fontSize:10,
    
  },
  timingL: {
    color: "white",
    alignSelf: 'flex-end',
    marginTop: 10,
    fontSize:10,
    marginRight:20
  },
  snd: {
    marginBottom:10,
    borderRadius: 360,
    alignSelf:'flex-end',
 

    backgroundColor: color.primary,
  },
  cn: {
    backgroundColor: color.primary,
    alignSelf: 'flex-start',
    padding: 12,
 marginHorizontal:20,
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  }
})
