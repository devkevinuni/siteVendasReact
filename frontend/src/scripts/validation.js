// Simple validation for the landing page contact form
export function validateContactForm(formData) {
  const errors = {}

  if (!formData.name || formData.name.trim().length < 3) {
    errors.name = 'Nome deve ter pelo menos 3 caracteres'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = 'Email inválido'
  }

  const phoneRegex = /^[+]?[(]?[0-9]{2,4}[)]?[\s.-]?[0-9]{4,5}[\s.-]?[0-9]{4}$/
  if (!formData.phone || !phoneRegex.test(formData.phone.trim())) {
    errors.phone = 'Telefone inválido'
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}
