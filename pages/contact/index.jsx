import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, TextField, Typography } from '@mui/material';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('sending email')
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 10,
                alignItems: 'center',
                height: '100%',
                mt: 10,
                mb: 10
            }}
        >
            <Typography variant='h5'>We'd love to hear from you!</Typography>
            <Box
                sx={{
                    width: { xs: '100%', sm: '50%' }
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