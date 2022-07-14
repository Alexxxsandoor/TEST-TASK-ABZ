import ReactTooltip from 'react-tooltip';
import { useState } from 'react';

function Tooltip(props) {
	const { id, email } = props

	const [tooltipName, showToolName] = useState(true);
	return (
		<>
			<p
				className='tooltip'
				data-tip
				data-for={id}
				onMouseOver={() => showToolName(true)}
				onMouseOut={() => showToolName(false)}
			>
				{email.slice(0, 20) + "..."}
			</p>
			{tooltipName &&
				<ReactTooltip
					id={`${id}`}
					place="top"
					type="dark"
					effect="solid"
				>
					<span>{email}</span>
				</ReactTooltip>
			}
		</>
	)

}
export { Tooltip }