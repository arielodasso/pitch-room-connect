export type Project = { id:string; name:string; type:string; country:string; stage:string; fundingNeed:string; status:string; nextAction:string; description:string; website:string; team:string; useOfFunds:string; demo?:boolean };
export type Opportunity = { id:string; name:string; region:string; type:string; category:string; funding:string; deadline:string; status:string; eligibility:string; description:string; requirements:string; website:string; matched:number };
export type Investor = { name:string; organization:string; country:string; type:string; focus:string; ticket:string; stage:string; lastContact:string; nextAction:string };
export type Application = { id:string; project:string; opportunity:string; deadline:string; owner:string; status:string };
export type Task = { id:string; task:string; project:string; assignee:string; priority:string; due:string; status:string };
export type DocumentItem = { name:string; project:string; category:string; updated:string; size:string };
export type Note = { author:string; date:string; content:string; tags:string[] };
