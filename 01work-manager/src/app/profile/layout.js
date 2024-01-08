//custom layout for profile page which will again add it's own header and footer for all its childrens 

export default function ProfileLayout({children}) {
  return (
    <div>
      <h1>This is profile header</h1>
      {children}
      <h1>This is profile footer</h1>
    </div>
  );
}

//Output(http://localhost:3000/profile/user)
/*
This is header
This is profile header
This is normal user Profile
This is profile footer
This is footer
*/

//Output(http://localhost:3000/profile/admin)
/*
This is header
This is profile header
This is AdminProfile
This is profile footer
This is footer
*/