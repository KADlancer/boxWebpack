module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/**/index.{js,jsx}',
    ],
    "setupFiles": ["jest-date-mock"],
}
