import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CheckBox } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import ReactApexCharts from 'react-apexcharts';





const CheckBoxPlay = () => {
  const[fajr,setFajr]=useState(false);
  const[duhur,setDuhur]=useState(false);
  const[asr,setAsr]=useState(false);
  const[magrb,setMagrb]=useState(false);
  const[esha,setEsha]=useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.checkboxContainer}>
        <Text style={{fontSize:"45px",marginRight:"90px"}}>الفجر</Text>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>فرد</label>
        <CheckBox
          value={fajr}
          onValueChange={setFajr}
          style={styles.checkbox}
        /></View>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>جماعتِ</label>
        <CheckBox
          value={!fajr}
          onValueChange={setFajr}
          style={styles.checkbox}
        /></View>

      </View>

      <View style={styles.checkboxContainer}>
        <Text style={{fontSize:"45px",marginRight:"95px",}}>ظُهْر </Text>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>فرد</label>
        <CheckBox
          value={duhur}
          onValueChange={setDuhur}
          style={styles.checkbox}
        /></View>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>جماعتِ</label>
        <CheckBox
          value={!duhur}
          onValueChange={setDuhur}
          style={styles.checkbox}
        /></View>

      </View>

      <View style={styles.checkboxContainer}>
        <Text style={{fontSize:"45px",marginRight:"90px"}}>العصر</Text>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>فرد</label>
        <CheckBox
          value={asr}
          onValueChange={setAsr}
          style={styles.checkbox}
        /></View>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>جماعتِ</label>
        <CheckBox
          value={!asr}
          onValueChange={setAsr}
          style={styles.checkbox}
        /></View>

      </View>

      <View style={styles.checkboxContainer}>
        <Text style={{fontSize:"45px",marginRight:"90px"}}>المغرب</Text>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>فرد</label>
        <CheckBox
          value={magrb}
          onValueChange={setMagrb}
          style={styles.checkbox}
        /></View>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>جماعتِ</label>
        <CheckBox
          value={!magrb}
          onValueChange={setMagrb}
          style={styles.checkbox}
        /></View>

      </View>

      <View style={styles.checkboxContainer}>
        <Text style={{fontSize:"45px",marginRight:"90px"}}>العشاء</Text>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>فرد</label>
        <CheckBox
          value={esha}
          onValueChange={setEsha}
          style={styles.checkbox}
        /></View>
        <View style={{width:"50%"}}>
          <label style={{marginBottom:'9px',textAlign:"center",fontSize:'30px'}}>جماعتِ</label>
        <CheckBox
          value={!esha}
          onValueChange={setEsha}
          style={styles.checkbox}
        /></View>

      </View>
    </View>
  );
};

const  Last7Days=()=>{
  const config={
    series:[
      {
        data:[3,5,7,5,7]
      },
    ],
    options:{
      plotOptions:{
        bar:{
          distributed:true,
          horizontal:true,
        }
      },
      dataLabels:{enabled:true},
      xaxis: {
  categories: ['Fajr', 'Duhur', 'Asr', 'Magrib', 'Isha']
},
    }
  }
  return (
  
    <ReactApexCharts options={config.options} width="400" height="400" series={config.series}  type='bar'/>
    
  );
}

const Monthly=()=>{
  const config={
    series: [{
    name: 'Fajr',
    data: [12, 12, 12, 12, 12]
  },{
    name: 'Duhur',
    data: [9, 2, 5, 9, 8]
  }, {
    name: 'Asr',
    data: [12, 5, 1, 9, 12]
  }, {
    name: 'Magrib',
    data: [11, 10, 3, 12, 9]
  }
, {
    name: 'Isha',
    data: [12, 8, 7, 2, 10]
  }],
    options:{
      chart:{stacked:true},
      plotOptions:{
        bar:{
          horizontal:true,
          endingShape:'flat',
        }
      },
      dataLabels:{offsetY: -0,style: {
        fontSize: '12px',
        colors: ["#304758"]}},
      xaxis: {
  categories: ['April 2022', 'March 2022', 'Feb 2022', 'Jan 2022']
}
}
}
  return (
  <View>
    <ReactApexCharts options={config.options} width="400" height="400" series={config.series}  type='bar'/>
    <Text>You offered 116 out of 595</Text>
    </View>
  );
}

const DataRange=()=>{
  const config={
    series:[
      {
        data:[3,5,7,5,7]
      },
    ],
    options:{
      plotOptions:{
        bar:{
          distributed:true,
          horizontal:true,
        }
      },
      dataLabels:{enabled:true},
      xaxis: {
  categories: ['Fajr', 'Duhur', 'Asr', 'Magrib', 'Isha']
},
    }
  }
  return (
  
    <ReactApexCharts options={config.options} width="400" height="400" series={config.series}  type='bar'/>
    
  );
}

const App = () => {
  let [selectedStartDate, setSelectedStartDate] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const[days7,set7days]=useState(false);
  const[monthlys,setmonthlys]=useState(false);
  const[datarange,setdatarange]=useState(false);
  const onDateChange = (date) => {
    setSelectedStartDate(date.toString());
  };
  const oncheck=()=>{
    setToggleCheckBox(!(toggleCheckBox));
  }
  return (
    <View style={styles.container}>
      <View style={{ shadowColor: "black", shadowOpacity: 0.6, flex: 0.5 }}>
        <Text
          style={{
            color: "blue",
            textAlign: "center",
            fontSize: 36.3709,
            fontStyle: "normal",
            fontFamily: "sans-serif",
          }}
        >
          Salah Tracker
        </Text>
      </View>
      <View  style={{flex:2}}>
      <CalendarPicker
        previousTitle="<"
        nextTitle=">"
        selectedDayColor="black"
        selectedDayTextColor="white"
        height={400}
        width={400}
        allowRangeSelection={false}
        maxDate={new Date()}
        
        textStyle={{
          color: "#000000",
          fontWeight: "bold",
        }}
      /></View>
      <View style={{width:'30%',height:'100px',flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center',flex:4}}>
      <CheckBoxPlay/>
      </View>
          
        

      <View style={{flexWrap:"wrap",flexDirection:'row',justifyContent:"center"}}>
      <Button color={'green'} title="Last 7 Days" onPress={()=>{set7days(true),setmonthlys(false),setdatarange(false)}}/>
      <Button color={'blue'} title="Monthly" onPress={()=>{setmonthlys(true),set7days(false),setdatarange(false)}}/>
      <Button color={'red'} title="Select Date Range" onPress={()=>{set7days(false),setmonthlys(false),setdatarange(true)}}/>
      </View>

      <View style={{justifyContent:'center',alignSelf:"center"}}>
      {days7?<Last7Days/>:null}
      {monthlys?<Monthly/>:null}
      {datarange?<DataRange/>:null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 40,
    marginLeft:'10px',
    justifyContent: "space-evenly",
  },

  checkbox: {
    alignSelf: "center",
  },
});

export default App;
