import CheckIcon from "@mui/icons-material/Check";
import { Avatar, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CoinIem } from "api/coin";
interface Props {
  item: CoinIem;
  isSelected?: boolean;
  handleOnSelect: () => void;
}
export const CoinListItem: React.FC<Props> = ({
  item,
  isSelected,
  handleOnSelect,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={handleOnSelect}
      px={2}
      py={1}
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "grey.200",
        },
      }}
    >
      <Stack direction="row" gap={2} alignItems="center">
        <Box>
          <Avatar
            alt="Coin"
            src={`https://static.simpleswap.io/images/currencies-logo/${item.symbol}.svg`}
          />
        </Box>
        <Box>
          <Typography>{item.name}</Typography>
          <Typography
            variant="caption"
            color="grey.500"
            sx={{ textTransform: "uppercase" }}
          >
            {item.symbol}
          </Typography>
        </Box>
      </Stack>
      {isSelected && (
        <Box>
          <CheckIcon fontSize="small" sx={{ color: "primary.main" }} />
        </Box>
      )}
    </Stack>
  );
};
