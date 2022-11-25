function Plus(props){
  
  function handle(e)
      {
        //console.log(props.section,props.handle)
        let s={}
          if (e.target.id=='plus'){
             s={name:props.section, value:1}
             props.handle(s )
             return
          }
         props.handle({name:props.section, value:-1} )
         
      } 
     
return(<>
   <img src={`${props.section}_minus.png` } id="minus" onClick={((e)=>handle(e))}></img>
   <img src={`${props.section}_plus.png`} id="plus" onClick={((e)=>handle(e))}></img>
  
  </>

  )

}

function Data(props){
  return (<div>
      Header:  {props.data.header}
      </div>)
}  


function Footer(props){
  return(<>
    <footer>
      <div className='section'>Footer:{props.data.footer}
      <div>
    <img src={'./header_plus.png'} id='plus' onClick={()=>(props.handle({name:'footer',value:1}))} />
    <img src={'./header_minus.png'} id='minus' onClick={()=>(props.handle({name:'footer',value:-1}))} />
  </div>
      </div>
    </footer>
  </>)
}

function Article(props){
  return(
    <>
    <article className="section">Article: {props.data.article}
    <div>
    <img src={'./header_plus.png'} id='plus' onClick={()=>(props.handle({name:'article',value:1}))} />
    <img src={'./header_minus.png'} id='minus' onClick={()=>(props.handle({name:'left',value:-1}))} />
  </div>
    </article>
    </>
  )

}

function Left(props){
  return(<>
  <aside className="section"> Left:{props.data.left}
  <div>
    <img src={'./header_plus.png'} id='plus' onClick={()=>(props.handle({name:'left',value:1}))} />
    <img src={'./header_minus.png'} id='minus' onClick={()=>(props.handle({name:'left',value:-1}))} />
  </div>
  </aside>
  {/* <Data data={props.data}></Data> */}
  
  </>)
}
function Right(props){
  return(<>
  <aside className="section"> Right:{props.data.right}
  <div>
    <img src={'./header_plus.png'} id='plus' onClick={()=>(props.handle({name:'right',value:1}))} />
    <img src={'./header_minus.png'} id='minus' onClick={()=>(props.handle({name:'right',value:-1}))} />
  </div>
  </aside>
  </>)
}

function App(){

  function Header(props){
    return (<>
        <header>
         <div className="section" >Header: {props.data.header}
         <div>
      <img src={'./header_plus.png'} id='plus' onClick={()=>(props.handle({name:'header',value:1}))} />
      <img src={'./header_minus.png'} id='minus' onClick={()=>(props.handle({name:'header',value:-1}))} />
    </div>
         </div>
         {/* <Data data={props.data}></Data> */}
         
         </header>
    </>);
  }




  const [data,setData]=React.useState({header:0,footer:0,article:0,left:0,right:0})
  function handle(section){
    const value  = data[section.name] + section.value;
    const object = {[section.name]:value};
    setData({...data, ...object});
  }
  console.log(data)
    return(
        <>
        <div className="grid">
         <Header handle={handle} data={data}></Header>
         <Left handle={handle} data={data}></Left>
         <Article handle={handle} data={data}></Article>
         <Right handle={handle} data={data}></Right>
         <Footer handle={handle} data={data}></Footer>
        </div>
        </>
    )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);