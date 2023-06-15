import React, { useCallback, useMemo, useRef } from 'react'
import useCotizador from '../hooks/useCortizador'
import { MARCAS, PLANES } from '../constants'

export default function Result () {

    const { result, data } = useCotizador()
    const { marca, year, plan } = data
    const yearRef = useRef(year)

    const [nameMarca] = useCallback(
        MARCAS.filter((m) => m.id === Number(marca)),
        [result]
    )
    const [namePlan] = useMemo(() => PLANES.filter((p) => p.id === Number(plan)), [result])

    if (result === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen de cotización
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nameMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año: </span>
                {yearRef.current}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {namePlan.nombre}
            </p>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotizacion: </span>
                {result}
            </p>
        </div>
    )

}
