import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  // const [name, setName] = useState("Anshu")

const onViaCallSubmit = () => {
  console.log("I am from call");
};

const onSubmit = (event) => {
  event.preventDefault();
    console.log(event);
};


  return(
     <section className={styles. container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
             text=" VIA SUPPORT CHAT"
             icon ={ <MdMessage fontSize="24px"/>}
            />
             <Button 
             text=" VIA CALL"  
             icon ={<FaPhoneAlt fontSize= "22px" /> }
            />
          </div>
             <Button
             onClick={onViaCallSubmit}
             isOutLine={true}
             text=" VIA EMAIL FORM"  
             icon ={<HiMail fontSize= "22px" /> }
            />

            <form onSubmit={onSubmit}>
               <div className={styles.form_control}>
                 <label htmlFor="Name">Name</label>
                 <input type="text" name="name" />
               </div>

                <div className={styles.form_control}>
                 <label htmlFor="Email">Email</label>
                 <input type="email" name="email" />
               </div>

                <div className={styles.form_control}>
                 <label htmlFor="Text">Text</label>
                 <textarea name="text" rows={5}/>
               </div>

               <div
               style={{
                display: "flex",
                justifyContent: "end",
               }}>
                   <Button text=" SUBMIT" />
                </div>
            </form>

        </div> 

        <div className={styles.contact_image}>
         <img src="public/images/contact.svg" alt="contact image" /> 
        </div> 
     </section>
  );
};

export default ContactForm;