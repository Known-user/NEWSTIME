import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl ,url ,author ,publishedAt} = this.props;
    return (
      <div className='my-3'>
        <div className={`card text-${this.props.mode==='light'?'dark':'white'} bg-${this.props.mode==='light'?'light':'dark'}`} >
            <img src={imgUrl?imgUrl:"https://images.hindustantimes.com/img/2021/07/27/550x309/Breaking-News-Live-Blog-pic_1627344775185_1627400104258.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-danger">{new Date(publishedAt).toGMTString()}</small></p>
                <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
