import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loader from "./loading";
const Home = React.lazy(() => import("./pages/Home"));
const BookNow = React.lazy(() => import("./pages/BookNow"));
const RoomDetails = React.lazy(() => import("./pages/RoomDetails"));

const AppRoutes = () => (
  <>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/online-booking" element={<Home />} />
          <Route index element={<Navigate to="online-booking" replace />} />
          <Route path="/:RoomTypeName" element={<RoomDetails />} />
          <Route path="/:RoomTypeName/booknow" element={<BookNow />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </Suspense>
    </Router>
  </>
);

export default AppRoutes;
