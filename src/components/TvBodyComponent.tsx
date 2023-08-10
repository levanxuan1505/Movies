/* eslint-disable curly */
import {
  TVList,
  SportList,
  TrendingTV,
  TVTrending,
  MoviesList,
  MoviesListOphim,
  ListCarouselHome,
} from '@components';
import {
  VTV,
  Kplus,
  VBA2023,
  VLeague,
  SerieA2023,
  TVChannels,
  SportsTVShows,
} from '@constants';
import React, {memo} from 'react';
const TvBodyComponent = () => {
  return (
    <>
      <TVTrending />
      {TVChannels.length > 0 && (
        <SportList
          title="TV Channels"
          logo="bigSize"
          symbol="null"
          hideSeeAll={false}
          data={TVChannels}
        />
      )}

      {VTV.length > 0 && (
        <SportList
          title="VTV"
          logo="bigSize"
          symbol="null"
          hideSeeAll={false}
          data={VTV}
        />
      )}
      <MoviesListOphim title="Ophim TV" hideSeeAll={false} page={11} />

      {Kplus.length > 0 && (
        <SportList
          logo="bigSize"
          title="K+"
          symbol="null"
          hideSeeAll={false}
          data={Kplus}
        />
      )}
      {VBA2023.length > 0 && (
        <SportList
          title="VBA 2023"
          logo="vba"
          symbol="null"
          hideSeeAll={false}
          data={VBA2023}
        />
      )}
      <MoviesListOphim title="Ophim Originals" hideSeeAll={false} page={12} />

      {VLeague.length > 0 && (
        <SportList
          title="V-League"
          logo="bigSize"
          symbol="skySport"
          hideSeeAll={false}
          data={VLeague}
        />
      )}
      <ListCarouselHome index={1} />

      <MoviesList title="VTV" hideSeeAll={false} idApi={5527} />

      <MoviesListOphim title="TV For Kids" hideSeeAll={false} page={18} />

      <MoviesList title="TCL TV" hideSeeAll={false} idApi={5522} />

      <MoviesListOphim title=" Sony TV" hideSeeAll={false} page={20} />

      <MoviesList title="SamSung TV" hideSeeAll={false} idApi={422} />

      <MoviesListOphim title="SCTV TV" hideSeeAll={false} page={22} />

      <MoviesList title="VieON TV" hideSeeAll={false} idApi={1422} />

      <MoviesListOphim title="HTV TV" hideSeeAll={false} page={25} />

      <MoviesList title="Game TV" hideSeeAll={false} idApi={1282} />

      <MoviesListOphim title="LOL TV" hideSeeAll={false} page={27} />

      <MoviesList title="VETV" hideSeeAll={false} idApi={1282} />

      <MoviesListOphim title="Affrica TV" hideSeeAll={false} page={29} />

      <MoviesList title="Feed TV" hideSeeAll={false} idApi={1281} />

      <ListCarouselHome index={2} />

      <MoviesListOphim title="VTV Cab" hideSeeAll={false} page={31} />

      <MoviesList title="TV360" hideSeeAll={false} idApi={1781} />

      <MoviesListOphim title="Vie Channels TV" hideSeeAll={false} page={33} />

      {SportsTVShows.length > 0 && (
        <SportList
          title="Sport TV shows"
          logo="bigSize"
          hideSeeAll={false}
          data={SportsTVShows}
          symbol="null"
        />
      )}
      <MoviesListOphim title="Ophim TV" hideSeeAll={false} page={13} />
      {SerieA2023.length > 0 && (
        <SportList
          title="Serie A 2023"
          logo="bigSize"
          symbol="espn"
          hideSeeAll={false}
          data={SerieA2023}
        />
      )}

      <TVList title="Lucky Show" name="HO" hideSeeAll={false} idApi={391} />
      <TrendingTV layout="tinder" name="TV Shows" idApi={2222} />
    </>
  );
};
export default memo(TvBodyComponent);
