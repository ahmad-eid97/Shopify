import Navbar from "./components/nav/Navbar";
import AllRoutes from "./router/AllRoutes";
import ItemsContextProvider from './components/contexts/ItemsContext'

function App() {
  return (
    <div className="rootPage">
      <ItemsContextProvider>
        <Navbar />
        <AllRoutes />
      </ItemsContextProvider>
    </div>
  );
}

export default App;
