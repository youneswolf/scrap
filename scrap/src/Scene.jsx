import Spline from '@splinetool/react-spline';
import './index.css'; 

export default function Scene() {
  return ( 
	<div className="ss inset-0 -z-100 absolute bg-black w-full h-[117%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
		<Spline scene="https://prod.spline.design/QpMRrNb2zWXNwuLl/scene.splinecode" />
	</div>
  );
}
