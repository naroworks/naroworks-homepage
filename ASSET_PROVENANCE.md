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

- 원본 저장소: `naroworks/bandlog`, merge SHA `fbfa3a060a4e27adbb99bedffdb4cb52d697cfc1` (PR #1074)
- 승인 정보: `docs/delivery/store-assets/manifest.json`, 2026-10-12 사용자 교체·공개 배포 요청, 시각 source SHA `1ab19c75321c1f09a6a420bd1c081a15a5e52071`, 고정 Ready r2 `2103:511`
- [Figma 원본](https://www.figma.com/design/hkc0GBpkjsdaYOqaZyxbBb?node-id=1496-96), page `1537:187`, section `1496:96`
- 원본 PNG 1320×2868의 문구·그림·순서·종횡비를 유지하고 440px·880px 폭의 WebP로 비례 축소했다. Pillow LANCZOS, quality 88, method 6을 사용했다.
- 원본 파일은 `docs/delivery/store-assets/app-store/iphone/`이며 파생본은 `assets/bandlog/`에 있다. 내보내기 전에 원본 SHA-256이 manifest와 일치하는지 확인했다.

| 원본 파일                        | Figma node | 원본 SHA-256                                                     |
| -------------------------------- | ---------- | ---------------------------------------------------------------- |
| iphone-01-home.png               | 1497:92    | a1e8b5640cd994425a59c1f1cd824af8328b9743af05c2f3757bdc21bdbbc9a1 |
| iphone-02-song-bundle.png        | 1497:879   | 6523d4c5122ee97addf2970db0202677694f4b7d831e40d29e1ae6ad159cd9b7 |
| iphone-03-encouragement.png      | 1497:540   | 854e950cb02c444e613ffba51f0f0889c7c395f65ebd198ba8619c3e20169d77 |
| iphone-04-hapju.png              | 1497:653   | 83bdbc1bcc5ce6680e62922682aa70dabada25ebc8933cae0e2d89f8fa3b03a7 |
| iphone-05-practice-reactions.png | 1497:1028  | 59829dda5feebd577c6d95b51362dba0d671144ed1c23058d81f112f1b9f9ea8 |

밴드로그 symbol은 같은 source의 `docs/design/assets/brand/symbol/bandlog-symbol-transparent.png`를 156×156 lossless WebP로 비례 축소했다. 제품 설명은 해당 저장소의 `docs/product/product-brief.md`를 따른다.

## 2026-10-12 스토어 아이콘

- [Simple Icons Apple](https://github.com/simple-icons/simple-icons/blob/develop/icons/apple.svg)
- [Simple Icons Google Play](https://github.com/simple-icons/simple-icons/blob/develop/icons/googleplay.svg)
- CC0-1.0: [Simple Icons license](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md)
- SVG 원본 경로를 유지하고 홈페이지에서는 단색으로 표시한다. 각 상표는 해당 소유자의 자산이다.
- (2026-10-27 바뀜) Google Play는 공개됐고 App Store도 곧 공개되므로, 페이지에는 두 스토어 모두 공개된 것으로 보고 `준비 중` 문구를 내렸다. 배지는 각 스토어 주소로 연결한다.

이전 `hero-background.jpg`는 기존 홈페이지 이력을 위한 자산으로 남겨 두며 개편 화면에서는 사용하지 않는다.

2026-10-12 후속 최신화: 카드 B2/3%·홈 이모지 A·상시 선택 패널과 묶음 사진 clipping 보정본을 동일한 WebP 파생 규격으로 교체했다. 기존 카피·순서·홈페이지 layout을 유지했다. 이미지 URL의 `v=20261012-r2`는 교체된 자산을 브라우저 캐시와 구분한다.


## 2026-10-12 언어별 Bandlog 화면

- 원본 저장소: [Bandlog PR #1075](https://github.com/naroworks/bandlog/pull/1075), merge SHA `b0c1de49a7be645ef77347decbd2e72820254bdd`.
- 확정본: [Figma 99 Ready localized-r1](https://www.figma.com/design/hkc0GBpkjsdaYOqaZyxbBb?node-id=2129-751), 사용자 보관·스토어 저장·홈페이지 언어 대응 요청으로 승인.
- 일본어 `ja-JP`, 대만 번체 `zh-Hant-TW`, 영어 `en-US`마다 iPhone 5장. 이미지 안 인물·밴드·합주실·카피와 실제 앱 리소스 문구는 같은 Figma 확정본에 포함되어 있다.
- 원본 `docs/delivery/store-assets/localized/<locale>/app-store/iphone/`의 PNG 1320×2868에서 440px·880px WebP를 파생했다. Pillow LANCZOS, quality 88, method 6. 이미지의 문구·구성·순서·종횡비를 보존한다. 원본 SHA-256은 Bandlog manifest와 확인했다.
- 사진은 사용자 제공 사진의 모자이크 파생본이다. 출처는 Bandlog `apps/api/src/scenarios/assets/README.md`를 따른다. UI 구성은 Figma export이며 새 사진 생성이나 AI 편집을 수행하지 않았다.

| 언어 | 원본 파일 | Ready node | 원본 SHA-256 |
| --- | --- | --- | --- |
| ja-JP | iphone-01-home.png | 2130:751 | 43a8102ec06d9e75e70b0649a30ade48b93808865905e5affb7afafe6562b85e |
| ja-JP | iphone-02-song-bundle.png | 2130:1234 | dc221b8a959b45248105b1107a8d85a93552c67c0e4dc2eecbca4d24a1e3eb1b |
| ja-JP | iphone-03-encouragement.png | 2130:1470 | ab4280a42311776ba9d1ddbefc219017fa230eb4cda9f8f0671456c2a981bd62 |
| ja-JP | iphone-04-hapju.png | 2130:1671 | 87972e8104859f4a06dad2c34fcdc59cc787d947ce421ad5635a0a1fe41bcaae |
| ja-JP | iphone-05-practice-reactions.png | 2130:2013 | 1067ae204412bd904d46e086758f791051470c0761271c1459641ba9e0fc9014 |
| zh-Hant-TW | iphone-01-home.png | 2131:2030 | 19e3cc5b62593ce1a67c5d63ede4c2dbd96fd17cd39e1ddd5790f54cb116d69a |
| zh-Hant-TW | iphone-02-song-bundle.png | 2131:2513 | 545b15b828bd1df282ec521762af9bc8ff55ef6e1c61c262f8c3486452f58be3 |
| zh-Hant-TW | iphone-03-encouragement.png | 2131:2749 | da41a42c50dd76fe4f6d5f4834dee45c2043c8be5f1122ab2fd884ab7c9195fb |
| zh-Hant-TW | iphone-04-hapju.png | 2131:2950 | a3ce503c7bdba42c4e639dd8e64bc1d9f8f5a62adc4f21771b466dfeb22e0d39 |
| zh-Hant-TW | iphone-05-practice-reactions.png | 2131:3292 | 9cfd5cb598f03495eecd79637791ff5388560d38ec7a3763fa1c60ee358c37b0 |
| en-US | iphone-01-home.png | 2131:4759 | e9db9f0899e787093986a212b6df61b1257e921b1dfd8c6ffd5b84accf627d22 |
| en-US | iphone-02-song-bundle.png | 2131:5242 | 6b6718bffea57f921d7b7c7aec3ae78643ab086887a115d550762c0692e36855 |
| en-US | iphone-03-encouragement.png | 2131:5478 | c9a5e43e7cd3e19bc7cd58e7fd849e5ea032ee6f89426988b02f55e641e2b331 |
| en-US | iphone-04-hapju.png | 2131:5679 | 03e5097ac2300efc7ebcc651863748a8ed0c953ba8b00725169de48fe17c3828 |
| en-US | iphone-05-practice-reactions.png | 2131:6021 | f36601c7d91409d42d3ea63bdfd2940e8a66f6697be11af926dd5236a19d1336 |

## 2026-10-12 일본어 バンドネコ 브랜드

일본어에서만 バンドネコ 명칭·승인 고양이 심볼·흰색 Thin 워드마크를 표시한다. Figma 브랜드 Ready 2182:69, 일본어 스토어 Ready 2189:751에서 승인했다. 스토어 PNG 1320×2868를 기존 440/880px WebP 규격(Pillow LANCZOS, quality88, method6)으로 파생했다. 고양이 RGBA는 156×156 lossless WebP, 흰색 워드마크는 500×127 lossless WebP다. 다른 언어의 자산·본문은 기존 그대로이며 언어 복귀 시 기존 심볼을 사용한다.

일본어 자산의 저장소 전달 근거: [Bandlog PR #1093](https://github.com/naroworks/bandlog/pull/1093), source head `2e36dc3c`. 이 SHA에서 저장한 일본어 PNG와 같은 파일을 사용했다.

## 복슬 · 2026-10-23

`assets/boxle/{ko,ja-JP,zh-Hant-TW,en-US}/01..05-{440,880}.webp`는 naroworks/boxle PR #285로 확정된 `design/store/2026-10-23/ios/` 원본 PNG의 비율을 유지한 WebP 파생본입니다(quality 88). 원본 Figma 파일 `XlhpeQaQR9WmMbg9OJtbVH`, 정본 페이지 `1246:11351`. 금색 별이 있는 `symbol.webp`는 같은 저장소의 정규 `design/brand/logo.png`에서 192px로 변환했습니다.

제품 이름은 한국어 복슬, 일본어 ふくもふ, 대만 번체 福絨입니다. 영어는 2026-10-24 앱 영어 지원(형기 님 결정, 국가 확장은 아님)에 따라 영어 이름 boxle, Figma 정본의 영어(en-US) 화면(`design/store/2026-10-23/ios/en-US/`)과 `boxle.kr/en/`을 씁니다. 일본어·번체는 해당 화면과 `boxle.kr/ja/`, `boxle.kr/zh-Hant/`로 연결합니다. 기존 밴드로그 자산은 변경하지 않았습니다.
