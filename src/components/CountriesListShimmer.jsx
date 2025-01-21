import React from 'react'

const CountriesListShimmer = () => {
  return (
    <main className="cards_section">
     {
          Array.from({length: 10}).map((elm, i)=>{
               return <div key={i} className="card shimmer_card"></div>
          })
     }
    </main>
  )
}

export default CountriesListShimmer;