# Naroworks 홈페이지

뜨개 앱 미누를 개발하고 운영하는 주식회사 나로웍스의 회사 소개 페이지입니다. GitHub Pages에서 저장소 루트의 정적 파일을 제공합니다.

## 로컬 확인

```sh
python3 -m http.server 4310 --bind 127.0.0.1
```

[로컬 홈페이지](http://127.0.0.1:4310/)에서 확인할 수 있습니다. 시험은 `node --test test/*.test.mjs`로 실행합니다.

## 언어와 링크

`index.html`에 영어 본문과 그림, 제품 링크, 회사 정보를 담았습니다. `localization.mjs`의 네 언어 문구와 영어 기본 HTML을 함께 관리합니다. URL의 `?lang=ko|ja|zh-TW|en` 지정이 우선이며, 이어서 저장된 언어와 기기 언어를 확인합니다. 일치하는 언어가 없으면 영어로 표시합니다.

미누의 도메인을 바꿀 때는 `index.html`에서 `id="minou-home"`인 링크의 도메인만 수정하고 영어 경로 `/en/`을 유지합니다. 이 주소가 자바스크립트의 `PRODUCT_ROOT` 원본입니다. 창업자의 LinkedIn 주소도 같은 파일의 `id="founder-profile"` 링크 한 곳에서 관리합니다.

[자산 출처](ASSET_PROVENANCE.md)에 원본 경로와 크롭 범위를 기록했습니다.

대표 LinkedIn 주소를 받으면 `index.html`의 `id="founder-profile"` 링크에 넣고 `hidden`을 지웁니다(지금은 숨김).

## 팀 페이지

`team/index.html`은 대표와 이전 경력, 회사 정보를 담은 팀 페이지입니다. 홈 꼬리의 'Team' 링크에서만 잇고, `noindex`를 달고 sitemap에서 뺐습니다(robots.txt로 막지 않음). 글은 `localization.mjs`의 `team.*`이고 언어 바꾸기는 `team.js`가 합니다. 대표 LinkedIn과 연락처(`hyungkee.park@minouknit.com`)는 이 페이지에만 있습니다.
