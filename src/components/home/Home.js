import React, { useEffect, useState } from 'react'
import axios from "axios";
import END_POINTS from '../../api/newsapi/index';
import Article from '../article/Article';
import countryList from '../../api/countryapi';
import "./Home.css"
import Header from '../header/Header';
import { Dropdown } from 'react-bootstrap';
const API_KEY = END_POINTS.API_KEY;

function Home() {

    const [country, setCountry] = useState("in");
    const [newsTitle, setTitle] = useState("Test Title");
    const [articles, setArticles] = useState([]);

    function getTopHeadlines(country) {
        axios.get(END_POINTS.topHeadlines,
            {
                params: {
                    country: country,
                    apiKey: API_KEY
                }
            })
            .then(res => {
                let articles = res.data.articles;
                articles = articles.filter(article => article.source.id !== "google-news");
                setArticles(articles);
            })
            .catch()
    };

    useEffect(function () {

        getTopHeadlines(country)
    }, [country]);



    return (
        <div className="home">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Country1
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {countryList.map(country => (
                        <Dropdown.Item
                            key={country}
                            href="#/action-1">{country}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <div className='news-body'>
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        index={index}
                        author={article.author}
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage}
                        description={article.description}
                    />
                ))}</div>
        </div>
    )
}

export default Home