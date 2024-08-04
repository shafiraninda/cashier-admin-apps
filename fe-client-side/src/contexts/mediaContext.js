import React, { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const mediaSmall = window.matchMedia('(max-width: 576px)');
const mediaMedium = window.matchMedia('(max-width: 768px)');
const mediaLarge = window.matchMedia('(max-width: 992px)');
const MediaContext = createContext(null);

export const MediaContextProvider = ({ children }) => {
	const [isSmall, setIsSmall] = useState(mediaSmall.matches);
	const [isMedium, setIsMedium] = useState(mediaMedium.matches);
	const [isLarge, setIsLarge] = useState(mediaLarge.matches);

	useEffect(() => {
		const setSmall = (e) => setIsSmall(e.matches);
		const setMedium = (e) => setIsMedium(e.matches);
		const setLarge = (e) => setIsLarge(e.matches);

		mediaSmall.addEventListener('change', setSmall);
		mediaMedium.addEventListener('change', setMedium);
		mediaLarge.addEventListener('change', setLarge);

		return () => {
			mediaSmall.removeEventListener('change', setSmall);
			mediaMedium.removeEventListener('change', setMedium);
			mediaLarge.removeEventListener('change', setLarge);
		};
	}, [window.outerWidth, window.outerHeight]);

	const mediaQuery = useMemo(
		() => ({ small: isSmall, medium: isMedium, large: isLarge }),
		[isSmall, isMedium, isLarge],
	);

	return <MediaContext.Provider value={mediaQuery}>{children}</MediaContext.Provider>;
};
MediaContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MediaContext;
