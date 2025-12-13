// 生成真实的AES密文
const text = '项目预算2023-2024';
const key = 'EmergencyTransfer';
const encrypted = CryptoJS.AES.encrypt(text, key).toString();
console.log('密文:', encrypted);