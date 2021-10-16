import React, { useState }from 'react'
import { Text, View, Button, Platform, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import globalStyles from '../../assets/css/styles'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DatePicker = ({ date, setDate }) => {
	const onChange = (event, value) => {
		setDate(value);
		if (Platform.OS === 'android') {
			setIsPickerShow(false);
		}
	};

	return (
		<View style={style.container}>
			<Text style={globalStyles.h2}>Date: </Text>
			<DateTimePicker
				value={date}
				mode={'date'}
				display={'default'}
				is24Hour={true}
				onChange={onChange}
				style={style.picker}
				maximumDate={Date.now()}
			/>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 20
	},
	picker: {
		width: 150,
	}
})

export default DatePicker