import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FrameToolbar from "./components/frameToolbar";
import SellingChartsFrame from "./components/sellingChartsFrame";
import SellingQualityFrame from "./components/sellingQualityFrame";
import OrdersFrame from "./components/ordersFrame";
import AdvicesForSellersFrame from "./components/advicesForSellersFrame";
import TopOffersFrame from "./components/topOffersFrame";
import RecentReviewsFrame from "./components/recentReviewsFrame";
import RecentRewievsSeeMore from "./components/recentReviewsSeeMore";
import OrdersUnsent from "./components/ordersUnsent";
import OrdersNotYetPaid from "./components/ordersNotYetPaid";
import OrdersReturns from "./components/ordersReturns";
import SellingQualitySeeMore from "./components/sellingQualitySeeMore";

const App = () => {
  //view
  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1> */}
        <div className="mainBox">
          <FrameToolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rewievs" element={<RecentRewievsSeeMore />} />
            <Route path="/quality" element={<SellingQualitySeeMore />} />
            <Route path="/unsent" element={<OrdersUnsent />} />
            <Route path="/notyetpaid" element={<OrdersNotYetPaid />} />
            <Route path="/returns" element={<OrdersReturns />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const Home = () => (
  <div className="mainBoxInside">
    <div className="mainBoxRow1">
      <SellingChartsFrame />
      <SellingQualityFrame />
      <div className="mainOrdersAndAdvicesForSellersCombinedFrame">
        <OrdersFrame />
        <AdvicesForSellersFrame />
      </div>
    </div>
    <div className="mainBoxRow2">
      <TopOffersFrame />
      <RecentReviewsFrame />
    </div>
  </div>
);

export default App;
