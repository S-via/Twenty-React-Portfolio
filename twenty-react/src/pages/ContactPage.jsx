import { useState } from 'react';

export default function ContactPage() {
    // form logic 
    // from xpert learning example
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

    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        setData({
            name: '',
            email: '',
            message: ''
        });
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
                    required />
                Email:
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required />
                Message:
                <input
                    type='text'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required />

                <button type="submit">
                    Submit
                </button>


            </form>
        </div>
    );
}