import { useState } from 'react'
import Header from './Header'
import Main from './Corpo'

function App() {

  return (
    <>
    <Header
      titulo = "To-Do: Agendamento Facil"
    />
    <Main
      titulo = "Digite Sua lista de Tarefas"
    />
    </>
  )
}

export default App
