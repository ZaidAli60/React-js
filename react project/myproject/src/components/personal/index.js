

 function PersonalInformation() {
    return (
      <div>
           <h1>Personal Information</h1>
           
   <form action="">
       <p>NAME:
           <input type="text" name="username" size="30"
           maxlength="30" placeholder="Full Name"/>  </p>
           <p>FATHER'S NAME:
               <input type="text" name="username" size="30"
               maxlength="30" placeholder="Father Name"/>  </p>
               <p>CNIC: :
                   <input type="text" name="username" size="30"
                   maxlength="30" placeholder="Father Name"/>  </p> 
                   
               <p>FAVORITE COLOR: 
               <input type="text" name="username" size="15"
               maxlength="30" placeholder="Color "/>  </p>


               <p>D-O-B: 
                   <input type="date" name="username" size="15"
                   maxlength="30" placeholder="dd/mm/yyyy "/>  </p>

                   <p>E-mail:
                   <input type="email" name="email" placeholder="Type your e-mail"/>
               </p>


  
               </form>
               <hr/>
      </div>
    );
}

export default PersonalInformation;