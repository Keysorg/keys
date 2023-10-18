import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Typography } from '@mui/material';
import toast from 'react-hot-toast';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                e.target.reset()
                toast.success('Message sent successfully!')
            }, (error) => {
                toast.error('Something went wrong!')
            });
    };

    return (
        <Box
            ref={form}
            component='form'
            onSubmit={sendEmail}
            noValidate
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-evenly',
                // gap: 10,
                alignItems: 'center',
                height: '500px',
                mt: 10,
                mb: 10,
                margin: 'auto',
            }}
        >
            <Typography variant='h5'>We'd love to hear from you!</Typography>
            <Box
                sx={{
                    width: { xs: '100%', sm: '80%', md: '50%' }
                }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    autoFocus
                    rows={4}
                    multiline
                />
                <button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className='action-button'
                >
                    Send
                </button>
            </Box>
        </Box>
    );
}

export default ContactPage;