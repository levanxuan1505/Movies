/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Touchable, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';

const AnimationScreen = ({
  idVideo = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
}) => {
  const [clicked, setClicked] = useState(false);
  const [pause, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const navigation = useNavigation();

  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={{flex: 1, zIndex: 1, marginTop: 50, marginBottom: 60}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: fullScreen ? '100%' : 200,
        }}
        onPress={() => {
          setClicked(true);
          const timer = setTimeout(() => {
            setClicked(false);
          }, 4000);
          return () => clearTimeout(timer);
        }}>
        <Video
          ignoreSilentSwitch={'ignore'}
          pictureInPicture={true}
          // bufferConfig={{
          //   minBufferMs: 15000,
          //   maxBufferMs: 50000,
          //   bufferForPlaybackMs: 2500,
          //   bufferForPlaybackAfterRebufferMs: 5000,
          // }}
          paused={pause}
          audioOnly={false}
          source={{
            uri: idVideo,
          }}
          ref={ref}
          onProgress={x => {
            setProgress(x);
          }}
          // Can be a URL or a local file.
          //  ref={(ref) => {
          //    this.player = ref
          //  }}                                      // Store reference
          //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //  onError={this.videoError}

          // Callback when video cannot be loaded
          muted={muted}
          style={{width: '100%', height: fullScreen ? 440 : 225}}
          resizeMode="contain"
        />
        {clicked && (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '100%',
              height: fullScreen ? '100%' : 225,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  ref?.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('../assets/images/backward.png')}
                  style={{width: 40, height: 40, tintColor: 'white'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setPaused(!pause);
                }}>
                <Image
                  source={
                    pause
                      ? require('../assets/images/playButton.png')
                      : require('../assets/images/pauseButton.png')
                  }
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: 'white',
                    marginLeft: 60,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  ref?.current.seek(parseInt(progress?.currentTime) + 10);
                }}>
                <Image
                  source={require('../assets/images/forward.png')}
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: 'white',
                    marginLeft: 60,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>
                {format(progress?.currentTime)}
              </Text>
              <Slider
                style={{width: '75%', height: 40}}
                minimumValue={0}
                maximumValue={progress?.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#fff"
                onValueChange={x => {
                  ref?.current.seek(x);
                }}
              />
              <Text style={{color: 'white'}}>
                {format(progress?.seekableDuration)}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setMuted(!muted);
              }}
              style={{
                position: 'absolute',
                top: 10,
                right: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={
                  muted
                    ? require('../assets/images/unmute.png')
                    : require('../assets/images/mute.png')
                }
                style={{
                  width: muted ? 38 : 45,
                  height: muted ? 38 : 45,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                top: 10,
                left: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VideoFull', idVideo), setPaused(true);
                }}>
                <Image
                  source={
                    fullScreen
                      ? require('../assets/images/minimize.png')
                      : require('../assets/images/fullSize.png')
                  }
                  style={{width: 24, height: 24, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AnimationScreen;
