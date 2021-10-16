import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import globalStyles from '../../assets/css/styles'

const PlPanel = ({ pl }) => {
	return (
		<View>
			<Text style={globalStyles.vbig}>{pl}</Text>
		</View>
	)
}

const HeaderPanel = () => {
	return (
		<View>
			<Text>Instrument</Text>
			<Text>Type</Text>
			<Text>Trade units</Text>
			<Text>Open price</Text>
			<Text>Datetime of open</Text>
			<Text>Close price</Text>
			<Text>Datetime of close</Text>
			<Text>Reason for close</Text>
		</View>
	)
}

const ContentPanel = ({
	instrument,
	trade_units,
	long_short,
	open_price,
	open_datetime,
	close_price,
	close_datetime,
	closure_reason
}) => {
	return (
		<View>
			<Text>{instrument}</Text>
			<Text>{trade_units}</Text>
			<Text>{long_short}</Text>
			<Text>{open_price}</Text>
			<Text>{open_datetime}</Text>
			<Text>{close_price}</Text>
			<Text>{close_datetime}</Text>
			<Text>{closure_reason}</Text>
		</View>
	)
}

const TradeItem = ({
	instrument,
	pl,
	trade_units,
	long_short,
	open_price,
	open_datetime,
	close_price,
	close_datetime,
	closure_reason
}) => {
	let color = 'aquamarine'
	if (pl < 0) color = 'pink'
	return (
		<View style={{...styles.container, 'backgroundColor': color}}>
			<View style={styles.pl}>
				<PlPanel 
					pl={pl}
				/>
			</View>
			<View style={styles.row}>
				<HeaderPanel />
				<ContentPanel		
					instrument={instrument}
					trade_units={trade_units}
					long_short={long_short}
					open_price={open_price}
					open_datetime={open_datetime}
					close_price={close_price}
					close_datetime={close_datetime}
					closure_reason={closure_reason}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		borderWidth: 1,
		borderColor: 'gainsboro',
		paddingTop: 10,
		paddingBottom: 20,
		borderRadius: 30,
		marginBottom: 10
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	pl: {
		flexDirection: 'row',
		justifyContent: 'center'
	}
})

export default TradeItem