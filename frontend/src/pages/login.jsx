import { loginRequest } from "../api/auth.js";

export default function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { 
            name: e.target.name.value,
            email: e.target.email.value
        }

        await loginRequest(user)
    }

    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <form className="bg-white shadow-md rounded-xl	 px-8 pt-6 pb-8 mb-4" style={{backgroundColor: "#FBFADA"}} onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" name="email"/>
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Use Chat
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}