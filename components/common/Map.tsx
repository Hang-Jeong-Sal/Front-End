declare global {
  interface Window {
    kakao: any;
  }
}
import styled from 'styled-components';
import { useEffect } from 'react';
import { MapProps } from '../../lib/interface/MapProps';

function KakaoMap({ className, latitude, longitude, containerStyle, style }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement('script');

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById(className);
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [latitude, longitude]);

  return (
    <MapStyler style={containerStyle}>
      <MapContainer id={className} style={style} />
    </MapStyler>
  );
}

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
`;
const MapStyler = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 1vw;
  padding-bottom: 1vw;
  padding-left: 3vw;
  padding-right: 3vw;
  height: 450px;
`;

export default KakaoMap;
