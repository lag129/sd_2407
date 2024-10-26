import { generateID } from './IDgenerate.js';
class Group{
  Group(name)
  {
    this.name = name;
    this.id = generateID();
    this.members = [];
  }

  addMember(member)
  {
    this.members.push(member);
  }

  createGroup(name)
  {
    const _group = new Group(name);
    this.this.groups[group.id] = group;
    return group.id;
  }

  joinGroup(groupId,member){
    if(this.groups[groupId])
    {
      this.groups[groupId].addMember(member);
      return true;
    }else{
      return false;
    }
  }

  getGroup(groupId){
    return this.groups[groupId];
  }
}