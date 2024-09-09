import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { url } from 'inspector';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
   global.lang = {ff:"vr" , ffb:"vb"}


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"قیمت لحظه ای (تتر) "}   style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)",backgroundColor:"#011D14",}}> 
         
        <pre style={{background: "linear-gradient(to bottom right, #011D14 20%, darkgray 99%)", width:"100%", height:350, marginRight:"0", color:"#000000",paddingTop:"50px" , textAlign:"right",}}>
          
        <img src='/tlogo.jpg' style={{width:"20px",float:"right",marginRight:"10px",}}></img> قیمت لحظه ای  : {(props.p.price as number).toLocaleString("fa-IR")} 
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <img src='/tlogo.jpg' style={{width:"20px",float:"right",marginRight:"10px"}}></img> تغییرات ۲۴ ساعت اخیر : % {Number(props.p.diff24d as number).toLocaleString("fa-IR")} 
        <br-x/>
        
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <img src='/tlogo.jpg' style={{width:"20px",float:"right",marginRight:"10px"}}></img> تغییرات یک هفته اخیر : % {Number(props.p.diff7d as number).toLocaleString("fa-IR")} 
       <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <img src='/tlogo.jpg' style={{width:"20px",float:"right",marginRight:"10px"}}></img> تغییرات یک ماه اخیر: % {Number(props.p.diff30d as number).toLocaleString("fa-IR")} 

       
       <img src='/tira2.png' style={{width:"1200px",float:"left", paddingRight:"400px", marginTop:"-50%", marginLeft:"-40%"}}></img>
       <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>
          <div style={{marginRight:"38%" ,backgroundColor:"#000",color:"#fff", marginLeft:"38%" , paddingRight:"10px",}}>تهیه شده توسط گروه تیرادو</div>
        </pre>
        

        
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
    let res = await fetch("https://api.tetherland.com/currencies")
    let data = await res.json()
    let p =data.data.currencies.USDT
    console.log("PRICEEEEEEEEE:",p)


  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}