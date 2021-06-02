import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/ui/Header";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="Container">
      <Header />
    </div>
  );
}

export default App;
