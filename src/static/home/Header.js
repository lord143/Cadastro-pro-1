import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Button size="small" href='/'>Produtos</Button>
        <Typography 
          component="h2" 
          variant="h5" 
          color="inherit" 
          align="center"          
          sx={{ flex: 1 }}>
          {title}
        </Typography>
        <IconButton>          
        </IconButton>
        <Button 
          variant="outlined" 
          size="small"
          sx={{marginRight: 1, fontSize: 11}}
          href='/login'>          
            Sign In          
        </Button>

        <Button 
          variant="outlined" 
          size="small"
          sx={{fontSize: 10}}
          href='/register'>          
            Sign Up                   
        </Button>      
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', flexWrap: 'wrap' }}>
          {sections.map((section) => (
            <Link
                color="inherit"                
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0}}
              >
              {section.title}
            </Link>
          ))}
      </Toolbar>    
      
      
    </React.Fragment>
  );
}
Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;