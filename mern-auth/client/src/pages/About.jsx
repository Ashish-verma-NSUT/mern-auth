import React from 'react'

export default function About() {
  return  (
    <div>
      <div className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-slate-700">
          About
        </h1>
        <p className="mb-4 text-slate-700">
        Securing your online experience is our priority. At Auth app, we provide a robust authentication system, ensuring your data is protected with encryption and optional multi-factor authentication. Trust that your privacy is paramount, and our platform is designed for a seamless and secure user experience. Join us on Auth app and elevate your online journey today!
        </p>
        <p className="mb-4 text-slate-700">
          One common approach to implementing authentication in web applications
          is to use token-based systems, such as JSON Web Tokens (JWT). When a
          user successfully logs in, the server generates a token and sends it
          back to the client. This token, usually stored in a secure manner, is
          included in subsequent requests to the server to authenticate and
          authorize the user. This method eliminates the need for the server to
          store session information, making it scalable and efficient. However,
          it's crucial to handle these tokens securely and include measures to
          protect against common vulnerabilities, like Cross-Site Scripting
          (XSS) and Cross-Site Request Forgery (CSRF) attacks.
        </p>
        
      </div>
    </div>
  )
  
  
}
