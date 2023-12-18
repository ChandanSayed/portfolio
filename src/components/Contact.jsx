import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LineGradient from './LinearGradient';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [disableButton, setDisableButton] = useState(false);

  const {
    register,
    trigger,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async e => {
    e.preventDefault();
    const isValid = await trigger();
    console.log(isValid);
    if (isValid) {
      setDisableButton(true);
      emailjs.sendForm('service_e0yblnd', 'template_cfli0ks', form.current, 'tmF67ljka4s6SYzJ0').then(
        result => {
          console.log(result.text);
          Swal.fire({
            title: 'Good job!',
            text: 'Your message sent successfully!',
            icon: 'success'
          });
          setDisableButton(false);
          reset();
        },
        error => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="/images/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form onSubmit={onSubmit} action="" method="POST" ref={form}>
            <input
              className="w-full bg-white rounded-sm text-deep-blue font-semibold placeholder-opaque-black p-3"
              name="name"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full bg-white rounded-sm text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              name="email"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className="w-full bg-white rounded-sm text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required' && 'This field is required.'}
                {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
              </p>
            )}

            <button disabled={disableButton} className="p-5 bg-yellow font-semibold text-deep-blue mt-5 rounded-sm hover:bg-red hover:text-white transition duration-500" type="submit">
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
