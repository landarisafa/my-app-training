//import { useEffect, useState } from 'react';
import Contact from '../../types/Contact';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

export default function ContactSection (){
    
// const [contactForm, setContactForm] = useState({fullname:"",email:"",phone:"",message:""});
// const [isSubmitted,setIsSubmitted] = useState(false);
// const [isSuccessForm,setIsSuccessForm] = useState(false);

// const handleSubmit = (event:any) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//     Object.values(contactForm).findIndex(x => x !== null && x !== '') !== -1 ?
//     setIsSuccessForm(true) : setIsSuccessForm(false);

//     alert(`Name: ${contactForm.fullname}, Email: ${contactForm.email}, Message: ${contactForm.message}`
//     );
// }

/********* using react-hook-form ********/
const { control, formState: { errors, isValid }, handleSubmit } = useForm<Contact>({
    defaultValues: {
        fullname: "",
        email: "",
        phone: "",
        message: ""
      },
})
const onSubmit: SubmitHandler<Contact> = (data) => {
    // console.log(data);
    // console.log(errors);
    alert(`Name: ${data.fullname}, Email: ${data.email}, Message: ${data.message}`     );
}

    return (
        <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                    <h2 className="mt-0">Let's Get In Touch!</h2>
                    <hr className="divider" />
                    <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <!-- Name input--> */}
                        <div className="form-floating mb-3">
                        <Controller name="fullname" control={control} 
                            rules={{ required: true }} 
                            render={({ field }) => <input className="form-control" type="text" id="fullname" placeholder="Enter your fullname..." {...field} />} />
                            <label htmlFor="fullname">Full name</label>
                            {errors.fullname?.type === "required" && <div className="validation-error">A Full Name is required</div>}
                        </div>
                        {/* <!-- Email address input--> */}
                        <div className="form-floating mb-3">
                        <Controller name="email" control={control} 
                            rules={{  required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/,
                              message: "Invalid email address",}}} 
                            render={({ field }) =><input className="form-control" id="email" placeholder="name@example.com" {...field} />} />
                            <label htmlFor="email">Email address</label>
                            {errors.email?.type === "required" && <div className="validation-error">Email is required.</div>}
                            {errors.email?.type === "pattern" && <div className="validation-error">Email is not valid.</div>}
                        </div>
                        {/* <!-- Phone number input--> */}
                        <div className="form-floating mb-3">
                        <Controller name="phone" control={control} 
                            rules={{
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{8}$/,
                                  message: "Invalid phone number (8 digits)",
                                },
                              }}
                            render={({ field }) => <input className="form-control" type="tel" id="phone" placeholder="(123) 456-7890" {...field} />} />
                            <label htmlFor="phone">Phone number</label>
                            {errors.phone?.type === "required" && <div className="validation-error">A phone number is required.</div>}
                            {errors.phone?.type === "pattern" && <div className="validation-error">Invalid phone number (10 digits).</div>}
                        </div>
                        {/* <!-- Message input--> */}
                        <div className="form-floating mb-3">
                            {/* <textarea className="form-control" id="message" value={contactForm.message} onChange={(event)=> setContactForm({...contactForm, message:event.target.value})} placeholder="Enter your message here..." style={{height: "10rem"}} data-sb-validations="required"></textarea> */}
                            <Controller name="message" control={control} 
                            rules={{
                                required: "Message is required"
                              }}
                            render={({ field }) =><textarea className="form-control" id="message" {...field} placeholder="Enter your message here..." style={{height: "10rem"}}></textarea>} />
                            <label htmlFor="message">Message</label>
                            {errors.message?.type === "required" && <div className="validation-error">A message is required.</div>}
                        </div>
                       
                        {/* <!-- Submit success message-->*/}
                        {/* { (isSubmitted  && isSuccessForm) && <div id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        } */}
                     
                        {/* <!-- Submit error message--> */}
                        {/* {(isSubmitted  && !isSuccessForm) && 
                        <div id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">Error sending message!</div>
                        </div>
                        } */}

                        {/* <!-- Submit Button--> */}
                         <div className="d-grid"> {/* disabled={!isValid} */}
                            <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button>
                            </div>
                    </form>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-4 text-center mb-5 mb-lg-0">
                    <i className="bi-phone fs-2 mb-3 text-muted"></i>
                    <div>+1 (555) 123-4567</div>
                </div>
            </div>
        </div>
    </section>
    );
}