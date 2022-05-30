import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import CalenderPicker from "react-native-calendar-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { CheckBox } from "react-native";




function App() {
  const [cdate, setdate] = useState(null);
  const [cmonth, setmonth] = useState(null);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  
  // For Fajr UseSates
  const [CheckFajrInd, setFajrInd] = useState(false);
  const [CheckFajrCon, setFajrCon] = useState(false);
  // For Duhur UseSates
  const [CheckDuhInd, setDuhInd] = useState(false);
  const [CheckDuhCon, setDuhCon] = useState(false);
  // For Asr UseSates
  const [CheckAsrInd, setAsrInd] = useState(false);
  const [CheckAsrCon, setAsrCon] = useState(false);
  // For Magrib UseSates
  const [CheckMagInd, setMagInd] = useState(false);
  const [CheckMagCon, setMagCon] = useState(false);
  // For Isha UseSates
  const [CheckIshInd, setIshInd] = useState(false);
  const [CheckIshCon, setIshCon] = useState(false);
  
  //window.onload=addItem();
  const CongFunction=(newValue, prayer)=>{
    let p =new Promise((resolve,reject)=>{
      if(congregation(newValue, prayer)){
      resolve(
        addItem()
      )}
      else{
      reject(()=>{console.log("error")})}
    })
    p.then(
      ()=>addItem()
      ).catch((error)=>console.log("Some error "+error))
  }

  // start of congregation prayer checkBox Function
   function congregation(newValue, prayer) {
    
      if (prayer == "fajr") {
        setFajrCon(newValue);
      
        if (newValue == true) {
          if (CheckFajrInd == true) {
            setFajrInd(false);
          }
        }
      } //end of if
      else if (prayer == "duhur") {
        setDuhCon(newValue);
        if (newValue == true) {
          if (CheckDuhInd == true) {
            setDuhInd(false);
          }
        }
      } //end of else if
      else if (prayer == "asr") {
        setAsrCon(newValue);
        if (newValue == true) {
          if (CheckAsrInd == true) {
            setAsrInd(false);
          }
        }
      } //end of else if
      else if (prayer == "magrib") {
        setMagCon(newValue);
        if (newValue == true) {
          if (CheckMagInd == true) {
            setMagInd(false);
          }
        }
      } //end of else if
      else if (prayer == "isha") {
        setIshCon(newValue);
        if (newValue == true) {
          if (CheckIshInd == true) {
            setIshInd(false);
          }
        }
      }
    //end of else if
    
  }//End of congregation prayer checkbox function

  //Start of Indvidual prayer checkBox Function

  function individual(newValue, prayer) {
    if (prayer == "fajr") {
      setFajrInd(newValue);
      
      if (newValue == true) {
        if (CheckFajrCon == true) {
          setFajrCon(false);
          
        }
      }
    } //end of if
    else if (prayer == "duhur") {
      setDuhInd(newValue);
      
      if (newValue == true) {
        if (CheckDuhCon == true) {
          setDuhCon(false);
        }
      }
    } //end of else if
    else if (prayer == "asr") {
      setAsrInd(newValue);
      
      if (newValue == true) {
        if (CheckAsrCon == true) {
          setAsrCon(false);
        }
      }
    } //end of else if
    else if (prayer == "magrib") {
      setMagInd(newValue);
      
      if (newValue == true) {
        if (CheckMagCon == true) {
          setMagCon(false);
        }
      }
    } //end of else if
    else if (prayer == "isha") {
      setIshInd(newValue);
      
      if (newValue == true) {
        if (CheckIshCon == true) {
          setIshCon(false);
        }
      }
    }
     //end of else if
  } //end of Indvidual prayer checkBox Function

  function addItem () {
    //var time = new Date();
    let [date, month] = [cdate, monthNames[cmonth]];
    AsyncStorage.setItem(
      month + date,
      JSON.stringify({
        Individual: {
          fajr: CheckFajrInd,
          duhur: CheckDuhInd,
          asr: CheckAsrInd,
          magrib: CheckMagInd,
          isha: CheckIshInd
        },
        Congregation: {
          fajr: CheckFajrCon,
          duhur: CheckDuhCon,
          asr: CheckAsrCon,
          magrib: CheckMagCon,
          isha: CheckIshCon
        },
      })
    );
  };
  const getValues=()=>{
    AsyncStorage.removeItem("NaN");
    var obj=AsyncStorage.getAllKeys();
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
          let key = store[i][0];
          let value = store[i][1];
          console.log(key+" "+value);
          
        });
      });
      
    });
    //obj=(resolve,reject)
    console.log(obj);
}
  return (
    <View style={styles.container}>
      <View style={styles.containerCalender}>
        <CalenderPicker
          previousTitle="<"
          nextTitle=">"
          selectedDayColor="black"
          selectedDayTextColor="white"
          height={400}
          width={400}
          allowBackwardRangeSelect={false}
          maxDate={new Date()}
          onDateChange={(date) => {setdate(date.date()),setmonth(date.month()),addItem()}}
          textStyle={{
            fontWeight: "bold",
          }}
        />
        <Text>Selected Date is : {cdate}</Text>
      </View>
      
      {/* For Fajr prayer */}
      <View style={{ flexDirection: "row", alignSelf: "center", margin: 5,flex:0.1,marginBottom:0,paddingBottom:5 }}>
        <CheckBox
          disabled={false}
          value={CheckFajrInd}
          onValueChange={(newValue) => {individual(newValue,'fajr')}}
          style={styles.container_checkBox}
        />
        <CheckBox
          disabled={false}
          value={CheckFajrCon}
          onValueChange={(newValue) =>{congregation(newValue,'fajr')}}
          style={styles.container_checkBox}
        />
      </View>
      {/* For Duhur Prayer */}
      <View style={{ flexDirection: "row", alignSelf: "center", margin: 5,flex:0.1  }}>
        <CheckBox
          disabled={false}
          value={CheckDuhInd}
          onValueChange={
            (newValue) => {individual(newValue,'duhur')
          }
        }
          style={styles.container_checkBox}
        />
        <CheckBox
          disabled={false}
          value={CheckDuhCon}
          onValueChange={(newValue) =>{congregation(newValue,'duhur')}}
          style={styles.container_checkBox}
        />
      </View>
      {/* For Asr Prayer */}
      <View style={{ flexDirection: "row", alignSelf: "center", margin: 5,flex:0.1  }}>
        <CheckBox
          disabled={false}
          value={CheckAsrInd}
          onValueChange={(newValue) =>{individual(newValue,'asr')}}
          style={styles.container_checkBox}
        />
        <CheckBox
          disabled={false}
          value={CheckAsrCon}
          onValueChange={(newValue) =>{congregation(newValue,'asr')}}
          style={styles.container_checkBox}
        />
      </View>
      {/* For Magrib Prayer */}
      <View style={{ flexDirection: "row", alignSelf: "center", margin: 5,flex:0.1  }}>
        <CheckBox
          disabled={false}
          value={CheckMagInd}
          onValueChange={(newValue) => {individual(newValue,'magrib')}}
          style={styles.container_checkBox}
        />
        <CheckBox
          disabled={false}
          value={CheckMagCon}
          onValueChange={(newValue) => {congregation(newValue,'magrib')}}
          style={styles.container_checkBox}
        />
      </View>
      {/* For Isha Prayer */}
      <View style={{ flexDirection: "row", alignSelf: "center", margin: 5,flex:0.1  }}>
        <CheckBox
          disabled={false}
          value={CheckIshInd}
          onValueChange={(newValue) =>{individual(newValue,'isha')}}
          style={styles.container_checkBox}
        />
        <CheckBox
          disabled={false}
          value={CheckIshCon}
          onValueChange={(newValue) => {congregation(newValue,'isha')}}
          style={styles.container_checkBox}
        />
        {addItem()} 
        {/* <Button onPress={()=>{console.log(AsyncStorage.getAllKeys()),AsyncStorage.removeItem("NaN")}}>Press me</Button> */}
        <Button onPress={()=>{getValues()}}>Press me</Button>
        {/* {getValues()} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCalender: {
    flex: 0.5,
  },
  container_checkBox: {
    margin: 15,
    alignItems:"flex-end"
  },
  View_checkBox:{
    flex:0.2,
  }
});
export default App;
