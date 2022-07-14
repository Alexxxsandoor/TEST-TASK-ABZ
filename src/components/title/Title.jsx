import { Link } from "react-scroll";
import './title.css'

function Title() {
	return (
		<div className="title">
			<div className='container'>
				<h1>Test assignment for front-end developer</h1>
				<p>What defines a good front-end developer is one that has
					skilled knowledge of HTML, CSS, JS with a vast understanding
					of User design thinking as they'll be building web interfaces
					with accessibility in mind. They should also be excited to learn,
					as the world of Front-End Development keeps evolving.</p>
				<Link
					activeClass="active"
					to="singUp"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className="waves-effect btn"
				>Sign up</Link>
			</div>
		</div>
	)
}

export { Title }