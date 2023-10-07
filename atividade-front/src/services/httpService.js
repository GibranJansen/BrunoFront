const httpService = {
    login: (data) => {
        return fetch("http://localhost:3333/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }, 
    createUser: () => {

    },

    getUser: () => {

    }
}
export default httpService