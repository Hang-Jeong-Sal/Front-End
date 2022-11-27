
export type ServiceFeature = 'home' | 'map' | 'chat' | 'mypage' | 'profile' | 'ground' | 'auth';

export type UserInfoField = 'profile' | 'email' | 'name' | 'password' | 'password_confirmation';

export type LoginInfo = {
    email: string,
    password: string
}

export interface JoinInfo extends LoginInfo{
    profile: string
    name: string
    password_confirmation: string
}

export const JoinFieldName_ko: JoinInfo = {
    profile: "프로필 사진",
    name: "이름",
    email: "이메일",
    password: "비밀번호",
    password_confirmation: "비밀번호 확인"
};