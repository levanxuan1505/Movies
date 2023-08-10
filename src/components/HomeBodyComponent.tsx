/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  Trending,
  Discover,
  SportList,
  MoviesList,
  HBODiscover,
  HBOListTest,
  VideoTrailer,
  WatchingList,
  HBOListOphim,
  MoviesListOphim,
  ListCarouselHome,
} from '@components';
import {
  Bundesliga,
  TVChannels,
  RolandGarros,
  InternationalFriendly,
} from '@constants';
import React, {memo} from 'react';

const HomeBodyComponent = () => {
  return (
    <>
      <Trending />

      <MoviesList title="UpComing" hideSeeAll={false} idApi={613099} />

      <MoviesListOphim title="Ophim UpComing" hideSeeAll={false} page={55} />

      <MoviesList title="Top Rated" hideSeeAll={false} idApi={9730} />

      <MoviesList title="Now Playing" hideSeeAll={false} idApi={988265} />

      <WatchingList title="Watching" hideSeeAll={false} idApi={4108} />

      <ListCarouselHome index={0} />

      <MoviesList title="Popular" hideSeeAll={false} idApi={12} />

      <HBOListOphim title="HBO Ophim" logo="GO" hideSeeAll={false} page={17} />

      <MoviesList title="Maybe You Love" hideSeeAll={false} idApi={332} />

      <MoviesListOphim
        page={21}
        hideSeeAll={false}
        title="Because You Watched Titanic"
      />

      <MoviesListOphim title="Ophim Top Rated" hideSeeAll={false} page={22} />

      <MoviesList title="Just For You" hideSeeAll={false} idApi={92} />

      <MoviesListOphim title="Good Film Today" hideSeeAll={false} page={333} />

      <VideoTrailer />

      <MoviesListOphim
        title="Fantasy Adventure Movies"
        hideSeeAll={false}
        page={33}
      />

      <MoviesList title="New Movies" hideSeeAll={false} idApi={392} />

      <MoviesListOphim title="Ophim UpComing" hideSeeAll={false} page={3} />

      <MoviesList title="Sport Today" hideSeeAll={false} idApi={9992} />

      <MoviesList title="Social Channels" hideSeeAll={false} idApi={258255} />

      <ListCarouselHome index={1} />

      <HBOListOphim page={25} title="AXN Ophim" hideSeeAll={false} logo="AXN" />

      <MoviesList title="Movies Theater" hideSeeAll={false} idApi={5518} />

      <Discover page={41} title="Discover" hideSeeAll={false} logo="AXN" />

      <MoviesList title="Disney" hideSeeAll={false} idApi={620249} />

      <MoviesList title="Movies For Kids" hideSeeAll={false} idApi={8867} />

      <MoviesListOphim title="Ophim Award" hideSeeAll={false} page={4} />

      <HBODiscover title="Discover" page={188} hideSeeAll={false} logo="GO" />

      <SportList
        symbol="null"
        hideSeeAll={false}
        logo="InternationalFriendly"
        data={InternationalFriendly}
        title="International Friendly"
      />

      <MoviesList title="TV Shows" hideSeeAll={false} idApi={4497} />

      <MoviesList title="The World Around Us" hideSeeAll={false} idApi={1397} />

      <MoviesList title="Special Anime" hideSeeAll={false} idApi={12497} />

      <HBOListOphim
        logo="MAX"
        page={101}
        hideSeeAll={false}
        title="Hot Movies You Might Like"
      />

      <SportList
        symbol="espn"
        logo="Bundesliga"
        title="Bundesliga"
        data={Bundesliga}
        hideSeeAll={false}
      />

      <HBOListOphim title="Max Ophim" logo="MAX" hideSeeAll={false} page={9} />

      <HBOListTest title="HBO Movies" logo="GO" hideSeeAll={false} idApi={33} />

      <SportList
        logo="Roland"
        symbol="skySport"
        hideSeeAll={false}
        data={RolandGarros}
        title="Roland Garros 2023"
      />

      <ListCarouselHome index={2} />

      <SportList
        symbol="null"
        logo="bigSize"
        data={TVChannels}
        hideSeeAll={false}
        title="TV Channels"
      />

      <HBOListTest
        logo="AXN"
        idApi={433310}
        title="AXN HD"
        hideSeeAll={false}
      />

      <MoviesList title="Family Psychology" idApi={512} hideSeeAll={false} />

      <HBOListTest
        logo="GO"
        idApi={41110}
        hideSeeAll={false}
        title="Top 10 VieOn"
      />

      <HBOListOphim
        logo="MAX"
        page={11}
        hideSeeAll={false}
        title="Food Movies"
      />

      <HBOListTest
        logo="GO"
        idApi={4202}
        hideSeeAll={false}
        title="HBO Series"
      />

      <HBOListTest
        logo="GO"
        idApi={31330}
        hideSeeAll={false}
        title="Thailand Martial"
      />

      <HBOListTest
        logo="GO"
        idApi={11845}
        hideSeeAll={false}
        title="International Programs"
      />

      <HBOListOphim
        logo="GO"
        page={85}
        hideSeeAll={false}
        title="American Dramas"
      />

      <HBOListOphim
        logo="GO"
        page={81}
        hideSeeAll={false}
        title="Asian Dramas"
      />

      <MoviesListOphim title="VieOn Originals" hideSeeAll={false} page={31} />
    </>
  );
};
export default memo(HomeBodyComponent);
