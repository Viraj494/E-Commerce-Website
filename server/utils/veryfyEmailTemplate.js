const verifyEmailTemplate = ({name,url})=>{
    return`
<p>Dear ${name}</p>    
<p>Thank you for registering Binkeyit.</p>   
<a href=${url} style="color : black; background :#071263; margin-top : 10px, padding:20px, padding:20px">
    Verify Email
</a>
`
}

export default verifyEmailTemplate