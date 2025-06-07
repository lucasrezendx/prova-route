import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div">
          Prova Router - JSONPlaceholder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;