/* eslint-disable curly */
import {VBA2023} from '@constants';
import React, {memo, Suspense} from 'react';
//
const SportList = React.lazy(() => import('../components/SportList'));
const HBODiscover = React.lazy(() => import('../components/HBODiscover'));
const HBOTrending = React.lazy(() => import('../components/HBOTrending'));
const VideoTrailer = React.lazy(() => import('../components/VideoTrailer'));
const HBOListOphim = React.lazy(() => import('../components/HBOListOphim'));
const HBOListTest = React.lazy(() => import('../components/HBOListTest'));
const MoviesListOphim = React.lazy(
  () => import('../components/MoviesListOphim'),
);

const ListCarouselHBO = React.lazy(
  () => import('../components/ListCarouselHBO'),
);

const HBOBodyComponent = () => {
  return (
    <>
      <Suspense>
        <HBOTrending />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="HBO Movies"
          logo="GO"
          hideSeeAll={false}
          page={24}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={575264}
          hideSeeAll={false}
          title="HBO Top Rated"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim title="HBO Ophim" logo="GO" hideSeeAll={false} page={5} />
      </Suspense>

      <Suspense>
        <HBOListTest
          title="HBO Max"
          logo="MAX"
          idApi={2787}
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={277}
          hideSeeAll={false}
          title="Now Playing"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim title="Popular" logo="GO" hideSeeAll={false} page={59} />
      </Suspense>

      <Suspense>
        <HBODiscover title="Discover" logo="GO" hideSeeAll={false} page={109} />
      </Suspense>

      <Suspense>
        <HBOListOphim
          page={89}
          logo={'GO'}
          hideSeeAll={false}
          title="HBO Disney"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={436270}
          hideSeeAll={false}
          title="Movies For Kids"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="Max Ophim"
          hideSeeAll={false}
          logo={'GO'}
          page={9}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          idApi={27899}
          logo="FoxMovies"
          title="Fox Movies"
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <ListCarouselHBO index={0} />
      </Suspense>

      <Suspense>
        <HBOListTest title="HITS" logo="AXN" idApi={43462} hideSeeAll={false} />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={2247}
          hideSeeAll={false}
          title="Cinema Worlds"
        />
      </Suspense>

      <Suspense>
        {VBA2023.length > 0 && (
          <SportList
            logo="vba"
            symbol="espn"
            data={VBA2023}
            hideSeeAll={false}
            title="VBA Max 2023"
          />
        )}
      </Suspense>

      <Suspense>
        <HBOListOphim
          page={88}
          logo={'GO'}
          hideSeeAll={false}
          title="Fast & Furious 9"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={433980}
          hideSeeAll={false}
          title="Game Of Thrones"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={48960}
          hideSeeAll={false}
          title="Harry Potter"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={42160}
          hideSeeAll={false}
          title="Anecdotes About Bloodsuckers"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="KBS Ophim"
          logo="KBS"
          hideSeeAll={false}
          page={20}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          title="AXN HD"
          logo="AXN"
          idApi={433310}
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <HBOListOphim title="CN HD" page={77} logo="GO" hideSeeAll={false} />
      </Suspense>

      <Suspense>
        <VideoTrailer />
      </Suspense>

      <Suspense>
        <HBOListOphim
          title="KBS Worlds"
          logo="KBS"
          hideSeeAll={false}
          page={27}
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="KBS"
          page={72}
          hideSeeAll={false}
          title="Psychological Cinema"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={1081}
          hideSeeAll={false}
          title="Psychological Cinema"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={37}
          hideSeeAll={false}
          title="Children And Families"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={9830}
          hideSeeAll={false}
          title="HBO GO Series"
        />
      </Suspense>

      <Suspense>
        <MoviesListOphim title="AXN Ophim" hideSeeAll={false} page={25} />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={66}
          hideSeeAll={false}
          title="HBO GO Cinema"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={56}
          hideSeeAll={false}
          title="The Flash 2023"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={55}
          hideSeeAll={false}
          title="The Green Arrow 2023"
        />
      </Suspense>

      <Suspense>
        <ListCarouselHBO index={2} />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={930}
          hideSeeAll={false}
          title="Fierce Battlefield"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={75}
          hideSeeAll={false}
          title="Crime Hunting"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={85}
          hideSeeAll={false}
          title="Action Movies"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={185}
          hideSeeAll={false}
          title="Hollywood Blockbuster"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={44129}
          title="Super DC"
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={71120}
          hideSeeAll={false}
          title="Fall In Love"
        />
      </Suspense>

      <Suspense>
        <ListCarouselHBO index={0} />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={402}
          title="HBO Series"
          hideSeeAll={false}
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={5630}
          hideSeeAll={false}
          title="Thailand Martial"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={11855}
          hideSeeAll={false}
          title="International Programs"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={220}
          hideSeeAll={false}
          title="Asian Dramas"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={821}
          hideSeeAll={false}
          title="American Cinema"
        />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={831}
          hideSeeAll={false}
          title="Japan Cinema"
        />
      </Suspense>

      <Suspense>
        <ListCarouselHBO index={1} />
      </Suspense>

      <Suspense>
        <HBOListTest
          logo="GO"
          idApi={832}
          hideSeeAll={false}
          title="Action Psychology"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={175}
          hideSeeAll={false}
          title="Movie Action Adventure"
        />
      </Suspense>

      <Suspense>
        <HBOListOphim
          logo="GO"
          page={145}
          hideSeeAll={false}
          title="Sport Stories"
        />
      </Suspense>
    </>
  );
};

export default memo(HBOBodyComponent);
