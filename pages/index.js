import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import githubLOGO from '../public/images/Github logo.gif'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based in Maryland!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Toan Le
          </Heading>
          <p>Software Enginner ( Artist / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pfp.gif"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Toan is a software developer based in Maryland. He graduated from the
          University of Maryland, Baltimore County (
          <Link as={NextLink} href="https://umbc.edu/" passHref scroll={false}>
            UMBC
          </Link>
          ) with a Bachelor&apos;s degree in Computer Science. With a strong
          foundation in computer science principles and a passion for
          programming, Toan has honed his skills in various programming
          languages and technologies. He is currently developing a game similar
          to &quot;
          <Link
            as={NextLink}
            href="https://animal-crossing.com/"
            passHref
            target="_blank"
          >
            Animal Crossing
          </Link>
          &quot; and learning new ways to improve.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Silver Spring, Maryland.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Started studying at University of Maryland, Baltimore County for
          Computer Science
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed B.S. in Computer Science and started work at NFM Lending as IT Support and Developer
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Finished Google IT Technical Support Fundamentals and Google Foundation of Project Management Cert
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as a Freelancer on the side
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Traveling, Volleyball, Pixel Art, Film Photography, Game Development
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Roldgoldpretzels" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Image src={githubLOGO} boxSize="20px" />}
                >
                @Roldgoldpretzels
              </Button>
            </Link>
          </ListItem>
        </List>

      

        <Heading as="h3" variant="section-title">
          Contact Me
        </Heading>
        <p>
          I&apos;m always open to new opportunities, collaborations, and discussions.
          Whether you have a project idea, a job opportunity, or simply want to
          chat about all things related to my portfolio, don&apos;t hesitate to get
          in touch. I look forward to hearing from you!
        </p>

        <Box align="center" my={4}>
          <Button
            as="a"
            href="mailto:toanle.41700@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Email me here!
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
