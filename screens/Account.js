import React from 'react'
import { Text, View, FlatList, Button } from 'react-native'
import Housing from '../components/global/Housing'
import LineGraph from '../components/account/LineGraph'

const AccountScreen = () => {

	const dummyData = [
	    {
	    	'title': 'Account balance',
	    	'data': [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
	    },
	    {
	    	'title': 'Margin available',
	    	'data': [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
	    },
	    {
	    	'title': 'P&L',
	    	'data': [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
	    }
	]

	return (
		<Housing>
			<FlatList
				data={dummyData}
				renderItem={({ item, index }) => (
					<LineGraph
						key={item['title']}
						title={item['title']}
						data={item['data']}
					/>
				)}
				contentContainerStyle={{ paddingTop: 10 }} 
				showsVerticalScrollIndicator={false}
				style={{width: '100%', height: '90%'}}
			/>
		</Housing>
	)
}

export default AccountScreen