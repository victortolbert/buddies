import React from 'react'
import MyForm from './components/MyForm'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <div className="bg-white">
      <section className="p-8 mt-4 bg-white rounded border shadow">
        <MyForm />
        <MyComponent />
      </section>
    </div>
  )
}

export default App
