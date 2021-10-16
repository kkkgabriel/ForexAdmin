import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// redux imports 
// import store from './redux/configureStore'
// import { Provider } from "react-redux";

// screens import
import Controls from './screens/Controls';
import Trades from './screens/Trades';
import Account from './screens/Account';

// icons
import FontAwesome from "react-native-vector-icons/FontAwesome";


// const AppWrapper = () => {
//    return (
//      <Provider store={store}>
//        <App />
//      </Provider>
//    )
// }

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Trades'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Controls') {
              iconName = 'power-off'
            } else if (route.name === 'Trades') {
              iconName = 'list';
            } else if ( route.name === 'Account' ) {
              iconName = 'user-circle';
            } 

            return <FontAwesome name={iconName} size={size} color={color} />;
            },
          })}
      >
        <Tab.Screen name="Controls" component={Controls} />
        <Tab.Screen name="Trades" component={Trades} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// export default AppWrapper;
export default App;