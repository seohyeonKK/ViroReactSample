import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from '@akadrimer/react-viro'

export default class HelloWorldSceneAR extends Component {
  constructor() {
    super()

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    }

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this)

    // ViroMaterials.createMaterials({
    //   wolf: {
    //     diffuseTexture: require('./res/wolves/Wolves_BaseColor.png'),
    //   },
    // });
  }

  render() {
    return (
      <>
        <ViroARScene onTrackingUpdated={this._onInitialized}>
          <ViroText
            text={this.state.text}
            scale={[0.5, 0.5, 0.5]}
            position={[0, -0.3, -1]}
            style={styles.helloWorldTextStyle}
          />
          <ViroBox
            position={[0, -0.5, -1]}
            scale={[0.2, 0.2, 0.1]}
            materials={['grid']}
            animation={{ name: 'rotate', run: true, loop: true }}
          />
          <ViroAmbientLight color={'#aaaaaa'} />
          <ViroSpotLight
            innerAngle={5}
            outerAngle={90}
            direction={[0, -1, -0.2]}
            position={[0, 3, 1]}
            color="#ffffff"
            castsShadow={true}
          />
        </ViroARScene>
      </>
    )
  }

  _onInitialized(state, reason) {
    this.setState({
      text: 'Hello World!',
    })
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
})

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
})

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, //.25 seconds
  },
})

module.exports = HelloWorldSceneAR
