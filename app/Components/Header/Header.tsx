import { LuGamepad2, LuShoppingCart, LuUser } from "react-icons/lu";

export default function Header() {
  return (
    <div className="top-0 z-50 mx-auto flex max-w-7xl justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="rounded-lg bg-purple-600 p-2">
          <LuGamepad2 className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-950">KFF</h1>
          <p className="text-sm text-gray-500">Магазин игровых ключей</p>
        </div>
      </div>
      <div className="w-3xl">
        <input
          type="text"
          placeholder="Поиск игр..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>
      <div className="flex gap-10">
        <button className="rounded-md p-3 transition-colors hover:bg-gray-100">
          <LuShoppingCart className="h-6 w-6 text-gray-700" />
        </button>
        <button className="rounded-lg p-3 transition-colors hover:bg-gray-100">
          <LuUser className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
