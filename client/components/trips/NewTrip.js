import React, {useEffect, useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Calendar from './Calender.js';
import { useNavigation } from "@react-navigation/native"

const NewTrip = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Add New Trip</Text>
          <TextInput 
            placeholder="City" style={styles.input}/>
          <TextInput
            placeholder="Country" style={styles.input}/>
          <Text style={styles.text}>Select Dates</Text>
          <Calendar/>
          <Button 
          title="Add Trip" 
          />
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom: 5,
    marginTop: 25
  },
  input: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: '25%',
    height: 50,
    width: '50%',
    backgroundColor: 'white',
    color: '#333652',
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#fad02c',
    borderRadius: 15,
    fontSize: 20,
    shadowColor: '#333652',
    shadowOffset: { height: 0},
    shadowOpacity: 0.2
  },
  heading: {
    fontWeight: 'bold', 
    color: '#333652',
    textTransform: 'uppercase',
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    fontSize: 20
  },
  text: {
    fontWeight: 'bold', 
    color: '#333652',
    textTransform: 'uppercase',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    padding: 10,
    fontSize: 15,
  }
});

export default NewTrip;
