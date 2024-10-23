"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { usePDF } from "react-to-pdf"

export default function CVBuilder() {
  const [cv, setCV] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  })

  const { toPDF, targetRef } = usePDF({ filename: "my-cv.pdf" })

  const handleInputChange = (e:any) => {
    const { name, value } = e.target
    setCV((prevCV) => ({ ...prevCV, [name]: value }))
  }

  return (
    <div className="container mx-auto p-4 bg-indigo-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center font-serif text-indigo-800 mb-8">CV Builder</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-indigo-600">Full Name</Label>
                  <Input id="name" name="name" value={cv.name} onChange={handleInputChange} className="border-indigo-200 mt-1 text-black font-serif " />
                </div>
                <div>
                  <Label htmlFor="email" className="text-indigo-600">Email</Label>
                  <Input id="email" name="email" type="email" value={cv.email} onChange={handleInputChange} className="border-indigo-200 mt-1 text-black font-serif" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-indigo-600">Phone</Label>
                  <Input id="phone" name="phone" value={cv.phone} onChange={handleInputChange} className="border-indigo-200 mt-1 text-black font-serif" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Professional Summary</h2>
              <Textarea id="summary" name="summary" value={cv.summary} onChange={handleInputChange} className="border-indigo-200" rows={4} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Experience</h2>
              <Textarea id="experience" name="experience" value={cv.experience} onChange={handleInputChange} className="border-indigo-200" rows={6} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Education</h2>
              <Textarea id="education" name="education" value={cv.education} onChange={handleInputChange} className="border-indigo-200" rows={4} />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Skills</h2>
              <Textarea id="skills" name="skills" value={cv.skills} onChange={handleInputChange} className="border-indigo-200" rows={4} />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h2 className="text-3xl font-serif mb-6 text-indigo-800">CV Preview</h2>
              <div ref={targetRef} className="bg-white p-8 rounded-lg shadow-lg font-serif">
                <h1 className="text-4xl font-serif mb-2 text-indigo-900">{cv.name}</h1>
                <p className="text-black mb-6 font font-serif">{cv.email} | {cv.phone}</p>
                <h2 className="text-2xl font-serif mb-2 text-indigo-700">Professional Summary</h2>
                <p className="mb-6 font-serif">{cv.summary}</p>
                <h2 className="text-2xl font-serif mb-2 text-indigo-700">Experience</h2>
                <p className="mb-6 whitespace-pre-line font-serif">{cv.experience}</p>
                <h2 className="text-2xl font-serif mb-2 text-indigo-700">Education</h2>
                <p className="mb-6 whitespace-pre-line font-serif">{cv.education}</p>
                <h2 className="text-2xl font-serif mb-2 text-indigo-700">Skills</h2>
                <p className="whitespace-pre-line font-serif">{cv.skills}</p>
              </div>
              <Button onClick={() => toPDF()} className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 font-serif">
                Download CV as PDF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}