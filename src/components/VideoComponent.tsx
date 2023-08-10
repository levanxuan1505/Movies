/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import Video from 'react-native-video';
import React, {memo, useRef, useState} from 'react';
import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Colors} from '@constants';

const VideoComponent = ({idVideo}) => {
  const [clicked, setClicked] = useState(false);
  const [pause, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(null);
  const navigation = useNavigation();

  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return idVideo ? (
    <View style={{flex: 1, zIndex: 1, marginTop: 50, marginBottom: 60}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: 200,
        }}
        onPress={() => {
          setClicked(true);
          const timer = setTimeout(() => {
            setClicked(false);
          }, 4000);
          return () => clearTimeout(timer);
        }}>
        <Video
          muted={muted}
          resizeMode="contain"
          pictureInPicture={true}
          ignoreSilentSwitch={'ignore'}
          style={{width: '100%', height: 225}}
          paused={pause}
          audioOnly={false}
          source={{
            uri: idVideo,
          }}
          ref={ref}
          onProgress={x => {
            setProgress(x);
          }}
          // bufferConfig={{
          //   minBufferMs: 15000,
          //   maxBufferMs: 50000,
          //   bufferForPlaybackMs: 2500,
          //   bufferForPlaybackAfterRebufferMs: 5000,
          // }}
          // Can be a URL or a local file.
          //  ref={(ref) => {
          //    this.player = ref
          //  }}                                      // Store reference
          //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
          //  onError={this.videoError}

          // Callback when video cannot be loaded
        />
        {clicked && (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '100%',
              height: 225,
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
                style={{padding: 30}}
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
                style={{padding: 30}}
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
                minimumValue={0}
                value={progress?.currentTime}
                style={{width: '75%', height: 40}}
                maximumValue={progress?.seekableDuration}
                minimumTrackTintColor={Colors.DEFAULT_GREEN}
                maximumTrackTintColor={Colors.DEFAULT_GREY}
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
                top: 3,
                right: 17,
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
                  width: 35,
                  height: 35,
                  tintColor: 'white',
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
                style={{paddingLeft: 10}}
                onPress={() => {
                  navigation.navigate('VideoFull', {
                    idVideo: idVideo,
                  }),
                    setPaused(true);
                }}>
                <Image
                  source={require('../assets/images/fullSize.png')}
                  style={{width: 24, height: 24, tintColor: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  ) : null;
};

export default memo(VideoComponent);
