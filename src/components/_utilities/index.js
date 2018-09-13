import React from 'react'

class Utilities {
    run() {
        const environment = process.env.NODE_ENV
        if (environment !== 'production') {
            /* eslint-disable */
            const { whyDidYouUpdate } = require('why-did-you-update')
            /* eslint-enable */
            whyDidYouUpdate(React)
        }
        console.log('NODE_ENV', environment)
    }
}

export default Utilities
