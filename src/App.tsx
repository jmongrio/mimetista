import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/layout'
import { Home } from './pages/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
