import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [

        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jeff Somers",
            "title": "Your Old Email Address Is Hurting Your Job Prospects",
            "description": "Email is old. In its earliest incarnation, email dates back to 1965—a time when computers were the size of elephants and only a small number of nerds had regular access to them—and the kind of email we recognize today dates back to the early 1970s.Read more...",
            "url": "https://lifehacker.com/your-old-email-address-is-hurting-your-job-prospects-1850348243",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ebf8a316e2adf462769ebfd66eeed1d2.jpg",
            "publishedAt": "2023-04-28T14:00:00Z",
            "content": "Email is old. In its earliest incarnation, email dates back to 1965a time when computers were the size of elephants and only a small number of nerds had regular access to themand the kind of email we… [+3600 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Antonio G. Di Benedetto",
            "title": "Today is Star Wars Jedi: Survivor launch day, and you can get it with a $10 gift card",
            "description": "Plus, deals on a large Hisense U8H 4K Mini LED TV, the Amazfit GTR 4 smartwatch, Microsoft’s Xbox Wireless Headset for consoles and PC, Drop's MT3 keycaps, and more.",
            "url": "https://www.theverge.com/2023/4/28/23700498/star-wars-jedi-survivor-amazfit-gtr-smartwatch-hisense-u8h-tv-deal-sale",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/UTq9mF8Jei8qogzkrd9cWgS7CPY=/0x0:7200x4050/1200x628/filters:focal(3600x2025:3601x2026)/cdn.vox-cdn.com/uploads/chorus_asset/file/24617698/SWJS_Survivor_Key_Art_Standard_16x9_copy.jpg",
            "publishedAt": "2023-04-28T16:05:00Z",
            "content": "Today is Star Wars Jedi: Survivor launch day, and you can get it with a $10 gift card\r\nToday is Star Wars Jedi: Survivor launch day, and you can get it with a $10 gift card\r\n / A continuation of a ni… [+4214 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "ted@byteddyk.com (Ted Kritsonis)",
            "title": "Nothing Ear (2) vs. Ear (1): Should you upgrade?",
            "description": "Two of the more uniquely designed pairs of wireless earbuds, the Nothing Ear (2) and Ear (1) are the quintessential upstarts, so it comes down to which of the two tick off the right boxes.",
            "url": "https://www.androidcentral.com/accessories/audio/nothing-ear-2-vs-ear-1",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/qozrbTvBYxyrhhAHosLUQV-1200-80.jpg",
            "publishedAt": "2023-04-28T16:00:11Z",
            "content": "Nothing is the kind of brand that could have everything going for it because history and Carl Pei suggest the only direction to go is up. The OnePlus co-founder placed his bets on disrupting the very… [+5753 chars]"

        }

    ]
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ff9696d98d945c49e3fe42468d0dd32&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState = ({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }
    handleNextClick = async () => {
        console.log("Kaka click");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ff9696d98d945c49e3fe42468d0dd32&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState = ({
            page: this.state.page + 1,
            articles: parseData.articles
        })
        console.log(this.state.page + 1);
    }
    
    constructor() {
        super();

        this.state = {
            page: 1,
            articles: this.articles,
            loading: true
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ff9696d98d945c49e3fe42468d0dd32&page=${this.state.page}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles })
    }
    
    render() {
        return (
            <>
                <div className='container my-4'>
                    <h3>Top HeadLines</h3>

                    <div className="row">
                        {this.state.articles.map((ele) => {
                            // k every itreable item should have unique key
                            return <div className="col-md-3 my-3" key={ele
                                .url}>
                                <NewsItem title={ele.title !== null ? ele.title.slice(0, 45) : "No title available"} description={ele.description !== null ? ele.description.slice(0, 88) : "No description available"} imageUrl={ele.urlToImage} artUrl={ele.url} />
                            </div>;
                        })}
                    </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <button type="button" className="btn btn-primary mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </>
        )
    }
}

export default News
