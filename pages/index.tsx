import { useEffect, useMemo, useState } from "react";
import { BtcSvg, EthSvg, TetherSvg } from "../public/assets/svg";
import PriceDisplay from "../components/priceDisplay";
import InputPrice from "../components/inputPrice";

export default function Home() {
  const BTCUSDT = "btcusdt";
  const ETHUSDT = "ethusdt";
  const [btcPrice, setBtcPrice] = useState<string>();
  const [ethPrice, setEThPrice] = useState<string>();

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
          priceText={btcPrice?.split(".")[0]}
        />
        <PriceDisplay
          svg={<EthSvg height={30} width={30} />}
          coinName={"Ethereum"}
          priceText={ethPrice?.split(".")[0]}
        />
        <p className="text-xs text-slate-400">real time prices</p>
        <InputPrice
          svg={<TetherSvg height={30} width={30} />}
          inputName="tether"
          currencyName="Tether"
          currencySymbol="USDT"
        />
        <InputPrice
          svg={<BtcSvg height={30} width={30} />}
          inputName="bitcoin"
          currencyName="Bitcoin"
          currencySymbol="BTC"
        />
      </div>
    </div>
  );
}
