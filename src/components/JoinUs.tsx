import React, { useState, useEffect } from 'react';
import { colors } from '../styles/colors';
import { typography } from '../styles/typography';

const JoinUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    pincode: '',
    workTypes: [] as string[],
    availability: [] as string[],
    languages: [] as string[],
    hasSmartphone: '',
    hasExperience: '',
    consentAccurate: false,
    consentTerms: false,
    consentCommunication: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string | string[]) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value || (typeof value === 'string' && !value.trim())) {
          error = 'Full name is required';
        } else if (typeof value === 'string' && value.trim().length < 2) {
          error = 'Full name must be at least 2 characters';
        }
        break;

      case 'mobile':
        if (!value || (typeof value === 'string' && !value.trim())) {
          error = 'Mobile number is required';
        } else if (typeof value === 'string' && !/^[0-9]{10}$/.test(value.replace(/\D/g, ''))) {
          error = 'Please enter a valid 10-digit mobile number';
        }
        break;

      case 'email':
        if (value && typeof value === 'string' && value.trim()) {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Please enter a valid email address';
          }
        }
        break;

      case 'state':
        if (!value || (typeof value === 'string' && !value.trim())) {
          error = 'State is required';
        }
        break;

      case 'city':
        if (!value || (typeof value === 'string' && !value.trim())) {
          error = 'City is required';
        }
        break;

      case 'pincode':
        if (!value || (typeof value === 'string' && !value.trim())) {
          error = 'Pincode is required';
        } else if (typeof value === 'string' && !/^[0-9]{6}$/.test(value)) {
          error = 'Please enter a valid 6-digit pincode';
        }
        break;
    }

    return error;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const value = formData[name as keyof typeof formData];
    if (typeof value === 'string') {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleCheckboxChange = (field: 'workTypes' | 'availability' | 'languages', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/join-us-form.php', {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <style>
          {`
            .success-section {
              padding: 8rem 5rem 5rem;
              min-height: 80vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            @media (max-width: 768px) {
              .success-section {
                padding: 7rem 1rem 3rem;
              }
            }
          `}
        </style>
        <section className="success-section" style={{ backgroundColor: colors.lightGray }}>
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <div style={{
              background: colors.white,
              borderRadius: '16px',
              padding: '3rem',
              boxShadow: '0 8px 24px rgba(27, 20, 100, 0.1)',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: colors.paleGreen,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
              }}>
                <span style={{ fontSize: '3rem' }}>✓</span>
              </div>
              <h2 style={{ ...typography.h2, color: colors.navy, marginBottom: '1rem' }}>
                Application Submitted!
              </h2>
              <p style={{ ...typography.body, color: colors.textDark, marginBottom: '2rem' }}>
                Thank you for your interest in joining Teams4U. Our team will review your details and contact you if a suitable opportunity is available in your area.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    mobile: '',
                    email: '',
                    state: '',
                    city: '',
                    pincode: '',
                    workTypes: [] as string[],
                    availability: [] as string[],
                    languages: [] as string[],
                    hasSmartphone: '',
                    hasExperience: '',
                    consentAccurate: false,
                    consentTerms: false,
                    consentCommunication: false,
                  });
                  setError('');
                  setFieldErrors({});
                  setTouched({});
                }}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.white,
                  border: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginRight: '1rem',
                }}
              >
                Submit Another Application
              </button>
              <a
                href="/"
                style={{
                  display: 'inline-block',
                  color: colors.navy,
                  textDecoration: 'none',
                  padding: '0.875rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                Go to Home
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <style>
        {`
          .joinus-section {
            padding: 8rem 5rem 5rem;
          }
          .joinus-hero {
            text-align: center;
            margin-bottom: 4rem;
          }
          .form-container {
            max-width: 800px;
            margin: 0 auto;
          }
          .form-card {
            background: ${colors.white};
            border-radius: 12px;
            padding: 2.5rem;
            margin-bottom: 2rem;
            box-shadow: 0 4px 12px rgba(27, 20, 100, 0.08);
          }
          .form-group {
            margin-bottom: 1.5rem;
          }
          .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: ${colors.navy};
          }
          .form-input {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid ${colors.border};
            border-radius: 8px;
            font-size: 1rem;
            font-family: ${typography.fontFamily};
            transition: border-color 0.3s;
            box-sizing: border-box;
          }
          .form-input:focus {
            outline: none;
            border-color: ${colors.primary};
          }
          .checkbox-group {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }
          .checkbox-label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            color: ${colors.textDark};
          }
          .checkbox-input {
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
          .submit-btn {
            width: 100%;
            background: ${colors.primary};
            color: ${colors.white};
            border: none;
            padding: 1rem;
            border-radius: 8px;
            font-size: 1.125rem;
            font-weight: 700;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .submit-btn:hover {
            transform: translateY(-2px);
          }
          .section-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${colors.navy};
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid ${colors.paleGreen};
          }
          @media (max-width: 768px) {
            .joinus-section {
              padding: 7rem 1rem 3rem;
            }
            .form-card {
              padding: 1.5rem;
            }
          }
        `}
      </style>

      <section className="joinus-section" style={{ backgroundColor: colors.lightGray }}>
        <div className="form-container">
          <div className="joinus-hero">
            <span style={{
              backgroundColor: colors.primary,
              color: colors.white,
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: 600,
              display: 'inline-block',
              marginBottom: '1rem',
            }}>
              Join Our Team
            </span>
            <h1 style={{
              ...typography.h1,
              color: colors.navy,
              marginBottom: '1rem',
            }}>
              Join Us
            </h1>
            <p style={{
              ...typography.h3,
              color: colors.textDark,
              marginBottom: '0.5rem',
            }}>
              Work with Leading Brands. Earn from Your City.
            </p>
            <p style={{
              ...typography.body,
              color: colors.textGray,
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Be Part of India's On-Ground Market Execution Network. Join Teams4U's growing community and work on real projects that help leading companies enter and scale across Indian markets. Flexible work, city-based assignments, and performance-linked payouts.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Error Message */}
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

            {/* Basic Details */}
            <div className="form-card">
              <div className="section-title">Basic Details</div>
              
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  onBlur={() => handleBlur('fullName')}
                  required
                  style={{
                    borderColor: touched.fullName && fieldErrors.fullName ? '#dc3545' : undefined,
                  }}
                />
                {touched.fullName && fieldErrors.fullName && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.fullName}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number (Primary contact / WhatsApp) *</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  onBlur={() => handleBlur('mobile')}
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  style={{
                    borderColor: touched.mobile && fieldErrors.mobile ? '#dc3545' : undefined,
                  }}
                />
                {touched.mobile && fieldErrors.mobile && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.mobile}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Email ID (Optional)</label>
                <input
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="example@email.com"
                  style={{
                    borderColor: touched.email && fieldErrors.email ? '#dc3545' : undefined,
                  }}
                />
                {touched.email && fieldErrors.email && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.email}
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="form-card">
              <div className="section-title">Location</div>
              
              <div className="form-group">
                <label className="form-label">State *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  onBlur={() => handleBlur('state')}
                  required
                  style={{
                    borderColor: touched.state && fieldErrors.state ? '#dc3545' : undefined,
                  }}
                />
                {touched.state && fieldErrors.state && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.state}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">City / District *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  onBlur={() => handleBlur('city')}
                  required
                  style={{
                    borderColor: touched.city && fieldErrors.city ? '#dc3545' : undefined,
                  }}
                />
                {touched.city && fieldErrors.city && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.city}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Pincode *</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  onBlur={() => handleBlur('pincode')}
                  required
                  pattern="[0-9]{6}"
                  placeholder="6-digit pincode"
                  style={{
                    borderColor: touched.pincode && fieldErrors.pincode ? '#dc3545' : undefined,
                  }}
                />
                {touched.pincode && fieldErrors.pincode && (
                  <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {fieldErrors.pincode}
                  </div>
                )}
              </div>
            </div>

            {/* Work Preference */}
            <div className="form-card">
              <div className="section-title">Work Preference</div>
              
              <div className="form-group">
                <label className="form-label">Interested Work Type (Select one or more) *</label>
                <div className="checkbox-group">
                  {['Field Surveys & Research', 'Consumer Onboarding', 'Merchant / Partner Onboarding', 'Data Collection & Verification', 'Telecalling / Remote Support'].map((type) => (
                    <label key={type} className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={formData.workTypes.includes(type)}
                        onChange={() => handleCheckboxChange('workTypes', type)}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Availability *</label>
                <div className="checkbox-group">
                  {['Part-time', 'Full-time', 'Project-based'].map((avail) => (
                    <label key={avail} className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={formData.availability.includes(avail)}
                        onChange={() => handleCheckboxChange('availability', avail)}
                      />
                      <span>{avail}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Language & Device */}
            <div className="form-card">
              <div className="section-title">Language & Device</div>
              
              <div className="form-group">
                <label className="form-label">Languages Known (Multi-select) *</label>
                <div className="checkbox-group">
                  {['English', 'Hindi', 'Regional Language(s)'].map((lang) => (
                    <label key={lang} className="checkbox-label">
                      <input
                        type="checkbox"
                        className="checkbox-input"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleCheckboxChange('languages', lang)}
                      />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Smartphone with Internet Access *</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="radio"
                      name="smartphone"
                      className="checkbox-input"
                      value="Yes"
                      checked={formData.hasSmartphone === 'Yes'}
                      onChange={(e) => setFormData({ ...formData, hasSmartphone: e.target.value })}
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="radio"
                      name="smartphone"
                      className="checkbox-input"
                      value="No"
                      checked={formData.hasSmartphone === 'No'}
                      onChange={(e) => setFormData({ ...formData, hasSmartphone: e.target.value })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="form-card">
              <div className="section-title">Experience (Optional)</div>
              
              <div className="form-group">
                <label className="form-label">Any prior field or community work experience?</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="radio"
                      name="experience"
                      className="checkbox-input"
                      value="Yes"
                      checked={formData.hasExperience === 'Yes'}
                      onChange={(e) => setFormData({ ...formData, hasExperience: e.target.value })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="radio"
                      name="experience"
                      className="checkbox-input"
                      value="No"
                      checked={formData.hasExperience === 'No'}
                      onChange={(e) => setFormData({ ...formData, hasExperience: e.target.value })}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="form-card">
              <div className="section-title">Consent</div>
              
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={formData.consentAccurate}
                    onChange={(e) => setFormData({ ...formData, consentAccurate: e.target.checked })}
                    required
                  />
                  <span>I confirm that the information provided is accurate *</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={formData.consentTerms}
                    onChange={(e) => setFormData({ ...formData, consentTerms: e.target.checked })}
                    required
                  />
                  <span>I agree to the <a href="/terms-of-service" style={{ color: colors.primary }}>Terms & Conditions</a> and <a href="/privacy-policy" style={{ color: colors.primary }}>Privacy Policy</a> *</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={formData.consentCommunication}
                    onChange={(e) => setFormData({ ...formData, consentCommunication: e.target.checked })}
                    required
                  />
                  <span>I consent to receive communication via call, SMS, or WhatsApp *</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>

          <p style={{
            ...typography.small,
            color: colors.textGray,
            textAlign: 'center',
            marginTop: '2rem',
          }}>
            Our team will review your details and contact you if a suitable opportunity is available in your area.
          </p>
        </div>
      </section>
    </>
  );
};

export default JoinUs;
