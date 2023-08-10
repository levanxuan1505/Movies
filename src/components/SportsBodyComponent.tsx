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
import React, {memo} from 'react';
import {
  SportList,
  MoviesList,
  SportTrending,
  MoviesListOphim,
} from '@components';
//
const SportsBodyComponent = () => {
  return (
    <>
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
      {InternationalFriendly.length > 0 && (
        <SportList
          title="International Friendly"
          logo="InternationalFriendly"
          hideSeeAll={false}
          data={InternationalFriendly}
          symbol="null"
        />
      )}
      {RolandGarros.length > 0 && (
        <SportList
          title="Roland Garros 2023"
          logo="Roland"
          symbol="skySport"
          hideSeeAll={false}
          data={RolandGarros}
        />
      )}
      <MoviesListOphim title="ESPN Sport" hideSeeAll={false} page={42} />

      <MoviesList title="Sky Sport" hideSeeAll={false} idApi={1812} />

      <MoviesListOphim title="BeIn Sport" hideSeeAll={false} page={47} />

      <MoviesList title="Sony Sport" hideSeeAll={false} idApi={3412} />

      <MoviesListOphim title="VETV" hideSeeAll={false} page={49} />
      {VBA2023.length > 0 && (
        <SportList
          title="VBA 2023"
          logo="vba"
          symbol="beinSport"
          hideSeeAll={false}
          data={VBA2023}
        />
      )}
      {UpcomingSports.length > 0 && (
        <SportList
          title="UpComing Sports"
          logo="bigSize"
          symbol="null"
          hideSeeAll={false}
          data={UpcomingSports}
        />
      )}
      {SerieA2023.length > 0 && (
        <SportList
          title="Serie A 2023"
          logo="bigSize"
          symbol="espn"
          hideSeeAll={false}
          data={SerieA2023}
        />
      )}

      <MoviesListOphim title="Barca TV" hideSeeAll={false} page={50} />

      <MoviesList title="FOX Sport" hideSeeAll={false} idApi={2892} />

      <MoviesListOphim title="CoCa TV Sport" hideSeeAll={false} page={52} />

      {TVChannels.length > 0 && (
        <SportList
          title="TV Channels"
          logo="bigSize"
          symbol="null"
          hideSeeAll={false}
          data={TVChannels}
        />
      )}
      {SeaGames.length > 0 && (
        <SportList
          title="Sea Games 32"
          logo="seagames"
          symbol="null"
          hideSeeAll={false}
          data={SeaGames}
        />
      )}
      {Bundesliga.length > 0 && (
        <SportList
          title="Bundesliga"
          logo="bundesliga"
          symbol="null"
          hideSeeAll={false}
          data={Bundesliga}
        />
      )}
      <MoviesListOphim title="CBS Sport" hideSeeAll={false} page={26} />
      <MoviesListOphim title="Goal Sport" hideSeeAll={false} page={27} />
      <MoviesListOphim
        title="Premier League Sport"
        hideSeeAll={false}
        page={28}
      />
      {VLeague.length > 0 && (
        <SportList
          title="V-League"
          logo="bigSize"
          symbol="skySport"
          hideSeeAll={false}
          data={VLeague}
        />
      )}
    </>
  );
};
export default memo(SportsBodyComponent);
