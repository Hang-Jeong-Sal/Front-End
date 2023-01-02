# 호미

- `지역 기반 텃밭 공유 플랫폼`
- `Design Requirement` - [Figma](https://www.figma.com/file/c5YypbOEmemvn5lw6SKFmJ/%ED%95%AD%EC%A0%95%EC%82%B4?node-id=0%3A1&t=jY3ftLU5ls0wepLM-1)
- `기간` : 2022.11.10 ~ 2022.11.30

## Participants


| name                                | 역할    | 담당                        |
| ------------------------------------- | --------- | ----------------------------- |
| [gildong](https://github.com/d0422) | Develop | 홈 - Modal                  |
|                                     |         | 상세 페이지(공통)           |
|                                     |         | 상세 페이지(판매자) - Modal |
|                                     |         | 마이 페이지                 |
|                                     |         | 빌려준 텃밭                 |
|                                     |         | 빌린 텃밭                   |
|                                     |         | 찜한 목록                   |
|                                     |         | 판매자 프로필               |
| [euije](https://github.com/euije)   | Develop | 홈                          |
|                                     |         | 내 땅 글쓰기                |
|                                     |         | 판매 상품                   |
|                                     |         | 지도 페이지                 |
|                                     |         | 로그인 페이지               |
| [jiwon](https://github.com/Jiwon-Jeong99)| Develop | 지도 페이지 - 마커 |

## 의제

### 주어진 과제

- 키워드 : Typescript, Component, Github-flow, EC2, CI/CD

1. **`깔끔한 코드를 작성하고 싶다.`**
2. `함수형 프로그래밍 Functional programming` 관점에서 코딩했으면 좋겠다.
3. `역할을 분명하게 나누어서 진행했으면 좋겠다.`
4. `기술 스택 -> next.js 껍데기, ts`를 사용해 보면 좋겠다.

### 집중한 것

1. Effective Typescript 학습
   - 생산성을 저하 시키지 않을 정도
2. 배포 전략
   - 선택권
     - Vercel
     - AWS
       - S3(static)
   - 프론트엔드 - 디자이너 피드백
     - 빠르게 이루어져야함
3. Code convention
   - TS
     - strictNullChecks, noImplicitAny
   - eslint
     - "eslint": "8.26.0", "eslint-config-next": "13.0.2"
     - "extends": "next/core-web-vitals”
4. 백엔드와 소통 전략
    - 오프라인 대면 시간을 자주 가짐.

### Lesson & Learn

- Next.js는 백엔드 - 프론트엔드 사이의 중간 서버(BFF) 역할을 할 수 있는 프레임워크이다. ([참조1](https://fe-developers.kakaoent.com/2022/220310-kakaopage-bff/), [참조2 - `FE 개발자도 할 수 있다! RESTful API 개발 (with Firebase, GCP), 조은`](https://www.inflearn.com/course/infcon2022/dashboard) )
- 하나의 컴포넌트는 너무 많은 일을 하면 안된다 ㅎ (과로)
    - 프로그래밍언어론 수업에서 배운 `언어의 직교성`과 관련 있다. (직교성이란 단어에 꽂힘)
- 백엔드와 소통 시, 데이터 컬럼명은 초기에 정해야 한다.

### 한계점

- 기술
    - Next.js의 `getServerSideProps`, `getStaticProps` 기능을 활용하여 SEO를 적용하지 못함.
    - 파일 관리의 통일성 부족
        - Type 설계의 통일성 부족
    - 높은 [Mui](https://mui.com/) 의존성
    - styled-components 사용으로 인한 SWC disabled
- 소통
    - PR의 상세한 작성이 과연 소규모 팀에서 좋은 소통 방식인가?
        - 각 PR을 빠르게 검토할 수 있는 시스템, 방식의 필요성
        - 각 PR별 중요도, 코드 변화량([예](https://github.com/apps/pull-request-size)) 확인의 필요성

### Next-level

- Keyword : [Component](https://fe-developers.kakaoent.com/2022/221020-component-abstraction/), Design System, Storybook, CORS handling in next.js, Recoil(왜 전역 상태 관리가 필요할까?)
- 웹 개발에서의 객체

## 기타 (Github 소통)

- branch
  - page/{페이지 이름}
  - component/{컴포넌트 이름}
  - package/{패키지 명} → yarn install 이후package.json 변경 내용만 작업하는 브랜치
  - others/directory → 3가지 종류에 해당하지 않는 작업
- Pull Request 내용 작성 Rule
  - 제목 : [FEAT] 한글로 내용 작성.
  - package 설치
    - react-query @ 버전명 추가
  - page 및 component
    - Changes, After-To-do 작성
    - 개수 자유롭게

## Getting Started

```bash
npm run dev
# or
yarn dev
```
