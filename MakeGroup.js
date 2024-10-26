import { generateSix } from './IDgenerate.js';
class Group{
  Group(name)
  {
    this.name = name;
    this.id = generateSix();
    this.members = [];
  }

  
}