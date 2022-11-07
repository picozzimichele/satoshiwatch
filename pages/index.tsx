import { useEffect, useMemo, useState } from "react";
import { BtcSvg, EthSvg, SatoshiSvg, TetherSvg } from "../public/assets/svg";
import PriceDisplay from "../components/priceDisplay";
import InputPrice from "../components/inputPrice";
import LivePriceDisplay from "../components/livePriceDisplay";
import BitfinexSvg from "../public/assets/svg/bitfinexSvg";
import BinanceSvg from "../public/assets/svg/binanceSvg";

export default function Home() {
  // Binance State
  const BTCUSDT = "btcusdt";
  const ETHUSDT = "ethusdt";
  const [btcPriceBinance, setBtcPriceBinance] = useState<number | string>();
  const [ethPriceBinance, setEThPriceBinance] = useState<number | string>();
  // Bitfinex State
  const BTCUSDTBFX = "tBTCUSD";
  const ETHUSDTBFX = "tETHUSD";
  const [btcPriceBitfinex, setBtcPriceBitfinex] = useState<number | string>();
  const [ethPriceBitfinex, setEthPriceBitfinex] = useState<number | string>();
  // Coin Calculator state
  const [btcAmount, setBtcAmount] = useState<number | string>();
  const [satsAmount, setSatoshiAmount] = useState<number | string>();
  const [tetherAmount, setTetherAmount] = useState<number | string>();
  const [nodesAmount, setNodesAmount] = useState<number | string>();

  function initWebsocketBinance(tokenpair, setCoinPrice) {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${tokenpair}@trade`
    );

    ws.onopen = () => {
      console.log("Connection Established Binance!");
    };

    ws.onmessage = (event) => {
      let stockObj = JSON.parse(event.data);
      setCoinPrice(stockObj.p);
    };

    ws.onclose = () => {
      console.log("Connection Closed!");
      //initWebsocket();
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }
  function initWebsocketBitfinex(tokenpair, setCoinPrice) {
    const ws = new WebSocket(`wss://api-pub.bitfinex.com/ws/2`);

    let msg = JSON.stringify({
      event: "subscribe",
      channel: "ticker",
      symbol: tokenpair,
    });

    ws.onopen = () => {
      console.log("Connection Established BFX!");
      ws.send(msg);
    };

    ws.onmessage = (event) => {
      let stockObj = JSON.parse(event?.data);
      if (
        stockObj !== undefined &&
        stockObj[1] !== undefined &&
        stockObj[1][6] !== undefined
      ) {
        setCoinPrice(stockObj[1][6]);
      }
    };

    ws.onclose = () => {
      console.log("Connection Closed!");
      //initWebsocket();
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }

  function calculateCurrentBtcPrice(btcPrice, btcAmount) {
    if (btcPrice && btcAmount) {
      setTetherAmount(Number(btcPrice) * Number(btcAmount));
    }
  }

  function calculateCurrentBtcAmountFromTether(btcPrice, tetherAmount) {
    if (btcPrice && tetherAmount) {
      setBtcAmount((Number(tetherAmount) / btcPrice).toFixed(8));
      setSatoshiAmount(
        ((Number(tetherAmount) / Number(btcPrice)) * 100000000).toFixed(0)
      );
    }
  }

  function calculateCurrentSatoshiAmountFromBtc(btcAmount) {
    if (btcAmount) {
      setSatoshiAmount((Number(btcAmount) / 0.00000001).toFixed(0));
    }
  }

  function calculateFromSatoshiAmount(satsAmount, btcPrice) {
    if (satsAmount && btcPrice) {
      setBtcAmount((Number(satsAmount) * 0.00000001).toFixed(8));
      setTetherAmount((Number(satsAmount) * 0.00000001 * btcPrice).toFixed(2));
    }
  }

  function checkInputValues(value) {
    if (value === "") {
      setBtcAmount("");
      setSatoshiAmount("");
      setTetherAmount("");
    }
  }

  async function fetchBtcNodes() {
    const res = await fetch("https://bitnodes.io/api/v1/snapshots/");
    const data = await res.json();
    setNodesAmount(data?.results[0].total_nodes);
  }

  useEffect(() => {
    fetchBtcNodes();
    initWebsocketBinance(BTCUSDT, setBtcPriceBinance);
    initWebsocketBinance(ETHUSDT, setEThPriceBinance);
    initWebsocketBitfinex(BTCUSDTBFX, setBtcPriceBitfinex);
    initWebsocketBitfinex(ETHUSDTBFX, setEthPriceBitfinex);
  }, []);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col h-screen pt-10 w-[90%] gap-2">
        <PriceDisplay
          svg={<BtcSvg height={30} width={30} />}
          coinName={"Bitcoin"}
          nodes={nodesAmount}
        />
        <div className="flex gap-2">
          <LivePriceDisplay
            priceText={btcPriceBinance?.toString().split(".")[0]}
            svg={<BinanceSvg height={16} width={16} />}
            bgColor="bg-white"
            exchangeName={"Binance"}
            pair={"BTC/USDT"}
          />
          <LivePriceDisplay
            priceText={btcPriceBitfinex?.toString().split(".")[0]}
            svg={<BitfinexSvg height={16} width={16} />}
            bgColor="bg-[#102331]"
            exchangeName={"Bitfinex"}
            pair={"BTC/USDT"}
          />
        </div>
        <PriceDisplay
          svg={<EthSvg height={30} width={30} />}
          coinName={"Ethereum"}
        />
        <div className="flex gap-2">
          <LivePriceDisplay
            priceText={ethPriceBinance?.toString().split(".")[0]}
            svg={<BinanceSvg height={16} width={16} />}
            bgColor="bg-white"
            exchangeName={"Binance"}
            pair={"ETH/USDT"}
          />
          <LivePriceDisplay
            priceText={ethPriceBitfinex?.toString().split(".")[0]}
            svg={<BitfinexSvg height={16} width={16} />}
            bgColor="bg-[#102331]"
            exchangeName={"Bitfinex"}
            pair={"ETH/USDT"}
          />
        </div>
        <div className="py-2"></div>
        <p className="text-xs text-slate-400">
          Calculate your exchange rate using real time prices from Binance
        </p>
        <InputPrice
          svg={<TetherSvg height={30} width={30} />}
          inputName="tether"
          currencyName="Tether"
          currencySymbol="USDT"
          onChange={(e) => {
            setTetherAmount(e.target.value);
            calculateCurrentBtcAmountFromTether(
              btcPriceBinance,
              e.target.value
            );
            checkInputValues(e.target.value);
          }}
          value={tetherAmount}
        />
        <InputPrice
          svg={<BtcSvg height={30} width={30} />}
          inputName="bitcoin"
          currencyName="Bitcoin"
          currencySymbol="BTC"
          onChange={(e) => {
            setBtcAmount(e.target.value);
            calculateCurrentBtcPrice(btcPriceBinance, e.target.value);
            calculateCurrentSatoshiAmountFromBtc(e.target.value);
            checkInputValues(e.target.value);
          }}
          value={btcAmount}
        />
        <InputPrice
          svg={<SatoshiSvg height={30} width={30} />}
          inputName="satoshis"
          currencyName="Satoshis"
          currencySymbol="SATS"
          onChange={(e) => {
            setSatoshiAmount(e.target.value);
            calculateFromSatoshiAmount(e.target.value, btcPriceBinance);
            checkInputValues(e.target.value);
          }}
          value={satsAmount}
        />
      </div>
    </div>
  );
}
