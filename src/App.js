import axios from 'axios';
import './App.css';
import { Button, Form, Input } from 'antd';
import { getCookie } from './utils/utils';
function App() {
  async function onSubmit(values) {
    console.log(values);
    try {
      const result = await axios.put('http://157.66.27.28:3000/api/update', {
        fullname: values.name,
        class: values.class,
        studentId: values.mssv
      }, {
        headers: {
          Authorization: `Bearer ${getCookie('app-token')}`
        }
      })
      console.log(result.data);
      alert(result.data.message)
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className='container '>
      <Form
        name="wrap"
        labelCol={{
          flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="MSSV"
          name="mssv"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Full name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Class name"
          name="class"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
