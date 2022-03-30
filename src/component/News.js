import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
  render() {
    return (
        <>
      <div className="container">
          <div className="row">
          <div className='col-md-4'>
          <Newsitems  title="main news"  description="this is a description" />
          </div>

          <div className='col-md-4'>
          <Newsitems  title="main news"  description="this is a description" />
          </div>

          <div className='col-md-4'>
          <Newsitems  title="main news"  description="this is a description" />
          </div>
          </div>
       {/* <  Newsitems  title="main news"  description="this is a description" />  */}
      


      </div>
      </>
    )
  }
}
