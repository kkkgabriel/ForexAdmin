import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import Housing from '../components/global/Housing'
import BigButton from '../components/controls/BigButton'

import db from '../database/firebaseDB'
import { ref, onValue, set} from "firebase/database";

const ControlsScreen = () => {


	const [open, setOpen] = useState(false)
	const [close, setClose] = useState(false)

	const openRef = ref(db, 'bits/open')
	const closeRef = ref(db, 'bits/close')

	useEffect(()=>{
		onValue(openRef, (snapshot) => setOpen(snapshot.val()))
		onValue(closeRef, (snapshot) => setClose(snapshot.val()))
	}, [])


	const toggleOpen = () => {
		set(openRef, !open)
		if (close) {
			set(closeRef, false)
		}
	}
	
	const toggleClose = () => {
		if (!close) {
			set(openRef, false)
		}
		set(closeRef, !close)
	}

	return (
		<Housing>
			<BigButton
				text='Open'
				value={open}
				onPress={toggleOpen}
			/>
			<BigButton
				text='Close all'
				value={close}
				onPress={toggleClose}
			/>
		</Housing>
	)
}

export default ControlsScreen 