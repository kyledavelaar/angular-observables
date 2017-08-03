import { Subject } from 'rxjs/Subject';

//SUBJECT IS OBSERVERVABLE AND OBSERVER AT SAME TIME
export class UsersService {
  userActivated = new Subject();
}