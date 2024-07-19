const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
     if (!token) return res.status(401).json({ error: 'Access denied' });
     try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};










// exports.authenticateToken=(req, res, next)=> {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
  
//     if (!token) {
//       return res.sendStatus(401);
//     }
  
//     const result = verifyToken(token);
  
//     if (!result.success) {
//       return res.status(403).json({ error: result.error });
//     }
  
//     req.user = result.data;
//     next();
//   }

