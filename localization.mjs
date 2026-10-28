import { boxleCopy, boxleLocales } from './boxle-localization.mjs';

export const supportedLocales = ['ko', 'ja-JP', 'zh-Hant-TW', 'en-US'];
const storageKey = 'naroworks.locale';

export function resolveLocale(language) {
  if (typeof language !== 'string') return null;
  const [base, ...parts] = language.toLowerCase().split('-');
  if (base === 'ko') return 'ko';
  if (base === 'ja') return 'ja-JP';
  if (base === 'en') return 'en-US';
  if (base === 'zh' && !parts.includes('hans') &&
      (parts.includes('hant') || parts.some(part => ['tw', 'hk', 'mo'].includes(part)))) {
    return 'zh-Hant-TW';
  }
  return null;
}

export function chooseLocale(saved, languages = []) {
  if (supportedLocales.includes(saved)) return saved;
  for (const language of languages) {
    const locale = resolveLocale(language);
    if (locale) return locale;
  }
  return 'en-US';
}

export const copy = {
  ko: {
    'meta.title': '나로웍스 — 나로 시작해 좋아하는 일이 계속되도록',
    'meta.description': '나로웍스는 직접 겪는 불편에서 출발해, 좋아하는 일을 더 쉽게 시작하고 오래 이어갈 수 있는 서비스를 만듭니다.',
    'meta.socialDescription': '좋아하는 일을 더 쉽게 시작하고 오래 이어갈 수 있는 서비스를 만듭니다.',
    'meta.siteName': '나로웍스', 'meta.imageAlt': '나로웍스 CI',
    skip: '본문으로 바로가기', home: '나로웍스 홈', navigation: '주요 메뉴',
    'nav.products': '제품', 'nav.about': '회사', 'nav.contact': '문의', language: '언어',
    'hero.1': '나로 시작해', 'hero.2': '좋아하는 일이', 'hero.3': '계속되도록',
    'hero.description': ['나로웍스는 우리가 직접 겪는 불편에서 출발해,', '좋아하는 일을 더 쉽게 시작하고', '오래 이어갈 수 있는 서비스를 만듭니다.'],
    services: '우리가 만드는 서비스', bandlog: '밴드로그',
    'product.title': ['내 연습부터,', '우리 밴드까지.'],
    'product.lead': ['혼자 남긴 연습이 모이고,', '함께할 다음 합주로 이어지도록.'],
    'product.description': '밴드로그는 개인 연습 기록과 밴드 활동을 한곳에 모으는 앱입니다. 연습의 순간을 남기고, 합주곡과 일정을 준비하고, 서로에게 가벼운 리액션을 보내세요.',
    'product.site': '밴드로그 사이트에서 자세히 보기', 'store.label': '밴드로그 앱 다운로드', 'store.appStore': '다운로드하기', 'store.googlePlay': '다운로드하기',
    'gallery.hint': '화면을 눌러 자세히 보기', 'gallery.label': '밴드로그 iPhone 화면 5장',
    'gallery.scroll': '옆으로 넘겨 둘러보세요', 'gallery.previous': '이전 화면으로 스크롤', 'gallery.next': '다음 화면으로 스크롤',
    'feature.1.title': '나의 연습을 차곡차곡', 'feature.1.body': ['밴드에 가입하지 않아도', '사진과 영상으로 연습을 남깁니다.'],
    'feature.2.title': '우리 밴드의 준비를 한곳에', 'feature.2.body': ['합주할 곡과 의견, 일정과 장소를', '멤버들과 함께 확인합니다.'],
    'feature.3.title': '말 대신 가벼운 리액션', 'feature.3.body': ['멤버의 연습에 반응을 보내고', '함께할 마음을 이어갑니다.'],
    'about.label': '나로웍스가 일하는 방식', 'about.title': ['가까운 곳에서', '시작합니다.'],
    'about.lead': ['좋아하는 일을 하며 마주친 불편,', '더 잘 누리고 싶은 일상.'],
    'about.description': '우리는 가까운 필요를 작지만 완결된 서비스로 풀고, 비슷한 마음을 가진 사람들이 함께 쓸 수 있도록 키웁니다.',
    'principle.1.title': '가까이서 시작합니다', 'principle.1.body': ['우리가 직접 겪거나 충분히 이해한', '문제를 다룹니다.'],
    'principle.2.title': '작게 완성합니다', 'principle.2.body': ['많은 기능보다 하나의 중요한 경험을', '제대로 만듭니다.'],
    'principle.3.title': '계속할 수 있게 합니다', 'principle.3.body': ['화면에 머문 시간보다 좋아하는 일을', '이어가는 변화를 봅니다.'],
    'contact.label': '함께 이야기해요', 'contact.title': ['좋아하는 일을', '이어가는 방법.'],
    'company.name': '주식회사 나로웍스', 'company.otherName': 'Naroworks Inc.',
    'company.links': '회사 정책 및 공고', 'company.privacy': '개인정보 처리방침', 'company.notices': '전자공고',
    'company.representative': '대표자 박형기', 'company.registration': '사업자등록번호 482-88-03565',
    'company.address': '경기도 고양시 덕양구 으뜸로 130, 1131호(덕은동, 위프라임트윈타워)',
    'viewer.label': '앱 화면 확대', 'viewer.close': '확대 화면 닫기', 'viewer.previous': '이전 화면', 'viewer.next': '다음 화면',
    captions: ['나의 연습과 우리 밴드', '함께 고르는 합주곡', '서로에게 보내는 응원', '한곳에 모인 합주 준비', '기록으로 이어지는 연습'],
    imageAlts: ['개인 연습 기록과 참여 중인 밴드를 함께 보는 홈 화면', '합주곡을 묶고 멤버들과 의견을 나누는 화면', '밴드 멤버에게 이모지로 가볍게 반응을 보내는 화면', '다음 합주의 일정과 장소, 준비 정보를 확인하는 화면', '연습 비하인드를 사진과 영상으로 보고 리액션을 보내는 화면'],
    expand: '화면 확대',
  },
  'ja-JP': {
    'meta.title': 'NaroWorks — 自分から始めて、好きなことが続くように',
    'meta.description': 'NaroWorksは、自分たちが感じる日々の不便から出発し、好きなことを始めやすく、続けやすくするサービスをつくります。',
    'meta.socialDescription': '好きなことを始めやすく、続けやすくするサービスをつくります。',
    'meta.siteName': 'NaroWorks', 'meta.imageAlt': 'NaroWorksのロゴ',
    skip: '本文へ移動', home: 'NaroWorks ホーム', navigation: 'メインメニュー',
    'nav.products': 'サービス', 'nav.about': '会社について', 'nav.contact': 'お問い合わせ', language: '言語',
    'hero.1': '自分から始めて', 'hero.2': '好きなことが', 'hero.3': '続くように',
    'hero.description': ['自分たちが感じる日々の不便から出発し、', '好きなことを始めやすく、', '続けやすくするサービスをつくります。'],
    services: '私たちのサービス', bandlog: 'バンドネコ',
    'product.title': ['自分の練習から、', 'バンドの毎日まで。'],
    'product.lead': ['一人で残した練習が集まり、', '次のリハーサルへつながるように。'],
    'product.description': 'バンドネコは、自分の練習記録とバンドの活動を一か所にまとめるアプリです。練習の瞬間を残し、曲や予定を準備して、気軽なリアクションを送り合いましょう。',
    'product.site': '韓国版サイトを見る（韓国語）', 'store.label': 'バンドネコアプリをダウンロード', 'store.appStore': 'ダウンロード', 'store.googlePlay': 'ダウンロード',
    'gallery.hint': '画面を押して詳しく見る', 'gallery.label': 'バンドネコのiPhone画面5枚',
    'gallery.scroll': '横にスワイプしてご覧ください', 'gallery.previous': '前の画面へスクロール', 'gallery.next': '次の画面へスクロール',
    'feature.1.title': '自分の練習を少しずつ', 'feature.1.body': ['バンドに入っていなくても、', '写真や動画で練習を残せます。'],
    'feature.2.title': 'バンドの準備を一か所に', 'feature.2.body': ['曲、意見、予定、場所を、', 'メンバーと一緒に確認できます。'],
    'feature.3.title': '言葉の代わりにリアクション', 'feature.3.body': ['メンバーの練習に気軽に反応して、', '一緒にやりたい気持ちをつなぎます。'],
    'about.label': 'NaroWorksのものづくり', 'about.title': ['身近なところから', '始めます。'],
    'about.lead': ['好きなことをする中で感じた不便。', 'もっと楽しみたい日常。'],
    'about.description': '身近なニーズを、小さくてもひと通り使えるサービスにして、同じ思いを持つ人たちも使えるように育てます。',
    'principle.1.title': '身近なところから', 'principle.1.body': ['自分たちが経験した、あるいは', '十分に理解した問題に取り組みます。'],
    'principle.2.title': '小さくつくりきる', 'principle.2.body': ['機能を増やすことより、', '大切な一つの体験をしっかりつくります。'],
    'principle.3.title': '続けられるように', 'principle.3.body': ['画面にいた時間より、好きなことを', '続けられるようになった変化を見ます。'],
    'contact.label': '一緒に話しましょう', 'contact.title': ['好きなことを', '続けるために。'],
    'company.name': 'Naroworks Inc.', 'company.otherName': '주식회사 나로웍스',
    'company.links': '会社の方針と公告', 'company.privacy': 'プライバシーポリシー', 'company.notices': '電子公告',
    'company.representative': '代表者：パク・ヒョンギ', 'company.registration': '韓国事業者登録番号：482-88-03565',
    'company.address': '韓国 京畿道 高陽市 徳陽区 Eutteum-ro 130、1131号（Deogeun-dong）',
    'viewer.label': 'アプリ画面を拡大', 'viewer.close': '拡大画面を閉じる', 'viewer.previous': '前の画面', 'viewer.next': '次の画面',
    captions: ['自分の練習とバンド', 'みんなで選ぶ曲', 'メンバーへの応援', '一か所にまとまるリハーサル準備', '記録でつながる練習'],
    imageAlts: ['自分の練習記録と参加しているバンドを一緒に見られるホーム画面', '曲をコレクションにまとめてメンバーと意見を交換する画面', 'バンドメンバーに絵文字で気軽に反応を送る画面', '次のリハーサルの予定、場所、準備を確認する画面', '練習の写真や動画を見てリアクションを送る画面'],
    expand: '画面を拡大',
  },
  'zh-Hant-TW': {
    'meta.title': 'NaroWorks — 從自己出發，讓喜歡的事一直持續',
    'meta.description': 'NaroWorks 從親身經歷的不便出發，打造讓喜歡的事更容易開始、也能長久持續的服務。',
    'meta.socialDescription': '打造讓喜歡的事更容易開始、也能長久持續的服務。',
    'meta.siteName': 'NaroWorks', 'meta.imageAlt': 'NaroWorks 標誌',
    skip: '跳至主要內容', home: 'NaroWorks 首頁', navigation: '主要選單',
    'nav.products': '產品', 'nav.about': '關於我們', 'nav.contact': '聯絡', language: '語言',
    'hero.1': '從自己出發', 'hero.2': '讓喜歡的事', 'hero.3': '一直持續',
    'hero.description': ['從我們親身經歷的不便出發，', '打造讓喜歡的事更容易開始、', '也能長久持續的服務。'],
    services: '我們打造的服務', bandlog: 'Bandlog',
    'product.title': ['從自己的練習，', '到我們的樂團。'],
    'product.lead': ['把一個人的練習累積起來，', '串起下一次相聚的團練。'],
    'product.description': 'Bandlog 是一款把個人練習紀錄與樂團活動整理在一起的 App。留下練習的片刻，準備團練曲目與行程，再送個輕鬆的回應給彼此。',
    'product.site': '前往 Bandlog 官方網站（韓文）', 'store.label': '下載 Bandlog App', 'store.appStore': '下載', 'store.googlePlay': '下載',
    'gallery.hint': '點選畫面查看細節', 'gallery.label': 'Bandlog 的 5 張 iPhone 畫面',
    'gallery.scroll': '左右滑動看看', 'gallery.previous': '捲動至上一張畫面', 'gallery.next': '捲動至下一張畫面',
    'feature.1.title': '慢慢累積自己的練習', 'feature.1.body': ['還沒加入樂團，', '也能用照片和影片記錄練習。'],
    'feature.2.title': '把樂團的準備放在一起', 'feature.2.body': ['曲目、想法、行程和地點，', '都能和團員一起確認。'],
    'feature.3.title': '用輕鬆的回應代替言語', 'feature.3.body': ['送個回應給團員的練習，', '延續想一起玩音樂的心情。'],
    'about.label': 'NaroWorks 的工作方式', 'about.title': ['從身邊的需要', '開始。'],
    'about.lead': ['做喜歡的事時遇見的不便，', '想更自在享受的日常。'],
    'about.description': '我們把身邊的需要做成小而完整的服務，再讓它逐步成長，讓有相似心情的人也能一起使用。',
    'principle.1.title': '從身邊出發', 'principle.1.body': ['處理我們親身經歷，', '或已充分理解的問題。'],
    'principle.2.title': '把小事做好', 'principle.2.body': ['比起堆疊功能，', '我們更在意做好一個重要的體驗。'],
    'principle.3.title': '讓喜歡的事持續', 'principle.3.body': ['比起停留在畫面的時間，', '我們更在意讓喜歡的事持續的改變。'],
    'contact.label': '一起聊聊吧', 'contact.title': ['讓喜歡的事', '繼續的方法。'],
    'company.name': 'Naroworks Inc.', 'company.otherName': '주식회사 나로웍스',
    'company.links': '公司政策與公告', 'company.privacy': '隱私權政策', 'company.notices': '電子公告',
    'company.representative': '代表人：Hyeonggi Park', 'company.registration': '韓國營業登記號碼：482-88-03565',
    'company.address': '韓國京畿道高陽市德陽區 Eutteum-ro 130 號，1131 室（Deogeun-dong）',
    'viewer.label': '放大應用程式畫面', 'viewer.close': '關閉放大畫面', 'viewer.previous': '上一張畫面', 'viewer.next': '下一張畫面',
    captions: ['我的練習與我們的樂團', '一起挑選的團練曲', '送給彼此的加油', '放在一起的團練準備', '用紀錄串起練習'],
    imageAlts: ['同時查看個人練習紀錄與已加入樂團的首頁', '把曲目整理成合集並和團員討論的畫面', '用表情符號輕鬆回應團員的畫面', '查看下次團練行程、地點與準備資訊的畫面', '查看練習照片與影片並傳送回應的畫面'],
    expand: '放大畫面',
  },
  'en-US': {
    'meta.title': 'NaroWorks — Start with you. Keep doing what you love.',
    'meta.description': 'NaroWorks starts with everyday frustrations we experience ourselves, building services that make it easier to start and keep doing what you love.',
    'meta.socialDescription': 'Services that make it easier to start and keep doing what you love.',
    'meta.siteName': 'NaroWorks', 'meta.imageAlt': 'NaroWorks logo',
    skip: 'Skip to main content', home: 'NaroWorks home', navigation: 'Main navigation',
    'nav.products': 'Products', 'nav.about': 'About', 'nav.contact': 'Contact', language: 'Language',
    'hero.1': 'Start with you.', 'hero.2': 'Keep doing', 'hero.3': 'what you love.',
    'hero.description': ['We start with the everyday frustrations we experience,', 'and build services that make it easier to start', 'and keep doing what you love.'],
    services: 'The services we make', bandlog: 'Bandlog',
    'product.title': ['From your practice', 'to your band.'],
    'product.lead': ['Solo practice adds up,', 'and leads into your next rehearsal together.'],
    'product.description': 'Bandlog brings your practice log and your band’s activities together. Capture moments of practice, prepare songs and schedules, and send each other a quick reaction.',
    'product.site': 'Visit the Bandlog site (Korean)', 'store.label': 'Download the Bandlog app', 'store.appStore': 'Download on the', 'store.googlePlay': 'Get it on',
    'gallery.hint': 'Tap a screen to see more', 'gallery.label': 'Five Bandlog iPhone screens',
    'gallery.scroll': 'Swipe to explore', 'gallery.previous': 'Scroll to the previous screen', 'gallery.next': 'Scroll to the next screen',
    'feature.1.title': 'Build your practice log', 'feature.1.body': ['Save practice with photos and videos,', 'even before you join a band.'],
    'feature.2.title': 'Keep band prep in one place', 'feature.2.body': ['Check songs, ideas, schedules, and locations', 'together with your bandmates.'],
    'feature.3.title': 'A reaction instead of words', 'feature.3.body': ['React to your bandmates’ practice', 'and keep the feeling of playing together alive.'],
    'about.label': 'How NaroWorks works', 'about.title': ['We start', 'close to home.'],
    'about.lead': ['The friction we meet doing what we love.', 'The everyday moments we want to enjoy more.'],
    'about.description': 'We turn needs close to us into small, complete services, then help them grow so others who feel the same way can use them too.',
    'principle.1.title': 'Start close to home', 'principle.1.body': ['Work on problems we have experienced', 'or understand well.'],
    'principle.2.title': 'Make something small and complete', 'principle.2.body': ['Build one important experience well', 'before adding more features.'],
    'principle.3.title': 'Help people keep going', 'principle.3.body': ['Look for changes that help people keep doing', 'what they love, beyond time spent on a screen.'],
    'contact.label': 'Let’s talk', 'contact.title': ['Ways to keep doing', 'what you love.'],
    'company.name': 'Naroworks Inc.', 'company.otherName': '주식회사 나로웍스',
    'company.links': 'Company policies and notices', 'company.privacy': 'Privacy policy', 'company.notices': 'Public notices',
    'company.representative': 'Representative: Hyeonggi Park', 'company.registration': 'Korean business registration number: 482-88-03565',
    'company.address': 'Suite 1131, 130 Eutteum-ro, Deogyang-gu, Goyang-si, Gyeonggi-do, Republic of Korea',
    'viewer.label': 'Enlarged app screen', 'viewer.close': 'Close enlarged screen', 'viewer.previous': 'Previous screen', 'viewer.next': 'Next screen',
    captions: ['My practice and our band', 'Songs we pick together', 'Encouragement for each other', 'Rehearsal prep in one place', 'Practice connected through records'],
    imageAlts: ['Home screen showing personal practice records and joined bands', 'Screen for collecting songs and sharing ideas with bandmates', 'Screen for sending lighthearted emoji reactions to bandmates', 'Screen showing the next rehearsal’s schedule, location, and preparation', 'Screen for viewing practice photos and videos and sending reactions'],
    expand: 'Enlarge screen',
  },
};

// App Store 웹 주소는 나라 칸(/kr/ 등)이 있어야 컴퓨터 브라우저에서도 앱 페이지가 열립니다(2026-10-28 형기 님 확인).
// 언어마다 출시 나라 상점으로 잇습니다. 밴드로그는 한국·일본·대만 출시라 영어는 한국 상점을 영어 표시로 엽니다.
export const bandlogAppStores = {
  ko: 'https://apps.apple.com/kr/app/id6815118964',
  'ja-JP': 'https://apps.apple.com/jp/app/id6815118964',
  'zh-Hant-TW': 'https://apps.apple.com/tw/app/id6815118964',
  'en-US': 'https://apps.apple.com/kr/app/id6815118964?l=en',
};

export function applyLocale(locale) {
  const text = { ...copy[locale], ...Object.fromEntries(Object.entries(boxleCopy[locale]).filter(([key]) => key.startsWith('boxle.'))) };
  document.documentElement.lang = locale;
  document.title = text['meta.title'];
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const value = text[node.dataset.i18n];
    if (Array.isArray(value)) {
      node.replaceChildren(...value.flatMap((line, index) =>
        index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
    } else {
      node.textContent = value;
    }
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => {
    node.setAttribute('aria-label', text[node.dataset.i18nAria]);
  });
  const metadata = {
    'meta[name="description"]': 'meta.description',
    'meta[property="og:title"]': 'meta.title',
    'meta[property="og:description"]': 'meta.socialDescription',
    'meta[property="og:site_name"]': 'meta.siteName',
    'meta[property="og:image:alt"]': 'meta.imageAlt',
    'meta[name="twitter:title"]': 'meta.title',
    'meta[name="twitter:description"]': 'meta.socialDescription',
  };
  for (const [selector, key] of Object.entries(metadata)) document.querySelector(selector).content = text[key];
  document.querySelector('meta[property="og:locale"]').content =
    {ko: 'ko_KR', 'ja-JP': 'ja_JP', 'zh-Hant-TW': 'zh_TW', 'en-US': 'en_US'}[locale];
  const scenes = ['01-home', '02-song-bundle', '03-encouragement', '04-hapju', '05-practice-reactions'];
  const directory = locale === 'ko' ? 'assets/bandlog' : `assets/bandlog/${locale}`;
  const version = locale === 'ko' ? '20261012-r2' : locale === 'ja-JP' ? '20261012-bandneko-r2' : '20261012-localized-r1';
  const japanese = locale === 'ja-JP';
  document.querySelector('.product-symbol').src = japanese ? 'assets/bandlog/ja-JP/symbol.webp?v=20261012-bandneko-r2' : 'assets/bandlog/symbol.webp';
  document.querySelector('.product-name').hidden = japanese;
  document.querySelector('.product-wordmark').hidden = !japanese;
  document.querySelectorAll('#products .gallery-shot').forEach((shot, index) => {
    const link = shot.querySelector('.shot-link');
    const image = link.querySelector('img');
    const path = `${directory}/iphone-${scenes[index]}`;
    link.href = `${path}-880.webp?v=${version}`;
    link.dataset.caption = text.captions[index];
    link.setAttribute('aria-label', `${text.captions[index]} · ${text.expand}`);
    image.src = link.href;
    image.srcset = `${path}-440.webp?v=${version} 440w, ${path}-880.webp?v=${version} 880w`;
    image.alt = text.imageAlts[index];
    shot.querySelector('.shot-caption').textContent = text.captions[index];
  });
  document.querySelector('#products .store-badge[href^="https://apps.apple.com/"]').href = bandlogAppStores[locale];
  const boxle = boxleCopy[locale];
  const assets = boxleLocales[locale];
  const product = document.querySelector('#boxle');
  product.querySelector('.store-badge[href^="https://apps.apple.com/"]').href = assets.appStore;
  const siteLink = product.querySelector('.product-site');
  siteLink.href = assets.url;
  siteLink.lang = assets.language;
  product.querySelectorAll('[data-i18n="boxle.name"]').forEach(node => { node.lang = assets.language; });
  product.querySelectorAll('.gallery-shot').forEach((shot, index) => {
    const link = shot.querySelector('.shot-link');
    const image = link.querySelector('img');
    const path = 'assets/boxle/' + assets.asset + '/' + String(index + 1).padStart(2, '0');
    link.href = path + '-880.webp';
    link.dataset.caption = boxle.captions[index];
    link.setAttribute('aria-label', boxle.captions[index] + ' · ' + text.expand);
    image.src = link.href;
    image.srcset = path + '-440.webp 440w, ' + path + '-880.webp 880w';
    image.alt = boxle.imageAlts[index];
    shot.querySelector('.shot-caption').textContent = boxle.captions[index];
  });
  document.querySelector('#language-select').value = locale;
  document.querySelector('.language-picker').hidden = false;
}

if (typeof document !== 'undefined') {
  let saved;
  try { saved = localStorage.getItem(storageKey); } catch { /* 저장이 막혀도 언어 선택은 동작합니다. */ }
  applyLocale(chooseLocale(saved, navigator.languages?.length ? navigator.languages : [navigator.language]));
  document.querySelector('#language-select').addEventListener('change', event => {
    const locale = event.target.value;
    if (!supportedLocales.includes(locale)) return;
    applyLocale(locale);
    try { localStorage.setItem(storageKey, locale); } catch { /* 현재 방문의 선택은 유지합니다. */ }
  });
}
