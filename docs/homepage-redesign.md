# 홈페이지 개편과 밴드로그 소개

2026-10-12 사용자 요청. 범위는 로컬 미리보기와 PR이며 배포하지 않는다.

## 디자인 방향

- 기존 회사의 핵심 문구와 정규 CI를 유지하며 한글 타이포그래피를 첫 화면의 중심에 둔다.
- 기본색: paper `#f2f5f7`, white `#ffffff`, navy `#08192d`, blue `#194a78`, muted `#637585`. 밴드로그의 빨강은 기존 자산 안에서 유지한다.
- 제목은 기존 LINE Seed KR Bold, 본문과 navigation은 Pretendard Variable을 재사용한다.
- 첫 화면은 좌우 정렬이 달라지는 큰 세 줄 제목, 제품은 어두운 배경 위 밝은 실제 스토어 이미지, 회사 소개는 여백이 넓은 두 열 구성이다.
- 반복되는 카드식 section을 피하고, 첫 화면의 한 번의 타이포 등장과 스크롤에 반응하는 스크린샷 펼침을 주요 동작으로 사용한다. 기기의 동작 줄이기 설정에서는 정적인 구성을 제공한다.
- 실제 이미지 5장은 승인 순서대로 표시하고 클릭하면 확대한다. 좁은 화면에서는 가로 스크롤과 버튼으로 탐색한다.
- App Store·Google Play는 링크와 클릭 동작이 없는 준비 중 표시로 둔다.

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
- reduced motion에서는 입장/스크롤 애니메이션을 중지한다.
- Apple·Google Play 표시에는 `href`, click handler, 다운로드 문구를 넣지 않는다.
- 로컬 화면을 확인하고 PR만 생성한다. `main` 갱신, Pages 배포, Store 배포는 수행하지 않는다.

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

GitHub Pages source는 `main`의 `/`임을 읽기로 확인했다. branch와 PR만 생성하고 배포하지 않는다.
