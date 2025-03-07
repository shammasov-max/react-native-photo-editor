import {createContext, useContext} from 'react'

export type BaseLayer = {
    x: number
    y: number
}

export type TextLayer = BaseLayer & {
    type: 'text'
    fontFamilty: string
    fontSize: number
    fontColor: string
    text: string
}

export type ImageLayer = BaseLayer & {
    type: 'image'
    url: string
    scale: number
}

export type AnyLayer = ImageLayer | TextLayer

export type CanvasState = {
    backgroundUrl: string
    layers: AnyLayer[]
}

export const EditorContext = createContext({state:{
    backgroundUrl: '',
    layers:[] as any as AnyLayer[]
} as CanvasState})



export const useEditorElement = (id: number) => {
    const ctx = useContext(EditorContext)
    return ctx.state.layers[id]
}

export const useEditor = () =>{
    const ctx = useContext(EditorContext)

    return ctx
}