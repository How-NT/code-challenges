import { Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const ComingSoonView: FunctionComponent = () => {
  return (
    <Stack
      direction="column"
      flexGrow={1}
      p={5}
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Typography variant="h2" color="tertiary.main">
        Coming soon
      </Typography>
      <Typography color="caption">
        We are working hard to get the feature up and running.
      </Typography>
    </Stack>
  );
};
