import { alpha, CircularProgress } from "@mui/material";
import Box from "@mui/system/Box";

const thickness = 3.5;

export interface RACircularProgressProps {
  size?: number;
  color?: string;
  bgColor?: string;
}

export const PageLoading: React.FC<RACircularProgressProps> = ({
  size = 56,
  color = "primary.main",
  bgColor,
}) => {
  const logoBgSize = size - 2 * thickness - 2 * (size / 10);

  return (
    <Box
      display="flex"
      flexGrow={1}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="relative" width={size} height={size} display="inline-flex">
        <CircularProgress
          variant="determinate"
          size={size}
          thickness={thickness}
          value={100}
          sx={{
            color: bgColor || alpha("#fff", 0.5),
            position: "absolute",
            left: 0,
          }}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          size={size}
          thickness={thickness}
          value={50}
          sx={{
            color,
            position: "absolute",
            left: 0,
            animationDuration: "800ms",
          }}
        />

        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width={logoBgSize}
            height={logoBgSize}
            sx={{
              backgroundColor: bgColor || "#fff",
              overflow: "hidden",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
