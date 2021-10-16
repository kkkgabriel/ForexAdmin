import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Housing from '../components/global/Housing'
import BigButton from '../components/controls/BigButton'
import firebase from "../database/firebaseDB"


const ControlsScreen = () => {

	const [open, setOpen] = useState(false)
	const [live, setLive] = useState(false)

	const toggleOpen = () => setOpen(!open) // todo: call api

	const toggleLive = () => setLive(!live) // todo: call api

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