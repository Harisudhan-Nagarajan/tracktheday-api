export const login = async (req, res) => {
    try {
        res.send("Login successful");
    } catch (error) {
        console.log("Error while connecting to MongoDB", error);
        
    }
};

export const signup = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        
    } catch (error) {
        console.log("Error while connecting to MongoDB", error);
        
    }
}

export default { login,signup };