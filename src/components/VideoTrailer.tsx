/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import Video from 'react-native-video';
import React, {useRef, memo, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
const VideoTrailer = () => {
  const [clicked, setClicked] = useState(false);
  const [pause, setPaused] = useState(false);
  const [mute, setMuted] = useState(true);
  const [progress, setProgress] = useState(null);
  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={{flex: 1, marginBottom: 50}}>
      <Text
        style={{
          paddingHorizontal: 16,
          color: 'white',
          fontSize: 18,
          paddingBottom: 20,
        }}>
        VieOn Suggests
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: 225,
          position: 'relative',
        }}
        onPress={() => {
          setClicked(true);
          const timer = setTimeout(() => {
            setClicked(false);
          }, 2000);
          return () => clearTimeout(timer);
        }}>
        <Video
          ignoreSilentSwitch={'ignore'}
          pictureInPicture={true}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 50000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000,
          }}
          paused={pause}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          ref={ref}
          onProgress={x => {
            // console.log(x);
            setProgress(x);
          }}
          // Can be a URL or a local file.
          //  ref={(ref) => {
          //    this.player = ref
          //  }}                                      // Store reference
          //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //  onError={this.videoError}

          // Callback when video cannot be loaded
          muted={mute}
          style={{width: '100%', height: 225}}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setMuted(!mute);
            }}
            style={{
              top: 5,
              right: 20,
              padding: 10,
              position: 'absolute',
            }}>
            <Image
              source={
                mute
                  ? require('../assets/images/unmute.png')
                  : require('../assets/images/mute.png')
              }
              style={{
                width: 35,
                height: 35,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(VideoTrailer);
