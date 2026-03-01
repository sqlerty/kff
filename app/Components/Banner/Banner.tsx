import { IoSparklesSharp } from 'react-icons/io5';

export default function Banner() {
    return (
        <div className="inset-0 mx-auto h-100 max-w-7xl rounded-2xl bg-linear-to-r from-purple-900/90 via-purple-900/70 to-transparent">
            <div className="flex justify-between gap-5">
                <div className="flex flex-col justify-between gap-20 p-10">
                    <div className="flex items-center gap-2">
                        <IoSparklesSharp className="h-6 w-6 text-yellow-400" />
                        <p className="text-yellow-400 uppercase">
                            Эксклюзивные предложения
                        </p>
                    </div>
                    <h1 className="max-w-150 text-5xl font-bold text-white">
                        Лучшие игровые ключи по выгодным ценам
                    </h1>
                    <p className="text-xl text-white">
                        Мгновенная доставка • Официальные ключи • Гарантия
                        качества
                    </p>
                </div>
                <div className="h-100 w-155 rounded-2xl bg-[url(/img/peak-1.jpg)] bg-cover bg-no-repeat opacity-90"></div>
            </div>
        </div>
    );
}
