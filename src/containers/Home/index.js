import React from 'react';
import MovieItem from '../../components/MovieItem/';
import { loadMovieList } from '../../actions/movieList';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import './Home.css';

class Home extends React.PureComponent {

    static loadData(option) {
        if (option && option.store) {
            return option.store.dispatch(loadMovieList());
        } else {
            this.props.loadMovieList();
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Home.loadData.call(this);
    }

    render() {
        const { movies, isLoading } = this.props.movieList;
        console.log(this.props,'------12------')
        const movieList = movies.map(movie =>
        (<li key={movie.id}>
            <MovieItem  movie={movie} />
        </li>));

        return (
            <div className="movie_list">
                <h1>211111测试服务器-测试服务器渲染</h1>
                {isLoading && Loading()}
                {!isLoading && 
                <ol className="grid_view">
                    {movieList}
                </ol>
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { movieList } = state;
    return {
        movieList,
    };
}

export default connect(mapStateToProps, {
    loadMovieList,
})(Home);
