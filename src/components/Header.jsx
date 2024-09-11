import logo from '../images/logo.png'


export default function Header() {
    return <>
        <div className="p-4 mx-20 flex items-center justify-center z-20">
            <div className="flex-1">
                <img src={logo} className="h-8" alt="logo"/>
            </div>
            <div className="flex justify-center flex-1 z-20 font-roboto-flex">
                <p className="px-3">Galeria zdjęć</p>
                <p className="px-3">FaQ</p>
            </div>
            <div className="flex-1 text-end z-30">
                <button className="bg-blue-600 text-white text-sm py-3 px-5 rounded-md font-roboto-flex">Zadzwoń do nas</button>
            </div>
        </div>
    </>
}