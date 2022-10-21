import React ,{useState}from 'react'
import { Button, DatePicker ,message,Alert ,Table,Popconfirm,Input } from 'antd'; 
import { UserOutlined } from '@ant-design/icons';
let product=[
  {"name":'arun',
    "pass":"123"
   },
{"name":'arun',
"pass":"123"
}, {"name":'arun',
"pass":"123"
},
{"name":'arun',
"pass":"123"
},
{"name":'arun',
"pass":"123"
},
]                              
const Ant = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" >
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <div>

        <Input placeholder="enter the username ex:captain" prefix={<UserOutlined />}  style={{width:"20%",display:"block"}}/>
        <Button type="primary">PRESS ME</Button>
       <DatePicker placeholder="select date" onChange={handleChange}/>
       <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
       <Table dataSource={product} columns={columns}/>
       {/* <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm> */}
       <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  )
}

export default Ant