import React from 'react'
import Navigation from './components/Navigation'
import AddPizzaForm from './components/AddPizzaForm'
import { Provider } from 'react-redux'
import store from './utils/store'
import Dashboard from './components/Dashboard'
import TableOrder from './components/TableOrder'


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <div className='max-w-[90%] mx-auto my-10'>
        <div className='grid grid-cols-2 my-8'>
          <AddPizzaForm />
          <TableOrder />
        </div>
        <Dashboard />
      </div>
    </Provider>
  )
}

export default App