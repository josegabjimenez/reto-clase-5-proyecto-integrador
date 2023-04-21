import {OrbitControls, Sky} from '@react-three/drei';
import {Perf} from 'r3f-perf';
import VideoWall from './VideoWall';
import ImageWall from './ImageWall';

export default function Experience() {
	return (
		<>
			<Perf position="top-left" />
			<OrbitControls makeDefault />
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<Sky />

			{/* Cambio de imágenes */}
			<ImageWall />

			{/* Video */}
			<VideoWall />
		</>
	);
}
