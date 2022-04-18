module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/login") {
        if (req.body.username === "admin" && req.body.password === "admin") {
            res.status(200).json({
                message: "Login successful",
                token: "admin",
            });
        } else {
            res.status(401).json({
                message: "Login failed",
            });
        }
    }

    next();
};
