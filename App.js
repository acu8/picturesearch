import React from 'react'
import SarchBar from './components/SearchBar';
import SearchBar from './components/SearchBar';


export default function App() {
    const handleSubmit = (term) => {
        console.log('Do a search with', term);

    }


  return (
    <div>
        <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}
