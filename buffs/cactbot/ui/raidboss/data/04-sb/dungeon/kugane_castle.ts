import Conditions from '../../../../../resources/conditions';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  id: 'KuganeCastle',
  zoneId: ZoneId.KuganeCastle,
  timelineFile: 'kugane_castle.txt',
  timelineTriggers: [
    {
      id: 'Kugane Castle Issen',
      regex: /Issen/,
      beforeSeconds: 4,
      response: Responses.tankCleave(),
    },
    {
      id: 'Kugane Castle Wakizashi',
      regex: /Wakizashi/,
      beforeSeconds: 4,
      response: Responses.tankBuster(),
    },
  ],
  triggers: [
    {
      id: 'Kugane Castle Kenki Release',
      type: 'StartsUsing',
      netRegex: { id: '1E93', source: 'Zuiko-Maru', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Kugane Castle Helm Crack',
      type: 'HeadMarker',
      netRegex: { id: '003E' },
      response: Responses.stackMarkerOn(),
    },
    {
      // The tether has no actual skill name,
      // but the Harakiri Koshu uses Cordage on the tether target after about 4 seconds.
      id: 'Kugane Castle Cordage',
      type: 'Tether',
      netRegex: { id: '0011' },
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Harakiri tether on YOU',
          de: 'Harakiri Verbindung auf DIR',
          fr: 'Lien Harakiri sur VOUS',
          ja: '自分にはらきり',
          cn: '切腹点名',
          ko: '자폭 대상자',
        },
      },
    },
    {
      id: 'Kugane Castle Clockwork Raiton',
      type: 'HeadMarker',
      netRegex: { id: '005F' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Kugane Castle Gratuity',
      type: 'Ability',
      netRegex: { id: '1EAE', source: 'Kageyama', capture: false },
      suppressSeconds: 15, // No point in notifying repeatedly
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Grab gold piles',
          de: 'Sammle die Goldhaufen',
          fr: 'Prenez les pièces d\'or',
          ja: '大判小判を拾う',
          cn: '捡金币',
          ko: '금화 은화 줍기',
        },
      },
    },
    {
      id: 'Kugane Castle Dragons Lair',
      type: 'Ability',
      netRegex: { id: '1EA6', source: 'Yojimbo', capture: false },
      response: Responses.killAdds(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Daigoro': 'Daigoro',
        'Dojun-Maru': 'Dojun-Maru',
        'Elite Onmitsu': 'Joi Onmitsu',
        'Kageyama': 'Kageyama',
        'The Budokan Training Grounds': 'Budokan',
        'The Keisen Garden': 'Keisen-Garten',
        'The Noh Theater': 'Noh-Theater',
        'Yojimbo': 'Yojinbo',
        'Zuiko-Maru': 'Zuiko-Maru',
      },
      'replaceText': {
        'Clearout': 'Kreisfeger',
        'Clockwork Medium': 'Mechanik-Medium',
        'Clockwork Raiton': 'Mechanik-Raiton',
        'Dragon\'s Lair': 'Drachenhort',
        'Dragonfire': 'Drachenfeuer',
        'Dragonstrike': 'Drachenschlag',
        'Fragility': 'Zerbrechlichkeit',
        'Gratuity': 'Zuwendung',
        'Harakiri': 'Harakiri',
        'Helm Crack': 'Helmspalter',
        'Iai-Giri': 'Iai-giri',
        'Inoshikacho': 'Ino-shika-cho',
        'Issen': 'Issen',
        'Juji Shuriken': 'Juji Shuriken',
        'Kenki Release': 'Entfesseltes Schwert',
        'Metta-Giri': 'Metta-giri',
        'Tatami-Gaeshi': 'Tatami-gaeshi',
        'Wakizashi': 'Wakizashi',
        'Zanmato': 'Zanmato',
        'Zeni Masshigura': 'Zeni Masshigura',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Daigoro': 'Daigoro',
        'Dojun-Maru': 'Dôjun Maru',
        'Elite Onmitsu': 'onmitsu joi',
        'Kageyama': 'Kageyama',
        'The Budokan Training Grounds': 'Budokan',
        'The Keisen Garden': 'Keisen-en',
        'The Noh Theater': 'Théâtre de nô',
        'Yojimbo': 'Yojimbo',
        'Zuiko-Maru': 'Zuiko Maru',
      },
      'replaceText': {
        '\\?': ' ?',
        'Clearout': 'Fauchage',
        'Clockwork Medium': 'Kuchiyose mécanique',
        'Clockwork Raiton': 'Raiton mécanique',
        'Dragon\'s Lair': 'Fléau du dragon',
        'Dragonfire': 'Feu du dragon',
        'Dragonstrike': 'Frappe du dragon',
        'Fragility': 'Fragilité',
        'Gratuity': 'Gracieuseté',
        'Harakiri': 'Hara-kiri',
        'Helm Crack': 'Fendeur de casque',
        'Iai-Giri': 'Iai-giri',
        'Inoshikacho': 'Ino-shika-cho',
        'Issen': 'Issen',
        'Juji Shuriken': 'Juji Shuriken',
        'Kenki Release': 'Décharge Kenki',
        'Metta-Giri': 'Metta-giri',
        'Tatami-Gaeshi': 'Tatami-gaeshi',
        'Wakizashi': 'Wakizashi',
        'Zanmato': 'Zanmato',
        'Zeni Masshigura': 'Zeni Masshigura',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Daigoro': 'ダイゴロウ',
        'Dojun-Maru': 'ドウジュン丸',
        'Elite Onmitsu': 'ジョウ・オンミツ',
        'Kageyama': 'カゲヤマ',
        'The Budokan Training Grounds': '天守武道館',
        'The Keisen Garden': '渓泉園',
        'The Noh Theater': '天守能楽堂',
        'Yojimbo': 'ヨウジンボウ',
        'Zuiko-Maru': 'ズイコウ丸',
      },
      'replaceText': {
        'Clearout': 'なぎ払い',
        'Clockwork Medium': 'からくり口寄せ',
        'Clockwork Raiton': 'からくり雷遁',
        'Dragon\'s Lair': '雲蒸竜変',
        'Dragonfire': '暴竜',
        'Dragonstrike': '画竜点睛',
        'Fragility': '儚き命',
        'Gratuity': '心づけ',
        'Harakiri': '腹切り',
        'Helm Crack': '兜割り',
        'Iai-Giri': '居合斬り',
        'Inoshikacho': '猪鹿蝶',
        'Issen': '一閃',
        'Juji Shuriken': '十字手裏剣',
        'Kenki Release': '剣気解放',
        'Metta-Giri': '居合滅多斬り',
        'Tatami-Gaeshi': '畳返しの術',
        'Wakizashi': '脇差',
        'Zanmato': '斬魔刀',
        'Zeni Masshigura': '銭まっしぐら',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Daigoro': '大五郎',
        'Dojun-Maru': '道顺丸',
        'Elite Onmitsu': '攘夷隐密',
        'Kageyama': '景山',
        'The Budokan Training Grounds': '天守武道馆',
        'The Keisen Garden': '溪泉园',
        'The Noh Theater': '天守能乐堂',
        'Yojimbo': '保镖',
        'Zuiko-Maru': '瑞光丸',
      },
      'replaceText': {
        'Clearout': '横扫',
        'Clockwork Medium': '机关召集',
        'Clockwork Raiton': '机关雷遁',
        'Dragon\'s Lair': '云蒸龙变',
        'Dragonfire': '龙火',
        'Dragonstrike': '画龙点睛',
        'Fragility': '人生短暂',
        'Gratuity': '赏钱',
        'Harakiri': '切腹',
        'Helm Crack': '破盔',
        'Iai-Giri': '居合斩',
        'Inoshikacho': '猪鹿蝶',
        'Issen': '一闪',
        'Juji Shuriken': '十字手里剑',
        'Kenki Release': '剑气解放',
        'Metta-Giri': '居合多段斩',
        'Tatami-Gaeshi': '掀地板之术',
        'Wakizashi': '腰刀',
        'Zanmato': '斩魔刀',
        'Zeni Masshigura': '见钱眼开',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Daigoro': '다이고로',
        'Dojun-Maru': '도우준마루',
        'Elite Onmitsu': '상급 밀정',
        'Kageyama': '카게야마',
        'The Budokan Training Grounds': '천수 무도관',
        'The Keisen Garden': '케이센 정원',
        'The Noh Theater': '가면극장',
        'Yojimbo': '요우진보',
        'Zuiko-Maru': '즈이코우마루',
      },
      'replaceText': {
        'Clearout': '휩쓸기',
        'Clockwork Medium': '꼭두각시 소환',
        'Clockwork Raiton': '꼭두각시 뇌둔술',
        'Dragon\'s Lair': '운증용변',
        'Dragonfire': '폭룡',
        'Dragonstrike': '화룡점정',
        'Fragility': '덧없는 목숨',
        'Gratuity': '사례금',
        'Harakiri': '공멸',
        'Helm Crack': '투구 가르기',
        'Iai-Giri': '거합 베기',
        'Inoshikacho': '멧돼지사슴나비',
        'Issen': '일섬',
        'Juji Shuriken': '십자수리검',
        'Kenki Release': '검기 해방',
        'Metta-Giri': '거합 마구베기',
        'Tatami-Gaeshi': '장판 뒤집기',
        'Wakizashi': '소도',
        'Zanmato': '참마도',
        'Zeni Masshigura': '엽전 돌진',
      },
    },
  ],
};

export default triggerSet;
