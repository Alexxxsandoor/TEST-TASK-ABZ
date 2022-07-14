import './user.css'
import React, { useState, useEffect } from 'react'
import { Preloader } from '../Preloader'
import { User } from './User'
import { LinkStatus } from './LinkStatus'


function UsersList() {
	const [users, setUsers] = useState([])
	const [url, setUrl] = useState(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
	const [loading, setLoading] = useState(false)
	const [nextPage, setNextPage] = useState(false)


	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setUsers(data.users)
				setUrl(data.links.next_url)
				setLoading(true)
			})
			.catch((err) => {
				console.error(err);
				setLoading(false)
			})
		//eslint-disable-next-line
	}, [nextPage])

	return (
		<div className="users" id="usersLink">
			<h1>Working with GET request</h1>
			{!loading ? <Preloader /> :
				<div className='list'>
					{users.map(el => <User key={el.id} {...el} />)}
				</div>
			}
			{url ? <LinkStatus
				loading={loading}
				setLoading={setLoading}
				nextPage={nextPage}
				setNextPage={setNextPage}
			/> :
				(<></>)
			}
		</div >
	)
}



export { UsersList }