import { Link, animateScroll as scroll } from "react-scroll";
import './header.css';
import logo from './logo.svg';

function Header() {
	function scrollToTop() {
		scroll.scrollToTop();
	};
	return (
		<nav className='header'>
			<div className="nav-wrapper">
				<div className="brand-logo left" onClick={scrollToTop}><img src={logo} alt="logo" /></div>
				<ul id="nav-mobile" className="right">
					<Link

						activeClass="active"
						to="users"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="waves-effect btn btn-navbar"
					>Users</Link>
					<Link

						activeClass="active "
						to="singUp"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						className="btn-navbar waves-effect btn "
					>Sign up</Link>
				</ul>
			</div>
		</nav>
	)
}

export { Header }