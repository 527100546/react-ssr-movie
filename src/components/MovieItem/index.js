import React from 'react';
import { Link } from 'react-router';
import './MovieItem.css';

export default class MovieItem extends React.PureComponent {
	render() {
		const {
			      name,
			      poster,
			      title,
			      duration,
			      directors,
			      casts,
			      year,
			      video,
			      rating,
			      id,
			      } = this.props.movie;

		return (
			<div className="item">
				<div className="pic">
					<em>{name}</em>
					<Link to={`/movie/${id}`}>
						<img src={poster}/>
					</Link>
				</div>
				<div className="info">
					<div className="hd">
						<Link to={`/movie/${id}`}>
							<span className="title">{name}</span>
							<span className="title">&nbsp;/&nbsp;{duration}</span>
						</Link>
					</div>
					<div className="bd">
						<div className="star">
							{duration}
						</div>
					</div>
				</div>
			</div>
		);
	}
}