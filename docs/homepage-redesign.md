# 홈페이지 개편과 밴드로그 소개

2026-10-12 사용자 요청. 로컬 미리보기와 PR 검토 후, 사용자가 현재 화면의 PR 머지와 공개 배포를 승인했다.

## 디자인 방향

- 기존 회사의 핵심 문구와 정규 CI를 유지하며 한글 타이포그래피를 첫 화면의 중심에 둔다.
- 기본색: paper `#f2f5f7`, white `#ffffff`, navy `#08192d`, blue `#194a78`, muted `#637585`. 밴드로그의 빨강은 기존 자산 안에서 유지한다.
- 제목은 기존 LINE Seed KR Bold, 본문과 navigation은 Pretendard Variable을 재사용한다.
- 첫 화면은 좌우 정렬이 달라지는 큰 세 줄 제목, 제품은 어두운 배경 위 밝은 실제 스토어 이미지, 회사 소개는 여백이 넓은 두 열 구성이다.
- 반복되는 카드식 section을 피하고, 첫 화면의 한 번의 타이포 등장을 주요 동작으로 사용한다. 기기의 동작 줄이기 설정에서는 정적인 구성을 제공한다.
- 실제 이미지 5장은 승인 순서대로 기울기나 높낮이 차이 없이 가로로 표시하고 클릭하면 확대한다. 좁은 화면에서는 가로 스크롤과 버튼으로 탐색한다.
- App Store·Google Play 배지는 각 스토어 주소로 연결하고, 공개 전까지 준비 중 문구를 둔다(2026-10-17 변경, 아래 기록 참고).

## 구조

```text
정규 워드마크                         제품  회사  문의
나로 시작해
       좋아하는 일이     [이어지는 고리]
             계속되도록
회사 소개 한 문단                     제품으로 이동

밴드로그 로고      내 연습부터, 우리 밴드까지
제품 설명                         스토어 준비 중
[홈] [합주곡] [멤버 반응] [합주 일정] [비하인드]

가까운 곳에서 시작합니다     가까이 / 작게 / 계속
문의와 이메일
회사 정보 · 기존 개인정보/전자공고 링크
```

## 기준과 참고

- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md): 타이포, 내용에 맞는 구성, 절제된 상호작용, 접근성 기준을 적용했다.
- [Things](https://culturedcode.com/things/), [Linear](https://linear.app/), [Raycast](https://www.raycast.com/): 짧은 가치 설명 뒤 실제 제품 화면을 보여주는 흐름을 참고했다. 문구·화면·asset은 복제하지 않았다.
- Bandlog 제품 내용과 화면 출처는 `ASSET_PROVENANCE.md`를 따른다.

## 완료 조건

- 320 / 390 / 768 / 1440 폭에서 페이지 전체 가로 넘침이 없고 5장 모두 접근 가능하다.
- 스크린샷 확대·닫기·이전/다음·Escape·키보드 탐색을 확인한다.
- JavaScript가 없어도 본문과 스토어 이미지, 회사 공시와 연락처를 볼 수 있다.
- reduced motion에서는 등장 애니메이션과 부드러운 스크롤을 중지한다.
- Apple·Google Play 표시에는 `href`, click handler, 다운로드 문구를 넣지 않는다.
- 검토한 화면의 PR을 `main`에 머지하고 GitHub Pages 배포 성공 및 공개 파일 일치를 확인한다.

## 검증 결과

2026-10-12 로컬 Chromium에서 확인했다.

- 320 / 390 / 768 / 1440px에서 document·body 폭이 viewport와 같고 스토어 링크/버튼은 0개, 화면 이미지 5장이다.
- 390px 갤러리 다음 버튼 클릭 후 가로 위치가 이동했다.
- 확대 1번 → 다음 2번 → 왼쪽 방향키 1번 → Escape 닫기 및 최초 링크로 focus 복귀를 확인했다.
- reduced motion: 실행 중 animation 0개, 화면 transform `none`, scroll behavior `auto`.
- JavaScript 비활성 상태에서도 headline과 5장 이미지 링크가 보인다.
- 브라우저 page error·HTTP 4xx/5xx 0건.
- 마지막 이미지 바깥 여백을 조정한 뒤 Codex 브라우저 1600px에서 document 넘침 없음·5장 로드·스토어 링크 0개를 다시 확인했다.
- `node --check site.js`, `git diff --check`, HTML의 로컬 asset 참조 및 중복 ID 검사 통과.
- 정적 홈페이지에 package/build script가 없어 `pnpm check`는 적용 대상이 아니다. Bandlog 앱 코드는 변경하지 않았다.

[데스크톱 첫 화면](previews/desktop-hero.png) · [모바일 첫 화면](previews/mobile-hero.png) · [브라우저 검사 결과](previews/verification.json)

GitHub Pages source는 `main`의 `/`임을 읽기로 확인했다. 사용자가 PR #8의 현재 화면을 검토하고 머지·배포를 요청했다. 실제 배포 결과는 PR #8과 서비스 운영 일감에 연결한다.

2026-10-12 후속 검토: `밴드로그의 다섯 장면` 문구와 카드의 기울기·높낮이·스크롤 펼침을 제거했다. 724px와 1800px 미리보기에서 다섯 카드의 top이 같고 transform이 모두 `none`이며 페이지 가로 넘침이 없음을 확인했다.

## 2026-10-17 밴드로그 사이트 연결과 모션

사용자 요청으로 제품 소개에 [bandlog.kr](https://bandlog.kr/) 연결을 추가하고 움직임을 넓혔다. 디자인 조정도 허용받았다.

- 제품 설명 아래에 흰 배경의 링크 카드를 둔다. 밴드로그 심볼, 언어별 문구, `bandlog.kr` 주소, 바깥으로 나가는 화살표로 구성하고 새 탭에서 연다. bandlog.kr은 한국어 페이지이므로 외국어 문구에는 한국어임을 밝힌다. 링크 카드와 아래 스토어 배지 두 개는 같은 좌우 끝을 공유하도록 한 묶음(`.product-actions`)으로 둔다.
- 첫 화면: 두 궤도가 서로 반대 방향으로 천천히 돌고, 파란 점이 궤도 근처를 떠다니며 퍼지는 파동을 낸다. 설명과 아래 방향 버튼은 제목 뒤에 올라오고, 버튼 화살표가 주기적으로 아래를 가리킨다.
- 스크롤 등장: 제품 머리말·소개·설명·기능, 회사 소개와 원칙 3개, 문의 제목과 이메일이 화면에 들어올 때 한 번 올라온다. 갤러리 다섯 장은 가로로 가려진 장까지 순서대로 함께 등장한다.
- 반복 동작: 밴드로그 심볼이 가볍게 떠 있고, 링크 카드와 이메일 화살표가 바깥을 가리킨다. 원칙 기호는 화면에 들어온 뒤 각각 숨쉬기·회전·흔들림을 반복하며, 마우스를 올리면 기존 hover 동작으로 바뀐다.
- 숨김 class는 JavaScript가 동작을 허용한 경우에만 붙인다. JavaScript가 없거나 동작 줄이기 설정이면 모든 본문이 처음부터 보이고 반복 동작이 없다.

검증(로컬 Chromium):

- 한국어 1440·390px 모션, 일본어 390px·영어 320px·번체 768px 동작 줄이기, JavaScript 비활성 1440px에서 가로 넘침 0, page error·console error·HTTP 4xx/5xx 0건.
- 동작 줄이기와 JavaScript 비활성에서 숨겨진 등장 요소 0개, 동작 줄이기에서 실행 중 animation 0개.
- 모션 상태에서 끝까지 스크롤한 뒤 등장하지 않은 요소 0개(390px 가로 갤러리 포함).
- 네 언어 링크 문구와 `https://bandlog.kr/` 연결, `node --test test/localization.test.mjs` 통과.

## 2026-10-17 스토어 주소 미리 연결과 폭 맞춤

- 형기 요청으로 App Store(`https://apps.apple.com/app/id6815118964`)·Google Play(`https://play.google.com/store/apps/details?id=kr.bandlog.app`) 주소를 배지에 미리 연결한다. 두 주소는 앱 등록 때 정해져 출시 후에도 바뀌지 않으며 bandlog.kr과 같다. 공개 전에는 스토어에서 열리지 않을 수 있어 배지의 `준비 중` 문구는 공개 때까지 유지한다.
- 링크 카드와 두 배지는 2열 grid 묶음으로 너비를 공유한다. 데스크톱은 최소 322px(배지 155px×2 + 간격), 680px 이하는 화면 폭을 채우되 최대 354px이다. 화살표는 카드 오른쪽 끝에 붙는다.
- 검증: 네 언어 × 320·390·768·1440px에서 링크 카드 좌우 끝과 두 배지의 바깥 끝이 0px 차이로 일치했다.
- 일본어 320px에서 회사 소개 문장이 keep-all 때문에 11px 가로 넘침이 있던 기존 문제를, 일본어에만 `overflow-wrap: anywhere`를 더해 폭이 모자랄 때만 줄을 나누도록 고쳤다.
