import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getValues=()=>{
    AsyncStorage.removeItem("NaN");
    var obj=AsyncStorage.getAllKeys();
    console.log(obj.length());
}