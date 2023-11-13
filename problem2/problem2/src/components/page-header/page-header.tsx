import { Stack, StackProps, Typography } from "@mui/material";
import React from "react";

interface PaperHeaderProps extends StackProps {
  title: string;
  subtitle?: string | React.ReactNode;
  guideIcon?: React.ReactNode;
}

const PaperHeader: React.FC<PaperHeaderProps> = ({
  title,
  subtitle,
  guideIcon,
  ...props
}) => {
  return (
    <Stack direction="column" gap={1.5} paddingBottom={3} {...props}>
      <Stack direction="row">
        <Typography variant="subtitle1" color="info.main">
          {title}
        </Typography>
        {guideIcon}
      </Stack>
      {subtitle && (
        <Typography variant="caption" color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
};

export { PaperHeader };
