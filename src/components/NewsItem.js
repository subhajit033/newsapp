import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, artUrl, author, time} = this.props;
        return (
            <div className="card" style={{width: '18rem'}}>
                <img src={imageUrl}className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {time.slice(0, 10)} </small></p>
                    <a href={artUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem