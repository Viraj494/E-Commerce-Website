const forgotPasswordTemplate = ({ name, otp }) => {
    return `
    
    <div>
        <p>Dear, ${name}</p>
        <p>Here is your OTP for password reset: ${otp}</p>

    </div>

    `
}

export default forgotPasswordTemplate