import conf from "../conf/conf.js";
import { Client,Account,ID } from "appwrite";

export class AuthService {
  client =new Client();
  account;

  constructor(){
      this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
      this.account=new Account(this.client);
  }

  // signUp feature
  async createAccount({email,password,name}){

    try{
           const userAccount=await this.account.create(ID.unique(),email,password,name);

           if(userAccount){
               // call another method
               return  this.login({email,password});
           }
           else{
                return userAccount;
           }
    }
    catch(error){
        throw error;
    }

  }

  // login feature
  async login({email,password}){

      try{
            // it may be problem
            return await this.account.createEmailSession(email,password);
      }
      catch(error){
        throw error;
      }
  }

  // when user open application, it is used to detect user login or not
  async getCurrentUser(){
      try{
           return await this.account.get();
      }
      catch(error){
            console.log("AppWrite service :: getCurrentUser :: Error",error);
      }
      return null;
  }

  // logout feature

  async logout(){

      try{
           await this.account.deleteSessions();
      }
      catch(error){
        console.log("AppWrite service :: Logout :: Error",error);
      }
  }
}

const authService=new AuthService();
export default authService