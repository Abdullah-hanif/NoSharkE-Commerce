import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native"
import { color, spacing, typography } from "../../theme"

export const ProductScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image source={require("./shoe.png")} style={styles.pic} />

                <View >
                    <View style={styles.bar}>
                        <View style={styles.bar1}></View>
                        <View style={styles.bar2}></View>
                        <View style={styles.bar3}></View>
                    </View>
                    <Text style={{ marginTop: 30, marginLeft: 25, color: "white", fontSize: 18, }}> Lorem Ipsum Dolar Sit </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("./logo.png")} style={{ width: 30, height: 30, marginTop: 10, marginLeft: 25 }} />
                        <Text style={{ color: "white", marginTop: 15, marginLeft: 4 }}> Authrized my AMD desier lorem ipsum dolor dir</Text>
                    </View>

                    <Text style={{ color: "white", fontSize: 25, marginLeft: 25, marginTop: 25, fontWeight: "bold" }}>$381.00</Text>
                    {/* <View style={{ backgroundColor: "white", width: "100%", height: 1, }}></View> */}
                    {/* <Text style={{ color: "white", marginLeft: 130, marginTop: 7 }}> Public Sale Is Open</Text> */}
                    <View style={{
                        flexDirection: "row",
                        width: '50%',
                        alignSelf: 'center',

                        marginTop: 10, backgroundColor: '#404040'
                    }}>
                        {/* <View style={styles.number}>
                            <Text style={styles.text}>3</Text>
                            <Text style={styles.day}>Days</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.number}>
                            <Text style={styles.text}> 8</Text>
                            <Text style={styles.day}>hours</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.number}>
                            <Text style={styles.text}> 34</Text>
                            <Text style={styles.day}>Mins</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.number}>
                            <Text style={styles.text}> 12</Text>
                            <Text style={styles.day}>SECS</Text>
                        </View> */}
                    </View>
                    {/* <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("mint")}
                    >
                        <Text style={styles.btn}>Mint Now</Text>
                    </TouchableOpacity> */}

                    <View style={{ backgroundColor: "white", width: "100%", height: 1, marginTop: 10 }}></View>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => navigation.navigate("Payment")}
                    >
                        <Text style={styles.btn2}>Buy It Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button3}
                        onPress={() => navigation.navigate("Cart")}
                    >
                       <View style={styles.btn3}>
                        <Text  style={{ textAlignVertical:'center',alignContent:'center',marginLeft:35,color:'white'}}>Add To Cart</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },

    pic: {
        marginTop: 50,
        width: "100%",
        height: 300,
    },
    btn: {
        fontSize: 15,
        borderRadius: 10,
        backgroundColor: "#33D7B4",
        color: "white",
        paddingLeft: 30,
        paddingTop: 9,
        height: 40,


    },
    button: {
        alignContent: "center",
        borderRadius: 20,
        marginTop: 15,
        paddingLeft: 20,
        width: 140,
        marginLeft: 110,

    },
    button2: {
        alignContent: "center",
        borderRadius: 30,
        marginTop: 15,
        paddingLeft: 40,
        height: 50,
        width: "70%",
        marginLeft: 60,
        backgroundColor: color.primary
    },
    btn2: {
        fontSize: 20,
        borderRadius: 10,
        // backgroundColor: "#33D7B4",
        color: "white",
        alignSelf:'center',
        paddingTop: 9,
        height: 50,
        marginRight:30,
        


    },
    button3: {
        
        alignSelf:'center',
        borderRadius: 30,
        borderColor: color.primary,
        borderWidth: 2,
        marginTop: 15,
        paddingLeft: 40,
        height: 50,
        width: "70%",
        alignItems:'center'
        


    },
    btn3: {
        fontSize: 20,
        borderRadius: 10,
        // backgroundColor: "#33D7B4",
        width: "90%",
        
        paddingTop: 16,
        
        borderColor: color.primary,
        
    },
    line: {
        backgroundColor: color.line,
        width: 1,
        height: 30,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        marginLeft: -20,
        fontWeight: "bold",

    },
    number: {
        height: 40, width: '25%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    day: {
        color: "white",
        fontSize: 10,
        marginLeft: 19,

    },
    bar: {
     
        flexDirection:"row",
        alignSelf: "center",
        alignContent: "center",
    },
    bar1: {
        flexDirection: "row",
        width: "10%",
        height: 5,
        marginLeft:2,
        backgroundColor: color.primary,
    },  
      bar2: {
          marginLeft:2,
        flexDirection: "row",
        width: "10%",
        height: 5,
        backgroundColor: "white",
    },
        bar3: {
            marginLeft:2,
        flexDirection: "row",
        width: "10%",
        height: 5,
        backgroundColor: "white",
    },
});