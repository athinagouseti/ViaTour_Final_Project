import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
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
        <View >
        <TouchableOpacity onLongPress={drag} >
          <Text style={styles.text} >{item.label}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.add} source={require('../navigation_icons/add_trip.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.remove} source={require('../navigation_icons/remove_trip.png')}/>
        </TouchableOpacity>
        </View>
      );
    
    return (
        <>
        <DraggableFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.order.toString()}
          onDragEnd={({data} ) => setData(data )}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 100 }}
        />
        </>
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
        backgroundColor: '#f3f3f2',
        overflow: 'hidden',
        borderRadius: 20,
        padding: 30,
        marginTop: 15,
        margin: 30,
        fontWeight: 'bold',
        color: '#333652',
        fontSize: 25
    },
    add:{
        width: 90,
        height: 60,
        marginTop: -110,
        marginLeft: 150
    },
    remove:{
        width: 60,
        height: 60,
        marginTop: -108,
        marginLeft: 275
    }
  });


export default Wishlist;