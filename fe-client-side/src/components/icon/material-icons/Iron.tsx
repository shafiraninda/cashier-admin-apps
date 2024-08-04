import React, { SVGProps } from 'react';

const SvgIron = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15 16H4v-1c0-1.1.9-2 2-2h9v3z' opacity={0.3} />
			<path d='M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6h-1zm-6 10H4v-1c0-1.1.9-2 2-2h9v3z' />
		</svg>
	);
};

export default SvgIron;
