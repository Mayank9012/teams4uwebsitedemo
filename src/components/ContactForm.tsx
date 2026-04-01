import React, { useState } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';
import countriesData from '../data/countries.json';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    phone: '',
    jobTitle: '',
    company: '',
    industry: '',
    message: '',
    marketingConsent: false,
    termsAccepted: false,
  });

  const [selectedDial, setSelectedDial] = useState('+1');
  const [phoneLocal, setPhoneLocal] = useState('');

  const countries: { name: string; dial_code: string; code: string; flag: string }[] = [...countriesData].sort((a, b) => a.name.localeCompare(b.name));

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string | boolean) => {
    let error = '';

    if (typeof value === 'boolean') {
      if (name === 'termsAccepted' && !value) {
        error = 'You must accept the terms and conditions';
      }
      return error;
    }

    switch (name) {
      case 'firstName':
        if (!value || !value.trim()) {
          error = 'First name is required';
        }
        break;

      case 'lastName':
        if (!value || !value.trim()) {
          error = 'Last name is required';
        }
        break;

      case 'businessEmail':
        if (!value || !value.trim()) {
          error = 'Business email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (!value || !value.trim()) {
          error = 'Phone number is required';
        }
        break;

      case 'jobTitle':
        if (!value || !value.trim()) {
          error = 'Job title is required';
        }
        break;

      case 'company':
        if (!value || !value.trim()) {
          error = 'Company name is required';
        }
        break;

      

      case 'industry':
        if (!value || !value.trim()) {
          error = 'Industry is required';
        }
        break;

      case 'message':
        if (!value || !value.trim()) {
          error = 'Message is required';
        }
        break;
    }

    return error;
  };

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const value = formData[name as keyof typeof formData];
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    Object.keys(formData).forEach(key => {
      if (key === 'marketingConsent') return; 
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        errors[key] = error;
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const allFields: { [key: string]: boolean } = {};
    Object.keys(formData).forEach(key => {
      allFields[key] = true;
    });
    setTouched(allFields);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/contact-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (jsonError) {
        throw new Error('Server error: ' + responseText.substring(0, 200));
      }

      if (!response.ok) {
        const errorMsg = data.error || 'Failed to submit form';
        const debugInfo = data.debug ? '\n\nDebug: ' + data.debug : '';
        throw new Error(errorMsg + debugInfo);
      }

      setSubmitted(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        businessEmail: '',
        phone: '',
        jobTitle: '',
        company: '',
        industry: '',
        message: '',
        marketingConsent: false,
        termsAccepted: false,
      });
      setSelectedDial('+1');
      setPhoneLocal('');
      setTouched({});
      setFieldErrors({});
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>
        {`
          .contact-form-section {
            background-color: ${colors.white};
            padding: 5rem 6rem;
          }

          .contact-form-container {
            max-width: 1400px;
            margin: 0 auto;
          }

          .form-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .form-header h2 {
            color: ${colors.darkNavy};
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .form-header p {
            color: ${colors.textGray};
            font-size: 1rem;
            line-height: 1.7;
          }

          .contact-form {
            background-color: ${colors.white};
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            padding: 3rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }

          .form-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group.full-width {
            grid-column: 1 / -1;
          }

          .form-label {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            margin-bottom: 0.5rem;
            color: ${colors.textDark};
            font-weight: 500;
            font-size: 0.875rem;
          }

          .required {
            color: #EF4444;
          }

          .form-input,
          .form-select,
          .form-textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 0.95rem;
            font-family: ${typography.fontFamily};
            transition: all 0.2s ease;
            box-sizing: border-box;
            background-color: ${colors.white};
          }

          .form-input:focus,
          .form-select:focus,
          .form-textarea:focus {
            outline: none;
            border-color: ${colors.primary};
            box-shadow: 0 0 0 3px rgba(21, 183, 21, 0.1);
          }

          .form-input::placeholder,
          .form-textarea::placeholder {
            color: #9ca3af;
            font-style: italic;
          }

          .phone-row {
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }

          .country-select.form-select {
            width: 25%;
            padding-right: 2.5rem;
            font-size: 0.9rem;
          }

          .country-select option {
            padding: 0.5rem;
          }

          .phone-input.form-input {
            flex: 1;
          }

          .form-input.error,
          .form-select.error,
          .form-textarea.error {
            border-color: #EF4444;
          }

          .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%236b7280' d='M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 0.75rem center;
            padding-right: 2.5rem;
            cursor: pointer;
          }

          .form-select option:first-child {
            color: #9ca3af;
          }

          .form-textarea {
            min-height: 120px;
            resize: vertical;
          }

          .error-message {
            color: #EF4444;
            font-size: 0.8rem;
            margin-top: 0.375rem;
          }

          .checkbox-group {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .checkbox-input {
            margin-top: 0.25rem;
            width: 16px;
            height: 16px;
            cursor: pointer;
            flex-shrink: 0;
          }

          .checkbox-label {
            font-size: 0.875rem;
            color: ${colors.textGray};
            line-height: 1.5;
            cursor: pointer;
          }

          .checkbox-label a {
            color: ${colors.primary};
            text-decoration: underline;
          }

          .checkbox-label a:hover {
            color: ${colors.primaryDark};
          }

          .submit-button {
            width: 100%;
            padding: 1rem 2rem;
            background-color: ${colors.primary};
            color: ${colors.white};
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: ${typography.fontFamily};
            margin-top: 1rem;
          }

          .submit-button:hover:not(:disabled) {
            background-color: #12a012;
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(21, 183, 21, 0.3);
          }

          .submit-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .success-message {
            background: linear-gradient(135deg, ${colors.primary} 0%, #12a012 100%);
            color: ${colors.white};
            padding: 3rem;
            border-radius: 12px;
            text-align: center;
          }

          .success-message h3 {
            font-size: 2rem;
            margin-bottom: 0.75rem;
          }

          .success-message p {
            font-size: 1.1rem;
            opacity: 0.95;
          }

          @media (max-width: 1200px) {
            .contact-form-section {
              padding: 4rem 3rem;
            }
          }

          @media (max-width: 768px) {
            .contact-form-section {
              padding: 3rem 1.5rem;
            }

            .contact-form {
              padding: 2rem 1.5rem;
            }

            .form-grid {
              grid-template-columns: 1fr;
              gap: 1.25rem;
            }

            .form-header h2 {
              font-size: 2rem;
            }

            .form-header p {
              font-size: 0.95rem;
            }
          }
        `}
      </style>

      <div className="contact-form-section">
        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>We have received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="form-header">
                <h2>Get in Touch</h2>
                <p>Fill out the form below and our team will reach out to you within 24 hours.</p>
              </div>

              {error && (
                <div style={{
                  background: '#fee',
                  border: '2px solid #fcc',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  color: '#c00',
                  fontWeight: 600,
                }}>
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`form-input ${fieldErrors.firstName && touched.firstName ? 'error' : ''}`}
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      onBlur={() => handleBlur('firstName')}
                    />
                    {fieldErrors.firstName && touched.firstName && (
                      <span className="error-message">{fieldErrors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`form-input ${fieldErrors.lastName && touched.lastName ? 'error' : ''}`}
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      onBlur={() => handleBlur('lastName')}
                    />
                    {fieldErrors.lastName && touched.lastName && (
                      <span className="error-message">{fieldErrors.lastName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="businessEmail">
                      Business Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      className={`form-input ${fieldErrors.businessEmail && touched.businessEmail ? 'error' : ''}`}
                      value={formData.businessEmail}
                      onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                      onBlur={() => handleBlur('businessEmail')}
                      placeholder="a corporate email is required"
                    />
                    {fieldErrors.businessEmail && touched.businessEmail && (
                      <span className="error-message">{fieldErrors.businessEmail}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="jobTitle">
                      Job Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      className={`form-input ${fieldErrors.jobTitle && touched.jobTitle ? 'error' : ''}`}
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      onBlur={() => handleBlur('jobTitle')}
                    />
                    {fieldErrors.jobTitle && touched.jobTitle && (
                      <span className="error-message">{fieldErrors.jobTitle}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Company <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={`form-input ${fieldErrors.company && touched.company ? 'error' : ''}`}
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      onBlur={() => handleBlur('company')}
                    />
                    {fieldErrors.company && touched.company && (
                      <span className="error-message">{fieldErrors.company}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone <span className="required">*</span>
                    </label>
                    <div className="phone-row">
                      <select
                        id="phoneCountry"
                        name="phoneCountry"
                        className={`form-select country-select`}
                        value={selectedDial}
                        onChange={(e) => {
                          const dial = e.target.value;
                          setSelectedDial(dial);
                          handleInputChange('phone', dial + (phoneLocal ? ' ' + phoneLocal : ''));
                        }}
                      >
                        <option value="">Select country</option>
                        {countries.map((c) => (
                          <option key={c.code} value={c.dial_code}>
                            {c.flag} {c.name} ({c.dial_code})
                          </option>
                        ))}
                      </select>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`form-input phone-input ${fieldErrors.phone && touched.phone ? 'error' : ''}`}
                        value={phoneLocal}
                        onChange={(e) => {
                          const local = e.target.value;
                          setPhoneLocal(local);
                          handleInputChange('phone', selectedDial + (local ? ' ' + local : ''));
                        }}
                        onBlur={() => handleBlur('phone')}
                        placeholder="123 4567 890"
                      />
                    </div>
                    {fieldErrors.phone && touched.phone && (
                      <span className="error-message">{fieldErrors.phone}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="industry">
                      Industry <span className="required">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className={`form-select ${fieldErrors.industry && touched.industry ? 'error' : ''}`}
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      onBlur={() => handleBlur('industry')}
                    >
                      <option value="">Select your industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Retail">Retail & E-commerce</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Education">Education</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Government">Government</option>
                      <option value="Other">Other</option>
                    </select>
                    {fieldErrors.industry && touched.industry && (
                      <span className="error-message">{fieldErrors.industry}</span>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-textarea ${fieldErrors.message && touched.message ? 'error' : ''}`}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Describe your request. Please share specifics like timeline and budget ."
                    />
                    {fieldErrors.message && touched.message && (
                      <span className="error-message">{fieldErrors.message}</span>
                    )}
                  </div>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="marketingConsent"
                    name="marketingConsent"
                    className="checkbox-input"
                    checked={formData.marketingConsent}
                    onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
                  />
                  <label htmlFor="marketingConsent" className="checkbox-label">
                    I would like to receive marketing communications from Teams4U.
                  </label>
                </div>

                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    className="checkbox-input"
                    checked={formData.termsAccepted}
                    onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                    onBlur={() => handleBlur('termsAccepted')}
                  />
                  <label htmlFor="termsAccepted" className="checkbox-label">
                    I agree to the Teams4U <a href="/terms">Terms and Conditions</a> and confirm that I have read and understood the Teams4U <a href="/privacy">Privacy Notice</a>. <span className="required">*</span>
                  </label>
                </div>
                {fieldErrors.termsAccepted && touched.termsAccepted && (
                  <span className="error-message" style={{ marginLeft: '1.5rem' }}>{fieldErrors.termsAccepted}</span>
                )}

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
