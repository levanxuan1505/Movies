import {
  VTV,
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
import {YoutubeID} from '@constants';
import React, {memo, useState} from 'react';
import {Loading, SportList, HBOTrailers, SportTrending} from '@components';
//
const SportsBodyComponent = () => {
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const indexOfSports = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <>
      {isLoadingMovies ? (
        <Loading />
      ) : (
        <>
          {/* trending */}
          {indexOfSports.length > 0 && (
            <SportTrending name="Trending" data={indexOfSports} />
          )}
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
          {TVChannels.length > 0 && (
            <SportList
              title="TV Channels"
              logo="bigSize"
              symbol="null"
              hideSeeAll={false}
              data={TVChannels}
            />
          )}
          {YoutubeID[3].length > 0 && (
            <HBOTrailers
              title="Fomula 1"
              firstItem={0}
              hideSeeAll={false}
              data={YoutubeID[3]}
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
          {VTV.length > 0 && (
            <SportList
              title="VTV"
              logo="bigSize"
              symbol="null"
              hideSeeAll={false}
              data={VTV}
            />
          )}
          {VLeague.length > 0 && (
            <SportList
              title="V-League"
              logo="bigSize"
              symbol="skySport"
              hideSeeAll={false}
              data={VLeague}
            />
          )}
          {YoutubeID[4].length > 0 && (
            <HBOTrailers
              firstItem={1}
              title="Road to Qatar"
              hideSeeAll={false}
              data={YoutubeID[4]}
            />
          )}
        </>
      )}
    </>
  );
};

export default memo(SportsBodyComponent);
