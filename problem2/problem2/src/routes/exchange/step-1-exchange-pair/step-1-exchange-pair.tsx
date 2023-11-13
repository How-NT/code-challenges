import { Paper, Stack } from "@mui/material";
import { PaperHeader } from "components/page-header";
import { ExchangeAction } from "../fields/exchange-action";
import { ExchangeField } from "../fields/exchange-from-field";
import { ListExchangeTypeOptionsField } from "../fields/list-exchange-type-option-field";

import { FORM_FIELDS } from "../form-field";
const {
  EXCHANGE_PAIR: { EXCHANGE_FROM, EXCHANGE_TO },
} = FORM_FIELDS;
export const ExchangePairStep1: React.FC = () => {
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
          title="Step 1 - Exchange pair"
          subtitle="Set the preferred exchange pair"
        />

        <Stack direction="column">
          <Stack direction="row">
            <ExchangeField
              name={EXCHANGE_FROM.name}
              label={EXCHANGE_FROM.label}
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            py={1}
          >
            <ExchangeAction />
          </Stack>
          <Stack direction="row">
            <ExchangeField name={EXCHANGE_TO.name} label={EXCHANGE_TO.label} />
          </Stack>

          <Stack py={3}>
            <ListExchangeTypeOptionsField />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
