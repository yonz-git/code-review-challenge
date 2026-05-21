import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  //Lifted States
  const [productToBuy, setProductToBuy] = useState();

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        setProduct={setProductToBuy}
        productToBuy={productToBuy}
      />
    </>
  );
}
