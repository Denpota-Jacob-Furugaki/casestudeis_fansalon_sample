export type CaseStudy = {
  slug: string;
  salonName: string;
  ownerName: string;
  ownerTitle: string;
  avatarImage: string;
  heroImage: string;
  salonUrl: string;
  category: string;
  startedYear: string;
  price: string;
  highlightKeywords: { label: string; description: string }[];
  trigger: string;
  triggerDetail: string;
  goodPoints: { keyword: string; detail: string }[];
  ownerBio: string;
  quote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jaguar",
    salonName: "ジャガー横田のファンサロン",
    ownerName: "ジャガー横田",
    ownerTitle: "プロレスラー / タレント",
    avatarImage: "/images/jaguar/avatar.png",
    heroImage: "/images/jaguar/mv.png",
    salonUrl: "https://www.fan.salon/jaguar/",
    category: "エンタメ・スポーツ",
    startedYear: "2023年",
    price: "¥880/月",
    highlightKeywords: [
      {
        label: "元気",
        description:
          "ジャガーさんからの元気が出るメッセージをブログや動画で定期配信",
      },
      {
        label: "舞台裏",
        description:
          "プロレスやテレビ撮影、YouTube制作の裏側をメンバー限定で公開",
      },
      {
        label: "つながり",
        description:
          "ジャガーさんとメンバーが直接やりとりできる限定チャット空間",
      },
    ],
    trigger:
      "ファンの皆さんともっと近い距離で、日々の活動や思いを直接届けたかった",
    triggerDetail:
      "長年プロレスやタレント活動を通じてファンとの交流を大切にしてきたジャガー横田さん。SNSだけでは伝えきれない日常の想いや、活動の舞台裏をファンと共有したいという思いから、Fan.Salonでオンラインファンサロンを開設。LINEベースで誰でも気軽に参加でき、ファンとの距離をさらに縮めることに成功しています。",
    goodPoints: [
      {
        keyword: "手軽さ",
        detail:
          "LINEアプリ上で完結するため、新しいアプリのダウンロード不要。ファン層の幅広い年齢にも対応。",
      },
      {
        keyword: "ファンの声",
        detail:
          "メンバーからの応援メッセージが直接届くので、モチベーションにつながっている。",
      },
      {
        keyword: "運営サポート",
        detail:
          "スタッフのクボさんがサロン運営を担当し、コンテンツ配信に集中できる体制を構築。",
      },
    ],
    ownerBio:
      "女子プロレスラー・タレント。1961年東京都生まれ。1977年にプロレスデビュー後、女子プロレス界のトップ選手として活躍。引退後もタレント・コメンテーターとして幅広くメディアに出演。YouTubeチャンネル「ジャガーさんち」も人気を博す。",
    quote:
      "ファンの皆さんと毎日つながれるのがサロンの一番の魅力。元気をもらえるのは私の方です！",
  },
  {
    slug: "takenakashunbroker",
    salonName: "竹中俊オンラインコミュニティ broker village",
    ownerName: "竹中 俊",
    ownerTitle: "社会活動家 / 孤児院運営者",
    avatarImage: "/images/takenaka/avatar.jpg",
    heroImage: "/images/takenaka/mv.jpg",
    salonUrl: "https://www.fan.salon/takenakashunbroker/",
    category: "社会貢献・コミュニティ",
    startedYear: "2022年",
    price: "¥550〜/月",
    highlightKeywords: [
      {
        label: "支援",
        description:
          "会費の一部がネパールと日本の子どもたちの福祉活動に直接還元",
      },
      {
        label: "共有",
        description:
          "限定動画やブログで活動の裏側、子どもたちの日常をリアルに発信",
      },
      {
        label: "参加",
        description:
          "キャンプや忘年会、清掃活動などオフラインイベントも全国で開催",
      },
    ],
    trigger:
      "活動を応援してくれる仲間と、もっと深くつながれる場所を作りたかった",
    triggerDetail:
      "2016年からネパールで孤児院を運営し、35人の子どもたちの父親代わりとして活動する竹中俊さん。年間350回以上の講演を行いながら世界中を飛び回る中で、活動を継続的に支えてくれるコミュニティの必要性を感じ、Fan.Salonでオンラインコミュニティを開設。メンバーの会費が直接支援活動に繋がる仕組みを構築しました。",
    goodPoints: [
      {
        keyword: "透明性",
        detail:
          "会費がどのように活動に活かされているか、日々の活動レポートを通じて可視化。",
      },
      {
        keyword: "柔軟な料金",
        detail:
          "Buddy A（¥550）〜Buddy C（¥3,300）まで3段階の料金設定。サービス内容は同一で、差額は寄付額に反映。",
      },
      {
        keyword: "イベント",
        detail:
          "年次キャンプや忘年会、清掃活動など全国でオフラインイベントを開催し、リアルな交流を実現。",
      },
    ],
    ownerBio:
      "社会活動家。2016年よりネパールで孤児院を運営し、35人の子どもたちの支援活動に従事。年間350回以上の講演を世界中で実施。国内でも子ども食堂や災害復興支援、環境保全活動など幅広い社会貢献活動を展開。",
    quote:
      "一人の支援には限界がある。でもコミュニティなら、みんなの力で子どもたちの未来を変えられる。",
  },
  {
    slug: "gokigenyosaori",
    salonName: "SAORIのGOKIGEN SALON",
    ownerName: "SAORI",
    ownerTitle: "ファッションクリエイター / Maison Echelleデザイナー",
    avatarImage: "/images/saori/avatar.png",
    heroImage: "/images/saori/mv.png",
    salonUrl: "https://www.fan.salon/gokigenyosaori/",
    category: "ファッション・ビューティー",
    startedYear: "2023年",
    price: "¥550〜/月",
    highlightKeywords: [
      {
        label: "最新",
        description:
          "新商品のデザイン段階からの先行公開、限定アイテムの先行購入権",
      },
      {
        label: "交流",
        description:
          "ファッションやビューティーについて語り合えるLINEグループ",
      },
      {
        label: "特典",
        description:
          "月4回のライブ配信、毎月¥500クーポン、サンプルセール優先招待",
      },
    ],
    trigger:
      "ファンの皆さんとファッションの楽しさをもっと深く共有したかった",
    triggerDetail:
      "1992年東京生まれのファッションクリエイター・SAORI。ラグジュアリーブランドでの販売経験を経て、2019年にYouTubeチャンネルを開設。自身のブランド「Maison Echelle」を立ち上げ、サステナブルなファッションを提唱する中で、より深いファンコミュニティの場としてFan.Salonを選択。ファッションの裏側を共有しながら、メンバーと共にブランドを育てるスタイルが支持されています。",
    goodPoints: [
      {
        keyword: "ブランド連携",
        detail:
          "自身のブランドMaison Echelleの新商品情報をデザイン段階から先行公開。メンバーの声を商品開発に反映。",
      },
      {
        keyword: "コンテンツ充実",
        detail:
          "月4回のライブ配信、ラジオ配信（Q&A形式）、限定ブログなど多彩なコンテンツを展開。",
      },
      {
        keyword: "お得感",
        detail:
          "Echelleサロン（¥1,100/月）ではサンプルセール優先招待、毎月¥500クーポンなど実質的な特典も充実。",
      },
    ],
    ownerBio:
      "ファッションクリエイター。1992年東京都生まれ。ラグジュアリーブランドでの販売職を経て、2019年にYouTubeチャンネルを開設。自身のブランド「Maison Echelle」のディレクター兼デザイナーとして、サステナブルで心のこもったファッションデザインを追求。",
    quote:
      "サロンのメンバーと一緒にブランドを作り上げていく感覚。一方通行じゃないのが楽しい！",
  },
];
