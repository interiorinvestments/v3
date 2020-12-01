import ImageMap from 'image-map';
import Image from 'next/image';
import { useEffect, useState } from 'react';

ImageMap('img[usemap]');

const OrgChart = () => {
  const [enter, setEnter] = useState(false);
  useEffect(() => {
    ImageMap('img[usemap]');
  }, [enter]);
  return (
    <>
      <Image useMap="#image-map" alt="orgchart" src="/img/people/orgchart.jpg" height={600} width={2800} onMouseEnter={() => setEnter(!enter)} />
      <map name="image-map">
        <area target="_blank" alt="Shannon" title="Shannon" href="https://soapbox.wistia.com/videos/yYo1Yww34z" coords="948,460,493,241" shape="rect" />
        <area target="_blank" alt="Fiorella" title="Fiorella" href="https://soapbox.wistia.com/videos/IC8i8RRwe3" coords="1519,230,1981,450" shape="rect" />
        <area target="_blank" alt="Megan" title="Megan" href="https://soapbox.wistia.com/videos/LJ3AzzQdUv" coords="2489,447,2034,228" shape="rect" />
        <area target="_blank" alt="Nikki" title="Nikki" href="https://soapbox.wistia.com/videos/nEUvcLaG6X" coords="2032,479,2489,695" shape="rect" />
        <area target="_blank" alt="Colin" title="Colin" href="https://soapbox.wistia.com/videos/VI1SFIf6rY" coords="2539,479,2991,695" shape="rect" />
      </map>
    </>
  );
};

export default OrgChart;
