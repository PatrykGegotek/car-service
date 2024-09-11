import car1 from '../images/car1.png'
import car2 from '../images/car2.png'
import car3 from '../images/car3.png'

export default function Gallery() {
    return <>
        <div className="pl-20">
            <div className="">
                <div className="pr-1 text-blue-500 font-roboto-condensed">Prezentacja firmy</div>
                <div className="pr-1 text-3xl font-bebas-neue">Zobacz naszą Galerię zdjęć</div>
                <div className="pr-1 mt-3 flex text-sm font-roboto-flex">
                    <div className="mr-6 text-blue-500 border-b-2 border-blue-500">Samochody osobowe</div>
                    <div className="mx-3">Samochody dostawcze</div>
                </div>
            </div>
            <div className="mt-20 flex overflow-hidden">
                <img src={car1} className="mr-10" alt="car 1"/>
                <img src={car2} className="mr-10" alt="car 2"/>
                <img src={car3} className="mr-10" alt="car 3"/>
            </div>
        </div>
        <div className="px-20 pt-14 pb-20">
            <div className="flex items-center justify-center">
                <div className="w-2 h-2 mx-1 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 mx-1 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    </>
}