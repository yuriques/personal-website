import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    // When you want to put components into a canvas, they have to be 3d, we can use drei to convert them
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
