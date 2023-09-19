import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "./Container";

import notes from "../notes_here.json";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#7D7C7C]">
      <Navbar />
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <Container notes={notes} />
      </div>
    </div>
  );
}

export default App;
