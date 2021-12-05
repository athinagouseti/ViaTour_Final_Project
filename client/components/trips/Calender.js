import React, { useState } from 'react'
import { Button, StyleSheet } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button title="Select Date" color='#fad02c' onPress={() => setOpen(true)} />
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
};

const styles = StyleSheet.create({
    button:{

    }
})