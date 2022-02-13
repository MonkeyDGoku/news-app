import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Article.css";

function Article({
    index,
    author,
    title,
    url,
    urlToImage,
    description
}) {


    const trunc = (str, len) => {
        return str.substring(0, Math.min(len, str.Length))
    }

    return (
        <div className={`article-container ${index === 0 ? "featured" : ""}`}>
            <img className='article-img'
                src={urlToImage}
                alt=""
            />
            <div className="article-content">
                <div className='article-right-content'>
                    <h3>{title?.substring(0, 20)}</h3>
                    <p>{description?.substring(0, Math.min(50, description?.length))}</p>
                </div>
            </div>

        </div>
    )
}

export default Article