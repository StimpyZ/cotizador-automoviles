import useCotizador from '../hooks/useCortizador'
import Form from './Form'
import Result from './Result'
import Spinner from './Spinner'

export default function AppSeguro () {

    const { loading } = useCotizador()

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
                {loading ? <Spinner /> : <Result />}
            </main>
        </>
    )

}
