import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import Housing from '../components/global/Housing'
import LineGraph from '../components/account/LineGraph'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const AccountScreen = () => {

	const [data, setData] = useState([])
	const accountRef = ref(db, 'account_snapshots')

	const n_latest_data = 100 // set this to settable on ui?

	useEffect(() => {
		onValue(accountRef, (snapshot) => {
			const acc_snapshots = Object.values(snapshot.val())
			const account_balance = acc_snapshots.map((item) => item.balance).slice(0, 150)
			const margin_available = acc_snapshots.map((item) => item.margin_available).slice(0, 150)
			const profit_loss = acc_snapshots.map((item) => item.profit_loss).slice(0, 150)
			setData([
				{
					'title': 'Account Balance',
					'data': account_balance
				},
				{
					'title': 'Margin Available',
					'data': margin_available
				},
				{
					'title': 'P&L',
					'data': profit_loss
				}
			])
		})
	}, [])

	return (
		<Housing>
			<FlatList
				data={data}
				renderItem={({ item, index }) => (
					<LineGraph
						title={item['title']}
						data={item['data']}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={{ paddingTop: 10 }} 
				showsVerticalScrollIndicator={false}
				style={{width: '100%', height: '90%'}}
			/>
		</Housing>
	)
}

export default AccountScreen