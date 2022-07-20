import React from 'react'
import {useState, useEffect} from 'react';

function Todo() {

    const [word,setword] = useState("");
    const [arr,setarr] = useState([]);
    const [id,setid] = useState(-1);
    // let [lcl,setlcl] = useState();
    
    

    useEffect(()=>
    {
      const lcl = JSON.parse(localStorage.getItem("arr"));
    //   if(lcl==null)
        console.log(lcl);
        // if(lcl==null)
            // localStorage.setItem("arr",[]);

        if(lcl==null)
            setarr([]);
        else
             setarr(lcl);


        
  
      
      console.log(lcl);
      
      
    },[]);

    


    console.log(arr);
    console.log(arr);
    console.log(arr);

  

    localStorage.setItem("mashh", "mash shetty")

    const set = (e) =>
    {
           
            setword(e.target.value);
            // console.log(word)

            
    }

    const addd=(e) =>
    {
        e.preventDefault();
        console.log(id);

        if(id==-1){
        arr.push(word);
        setarr(arr);
        console.log(arr);
        setword("");
        localStorage.setItem("arr", JSON.stringify(arr));
        }

        else{
            const ins = arr.map((item,index)=>
            {
                if(index==id)
                    return word;
                
                else
                    return item;
            })

            setarr(ins);
            localStorage.setItem("arr", JSON.stringify(ins));
            setid(-1);
        }
    }

    const del=(e) =>
    {
   

       const newarr = arr.filter((item,index)=>
       {
        if(index!=e.target.id)
        return item;
       });

       setarr(newarr);
       localStorage.setItem("arr", JSON.stringify(newarr));

    }

    const edit =(item,index) =>
    {
        setword(item);
        setid(parseInt(index));


            console.log(id);
  
        

            
    }



  return (
    <div>
         
        <div className="container">
         
            <div className="todo">
                <div><h1 className='h'>To do list</h1></div>
                <div className="in">
                    <input className='name' value={word} onChange={set} type="text" name='data' />
                    <input className='btn' onClick={addd} type="submit" name='btn' />
                    
                </div>
                <div className="data">

                   <div className="d">
                        
                       
                     {
                        arr && arr.map((item,index)=>
                        {
                            return(
                                <>
                                   <div className='ddata'>{index+1} . {item} <span className="sss"><span className='s spn k' onClick={del} id={index}>&#10060;</span > <span className='spn' onClick={()=>edit(item,index)}>&#9998;</span></span></div>
                                   </>
                            );
                        })
                     }
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo