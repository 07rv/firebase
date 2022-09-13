import { Box } from '@mui/material';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpeg";
import img4 from "../Images/img4.jpeg";
import img5 from "../Images/img5.jpeg";

const Slides = () => {
    return (
        <Box flex={4} p={0} sx={{ m: 1 , }}>
            <Carousel fade controls={false}>
                <Carousel.Item interval={3000}>
                    <img
                        height="400" width="388"
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption sx={{bgcolor: 'error.main'}}>
                        <Box sx={{height: '150px',}}>
                            <h1 sx={{alignItems: 'flex-start'}}>First slide label</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, 
                                obcaecati similique. Repellendus totam dignissimos et nobis sint ut corporis ratione! 
                                Illo perspiciatis eos voluptate sapiente eius eveniet delectus rerum nihil?</p>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        height="400" width="388"
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        height="400" width="388"
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        height="400" width="388"
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                        height="400" width="388"
                        className="d-block w-100"
                        src={img5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Fiveth slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Box>

    )
}

export default Slides