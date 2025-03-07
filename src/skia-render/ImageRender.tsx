import { Image, useImage } from '@shopify/react-native-skia';
import { ImageLayer } from '../editorContext';

export const ImageRender = (state: ImageLayer) => {
    
    const image = useImage(state.url);
    return <Image image={image} 
                fit="contain"  
                x={0} y={0} 
                width={256} 
                height={256} 
            />
}