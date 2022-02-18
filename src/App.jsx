import { ItemProvider } from "./context/ItemContext";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <ItemProvider>
      <Home />
    </ItemProvider>
    
    );
}
