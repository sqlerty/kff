'use client'
import { LuShoppingCart } from 'react-icons/lu'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Game } from '@/app/Types/GameDatabaseTypes'
import Image from 'next/image'
export default function Cards() {
    const [games, setGames] = useState<Game[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get<Game[]>('api/games')
                setGames(response.data)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        fetchGames()
    }, [])

    return (
        <div className="flex w-full flex-wrap justify-between gap-5 pt-10">
            {games.map((game) => (
                <div
                    key={game.id}
                    className="group flex h-80 w-75 flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div className="h-[60%] max-w-75 rounded-2xl">
                        <Image
                            src={game.cover_image_url}
                            alt={game.title}
                            width={500}
                            height={500}
                            className="h-full w-full rounded-t-2xl object-cover"
                        />
                    </div>
                    <div className="p-5">
                        <h3 className="mb-2 line-clamp-2 h-12 font-semibold text-gray-900">
                            {game.title}
                        </h3>
                        <div className="flex items-center justify-between">
                            <p className="text-xl text-purple-600">
                                {game.price} Р.
                            </p>
                            <button className="rounded-lg bg-purple-600 p-3 text-white transition-colors hover:bg-purple-700">
                                <LuShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
