'use client'
import axios from 'axios';
import React, { useState } from 'react'
// import { Form as FormType } from '@/payload-types'

export const Form: React.FC<{ form: any }> = ({ form }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData.entries())

      // Payload provides a built-in endpoint for form submissions
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE_URL}/api/form-submissions`, {
        form: form.id,
        submissionData: data,

      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (response.status === 201) {
        const confirmMssage = response.data.doc.form.confirmationMessage.root.children[0].children[0].text;
        setResult(confirmMssage);
        alert(confirmMssage);
        e.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again later.");
      }
    }
    catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form.')
      setResult("❌ Network error. Please check your connection.");
    }
    finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="border max-w-md mx-auto bg-white rounded-3xl p-8 md:p-8 shadow-xl shadow-blue-100/50">
      <h2 className="text-xl font-bold mb-4">{form.title}</h2>
      {form.fields?.map((field: any) => (
        <div key={field.id} className="mb-4">
          <label className="block mb-1 capitalize">{field.label}</label>
          <input
            type={field.blockType === 'email' ? 'email' : 'text'}
            name={field.name}
            required={field.required}
            className="w-full border p-2 rounded text-black"
          />
        </div>
      ))}
      <button type="submit" disabled={isSubmitting}
        className={`w-full ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} bg-[#92d8e8] hover:bg-[#66d3eb] text-white font-semibold py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-blue-600/20`}>
        Submit
      </button>
      <p className='mt-4'>{result}</p>
    </form>
  )
}