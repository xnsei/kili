'use client';

import {benefits, CompanyAbout, CompanyPrinciples} from "@/constants";
import {marked} from "marked";
import {openings} from "@/constants/openings";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {

    const [filteredOpenings, setFilteredOpenings] = useState([...openings]);
    const [teamFilter, setTeamFilter] = useState('All');
    const [locationFilter, setLocationFilter] = useState('All');
    const uniqueTeams: string[] = [];
    openings.forEach((opening) => {
        if (!uniqueTeams.includes(opening.team)) {
            uniqueTeams.push(opening.team);
        }
    });

    const uniqueLocations: string[] = [];
    openings.forEach((opening) => {
        if (!uniqueLocations.includes(opening.location)) {
            uniqueLocations.push(opening.location);
        }
    });

    useEffect(() => {
        let filtered = openings;
        if (teamFilter !== 'All') {
            filtered = filtered.filter(opening => opening.team === teamFilter);
        }
        if (locationFilter !== 'All') {
            filtered = filtered.filter(opening => opening.location === locationFilter);
        }
        setFilteredOpenings(filtered);
    }, [teamFilter, locationFilter]);

    return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-24 p-8 lg:p-24">
        <section className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    {CompanyAbout.heading}
                </h1>
                <div className="prose">
                    {CompanyAbout.description.map(description =>
                        <div className="mb-2" key={description.id} dangerouslySetInnerHTML={{__html: marked(description.text)}}/>
                    )}
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">
                    {CompanyPrinciples.heading}
                </h1>
                <ul>
                    {CompanyPrinciples.principles.map(principle =>
                        <li key={principle.id} className="mb-2">
                            <h2 className="text-xl">
                                {principle.title}
                            </h2>
                            <div className="prose">
                                {principle.description}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">
                    Benefits
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-8">
                    {benefits.map(benefit =>
                        <div key={benefit.id}>
                            <h1 className="text-2xl mb-2">
                                {benefit.title}
                            </h1>
                            <p>
                                {benefit.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <section className="space-y-8">
            <h1 className="text-3xl font-bold">
                Open Roles
            </h1>
            <div className="flex flex-row">
                <div className=" p-2 rounded mr-2 sm:text-sm">
                    Filter
                </div>
                <select
                    value={teamFilter}
                    onChange={e => setTeamFilter(e.target.value)}
                    className="border p-2 rounded mr-2 sm:text-sm cursor-pointer"
                >
                    <option value="All">All Teams</option>
                    {uniqueTeams.map((team, index) => (
                        <option key={index} value={team}>
                            {team}
                        </option>
                    ))}
                </select>
                <select
                    value={locationFilter}
                    onChange={e => setLocationFilter(e.target.value)}
                    className="border p-2 rounded mr-2 sm:text-sm cursor-pointer"
                >
                    <option value="All">All Locations</option>
                    {uniqueLocations.map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                {filteredOpenings.map((opening) =>
                    <div key={opening.id} className="border rounded overflow-hidden shadow-md mb-4 transform transition-transform duration-300 hover:transform hover:-translate-y-1">
                        <div className="p-4 bg-gray-100">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                                {opening.title}
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="mb-4">
                                    <p className="text-gray-600 font-semibold">Posted</p>
                                    <p className="text-gray-800">{opening.jobPosted}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-semibold">Location</p>
                                    <p className="text-gray-800">{opening.location}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-semibold">Salary</p>
                                    <p className="text-gray-800">{opening.salary}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-600 font-semibold">Status</p>
                                    <p className="text-gray-800">{opening.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex justify-end">
                            <Link href={`/openings/${opening.id}`} className="bg-black text-white px-4 py-2 rounded no-underline">
                                Details
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </main>
    )
}
