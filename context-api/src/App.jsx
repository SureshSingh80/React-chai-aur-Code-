
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
        <p>Chai aur Code se React Sikhe</p>
        <Login></Login>
        <Profile></Profile>
    </UserContextProvider>
  )
}

export default App
