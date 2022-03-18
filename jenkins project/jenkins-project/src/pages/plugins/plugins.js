import Footer from "../../commonComponent/footer/footer";
import plugins from "../../assets/plugins.webp";
import "./plugins.css"
function Plugins() {
    return (
        <div>
            <div className="pluginsHeader ">
                <div className="container">
                    <div className="displayItems py-5">
                        <div className="mt-4">
                            <img src={plugins} alt="plugins" />
                        </div>
                        <div >
                            <h1 className="text-white">Plugins Index</h1>
                            <p  className="text-white">Discover the 1800+ community contributed Jenkins plugins to support building, deploying and automating any project.</p>
                            <div className="inputBox">
                                <button className=" text-white bg-danger">Brower</button>
                                <input type="text" placeholder="Find plugins"/>
                                <button className=" text-white bg-danger">sereach</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jenkinsInfor">
                <div className="container">
                    <div className="displayPlugins">
                        <div className="my-5 col-lg-3 col-md-8 col-sm-12">
                            <h5>Browse categories</h5>
                            <div>Platforms</div>
                            <div>User interface</div>
                            <div>Administration</div>
                            <div>Build management</div>
                            <div>Source Code Management</div>
                        </div>

                        <div className="my-5 col-lg-3 col-md-8 col-sm-12">
                            <h5>Browse categories</h5>
                            <div>Platforms</div>
                            <div>User interface</div>
                            <div>Administration</div>
                            <div>Build management</div>
                            <div>Source Code Management</div>
                        </div>
                        
                        <div className="my-5 col-lg-3 col-md-8 col-sm-12">
                            <h5>Browse categories</h5>
                            <div>Platforms</div>
                            <div>User interface</div>
                            <div>Administration</div>
                            <div>Build management</div>
                            <div>Source Code Management</div>
                        </div>
                        
                        <div className="my-5 col-lg-3 col-md-8 col-sm-12">
                            <h5>Browse categories</h5>
                            <div>Platforms</div>
                            <div>User interface</div>
                            <div>Administration</div>
                            <div>Build management</div>
                            <div>Source Code Management</div>
                        </div>
                        
                        
                      
                  
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Plugins;