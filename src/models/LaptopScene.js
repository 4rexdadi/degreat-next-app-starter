// imports
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LaptopScene(props) {
	const { nodes, materials } = useGLTF("/assets/models-gltf/laptop/scene.gltf");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group position={[-582.29, -325.02, -227.88]}>
					<mesh
						geometry={nodes.Object_3.geometry}
						material={materials["05___Default"]}
					/>
					<mesh
						geometry={nodes.Object_4.geometry}
						material={materials["11___Default"]}
					/>
					<mesh
						geometry={nodes.Object_5.geometry}
						material={materials.Laptop}
					/>
					<mesh
						geometry={nodes.Object_6.geometry}
						material={materials.Laptop2}
					/>
					<mesh
						geometry={nodes.Object_7.geometry}
						material={materials["04___Default"]}
					/>
					<mesh
						geometry={nodes.Object_8.geometry}
						material={materials["06___Default"]}
					/>
					<mesh
						geometry={nodes.Object_9.geometry}
						material={materials["07___Default"]}
					/>
					<mesh
						geometry={nodes.Object_10.geometry}
						material={materials["08___Default"]}
					/>
					<mesh
						geometry={nodes.Object_11.geometry}
						material={materials["09___Default"]}
					/>
					<mesh
						geometry={nodes.Object_12.geometry}
						material={materials["10___Default"]}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/assets/models-gltf/laptop/scene.gltf");
