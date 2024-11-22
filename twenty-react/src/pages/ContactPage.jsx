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
            setAlert('Message field is required!')
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
        <div className='contact-container'>
            <div className=" card w-75 mb-3">
                <div className=" card-body">
            <h2>Contact</h2>
            <form onSubmit={handlerSubmit}>

            
                <div className='mb-3'>
                    <input className='form-control'
                    placeholder='Your Name'
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}

                    />
                    
                </div>

              
                <div className='mb-3'>
                    <input className='form-control'
                    placeholder='Valid email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    
                    />
                   
                </div>

               
                <div className='mb-3'>
                    <input className='form-control'
                    placeholder='Your Message'
                        type='text'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}

                    />
                    
                    {alert && <div style={{ color: 'blue' }}>{alert}</div>}
                </div>

                <button type="submit">
                    Submit
                </button>


            </form>
        </div>
        </div>
        </div>
    );
}