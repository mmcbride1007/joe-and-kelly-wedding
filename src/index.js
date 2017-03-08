import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/index.css'

const Root = () => {
	return (
		<App />
	)
}

render(<Root />, document.getElementById('root'))