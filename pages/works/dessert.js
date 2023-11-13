import React, { useEffect, useState } from 'react'
import {
  Container,
  Badge,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
// import VoxelDog from '../../components/voxel-dog';

const Work = () => {
  const [setModelUrl] = useState("/popsicle.glb"); // default model URL

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes('dessert-stickers')) {
        setModelUrl("/popsicle.glb");
      }
    }
  }, []);

  return (
    <Layout title="Dessert Stickers">
      <Container>
        <Title>
        Dessert Stickers <Badge>2023-WIP</Badge>
        </Title>
        <P>
        Our sticker shop showcases a delightful collection of 3D models inspired by cute Asian desserts. Every design captures the essence and charm of popular sweet treats from across the continent. Not only can users view these lifelike representations, but they can also interact with them, allowing for an immersive experience. 
        </P>

        <List ml={4} my={4}>
          <ListItem>

          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next.js / TypeScript / Vercel / Shopify / Three.js / Blender
            </span>
          </ListItem>

        </List>
      </Container>
    </Layout>
  );
}

export default Work;
export { getServerSideProps } from '../../components/chakra';
