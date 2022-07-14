function InputRadio(props) {
	const {
		id,
		name,
		Userinfo,
		setUserinfo = Function.prototype } = props

	return (
		<p>
			<label>
				<input
					className="with-gap"
					name="group1"
					type="radio"
					value={id}
					onChange={(event) => setUserinfo({
						...Userinfo,
						position: +event.target.value
					})}
					required
				/>
				<span className="black-text">{name}</span>
			</label>
		</p>
	)
}

export { InputRadio }