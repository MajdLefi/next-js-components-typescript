import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

interface ServiceItem {
    img: string;
    title: string;
    desc: string;
}

const data: ServiceItem[] = [
    {
        img: "/assets/imgs/image1.png",
        title: "Flight planning",
        desc: "Our staff of professional and certified dispatchers use the state-of-the-art flight planning systems to provide reliable and accurate flight plans that work in compliance with all the stakeholders involved.",
    },
    {
        img: "/assets/imgs/image2.png",
        title: "Aircraft management",
        desc: "Our tailored management programs allow you to enjoy your aircraft. We take care of the day-to-day details.",
    },
    {
        img: "/assets/imgs/image3.png",
        title: "Staffing Your cabin is a place of calm",
        desc: "Personalized just for you. We work one-on-one to find you the perfect crew.",
    },
    {
        img: "/assets/imgs/image4.png",
        title: "Transportation",
        desc: "Soltane Aviation Services provides you with excellent services that includes comfort and reliability. We respect your time and thus punctuality is crucial. We guarantee our staff’s on time arrival and your satisfaction.",
    },
];

interface CardProps {
    bg: string;
    activated: boolean;
}

const Card = styled.div<CardProps>`
  background-image: ${(props) =>
        props.activated
            ? `linear-gradient(
      to right bottom,
      rgba(235, 70, 70, 0.452),
      rgba(132, 8, 8, 0.632)
    ), ${props.bg}`
            : props.bg};
  cursor: pointer;
  height: 550px;
  flex: ${(props) => (props.activated ? 1.4 : 1)};
  background-size: cover;
  background-position: left;
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  position: relative;
`;

interface NumberProps {
    activated: boolean;
}

const Number = styled.span<NumberProps>`
  position: absolute;
  font-size: 50px;
  font-weight: 700;
  z-index: 100;
  top: 0;
  right: 0;
  margin-right: 10px;
  color: ${(props) => (props.activated ? "white" : "transparent")};
  -webkit-text-stroke: 2px white;
`;

export default function OurServices() {
    const [active, setActive] = useState<number>(0);

    return (
        <Container sx={{ mb: '80px' }}>
            <Typography variant='h3' sx={{ color: "primary.light", fontFamily: "Poppins", textAlign: 'center', mb: '30px', }}>
                Our services
            </Typography>
            <Box sx={{ display: "flex", padding: "0px 10px" }}>
                {data &&
                    data.map((item, idx) => (
                        <Card key={idx} bg={`url(${item.img})`} onClick={() => setActive(idx)} activated={active === idx}>
                            <Number activated={active === idx}>{idx + 1}</Number>
                            {active === idx && (
                                <Box sx={{}}>
                                    <Typography style={{ color: "white", fontSize: 36, fontWeight: "600" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography style={{ color: "white", fontSize: 27 }} display={{ xs: 'none', md: 'block' }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            )}
                        </Card>
                    ))}
            </Box>
        </Container>
    );
}
