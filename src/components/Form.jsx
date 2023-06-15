import React, { Fragment } from 'react'
import { MARCAS, PLANES, YEARS } from '../constants'
import useCotizador from '../hooks/useCortizador'
import Error from './Error'

export default function Form () {

    const { handleChangeData, data, setError, error, cotizarSeguro } = useCotizador()

    const handleSubmit = e => {

        e.preventDefault()

        if (Object.values(data).includes('')) {

            setError('Todos los campos son obligatorios')

        } else {

            setError('')
            cotizarSeguro()

        }

    }

    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        onChange={e => handleChangeData(e)}
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-300"
                        value={data.marca}
                    >
                        <option value="">-- Seleccione --</option>
                        {MARCAS.map((marca) => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-300"
                        onChange={e => handleChangeData(e)}
                        value={data.year}

                    >
                        <option value="">-- Seleccione --</option>
                        {YEARS.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un plan
                    </label>
                    <div className='flex gap-3 items-center'>
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label className="block font-bold text-gray-400 uppercase">
                                    {plan.nombre}
                                </label>

                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    className='w-5 h-5'
                                    onChange={e => handleChangeData(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input type='submit' value='Cotizar' className='bg-gray-700 hover:bg-gray-900 w-full p-3 text-white uppercase font-bold cursor-pointer transition' />
            </form>
        </>
    )

}
