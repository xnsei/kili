import {openings} from "@/constants/openings";

const CardDetails = ({params}: {params: { id: string }}) => {

    const { id } = params;

    const opening = openings.filter(opening => opening.id === id).at(0)

    const content = () => {
        return (
            <main className="max-w-3xl mx-auto p-8">
                <section className="mb-8 border-b pb-2">
                    <h1 className="text-4xl font-bold mb-2">{opening?.title}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-between mb-4">
                        <p className="text-gray-400">Posted: {opening?.jobPosted}</p>
                        <p className="text-gray-400">Team: {opening?.team}</p>
                        <p className="text-gray-400">Location: {opening?.location}</p>
                        <p className="text-gray-400">Salary: {opening?.salary}</p>
                    </div>
                </section>
                <section className="mb-8">{opening?.description}</section>
                <section className="mb-8">
                    <div className="text-2xl mb-4 font-bold border-b pb-2">What you will do</div>
                    {opening?.role.map((role, index) => {
                        return (
                            <div key={index} className="mb-4">
                                <h2 className="text-lg font-bold mb-2">{role?.title}</h2>
                                <p>{role?.description}</p>
                            </div>
                        )
                    })}
                </section>
                <section className="mb-8">
                    <div className="text-2xl mb-4 font-bold border-b pb-2">You are the right fit if you are...</div>
                    <ul className="list-disc pl-4">
                        {opening?.rightFit.map((quality, index) => {
                            return (
                                <li key={index}>{quality}</li>
                            )
                        })}
                    </ul>
                </section>
                <section className="mb-8">
                    <div className="text-2xl mb-4 font-bold border-b pb-2">You are not the right fit if...</div>
                    <ul className="list-disc pl-4">
                        {opening?.notRightFit.map((quality, index) => {
                            return (
                                <li key={index}>{quality}</li>
                            )
                        })}
                    </ul>
                </section>
                <section className="mb-8">
                    <div className="text-2xl mb-4 font-bold border-b pb-2">Benefits</div>
                    <ul className="list-disc pl-4">
                        {opening?.benefits.map((benefit, index) => {
                            return (
                                <li key={index} className="mb-4">
                                    <h2 className="text-lg font-bold">{benefit?.title}</h2>
                                    <p>{benefit?.description}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <section className="mb-8">
                    <div className="text-2xl mb-4 font-bold border-b pb-2">How to Apply</div>
                    <p>{opening?.apply}</p>
                </section>
            </main>
        )
    }

    return (
        <>
            {opening ? content() : (<div>Error loading data</div>)}
        </>
    );
};

export default CardDetails;