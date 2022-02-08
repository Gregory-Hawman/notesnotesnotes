module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    rounds: process.env.JWT_ROUNDS,
    PORT: process.env.PORT || 5111
}