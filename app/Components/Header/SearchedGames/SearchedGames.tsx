'use client';
import {
    setSearchedGames,
    useSearchedTitle,
    useSearchedGames,
} from '../../Stores/GameStore';
import Image from 'next/image';
export default function SearchedGames() {
    const searchWord = useSearchedTitle();
    const searchedGames = useSearchedGames();
    const setSearchWord = setSearchedGames;

    return (
        <div className="relative flex w-3xl flex-col">
            <input
                type="text"
                placeholder="Поиск игр..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pr-4 pl-12 focus:border-transparent focus:ring-2 focus:ring-purple-500 focus:outline-none"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
            {searchWord && (
                <div className="absolute top-[110%] flex w-full flex-col">
                    {searchedGames.map((game) => (
                        <div
                            className="flex h-20 w-full justify-between border-b border-b-gray-100 bg-white p-3"
                            key={game.id}
                        >
                            <div className="flex items-center gap-5">
                                <div className="h-full w-30">
                                    <Image
                                        src={game.cover_image_url}
                                        alt={game.title}
                                        width={500}
                                        height={500}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>
                                <h2>{game.title}</h2>
                            </div>
                            <p className="self-center text-xl text-purple-600">
                                {game.price} Р
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
