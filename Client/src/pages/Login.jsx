import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';


export const Login=()=>{
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
    const [user, setUser] = useState({
        // username: "",
        email: "",
        // phone: "",
        password: "",
      });
    
      const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      // handle form on submit
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
      };
    return(
    <>
     <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="a girl is trying to do registration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  {/* <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div> */}
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  {/* <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div> */}
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                    <button
                    onClick={togglePasswordVisibility}
                    style={{
                      cursor: 'pointer',
                      margin:'0',
                      background: 'none',
                      border: 'none',
                      // position: 'absolute',
                      right: '0px',
                      // top: '50%',
                      // transform: 'translateY(-50%)',
                    }}
                    aria-label="Toggle password visibility"
                  >
                    {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                   
                     
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>)
}