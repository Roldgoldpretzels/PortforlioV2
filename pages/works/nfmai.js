import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="NFM AI">
    <Container>
      <Title>
        NFMGPT <Badge>2023-Present</Badge>
      </Title>
      <P>
        A text extration AI that allows underwater to gather the correct information for their guidelines with accurary.
        Using Pinecone, the database holds more than 1000 files and query between each different vector. While storing the chat history for each individual user
        Deployed on AWS cloud with SSO authentication
      </P>
      <List ml={4} my={4}>
        <ListItem>

        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Yarn, Pinecone, LangChain, OpenAI, MySQL, Vector Database</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/nfmai_01.png" alt="nfmai" />
      <WorkImage src="/images/works/nfmai_02.png" alt="nfmai" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
