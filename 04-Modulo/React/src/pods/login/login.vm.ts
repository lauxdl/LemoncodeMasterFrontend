export interface LoginFormData {
    username: string;
    password: string;
}
  
export const createEmptyFormData = (): LoginFormData => ({
    username: "",
    password: "",
});