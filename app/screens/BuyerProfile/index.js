import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

import { color } from '../../theme';

export const BuyerScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginTop:50 ,display:'flex',flexDirection:'row',marginLeft:20}}>
<View>
<TouchableOpacity onPress={() => { navigation.navigate('Marketplace')
  }}>
 <Image source={require('../../assets/arrowleft.png')} style={{width:10,height:20,marginLeft:10,marginTop:30}}/>  
 </TouchableOpacity>
 </View>
         <View>
        <Image source={require('../../assets/buyerprofile.png')} style={{width:80,height:80,marginLeft:30}}/>  
        </View>
        <View>
        <Text style={{color:color.text , marginLeft:30,marginTop:25, fontSize:30}}>Jhon Willam</Text>
        </View>
            </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
mainContainer:{
  backgroundColor: color.background,
  flex: 1,
}

})