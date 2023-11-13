import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbIT from '../public/images/GoogleIT.jpg'
import thumbPM from '../public/images/GooglePM.jpg'


const Works = () => (
  
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Certifications
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="" title="Foundation of IT" thumbnail={thumbIT}>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fopm"
            title="Foundation of PM"
            thumbnail={thumbPM}
          >

          </WorkGridItem>
        </Section>
        <Section delay={0.1}>

        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
