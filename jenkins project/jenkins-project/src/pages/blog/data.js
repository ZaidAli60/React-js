

function Data({item}) {
    return (
        <div>
           
            <h5 className="text-primary">{item.heading}</h5>
            <p className="description">{item.description}</p>
            <p className="text-danger">{item.para}</p>
        </div>
    )
}
export default Data;