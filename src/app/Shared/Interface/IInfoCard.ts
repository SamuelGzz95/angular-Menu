export class InfoCard {
  id: number;
  title: string;
  subtitle: string;
  textContent: string;
  listContent: ListContent[];
  primaryBtn: BtnInfo;
  secondaryBtn: BtnInfo;
}

export class ListContent {
  img: string;
  title: string;
  text: string;
  tertiaryBtn: BtnInfo;
}

export class BtnInfo {
  icon: string;
  text: string;
  toolTip: string;
}
