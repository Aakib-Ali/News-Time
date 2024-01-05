import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa8657647fa6452ba3c85d56f5a2e5c0&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({ articles: parsedata.articles, totalResult: parsedata.totalResults, loading: false });
    }

    handleNext = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa8657647fa6452ba3c85d56f5a2e5c0&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            page: this.state.page + 1,
            loading: false
        });
    };

    handlePrevious = async () => {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa8657647fa6452ba3c85d56f5a2e5c0&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState({
            articles: parsedata.articles,
            page: this.state.page - 1,
            loading: false
        });
    };

    render() {
        return (
            <div className='container my-auto'>
                <h1 className='text-center'>Top Headline</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => (
                        <div className="col-md-3 my-1" key={element.url}>
                            <NewsItems
                                title={element.title ? element.title.slice(0, 30) : ""}
                                description={element.description ? element.description.slice(0, 70) : ""}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-sm btn-primary my-3" onClick={this.handlePrevious}>&larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} className='btn btn-sm btn-primary my-3' onClick={this.handleNext}>next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
