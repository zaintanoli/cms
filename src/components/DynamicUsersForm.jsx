'use client'
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from "next-auth/react"
// import ModalButton from '../ModalButton/ModalButton';
import UsersFormFields from './UsersFormField';

import { ToastContainer, toast } from 'react-toastify';

const roles = ['admin', 'user', 'reviewer'];
const languages = ['en-US', 'ur-PK', 'br-FR'];

const DynamicUsersForm = ({ type, dataToUpdate, userId }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isCreate = type === 'create'
  const isUpdate = type === 'update';
  const isReadOnly = type === 'readonly';

  const initialState = isUpdate || isReadOnly
    ? {
      firstName: dataToUpdate.firstName,
      lastName: dataToUpdate.lastName,
      username: dataToUpdate.username,
      email: dataToUpdate.email,
      roles: dataToUpdate.role,
      language: dataToUpdate.language,
      password: ''
    }
    : {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      roles: [],
      language: '',
      password: ''
    };
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'roles') {
      let updatedValue;

      if (checked) {
        updatedValue = [...formData.roles, value];
      } else {
        updatedValue = formData.roles.filter((role) => role !== value);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: updatedValue,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleTab = (index) => {
    setActiveTab(index);
  };

  // const { data: session } = useSession();
  // const isFormEmpty = !projectTitle || !description || !link || !photo || !projectType;

  const isFormEmpty = false;

  const CancelMessageShow = (userId) => {
    isUpdate
      ? router.push(`/dashboard/management/users/readonly/${userId}`)
      : router.push(`/dashboard/management/users`)
  }

  const EditMessageShow = (dataToUpdateId) => {
    router.push(`/dashboard/management/users/edit/${dataToUpdateId}`);
  }

  const ListViewMessageShow = () => {
    router.push(`/dashboard/management/users`);
  }

  async function createNewUser() {
    setSubmitting(true);
    try {
      const response = await fetch(`/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: formData.roles,
          lannguage: formData.language,
          password: formData.password,
        })
      });

      const data = await response.json();


      console.log(response);
      if (response.ok) {
        router.push('/dashboard/management/users');

        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      } else if (response.status === 400) {
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);


    } finally {
      setSubmitting(false);
    }
  }

  async function updateUser() {
    setSubmitting(true);
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: formData.roles,
          language: formData.language,
          password: formData.password,
        })
      });
      const data = await response.json();

      if(response.status === 200){

        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (error) {
      console.log(error);

      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally{
      setSubmitting(false);

    }
  }

  const handleSubmit = async () => {

    if (isCreate) {
      await createNewUser();
    } else if (isUpdate) {
      await updateUser();
    }

  };

  const SaveHandler = () => {
    handleSubmit();
  }

  return (

    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col justify-between space-y-2 w-full h-[700px] max-w-md p-6 shadow-lg bg-white rounded-md">

          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-center '>
              <div className="tabs items-center">
                <a onClick={() => handleTab(0)} className={`tab tab-bordered ${activeTab === 0 ? "tab-active" : null}`}>Basic Details</a>
                <a onClick={() => handleTab(1)} className={`tab tab-bordered ${activeTab === 1 ? "tab-active" : null}`}>Extended Detail</a>
              </div>
            </div>

            <form
              method="POST"
              className="w-full max-w-md mx-auto gap-3"
            >
              {
                isUpdate
                  ? (
                    <UsersFormFields
                      formData={formData}
                      handleOnChange={handleChange}
                      languages={languages}
                      roles={roles}
                      activeTab={activeTab}
                    />
                  )
                  : null
              }
              {
                isCreate
                  ? (
                    <UsersFormFields
                      formData={formData}
                      handleOnChange={handleChange}
                      languages={languages}
                      roles={roles}
                      activeTab={activeTab}
                    />
                  )
                  : null
              }

              {
                isReadOnly
                  ? (
                    <UsersFormFields
                      formData={formData}
                      handleOnChange={handleChange}
                      languages={languages}
                      roles={roles}
                      activeTab={activeTab}
                      readOnly={isReadOnly}
                    />
                  )
                  : null
              }


            </form>
          </div>
          {
            isReadOnly
              ? (
                <div className='flex space-x-1 w-full items-center justify-center'>

                  <ModalButton
                    message="Do you want to see list view?"
                    caption="Hey!"
                    actionPerform={() => ListViewMessageShow(dataToUpdate._id)}
                    buttonStyle="btn"
                  >
                    List View
                  </ModalButton>

                  <ModalButton
                    message="Do you want to Edit?"
                    caption="Hey!"
                    actionPerform={() => EditMessageShow(dataToUpdate._id)}
                    buttonStyle="btn-success"
                  >
                    Edit
                  </ModalButton>

                </div>
              )
              : (
                <div className="flex space-x-1 w-full items-center justify-center">

                  <ModalButton
                    message="Are you sure you want to Cancel?"
                    caption="Hey!"
                    actionPerform={() => CancelMessageShow(userId)}
                  >
                    Cancel
                  </ModalButton>

                  <ModalButton
                    message={isUpdate ? "Are you sure you want to Update data?" : "Are you sure you want to Save data?"}
                    caption="Hey!"
                    buttonStyle="btn-success"
                    actionPerform={() => SaveHandler()}
                    actionStatus={isFormEmpty || submitting}
                  >
                    {submitting ? <span className="loading loading-spinner text-neutral"></span> : (<>{ isUpdate ? "Update" : "Save"}</>)}
                  </ModalButton>

                </div>
              )
          }
        </div>
      </div>

      <ToastContainer />
    </>

  );
};

export default DynamicUsersForm;
