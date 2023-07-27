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
import React, {useState} from 'react';
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
          <SportTrending name="Trending" data={indexOfSports} />
          <SportList
            title="Sport TV shows"
            logo="bigSize"
            hideSeeAll={false}
            data={SportsTVShows}
            symbol="null"
          />
          <SportList
            title="International Friendly"
            logo="InternationalFriendly"
            hideSeeAll={false}
            data={InternationalFriendly}
            symbol="null"
          />
          <SportList
            title="Roland Garros 2023"
            logo="Roland"
            symbol="skySport"
            hideSeeAll={false}
            data={RolandGarros}
          />
          <SportList
            title="VBA 2023"
            logo="vba"
            symbol="beinSport"
            hideSeeAll={false}
            data={VBA2023}
          />
          <SportList
            title="UpComing Sports"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={UpcomingSports}
          />
          <SportList
            title="Serie A 2023"
            logo="bigSize"
            symbol="espn"
            hideSeeAll={false}
            data={SerieA2023}
          />
          <SportList
            title="TV Channels"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={TVChannels}
          />
          <HBOTrailers
            title="Fomula 1"
            firstItem={0}
            hideSeeAll={false}
            data={YoutubeID[3]}
          />
          <SportList
            title="Sea Games 32"
            logo="seagames"
            symbol="null"
            hideSeeAll={false}
            data={SeaGames}
          />
          <SportList
            title="Bundesliga"
            logo="bundesliga"
            symbol="null"
            hideSeeAll={false}
            data={Bundesliga}
          />
          <SportList
            title="VTV"
            logo="bigSize"
            symbol="null"
            hideSeeAll={false}
            data={VTV}
          />
          <SportList
            title="V-League"
            logo="bigSize"
            symbol="skySport"
            hideSeeAll={false}
            data={VLeague}
          />
          <HBOTrailers
            firstItem={1}
            title="Road to Qatar"
            hideSeeAll={false}
            data={YoutubeID[4]}
          />
        </>
      )}
    </>
  );
};

export default SportsBodyComponent;
