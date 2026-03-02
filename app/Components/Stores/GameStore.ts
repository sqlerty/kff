import {create,StateCreator} from 'zustand';
import {Game} from './../../Types/GameDatabaseTypes';
import axios from 'axios';
import { createJSONStorage, devtools, persist } from 'zustand/middleware'


interface IGameStore{
    filterGame: string;
    games:Game[];
    loading:boolean;
    filteredGames:Game[];
    fetchGames: () => Promise<void>;
    setFilter:(filter:string) => void;
    searchedGames:Game[];
    searchTitle:string;
    setSearch:(searchTitle:string) => void;
}

const GameStore: StateCreator<IGameStore,[["zustand/devtools",never],["zustand/persist",unknown]]> = ((set,get) => ({
    games:[],
    loading:true,
    filterGame:'Все игры',
    filteredGames:[],
    searchedGames:[],
    searchTitle:'',
    fetchGames :async () => {
        try{
            const response = await axios.get<Game[]>('api/games');
            set({games:response.data});
            get().setFilter(get().filterGame);
        }catch(err){
            console.error(err);
            return;
        }finally{
            set({loading:false})
        }
    },

    setFilter : (category:string) => {
        const { games } = get();
        let result = games;
        if (category !==" "  && category !== 'Все игры') {
            result = games.filter((game) => game.genres?.name == category);
        }
        set({filterGame: category, filteredGames: result });
    },
    setSearch: (title : string) => {
        set({searchTitle:title});
        const {games} = get();
        let result = games;
        
        if(title && title !==""){
            result = games.filter((game) => game.title.startsWith(title));
        }
        set({searchedGames:result});
    }

}));


const useGameStore = create<IGameStore>()(
        devtools(
            persist(GameStore, {
                name: "game-storage",
                storage:createJSONStorage(()=>localStorage),
                partialize: (state) => ({games: state.games})
            })
        )
);


export const useGames = () => useGameStore((state)=> state.games);
export const useLoading = () => useGameStore((state) => state.loading);
export const fetchGames = () => useGameStore.getState().fetchGames();

export const setFilter = (category:string) => useGameStore.getState().setFilter(category);
export const useFilterGame = () => useGameStore((state)=> state.filterGame);
export const useFilteredGames = () => useGameStore((state) => state.filteredGames);

export const setSearchedGames = (title:string) => useGameStore.getState().setSearch(title);
export const useSearchedTitle = () => useGameStore((state) => state.searchTitle);
export const useSearchedGames = () => useGameStore((state) => state.searchedGames);