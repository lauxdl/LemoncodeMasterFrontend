import { users } from "./../../../mock-data/users";
import { LoginFormData } from "./login.vm";

export const doLogin = (username: string, password: string) => {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if(isVerifiedUser(username,password)){
            resolve(true);
        } else { 
            reject (false);
        }
      }, 800);
    });

    return promise;
  };

const isVerifiedUser = ( username:string, password:string ) : LoginFormData => {
    return users.find((user) => user.username === username && user.password === password);
};
