import React from "react";
import { Canvas, Circle, Group, Image, useImage } from "@shopify/react-native-skia";
import { useEditor } from './editorContext';
import { CommonRender } from './skia-render/CommonRender';
 
export default  () => {
  const width = 256;
  const height = 256;
  const editor = useEditor()
  const image = useImage(editor.state.url)
  return (
    <Canvas style={{ width, height }}>
      <Image image={image} 
                fit="contain"  
                x={0} y={0} 
               width={width}
               height={height}
            />
      {
       editor.state.layers.map( 
        (e,id) => 
          <CommonRender 
            id={id} 
            key={id}>

          </CommonRender>
       )
      }
    </Canvas>
  );
};
 