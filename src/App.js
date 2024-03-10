import './App.css';
import styled from 'styled-components'

const Div = styled.div`
	text-align: center;
	color: red;
`

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Div>123</Div>
				<i className="fa fa-battery-half" ></i>
			</header>
		</div>
	);
}

export default App;
