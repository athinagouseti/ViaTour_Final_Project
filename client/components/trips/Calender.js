import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
      if (type === 'END_DATE'){
          this.setState({
              selectedEndDate: date,
          });
      } else{
          this.setState({
              selectedStartDate: date,
              selectedEndDate: null,
          });
      }  
    }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2022, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    
    return (
      <View style={styles.container} selectedDayColor={'#fad02c'}>
        <CalendarPicker
            startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#fad02c"
          selectedDayColor="#333652"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />
        <View style={styles.text} style={styles.container} >
          <Text>SELECTED ARRIVAL DATE: { startDate }</Text>
          <Text>SELECTED DEPARTURE DATE: { endDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f2'
  },
  text: {
      padding: 20
  }
});