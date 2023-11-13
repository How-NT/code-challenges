import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ErrorFallback() {
  return (
    <Box
      display="flex"
      flexGrow={1}
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      pr={3}
      sx={{ xs: { p: 2 } }}>
      <ErrorOutlineIcon sx={{ fontSize: 88, marginBottom: 3 }} />
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ paddingBottom: 1 }}>
        Uh no! Something went wrong on our end.
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="div"
        gutterBottom
        sx={{ paddingBottom: 3 }}>
        Please try again later
      </Typography>
    </Box>
  );
}
