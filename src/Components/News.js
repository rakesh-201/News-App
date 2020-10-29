import React, { useEffect, useState } from 'react'
import '../App.css'
import Card from './Card';

const News = (props) => {
    const [news, setNews] = useState()

    const func = (data) => {
        var a = []
        data.forEach(element => {
            a.push(
            <div className="card text-white bg-primary mb-3" >
            <div className="card-header">{element.publishedAt.slice(0, 10)}</div>
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description} </p>
              <a className="card-text text-light " href={element.url} > Link for full article </a>
            </div>
          </div>)
        });
        setNews(a)
    }

    const d = () => {
        const time = new Date()
        const day = time.getDate()
        const month = time.getMonth() + 1
        const year = time.getFullYear()
        console.log(year + "-" + month + "-" + day );
        return (year + "-" + month + "-" + day )
    }

    useEffect(() => {
                
            var url = `https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=11bacc3e703744938118d73b2d3aefb4`;
            fetch(url, {
                method: 'GET',
            }).then((response) => {
                    return response.json()
                }).then((data) => {
                    console.log(data.status);
                    // setNews(data.articles)
                    func(data.articles)
                })
    }, [])

    var arr = []
    arr.push(<h5>hello</h5>)
    arr.push(<br/>)
    arr.push(<h5>bro!</h5>)

    return (
        <>
            <div className="container" id="10" >
                {
                    news? 
                    news                   
                    : null
                }
            </div>
        </>
    )
}

export default News

