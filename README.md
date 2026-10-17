# Naroworks homepage

나로웍스 공식 회사 홈페이지입니다. 회사의 제품 원칙과 밴드로그를 소개합니다.

- Production URL: [www.naroworks.com](https://www.naroworks.com)
- Hosting: GitHub Pages
- Contact: [contact@naroworks.com](mailto:contact@naroworks.com)

## Local preview

별도 설치나 빌드 없이 정적 파일 서버로 실행합니다.

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

[로컬 미리보기](http://127.0.0.1:4173/)를 엽니다.

## 구성

- `index.html`: 회사 소개, 밴드로그의 승인된 iPhone 화면 5장과 [bandlog.kr](https://bandlog.kr/) 연결, 공시·연락처.
- `styles.css`: 반응형 레이아웃과 타이포그래피. 기존 Pretendard·LINE Seed KR 웹폰트를 자체 제공.
- `site.js`: 첫 화면 등장, 스크롤 등장, 갤러리 탐색과 확대. 외부 라이브러리·추적 도구 없음.
- `localization.mjs`: 한국어·일본어·대만 번체·영어 본문과 접근성 문구, 언어 감지, 갤러리 이미지 전환.
- `assets/bandlog/`: 승인된 스토어 화면의 비율을 보존한 WebP 파생본. 원본·체크섬은 [자산 출처](ASSET_PROVENANCE.md)를 따름.
- `assets/icons/`: Apple·Google Play SVG. 두 스토어 배지는 각 스토어 주소로 미리 연결되며, 공개 전까지 `준비 중` 문구를 유지함.
- [개편 방향과 검증 조건](docs/homepage-redesign.md)

JavaScript 없이도 본문·이미지·연락처를 이용할 수 있습니다. 동작 줄이기 설정에서는 등장·반복 애니메이션과 부드러운 스크롤을 끕니다. 확대 화면은 Escape와 좌우 방향키를 지원합니다.

## 언어

상단 dropdown에서 한국어·日本語·繁體中文（台灣）·English를 선택합니다. 수동 선택은 `localStorage`의 `naroworks.locale`에 저장하며 이후 방문에도 우선합니다. 저장된 선택이 없으면 `navigator.languages`의 선호 순서에서 지원하는 언어를 선택하고, 일치하는 언어가 없으면 영어를 표시합니다. 번체 중국어는 `zh-Hant` 또는 TW·HK·MO 지역을 인식하며 간체 중국어는 지원하지 않습니다.

언어를 바꾸면 본문·문서 제목·접근성 문구·갤러리 캡션과 iPhone 이미지 5장이 함께 바뀝니다. 일본어는 バンドネコ 이름·고양이 심볼·흰색 워드마크와 일본어 Ready r2의 화면 5장을 사용합니다. 다른 외국어 썸네일은 기존 Figma 99의 Ready r1 원본을 유지합니다. JavaScript가 꺼진 경우 영어 본문과 영어 이미지를 제공합니다. 브라우저 저장이 차단돼도 현재 방문의 선택은 동작합니다. 회사의 법정 명칭·등록번호와 기존 공개 정책 링크는 보존합니다.

언어 감지·선택 우선순위·번역 누락 검증:

```sh
node --test test/localization.test.mjs
```

## Deployment

`main` branch의 repository root가 GitHub Pages source입니다. `CNAME`은 `www.naroworks.com`으로 고정합니다. PR branch의 작업을 공개하려면 별도 검토 후 main 반영이 필요합니다.

## Brand assets

정규 Naroworks CI와 기존 회사 핵심 문구를 재사용합니다. 폰트·이미지·스토어 아이콘의 출처와 처리 방법은 [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md)에 기록합니다. CI 형태나 색상을 변경할 때는 회사 workspace의 브랜드 기준을 먼저 갱신합니다.

LINE Seed KR은 [LINE 공식 배포본](https://seed.line.me/index_kr.html)의 웹폰트이며, 저작권은 LY Corporation에 있습니다. SIL Open Font License 1.1은 [LINESeed-OFL.txt](assets/fonts/LINESeed-OFL.txt)에 포함되어 있습니다.
