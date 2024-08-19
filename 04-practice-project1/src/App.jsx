import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputisValid = userInput.duration > 0;

	function handleChange(inputId, val) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputId]: +val
			};
		});
	}

	return (
		<>
			<Header />
			<UserInput onChange={handleChange} userInput={userInput} />
			{!inputisValid && <p className="center">Please enter a duration greater than zero.</p>}
			{inputisValid && <Result input={userInput} />}
		</>
	);
}

export default App
