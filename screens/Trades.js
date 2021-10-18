import React, { useState, useEffect }from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import Housing from '../components/global/Housing'
import DatePicker from '../components/positions/DatePicker';
import TradeItem from '../components/positions/TradeItem'
import TradesSummary from '../components/positions/TradeSummary'

import Ctime from '../utils/ctime'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const TradesScreen = () => {
	const [date, setDate] = useState(new Date())
	const [trades, setTrades] = useState([])

	const tradesRef = ref(db, 'positions')

	useEffect(() => {
		onValue(tradesRef, (snapshot) => {
			const tradesToday = Object.values(snapshot.val()).filter((trades) => {
				return !trades.open && trades.date_close == new Ctime().from_date_obj(date).to_date_string()
			})
			tradesToday.reverse()
			setTrades(tradesToday)
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
			<TradesSummary
				trades={trades}
			/>
			<FlatList
				style={{width: '100%'}}
				data={trades}
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