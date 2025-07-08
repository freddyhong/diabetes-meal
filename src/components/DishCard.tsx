type DishCardProps = {
  image: string;
  nameKr: string;
  nameEn: string;
  nutrition: string[];
  full_nutrition: string[];
  suggestion: string;
  warning?: string;
  isMobile?: boolean;
  isLastColumn?: boolean;
};

const DishCard = ({
  image,
  nameKr,
  nameEn,
  nutrition,
  full_nutrition,
  suggestion,
  warning,
  isMobile = false,
  isLastColumn = false,
}: DishCardProps) => (
  <div
    className={`flex items-center gap-3 relative group ${
      isMobile
        ? "py-2 px-3 border border-gray-200 rounded-md bg-white shadow-sm"
        : "py-3 px-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
    }`}
  >
    <div className="flex-shrink-0">
      <img
        src={image}
        alt={nameEn}
        className={`rounded-full object-cover border-2 border-gray-200 ${
          isMobile ? "w-12 h-12" : "w-14 h-14 md:w-16 md:h-16"
        }`}
      />
    </div>

    {!isMobile && (
      <div
        className={`absolute top-0 w-72 z-[9999] 
                bg-white border border-gray-300 rounded-lg p-3 shadow-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                ${isLastColumn ? "right-0 mr-30" : "left-0 ml-20"}`}
        style={{
          zIndex: 9999,
        }}
      >
        {warning && (
          <div className="text-red-600 font-semibold text-sm mb-3 p-2 bg-red-50 rounded border-l-4 border-red-400">
            {warning}
          </div>
        )}
        <div className="mb-3">
          <h4 className="font-semibold text-gray-800 mb-2">Nutrition Facts</h4>
          <div className="space-y-1">
            <div className="flex">
              <span className="text-sm text-gray-700 w-24">Carbs:</span>
              <span className="font-medium text-sm text-gray-900">
                {full_nutrition[0]}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-700 w-24">Added Sugar:</span>
              <span className="font-medium text-sm text-gray-900">
                {full_nutrition[1]}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-700 w-24">Protein:</span>
              <span className="font-medium text-sm text-gray-900">
                {full_nutrition[2]}
              </span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-700 w-24">Fiber:</span>
              <span className="font-medium text-sm text-gray-900">
                {full_nutrition[3]}
              </span>
            </div>
          </div>
        </div>
        {suggestion && (
          <div className="p-2 bg-blue-50 rounded border-l-4 border-blue-400">
            <h5 className="font-medium text-blue-800 mb-1">Suggestion</h5>
            <p className="text-sm text-blue-700">{suggestion}</p>
          </div>
        )}
      </div>
    )}

    <div className="flex-1 min-w-0 mr-3">
      <div
        className={`font-semibold text-gray-900 leading-tight ${
          isMobile ? "text-sm" : "text-base"
        }`}
      >
        {nameKr}
      </div>
      <div
        className={`text-gray-500 italic leading-tight mt-1 ${
          isMobile ? "text-xs" : "text-sm"
        }`}
      >
        {nameEn}
      </div>

      {/* Mobile: Show nutrition below text */}
      {isMobile && nutrition.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {nutrition.map((fact, i) => (
            <span
              key={i}
              className={`px-2 py-1 rounded text-xs font-medium ${
                fact.toLowerCase().includes("high sodium")
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {fact}
            </span>
          ))}
        </div>
      )}

      {/* Mobile: Show warning if exists */}
      {isMobile && warning && (
        <div className="mt-2 text-xs text-red-600 font-medium">{warning}</div>
      )}
    </div>

    {/* Desktop: Show nutrition on the right */}
    {!isMobile && nutrition.length > 0 && (
      <div className="hidden lg:block max-w-[150px] xl:max-w-[200px]">
        <ul className="text-xs xl:text-sm space-y-1">
          {nutrition.map((fact, i) => (
            <li
              key={i}
              className={`px-2 py-1 rounded text-center font-medium ${
                fact.toLowerCase().includes("high sodium")
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default DishCard;
