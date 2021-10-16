import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyles from '../../assets/css/styles'

const BigButton = ({onPress, text, value}) => {
	let backgroundColor = 'pink'
	if (value) backgroundColor = 'aquamarine'

	return (
		<TouchableOpacity
			onPress={ onPress }
			style={{...styles.bigButton, backgroundColor: backgroundColor}}
		>
			<Text style={globalStyles.vbig}>{ text }</Text>
			<Text style={globalStyles.big}>{ value.toString() }</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	bigButton: {
		padding: 20,
		borderRadius: 1000,
		borderColor: 'gainsboro',
		borderWidth: 0.5,
		width: '70%',
	    aspectRatio: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10
	}
})
export default BigButton