import { useState } from "react";

export default function ShelfPrototype() {
  const [selectedDrawer, setSelectedDrawer] = useState(null);

  const drawers = Array.from({ length: 144 }, (_, i) => {
    const row = Math.floor(i / 12);
    const col = i % 12;
    const number = String(i + 1).padStart(3, "0");
    return { id: number, top: row * 8.3, left: col * 8.3 };
  });

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/shelf.png')" }}>
      {drawers.map((drawer) => (
        <button
          key={drawer.id}
          className="absolute w-[8.3%] h-[8.3%] bg-transparent border border-transparent hover:border-white"
          style={{ top: `${drawer.top}%`, left: `${drawer.left}%` }}
          onClick={() => setSelectedDrawer(drawer)}
        >
          <span className="sr-only">{drawer.id}</span>
        </button>
      ))}

      {selectedDrawer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">
              引き出し {selectedDrawer.id}
            </h2>
            <p className="text-gray-700">中身は準備中です。</p>
            <button
              onClick={() => setSelectedDrawer(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}