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
      <Image useMap="#image-map" alt="orgchart" src="/img/people/orgchart.jpg" height={1000} width={3000} onMouseEnter={() => setEnter(!enter)} />
      <map name="image-map">
        <area target="_blank" alt="Shannon" title="Shannon" href="https://soapbox.wistia.com/videos/yYo1Yww34z" coords="530,762,978,556" shape="rect" />
        <area target="_blank" alt="Fiorella" title="Fiorella" href="https://soapbox.wistia.com/videos/IC8i8RRwe3" coords="1561,751,2007,537" shape="rect" />
        <area target="_blank" alt="Megan" title="Megan" href="https://soapbox.wistia.com/videos/LJ3AzzQdUv" coords="2069,743,2512,548" shape="rect" />
        <area target="_blank" alt="Nikki" title="Nikki" href="https://soapbox.wistia.com/videos/nEUvcLaG6X" coords="2072,998,2512,789" shape="rect" />
        <area target="_blank" alt="colin" title="colin" href="https://soapbox.wistia.com/videos/VI1SFIf6rY?preview=true" coords="2582,998,3022,795" shape="rect" />
      </map>
    </>
  );
};

export default OrgChart;
