import { Stack, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './';

const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p = {2} 
    sx={{ position:'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to="/VidTube" style={{ display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo" height = {45} />
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white'}} ml={{xs:'none', sm: '5px', md: '15px'}}> 
          Vid<span style={{ color: '#F31503'}}>Tube</span>
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  )

export default Navbar