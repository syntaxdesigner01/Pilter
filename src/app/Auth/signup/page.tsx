import AuthNavBar from '@/components/Auth/AuthNavBar'
import TextBox from '@/components/Auth/TextBox'
import CustomButton from '@/components/GeneralComponents/CustomButton'
import React from 'react'

export default function page() {
  return (
    <main>
    <AuthNavBar/>

    <section className='flex justify-center items-center w-screen h-screen flex-col'>
      <h1 className='capitalize text-2xl font-extrabold '>
        create account
      </h1>

      <form className='flex flex-col justify-center items-center w-full gap-4'>
        <section className='flex '>
         <TextBox Title='Email' PlaceHolder='john@mail.com' Type='email'/>
        </section>
        <section className='flex'>
         <TextBox Title='Password' PlaceHolder='******' Type='password'/>
        </section>

        <section>
          <CustomButton color='black' >
            create account
          </CustomButton>
        </section>
      </form>
    </section>
    </main>
  )
}
