import React from 'react'
import preload from '../public/data.json'
import ShowCard from './showCard.js'

const Search = React.createClass({
    render () {
        return (
            <div className="search">
                <header>
                    <h1>svideo</h1>
                    <input type="text" placeholder="Search"/>
                </header>
                <div>
                    {preload.shows.map((show) => {
                        return (
                            <ShowCard key={show.imdbID} {...show}/>
                        )
                    })}
                </div>
            </div>
        )
    }
})

export default Search