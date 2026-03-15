'use client';
import { setCategory, useCategoryGame } from '../../Stores/GameStore';
export default function Filter() {
    const filterGame = useCategoryGame();
    const categories = [
        'Все игры',
        'РПГ',
        'Экшен',
        'Стратегии',
        'Гонки',
        'Хорроры',
        'Инди',
    ];
    const filters = [
        'Популярные',
        'Цена: по возрастанию',
        'Цена: по убыванию',
        'По рейтингу',
        'Новинки',
    ];

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-5">
                {categories.map((item) => (
                    <button
                        key={item}
                        className={`h-12 w-30 cursor-pointer rounded-lg font-semibold shadow-lg transition-all ${filterGame == item ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        onClick={() => setCategory(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-700">Сортировка:</p>
                <div className="flex gap-5">
                    {filters.map((item) => (
                        <button
                            key={item}
                            className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
