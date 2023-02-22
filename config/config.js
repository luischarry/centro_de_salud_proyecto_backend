module.exports = {

    PORT: process.env.PORT ?? "3000", 
    URL: process.env.URL ?? "http://mongodb.org",
    SECRET: process.env.AUTH_SECRET || "ExampledSecret", 
    EXPIRES: process.env.AUTH_EXPIRES || "24h",
    ROUNDS : process.env.AUTH_ROUNDS || 10
};