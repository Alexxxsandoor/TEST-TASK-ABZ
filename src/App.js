import { Header } from "./components/header/Header";
import { Title } from "./components/title/Title";
import { UsersList } from "./components/users/UsersList";
import { SingUp } from "./components/singUp/SingUp";




function App() {
	return (
		<>
			<Header />

			<Title />
			<div className="container">
				<UsersList />
				<SingUp />
			</div>
		</>
	);
}






export default App;








