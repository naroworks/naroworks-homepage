// 미누(Minou) 소개. 설명은 회사 사이트 언어로 쓰고, 이름·링크·스토어는 미누의 언어별 이름과 홈을 따른다.
// 이름: 한국어 미누, 일본어 ミヌー, 그 밖 Minou(미누 저장소 AGENTS.md). 홍보 홈은 한국어·일본어·번체·영어를 제공한다.
// 일본어·영어는 그 언어의 실제 앱 화면을 쓴다. 대만은 현재 스토어 설치본에 맞춰 영어 화면을 쓰고 번체 홈페이지로 잇는다.
const appStore = country => `https://apps.apple.com/${country}/app/id6830531773`;
export const minouPlay = 'https://play.google.com/store/apps/details?id=com.naroworks.minou';
export const minouLocales = {
  ko: { asset: 'ko', url: 'https://minou.naroworks.com/', language: 'ko', appStore: appStore('kr') },
  'ja-JP': { asset: 'ja', url: 'https://minou.naroworks.com/ja/', language: 'ja', appStore: appStore('jp') },
  'zh-Hant-TW': { asset: 'en', url: 'https://minou.naroworks.com/zh-TW/', language: 'zh-TW', appStore: appStore('tw') },
  'en-US': { asset: 'en', url: 'https://minou.naroworks.com/en/', language: 'en', appStore: appStore('sg') },
};

export const minouCopy = {
  ko: {
    'minou.name': '미누', 'minou.title': ['폰으로 뜨는', '진짜 뜨개질.'],
    'minou.lead': ['두 엄지로 한 코씩 뜨고,', '다 뜬 목도리는 검정 고양이 미누가 입어요.'],
    'minou.description': '미누는 폰을 가로로 쥐고 두 엄지로 바늘을 움직여 목도리, 모자, 양말을 한 코씩 뜨는 앱입니다. 실수하면 꾹 눌러 풀고, 손이 바쁠 땐 자동으로 뜨며, 다 뜬 작품은 미누의 옷장과 진열장에 모입니다.',
    'minou.site': '미누 사이트에서 자세히 보기', 'minou.store': '미누 앱 다운로드', 'minou.release': 'App Store와 Google Play에서 내려받을 수 있습니다', 'minou.gallery': '미누 iPhone 화면 5장',
    'minou.feature.1.title': '진짜 같은 손뜨개', 'minou.feature.1.body': ['밀고 당기는 엄지 동작으로', '진짜 뜨개 순서 그대로 뜹니다.'],
    'minou.feature.2.title': '미누가 입어요', 'minou.feature.2.body': ['다 뜬 목도리와 모자를', '검정 고양이 미누가 입습니다.'],
    'minou.feature.3.title': '포근한 공간 여섯', 'minou.feature.3.body': ['정원, 비 오는 카페, 겨울 오두막…', '꾸러미마다 어울리는 장소에서 뜹니다.'],
    captions: ['미누가 입은 꽈배기 목도리', '꾸러미로 모으는 새 도안', '3D로 돌려 보는 작품', '미누에게 입혀 보기', '미누와 찍어 자랑하기'],
    imageAlts: ['꽈배기 목도리를 두른 미누가 정원에 앉은 홈 화면', '힙합 미누 · 포근한 첫 겨울 · 우주 산책 꾸러미 화면', '다 뜬 줄무늬 목도리를 3D로 구경하는 화면', '다 뜬 목도리를 미누에게 입혀 볼지 묻는 화면', '목도리를 두른 미누 자랑 카드'],
  },
  'ja-JP': {
    'minou.name': 'ミヌー', 'minou.title': ['スマホで編む、', '本物の編みもの。'],
    'minou.lead': ['2本の親指でひと目ずつ編んで、', '黒ねこのミヌーが身につけます。'],
    'minou.description': 'ミヌーは、スマホを横に持ち、2本の親指で針を動かしてマフラーや帽子、くつしたをひと目ずつ編むアプリです。間違えたら長押しでほどき、手がふさがっているときは自動で編めます。編み上がった作品はミヌーのクローゼットと棚に並びます。',
    'minou.site': 'ミヌーのサイトで詳しく見る', 'minou.store': 'ミヌーをダウンロード', 'minou.release': 'App StoreとGoogle Playで配信中', 'minou.gallery': 'ミヌーのiPhone画面5枚',
    'minou.feature.1.title': '本物みたいな手編み', 'minou.feature.1.body': ['押して引く親指の動きで、', '本物の編み順のまま編みます。'],
    'minou.feature.2.title': 'ミヌーが着てくれる', 'minou.feature.2.body': ['編み上がったマフラーや帽子を', '黒ねこのミヌーが身につけます。'],
    'minou.feature.3.title': 'ぬくもりの6つの場所', 'minou.feature.3.body': ['庭、雨のカフェ、冬の山小屋…', 'パックに合った場所で編めます。'],
    captions: ['手編みの服を身につけたミヌー', 'パックで集める新しい編み図', '3Dで回して見る作品', 'ミヌーに着せてみる', 'ミヌーと一緒にシェア'],
    imageAlts: ['手編みの帽子とマフラーを身につけたミヌーが庭に座るホーム画面', 'さまざまな編み図のパックが並ぶ画面', '編み上がったしましまマフラーを3Dで見る画面', '編んだマフラーをミヌーに着せるか聞く画面', 'マフラーを巻いたミヌーのシェアカード'],
  },
  'zh-Hant-TW': {
    'minou.name': 'Minou', 'minou.title': ['在手機上，', '一針一針編織。'],
    'minou.lead': ['用兩隻拇指一針一針編，', '編好的圍巾由黑貓 Minou 穿上。'],
    'minou.description': 'Minou 是一款把手機橫拿、用兩隻拇指移動棒針，一針一針編出圍巾、帽子和襪子的 App。編錯了長按就能拆線，忙碌的時候可以自動編織，完成的作品會收進 Minou 的衣櫃與展示架。',
    'minou.site': '前往 Minou 網站了解更多', 'minou.store': '下載 Minou', 'minou.release': '商店目前版本提供韓文、日文及英文介面。此處為英文 App 畫面；繁體中文介面將於後續版本提供。', 'minou.gallery': 'Minou 的五張 iPhone 畫面',
    'minou.feature.1.title': '像真的一樣的手編', 'minou.feature.1.body': ['用推與拉的拇指動作，', '照真正的編織順序完成。'],
    'minou.feature.2.title': 'Minou 會穿上', 'minou.feature.2.body': ['編好的圍巾和帽子，', '由黑貓 Minou 穿上。'],
    'minou.feature.3.title': '六個溫暖的空間', 'minou.feature.3.body': ['庭院、下雨的咖啡廳、冬天的小屋…', '在主題包對應的場所享受編織。'],
    captions: ['穿上手織作品的 Minou', '用主題包收集新織圖', '用 3D 轉動欣賞作品', '幫 Minou 穿穿看', '和 Minou 一起分享作品'],
    imageAlts: ['戴著手織帽子與圍巾的 Minou 坐在庭院的首頁畫面', '多種織圖主題包的畫面', '用 3D 欣賞編好的條紋圍巾', '詢問是否讓 Minou 穿上圍巾的畫面', '圍著圍巾的 Minou 分享卡片'],
  },
  'en-US': {
    'minou.name': 'Minou', 'minou.title': ['Real knitting,', 'right on your phone.'],
    'minou.lead': ['Knit one stitch at a time with two thumbs,', 'and Minou the black cat wears what you make.'],
    'minou.description': 'Minou is an app for knitting scarves, hats and socks stitch by stitch: hold your phone sideways and move the needles with two thumbs. Hold to unravel a mistake, let it knit on its own when your hands are busy, and collect finished pieces in Minou’s wardrobe and shelf.',
    'minou.site': 'See more on the Minou site', 'minou.store': 'Download Minou', 'minou.release': 'Available on the App Store and Google Play', 'minou.gallery': 'Five Minou iPhone screens',
    'minou.feature.1.title': 'Hand knitting that feels real', 'minou.feature.1.body': ['Push and pull with your thumbs,', 'following real knitting steps.'],
    'minou.feature.2.title': 'Minou wears it', 'minou.feature.2.body': ['Finished scarves and hats', 'are worn by Minou the black cat.'],
    'minou.feature.3.title': 'Six cozy spaces', 'minou.feature.3.body': ['A garden, a rainy café, a winter cabin…', 'each pack has its own setting.'],
    captions: ['Minou in a handmade outfit', 'New patterns from each pack', 'Turn your piece around in 3D', 'Try it on Minou', 'Share a photo with Minou'],
    imageAlts: ['Home screen with Minou in a handmade hat and scarf, sitting in the garden', 'Pattern packs screen', 'A finished striped scarf shown in 3D', 'Asking whether to dress Minou in the finished scarf', 'A share card of Minou in a scarf'],
  },
};
