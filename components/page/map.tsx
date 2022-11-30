import { KakaoKeywordSearchData } from "../../lib/type/map";
import { HorizontalContentContainer, VerticalScrollable,  } from "../common/Interface";
import { GroundMarkerData } from "../../lib/interface/GroundData";
import styled from "styled-components";

// https://apis.map.kakao.com/web/sample/customOverlay2/
export const Marker = ({ markerDatum } : { markerDatum: GroundMarkerData }) => {
    return (
        <MarkerStyle>
            <AreaStyle>{markerDatum.area}m<sup>2</sup></AreaStyle>
            <PriceStyle>{markerDatum.price}원</PriceStyle>
        </MarkerStyle>
    );

};

export const KeywordDrawer = (
    { data, onClickCallback, isCloseCallback }
    :
    { data: KakaoKeywordSearchData[], 
        onClickCallback: (clicked: KakaoKeywordSearchData) => void,
        isCloseCallback: (isClose: boolean) => void }
) => {
    return (
        <div 
            style={{
                position: "absolute", top: "48px",
                transform: "translate(5px, 0)",
                width: "calc(56vw + 16px)", height: "250px", 
                backgroundColor: "white", border: "1px solid black", borderRadius: "0 0 25px 25px",
                zIndex: "1101"
            }}
        >
            <VerticalScrollable style={{width: "calc(56vw + 16px)", height: "220px"}}>
                {
                    data.map((datum: KakaoKeywordSearchData, idx: number) => {
                        return (
                            <HorizontalContentContainer
                                key={idx}
                                style={{
                                    width: "calc(56vw + 16px)",
                                    padding: "16px 0 16px 0",
                                    justifyContent: "left",
                                }}
                                onClick={() => {
                                    onClickCallback(datum);
                                }}
                                >
                                <div style={{width: "36px", fontWeight: "600", marginLeft:"12px", whiteSpace: "nowrap"}}>{datum.address_name.split(" ")[2]}</div>
                                <div style={{width: "20vw", fontWeight: "600", fontSize: "8px", marginLeft:"56px", color: "rgba(0, 0, 0, 0.4)", whiteSpace: "pre-line"}}>{datum.place_name}</div>
                                <div style={{fontWeight: "600", fontSize: "8px", marginLeft:"auto", marginRight:"12px", color: "rgba(0, 0, 0, 0.25)"}}>{datum.category_group_name}</div>
                            </HorizontalContentContainer>
                        );
                    })
                }
            </VerticalScrollable>
            <div style={{textAlign:"right", paddingRight: "24px", color: "red", fontWeight: "600"}}
                onClick={() => {
                    isCloseCallback(true);
                }}
            >{"닫기"}</div>
        </div>
    );
};

const MarkerStyle = styled.div`
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: green;
        width: 53px;
        height: 33px;
        border-radius: 10px;
        &::after {
            border-top: 13px solid green;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 23px solid transparent;
            top: 33px;
            content: "";
            position: absolute;
        }
`;

const AreaStyle = styled.div`
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PriceStyle = styled.div`
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;