import { generateID } from './IDgenerate.js';
class Group{
  //グループの定義
  Group(name)
  {
    this.name = name;
    this.id = generateID();
    this.members = [];
  }
  //メンバーの追加
  addMember(member)
  {
    this.members.push(member);
  }
//グループ作成
  createGroup(name)
  {
    const _group = new Group(name);
    this.this.groups[group.id] = group;
    return group.id;
  }
//グループ参加
  joinGroup(groupId,member){
    if(this.groups[groupId])
    {
      this.groups[groupId].addMember(member);
      return true;
    }else{
      return false;
    }
  }
//グループIDの出力
  getGroup(groupId){
    return this.groups[groupId];
  }
}