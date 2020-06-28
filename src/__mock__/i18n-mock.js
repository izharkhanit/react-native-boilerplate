import React from 'react'

const react_i18n = jest.genMockFromModule('react-i18n')

const translate = () => Component => props => <Component t={() => ''} {...props} />

react_i18n.translate = translate

module.exports = react_i18n