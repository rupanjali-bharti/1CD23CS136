
/**
 * @param {string} stack 
 * @param {string} level 
 * @param {string} pkg 
 * @param {string} message 
 */
async function Log(stack, level, pkg, message) {
  
  const TEST_SERVER_URL = process.env.TEST_SERVER_URL || 'http://4.224.186.213/evaluation-service/logs';

  const payload = {
    stack: stack,
    level: level,
    package: pkg,
    message: message,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(TEST_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    console.log(`[${level}] ${pkg}: ${message}`);

  } catch (error) {
    console.error('Failed to send log to Test Server:', error.message);
  }
}

module.exports = { Log };