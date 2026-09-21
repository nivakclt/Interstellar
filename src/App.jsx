import { Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import Mission from "./pages/Mission";
import Endurance from "./pages/Endurance";
import WormholePage from "./pages/WormholePage";
import Crew from "./pages/Crew";
import Archive from "./pages/Archive";
import MissionLog from "./pages/MissionLog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Mission />} />
        <Route path="endurance" element={<Endurance />} />
        <Route path="wormhole" element={<WormholePage />} />
        <Route path="crew" element={<Crew />} />
        <Route path="archive" element={<Archive />} />
        <Route path="mission-log" element={<MissionLog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;