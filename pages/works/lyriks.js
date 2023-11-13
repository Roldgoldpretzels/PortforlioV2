import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Lyriks">
    <Container>
      <Title>
        Lyriks <Badge>2022</Badge>
      </Title>
      <P>
      Lyriks is a music streaming application that emulates the popular features of Spotify while adding unique functionality to enhance the user experience. 
      One of the standout features of our clone is the integration of local suggestions based on the user&apos;s area. 
      By utilizing location data, our app provides personalized recommendations, playlists, and music charts that are tailored to the user&apos;s geographical region.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, RapidAPI, Postman</span>
        </ListItem>
        <ListItem>
          <Meta>Git Repo</Meta>
          <Link href="https://github.com/Roldgoldpretzels/Lyriks">
            Lyriks, a music streaming app{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/lyriks_01.jpg" alt="lyriks" />
      <WorkImage src="/images/works/lyriks_02.jpg" alt="lyriks" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
