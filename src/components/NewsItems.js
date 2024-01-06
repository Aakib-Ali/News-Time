import React, { Component } from 'react'

const NewsItems = (props) => {
    let {title,description, imageUrl,newsUrl,author,time,source} =props;
    return (
        <div className="card" style={{ height: "auto"}} >
          <div style={{
            display: 'flex',
            justifyContent : 'flex-end',
            right : '0',
            position : 'absolute'
          }}>
            <span className="badge rounded-pill bg-danger">{source.slice(0,5)}</span>
          </div>
            <img src={imageUrl} className="card-img-top" alt="" style={{ width: "100%", height: "200px" }} />
            <div className="card-body">         
            <h5 className="card-title">{title}..</h5>
                <p className="card-text">{description}..</p>
                <p className='card-text'><small className='text-muted'>{author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
                <a href={newsUrl} target='__blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
  }

export default NewsItems
