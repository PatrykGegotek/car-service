import arrowDown from '../images/arrow-down.png'

export default function Footer() {
    return <>
        <div className="bg-[#282828] text-white">
            <div className="flex justify-between items-center p-5 lg:p-20">
                <div className="flex-1 mr-5 lg:mr-0">
                    <div className="text-2xl font-bebas-neue uppercase py-2">Id nostrud enim esse consectetur in eu
                        mollit fugiat aute. Velit nulla commodo.
                    </div>
                    <div className="text-sm font-roboto-condensed py-2">Mauris varius ipsum mauris, rutrum lobortis
                        magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
                        venenatis eros ipsum ac arcu. Vestibulum et [...]
                    </div>
                    <div className="text-sm font-roboto-condensed py-2 flex ">
                        <div className="flex items-center pb-1 border-b-2 border-gray-200 cursor-pointer">
                            <p>Rozwiń</p>
                            <img src={arrowDown} className="h-3 ml-2"/>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ml-5 lg:ml-0">
                    <div className="text-2xl font-bebas-neue uppercase py-2">Id nostrud enim esse consectetur in eu
                        mollit fugiat aute. Velit nulla commodo.
                    </div>
                    <div className="text-sm font-roboto-condensed py-2">Mauris varius ipsum mauris, rutrum lobortis
                        magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac
                        venenatis eros ipsum ac arcu. Vestibulum et [...]
                    </div>
                    <div className="text-sm font-roboto-condensed py-2 flex ">
                        <div className="flex items-center pb-1 border-b-2 border-gray-200 cursor-pointer">
                            <p>Rozwiń</p>
                            <img src={arrowDown} className="h-3 ml-2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between px-5 lg:px-20 py-5 border-t-2 border-white font-roboto-condensed ">
                <div className="font-semibold">Cars Spot</div>
                <div className="border-b border-gray-200">Polityka prywatności</div>
            </div>
        </div>
    </>
}