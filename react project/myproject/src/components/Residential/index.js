
import "./residential.css"
function Resdential() {
    return(
        <div className="residentail">
            <form action="">
                
                    <h1>Residential Information</h1>

                    <p>CITYNAME:
                        <input type="text" name="username" size="30"
                        maxlength="30" placeholder="City name"/>  </p>


                        <label>PROVINCE:</label>
                        <select >
                          <option value="punjab">punjab</option>
                          <option value="Sindh">Sindh</option>
                          <option value="Balochistan">Balochistan</option>
                          <option value="Pakhtunkhwa">Pakhtunkhwa</option>
                        </select>
                        <br/>
                        <br/>
                        

                        <label for="">CITY:</label>
                        <select>
                          <option value="pakistan">pakistan</option>
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                          <option value="Pakistan">Pakistan</option>
                        </select>    
                        
                        <p>GENDER:
                            <br/>
                            <input type="checkbox" name="service"
                            value="MALE" checked="checked" />MALE
                            <input type="checkbox" name="service"
                            value="FEMALE" /> FEMALE
                            <input type="checkbox" name="service"
                            value="OTHER" /> OTHER
                           </p>

                        
                           </form>  
                        
                
        </div>
    )
}

export default Resdential; 