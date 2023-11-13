import { Paper } from "@mui/material";
import { ComingSoonView } from "components/coming-soon-view";
import { PaperHeader } from "components/page-header";

export const ExchangeStep4: React.FC = () => {
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
          title="Step 4 - Exchange"
          subtitle="Wait for your transaction to be completed"
        />

        <ComingSoonView />
      </Paper>
    </>
  );
};
