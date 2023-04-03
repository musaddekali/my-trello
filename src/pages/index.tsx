import { Form, Input } from 'antd'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Check List App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
         {Array.from({length: 5}).map((item , i) => {
           return (
            <div key={i} className='h-40 bg-blue-300 grid place-items-center rounded-lg shadow-md hover:bg-blue-500 transition duration-200 cursor-pointer'>
              <h1 className='text-lg font-bold text-teal-700 border-b-4 hover:border-b-red-400 cursor-pointer'>Hi, I'm Mahid</h1>
            </div>
           )
         })}
        </div>
        {/* form  */}
        <Form>
          <Form.Item>
            <Input placeholder='Enter Your Name'/>
          </Form.Item>
        </Form>
       </div>
      </main>
    </>
  )
}