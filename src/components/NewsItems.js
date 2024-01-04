import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,discription, imageUrl,newsUrl} =this.props;
    return (
        <div className="card my-auto mx-auto" style={{width: "18rem"}} >
            <img src={imageUrl} className="card-img-top" alt="" style={{ width: "100%", height: "200px" }} />
            <div className="card-body">         
            <h5 className="card-title">{title}...</h5>
                <p className="card-text">{discription}...</p>
                <a href={newsUrl} target='__blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
  }
}

export default NewsItems
