import React, { useState, useCallback, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Shield, Check, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { FormData, FormErrors } from '../../types';

interface FieldValidationState {
  isValid: boolean;
  isValidating: boolean;
  hasBeenTouched: boolean;
  showSuccess: boolean;
}

interface ValidationStates {
  [key: string]: FieldValidationState;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [validationStates, setValidationStates] = useState<ValidationStates>({
    name: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false },
    email: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false },
    company: { isValid: true, isValidating: false, hasBeenTouched: false, showSuccess: false }, // Optional field
    message: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formProgress, setFormProgress] = useState(0);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = useCallback((fieldName: string, value: string): { isValid: boolean; error?: string } => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) {
          return { isValid: false, error: t('validation.nameRequired') };
        }
        if (value.trim().length < 2) {
          return { isValid: false, error: t('validation.nameMinLength') };
        }
        if (value.trim().length > 50) {
          return { isValid: false, error: 'Name must be less than 50 characters' };
        }
        return { isValid: true };

      case 'email':
        if (!value.trim()) {
          return { isValid: false, error: t('validation.emailRequired') };
        }
        if (!validateEmail(value)) {
          return { isValid: false, error: t('validation.emailInvalid') };
        }
        return { isValid: true };

      case 'company':
        // Company is optional, so it's always valid
        if (value.trim().length > 100) {
          return { isValid: false, error: 'Company name must be less than 100 characters' };
        }
        return { isValid: true };

      case 'message':
        if (!value.trim()) {
          return { isValid: false, error: t('validation.messageRequired') };
        }
        if (value.trim().length < 10) {
          return { isValid: false, error: t('validation.messageMinLength') };
        }
        if (value.trim().length > 1000) {
          return { isValid: false, error: t('validation.messageMaxLength') };
        }
        return { isValid: true };

      default:
        return { isValid: true };
    }
  }, [t]);

  // Real-time validation with debouncing
  const validateFieldRealTime = useCallback((fieldName: string, value: string) => {
    // Set validating state
    setValidationStates(prev => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], isValidating: true }
    }));

    // Debounce validation
    const timeoutId = setTimeout(() => {
      const validation = validateField(fieldName, value);
      
      setValidationStates(prev => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          isValid: validation.isValid,
          isValidating: false,
          showSuccess: validation.isValid && prev[fieldName].hasBeenTouched
        }
      }));

      setFormErrors(prev => ({
        ...prev,
        [fieldName]: validation.error
      }));
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [validateField]);

  // Calculate form progress
  useEffect(() => {
    const requiredFields = ['name', 'email', 'message'];
    const validRequiredFields = requiredFields.filter(field => validationStates[field].isValid).length;
    const progress = (validRequiredFields / requiredFields.length) * 100;
    setFormProgress(progress);
  }, [validationStates]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Mark field as touched
    setValidationStates(prev => ({
      ...prev,
      [name]: { ...prev[name], hasBeenTouched: true }
    }));

    // Trigger real-time validation
    validateFieldRealTime(name, value);
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Immediate validation on blur
    const validation = validateField(name, value);
    
    setValidationStates(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        isValid: validation.isValid,
        hasBeenTouched: true,
        showSuccess: validation.isValid,
        isValidating: false
      }
    }));

    setFormErrors(prev => ({
      ...prev,
      [name]: validation.error
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isFormValid = true;

    // Validate all fields
    Object.keys(formData).forEach(fieldName => {
      const validation = validateField(fieldName, formData[fieldName as keyof FormData]);
      if (!validation.isValid && fieldName !== 'company') { // Company is optional
        errors[fieldName as keyof FormErrors] = validation.error;
        isFormValid = false;
      }
    });

    setFormErrors(errors);
    return isFormValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.9) {
            reject(new Error('Network error. Please try again.'));
          } else {
            resolve(true);
          }
        }, 1500);
      });
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
        setFormErrors({});
        setValidationStates({
          name: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false },
          email: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false },
          company: { isValid: true, isValidating: false, hasBeenTouched: false, showSuccess: false },
          message: { isValid: false, isValidating: false, hasBeenTouched: false, showSuccess: false }
        });
        setFormProgress(0);
      }, 5000);
      
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldIcon = (fieldName: string) => {
    const state = validationStates[fieldName];
    
    if (state.isValidating) {
      return (
        <div className="w-5 h-5 border-2 border-accent-500/30 border-t-accent-500 rounded-full animate-spin"></div>
      );
    }
    
    if (state.showSuccess && state.isValid) {
      return <Check className="w-5 h-5 text-green-500" />;
    }
    
    if (state.hasBeenTouched && !state.isValid && formErrors[fieldName as keyof FormErrors]) {
      return <X className="w-5 h-5 text-red-500" />;
    }
    
    return null;
  };

  const getFieldClassName = (fieldName: string) => {
    const state = validationStates[fieldName];
    const hasError = state.hasBeenTouched && !state.isValid && formErrors[fieldName as keyof FormErrors];
    const hasSuccess = state.showSuccess && state.isValid;
    
    let className = "w-full bg-gray-800 border rounded-lg px-4 py-3 pr-12 text-white focus:ring-2 focus:outline-none transition-all duration-300 min-h-[44px]";
    
    if (hasError) {
      className += " border-red-500 focus:border-red-500 focus:ring-red-500/20";
    } else if (hasSuccess) {
      className += " border-green-500 focus:border-green-500 focus:ring-green-500/20";
    } else {
      className += " border-gray-600 focus:border-accent-500 focus:ring-accent-500/20";
    }
    
    return className;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@premiumevents.com',
      href: 'mailto:gtiwa712@gmailcom',
      description: t('contact.email.description')
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+237) 123-456-7890',
      href: 'tel:(+237) 123-456-7890',
      description: t('contact.phone.description')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Akwa Paris Dancing Douala, CM',
      href: '#',
      description: t('contact.location.description')
    }
  ];

  const expectedProcess = [
    {
      step: '1',
      title: t('process.step1'),
      description: t('process.step1.desc')
    },
    {
      step: '2',
      title: t('process.step2'),
      description: t('process.step2.desc')
    },
    {
      step: '3',
      title: t('process.step3'),
      description: t('process.step3.desc')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('contact.title')}{' '}
            <span className="bg-gradient-to-r from-accent-500 to-purple-600 bg-clip-text text-transparent">
              {t('contact.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">{t('contact.getInTouch')}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {t('contact.description')}
              </p>
            </div>

            {/* Enhanced Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-4 group hover:text-accent-500 transition-colors duration-300 p-4 rounded-lg hover:bg-gray-900/30"
                >
                  <div className="w-12 h-12 bg-gray-900/50 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent-500 transition-colors duration-300 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium text-lg">{info.value}</div>
                    <div className="text-gray-500 text-sm">{info.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* What to Expect - Enhanced */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-accent-500" />
                <h4 className="text-white font-bold">{t('contact.whatToExpected')}</h4>
              </div>
              <div className="space-y-4">
                {expectedProcess.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{item.title}</div>
                      <div className="text-gray-400 text-xs">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-white/10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{t('contact.form.success')}</h3>
                <p className="text-gray-300 mb-4">{t('contact.form.successText')}</p>
                <div className="text-sm text-gray-400">
                  You should receive a confirmation email shortly.
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('contact.form.title')}</h3>
                  <p className="text-gray-400">{t('contact.form.subtitle')}</p>
                </div>

                {/* Form Progress Indicator */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Form Progress</span>
                    <span className="text-sm text-accent-500 font-medium">{Math.round(formProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-accent-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${formProgress}%` }}
                    ></div>
                  </div>
                </div>

                {submitError && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-red-400 text-sm">{submitError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          className={getFieldClassName('name')}
                          placeholder="John Doe"
                          aria-describedby={formErrors.name ? 'name-error' : undefined}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon('name')}
                        </div>
                      </div>
                      {formErrors.name && validationStates.name.hasBeenTouched && (
                        <p id="name-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          className={getFieldClassName('email')}
                          placeholder="john@company.com"
                          aria-describedby={formErrors.email ? 'email-error' : undefined}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          {getFieldIcon('email')}
                        </div>
                      </div>
                      {formErrors.email && validationStates.email.hasBeenTouched && (
                        <p id="email-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        className={getFieldClassName('company')}
                        placeholder={`${t('contact.form.company')} (${t('common.optional')})`}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        {getFieldIcon('company')}
                      </div>
                    </div>
                    {formErrors.company && validationStates.company.hasBeenTouched && (
                      <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{formErrors.company}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        rows={5}
                        className={`${getFieldClassName('message')} resize-vertical`}
                        placeholder="Tell us about your project, goals, timeline, and budget range..."
                        aria-describedby={formErrors.message ? 'message-error' : 'message-help'}
                      />
                      <div className="absolute right-3 top-3">
                        {getFieldIcon('message')}
                      </div>
                    </div>
                    {formErrors.message && validationStates.message.hasBeenTouched ? (
                      <p id="message-error" className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{formErrors.message}</span>
                      </p>
                    ) : (
                      <div className="mt-1 flex justify-between items-center">
                        <p id="message-help" className="text-sm text-gray-500">
                          {formData.message.length}/1000 characters
                        </p>
                        {formData.message.length >= 10 && formData.message.length <= 1000 && (
                          <span className="text-xs text-green-500 flex items-center space-x-1">
                            <Check className="w-3 h-3" />
                            <span>Good length</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formProgress < 100}
                    className="w-full bg-gradient-to-r from-accent-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{t('contact.form.sending')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('contact.form.send')}</span>
                        {formProgress === 100 && (
                          <Check className="w-5 h-5 text-green-400" />
                        )}
                      </>
                    )}
                  </button>

                  {/* Privacy Notice */}
                  <div className="text-xs text-gray-500 text-center">
                    {t('contact.form.privacy')}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;