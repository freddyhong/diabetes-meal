import React from "react";
import mealData from "../data/koreanMeal.json";

const DiabetesPamphlet: React.FC = () => {
  return (
    <div
      className="w-full bg-white text-black"
      style={{
        minHeight: "297mm",
        width: "210mm",
        margin: "0 auto",
        padding: "10mm",
      }}
    >
      {/* PAGE 1 - FOOD GUIDE */}
      {/* Header */}
      <div className="text-center mb-4">
        <div
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg inline-block mb-2 print:bg-blue-600 print:text-white"
          style={{ background: "#2563eb", color: "#ffffff" }}
        >
          <h1 className="text-xl font-bold">KOREAN FOOD GUIDE</h1>
          <p className="text-sm opacity-95">For Better Diabetes Management</p>
        </div>

        <div className="text-xs text-gray-700 max-w-2xl mx-auto">
          Focus on <span className="text-green-700 font-bold">green foods</span>
          , enjoy
          <span className="text-yellow-700 font-bold">
            {" "}
            yellow foods in moderation
          </span>
          , and
          <span className="text-red-700 font-bold"> limit red foods</span> for
          better blood sugar control.
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {/* Header Row */}
        <div className="bg-green-200 border-2 border-green-500 p-2 rounded-lg print:bg-green-200 print:border-green-500">
          <h3 className="font-bold text-center text-green-800 text-sm">
            🟢 EAT OFTEN
          </h3>
        </div>
        <div className="bg-yellow-200 border-2 border-yellow-500 p-2 rounded-lg print:bg-yellow-200 print:border-yellow-500">
          <h3 className="font-bold text-center text-yellow-800 text-sm">
            🟡 IN MODERATION
          </h3>
        </div>
        <div className="bg-red-200 border-2 border-red-500 p-2 rounded-lg print:bg-red-200 print:border-red-500">
          <h3 className="font-bold text-center text-red-800 text-sm">
            🔴 LIMIT
          </h3>
        </div>

        {/* Content Columns */}
        <div className="bg-green-100 p-2 border-2 border-green-300 rounded-lg print:bg-green-100 print:border-green-300">
          <div className="space-y-1">
            {mealData.dishes
              .filter((dish) => dish.frequency === "often")
              .map((dish, idx) => (
                <div
                  key={idx}
                  className="mb-1 py-2 px-2 bg-white rounded text-xs print:bg-white print:border-gray-300"
                >
                  <div className="font-medium text-gray-800">{dish.nameKr}</div>
                  <div className="text-gray-600 italic">{dish.nameEn}</div>
                  {dish.warning && (
                    <div className="text-red-600 font-medium">
                      {dish.warning}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="bg-yellow-100 p-2 border-2 border-yellow-300 rounded-lg print:bg-yellow-100 print:border-yellow-300">
          <div className="space-y-1">
            {mealData.dishes
              .filter((dish) => dish.frequency === "moderation")
              .map((dish, idx) => (
                <div
                  key={idx}
                  className="mb-1 py-2 px-2 bg-white rounded text-xs print:bg-white print:border-gray-300"
                >
                  <div className="font-medium text-gray-800">{dish.nameKr}</div>
                  <div className="text-gray-600 italic">{dish.nameEn}</div>
                  {dish.warning && (
                    <div className="text-red-600 font-medium">
                      {dish.warning}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="bg-red-100 p-2 border-2 border-red-300 rounded-lg print:bg-red-100 print:border-red-300">
          <div className="space-y-1">
            {mealData.dishes
              .filter((dish) => dish.frequency === "limit")
              .map((dish, idx) => (
                <div
                  key={idx}
                  className="mb-1 py-2 px-2 bg-white rounded text-xs print:bg-white print:border-gray-300"
                >
                  <div className="font-medium text-gray-800">{dish.nameKr}</div>
                  <div className="text-gray-600 italic">{dish.nameEn}</div>
                  {dish.warning && (
                    <div className="text-red-600 font-medium">
                      {dish.warning}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-3 mb-3 print:bg-blue-100 print:border-blue-400">
        <h3 className="font-bold text-blue-800 mb-2 text-sm">
          💡 DIABETES TIPS
        </h3>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p>• Replace white rice with brown rice</p>
            <p>• Focus on soup toppings, not broth</p>
            <p>• Pair fatty foods with vegetables</p>
          </div>
          <div>
            <p>• Use smaller plates and bowls</p>
            <p>• Monitor blood sugar regularly</p>
            <p>• Replace sweet drinks with water</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-600 border-t border-gray-400 pt-2">
        <p>
          <strong>Disclaimer:</strong> This guide is for educational purposes
          only. Consult your healthcare provider for personalized advice.
        </p>
      </div>

      {/* PAGE BREAK FOR SECOND PAGE */}
      <div className="break-before-page"></div>

      {/* PAGE 2 - MEAL PLAN */}
      {/* Header */}
      <div className="text-center mb-6 mt-4">
        <div
          className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg inline-block mb-2 print:bg-blue-600 print:text-white"
          style={{ background: "#2563eb", color: "#ffffff" }}
        >
          <h1 className="text-xl font-bold">KOREAN MEAL PLAN</h1>
          <p className="text-sm opacity-95">
            Daily Nutrition Guide for Diabetes Management
          </p>
        </div>
      </div>

      {/* Daily Recommended Intake */}
      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-4 mb-4 print:bg-blue-100 print:border-blue-400">
        <h3 className="font-bold text-blue-800 mb-3 text-base">
          📊 Daily Recommended Intake (일일 권장 섭취량)
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white p-3 rounded border print:bg-white">
            <h4 className="font-bold text-blue-700 mb-2">
              👨 Adult Male (성인 남자)
            </h4>
            <div className="space-y-1 text-xs">
              <p>🍚 Carbs (탄수화물): 300-400g</p>
              <p>🥩 Protein (단백질): 65-75g</p>
              <p>🍭 Sugar (당분): below 50g (50g 이하)</p>
            </div>
          </div>
          <div className="bg-white p-3 rounded border print:bg-white">
            <h4 className="font-bold text-blue-700 mb-2">
              👩 Adult Female (성인 여자)
            </h4>
            <div className="space-y-1 text-xs">
              <p>🍚 Carbs (탄수화물): 225-325g</p>
              <p>🥩 Protein (단백질): 50-60g</p>
              <p>🍭 Sugar (당분): below 40g (40g 이하)</p>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-xs text-blue-700">
            <span className="mr-3">🥩 Meat (고기)</span>
            <span className="mr-3">🥤 Drinks (음료)</span>
            <span className="mr-3">🥬 Vegetables (채소)</span>
            <span>🍪 Snacks (간식)</span>
          </p>
        </div>
      </div>

      {/* Portion Size Guide */}
      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-4 print:bg-yellow-100 print:border-yellow-400">
        <h4 className="font-bold text-yellow-800 mb-3 text-sm">
          ✋ Estimating Portion Sizes (분량 측정 가이드)
        </h4>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="mb-2">
              <p className="font-semibold">
                👊 A loose fist equals about 1 cup
              </p>
              <p className="text-gray-600">(milk, yogurt, dry cereal, etc.)</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">✋ A palm equals about 3 ounces</p>
              <p className="text-gray-600">(cooked, boneless meat)</p>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <p className="font-semibold">
                👍 A thumb equals about 1 ounce or 1 tablespoon
              </p>
              <p className="text-gray-600">(peanut butter or salad dressing)</p>
            </div>
            <div>
              <p className="text-gray-600 italic">
                Keep in mind that all hands are different sizes. Before you
                estimate, compare your fist size to a measuring cup.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meal Planning Tips */}
      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-3 mb-4 print:bg-orange-100 print:border-orange-400">
        <h3 className="font-bold text-orange-800 mb-2 text-sm">
          💡 Meal Planning Tips (식단 계획 팁)
        </h3>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p>
              • Use brown rice for carb control at every meal (매 끼니마다
              현미밥으로 탄수화물 조절)
            </p>
            <p>• Include protein in every meal (단백질을 매 끼니에 포함)</p>
            <p>
              • Prepare 3-4 vegetable side dishes (채소 반찬을 3-4가지 준비)
            </p>
          </div>
          <div>
            <p>
              • Focus on soup ingredients, not broth (국물 요리는 건더기 위주로
              섭취)
            </p>
            <p>
              • Limit snacks to 1-2 times per day (간식은 하루 1-2회로 제한)
            </p>
            <p>• Drink 8+ glasses of water daily (물을 하루 8잔 이상 마시기)</p>
          </div>
        </div>
      </div>

      {/* Sample Meal Plan */}
      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mb-4 print:bg-green-50 print:border-green-300">
        <h3 className="font-bold text-green-800 mb-3 text-base">
          🍽️ Sample Meal Plan (샘플 식단)
        </h3>

        {/* Meal Plan Table */}
        <div className="bg-white rounded border print:bg-white overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-green-100 print:bg-green-100">
                <th className="border border-gray-300 p-2 text-left font-bold">
                  Meal (식사)
                </th>
                <th className="border border-gray-300 p-2 text-left font-bold">
                  Food Items (음식)
                </th>
                <th className="border border-gray-300 p-2 text-center font-bold">
                  Carbs (탄수화물)
                </th>
                <th className="border border-gray-300 p-2 text-center font-bold">
                  Protein (단백질)
                </th>
                <th className="border border-gray-300 p-2 text-center font-bold">
                  Sugar (당분)
                </th>
                <th className="border border-gray-300 p-2 text-center font-bold">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Breakfast */}
              <tr>
                <td
                  className="border border-gray-300 p-2 font-semibold text-green-700"
                  rowSpan={6}
                >
                  🌅 Breakfast
                  <br />
                  (아침)
                </td>
                <td className="border border-gray-300 p-2">
                  Brown Rice (현미밥) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">45g</td>
                <td className="border border-gray-300 p-2 text-center">5g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
                <td
                  className="border border-gray-300 p-2 text-center"
                  rowSpan={6}
                >
                  <div className="font-semibold">
                    <div>Carbs: 65g</div>
                    <div>Protein: 25g</div>
                    <div>Sugar: 8g</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Soybean Stew (된장찌개)
                </td>
                <td className="border border-gray-300 p-2 text-center">8g</td>
                <td className="border border-gray-300 p-2 text-center">12g</td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Kimchi (배추김치)
                </td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Rolled Egg (계란말이)
                </td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">6g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Seasoned Spinach (시금치무침)
                </td>
                <td className="border border-gray-300 p-2 text-center">5g</td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Water (물) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
              </tr>

              {/* Page Break */}

              {/* <div className="break-before-page"></div> */}
              {/* Lunch */}
              <tr>
                <td
                  className="border border-gray-300 p-2 font-semibold text-green-700"
                  rowSpan={6}
                >
                  ☀️ Lunch
                  <br />
                  (점심)
                </td>
                <td className="border border-gray-300 p-2">
                  Brown Rice (현미밥) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">45g</td>
                <td className="border border-gray-300 p-2 text-center">5g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
                <td
                  className="border border-gray-300 p-2 text-center"
                  rowSpan={6}
                >
                  <div className="font-semibold">
                    <div>Carbs: 70g</div>
                    <div>Protein: 30g</div>
                    <div>Sugar: 10g</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Bulgogi (불고기) - 3 oz
                </td>
                <td className="border border-gray-300 p-2 text-center">5g</td>
                <td className="border border-gray-300 p-2 text-center">16g</td>
                <td className="border border-gray-300 p-2 text-center">4g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Beef Seaweed Soup (소고기미역국)
                </td>
                <td className="border border-gray-300 p-2 text-center">8g</td>
                <td className="border border-gray-300 p-2 text-center">8g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Seasoned Soybean Sprouts (콩나물무침)
                </td>
                <td className="border border-gray-300 p-2 text-center">6g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Kimchi (배추김치)
                </td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Green Tea (녹차) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
              </tr>

              {/* Spacing Row */}
              <tr className="h-4">
                <td colSpan={6} className="border-0 bg-transparent"></td>
              </tr>

              {/* Dinner */}
              <tr>
                <td
                  className="border border-gray-300 p-2 font-semibold text-green-700"
                  rowSpan={6}
                >
                  🌙 Dinner
                  <br />
                  (저녁)
                </td>
                <td className="border border-gray-300 p-2">
                  Brown Rice (현미밥) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">45g</td>
                <td className="border border-gray-300 p-2 text-center">5g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
                <td
                  className="border border-gray-300 p-2 text-center"
                  rowSpan={6}
                >
                  <div className="font-semibold">
                    <div>Carbs: 60g</div>
                    <div>Protein: 35g</div>
                    <div>Sugar: 6g</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Grilled Mackerel (고등어구이) - 3 oz
                </td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">18g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Beef Radish Soup (소고기무국)
                </td>
                <td className="border border-gray-300 p-2 text-center">7g</td>
                <td className="border border-gray-300 p-2 text-center">8g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Braised Tofu (두부조림)
                </td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">6g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Kimchi (배추김치)
                </td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Water (물) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
              </tr>
              {/* Spacing Row */}
              <tr className="h-4">
                <td colSpan={6} className="border-0 bg-transparent"></td>
              </tr>
              {/* Snacks */}
              <tr>
                <td
                  className="border border-gray-300 p-2 font-semibold text-green-700"
                  rowSpan={4}
                >
                  🍎 Snacks
                  <br />
                  (간식)
                </td>
                <td className="border border-gray-300 p-2">
                  Vegetable Kimbap (야채김밥) - 3 pieces
                </td>
                <td className="border border-gray-300 p-2 text-center">15g</td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td
                  className="border border-gray-300 p-2 text-center"
                  rowSpan={4}
                >
                  <div className="font-semibold">
                    <div>Carbs: 20g</div>
                    <div>Protein: 10g</div>
                    <div>Sugar: 6g</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Hongcho (홍초) - 1 cup
                </td>
                <td className="border border-gray-300 p-2 text-center">6g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
                <td className="border border-gray-300 p-2 text-center">3g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Nuts (견과류) - 1 oz
                </td>
                <td className="border border-gray-300 p-2 text-center">4g</td>
                <td className="border border-gray-300 p-2 text-center">6g</td>
                <td className="border border-gray-300 p-2 text-center">1g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Tofu (두부) - 1 piece
                </td>
                <td className="border border-gray-300 p-2 text-center">2g</td>
                <td className="border border-gray-300 p-2 text-center">4g</td>
                <td className="border border-gray-300 p-2 text-center">0g</td>
              </tr>

              {/* Daily Total */}
              <tr className="bg-green-200 print:bg-green-200 font-bold">
                <td
                  className="border border-gray-300 p-2 text-center"
                  colSpan={2}
                >
                  Daily Total (일일 총계)
                </td>
                <td className="border border-gray-300 p-2 text-center">215g</td>
                <td className="border border-gray-300 p-2 text-center">100g</td>
                <td className="border border-gray-300 p-2 text-center">30g</td>
                <td className="border border-gray-300 p-2 text-center">
                  Within recommended range for adults
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Print Styles */}
      {/* Print Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    /* Force background graphics in all browsers */
    * {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    
    @media print {
      body { 
        margin: 0; 
        -webkit-print-color-adjust: exact !important; 
        color-adjust: exact !important; 
        print-color-adjust: exact !important;
      }
      .no-print { display: none !important; }
      @page { 
        size: A4; 
        margin: 10mm !important;
      }
      
      /* Force inline styles for print */
      [style*="background: #2563eb"] { 
        background: #2563eb !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      [style*="color: #ffffff"] { 
        color: #ffffff !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* Background colors for print */
      .print\\:bg-blue-600 { background-color: #2563eb !important; }
      .print\\:text-white { color: #ffffff !important; }
      .print\\:bg-green-100 { background-color: #dcfce7 !important; }
      .print\\:bg-green-200 { background-color: #bbf7d0 !important; }
      .print\\:bg-green-50 { background-color: #f0fdf4 !important; }
      .print\\:bg-yellow-100 { background-color: #fef3c7 !important; }
      .print\\:bg-yellow-200 { background-color: #fde68a !important; }
      .print\\:bg-yellow-50 { background-color: #fefce8 !important; }
      .print\\:bg-red-100 { background-color: #fee2e2 !important; }
      .print\\:bg-red-200 { background-color: #fecaca !important; }
      .print\\:bg-blue-100 { background-color: #dbeafe !important; }
      .print\\:bg-white { background-color: #ffffff !important; }
      .print\\:bg-orange-100 { background-color: #fed7aa !important; }
      
      /* Border colors for print */
      .print\\:border-green-300 { border-color: #86efac !important; }
      .print\\:border-green-500 { border-color: #22c55e !important; }
      .print\\:border-yellow-300 { border-color: #fcd34d !important; }
      .print\\:border-yellow-500 { border-color: #eab308 !important; }
      .print\\:border-yellow-400 { border-color: #facc15 !important; }
      .print\\:border-red-300 { border-color: #fca5a5 !important; }
      .print\\:border-red-500 { border-color: #ef4444 !important; }
      .print\\:border-blue-400 { border-color: #60a5fa !important; }
      .print\\:border-orange-400 { border-color: #fb923c !important; }
      .print\\:border-gray-300 { border-color: #d1d5db !important; }
      
      /* Table styles for print */
      table { border-collapse: collapse !important; }
      th, td { 
        border: 1px solid #d1d5db !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    }
    
    /* Force background graphics in screen view too */
    @media screen {
      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `,
        }}
      />
    </div>
  );
};

export default DiabetesPamphlet;
