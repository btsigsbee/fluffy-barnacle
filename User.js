export default class User {
    constructor(userId, firstName, lastName, phoneNumber, introMSGSnt, Gender){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.introMSGSnt = introMSGSnt;
        this.gender = Gender;

    }
    isIntroMSGSnt(){
        if (this.introMSGSnt != true){
            return false;
        }
        else { return true;}
    }
}