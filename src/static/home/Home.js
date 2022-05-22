import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Footer from './Footer';


const sections = [
  { title: 'Trator', url: '#' },
  { title: 'Implementos', url: '#' },
  { title: 'Plantadeiras', url: '#' },
  { title: 'Gado', url: '#' },
  { title: 'Colheitadeira', url: '#' },
 
];

const mainFeaturedPost = {  
  description:
    "Produtor Forte.",
  image: 'https://www.cnabrasil.org.br/assets/images/noticias/gado-2.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Força',
    date: 'Nov 12',
    description:
      'Realizando os seus sonhos...',
    image: 'https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2021/04/casamento-istock.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Trabalho',
    date: 'Nov 11',
    description:
      'Realizando seus desejos de uma vida...',
    image: 'https://static.wixstatic.com/media/fd65b5_ee1b1c605cb5491687571c4f35db693a~mv2.jpeg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fd65b5_ee1b1c605cb5491687571c4f35db693a~mv2.jpeg',
    imageLabel: 'Image Text',
  },
];
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Container maxWidth="lg" >     
        <Header title="Grupo LMA" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Realize seus Sonhos" />            
          </Grid>
        </main>
      </Container>
      <Footer
        title="NoivApp"
        description="Realize seus Sonhos!"
      />
    </ThemeProvider>
  );
}