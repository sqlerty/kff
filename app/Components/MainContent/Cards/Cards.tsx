'use client';
import { useEffect } from 'react';
import LoadingCards from './LoadingCards/LoadingCards';
import GameCard from './GameCard/GameCard';

import {
    fetchGames,
    useCategoryGames,
    useLoading,
} from '../../Stores/GameStore';

export default function Cards() {
    const loading = useLoading();
    const categoriedGames = useCategoryGames();
    useEffect(() => {
        fetchGames();
    }, []);

    if (loading) return <LoadingCards />;
    return (
        <div className="grid w-full grid-cols-4 gap-5 pt-10">
            {categoriedGames.map((game) => (
                <GameCard game={game} key={game.id} />
            ))}
        </div>
    );
}
