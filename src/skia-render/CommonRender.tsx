import { matchFont, Text } from '@shopify/react-native-skia'
import { useEditorElement } from '../editorContext'
import { ImageRender } from './ImageRender'
import { TextRender } from './TextRender'
import { Platform } from 'react-native';
const fontFamily = Platform.select({ ios: "Arial", default: "serif" });
const fontStyle = {
  fontFamily,
  fontSize: 14,
  fontStyle: "italic" as "italic",
  fontWeight: "bold",
  fontColor:'white'
};
const font = matchFont(fontStyle);
export type CommonRenderProps = {
    id: number

}
export const CommonRender = ({id}: CommonRenderProps) => {
    const element = useEditorElement(id)
    
    if(element.type ==='image')
        return <ImageRender {...element} />
    else 
        return <TextRender {...element} />
}