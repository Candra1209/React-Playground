import { Hero } from '../component/Hero'
import InfoPage from '../component/InfoPage'
import { LinkItem } from '../component/LinkItem'

function LinkPage() {
    const info = {
        tittle : "Hallo! Candra Here",
        massage : "web site ini dibuat untuk menampilkan berbagai page yang telah saya buat sehingga anda dapat melihat dan mecoba secara langsung setiap web fitur yang saya coba pelajari dan buat."
    }
    return (
        <>
            <div>
                <Hero/>
            </div>
            <div className='flex justify-end p-2'>
                <InfoPage infoTitle={info.tittle} massage={info.massage}/>
            </div>
            <div className='
            flex flex-col items-center gap-3 py-5
            '>
                <div className='grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    <LinkItem styleLink=" rounded-xl ring-1 ring-warna-4 hover:ring-0 hover:bg-warna-4 hover:text-white  font-semibold font-Plus-Jakarta-Sans text-warna-4 text-center min-w-[200px] py-2 "/>
                </div>
            </div>
        </>
    )
}

export default LinkPage
