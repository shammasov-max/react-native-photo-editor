
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React from 'react';
import type {PropsWithChildren} from 'react'

const safePadding = '5%';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,

  View,
} from 'react-native';

import Viewport from './src/Viewport';
import { CanvasState, EditorContext } from './src/editorContext';


export function App(): React.JSX.Element {

  const editorState: CanvasState = {
      backgroundUrl:"https://picsum.photos/200/300",
      layers:[
        {
          type:'image',
          url: "https://picsum.photos/10/30",
          x:0.2,
          y:0.5,
          scale:2
        }
      ]
  }

  return (
    <SafeAreaView >
      <StatusBar 
      />
        <EditorContext.Provider value={{state:editorState}}>
        <View
      style={{
        backgroundColor: Colors.black,
        paddingHorizontal: safePadding,
        paddingBottom: safePadding,
      }}
          >
         <Viewport/>
        </View>
        </EditorContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

