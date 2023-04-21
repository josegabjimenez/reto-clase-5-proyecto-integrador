import React, {useRef, useState} from 'react';
import {useVideoTexture} from '@react-three/drei';
import {DoubleSide} from 'three';

const VideoWall = () => {
	const textureRef = useRef();
	const [isReproducing, setIsReproducing] = useState(false);

	const [video] = useState(() => {
		const vid = document.createElement('video');
		vid.src = '/static/video.mp4';
		vid.crossOrigin = 'anonymous';
		vid.loop = true;
		vid.muted = true;
		return vid;
	});

	const handleOnClick = (e) => {
		e.stopPropagation();
		if (isReproducing) {
			setIsReproducing(!isReproducing);
			video.pause();
		} else {
			setIsReproducing(!isReproducing);
			video.play();
		}
	};

	return (
		<mesh onContextMenu={handleOnClick} receiveShadow position-z={5} rotation-x={Math.PI} rotation-z={Math.PI}>
			<planeGeometry args={[8, 8]} />
			<meshBasicMaterial side={DoubleSide} toneMapped={false}>
				<videoTexture attach="map" args={[video]} ref={textureRef} />
			</meshBasicMaterial>
		</mesh>
	);
};

export default VideoWall;
