import React, { useState, useEffect } from 'react'
import { Text, View, Button, FlatList } from 'react-native'

import globalStyles from '../assets/css/styles'
import Housing from '../components/global/Housing'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const PositionsScreen = () => {


	const [openTrades, setOpenTrades] = useState([])
	const tradesRef = ref(db, 'positions')

	useEffect(() => {
		onValue(tradesRef, (snapshot) => {
			let allTrades = Object.values(snapshot.val())
			allTrades.reverse()

			let openTrades = allTrades.filter((trades) => {
				return trades.open
			})

			setOpenTrades(openTrades)
		})
	}, [])

	return (
		<Housing>
			{openTrades.length == 0 &&
				<View style={{ height: '100%', justifyContent: 'center' }}>
					<Text style={ globalStyles.big }>No open positions</Text>
				</View>
			}
			{openTrades.length > 0 &&
				<FlatList
					style={{width: '100%'}}
					data={openTrades}
					renderItem={({ item } ) => (
						<TradeItem
							instrument={item.instrument}
							pl={item.profit_loss}
							trade_units={item.amount}
							long_short={item.long_short}
							open_price={item.open_price}
							open_datetime={item.datetime_open}
							close_price={item.close_price}
							close_datetime={item.datetime_close}
							closure_reason={item.closure_reason}
						/>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
			}
		</Housing>
	)
}

export default PositionsScreen;