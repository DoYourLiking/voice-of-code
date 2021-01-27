const createResponse = (code, message, data) => {
  return {
    'code': code || '00000',
    'message': message,
    'data': data || null
  }
}

module.exports = createResponse