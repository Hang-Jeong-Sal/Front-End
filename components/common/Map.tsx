/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect } from 'react';
import Script from 'next/script';

import { MapProps } from '../../lib/interface/MapProps';
import { KakaoKeywordSearchData } from '../../lib/type/map';

import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Marker } from '../../components/page/map';

const KakaoMap = (
  {
    latitude, longitude,
    keyword, onSearch,
    markerData,
    containerStyle, style
  }: MapProps
) => {

  const getPlaceListByKeyword = (keyword: string) => {
    const places = new kakao.maps.services.Places();
    places.keywordSearch(keyword, (data: KakaoKeywordSearchData[], status: any, pagination: any) => {
      if (status === kakao.maps.services.Status.OK && onSearch !== undefined) {
        onSearch(data);
      }
      else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });
  }

  useEffect(() => {
    if (keyword !== undefined)
      getPlaceListByKeyword(keyword);
  }, [keyword]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        id="kakao_script"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,drawing,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <MapStyler style={containerStyle}>
        <Map
          center={{ lat: latitude, lng: longitude }}
          isPanto={true}
          style={style}
          level={2}
        >
          {
            markerData?.map((markerDatum, idx) => {
              return (
                <CustomOverlayMap
                  key={idx}
                  position={{
                    lat: markerDatum.location.y,
                    lng: markerDatum.location.x,
                  }}>
                  <Marker
                    markerDatum={markerDatum}
                  />
                </CustomOverlayMap>
              );
            })
          }
        </Map>
      </MapStyler>
    </>
  );
};

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
