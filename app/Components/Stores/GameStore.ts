import {create,StateCreator} from 'zustand';
import {Game} from './../../Types/GameDatabaseTypes';
import axios from 'axios';
import { createJSONStorage, devtools, persist } from 'zustand/middleware'


interface IGameStore{
    categoryGame: string;
    games:Game[];
    loading:boolean;
    categoryGames:Game[];
    fetchGames: () => Promise<void>;
    setCategory:(filter:string) => void;
    searchedGames:Game[];
    searchTitle:string;
    setSearch:(searchTitle:string) => void;
}

const GameStore: StateCreator<IGameStore,[["zustand/devtools",never],["zustand/persist",unknown]]> = ((set,get) => ({
    games:[],
    loading:true,
    categoryGame:'Все игры',
    categoryGames:[],
    searchedGames:[],
    searchTitle:'',
    fetchGames :async () => {
        try{
            const response = await axios.get<Game[]>('api/games');
            set({games:response.data});
            get().setCategory(get().categoryGame);
        }catch(err){
            console.error(err);
            return;
        }finally{
            set({loading:false})
        }
    },

    setCategory : (category:string) => {
        const { games } = get();
        let result = games;
        if (category !==" "  && category !== 'Все игры') {
            result = games.filter((game) => game.genres?.name == category);
        }
        set({categoryGame: category, categoryGames: result });
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

export const setCategory = (category:string) => useGameStore.getState().setCategory(category);
export const useCategoryGame = () => useGameStore((state)=> state.categoryGame);
export const useCategoryGames = () => useGameStore((state) => state.categoryGames);

export const setSearchedGames = (title:string) => useGameStore.getState().setSearch(title);
export const useSearchedTitle = () => useGameStore((state) => state.searchTitle);
export const useSearchedGames = () => useGameStore((state) => state.searchedGames);