import React from "react";
import { Navbar, UnorderList, List, StyledLink } from "../styled/NavbarStyles";
import {
  HeroSection,
  MidSection,
  TextContainer,
  ImageParent,
  Heading,
  Paragraph,
  Button,
} from "../styled/HeroSectionStyles";

import {
  Marketing,
  MarketingDivChild,
  SubHeading,
  OurService,
  ServiceImage,
} from "../styled/MarketingStyles";

import {
  Footer,
  FooterColumn,
  FooterText,
  Small,
  FooterGrey,
  LinkFooter,
} from "../styled/FooterStyles";

const Home = () => {
  const items = [
    {
      id: 1,
      name: "Local Business",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Online Store",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Blogging",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Portfolio",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    },
  ];

  const itemImage = [
    {
      id: 1,
      img: "/assets/webDeveloperImg.jpg",
    },
    {
      id: 2,
      img: "/assets/webDeveloperImg.jpg",
    },
    {
      id: 3,
      img: "/assets/webDeveloperImg.jpg",
    },
  ];

  return (
    <div>
      <HeroSection>
        <UnorderList>
          <StyledLink to="/">
            <List>Home</List>
          </StyledLink>
          <StyledLink to="/contact">
            <List>Contact Us</List>
          </StyledLink>
          <StyledLink to="/taskpage">
            <List>TaskPage</List>
          </StyledLink>
        </UnorderList>

        <MidSection>
          <TextContainer>
            <Heading>Your Idea Matters!</Heading>
            <Paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              iusto error asperiores quod qui deserunt distinctio necessitatibus
              quisquam? Quod, error?
            </Paragraph>
            <Button>Make a Website</Button>
          </TextContainer>

          <ImageParent>
            <img
              src="/assets/webDeveloperImg.jpg"
              alt="web"
              width="66%"
              height="100%"
            />
          </ImageParent>
        </MidSection>
      </HeroSection>
      <Marketing>
        {items.map((item) => (
          <MarketingDivChild key={item.id}>
            <img
              src="/assets/webDeveloperImg.jpg"
              alt="web"
              width={20}
              height={20}
            />
            <SubHeading>{item.name}</SubHeading>
            <Paragraph>{item.para}</Paragraph>
          </MarketingDivChild>
        ))}
      </Marketing>
      <OurService>
        <Heading>Our Services</Heading>
        <ServiceImage>
          {itemImage.map((item) => (
            <img key={item.id} src={item.img} alt="web" />
          ))}
        </ServiceImage>
      </OurService>
      <Footer>
        <FooterGrey>
          <LinkFooter>
            <small>Developer Log</small>
            <small>Subversion Repository</small>
            <small>Browse in Trac</small>
            <small>Trac Tickets</small>
          </LinkFooter>
        </FooterGrey>

        <FooterText>
          <FooterColumn>
            <Small>About</Small>
            <Small>News</Small>
            <Small>Hosting</Small>
            <Small>Privacy</Small>
          </FooterColumn>

          <FooterColumn>
            <Small>Showcase</Small>
            <Small>Themes</Small>
            <Small>Plugins</Small>
            <Small>Patterns</Small>
          </FooterColumn>

          <FooterColumn>
            <Small>Learn</Small>
            <Small>Documentation</Small>
            <Small>Developers</Small>
            <Small>WordPress.tv</Small>
          </FooterColumn>

          <FooterColumn>
            <Small>Get Involved</Small>
            <Small>Events</Small>
            <Small>Donate</Small>
            <Small>Swag Store</Small>
          </FooterColumn>

          <FooterColumn>
            <Small>WordPress.com</Small>
            <Small>Matt</Small>
            <Small>bbPress</Small>
            <Small>BuddyPress</Small>
          </FooterColumn>
        </FooterText>
      </Footer>
    </div>
  );
};

export default Home;
