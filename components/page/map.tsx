import { KakaoKeywordSearchData } from "../../lib/type/map";
import { HorizontalContentContainer, VerticalScrollable,  } from "../common/Interface";
import { GroundMarkerData } from "../../lib/interface/GroundData";

// https://apis.map.kakao.com/web/sample/customOverlay2/
export const Marker = ({ markerDatum } : { markerDatum: GroundMarkerData }) => {
    return (
        <div>
            <div>{markerDatum.area}</div>
            <div>{markerDatum.price}</div>
        </div>
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