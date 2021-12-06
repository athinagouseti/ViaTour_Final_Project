import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView} from 'react-native';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Calendar from './Calender.js';

const NewTrip = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Add New Trip</Text>
          <TextInput 
            placeholder="City" style={styles.input}/>
          <TextInput
            placeholder="Country" style={styles.input}/>
          <Text style={styles.text}>Select Dates</Text>
          <Calendar/>
          <Text style={styles.text}>Itinerary</Text>
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
    borderColor: '#fad02c',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '25%',
    height: 50,
    width: '50%',
    backgroundColor: 'white',
    color: '#333652',
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: '#fad02c',
    borderRadius: 15,
    fontSize: 20
  },
  text: {
    fontWeight: 'bold', 
    color: '#333652',
    textTransform: 'uppercase',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15
  }
});

export default NewTrip;