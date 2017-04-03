import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let user = {
        name:"aaron dwi",
        email:"m26415026@john.petra.ac.id",
        phone:"0313892467",
        joindate:"02-03-2017",
        education:[
            'bachelor of comp',
            'Information system engineer'
        ]
    }
    return {user};
  }
}