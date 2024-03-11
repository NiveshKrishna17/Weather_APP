import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, WeatherDetail } from './Pages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/weather' element={<WeatherDetail />} />
      </Routes>
    </>
  )
}

export default App
