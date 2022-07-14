import { Link } from "react-scroll";

function LinkStatus(props) {
	const { loading, nextPage, setNextPage, setLoading } = props
	return (<>
		{loading ?
			<Link className='btn botton-btn'
				activeClass="active"
				to="users"
				spy={true}
				smooth={true}
				offset={-70}
				duration={1000}
				onClick={() => {

					setNextPage(!nextPage)
					setLoading(!loading)
				}}
			>Show more</Link>
			:
			<button className='btn botton-btn'
				disabled
			>Show more</button>
		}

	</>
	)

}

export { LinkStatus }