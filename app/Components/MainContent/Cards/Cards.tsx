'use client';
import { useEffect } from 'react';
import LoadingCards from './LoadingCards/LoadingCards';
import GameCard from './GameCard/GameCard';

import {
    fetchGames,
    useFilteredGames,
    useLoading,
    useGames,
} from '../../Stores/GameStore';

export default function Cards() {
    const loading = useLoading();
    const filteredGames = useFilteredGames();
    const games = useGames;
    useEffect(() => {
        fetchGames();
    }, [games]);

    if (loading) return <LoadingCards />;
    return (
        <div className="grid w-full grid-cols-4 gap-5 pt-10">
            {filteredGames.map((game) => (
                <GameCard game={game} key={game.id} />
            ))}
        </div>
    );
}
