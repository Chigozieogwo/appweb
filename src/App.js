import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen2 from './screens/HomeScreen2'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
  return (
    <Router className="bg-gray-100">
      <Header />

      <main>
        <div>
          <Route path="/" component={HomeScreen2} exact />
          <Route path="/register" component={RegisterScreen} />
        </div>
      </main>
      <Footer />
    </Router>
  )
}

export default App
