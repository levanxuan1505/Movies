/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */

import React, {memo, Suspense} from 'react';
import {
  Bundesliga,
  TVChannels,
  RolandGarros,
  InternationalFriendly,
} from '@constants';

const Trending = React.lazy(() => import('../components/Trending'));
const MoviesListOphim = React.lazy(
  () => import('../components/MoviesListOphim'),
);
const Discover = React.lazy(() => import('../components/Discover'));
const SportList = React.lazy(() => import('../components/SportList'));
const MoviesList = React.lazy(() => import('../components/MoviesList'));
const HBOListTest = React.lazy(() => import('../components/HBOListTest'));
const VideoTrailer = React.lazy(() => import('../components/VideoTrailer'));
const WatchingList = React.lazy(() => import('../components/WatchingList'));
const ListCarouselHome = React.lazy(
  () => import('../components/ListCarouselHome'),
);
const HBOListOphim = React.lazy(() => import('../components/HBOListOphim'));
const HBODiscover = React.lazy(() => import('../components/HBODiscover'));

const HomeBodyComponent = () => {
  return (
    <>
      <Suspense>
        <Trending />
      </Suspense>

      <Suspense>
        <MoviesList title="UpComing" hideSeeAll={false} idApi={613099} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Ophim UpComing" hideSeeAll={false} page={55} />
      </Suspense>

      <Suspense>
        <MoviesList title="Top Rated" hideSeeAll={false} idApi={9730} />
      </Suspense>

      <Suspense>
        <MoviesList title="Now Playing" hideSeeAll={false} idApi={988265} />
      </Suspense>

      <Suspense>
        <WatchingList title="Watching" hideSeeAll={false} idApi={4108} />
      </Suspense>

      <Suspense>
        <ListCarouselHome index={0} />
      </Suspense>

      <Suspense>
        <MoviesList title="Popular" hideSeeAll={false} idApi={12} />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="HBO Ophim"
          logo="GO"
          hideSeeAll={false}
          page={17}
        />
      </Suspense>

      <Suspense>
        <MoviesList title="Maybe You Love" hideSeeAll={false} idApi={332} />
      </Suspense>

      <Suspense>
        <MoviesListOphim
          page={21}
          hideSeeAll={false}
          title="Because You Watched Titanic"
        />
      </Suspense>
      <Suspense>
        <MoviesListOphim title="Ophim Top Rated" hideSeeAll={false} page={22} />
      </Suspense>

      <MoviesList title="Just For You" hideSeeAll={false} idApi={92} />
      <Suspense>
        <MoviesListOphim
          title="Good Film Today"
          hideSeeAll={false}
          page={333}
        />
      </Suspense>

      <Suspense>
        <VideoTrailer />
      </Suspense>

      <Suspense>
        <MoviesListOphim
          title="Fantasy Adventure Movies"
          hideSeeAll={false}
          page={33}
        />
      </Suspense>

      <Suspense>
        <MoviesList title="New Movies" hideSeeAll={false} idApi={392} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Ophim UpComing" hideSeeAll={false} page={3} />
      </Suspense>

      <Suspense>
        <MoviesList title="Sport Today" hideSeeAll={false} idApi={9992} />
      </Suspense>

      <Suspense>
        <MoviesList title="Social Channels" hideSeeAll={false} idApi={258255} />
      </Suspense>

      <Suspense>
        <ListCarouselHome index={1} />
      </Suspense>

      <Suspense>
        <HBOListOphim
          page={25}
          title="AXN Ophim"
          hideSeeAll={false}
          logo="AXN"
        />
      </Suspense>

      <Suspense>
        <MoviesList title="Movies Theater" hideSeeAll={false} idApi={5518} />
      </Suspense>

      <Suspense>
        <Discover page={41} title="Discover" hideSeeAll={false} logo="AXN" />
      </Suspense>

      <Suspense>
        <MoviesList title="Disney" hideSeeAll={false} idApi={620249} />
      </Suspense>

      <Suspense>
        <MoviesList title="Movies For Kids" hideSeeAll={false} idApi={8867} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Ophim Award" hideSeeAll={false} page={4} />
      </Suspense>

      <Suspense>
        <HBODiscover title="Discover" page={188} hideSeeAll={false} logo="GO" />
      </Suspense>

      <Suspense>
        <SportList
          symbol="null"
          hideSeeAll={false}
          logo="InternationalFriendly"
          data={InternationalFriendly}
          title="International Friendly"
        />
      </Suspense>

      <Suspense>
        <MoviesList title="TV Shows" hideSeeAll={false} idApi={4497} />
      </Suspense>

      <Suspense>
        <MoviesList
          title="The World Around Us"
          hideSeeAll={false}
          idApi={1397}
        />
      </Suspense>

      <Suspense>
        <MoviesList title="Special Anime" hideSeeAll={false} idApi={12497} />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="MAX"
          page={101}
          hideSeeAll={false}
          title="Hot Movies You Might Like"
        />
      </Suspense>

      <Suspense>
        <SportList
          symbol="espn"
          logo="Bundesliga"
          title="Bundesliga"
          data={Bundesliga}
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="Max Ophim"
          logo="MAX"
          hideSeeAll={false}
          page={9}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          title="HBO Movies"
          logo="GO"
          hideSeeAll={false}
          idApi={33}
        />
      </Suspense>

      <Suspense>
        <SportList
          logo="Roland"
          symbol="skySport"
          hideSeeAll={false}
          data={RolandGarros}
          title="Roland Garros 2023"
        />
      </Suspense>

      <Suspense>
        <ListCarouselHome index={2} />
      </Suspense>

      <Suspense>
        <SportList
          symbol="null"
          logo="bigSize"
          data={TVChannels}
          hideSeeAll={false}
          title="TV Channels"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="AXN"
          idApi={433310}
          title="AXN HD"
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <MoviesList title="Family Psychology" idApi={512} hideSeeAll={false} />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={41110}
          hideSeeAll={false}
          title="Top 10 VieOn"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="MAX"
          page={11}
          hideSeeAll={false}
          title="Food Movies"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={4202}
          hideSeeAll={false}
          title="HBO Series"
        />
      </Suspense>

      <Suspense>
        <HBOListTest logo="GO" idApi={31330} hideSeeAll={false} title="UFC" />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={32110}
          hideSeeAll={false}
          title="Thailand Martial"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={11845}
          hideSeeAll={false}
          title="International Programs"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={85}
          hideSeeAll={false}
          title="American Dramas"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={81}
          hideSeeAll={false}
          title="Asian Dramas"
        />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="VieOn Originals" hideSeeAll={false} page={31} />
      </Suspense>
    </>
  );
};
export default memo(HomeBodyComponent);
