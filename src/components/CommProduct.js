import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

export const CommProduct = props => {

	return (

		<Card style={{ width: '30%', margin: '1%' }}>
		<CardActionArea>
		<Link to={`/SingleProductPage/${props.article.ArticleNumber}`}>

		  <CardMedia
			image={props.img}
			title="Contemplative Reptile"
			style={{height: 200}}
		  >
			<img ></img>
		  </CardMedia>
	  
		 
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			{props.article.Description}
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			Pris: {props.article.SalesPrice} SEK
			</Typography>
		  </CardContent>
		  </Link>
		</CardActionArea>
	
	  </Card>
		// <div className="productCards">
		// 	{/* <div className="hover-container">
		// 					<button type="button" src="#" className="btn btn-primary">
		// 						MER INFO
		// 					</button>
		// 				</div> */}
		// 	<div className="card-view">
		// 		<img className="card-img" src={props.img} alt="Card cap" />
		// 		<a href="#!">
		// 			<div className="mask rgba-white-slight" />
		// 		</a>
		// 	</div>
		// 	<div className="title-container">
		// 		<h4 className="card-title">{props.title}</h4>
		// 		<p>{props.article.Description}</p>
		// 	</div>
		// </div>
	);
};
