import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import globalStyles from '../../assets/css/styles'

import Ctime from '../../utils/ctime'

const TradeSummary = ({ closedTrades, openTrades }) => {
	const nClosedTrades = closedTrades.length
	const nOpenTrades = openTrades.length

	const pl = closedTrades.reduce((v, trade) => { return trade.profit_loss + v }, 0)
	const profit = pl >= 0

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={globalStyles.big}>{nOpenTrades} open trades</Text>
			</View>
			<View style={styles.row}>
				<Text style={profit ? {...globalStyles.big, color: 'limegreen'} : {...globalStyles.big, color: 'red'}}>
					{!profit && ('-')}
					$
					{Math.abs(Math.round(pl * 100) / 100)}
				</Text>
				<Text style={globalStyles.big}>
					{' in '} 
					{nClosedTrades}
					{' trades'}
				</Text>
			</View>
		</View>
	)

}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: 'gainsboro',
		marginBottom: 20,
		width: '100%'
	},
	row: {
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'row'
	}
})

export default TradeSummary