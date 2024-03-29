import React from 'react'
import FacebookIcon from '../Icons/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon'

function NavSocial() {
	return (
		<div className='px-4 grid grid-cols-2'>
			<div>
				<h5>Get In Touch</h5>
				<div className='flex flex-row justify-around'>
					<p>Viber</p>
					<p>WatsApp</p>
				</div>
			</div>
			<div className='flex flex-col justify-between'>
				<FacebookIcon />
				<InstagramIcon />
			</div>
		</div>
	)
}

export default NavSocial