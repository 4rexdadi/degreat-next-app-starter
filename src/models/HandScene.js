// import
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HandScene(props) {
	const { nodes, materials } = useGLTF("/assets/models-gltf/hand/scene.gltf");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<group position={[2.01, 17.12, 1.18]} scale={[0.73, 5.76, 11.72]}>
						<mesh
							geometry={nodes.pCube2_phong2_0.geometry}
							material={materials.phong2}
						/>
					</group>
					<group position={[2.14, 16.96, 1.44]} scale={[0.12, 6.23, 9.73]}>
						<mesh
							geometry={
								nodes.pCube19_manoparazetatratadaenzeta2aiFlat1_0.geometry
							}
							material={materials.manoparazetatratadaenzeta2aiFlat1}
						/>
					</group>
					<mesh
						geometry={
							nodes.manoparazetatratadaenzeta2Group56172_aiStandardSurface2_0
								.geometry
						}
						material={materials.aiStandardSurface2}
					/>
					<mesh
						geometry={
							nodes.manoparazetatratadaenzeta2Group56172_aiStandardSurface2_0_1
								.geometry
						}
						material={materials.aiStandardSurface2}
					/>
					<group position={[2.16, 16.96, 1.44]} scale={[0.12, 6.23, 9.73]}>
						<mesh
							geometry={
								nodes.manoparazetatratadaenzeta2pCube19_lambert1_0.geometry
							}
							material={materials.lambert1}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/assets/models-gltf/hand/scene.gltf");
