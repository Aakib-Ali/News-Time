import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description, imageUrl,newsUrl,author,time,source} =this.props;
    return (
        <div className="card" style={{ height: "auto" }} >
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex:1}}>{source}</span>
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
}

export default NewsItems
