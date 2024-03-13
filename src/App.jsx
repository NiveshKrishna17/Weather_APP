import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home, WeatherDetail } from './Pages'

/**
 * Function component for rendering the main application.
 *
 * @return {JSX.Element} The main application component
 */
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
