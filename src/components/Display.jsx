function Display({inputarr}){
    return(
        <>
        {
            inputarr.map((info,ind)=>{
              return(
                <>
                <tr key={ind}  style={{ color:'black',fontWeight:'bold'}}><td>{info.name}</td></tr>
                <tr key={ind}><td>{info.comments}</td></tr>
                </>
              )
            }
    )
          }
          </>
    )
}
export default Display;