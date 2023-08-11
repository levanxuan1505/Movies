/* eslint-disable curly */
import {
  VTV,
  Kplus,
  VBA2023,
  VLeague,
  SerieA2023,
  TVChannels,
  SportsTVShows,
} from '@constants';
import React, {memo, Suspense} from 'react';

const TVList = React.lazy(() => import('../components/TVList'));
const SportList = React.lazy(() => import('../components/SportList'));
const TrendingTV = React.lazy(() => import('../components/TrendingTV'));
const TVTrending = React.lazy(() => import('../components/TVTrending'));
const MoviesList = React.lazy(() => import('../components/MoviesList'));
const MoviesListOphim = React.lazy(
  () => import('../components/MoviesListOphim'),
);
const ListCarouselHome = React.lazy(
  () => import('../components/ListCarouselHome'),
);

const TvBodyComponent = () => {
  return (
    <>
      <Suspense>
        <TVTrending />
      </Suspense>

      <Suspense>
        {TVChannels.length > 0 && (
          <SportList
            title="TV Channels"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={TVChannels}
          />
        )}
      </Suspense>

      <Suspense>
        {VTV.length > 0 && (
          <SportList
            title="VTV"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={VTV}
          />
        )}
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Ophim TV" hideSeeAll={false} page={11} />
      </Suspense>

      <Suspense>
        {Kplus.length > 0 && (
          <SportList
            logo="bigSize"
            title="K+"
            symbol="null"
            hideSeeAll={false}
            data={Kplus}
          />
        )}
      </Suspense>

      <Suspense>
        {VBA2023.length > 0 && (
          <SportList
            title="VBA 2023"
            logo="vba"
            symbol="null"
            hideSeeAll={false}
            data={VBA2023}
          />
        )}
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Ophim Originals" hideSeeAll={false} page={12} />
      </Suspense>

      <Suspense>
        {VLeague.length > 0 && (
          <SportList
            title="V-League"
            logo="bigSize"
            symbol="skySport"
            hideSeeAll={false}
            data={VLeague}
          />
        )}
      </Suspense>

      <Suspense>
        <ListCarouselHome index={1} />
      </Suspense>

      <Suspense>
        <MoviesList title="VTV" hideSeeAll={false} idApi={5527} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="TV For Kids" hideSeeAll={false} page={18} />
      </Suspense>

      <Suspense>
        <MoviesList title="TCL TV" hideSeeAll={false} idApi={5522} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title=" Sony TV" hideSeeAll={false} page={20} />
      </Suspense>

      <Suspense>
        <MoviesList title="SamSung TV" hideSeeAll={false} idApi={422} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="SCTV TV" hideSeeAll={false} page={22} />
      </Suspense>

      <Suspense>
        <MoviesList title="VieON TV" hideSeeAll={false} idApi={1422} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="HTV TV" hideSeeAll={false} page={25} />
      </Suspense>

      <Suspense>
        <MoviesList title="Game TV" hideSeeAll={false} idApi={1282} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="LOL TV" hideSeeAll={false} page={27} />
      </Suspense>

      <Suspense>
        <MoviesList title="VETV" hideSeeAll={false} idApi={1282} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Affrica TV" hideSeeAll={false} page={29} />
      </Suspense>

      <Suspense>
        <MoviesList title="Feed TV" hideSeeAll={false} idApi={1281} />
      </Suspense>

      <Suspense>
        <ListCarouselHome index={2} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="VTV Cab" hideSeeAll={false} page={31} />
      </Suspense>

      <Suspense>
        <MoviesList title="TV360" hideSeeAll={false} idApi={1781} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Vie Channels TV" hideSeeAll={false} page={33} />
      </Suspense>

      <Suspense>
        {SportsTVShows.length > 0 && (
          <SportList
            title="Sport TV shows"
            logo="bigSize"
            hideSeeAll={false}
            data={SportsTVShows}
            symbol="null"
          />
        )}
      </Suspense>

      <Suspense>
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
      </Suspense>

      <Suspense>
        <TVList title="Lucky Show" name="HO" hideSeeAll={false} idApi={391} />
      </Suspense>

      <Suspense>
        <TrendingTV layout="tinder" name="TV Shows" idApi={2222} />
      </Suspense>
    </>
  );
};
export default memo(TvBodyComponent);
