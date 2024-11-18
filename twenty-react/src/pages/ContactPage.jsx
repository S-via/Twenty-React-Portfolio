import { useState } from 'react';

export default function ContactPage() {
    // form logic 
    // from xpert learning example
    const [alert, setAlert] = useState('')
    const [formData, setData] = useState({
        name: '',
        email: '',
        message: ''

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)

        setData({
            ...formData,
            [name]: value
        })
        console.log(formData)

    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted')
        if (!formData.name || !formData.email || !formData.message) {
            console.log('before return');
            setAlert('Fields are required!')
            return;
        }

        setData({
            name: '',
            email: '',
            message: ''
        })
        setAlert('')
        console.log('last of fucntion ')
    }


    return (
        // what it will return 
        <div>
            <h2>Contact Heading</h2>
            <form onSubmit={handlerSubmit}>
                Name:
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                Email:
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                Message:
                <input
                    type='text'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                />
                {alert && <div style={{ color: 'red' }}>{alert}</div>}

                <button type="submit">
                    Submit
                </button>


            </form>
        </div>
    );
}