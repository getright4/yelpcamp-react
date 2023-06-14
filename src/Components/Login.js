import React,{useState} from "react";
import Axios from 'axios'

function Login(){
   const url = ""
   const [data,setData] = useState({
     username: "",
     password: "",

   });

   function submit(e){
    e.preventDefault();

    Axios.post(url,{
        username: data.username,
        password: data.password
    })
    .then(res=>{
        console.log(res.data)
    })

   }
     
   function handle(e){
     const newdata = {...data}
     newdata[e.target.id] =e.target.value
     setData(newdata)
     console.log(newdata)
   }

;
  return (
    
    <div class="container d-flex justify-content-center align-items-center mt-5">
    <div class="row">
        <div class="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
            <div class="card shadow">
                <img src="https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                    alt="" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">Login</h5>
                    <form action="/login" method="POST" class="validated-form" novalidate>
                        <div class="mb-3">
                            <label class="form-label" for="username">Username</label>
                            <input onChange={(e)=>handle(e)} class="form-control" type="text" id="username" name="username" value={data.username} autofocus required>
                            </input>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input onChange={(e)=>handle(e)} class="form-control" type="password" id="password" name="password" value={data.password} required>
                            </input>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <button class="btn btn-success btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Login;