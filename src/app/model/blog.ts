import {Status} from "./status";

export interface Blog {
  id?:string,
  title?:string,
  content?:string,
  time?:string,
  status?:Status
}
