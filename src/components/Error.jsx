import React from 'react'
import useCotizador from '../hooks/useCortizador'

export default function Error () {

    const { error } = useCotizador()

    return (
        <div className='bg-red-400 py-4 border-l-4 border-l-red-700'>
            <h1 className='px-4 text-white font-bold'>{error}</h1>
        </div>
    )

}
