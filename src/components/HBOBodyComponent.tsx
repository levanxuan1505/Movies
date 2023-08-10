/* eslint-disable curly */
import {
  SportList,
  HBODiscover,
  HBOTrending,
  VideoTrailer,
  HBOListOphim,
  MoviesListOphim,
  ListCarouselHome,
} from '@components';
import React, {memo} from 'react';
import {VBA2023} from '@constants';
import HBOListTest from './HBOListTest';
//
const HBOBodyComponent = () => {
  return (
    <>
      <HBOTrending />
      <HBOListOphim title="HBO Movies" logo="GO" hideSeeAll={false} page={24} />

      <HBOListTest
        logo="GO"
        idApi={575264}
        hideSeeAll={false}
        title="HBO Top Rated"
      />
      <HBOListOphim title="HBO Ophim" logo="GO" hideSeeAll={false} page={5} />

      <HBOListTest title="HBO Max" logo="MAX" idApi={2787} hideSeeAll={false} />

      <HBOListTest
        logo="GO"
        idApi={277}
        hideSeeAll={false}
        title="Now Playing"
      />

      <HBOListOphim title="Popular" logo="GO" hideSeeAll={false} page={59} />

      <HBODiscover title="Discover" logo="GO" hideSeeAll={false} page={109} />

      <HBOListOphim
        page={89}
        logo={'GO'}
        hideSeeAll={false}
        title="HBO Disney"
      />

      <HBOListTest
        logo="GO"
        idApi={436270}
        hideSeeAll={false}
        title="Movies For Kids"
      />
      <HBOListOphim title="Max Ophim" hideSeeAll={false} logo={'GO'} page={9} />

      <HBOListTest
        idApi={27899}
        logo="FoxMovies"
        title="Fox Movies"
        hideSeeAll={false}
      />
      <ListCarouselHome index={0} />

      <HBOListTest title="HITS" logo="AXN" idApi={43462} hideSeeAll={false} />

      <HBOListTest
        logo="GO"
        idApi={2247}
        hideSeeAll={false}
        title="Cinema Worlds"
      />
      {VBA2023.length > 0 && (
        <SportList
          logo="vba"
          symbol="espn"
          data={VBA2023}
          hideSeeAll={false}
          title="VBA Max 2023"
        />
      )}

      <HBOListOphim
        page={88}
        logo={'GO'}
        hideSeeAll={false}
        title="Fast & Furious 9"
      />
      <HBOListTest
        logo="GO"
        idApi={433980}
        hideSeeAll={false}
        title="Game Of Thrones"
      />
      <HBOListTest
        logo="GO"
        idApi={48960}
        hideSeeAll={false}
        title="Harry Potter"
      />
      <HBOListTest
        logo="GO"
        idApi={42160}
        hideSeeAll={false}
        title="Anecdotes About Bloodsuckers"
      />
      <HBOListOphim title="KBS Ophim" logo="KBS" hideSeeAll={false} page={20} />

      <HBOListTest
        title="AXN HD"
        logo="AXN"
        idApi={433310}
        hideSeeAll={false}
      />

      <HBOListOphim title="CN HD" page={77} logo="GO" hideSeeAll={false} />
      <VideoTrailer />

      <HBOListOphim
        title="KBS Worlds"
        logo="KBS"
        hideSeeAll={false}
        page={27}
      />

      <HBOListOphim
        logo="KBS"
        page={72}
        hideSeeAll={false}
        title="Psychological Cinema"
      />

      <HBOListTest
        logo="GO"
        idApi={1081}
        hideSeeAll={false}
        title="Psychological Cinema"
      />

      <HBOListOphim
        logo="GO"
        page={37}
        hideSeeAll={false}
        title="Children And Families"
      />

      <HBOListTest
        logo="GO"
        idApi={9830}
        hideSeeAll={false}
        title="HBO GO Series"
      />
      <MoviesListOphim title="AXN Ophim" hideSeeAll={false} page={25} />

      <HBOListOphim
        logo="GO"
        page={66}
        hideSeeAll={false}
        title="HBO GO Cinema"
      />

      <HBOListOphim
        logo="GO"
        page={56}
        hideSeeAll={false}
        title="The Flash 2023"
      />

      <HBOListOphim
        logo="GO"
        page={55}
        hideSeeAll={false}
        title="The Green Arrow 2023"
      />
      <ListCarouselHome index={2} />

      <HBOListTest
        logo="GO"
        idApi={930}
        hideSeeAll={false}
        title="Fierce Battlefield"
      />

      <HBOListOphim
        logo="GO"
        page={75}
        hideSeeAll={false}
        title="Crime Hunting"
      />

      <HBOListOphim
        logo="GO"
        page={85}
        hideSeeAll={false}
        title="Action Movies"
      />

      <HBOListOphim
        logo="GO"
        page={185}
        hideSeeAll={false}
        title="Hollywood Blockbuster"
      />
      <HBOListTest
        logo="GO"
        idApi={44129}
        title="Super DC"
        hideSeeAll={false}
      />
      <HBOListTest
        logo="GO"
        idApi={71120}
        hideSeeAll={false}
        title="Fall In Love"
      />
      <ListCarouselHome index={0} />
      <HBOListTest
        logo="GO"
        idApi={402}
        title="HBO Series"
        hideSeeAll={false}
      />
      <HBOListTest
        logo="GO"
        idApi={5630}
        hideSeeAll={false}
        title="Thailand Martial"
      />
      <HBOListTest
        logo="GO"
        idApi={11855}
        hideSeeAll={false}
        title="International Programs"
      />
      <HBOListTest
        logo="GO"
        idApi={220}
        hideSeeAll={false}
        title="Asian Dramas"
      />
      <HBOListTest
        logo="GO"
        idApi={821}
        hideSeeAll={false}
        title="American Cinema"
      />
      <HBOListTest
        logo="GO"
        idApi={831}
        hideSeeAll={false}
        title="Japan Cinema"
      />
      <ListCarouselHome index={1} />

      <HBOListTest
        logo="GO"
        idApi={9389}
        hideSeeAll={false}
        title="Action Psychology"
      />

      <HBOListOphim
        logo="GO"
        page={175}
        hideSeeAll={false}
        title="Movie Action Adventure"
      />

      <HBOListOphim
        logo="GO"
        page={145}
        hideSeeAll={false}
        title="Sport Stories"
      />
    </>
  );
};

export default memo(HBOBodyComponent);
