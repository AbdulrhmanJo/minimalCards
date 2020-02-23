import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
const SectionHeader = (props) => {
    const { children, navigation, routeTo,icon} = props
    return (
        <View style={styles.topBar}>
            <Text style={styles.topBarText}>{children}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(`${routeTo}`)}>
                <Ionicons name={icon} color="white" size={30} style={{ height: 35 - 1}}/>
            </TouchableOpacity>                   
        </View>
    )
}

const styles = StyleSheet.create({
    topBar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:20,

    },
    topBarText:{
        fontSize:23,
        fontWeight:'700', 
        color:'white'
    },

})

export default SectionHeader