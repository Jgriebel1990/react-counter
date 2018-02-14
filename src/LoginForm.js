import React, { Component } from 'react';


class LoginForm extends Component {

    render(){
        return(
            <div>
                <h1>Log in to Twitter</h1>
                <form action="">
                    <div className='form-group'>
                        <input type="email" className='form-control' placeholder='Phone, email or username'/>
                    </div>
                    <div>
                        <input type="text" className='form-control' placeholder='Password'/>
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={()=>{ alert('alert'); }}>Log In</button>
                    <input type="checkbox" className='form-check-input '/>
                    <label className='form-check-label'>Remember me</label>
                </form>
            </div>
        );
    }
}

export default LoginForm; 