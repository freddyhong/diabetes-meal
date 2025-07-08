// components/Navigation.tsx
import React from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const pages = [
    { id: "guide", label: "Food Guide" },
    { id: "pamphlet", label: "Pamphlet" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b no-print">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">
              Diabetes Korean Food Guide
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => onPageChange(page.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  currentPage === page.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span>{page.label}</span>
              </button>
            ))}
          </div>

          {/* Print Button */}
          <div className="flex items-center space-x-3">
            {currentPage === "guide" && (
              <p className="text-xs text-blue-600">
                💡 Hover over any dish to see detailed nutrition information
              </p>
            )}
            {currentPage === "pamphlet" && (
              <>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>🖨️</span>
                  <span>Print PDF</span>
                </button>
                <p className="text-xs text-gray-500 max-w-48">
                  💡 Enable "Background graphics" in print options for colors
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
