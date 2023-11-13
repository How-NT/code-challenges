import { CoinIem } from "api/coin";
import { apiPaths } from "configs/api-paths";
import { API_BASE_URL } from "constants/api";
import { rest } from "msw";
import { listCoinData } from "./fixtures/list-coins";

const prefix = (path: string) => {
  return `${API_BASE_URL}${path}`;
};

export const handlers = [
  rest.get<undefined, CoinIem[]>(
    prefix(apiPaths.listCoins()),
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(listCoinData));
    }
  ),
];
