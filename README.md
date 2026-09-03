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
