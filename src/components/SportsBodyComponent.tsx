import {
  VBA2023,
  VLeague,
  SeaGames,
  TVChannels,
  SerieA2023,
  Bundesliga,
  RolandGarros,
  SportsTVShows,
  UpcomingSports,
  InternationalFriendly,
} from '@constants';
import React, {memo, Suspense} from 'react';
//
const SportList = React.lazy(() => import('../components/SportList'));
const MoviesList = React.lazy(() => import('../components/MoviesList'));
const SportTrending = React.lazy(() => import('../components/SportTrending'));
const MoviesListOphim = React.lazy(
  () => import('../components/MoviesListOphim'),
);
const ListCarouselHome = React.lazy(
  () => import('../components/ListCarouselHome'),
);
const SportsBodyComponent = () => {
  return (
    <>
      <Suspense>
        <SportTrending name="Trending" />
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
        {InternationalFriendly.length > 0 && (
          <SportList
            title="International Friendly"
            logo="InternationalFriendly"
            hideSeeAll={false}
            data={InternationalFriendly}
            symbol="null"
          />
        )}
      </Suspense>
      <Suspense>
        <ListCarouselHome index={3} />
      </Suspense>
      <Suspense>
        {RolandGarros.length > 0 && (
          <SportList
            title="Roland Garros 2023"
            logo="Roland"
            symbol="skySport"
            hideSeeAll={false}
            data={RolandGarros}
          />
        )}
      </Suspense>

      <Suspense>
        <MoviesListOphim title="ESPN Sport" hideSeeAll={false} page={42} />
      </Suspense>

      <Suspense>
        <MoviesList title="Sky Sport" hideSeeAll={false} idApi={1812} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="BeIn Sport" hideSeeAll={false} page={47} />
      </Suspense>

      <Suspense>
        <MoviesList title="Sony Sport" hideSeeAll={false} idApi={3412} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="VETV" hideSeeAll={false} page={49} />
      </Suspense>

      <Suspense>
        {VBA2023.length > 0 && (
          <SportList
            title="VBA 2023"
            logo="vba"
            symbol="beinSport"
            hideSeeAll={false}
            data={VBA2023}
          />
        )}
      </Suspense>

      <Suspense>
        {UpcomingSports.length > 0 && (
          <SportList
            title="UpComing Sports"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={UpcomingSports}
          />
        )}
      </Suspense>

      <Suspense>
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
        <MoviesListOphim title="Barca TV" hideSeeAll={false} page={50} />
      </Suspense>

      <Suspense>
        <MoviesList title="FOX Sport" hideSeeAll={false} idApi={2892} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="CoCa TV Sport" hideSeeAll={false} page={52} />
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
        {SeaGames.length > 0 && (
          <SportList
            title="Sea Games 32"
            logo="seagames"
            symbol="null"
            hideSeeAll={false}
            data={SeaGames}
          />
        )}
      </Suspense>

      <Suspense>
        {Bundesliga.length > 0 && (
          <SportList
            title="Bundesliga"
            logo="bundesliga"
            symbol="null"
            hideSeeAll={false}
            data={Bundesliga}
          />
        )}
      </Suspense>

      <Suspense>
        <MoviesListOphim title="CBS Sport" hideSeeAll={false} page={26} />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="Goal Sport" hideSeeAll={false} page={27} />
      </Suspense>

      <Suspense>
        <MoviesListOphim
          title="Premier League Sport"
          hideSeeAll={false}
          page={28}
        />
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
    </>
  );
};
export default memo(SportsBodyComponent);
