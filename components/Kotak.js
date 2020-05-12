import Link from 'next/link';
import { CardContent, CardActions, CardMedia, Typography, Card, Button, makeStyles } from '@material-ui/core';

const style = makeStyles((theme) => ({
    media: {
      flexGrow: 1,
      minHeight: '200px'
    },
}));

const Kotak = ({cardClass, image, title, content, link}) => {
    const classes = style();
    return (
        <Card className={`card ${cardClass}`}>
            {image ?  <CardMedia 
                className={`${classes.media} card-media`}
                image={image} 
                title={title}   
            /> : ''}           
            <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={link.href} as={link.as}>
                    <Button size="small" color="primary" className="action">{link.label}</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Kotak;
