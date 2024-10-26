class Group{
  import { generateSix } from './IDgenerate.js';
  constructor(name)
  {
    this.name = name;
    this.id = generateSix();
    this.members = [];
  }
}