import carBackground from '../images/car-background.png'
import waves from '../images/waves.png'

export default function CarMain() {
    return <>
        <div className="p-5 lg:p-20 mb-16 lg:mb-32 min-h-[580px] lg:min-h-[680px] relative bg-no-repeat bg-bottom-right">
            <div className="pt-2 text-6xl font-bebas-neue">
                Sprzedajemy samochody <br/> z Europy
            </div>
            <div className="py-10 font-roboto-condensed">Kup komfortowy pojazd, aby każda podróż <br/> była wyjątkowym przeżyciem.</div>
            <div className="pb-2 flex font-roboto-flex">
                <button className="bg-blue-600 text-white mr-6 py-3 px-5 rounded-lg z-20">Zobacz zdjęcia</button>
                <button className="bg-white border-blue-600 text-blue-600 border-2 py-3 px-5 rounded-lg z-20">Zadzwoń do nas</button>
            </div>
            <img src={waves} className="hidden lg:block absolute right-14 bottom-28" alt="car background"/>
            <img src={carBackground} className="absolute right-0 bottom-0" alt="car background"/>
        </div>
    </>
}