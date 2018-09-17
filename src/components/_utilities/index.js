import React from 'react'

const utilities = () => {
    const environment = process.env.NODE_ENV
    if (environment !== 'production') {
        /* eslint-disable */
        const { whyDidYouUpdate } = require('why-did-you-update')
        /* eslint-enable */
        whyDidYouUpdate(React)
    }
    /* eslint-disable */
    console.log('NODE_ENV', environment)
    /* eslint-enable */
}

export default utilities
