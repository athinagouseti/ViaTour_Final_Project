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
    const maxDate = new Date(2022, 12, 12);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    
    return (
      <View style={styles.container}>
        <CalendarPicker
        startFromMonday={true}
          allowRangeSelection={true}
          showDayStragglers={false}
          scrollable={true}
          restrictMonthNavigation={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#fad02c"
          todayTextStyle="#333652"
          selectedDayColor="#333652"
          selectedDayTextColor="white"
          onDateChange={this.onDateChange}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: '#fad02c',
    borderRadius: 10,
    marginHorizontal: 8,
    shadowColor: '#333652',
    shadowOffset: { height: 0},
    shadowOpacity: 0.1
  },
  text: {
      padding: 30
  }
});