import { createContext, useState } from 'react'
import { calculateMarca, calculatePlan, formatMoney, obtainDiferenceYear } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const cotizarSeguro = () => {

        let resultado = 2000

        const diferencia = obtainDiferenceYear(data.year)

        resultado -= ((diferencia * 3) * resultado) / 100

        resultado *= calculateMarca(data.marca)

        resultado *= calculatePlan(data.plan)

        resultado = formatMoney(resultado)

        setLoading(true)

        setTimeout(() => {

            setResult(resultado)
            setLoading(false)

        }
        , 3000)

    }

    const value = {
        handleChangeData,
        data,
        error,
        setError,
        cotizarSeguro,
        result,
        loading
    }

    return (
        <CotizadorContext.Provider value={value}>
            {children}
        </CotizadorContext.Provider>
    )

}

export {
    CotizadorProvider
}

export default CotizadorContext
