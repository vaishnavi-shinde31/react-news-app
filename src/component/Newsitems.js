import React, { Component } from 'react'

import '../App.css';

export default class Newsitems extends Component {
  render() {

    let { title, description, imageUrl, newsUrl ,author} = this.props;

    return (
      <>
     
        <div className="container  b">
          <div className="card " style={{ width: '20rem' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl}rel="noreferrer"  target="_blank" className="btn btn-outline-info btn-sm"> Read More</a>
              <p className="card-text">{author}</p>
            </div>
          </div>
        </div>

     
      </>
    )
  }
}