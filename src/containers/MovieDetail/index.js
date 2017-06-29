import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadMovieDetail,loadMovieDetail2 } from '../../actions/movieDetail';
import Loading from '../../components/Loading';

import './MovieDetail.css';

class MovieDetail extends React.PureComponent {

    static loadData(option) {
        // console.log(option,'-------option1')
        if (option.store) {
            option.store.dispatch(loadMovieDetail2(option.props.params.id))
            return option.store.dispatch(loadMovieDetail(option.props.params.id));
        } else {
            this.props.loadMovieDetail(option.props.params.id);
            this.props.loadMovieDetail2(option.props.params.id);
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        MovieDetail.loadData.call(this, {props: this.props});
    }

    render() {
        const {
            name,
            original_title,
            year,
                  areaImage,
            directors,
            casts,
            genres,
            countries,
            aka,
            rating,
            ratings_count,
            desc,
            id
        } = this.props.movieDetail;
        const {isLoading} =  this.props.movieDetail2

        const directorsStr = directors && directors.map(el => el.name).join('/');
        const castsStr = casts && casts.map(el => el.name).join('/');
        const genresStr = genres && genres.join('/');
        const countriesStr = countries && countries.join('/');
        const akaStr = aka && aka.join('/');

        let  isChanging = isLoading || id !== this.props.params.id;
        //isChanging =false
        return (
            <div className="movie_detail">
                -{isLoading+''}-{this.props.params.id}-
                {isLoading && Loading()}
                {!isLoading &&
                <div className="article">
                    <Link to="/">返回</Link>
                    <h1><span>{name} {original_title}</span><span className="year">({year})</span></h1>
                    <div className="subject clearfix">
                        <div id="mainpic" className="">
                            <img src={areaImage} alt={original_title} />
                        </div>
                        <div id="info">
                            <span>
                                <span className="pl">导演:</span>
                                <span>{directorsStr}</span>
                            </span>
                            <br />
                            <span className="actor">
                            <span className="pl">主演</span>:<span>{castsStr}</span>
                            </span>
                            <br />
                            <span className="pl">类型:</span>
                            <span property="v:genre">{genresStr}</span>
                             <br />
                             <span className="pl">制片国家/地区:</span> {countriesStr}
                             <br />
                             <span className="pl">又名:</span> {akaStr}
                             <br />
                             <span className="pl">豆瓣评分:</span> {rating && rating.average}
                             <br />
                             <span className="pl">评分人数:</span>{ratings_count}
                        </div>
                    </div>
                    <div className="related-info">
                        <h2>{name}的剧情简介&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·&nbsp;&nbsp;·</h2>
                        <div className="indent" id="link-report">
                            <span>
                                {desc}　　
                            </span>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { movieDetail,movieDetail2 } = state;
    console.log(movieDetail,state,'------movieDetail------')
    return {
        movieDetail,
        movieDetail2
    };
}

export default connect(mapStateToProps, {
    loadMovieDetail,loadMovieDetail2
})(MovieDetail);
