export function getExpertAvatar(name: string = '李教授'): string {
  // 使用 DiceBear 服务生成头像
  // https://www.dicebear.com/playground
  const seed = encodeURIComponent(name);
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4&accessories=kurt,prescription02,round&top=shortHair,longHair&facialHair=beardMedium&clothingGraphic=skull&eyes=happy,side&eyebrows=defaultNatural,raisedExcited&mouth=smile,twinkle&skin=light,pale`;
} 