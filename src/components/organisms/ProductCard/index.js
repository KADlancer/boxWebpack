import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const ProductCard = (props) => {
	console.log(props)
	return(
		<div>
			<Card >
				<CardMedia style={{height: 0, paddingTop: '56.25%'}}
						   image="https://picsum.photos/200/300"
						   title="Test Image"
				/>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						Lorem Ipsum
					</Typography>
					<Typography component="p">
						Longer Lorem Ipsum dolor sit amet
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" color="primary" href="https://google.com" target="_blank">
						Go To Google
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}

export default ProductCard;
