import { ItemProvider } from "./context/ItemContext";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import './App.css'

export default function App() {
  return (
    <ItemProvider>
    <div className="home">

      <Home className="component"/>
      <Header className="component"/>
    </div>
    </ItemProvider>
    
    );
}
