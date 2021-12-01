import React from "react";
import profile from "./images/profile.png";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import ReactTOPdf from "react-to-pdf";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
`;
const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #141E30;
    transform: scale(5);
    cursor: pointer;
    `;

const Button = styled.button`
   font: 
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-heright: 1.5;
  letter-spacing: 1.5;
  font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
  line-heright: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;
const ref = React.createRef();

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GlassCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledImg src={profile} />
      <StyledH1>Victor Marinho Correa</StyledH1>
      <StyledH3>
        Data Scientist <br /> Full Stack Developer
      </StyledH3>
      <SocialIcons href="https://github.com/vicmcorrea">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/victor-marinho-correa-001893220">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <br />

      <div>
        <ReactTOPdf targetRef={ref} filename="port.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Download My Resume</button>}
        </ReactTOPdf>
      </div>
    </Container>
  );
};

export default GlassCard;
