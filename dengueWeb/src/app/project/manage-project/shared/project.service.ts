import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Project} from './project.model';

@Injectable()
export class ProjectService {
  projectList: AngularFireList<any>;
  selectedUser: Project = new Project();
  constructor(private firebase:AngularFireDatabase) { }

  getData(){
    this.projectList = this.firebase.list('project');
    return this.projectList;
  }

  insertUser(project : Project){
    console.log("project ",project)
    this.projectList.push({
      ProjectName :project.ProjectName,
      ProjectOwner :project.ProjectOwner
    });
    this.getData();
   }

   updateUser(project : Project){
     this.projectList.update(project.$key,{
      ProjectName :project.ProjectName,
      ProjectOwner :project.ProjectOwner
     });
   }

   deleteUser($key:string){
     this.projectList.remove($key);
   }


}
