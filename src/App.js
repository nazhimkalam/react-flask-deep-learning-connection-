import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
	const [response, setResponse] = useState('');

	const uploadedImage = (e) => {
		let files = e.target.files;
		let reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			const URL__ENDPOINT = 'http://localhost:5000/predict';
			console.log(files[0]);
			const formData = new FormData();
			formData.append('file', files[0], files[0].name);
			console.log(files[0]);
		    axios.post(URL__ENDPOINT, formData).then((res) => {
				console.log(res);
				setResponse(res.data)
			});
		};
	};

	return (
		<div className="app">
			<div className="sectionOne">
				<h3>COVID DETECTON</h3>
			</div>

			<div className="sectionTwo">
				<input type="file" name="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e) => uploadedImage(e)} />
			</div>

			<div className="sectionThree">
				<h2>{response}</h2>
			</div>
		</div>
	);
}

export default App;

// Referenced
// https://www.youtube.com/watch?v=XeiOnkEI7XI

// btn-predict
// imageUpload
