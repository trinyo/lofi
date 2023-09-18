import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "./Container";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#7D7C7C] font-mono">
      <Navbar />
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;
