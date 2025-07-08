// App.tsx
import { useState } from "react";
import KoreanMeal from "./pages/KoreanMeal";
import DiabetesPamphlet from "./pages/Pamphlet"; // You'll need to create this
import Navigation from "./components/Navigation"; // You'll need to create this

function App() {
  const [currentPage, setCurrentPage] = useState<string>("guide");

  const renderPage = () => {
    switch (currentPage) {
      case "guide":
        return <KoreanMeal />;
      case "pamphlet":
        return <DiabetesPamphlet />;
      default:
        return <KoreanMeal />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
