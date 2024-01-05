import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
        document.title = `${this.capitalizationFirstLatter(this.props.category)} - Time-News`;
    }
    capitalizationFirstLatter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    async updateNews (){
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d744b83e8143a5824e31d82b7277950&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedata = await data.json();
        this.props.setProgress(70);
        this.setState({ 
            articles: parsedata.articles, 
            totalResult: parsedata.totalResults, 
            loading: false 
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=20d744b83e8143a5824e31d82b7277950&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ 
            articles: this.state.articles.concat(parsedata.articles), 
            totalResult: parsedata.totalResults, 
            loading: false 
        });
        
      };

    // handleNext = async () => {
    //    this.setState({ page: this.state.page +1})
    //    this.updateNews();
    // };

    // handlePrevious = async () => {
    //     this.setState({ page: this.state.page-1})
    //     this.updateNews();
    // };
    render() {
        return (
            <>
                <h1 className='text-center'>Top {this.capitalizationFirstLatter(this.props.category)} Headline</h1>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                    >
                    <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => (
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
}

export default News;
