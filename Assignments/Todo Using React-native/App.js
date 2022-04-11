import react,{useState} from 'react';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';


 const App=()=> {
  
   let [itemcount,setitemcount]=useState(0);
   let [uncheckedcount,setuncheckedcount]=useState(0);

   let [data,setdata]=useState(new Array);
   let [Odata,setOdata]=useState(data);
   const addElement=()=>{
     var newArray=[...data,{id:itemcount,title:"New Item"}];
     setitemcount(itemcount+1);
    setuncheckedcount(uncheckedcount+1);

     setOdata(newArray);
     setdata(newArray);
   }
   const removeElement=()=>{
     if(data.length>0){
       data.pop();
   
  } var newArray=[...data];
    setOdata(newArray);
    setdata(newArray);
    if(itemcount>0){
    setitemcount(itemcount-1);
    setuncheckedcount(uncheckedcount-1);
  }
  else{
    setitemcount(0);
    setuncheckedcount(0);
  }

    
  }
  return (
    <View style={styles.container}>
      <View style={{flex:1,marginTop:"32px"}}>
      <Text style={{fontWeight:"bold",fontSize:24,fontFamily:"Times new roman"}}>My TODO App</Text>
      </View>
      <View style={{flex:4,flexDirection:"row"}}>
        <Text style={{paddingRight:"55px"}} >Item count :{itemcount}</Text>
        <Text style={{paddingLeft:"55px"}} >Unchecked count :{uncheckedcount}</Text>
      </View>
      <View style={{flex:5,}}>
        <Button  title='New TODO' onPress={addElement}/>
        <Button  title='Remove TODO' onPress={removeElement}/>
        
      </View>
      <View style={{flex:7,marginTop:0,paddingTop:0,flexDirection:"row",alignItems:"flex-start",backgroundColor:"yellow"}} >
      <FlatList keyExtractor={item=>item.id} style={{alignSelf:"baseline"}}
        data={Odata}
        renderItem={item=>(<Text>{item.item.title}</Text>)}/>
        </View>
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
  item:{
    backgroundColor:"#f9c2ff",
    padding:20,
    marginVertical:8,
    marginHorizontal:16
  },
  title:{
    fontSize:12,
    
  }
});

export default App;