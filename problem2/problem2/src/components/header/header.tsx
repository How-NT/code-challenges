import ArticleIcon from '@mui/icons-material/Article';
import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { IconLinkRouter, LinkRouter } from 'components/link-router';
import { routes } from 'configs/routes';
import { useNavigate } from 'react-router-dom';
export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(routes.login());
    sessionStorage.setItem('isLogin', null);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 3,
        height: 100,
        backgroundColor: grey[200],
      }}>
      <LinkRouter to={routes.root()}>
        <Box>Logo</Box>
      </LinkRouter>

      <IconLinkRouter to={routes.myRecords()}>
        <ArticleIcon fontSize="small" />
        Menu 1
      </IconLinkRouter>

      <IconLinkRouter to={routes.myRecords()}>
        <ArticleIcon fontSize="small" />
        Menu 2
      </IconLinkRouter>
      <IconLinkRouter to={routes.myRecords()}>
        <ArticleIcon fontSize="small" />
        Menu 3
      </IconLinkRouter>
      {sessionStorage.getItem('isLogin') === 'true' && (
        <Button onClick={handleLogout}>Logout</Button>
      )}
    </Box>
  );
};
