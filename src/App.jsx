import React from 'react'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.scss'
import ToDo from './components/ToDo/ToDo'

function App() {
  return (
    <Container>
      <div className="row">
        <div className="wrapper">
          <ToDo />
        </div>
      </div>
    </Container>
  )
}

export default App