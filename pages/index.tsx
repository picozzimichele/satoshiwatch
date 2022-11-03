import { useEffect, useMemo, useState } from "react";
import { BtcSvg, EthSvg, SatoshiSvg, TetherSvg } from "../public/assets/svg";
import PriceDisplay from "../components/priceDisplay";
import InputPrice from "../components/inputPrice";

export default function Home() {
  const BTCUSDT = "btcusdt";
  const ETHUSDT = "ethusdt";
  const [btcPrice, setBtcPrice] = useState<number | string>();
  const [ethPrice, setEThPrice] = useState<number | string>();
  const [btcAmount, setBtcAmount] = useState<number | string>();
  const [satsAmount, setSatoshiAmount] = useState<number | string>();
  const [tetherAmount, setTetherAmount] = useState<number | string>();

  function initWebsocket(tokenpair, setCoinPrice) {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${tokenpair}@trade`
    );

    ws.onopen = () => {
      console.log("Connection Established!");
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

  useEffect(() => {
    initWebsocket(BTCUSDT, setBtcPrice);
    initWebsocket(ETHUSDT, setEThPrice);
  }, []);

  return (
    <div className="flex w-full bg-blue-100 items-center justify-center">
      <div className="flex flex-col bg-green-100 h-screen pt-10 w-[90%] gap-2">
        <PriceDisplay
          svg={<BtcSvg height={30} width={30} />}
          coinName={"Bitcoin"}
          priceText={btcPrice?.toString().split(".")[0]}
        />
        <PriceDisplay
          svg={<EthSvg height={30} width={30} />}
          coinName={"Ethereum"}
          priceText={ethPrice?.toString().split(".")[0]}
        />
        <p className="text-xs text-slate-400">real time prices from Binance</p>
        <InputPrice
          svg={<TetherSvg height={30} width={30} />}
          inputName="tether"
          currencyName="Tether"
          currencySymbol="USDT"
          onChange={(e) => {
            setTetherAmount(e.target.value);
            calculateCurrentBtcAmountFromTether(btcPrice, e.target.value);
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
            calculateCurrentBtcPrice(btcPrice, e.target.value);
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
            calculateFromSatoshiAmount(e.target.value, btcPrice);
            checkInputValues(e.target.value);
          }}
          value={satsAmount}
        />
      </div>
    </div>
  );
}
