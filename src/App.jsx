import { ItemProvider } from "./context/ItemContext";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <ItemProvider>
      <Header />
      <Home />
    </ItemProvider>
    
    );
}
