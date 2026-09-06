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
