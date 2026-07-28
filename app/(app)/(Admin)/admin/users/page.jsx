"use client"

import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";


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
    
    const handleRoleChange = async (userId, newRole) => {
console.log({ userId, newRole });
    }

    const handleDeleteUser = async (userId) => {
        if(window.confirm("آیا مطمئن هستید که می خواهید کاربر را حذف کنید؟")) {
          console.log({ userId });
        }
    }


      return (
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6">مدیریت کاربران</h2>
          {/* add new user form */}

          <div className="p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold mb-4">اضاف کردن کاربر جدید</h3>
            <form onSubmit={handleSubmit} className="">
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
                  className="w-full p-2 border  rounded"
                />
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
                  className="w-full p-2 border  rounded"
                />
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
                  className="w-full p-2 border  rounded"
                />
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
                  className="w-full p-2 border  rounded"
                >
                  <option value="customer">کاربر</option>
                  <option value="admin">مدیر</option>
                </select>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                type="submit"
              >
                اضاف کردن
              </button>
            </form>
          </div>
          {/* list of users */}

          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-right text-gray-500">
              <thead className="bg-gray-100 text-xs text-gray-700">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    نام
                  </th>
                  <th scope="col" className="px-4 py-3">
                    ایمیل
                  </th>
                  <th scope="col" className="px-4 py-3">
                    نقش
                  </th>
                  <th scope="col" className="px-4 py-3">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50 ">
                    <td className="p-4 font-medium text-gray-900 whitspace-nowrap ">
                      {user.name}
                    </td>
                    <td className="p-4 ">
                      {user.email}
                    </td>
                    <td className="p-4">
                      <select
                        name="role"
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                        id=""
                        className="p-2 border rounded"
                      >
                        <option value="customer">کاربر</option>
                        <option value="admin">مدیر</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => handleDeleteUser(user._id)} className="bg-red-100 px-4 py-2 rounded hover:bg-red-200 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                        <AiFillDelete className="text-red-600" />
                      </button>
                       </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      }

export default page