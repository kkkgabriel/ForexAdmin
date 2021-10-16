import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import globalStyles from '../../assets/css/styles'

const LineGraph = ({ title, data }) => {

	const axesSvg = { fontSize: 10, fill: 'grey' };
	const verticalContentInset = { top: 10, bottom: 10 }
	return (
	    <View style={styles.container}>
	    	<Text style={{...globalStyles.big, ...styles.title}} >{ title }</Text>
	    	<View style={styles.graph}>
	    		<YAxis
		            data={data}
		            contentInset={verticalContentInset}
		            svg={axesSvg}
		        />
		        <View style={{ flex: 1, marginLeft: 10 }}>
		            <LineChart
		                style={{ flex: 1 }}
		                data={data}
		                contentInset={verticalContentInset}
		                svg={{ stroke: 'rgb(134, 65, 244)' }}
		            >
		                <Grid/>
		            </LineChart>
		        </View>
	    	</View>
		        
	    </View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 250,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderColor: 'gainsboro',
		borderBottomWidth: 0.5,
		paddingBottom: 50,
		marginTop: 10,
		marginBottom: 30
	},
	graph: {
		flexDirection: 'row',
		height: '100%'
	},
	title: {
		paddingBottom: 10
	}
})

export default LineGraph