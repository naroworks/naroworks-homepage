# Asset provenance

## Hero background

- File: `assets/hero-background.jpg`
- Created: 2026-09-03
- Method: OpenAI built-in ImageGen, text-to-image mode
- External inputs: none

이 홈페이지를 위해 새로 생성한 비구상 배경입니다. 제3자 사진, 스톡 이미지, 로고, 작품을 입력으로 사용하지 않았으며 특정 작가나 기존 브랜드의 스타일을 모방하도록 요청하지 않았습니다.

### Final prompt

```text
Use case: stylized-concept
Asset type: clean company homepage hero background
Primary request: Create one clearly original, restrained abstract corporate editorial graphic: a small, close starting point that opens outward toward the world, expressed only through two thin, precise flat bands or planes.
Scene/backdrop: a perfectly uniform pure warm off-white field, exactly #F7F8F6, with no paper grain, texture, noise, variation, vignette, or visible surface.
Subject: in the rightmost 35% only, place two crisp, thin, balanced architectural bands or planes that begin near one compact point and run parallel or gently diverge outward toward the right edge. One band is midnight navy #08192D and the other is trust blue #194A78. Keep the gesture non-representational and understated.
Style/medium: clean flat geometric editorial corporate graphic design; precise hard edges; matte solid color; minimal, calm, confident, architectural.
Composition/framing: very wide 16:9-ish landscape. Preserve the entire left 65% as uninterrupted empty #F7F8F6 space for dark Korean headline text. Confine all colored geometry to the right 35%. Make the bands thin and airy, surrounded by abundant whitespace; avoid large heavy color masses.
Lighting/mood: no lighting effects; quiet, balanced, assured.
Color palette: background #F7F8F6; geometry only #08192D and #194A78; no other colors.
Materials/textures: perfectly flat vector-like raster rendering, entirely textureless and noiseless.
Text: none.
Constraints: exactly one restrained geometric gesture made from two colored bands or planes; crisp edges; clearly original; do not name or imitate any artist or existing brand.
Avoid: gradients, shadows, 3D, perspective depth, texture, paper grain, noise, glow, objects, landscape, horizon, symbols, icons, letters, logos, people, watermark, signature, decorative clutter, photorealism, painterly marks, rough edges, oversized shapes, any content in the left 65%.
```

## Font

- Family: Pretendard Variable
- Source: https://github.com/orioncactus/pretendard
- File: `assets/fonts/PretendardVariable.woff2`
- License: SIL Open Font License 1.1 — `assets/fonts/OFL.txt`

외부 폰트 서비스 요청 없이 사이트에서 직접 제공합니다.

## Header wordmark

- File: `assets/naroworks-english-wordmark.png`
- Source: `naroworks-workspace/assets/brand/naroworks-english-long-transparent.png`
- Approved CI commit: `0d6adaa7da1e835bb23c3b26360e135f816a27f0`
- Design: Bauhaus 계열의 원형과 직선 구조를 바탕으로 한 정규 영문 NaroWorks 워드마크
- Processing: 투명 여백만 잘라냈으며 글자 형태·간격·색상·알파를 그대로 보존했습니다. 화면에서는 비율을 유지해 축소합니다.

## Favicon and touch icon

- Source: `naroworks-workspace/assets/brand/naroworks-hangul-short-square.png`
- CI source commit: `92eeb62`
- Files: `favicon.ico`, `favicon-naro.png`, `favicon-naro-32.png`, `favicon-naro-16.png`, `apple-touch-icon.png`
- 현재 정규 한글 나로 정사각형의 흰 배경본을 비례 축소했습니다. 원본 자간과 종횡비를 유지하고 작은 크기에서도 밝고 어두운 브라우저 테마에 같은 배경을 제공합니다.

## 2026-10-12 Bandlog 제품 화면

- 원본 저장소: `naroworks/bandlog`, 확인 checkout SHA `c2d9c458763618a4e2713b8d3c19c839d7db61c`
- 승인 정보: `docs/delivery/store-assets/manifest.json`, 2026-10-09 승인, source SHA `77ac7ffb5ef558992ff8cfdc74b638069854bf77`
- [Figma 원본](https://www.figma.com/design/hkc0GBpkjsdaYOqaZyxbBb?node-id=1496-96), page `1537:187`, section `1496:96`
- 원본 PNG 1320×2868의 문구·그림·순서·종횡비를 유지하고 440px·880px 폭의 WebP로 비례 축소했다. Pillow LANCZOS, quality 88, method 6을 사용했다.
- 원본 파일은 `docs/delivery/store-assets/app-store/iphone/`이며 파생본은 `assets/bandlog/`에 있다. 내보내기 전에 원본 SHA-256이 manifest와 일치하는지 확인했다.

| 원본 파일                        | Figma node | 원본 SHA-256                                                     |
| -------------------------------- | ---------- | ---------------------------------------------------------------- |
| iphone-01-home.png               | 1497:92    | acb84567bee1aa88d15267d713c02eb7f6f37343d0814c573caf3bb3f221cf3e |
| iphone-02-song-bundle.png        | 1497:879   | 34f4719f4024e51bbf8be2b801a1263c709479890725a4523c75aefca224256e |
| iphone-03-encouragement.png      | 1497:540   | 02f31e0a924ff71f9458c2f85b45e2b1b18928ff432c178bc1de139d88fee96f |
| iphone-04-hapju.png              | 1497:653   | 88d9ea792775a51ded638c52262d939de6fd97e40203802787329ccad2ee2f08 |
| iphone-05-practice-reactions.png | 1497:1028  | 268a12b99fa12334624906c93f55b57a08c8d6135b98821bbd58e42640713408 |

밴드로그 symbol은 같은 source의 `docs/design/assets/brand/symbol/bandlog-symbol-transparent.png`를 156×156 lossless WebP로 비례 축소했다. 제품 설명은 해당 저장소의 `docs/product/product-brief.md`를 따른다.

## 2026-10-12 스토어 아이콘

- [Simple Icons Apple](https://github.com/simple-icons/simple-icons/blob/develop/icons/apple.svg)
- [Simple Icons Google Play](https://github.com/simple-icons/simple-icons/blob/develop/icons/googleplay.svg)
- CC0-1.0: [Simple Icons license](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md)
- SVG 원본 경로를 유지하고 홈페이지에서는 단색으로 표시한다. 각 상표는 해당 소유자의 자산이다.
- 실제 다운로드 badge로 표시하지 않고 스토어 이름과 `준비 중`을 함께 표시한다. 공개 링크는 이번 PR에 추가하지 않는다.

이전 `hero-background.jpg`는 기존 홈페이지 이력을 위한 자산으로 남겨 두며 개편 화면에서는 사용하지 않는다.
