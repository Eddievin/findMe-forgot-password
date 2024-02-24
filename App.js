import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.mainContainer}>
    <SafeAreaView>
        <View style={styles.pageHeader}>
        <TouchableOpacity><MaterialIcons style={styles.icon} name="arrow-back"  /></TouchableOpacity>
          <Text style={styles.signUpText}>Sign Up</Text>
          <TouchableOpacity><MaterialIcons style={styles.icon} name="close"  /></TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.imageContainer}>
      <Image 
      source = {require('./assets/img1.png')}
      style={{height:'40%', width:'40%', resizeMode: 'contain',}}
       />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  //Header
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5%",
  },
  icon:{
    fontSize:30,
    fontWeight:'bold',
  },

  //Image
  imageContainer:{
alignItems:'center',
  },
 
});
