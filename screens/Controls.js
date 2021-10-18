import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Housing from '../components/global/Housing'
import BigButton from '../components/controls/BigButton'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const ControlsScreen = () => {


	const [open, setOpen] = useState(false)
	const [live, setLive] = useState(false)

	const liveRef = ref(db, 'bits/live')
	const openRef = ref(db, 'bits/open')

	useEffect(()=>{
		onValue(liveRef, (snapshot) => setLive(snapshot.val()))
		onValue(openRef, (snapshot) => setOpen(snapshot.val()))
	}, [])


	const toggleOpen = () => set(openRef, !open)
	
	const toggleLive = () => set(liveRef, !live)

	return (
		<Housing>
			<BigButton
				text='Open'
				value={open}
				onPress={toggleOpen}
			/>
			<BigButton
				text='Live'
				value={live}
				onPress={toggleLive}
			/>
		</Housing>
	)
}

export default ControlsScreen 