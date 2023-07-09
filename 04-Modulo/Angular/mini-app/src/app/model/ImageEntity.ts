// export interface ImageEntity {
//   success : boolean;
//   message : string;
//   offset:   number;
//   limit:    number;
//   photos:   PhotoEntity[];
// }

export interface ImageEntity {
  description:  string;
  url:          string;
  title:        string;
  id:           number;
  user:         number;
}
