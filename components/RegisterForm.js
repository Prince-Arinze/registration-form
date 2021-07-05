import { useState } from 'react'
import { Form, Input, Button, Select } from 'antd';
import styles from '../styles/Home.module.css';
import Category from './Category';

const { Option } = Select;


const Register = () => {

  const registerUser = async () => {
       const user = await fetch(`https://apitest.trav4college.com/v1/register`)
  }

  const [category, setCategory] = useState(1);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [cf_password, setCf_Password] = useState("")
  const [student, setStudent] = useState("Yes");

  const onSubmit = e => {
     e.preventDefault();
     console.log(values)
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
             <Form.Item
            name="first_name"
            rules={[{ required: true }]}
            className={styles.first_name}
            >
            <Input placeholder="First Name" type="text" value={firstname} onChange={e => setFirstName(e.target.value)}/>
       
            </Form.Item>
            {firstname}
            <Form.Item
            name="last_name"
            rules={[{ required: true }]}
            className={styles.last_name}
            >
            <Input placeholder="Last Name" type="text" onChange={e => setLastName(e.target.value)}  value={lastname}/>
     
        </Form.Item>
        {lastname}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email address',
            }
          ]}
        >
          <Input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
      
        </Form.Item>
        {email}

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number',
            },
          ]}
        >
          <Input placeholder="Phone Number" type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
        </Form.Item>
        {phone}
        
     
     { category === 1 &&
        <Form.Item
          name="student"
        >
          <Select placeholder="Are You a High School Student" value={student} onChange={e => setStudent(e.target.value)}>
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>
      }
  
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" className={styles.password} value={password} onChange={e => setPassword(e.target.value)}/>
  
        </Form.Item>
        {password}
        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
          ]}
        >
          <Input.Password placeholder="Confirm Password" className={styles.password} value={cf_password} onChange={e => setCf_Password(e.target.value)}/>
      
        </Form.Item>
        {cf_password}
        <Form.Item
          wrapperCol={{
            span: 18,
          }}
        >
          <Button type="primary" htmlType="submit">
              create account
          </Button>
        </Form.Item>
    
      </Form>
      </div>
    );
  };
  
  export default Register