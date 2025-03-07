import { Image, Text, useFont, useImage } from '@shopify/react-native-skia';
import { ImageLayer, TextLayer } from '../editorContext';

export const TextRender = (props: TextLayer) => {
    const font = useFont(props.fontFamilty)
    return   <Text
            font={font}
            {...props}
    />
}