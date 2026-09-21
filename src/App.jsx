import { Routes, Route } from "react-router";

import Layout from "./components/Layout";

import Mission from "./pages/Mission";
import Endurance from "./pages/Endurance";
import WormholePage from "./pages/WormholePage";
import Crew from "./pages/Crew";
import MissionLog from "./pages/MissionLog";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Mission />} />
        <Route path="/endurance" element={<Endurance />} />
        <Route path="/wormhole" element={<WormholePage />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/mission-log" element={<MissionLog />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;