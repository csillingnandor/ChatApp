import { render } from 'preact';
import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ChatService';

function App() {
	//let [loggedIn, setLoggedIn] = useState(false);

	let [renderCount, setRenderCount] = useState(1)

	useEffect(() => {
		// const listener = () => setLoggedIn(!!chatService.inbox);
		const listener = () => setRenderCount(x => x + 1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);


	return chatService.inbox ? <Main /> : <Login />
}

render(<App />, document.getElementById('app'));
