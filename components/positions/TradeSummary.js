import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import globalStyles from '../../assets/css/styles'

const TradeSummary = ({ trades }) => {
	const n_trades = trades.length
	const pl = trades.reduce((v, trade) => { return trade.profit_loss + v }, 0)
	const profit = pl >= 0

	return (
		<View style={styles.container}>
			<Text style={profit ? {...globalStyles.big, color: 'limegreen'} : {...globalStyles.big, color: 'red'}}>
				{!profit && ('-')}
				$
				{Math.abs(Math.round(pl * 100) / 100)}
			</Text>
			<Text style={globalStyles.big}>
				{' in '} 
				{n_trades}
				{' trades'}
			</Text>
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
		justifyContent: 'center',
		flexDirection: 'row',
		width: '100%'
	}
})

export default TradeSummary