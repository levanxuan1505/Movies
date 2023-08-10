/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Video from 'react-native-video';
import React, {useRef, useState} from 'react';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';
import {Colors} from '@constants';
const {width, height} = Dimensions.get('window');

const VideoFullScreen = ({route}) => {
  const {idVideo} = route.params;
  const [clicked, setClicked] = useState(false);
  const [pause, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const ref = useRef();
  const format = seconds => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          setClicked(true);
          const timer = setTimeout(() => {
            setClicked(false);
          }, 5000);
          return () => clearTimeout(timer);
        }}>
        <Video
          ref={ref}
          muted={muted}
          paused={pause}
          audioOnly={false}
          resizeMode="contain"
          pictureInPicture={true}
          style={{width: '100%', height: fullScreen ? height : 275}}
          source={{
            uri: idVideo,
          }}
          ignoreSilentSwitch={'ignore'}
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
        />
        {clicked && (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: '100%',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              height: fullScreen ? '100%' : 225,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={1}
                style={{padding: fullScreen ? 20 : 10}}
                onPress={() => {
                  ref?.current.seek(parseInt(progress.currentTime) - 10);
                }}>
                <Image
                  source={require('../assets/images/backward.png')}
                  style={{width: 50, height: 50, tintColor: 'white'}}
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
                    width: 60,
                    height: 60,
                    tintColor: 'white',
                    marginLeft: height / 5,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={{padding: fullScreen ? 20 : 10}}
                onPress={() => {
                  ref?.current.seek(parseInt(progress?.currentTime) + 10);
                }}>
                <Image
                  source={require('../assets/images/forward.png')}
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: height / 5,
                    tintColor: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                paddingLeft: 20,
                paddingRight: 20,
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                justifyContent: 'space-between',
                bottom: fullScreen ? height / 14 : 0,
              }}>
              <Text style={{color: 'white'}}>
                {format(progress?.currentTime)}
              </Text>
              <Slider
                minimumValue={0}
                style={{width: '75%'}}
                minimumTrackTintColor={Colors.DEFAULT_GREEN}
                maximumTrackTintColor={Colors.DEFAULT_GREY}
                maximumValue={progress?.seekableDuration}
                onValueChange={x => {
                  ref?.current.seek(x);
                }}
                value={progress?.currentTime}
              />
              <Text style={{color: 'white'}}>
                {format(progress?.seekableDuration)}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                right: fullScreen ? 30 : 20,
                top: fullScreen ? height / 14 : 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setMuted(!muted);
                }}>
                <Image
                  source={
                    muted
                      ? require('../assets/images/unmute.png')
                      : require('../assets/images/mute.png')
                  }
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                position: 'absolute',
                left: fullScreen ? 30 : 20,
                top: fullScreen ? height / 12 : 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (fullScreen) {
                    Orientation.lockToPortrait();
                  } else {
                    Orientation.lockToLandscape();
                  }
                  setFullScreen(!fullScreen);
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
    </SafeAreaView>
  );
};

export default VideoFullScreen;
