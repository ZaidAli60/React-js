

function Submitform() {
    return(   
        <div>
             <form action="">
                    <h1>Academic Information</h1>
                      QUALIFICATION:
                        <br/>
                        <br/>
                        <input type="checkbox" name="service"
                        value="Matric Completed" />Matric Completed
                        <br/>
                        <input type="checkbox" name="service"
                        value="Inter Completed" /> Inter Completed
                        
                        CLASS:
                            <input type="text" name="username" size="30"
                            maxlength="30" placeholder="Grade"/>  
                       
                       <p>Name of Old School:
                        <input type="text" name="username" size="30"
                        maxlength="30" placeholder="ABC high school"/>  </p>
                   
                   <hr/>
                <form action="">
                   
                    <input type="reset" value="Reset"/>
                    <input type="submit" value="Submit"/>
                </form>
                </form>
        </div>
     );
}

export default Submitform;