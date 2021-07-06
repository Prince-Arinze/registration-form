import { useState } from 'react'
import { Form, Input, Button } from 'antd';
import styles from '../styles/Home.module.css';
import Category from './Category';
import validate from '../utils/validate';

const Register = () => {
  const initialValues = {first_name: "", last_name: "", email: "", phone: "", password: "", confirm_password: "", device_name: "Macbook Pro"}
  const [fieldsValue, setFieldsValue] = useState(initialValues)
  const [category, setCategory] = useState(1);
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")


  const choice = [
    { value: 'Yes' },
    {  value: 'No' },
  ];

  const {first_name, last_name, email, password, confirm_password, phone, device_name} = fieldsValue;

  const handleChange = (e) => {
       const { name, value } = e.target
       setFieldsValue({...fieldsValue, [name]: value});
  }

  const errMsg = validate(first_name, last_name, email, password, confirm_password, phone);

  const registerUser = async () => {
    try {
         if(errMsg && errMsg !== undefined){
          setErrorMsg(<div className="messages errors"><p>Error(s)</p><span>{errMsg}</span>
          </div>
              )  
         }

         if(errMsg === undefined){
             await fetch("https://cors-anywhere.herokuapp.com/https://apitest.trav4college.com/v1/register", {
              method: "POST",
              "Content-Type": "text/html",
              body: JSON.stringify({first_name, last_name, email, phone, password, device_name, confirm_password})})
              setSuccessMsg(<div className="messages success"><p>Success</p><span>Registration was successful</span></div>)

        }
      
    } catch (error) {
        console.log(error.message)
    }

  
  }
   
    const updateCategory = (index) => {
        setCategory(index)
    }

    return (
      <div className={styles.register}>
      <Category category={category} updateCategory={updateCategory}/>
      <Form
        name="register"
        wrapperCol={{
          span: 18,
        }}
        className={styles.register_form}
      >
         {errMsg && errMsg !== undefined ? errorMsg : successMsg}
         
          <Form.Item className={styles.first_name}>
               <Input placeholder="First Name" type="text" value={first_name} onChange={handleChange} name="first_name"/>
          </Form.Item>
            <Form.Item className={styles.last_name}>
            <Input placeholder="Last Name" type="text" onChange={handleChange}  value={last_name} name="last_name"/>
     
        </Form.Item>
        <Form.Item>
          <Input placeholder="Email Address" type="email" value={email} onChange={handleChange} name="email"/>
      
        </Form.Item>

        <Form.Item>
          <Input placeholder="Phone Number" type="text" onChange={handleChange} name="phone" value={phone} />
        </Form.Item>
        
     { category === 1 &&
       <Form.Item name="students">
          <select placeholder="Select an option"  className="select_input">
          <option disabled defaultValue="Select an Option">Select an Option</option>
  
             {
               choice.map(({value}, index) => (             
                    <option key={index} value={value}>{value}</option>
               ))
             }
          </select>
        </Form.Item>
       
      }
  
        <Form.Item>
          <Input.Password placeholder="Password" className={styles.password} value={password} onChange={handleChange} name="password"/>
  
        </Form.Item>
        <Form.Item>
          <Input.Password placeholder="Confirm Password" className={styles.password} value={confirm_password} onChange={handleChange} name="confirm_password"/>
      
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 18,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={registerUser}>
              create account
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  };
  
  export default Register