# Naroworks homepage

나로웍스의 공식 회사 홈페이지입니다.

- Production URL: [www.naroworks.com](https://www.naroworks.com)
- Hosting: GitHub Pages
- Contact: [contact@naroworks.com](mailto:contact@naroworks.com)

## Local preview

별도 설치 없이 정적 파일 서버로 확인할 수 있습니다.

```sh
python3 -m http.server 4173
```

`http://localhost:4173`을 엽니다.

## Deployment

`main` branch의 repository root를 GitHub Pages source로 사용합니다. `CNAME`은 `www.naroworks.com`으로 고정합니다.

## Brand assets

사이트의 wordmark와 symbol은 Naroworks company workspace의 정규 CI에서 가져온 배포용 사본입니다. CI 형태나 색상을 변경할 때는 회사 workspace의 브랜드 기준을 먼저 갱신한 뒤 이 저장소에 반영합니다.

히어로 배경은 이 홈페이지를 위해 생성한 원본 비구상 이미지이며, 외부 사진이나 스톡 이미지를 사용하지 않았습니다. 생성 방식과 최종 프롬프트는 [ASSET_PROVENANCE.md](ASSET_PROVENANCE.md)에 기록합니다.

## Styles

`styles.css`는 기존 히어로·문의·푸터의 레이아웃을, `about.css`는 OUR APPROACH 영역의 반응형 디자인을 담당합니다. 기본 글꼴은 Pretendard이며, 히어로 핵심 문구에만 LINE Seed KR Bold를 사용합니다. 두 글꼴 모두 `assets/fonts/`에서 직접 제공합니다.

LINE Seed KR은 [LINE 공식 배포본](https://seed.line.me/index_kr.html)의 웹폰트이며, 저작권은 LY Corporation에 있습니다. SIL Open Font License 1.1은 [LINESeed-OFL.txt](assets/fonts/LINESeed-OFL.txt)에 포함되어 있습니다.
