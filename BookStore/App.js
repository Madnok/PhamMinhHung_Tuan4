import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <Image source={{uri:''}}></Image>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  view1:{
    backgroundColor:"white",
    width: '100%',
    height: 300 ,
    paddingTop: 30,
  },
 
  
});
