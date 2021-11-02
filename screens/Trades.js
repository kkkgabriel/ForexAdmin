import React, { useState, useEffect }from 'react'
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import Housing from '../components/global/Housing'
import DatePicker from '../components/positions/DatePicker';
import TradeItem from '../components/positions/TradeItem'
import TradesSummary from '../components/positions/TradeSummary'

import Ctime from '../utils/ctime'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const TradesScreen = ({ navigation }) => {
	const [date, setDate] = useState(new Date())
	const [closedTrades, setClosedTrades] = useState([])
	const [openTrades, setOpenTrades] = useState([])

	const tradesRef = ref(db, 'positions')

	const compareDate = (a, b) => {
		if (a.datetime_close > b.datetime_close) {
			return -1
		} else {
			return 1
		}
	}

	useEffect(() => {
		onValue(tradesRef, (snapshot) => {
			let allTrades = Object.values(snapshot.val())
			allTrades.reverse()

			let closedTrades = allTrades
			.filter((trades) => {
				return !trades.open && trades.date_close == new Ctime().from_date_obj(date).to_date_string()
			})
			.sort((a, b) => compareDate(a, b))

			let openTrades = allTrades.filter((trades) => {
				return trades.open
			})

			setClosedTrades(closedTrades)
			setOpenTrades(openTrades)
		})
	}, [date])

	return (
		<Housing
			alignItems='flex-start'
		>
			<DatePicker
				date={date}
				setDate={setDate}
			/>
			<TouchableOpacity
				style={{ width: '100%' }}
				onPress={() => navigation.navigate('Positions') }
			>
				<TradesSummary
					openTrades={openTrades}
					closedTrades={closedTrades}
				/>
			</TouchableOpacity>
			<FlatList
				style={{width: '100%'}}
				data={closedTrades}
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
		</Housing>
	)
}

export default TradesScreen