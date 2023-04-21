import React, {useRef, useState} from 'react';
import {DoubleSide, TextureLoader} from 'three';
import {useLoader} from '@react-three/fiber';

export default function ImageWall(props) {
	const wallRef = useRef(null);
	const image1 = '/static/image1.jpg';
	const image2 = '/static/image2.jpg';
	const texture1 = useLoader(TextureLoader, image1);
	const texture2 = useLoader(TextureLoader, image2);

	const [myTexture, setMyTexture] = useState(texture1);

	const onHandleImage = (e) => {
		e.stopPropagation();
		if (myTexture == texture1) {
			setMyTexture(texture2);
		} else {
			setMyTexture(texture1);
		}
	};

	return (
		<mesh {...props} ref={wallRef} receiveShadow position-z={-5} rotation-y={Math.PI * 1} dispose={null} onDoubleClick={onHandleImage}>
			<planeGeometry args={[8, 8]} />

			<meshStandardMaterial map={myTexture} color="whiteblue" side={DoubleSide} />
		</mesh>
	);
}
