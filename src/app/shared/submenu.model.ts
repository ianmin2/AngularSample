
export class subMenuItem {

  constructor(title ,target = "#",custom = "",isolated = false)
  {
    this.title = title,
    this.targetUrl = target;
    this.customClass = custom;
    this.isolated = isolated;
  }
  customClass: string;
  targetUrl:string ;
  title: string;
  isolated:boolean;
}
