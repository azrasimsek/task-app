const isAdmin = (req, res, next) => {
    // req.user bilgisi zaten bir önceki 'verifyToken' middleware'inden geliyor
    if (req.user && req.user.yetki === 1) {
        next(); // Admin ise geçebilir
    } else {
        res.status(403).json({ error: "Erişim reddedildi! Sadece adminler girebilir." });
    }
}; 
module.exports = isAdmin;