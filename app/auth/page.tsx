"use client";

import Image from 'next/image'
// import styles from './page.module.css'
import adventure from '../../images/Monster.png';
import Login from '../../images/login.png';
import Signup from '../../images/register.png';
import Link from 'next/link';
import { use, useState } from 'react';

export default function Home() {

  const [state,setState] = useState('login');

  return (
    <div  className='grid grid-cols-2 h-screen'>

<div className={`absolute top-0 h-screen bg-gray-400 ${state=="login"?"left-0":"right-0"} `}>
<Image src={state=="login"?Login:Signup} alt="picture" className='w-full h-full object-fill'></Image>
</div>

        <div className='flex flex-col justify-center items-center'>

        <div className="flex flex-col justify-center items-center bg-gray-400 w-full h-full px-8 py-20 sm:px-20">
        <h1 className='text-5xl text-gray-900 font-bold mb-20 '>Chepple</h1>
          <div className="w-full">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 px-1 block h-10 shadow-lg w-full rounded-md border-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
          <div className="w-full">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 px-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <input
                        type="text"
                        name="senha"
                        id="senha"
                        autoComplete="password"
                        className="mt-1 px-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Confirmar Senha
                      </label>
                      <input
                        type="text"
                        name="senha-conf"
                        id="senha"
                        autoComplete="password-confirm"
                        className="mt-1 px-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-gray-200 my-6 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cadastrar
                  </button>

                  <p>Já tem uma conta? <button onClick={()=>setState("login")}>Entrar</button></p>
                
                </div>

        </div>

        <div className='flex flex-col justify-center items-center'>
           <div className="flex flex-col justify-center items-center bg-gray-400 w-full h-full px-20 py-20 sm:px-20">
          <h1 className='text-5xl text-gray-900 font-bold mb-20 '>Chepple</h1>
          <div className="w-full">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 px-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                        Senha
                      </label>
                      <input
                        type="text"
                        name="senha"
                        id="senha"
                        autoComplete="password"
                        className="mt-1 px-1 block h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-gray-200 my-6 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Entrar
                  </button>

                  <p>Não tem uma conta? <button onClick={()=>setState("signup")}>Cadastre-se</button></p>
                 
                </div>
        </div>



    </div>
  )
}
