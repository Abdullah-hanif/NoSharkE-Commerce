import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, TouchableOpacity } from "react-native"
import React from "react"
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from "../../theme"
import { ScrollView, TextInput } from "react-native-gesture-handler"


export const MarketPlace = ({ navigation }) => {
  const PopularCategories = [
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/joggers.png"),
    },
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/blackShirt.png"),
    },
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/trouser.png"),
    },
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/joggers.png"),
    },
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/blackShirt.png"),
    },
    {
      ItemName: "stacker Shoes",
      image: require("../../assets/trouser.png"),
    },
  ]

  const MainCategories = [
    {
      image: require("../../assets/newShoes.png"),
      ItemName: "stacker Shoes",
      details: "hellow please by mee im awsome",
      price: "US $300.81",
    },
    {
      image: require("../../assets/newShoes.png"),
      ItemName: "stacker Shoes",
      details: "hellow please by mee im awsome",
      price: "US $300.81",
    },
    {
      image: require("../../assets/newShoes.png"),
      ItemName: "stacker Shoes",
      details: "hellow please by mee im awsome",
      price: "US $$300.81",
    },
    {
      image: require("../../assets/newShoes.png"),
      ItemName: "stacker Shoes",
      details: "hellow please  im awsome",
      price: "US $300.81",
    },
    {
      image: require("../../assets/newShoes.png"),
      ItemName: "stacker Shoes",
      details: "hellow please by mee im awsome so please buy me",
      price: "US  $200.9",
    },
  ]
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 30 ,flexDirection:'row',justifyContent:'space-between'}}>
        <View>
    

        <TextInput
          placeholder="Search here"
          placeholderTextColor={color.text}
          style={styles.InputStyle}
        />
        </View>
        <TouchableOpacity style={{}} onPress={() => { navigation.navigate('BuyerProfile')
  }}>
        <Image source={require('../../assets/buyerprofile.png')} style={{width:45,height:45,borderRadius:360}}/>
        </TouchableOpacity>

      </View>
      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <Text style={{ color: color.text, fontSize: 23 }}>Explore Popular categories</Text>
      </View> 
      <View>
        <FlatList
          horizontal
          data={PopularCategories}
          renderItem={({ item }) => {
            return (
              <View style={{ marginTop: 20, paddingLeft: 20 }}>
                <TouchableHighlight onPress={() => navigation.navigate("ProductPage")}>
                  <Image source={item.image} style={styles.image} />
                </TouchableHighlight>

                <Text style={{ color: color.text, marginLeft: 5 }}> {item.ItemName}</Text>
              </View>
            )
          }}
        />
        <View style={{ marginTop: 0, marginBottom: 300 }}>
          <FlatList
            horizontal
            data={PopularCategories}
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: 10, paddingLeft: 20 }}>
                  <TouchableHighlight onPress={() => navigation.navigate("ProductPage")}>
                    <Image source={item.image} style={styles.image} />
                  </TouchableHighlight>

                  <Text style={{ color: color.text, marginLeft: 5 }}> {item.ItemName}</Text>
                </View>
              )
            }}
          />
        </View>
      </View>

      <View style={{ marginBottom: 700, marginVertical: -260, paddingHorizontal: 20 }}>
        <View>
          <Text style={{ color: color.text, fontSize: 25, fontWeight: "bold" }}>
            pick of the day
          </Text>
        </View>
        {/* flat list================== */}
        <View style={{ marginTop: 10, marginVertical: 40 }}>
          <FlatList
            horizontal
            data={MainCategories}
            renderItem={({ item }) => {
              return (
                <View style={{ marginTop: 0, paddingLeft: 20, flex: 1 }}>
                  <TouchableHighlight onPress={() => navigation.navigate("ProductPage")}>
                    <Image source={item.image} style={{ width: 180, height: 180 }} />
                  </TouchableHighlight>

                  <Text style={{ color: color.text, marginLeft: 0, fontSize: 20 }}>
                    {" "}
                    {item.ItemName}
                  </Text>
                  <View>
                    <Text style={{ color: color.dim, aspectRatio: 3 }}> {item.details}</Text>
                  </View>
                  <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: color.text, fontSize: 25 }}>{item.price}</Text>
                  </View>
                </View>
              )
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
  },
  InputStyle: {
    backgroundColor: "#404040",
    width: '220%',
    marginHorizontal:10,
     paddingHorizontal: 20,
    borderRadius: 23,
    color: color.text,
    height: 40,
  },
  image: { width: 100, height: 100, borderRadius: 100 },
})
