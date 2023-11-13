import { Paper } from "@mui/material";
import { ComingSoonView } from "components/coming-soon-view";
import { PaperHeader } from "components/page-header";

export const PaymentStep3: React.FC = () => {
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
          title="Step 3 - Payment"
          subtitle="Deposit the amount required for the exchange"
        />

        <ComingSoonView />
      </Paper>
    </>
  );
};
