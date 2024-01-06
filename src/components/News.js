import React, {useEffect, useState } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const[articles,setArticles]=useState([])
    const[loading,setLoading]=useState(false)
    const[page,setPage]=useState(1)
    const[totalResults,settTotalResult]=useState(0)
   
    const capitalizationFirstLatter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews = async ()=> {
        props.setProgress(0);
        let url =   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let parsedata = await data.json();
        props.setProgress(70);
        setArticles(parsedata.articles);
        settTotalResult(parsedata.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title = `${capitalizationFirstLatter(props.category)} - Time-News`;
        updateNews();
    },[])


    const fetchMoreData = async () => {
        let url =   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1);
        setLoading(true);
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticles(articles.concat(parsedata.articles));
        settTotalResult(parsedata.totalResults);
        setLoading(false);
        
      };

        return (
            <>
                <h1 className='text-center' style= { {margin: "35px 0px", marginTop: "90px"}}>{capitalizationFirstLatter(props.category)} Top Headline</h1>
                {/* {state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    >
                    <div className="container">
                <div className="row">
                    {articles.map((element) => (
                        <div className="col-md-3 my-1" key={element.url}>
                            <NewsItems
                                title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description ? element.description.slice(0, 100) : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                time={element.publishedAt}
                                source={element.source.name}
                            />
                        </div>

                    ))}
                </div>
                </div>
                </InfiniteScroll>
            </>
        );
}

News.defaultProps={
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;

