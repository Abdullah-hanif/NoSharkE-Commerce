import React from "react"
import { View, Text, SafeAreaView, StyleSheet, TextInput, alert } from "react-native"
import { GradientBackground } from "../../components"
import { color, spacing } from "../../theme"
import { Button } from "../../components"

import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";




export const MintScreen = ({navigation}) => {
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState(null);
    // const [items, setItems] = useState([
    //   {label: 'Apple', value: 'apple'},
    //   {label: 'Banana', value: 'banana'}
    // ]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.txt1}>Upload Item</Text>
            </View>
            <View>
                <Text style={styles.txt2}>Name</Text>
                <TextInput
                    style={styles.input}
                //onChangeText={onChangeText}
                //value={text}
                />
            </View>
            <View>
                <Text style={styles.txt2}>Price</Text>
                <TextInput
                    style={styles.input}
                //onChangeText={onChangeText}
                //value={text}
                />
            </View>
            <View>
                <Text style={styles.txt2}>Catagory</Text>
                
            </View>
            <Text style={styles.txt2}>File Upload</Text>
            <View style={styles.TO}>
                <TextInput
                    style={styles.input1}
                //onChangeText={onChangeText}
                //value={text}
                />
                <TouchableOpacity style={styles.input2}>
                    <Text style={styles.txt3}>Change</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.txt2}>Discription</Text>
                <TextInput
                    style={styles.input3}
                //onChangeText={onChangeText}
                //value={text}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("SellerProfile")} style={styles.btn}>
                <Text style={styles.btntxt}>Submit</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,

    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
    },
    txt1: {
        color: "white",
        marginTop:10,
        fontWeight:"bold",
        fontSize:20,
    },
    txt2: {
        color: "white",
        marginLeft: 15,
        marginTop:10,
        fontWeight:"bold",
        fontSize:15,
    },
    txt3: {
        width: "100%",
        color: "white",
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",

    },
    input1: {
        width: "70%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        marginRight: 0,

    },
    input2: {

        height: 40,
        margin: 12,
        marginLeft: 0,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        paddingHorizontal: 25,
        backgroundColor:"#404040",

    },
    input3: {

        height: 150,
        margin: 12,
        marginLeft: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: "white",
        paddingHorizontal: 25

    },

    TO: {
        flexDirection: "row",

    },
    btn:{
        height:40,
        width:"40%",
        borderWidth:1,
        borderRadius:50,
        // borderColor:"white",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:130,
        backgroundColor:color.primary,
        marginTop:50,

    },
    btntxt:{
        color:"white",
    }

});
