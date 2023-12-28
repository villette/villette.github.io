import { useRef, useEffect } from 'react';
import { useForm } from '@formcarry/react';

export default function Contact({ success, error, labels, placeholders }) {
  const captchaSiteKey = '6LdUEJ4cAAAAAKwpdjNvc1QEw8xYzwYpEqBE4uys';

  const captchaResponseElement = useRef(null);

  const captchaLoaded = () => {
    grecaptcha.ready(() => {
      grecaptcha.execute(captchaSiteKey, { action: 'contact' }).then((token) => {
        captchaResponseElement.current.value = token;
      });
    });
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
    script.addEventListener('load', captchaLoaded);

    document.body.appendChild(script);
  }, []);

  const formCarryId = 'WMrdOCSAvlF';

  const { state, submit } = useForm({ id: formCarryId });

  return (
    <form onSubmit={submit} action={`https://formcarry.com/s/${formCarryId}`} method='post' acceptCharset='UTF-8'>
      <div className='form-floating mb-3'>
        <input id='input-name' className='form-control' type='text' name='name' required='required' placeholder={placeholders.name} />
        <label htmlFor='input-name' className='form-label'>{labels.name} *</label>
      </div>

      <div className='form-floating mb-3'>
        <input id='input-email' className='form-control' type='email' name='email' required='required' placeholder={placeholders.email} />
        <label htmlFor='input-email' className='form-label'>{labels.email} *</label>
      </div>

      <div className='form-floating mb-3'>
        <input id='input-subject' className='form-control' type='text' name='subject' required='required' placeholder={placeholders.subject} />
        <label htmlFor='input-subject' className='form-label'>{labels.subject} *</label>
      </div>

      <div className='form-floating mb-3'>
        <textarea id='input-message' className='form-control' name='message' required='required' placeholder={placeholders.message} style={{ height: '200px' }} />
        <label htmlFor='input-message' className='form-label'>{labels.message} *</label>
      </div>

      <input type='hidden' name='_gotcha' />
      <input type='hidden' name='g-recaptcha-response' ref={captchaResponseElement} />

      <div className='d-flex'>
        <div className='my-auto me-2'>
          <button className='btn btn-primary text-light' type='submit' disabled={!!state.submitted}>{labels.submit}</button>
        </div>

        {state.response &&
          <div className='ms-auto my-auto fadein'>
            <span className='text-success'><i className='fas fa-check'></i> {success}</span>
          </div>
        }

        {state.error &&
          <div className='ms-auto my-auto fadein'>
            <span className='text-danger'><i className='far fa-circle-xmark'></i> {error}</span>
          </div>
        }
      </div>
    </form>
  )
}
