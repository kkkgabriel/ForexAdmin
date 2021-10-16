import React, { useState }from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import Housing from '../components/global/Housing'
import DatePicker from '../components/positions/DatePicker';
import TradeItem from '../components/positions/TradeItem'
import TradesSummary from '../components/positions/TradeSummary'

const TradesScreen = () => {
	const [date, setDate] = useState(Date.now())

	const trades = [
		{	
			key: 1,
			instrument: 'EUR_USD',
			pl: 8.5,
			trade_units: 1000,
			long_short:'long',
			open_price: 1.612,
			open_datetime: '2021-10-13 16:00:00',
			close_price: 1.623,
			close_datetime:'2021-10-13 16:00:00',
			closure_reason: 'temination triggered'
		},
		{
			key: 2,
			instrument: 'EUR_USD',
			pl: -81.23,
			trade_units: 1000,
			long_short:'long',
			open_price: 1.612,
			open_datetime: '2021-10-13 16:00:00',
			close_price: 1.623,
			close_datetime:'2021-10-13 16:00:00',
			closure_reason: 'temination triggered'
		},
		{
			key: 3,
			instrument: 'EUR_USD',
			pl: 2,
			trade_units: 1000,
			long_short:'long',
			open_price: 1.612,
			open_datetime: '2021-10-13 16:00:00',
			close_price: 1.623,
			close_datetime:'2021-10-13 16:00:00',
			closure_reason: 'temination triggered'
		},
		{
			key: 4,
			instrument: 'EUR_USD',
			pl: 8.123,
			trade_units: 1000,
			long_short:'long',
			open_price: 1.612,
			open_datetime: '2021-10-13 16:00:00',
			close_price: 1.623,
			close_datetime:'2021-10-13 16:00:00',
			closure_reason: 'temination triggered'
		},
		{
			key: 5,
			instrument: 'EUR_USD',
			pl: 2222.232,
			trade_units: 1000,
			long_short:'long',
			open_price: 1.612,
			open_datetime: '2021-10-13 16:00:00',
			close_price: 1.623,
			close_datetime:'2021-10-13 16:00:00',
			closure_reason: 'temination triggered'
		},
	]

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
						key={item.key}
						instrument={item.instrument}
						pl={item.pl}
						trade_units={item.trade_units}
						long_short={item.long_short}
						open_price={item.open_price}
						open_datetime={item.open_datetime}
						close_price={item.close_price}
						close_datetime={item.close_datetime}
						closure_reason={item.closure_reason}
					/>
				)}
			/>
		</Housing>
	)
}

export default TradesScreen