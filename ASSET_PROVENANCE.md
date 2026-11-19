# 홈페이지 자산 출처

## 미누 앱과 승인 원화

아래 표에서 미누 원본 루트는 `/Volumes/WorkSSD/AgentWork/Worktrees/Claude/minou/google-cloud-startup-reapply-2e4b16/apps/site/public/media/`입니다. 자른 좌표는 원본 왼쪽 위가 기준이며 오른쪽·아래 경계는 포함하지 않습니다.

| 홈페이지 파일 | 미누 원본 루트 아래의 경로 | 사용 방식 |
| --- | --- | --- |
| `assets/minou/ko/stitch.{mp4,webp}` | `hero-stitch.{mp4,webp}` | 한국어 실제 녹화와 첫 프레임을 그대로 복사 |
| `assets/minou/ja/stitch.{mp4,webp}` | `hero-stitch-ja.{mp4,webp}` | 일본어 실제 녹화와 첫 프레임을 그대로 복사 |
| `assets/minou/zh-TW/stitch.{mp4,webp}` | `hero-stitch-zh-TW.{mp4,webp}` | 대만 번체 실제 녹화와 첫 프레임을 그대로 복사 |
| `assets/minou/en/stitch.{mp4,webp}` | `hero-stitch-en.{mp4,webp}` | 영어 실제 녹화와 첫 프레임을 그대로 복사 |
| 각 언어 폴더의 `sock-detail.webp` | 위 표에 대응하는 언어의 첫 프레임 | (525, 149)–(894, 518) 양말 부분을 무손실 WebP로 잘라 도안판에 사용 |
| `assets/minou/ko/fabric.webp` | `screens/knit-cafe.webp` | (218, 180)–(1138, 490) 바늘과 코 부분을 무손실 WebP로 자름 |
| `assets/minou/{ja,zh-TW,en}/fabric.webp` | `screens/{ja,zh-TW,en}/knit-cafe.webp` | 대응하는 각 언어의 원본에서 같은 좌표로 자름 |
| `assets/minou/pack-winter.webp` | `pack-winter.webp` | 겨울 양말을 신은 미누 원화 |
| `assets/minou/stretch-poses.webp` | `minou/stretch.webp` | (0, 0)–(1152, 384) 기지개 원화 시트의 첫 세 프레임을 무손실 WebP로 자름 |

## 3D와 2D의 연결

`assets/minou/connect/`의 열두 장은 Claude가 `naroworks/minou` 커밋 `0b0a7f92`의 미리보기 창 `tools/studio`에서 추출했다. 미리보기는 앱과 같은 그리기 코드를 사용한다. 3D 그림은 완성품이 받침 위에 놓인 화면을 작품 둘레로 자른 640×640 WebP다. 착용 그림은 `thumb`의 `worn` 모드에서 작품 하나와 자세를 지정해 뽑은 512×512 투명 WebP다. 열두 장 모두 생성형 AI 이미지가 아닌 앱 렌더링 결과다.

| 작품 | 완성품 3D | 착용 자세 세 장 |
| --- | --- | --- |
| 방울 모자 | `bobble-3d.webp` | `bobble-idle_0.webp`, `bobble-walk_2.webp`, `bobble-doze_3.webp` |
| 꽈배기 금줄 목도리 | `cable-scarf-3d.webp` | `cable-scarf-idle_0.webp`, `cable-scarf-stretch_3.webp`, `cable-scarf-groom_2.webp` |
| 아가일 양말 | `argyle-socks-3d.webp` | `argyle-socks-gaze_0.webp`, `argyle-socks-cheer_2.webp`, `argyle-socks-stretch_3.webp` |

## 저장소의 기존 자산

| 경로 | 출처와 용도 |
| --- | --- |
| `assets/minou/symbol.webp` | 현재 저장소의 미누 앱 아이콘 |
| `assets/naroworks-english-wordmark.png` | 현재 저장소의 정규 영문 CI 워드마크 |
| `favicon.ico`, `favicon-naro*.png`, `apple-touch-icon.png` | 현재 저장소의 회사 파비콘과 홈 화면 아이콘 |
| `assets/fonts/PretendardVariable.woff2` | 기존 자체 호스팅 Pretendard. 라이선스는 같은 폴더의 `OFL.txt` |
| `assets/og.png` | 영문 워드마크와 영어 양말 확대 화면, 겨울 양말 원화를 첫 화면의 도안판과 조합해 로컬 Chrome에서 1200×630으로 캡처 |
