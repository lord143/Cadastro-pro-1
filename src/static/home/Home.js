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
  { title: 'Sobre mim ', url: '#' },
  { title: 'Formação', url: '#' },
  { title: 'Experiência', url: '#' },
  { title: 'Formação Complementar', url: '#' },
  { title: 'Repositorios', url: '#' },
  {title: 'Contato', url: '#'},
  
 
];

const mainFeaturedPost = {  
  description:
    "DEV em Progresso.",
  image: 'https://www.tevec.com.br/wp-content/uploads/2020/12/TEVEC-0023_blog02_header_201701204_01.png',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Experiência',    
    description:
      'Trajetoria Profissional!!',
    image: 'http://www.desafiorh.com.br/blog/wp-content/uploads/2019/09/experiencia-usuario-ok.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Repositórios',    
    description:
      'Projetos em produção e feitos!!!',
    image: 'https://www.solucionex.com/sites/default/files/posts/imagen/git.jpg',
    imageLabel: 'Image Text',
  },
];
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Container maxWidth="lg" >     
        <Header title="Lucas Martins Arruda" sections={sections} />
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
        title="Lucas Martins Arruda"
        description="Contato: (61) 99298-2212/ (61) 99693-5671"
      />
    </ThemeProvider>
  );
}