import { NextResponse } from "next/server";
import { supabase } from "@/app/BackendClient/supabase";

export const dynamic = 'force-dynamic';

export async function GET() {
    try{
        const {data,error} = await supabase.from('games').select(`*,genres(id,name),platforms(id,name,icon_url)`).order('created_at',{ascending:false});

        if (error){
            console.error('Supabase error:',error);
            return NextResponse.json({error:error.message},{status:500});
        }

        return NextResponse.json(data);
    }catch(err){
        console.error('Неизвестная ошибка:',err);
        return NextResponse.json({error:"Внутренняя ошибка сервера"},{status:500});
    }

}