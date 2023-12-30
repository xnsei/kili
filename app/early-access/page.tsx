'use client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React, {useEffect, useState} from "react";

interface formDataInterface {
    interest: string,
    call: string,
    name: string,
    email: string,
    tools: string,
}

export default function AccessForm() {

    const storedData: formDataInterface = JSON.parse(localStorage.getItem("formData"));
    console.log(storedData);

    const [interest, setInterest] = useState(storedData && storedData.interest ? storedData.interest : "");
    const [call, setCall] = useState(storedData && storedData.call ? storedData.call : "");
    const [name, setName] = useState(storedData && storedData.name ? storedData.name : "");
    const [email, setEmail] = useState(storedData && storedData.email ? storedData.email : "");
    const [tools, setTools] = useState(storedData && storedData.tools ? storedData.tools : "");

    useEffect(() => {
        const formData: formDataInterface = {
            interest,
            call,
            name,
            email,
            tools,
        };
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [interest, call, name, email, tools]);

    const callOptions = [
        "Yes",
        "No",
    ]

    const interestOptions = [
        "Finding better prospects",
        "Booking more meetings using cold outbound",
        "Generating inbound leads",
        "Increasing conversion rates for sales meetings",
        "Managing the sales process",
    ]

    return (
        <div className="container max-w-screen-md items center">
            <h1 className="text-3xl md:text-4xl md:py-8 font-bold mt-24">
                The AI platform for revenue teams
            </h1>
            <h3 className="font-bold my-4">
                Helping sales and marketing teams automate tasks
            </h3>
            <p className="text-foreground/70">
                Sales and marketing teams have to hop through multiple tools to get work done. Our AI
                assistant completes tasks for you so that you can focus on the important stuff.</p>
            <p className="text-foreground/70 mt-4">Please complete the form below for early access.</p>
            <h3 className="text-xl font-medium mt-8">Whats your name?</h3>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
                className="text-foreground/70 px-4 py-2 border border-gray-300 rounded mt-2 shadow-sm w-full md:w-80"
                required
            />
            <h3 className="text-xl font-medium mt-8">What's your company email address?</h3>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="text-foreground/70 px-4 py-2 border border-gray-300 rounded mt-2 shadow-sm w-full md:w-80"
                required
            />
            <h3 className="text-xl font-medium mt-8">
                Please tell us about the sales and marketing tools you currently use
            </h3>
            <textarea
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                placeholder="Tools"
                rows={4}
                className="text-foreground/70 text-sm px-4 py-2 border border-gray-300 rounded mt-2 shadow-sm w-full"
            />
            <h3 className="text-xl font-medium mt-8 mb-4">Which of the following is of most interest to you?</h3>
            <SelectDemo
                currentValue={interest}
                setCurrentValue={setInterest}
                options={interestOptions}
                required={true}
            />
            <h3 className="text-xl font-medium mt-8 mb-4">Are you happy to have a 20-minute conversation with us?</h3>
            <SelectDemo
                currentValue={call}
                setCurrentValue={setCall}
                options={callOptions}
                required={true}
            />
            <button className="bg-black text-white px-4 py-2 rounded mt-8 shadow-sm">
                Request Access ->
            </button>
        </div>
    )
}

function SelectDemo({currentValue, setCurrentValue, options, required = true}: {
    currentValue: string,
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>,
    options: Array<string>,
    required: boolean
}) {
    return (
        <Select required={required} value={currentValue.length > 0 ? currentValue : undefined}
                onValueChange={(value) => setCurrentValue(value)}>
            <SelectTrigger className="w-full md:w-80 border border-gray-300 shadow-sm">
                <SelectValue placeholder="Select an option"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((interest) => (
                        <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}