"use client"


const page = () => {
    const users = [
        {
            _id: "1234",
            name: "ali",
            email: "ali@example.com",
            role: "admin",
        },
        {
            _id: "2345",
            name: "Sam",
            email: "sam@example.com",
            role: "user",
        },
        {
            _id: "3456",
            name: "Mohammad",
            email: "mohammad@example.com",
            role: "user",
        },
    ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        }); // reset form after submission
    };
    }

      return (
    <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">مدیریت کاربران</h2>
        {/* add new user form */}

        <div className="p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">اضاف کردن کاربر جدید</h3>
            <form onSubmit={handleSubmit}  className="">
                <div className="mb-4">
                    <label className="block text-gray-700 " htmlFor="name">
                        نام
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border  rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 " htmlFor="email">
                        ایمیل
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border  rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 " htmlFor="password">
                        رمز عبور
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border  rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 " htmlFor="password">
                        نقش
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border  rounded">
                            <option value="customer">کاربر</option>
                            <option value="admin">مدیر</option>
                            </select>
                   
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">اضاف کردن</button>
            </form>
        </div>
    </div>
  )


export default page