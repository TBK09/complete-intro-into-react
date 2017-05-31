import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'
import Landing from './Landing'
import Search from './Search'

const App = React.createClass({
  render () {
    return (
        <BrowserRouter>
            <div className='app'>
                {/* Those  are like the particular routes. The 'exactly pattern' attribute makes it so that the
                Match component only renders the Landing component when the route is exactly '/'. This is necessary for
                 landing pages, as we don't want e.g. '/something/else' to also match the homepage pattern.
                 Using just the 'pattern' attribtue is more fuzzy.*/}
                <Match exactly pattern='/' component={Landing} />
                <Match pattern='/search' component={Search} />
            </div>
        </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

