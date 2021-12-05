import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Calendar from '../trips/Calender.js';

const New_Trip = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
        <View>
          <TextInput 
            placeholder="City" style={styles.input}/>
          <TextInput
            placeholder="Country" style={styles.input}
          />
          <Calendar/>
          <Text style={styles.text}>Departure Date:</Text>
          {/* <Button title="Select Dates" onPress={() => setOpen(true)} /> */}
          <Text style={styles.text}>Itinerary:</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 70,
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
    borderColor: '#333652',
    borderRadius: 15,
    fontSize: 20
  },
  text: {
    marginLeft: 15,
    padding: 5
  }
});

export default New_Trip;