import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import { DataType } from '../../../../types/Dashboard';
import { CloseOutlined } from '@ant-design/icons';
import '../../../../styles/FormItem.css';
import { useEffect } from 'react';
// import { useForm } from '../../../../utils/useForm'; // Create the useForm custom hook as explained in the previous answer
// import { FormValues } from '../../../../types/Form';

type FormItemProps = {
    rowData: DataType | null; // Define the prop you expect
    onClose: (item?: DataType) => void
};

function FormItem({ rowData, onClose }: FormItemProps) {

    let initialValues: DataType = {
        name: {
            first: rowData?.name?.first || '',
            last: rowData?.name?.last || ''
        },
        email: rowData?.email || '',
        gender: rowData?.gender || '',
        login: {
            uuid: ''
        }
    };

    // const { formValues, handleChange, handleSubmit } = useForm({ initialValues, onSubmit });
    const [form] = Form.useForm(); // Create a form instance

    useEffect(() => {
        // Use useEffect to update the form with new initial values when initialData changes
        form.setFieldsValue(initialValues);
    }, [initialValues]);


    const handleChange = (fieldName: string, value: string) => {
        form.setFieldsValue({ fieldName: value });
    };

    const onFinish = (values: DataType) => {
        onClose(values);
    };

    const handleOnClose = () => {
        initialValues = {} as DataType;
        onClose();
    };

    return (
        <>
            <div className="drawer-header-section">
                <div className='section-title'>
                    <span className='drawer-title'>Drawer title</span>
                    <span className='drawer-subtitle'>Drawer description</span>
                </div>

                <CloseOutlined className="drawer-close-icon" onClick={() => onClose()} />
            </div>

            <div className="drawer-content-section">

                <Form layout="vertical"
                    form={form} // Assign the form instance
                    onFinish={onFinish}>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name={['name', 'first']}// Use an array to specify the nested field path
                                label="First Name"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input
                                    onChange={(event) => handleChange('name.first', event.target.value)}
                                    placeholder="Please enter user first name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name={['name', 'last']}// Use an array to specify the nested field path
                                label="Last Name"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input
                                    onChange={(event) => handleChange('name.last', event.target.value)}
                                    placeholder="Please enter user last name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[{ required: true, message: 'Please choose the gender' }]}>

                                <Select
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={(value) => handleChange('gender', value)}
                                    // onChange={handleChange}
                                    options={[
                                        {
                                            value: 'male',
                                            label: 'Male',
                                        },
                                        {
                                            value: 'female',
                                            label: 'Female',
                                        }
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter your email',
                                    },
                                ]}
                            >
                                <Input
                                    // onChange={handleChange}
                                    onChange={(event) => handleChange('email', event.target.value)}
                                    placeholder="please enter you email" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="drawer-footer-section">
                        <Space>
                            <Button onClick={handleOnClose}>Cancel</Button>
                            <Button type="primary" htmlType="submit" >
                                Submit
                            </Button>
                        </Space>
                    </div>
                </Form>
            </div>


        </>
    );
}

export default FormItem;

//   const [first, setFirst] = useState(rowData?.name?.first || '');
//   const [last, setLast] = useState(rowData?.name?.last || '');
//   const [gender, setGender] = useState(rowData?.gender || '');
//   const [email, setEmail] = useState(rowData?.email || '');


// let initialValues: DataType = {name:{first:'',last:''}} as DataType;
// useEffect(() => {
//     initialValues.name = { first: rowData?.name?.first || '', last: rowData?.name?.last || '' };
//     initialValues.email = rowData?.email || '';
//     initialValues.gender = rowData?.gender || '';
//     initialValues.login = { uuid: "" };
// }, []);

//   useEffect(() => {
//     console.log('rowData changed:', rowData);
//     setFirst(rowData?.name?.first || '');
//     setLast(rowData?.name?.last || '');
//     setGender(rowData?.gender || '');
//     setEmail(rowData?.email || '');
//   }, [rowData]);

// // In FormItem component
// useEffect(() => {
//     console.log('rowData:', rowData);
//     console.log('first:', first);
//     console.log('last:', last);
//     console.log('gender:', gender);
//     console.log('email:', email);
// }, [rowData, first, last, gender, email]);



//   const onSubmit = () => {
//     // Your submit logic here
//     const finalData: DataType = {} as DataType;
//     finalData.name = {} as {
//         first: string;
//         last: string;
//     };
//     finalData.name.first = first;
//     finalData.name.last = last;
//     finalData.email = email;
//     finalData.gender = gender;
//   };