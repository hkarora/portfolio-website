import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hey, <br /> I'm Harshit Arora.
        </BigTitle>
        <Subtitle>
        A young passionate <b>Designer</b> with love for Open-Source and <b>Web development</b>.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard title="Portfolio Website" link="https://github.com/" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            My Portfolio website developed using GatsbyJs, where you are probably reading this right now.
          </ProjectCard>

        
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src="https://avatars.githubusercontent.com/hkarora" alt="Harshit Arora" />
          <AboutSub> Geek, Web-Developer, & Gamer.</AboutSub>
        </AboutHero>
        <AboutDesc>
        In a nutshell, that means that I sit at my shiny laptop all day long creating snazzy designs for cool folks and developing extraordinary website's like the one you are on right now.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:harshit13203@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://t.me/harshitarora">Telegram</a> ,<a href="https://www.instagram.com/0xharshit/">Instagram</a>{' '}
          </ContactText>
        </Inner>
        <Footer>
          &copy; { new Date().getFullYear() } by Harshit Arora <a href="https://github.com/hkarora">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
