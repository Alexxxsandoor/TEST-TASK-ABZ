import './singUp.css'
import { useState, useEffect } from 'react'
import { InputRadio } from './InputRadio'
import image from "./success-image.svg"

function SingUp() {
	const [singUpStatus, setStatus] = useState(false)
	const [positionslist, setPositionslist] = useState([])
	const [token, setToken] = useState('')
	const [statusPost, setStatusPost] = useState(false)
	const [Userinfo, setUserinfo] = useState({
		name: "",
		email: "",
		phone: "",
		position: 1,
		image: "",
	})

	//стиль для инпутов
	const style = {
		border: "1px solid  #D0CFCF",
		padding: "14px",
		borderRadius: "4px",
		marginTop: "50px",
		maxWidth: "90%"
	}

	//Получение картинки
	function handleChange(event) {
		setUserinfo({
			...Userinfo,
			image: event.target.files[0]
		})
	}

	//отправка информации о юзере
	function handleSubmit(props) {
		//получаю токен для юзера
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setToken(data.token)
			})
			.catch(function (error) { // proccess network errors 
			});

		//отправляю инфу на сервер
		var formData = new FormData();
		// var fileField = document.querySelector('input[type="file"]');
		formData.append('position_id', Userinfo.position);
		formData.append('name', Userinfo.name);
		formData.append('email', "Userinfo.email");
		formData.append('phone', '+38' + Userinfo.phone);
		formData.append('photo', Userinfo.image);
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
			{
				method: 'POST',
				body: formData,
				headers: {
					'Token': token,
				},
			})
			.then(function (response) { return response.json(); })
			.then(function (data) {
				if (data.success) {
					setStatusPost(true)
				} else {

				}
			}).catch(function (error) {
				console.err(error)
			});
	}

	//загрузка ссылки следующей страницы с картинками
	useEffect(() => {
		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
			.then(response => response.json())
			.then(data => {
				setPositionslist(data.positions)
			})
			.catch((err) => {
				console.error(err);
			})

	}, [Userinfo])

	//проверка наявности всех главных полей
	useEffect(() => {
		const { name, email, phone, position } = Userinfo
		if (name && email && phone && position) setStatus(true)
		else setStatus(false)
	}, [Userinfo])
	return (
		<div className="singUp">
			<h1>Working with POST request</h1>
			{statusPost ?
				<img src={image} alt="post" />
				:
				<div className="row input-form">
					<form className="col s6">
						<div className="row">
							<div className="input-field col s12">
								<input
									style={style}
									id="name"
									type="text"
									placeholder='Your name'
									className="speciality"
									onChange={(event) => setUserinfo({
										...Userinfo,
										name: event.target.value
									})}
									required
								/>
								<input
									style={style}
									id="Email"
									type="email"
									placeholder='Email'
									className="speciality"
									onChange={(event) => setUserinfo({
										...Userinfo,
										email: event.target.value
									})}
									required
								/>
								<input
									style={style}
									id="tel"
									type="tel"
									placeholder='Phone'
									className="speciality"
									pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
									onChange={(event) => setUserinfo({
										...Userinfo,
										phone: event.target.value
									})}
									required
								/>
								<span className="helper-text left" data-error="wrong" >+38 (XXX) XXX - XX - XX</span>
							</div>
						</div>
						<div className='input-spec'>
							<p>Select your position</p>
							{positionslist.map(el => <InputRadio key={el.id} Userinfo={Userinfo} setUserinfo={setUserinfo} {...el} />)}
						</div>
						<div className="upload file-field input-field">
							<input type="file" onChange={handleChange} required />
							<button className='upload-btn-submit' type="submit">Upload</button>
						</div>
						{!singUpStatus ?
							<button className='btn disabled'>Sign up</button>
							:
							<button className='btn' onClick={() => handleSubmit(Userinfo)}>Sign up</button>
						}
					</form>
				</div>
			}
		</div>
	)
}


export { SingUp }

