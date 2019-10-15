import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import List from './pages/List'
import Book from './pages/Book'

const configsNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2563a1',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  }
}


const Routes = createAppContainer(createSwitchNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Login'
      })
    },
    List,
    Book
  }
))

export default Routes
