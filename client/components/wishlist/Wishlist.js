import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import DraggableFlatList, {ScaleDecorator} from "react-native-draggable-flatlist";

const Wishlist = () => {

    const [data, setData] = useState([
        {
            order: 1,
            label: 'Tokyo',
          },
          {
            order: 2,
            label: 'Denver',
          },
          {
            order: 3,
            label: 'Rome',
          },
          {
            order: 4,
            label: 'Berlin',
          },
          {
            order: 5,
            label: 'Paris',
          },
          {
            order: 6,
            label: 'London',
          }
    ])

    const renderItem = ({ item, index, drag, isActive }) => (
        <TouchableOpacity onLongPress={drag} >
          <Text style={styles.text} >{item.label}</Text>
        </TouchableOpacity>
      );
    
    return (
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.order.toString()}
          onDragEnd={({data} ) => setData(data )}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 100 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       flex: 1,
      },
    text: {
        borderWidth: 4,
        borderColor: '#fad02c',
        borderRadius: 20,
        padding: 30,
        marginTop: 15,
        margin: 30,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 25
    }
  });


export default Wishlist;