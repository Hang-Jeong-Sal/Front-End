export type GroundCategory = 'spare' | 'weekly' | 'rooftop' | 'school' | 'terrace';

export const GroundCategory_ko: { [K in GroundCategory]: string } = {
    'spare': "자투리 텃밭",
    'weekly': "주말 농장",
    'rooftop': "옥상 정원",
    'school': "스쿨팜",
    'terrace': "베란다 텃밭"
}

// 화장실, 편의점, 수도, 주차공간, CCTV, 소도구, 비닐하우스, 흙, 비료, 강/호수 인접, 중장비, 농부의상, 작업방석, 온도계, 샤워시설, 창고, 허수아비
export type GroundConvenient = 'toilet' | 'convenient' | 'water_supply' | 'parking_lot' | 'CCTV' | 'equipment'
    | 'green_house' | 'soil' | 'fertilizer' | 'near_river' | 'excavator' | 'workwear' | 'cushion' | 'thermometer'
    | 'shower_room' | 'storage' | 'scarecrow';

export const GroundConvenient_ko: { [K in GroundConvenient]: string } = {
    'toilet': "화장실",
    'convenient': "편의점",
    'water_supply': "수도",
    'parking_lot': "주차공간",
    'CCTV': "CCTV",
    'equipment': "소도구",
    'green_house': "비닐하우스",
    'soil': "흙",
    'fertilizer': "비료",
    'near_river': "강/호수 인접",
    'excavator': "중장비",
    'workwear': "농부의상",
    'cushion': "작업방석",
    'thermometer': "온도계",
    'shower_room': "샤워시설",
    'storage': "창고",
    'scarecrow': "허수아비"
};
