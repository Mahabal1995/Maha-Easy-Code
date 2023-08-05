import React from 'react';
import Link from 'next/link';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
  
const WelcomeCard = () => {
    return (
        <Box width="60%" height="400px" m="auto" mt="100px">
          <Card>
            {/* <CardMedia
              component="img"
              height="10%"
              image="/java-icon.png"
              alt="java"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Welcome to JAVA World
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
              Java is a high-level, class-based, object-oriented programming language,  intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.
              </Typography>
            </CardContent>
            <CardActions>
              <Button><a href='https://en.wikipedia.org/wiki/Java_(programming_language)' target="_blank">Learn More</a></Button>
              <Button><Link href="/java-topics">Core Java Topics</Link></Button>
            </CardActions>
          </Card>
        </Box>
      );
}

export default WelcomeCard
