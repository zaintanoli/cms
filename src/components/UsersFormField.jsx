'use client'
import React from 'react';
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const UsersFormFields = (
    { formData,
        handleOnChange,
        handleFileChange,
        roles,
        languages,
        readOnly,
        activeTab,
        type,
    }) => {

    // const isCreate = type === 'create'
    // const isUpdate = type === 'update';
    const [showPassword, setShowPassword] = React.useState(false);

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,}$/;
        return passwordRegex.test(formData.password);
    };
    const showPasswordHandler = () => {
        if (showPassword === false) {
            setShowPassword(true);
        } else {
            setShowPassword(false)
        }

    }

    return (

        activeTab === 0
            ? (
                <>
                    <label htmlFor="firstName" className="block mb-2">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleOnChange}
                        className="input input-bordered w-full mb-3"
                        disabled={readOnly}
                    />

                    <label htmlFor="lastName" className="block mb-2">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleOnChange}
                        className="input input-bordered w-full mb-3"
                        disabled={readOnly}

                    />
                    <label htmlFor="username" className="block mb-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleOnChange}
                        className="input input-bordered w-full mb-3"
                        disabled={readOnly}

                    />
                    <label htmlFor="email" className="block mb-2 ">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChange}
                        className="input input-bordered w-full mb-3"
                        disabled={readOnly}

                    />

                    <div className='flex justify-between'>
                        <label htmlFor="password" className="block">Password</label>
                        <span className='italic text-sm h-10'>
                            {formData.password && !/(?=.*[a-z])/.test(formData.password) && (
                                <p className='text-red-500'>Must have lowercase letter</p>
                            )}
                            {formData.password && !/(?=.*[A-Z])/.test(formData.password) && (
                                <p className='text-red-500'>Must have uppercase letter</p>
                            )}
                            {formData.password && !/(?=.*[!@#$%^&])/.test(formData.password) && (
                                <p className='text-red-500'>Must have special character</p>
                            )}
                            {formData.password && formData.password.length < 8 && (
                                <p className='text-red-500'>Must be at least 8 characters long</p>
                            )}
                            {formData.password && validatePassword() && (
                                <p className='text-green-500'>Password is valid</p>
                            )}
                        </span>
                    </div>

                    <input
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleOnChange}
                        className='input input-bordered w-full mt-8 mb-2'
                        disabled={readOnly}
                    />


                    <div className='flex items-center '>
                        <div className='cursor-pointer' onClick={showPasswordHandler}>
                            {showPassword ? (<EyeIcon className="text-gray-800  hover:text-gray-700  h-7 w-7 " />) : (<EyeSlashIcon className="text-gray-800  hover:text-gray-700  h-7 w-7 " />)}
                        </div>
                        <label class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-700"> {showPassword ? "Hide" : "Show"} Password</label>
                    </div>
                </>

            )
            :
            (
                <>
                    <label htmlFor="roles" className="block mb-2">
                        Role:
                    </label>
                    {roles.map((role) => (
                        <label key={role} className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="roles"
                                value={role}
                                checked={formData.roles.includes(role)}
                                onChange={handleOnChange}
                                className="checkbox checkbox-secondary mb-3"
                                disabled={readOnly}
                            />
                            <span className="m-3">{role}</span>
                        </label>
                    ))}

                    <label htmlFor="language" className="block mb-2">
                        Language:
                    </label>
                    <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleOnChange}
                        className="select select-bordered w-full mb-3"
                        disabled={readOnly}

                    >
                        <option value="">Select language</option>
                        {languages.map((language, index) => (
                            <option key={index} value={language}>
                                {language}
                            </option>
                        ))}
                    </select>
                </>
            )
    );
};

export default UsersFormFields;