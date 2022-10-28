import { useEffect, useMemo, useState } from "react";

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
    <div className="">
      <p>{btcPrice && btcPrice?.split(".")[0]}</p>
      <p>{ethPrice && ethPrice?.split(".")[0]}</p>
    </div>
  );
}
