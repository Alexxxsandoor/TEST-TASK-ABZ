
import { useEffect, useState } from 'react';
import defAvatar from './defoldUser.svg';
import { Tooltip } from './Tooltip';

function User(props) {
	const { name, photo, position, email, phone, id } = props
	const [photoUrs, setPhotoUrs] = useState(true)

	useEffect(() => {
		fetch(photo)
			.catch(() => {
				setPhotoUrs(false)
			})
		//eslint-disable-next-line
	}, [])

	return (
		<div className="row">
			<div className="col s12 m7">
				<div className="card">
					<div className="card-image user-img">
						<img
							style={{ borderRadius: "100px" }}
							src={photoUrs ? photo : defAvatar}
							alt={name}
						/>
					</div>
					<div className="card-content">
						<p>{name}</p>
						<br />
						<p>{position}</p>
						{email.match(/[a-z]/g).length > 20 ?
							<Tooltip id={id} email={email} />
							:
							<p>{email}</p>
						}
						<p>{phone}</p>
					</div>
				</div>
			</div>
		</div >
	)
}
export { User }