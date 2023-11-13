import { Paper, Stack } from "@mui/material";
import { PaperHeader } from "components/page-header";
import { WalletAddressField } from "../fields/address-field";
import { FORM_FIELDS } from "../form-field";

const {
  WALLET_ADDRESS: { EXCHANGE_RECIPIENT_ADDRESS, EXCHANGE_REFUND_ADDRESS },
} = FORM_FIELDS;

export const WalletAddressStep2: React.FC = () => {
  return (
    <>
      <Paper
        sx={{
          padding: [2, 2, 5],
          paddingTop: [2, 2, 3],
          width: { xs: "100%", lg: "90%", xl: "85%", xxl: "80%" },
          boxShadow: "none",
        }}
      >
        <PaperHeader
          title="Step 2 - Wallet address"
          subtitle="Fill in the crypto wallet address details"
        />

        <Stack direction="column" gap={3}>
          <WalletAddressField
            name={EXCHANGE_RECIPIENT_ADDRESS.name}
            label={EXCHANGE_RECIPIENT_ADDRESS.label}
            tooltip={EXCHANGE_RECIPIENT_ADDRESS.tooltip}
          />
          <WalletAddressField
            name={EXCHANGE_REFUND_ADDRESS.name}
            label={EXCHANGE_REFUND_ADDRESS.label}
            tooltip={EXCHANGE_REFUND_ADDRESS.tooltip}
          />
        </Stack>
      </Paper>
    </>
  );
};
