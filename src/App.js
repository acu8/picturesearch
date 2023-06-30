import React from 'react'
import SearchBar from './components/SearchBar'

export default function App() {
  const handleSubmit = (term) => {
    console.log('Hello', term)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}
