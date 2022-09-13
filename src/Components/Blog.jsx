import React from 'react'
import {
  Card, Box, Typography, Avatar, CardHeader, IconButton,
  CardMedia, CardContent, CardActions, Checkbox
} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import post from "../Images/img4.jpeg";

const data = [
  {
    id: 1,
    Avatar: "RV",
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests",
  },
]

const Blog = () => {
  return (
    <Box flex={4} p={2}>
      {data.map(items => (
        // <div>
        //   <h1>rvfgg</h1>
        //   {items.id}, ,,, 
        // </div>
        <Card sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                {items.Avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={items.title}
            subheader={items.subheader}
          />
          <CardMedia
            component="img"
            height="250"
            image={post}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {items.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}

    </Box>
  )
}

export default Blog