import logo from '../images/logo.png'


export default function Header() {
    return <>
        <div className="sm:py-4 mx-5 lg:mx-20 flex flex-wrap sm:flex-row items-center justify-center z-20">
            <div className="flex-1 py-3 sm:py-0 min-w-96 sm:min-w-10 mx-10 sm:mx-0 flex justify-center sm:block">
                <img src={logo} className="h-12 sm:h-8" alt="logo"/>
            </div>
            <div className="flex justify-items-start sm:justify-center min-w-10 py-3 sm:py-0 mr-10 sm:mr-0 flex-1 font-roboto-flex">
                <p className="px-3 content-center z-20">Galeria zdjęć</p>
                <p className="px-3 content-center z-20">FaQ</p>
            </div>
            <div className="sm:flex-1 sm:text-end min-w-10 py-3 sm:py-0 z-20">
                <button className="bg-blue-600 text-white py-3 px-5 rounded-lg font-roboto-flex">Zadzwoń do nas</button>
            </div>
        </div>
    </>
}