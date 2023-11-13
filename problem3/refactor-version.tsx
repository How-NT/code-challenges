interface Balance {
  currency: string;
  amount: number;
}

type WalletBalance = Balance & {
  blockchain: BLOCK_CHAIN_TYPE;
};

interface FormattedWalletBalance extends Balance {
  formatted: string;
}
  
// define interface for api getPrice
interface Price {
  currency: string;
  date: string;
  price: number;
}

class Datasource {
  private apiPath: string;

  public constructor(apiPath: string) {
    this.apiPath = apiPath;
  }

  public getPrices = async () => {
    return fetch(this.apiPath)
            .then(res => res.json())
            .then(data => data.reduce((result, item) => {
              result = {...result, [item.currency]: item.price}
              return result;
            }, {}))
  }
}

// define enum for blockchain
enum BLOCK_CHAIN_TYPE {
  OSMOSIS = 'Osmosis',
  ETHEREUM = 'Ethereum',
  ARBITRUM = 'Arbitrum',
  ZILLIQA = 'Zilliqa',
  NEO = 'Neo',
}

const blockChainPriority = {
  [BLOCK_CHAIN_TYPE.OSMOSIS]: 100,
  [BLOCK_CHAIN_TYPE.ETHEREUM]: 50,
  [BLOCK_CHAIN_TYPE.ARBITRUM]: 30,
  [BLOCK_CHAIN_TYPE.ZILLIQA]: 20,
  [BLOCK_CHAIN_TYPE.NEO]: 20,
}

const BLOCK_CHAIN_PRIORITY_DEFAULT = -99;
const getPriority = (blockchain: BLOCK_CHAIN_TYPE): number => {
  return blockChainPriority[blockchain] || BLOCK_CHAIN_PRIORITY_DEFAULT;
}

type Props = BoxProps;

const WalletPage: React.FC<PropsWithChidren<Props>> = ({children, ...rest}) => {
  const balances = useWalletBalances();
    const [prices, setPrices] = useState<Record<string, Price>>({});

  const fetchPrices = () => {
    const datasource = new Datasource("https://interview.switcheo.com/prices.json");
    datasource.getPrices().then(prices => {
      setPrices(prices);
    }).catch(() => {
      // handle error
    });
  }


  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => {
          const balancePriority = getPriority(balance.blockchain);
      return balancePriority > BLOCK_CHAIN_PRIORITY_DEFAULT && balance.amount <= 0
        }).sort((currentBalance: WalletBalance, nextBalance: WalletBalance) => {
            const leftPriority = getPriority(currentBalance.blockchain);
          const rightPriority = getPriority(nextBalance.blockchain);
          if (leftPriority > rightPriority) {
            return -1;
          } else if (rightPriority > leftPriority) {
            return 1;
          } else {
        return 0;
      }
    });
  }, [balances]);

  const formattedBalances:FormattedWalletBalance = useMemo(() => sortedBalances.map((balance: WalletBalance) => {
    return {
      ...balance,
      formatted: balance.amount.toFixed()
    }
  }, [sortedBalances]);

  const listWallet = useMemo(() => formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = (prices[balance.currency] * balance.amount) || 0;
    return (
      <WalletRow
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  }, [formattedBalances])

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div {...rest}>
      {rows}
    </div>
  )
}