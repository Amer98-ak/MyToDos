export default class User {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    CreatedOn: Date;

    constructor(params: { Id: number; FirstName: string; LastName: string; Email: string; Password: string; CreatedOn: Date; })
    {
        this.Id=params.Id;
        this.FirstName=params.FirstName;
        this.LastName=params.LastName;
        this.Email=params.Email;
        this.Password=params.Password;
        this.CreatedOn=params.CreatedOn;
    }
  }