import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,Platform,h1,br,p ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={{flex:1,marginBottom:0}}>
       <Image style={{width:400,height:400,backgroundColor:"pink",borderRadius:30}} source={require("./assets/pic.png")}></Image>
       <Text style={{fontFamily:"sans-serif",textAlign:"center"}}>Discover Your <br/> Own Dream House</Text>
       
     </View>
    <Text style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br/>
     nisi ut aliquip ex ea commodo consequat
    </Text>
       <View style={{flexDirection:"row",justifyContent:"center",borderRadius:100}}>
           <Button title='Sign in' color="pink"/>
           <Button title='Register' color="lightgrey"/>           
       </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
