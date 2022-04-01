import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:0.6}}/>
      <Text style={{textAlign:"center",alignItems: 'center',justifyContent: 'center',fontStyle:"normal",fontFamily:"sans-serif",fontSize:25,fontWeight:"bold"}}>PFTP</Text>
      <Text style={{textAlign:"center",fontStyle:"normal",fontFamily:"sans-serif",fontSize:15,alignItems: 'center',justifyContent: 'center',fontSize:12}}>Please sign in to your account</Text>
      <View style={{flex:0.1}}/>
      <View style={{flex:0.5}}>
        <Text style={{paddingLeft:20,marginLeft:20,textAlign:"left",fontWeight:"bold"}}>Email</Text>
        <TextInput style={{paddingLeft:20,marginLeft:30,marginRight:30,marginTop:12,height:40,borderWidth:0.25,borderRadius:25}} placeholder="Enter Your Email.."></TextInput>
      </View>

      <View style={{flex:2.5}}>
        <Text style={{paddingLeft:20,marginLeft:20,textAlign:"left",fontWeight:"bold"}}>Password</Text>
        <TextInput style={{paddingLeft:20,marginLeft:30,marginRight:30,marginTop:12,height:40,borderWidth:0.25,borderRadius:25}} placeholder="Enter Your Password.."></TextInput>
        <Text style={{padding:20,marginRight:30,textAlign:"right",fontSize:12,color:"#745dea"}}>Forgot your password ?</Text>
        <TouchableOpacity style={{marginLeft: 30,width:"80%"}}>
    <Button title='Sign in' borderRadius={25} color={"lightgreen"}></Button>
</TouchableOpacity>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  button:{
    borderRadius:25,
  }
});
