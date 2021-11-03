import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try for Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Run For Your Lives and Never Look Back</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              praesentium iste odit corporis voluptates, cupiditate repudiandae
              neque officiis. Aperiam natus sint recusandae facere saepe? Ipsa
              eligendi iste velit eius vitae!
            </p>
            <Button bg="#ff0099" color="#fff">
              Clicky Here
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
