import mealData from "../data/koreanMeal.json";
import DishCard from "../components/DishCard";

const categories = [
  { label: "Soup / Stew", type: "Soup/Stew" },
  { label: "Rice / Noodle", type: "Rice/Noodle" },
  { label: "Side Dish", type: "Side Dish" },
  { label: "Meat", type: "Meat" },
  { label: "Snack", type: "Snack" },
  { label: "Drink", type: "Drink" },
];

const frequencies = [
  { label: "Eat often", value: "often" },
  { label: "Eat in moderation", value: "moderation" },
  { label: "Limit", value: "limit" },
];

const KoreanMeal1 = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-50 px-2 md:px-4 py-4 md:py-8 pb-32"
      style={{ overflow: "visible" }}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center text-gray-800">
        Korean Food Guide
      </h1>

      {/* Desktop Table View */}
      <div
        className="hidden lg:block w-full shadow-lg rounded-lg mb-32"
        style={{ maxWidth: "90rem", overflow: "visible" }}
      >
        <table
          className="min-w-[900px] w-full border border-gray-300 bg-white rounded-lg"
          style={{ overflow: "visible" }}
        >
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 text-xl py-6 px-4 w-48 bg-gray-100 font-bold text-gray-700"></th>
              <th className="border-b-2 border-gray-300 text-xl py-6 text-center bg-green-50 min-w-[280px] font-bold text-green-800 border-l border-gray-300">
                🟢 Eat often
              </th>
              <th className="border-b-2 border-gray-300 text-xl py-6 text-center bg-yellow-50 min-w-[280px] font-bold text-yellow-800 border-l border-gray-300">
                🟡 Eat in moderation
              </th>
              <th className="border-b-2 border-gray-300 text-xl py-6 text-center bg-red-50 min-w-[280px] font-bold text-red-800 border-l border-gray-300">
                🔴 Limit
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, index) => (
              <tr
                key={cat.type}
                className={`${index > 0 ? "border-t-2 border-gray-400" : ""}`}
              >
                <td className="border-r-2 border-gray-400 font-bold text-lg py-6 px-4 bg-gray-100 w-48">
                  <div className="whitespace-nowrap text-center flex items-center justify-center h-full text-gray-700">
                    {cat.label}
                  </div>
                </td>
                <td
                  className="align-top py-12 px-3 min-w-[280px] border-r border-gray-300 bg-green-25 relative"
                  style={{ overflow: "visible" }}
                >
                  <div className="space-y-3">
                    {mealData.dishes
                      .filter(
                        (dish) =>
                          dish.type === cat.type && dish.frequency === "often"
                      )
                      .map((dish, idx) => (
                        <DishCard key={idx} {...dish} />
                      ))}
                  </div>
                </td>
                <td
                  className="align-top py-12 px-3 min-w-[280px] border-r border-gray-300 bg-yellow-25 relative"
                  style={{ overflow: "visible" }}
                >
                  <div className="space-y-3">
                    {mealData.dishes
                      .filter(
                        (dish) =>
                          dish.type === cat.type &&
                          dish.frequency === "moderation"
                      )
                      .map((dish, idx) => (
                        <DishCard key={idx} {...dish} />
                      ))}
                  </div>
                </td>
                <td
                  className="align-top py-12 px-3 min-w-[280px] bg-red-25 relative"
                  style={{ overflow: "visible" }}
                >
                  <div className="space-y-3">
                    {mealData.dishes
                      .filter(
                        (dish) =>
                          dish.type === cat.type && dish.frequency === "limit"
                      )
                      .map((dish, idx) => (
                        <DishCard key={idx} {...dish} isLastColumn={true} />
                      ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden w-full max-w-md space-y-6">
        {categories.map((cat) => (
          <div
            key={cat.type}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gray-100 px-4 py-3 border-b-2 border-gray-300">
              <h2 className="text-lg font-bold text-gray-700 text-center">
                {cat.label}
              </h2>
            </div>

            {frequencies.map((freq) => {
              const dishes = mealData.dishes.filter(
                (dish) =>
                  dish.type === cat.type && dish.frequency === freq.value
              );

              if (dishes.length === 0) return null;

              const bgColor =
                freq.value === "often"
                  ? "bg-green-50"
                  : freq.value === "moderation"
                  ? "bg-yellow-50"
                  : "bg-red-50";
              const textColor =
                freq.value === "often"
                  ? "text-green-800"
                  : freq.value === "moderation"
                  ? "text-yellow-800"
                  : "text-red-800";
              const emoji =
                freq.value === "often"
                  ? "🟢"
                  : freq.value === "moderation"
                  ? "🟡"
                  : "🔴";

              return (
                <div key={freq.value} className={`${bgColor} px-3 py-4`}>
                  <h3
                    className={`text-sm font-semibold ${textColor} mb-3 text-center`}
                  >
                    <span className="mr-2">{emoji}</span>
                    {freq.label}
                  </h3>
                  <div className="space-y-2">
                    {dishes.map((dish, idx) => (
                      <DishCard key={idx} {...dish} isMobile={true} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KoreanMeal1;
