import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import CalendarPicker from 'react-native-calendar-picker';
import Calendar from '../trips/Calender.js';

const New_Trip = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
        <Text styles={styles.text}> Add a New Trip </Text>
        <View>
          <TextInput 
            placeholder="City Name" style={styles.input}/>
          <TextInput
            placeholder="Country" style={styles.input}
          />
          <Text style={styles.text}>Length of trip: </Text>
          {/* <Button title="Select Dates" onPress={() => setOpen(true)} /> */}
            <Calendar/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    height: 70,
    backgroundColor: 'white'
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  },
  text: {
    marginLeft: 15,
    padding: 5
  }
});

export default New_Trip;