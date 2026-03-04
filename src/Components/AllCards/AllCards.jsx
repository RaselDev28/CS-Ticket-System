import React, { use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const AllCards = ({ fetchPromise, addToProgress, inProgressTasks, moveToResolved, resolvedTasks }) => {
    const cardsData = use(fetchPromise);

    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 ">
            {/* Customer Tickets Section */}
            <div className='flex-1 border-r pr-5'>
                <h2 className="text-2xl font-bold mb-5">Customer Tickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-225'>
                    {cardsData.map(card => (
                        <div
                            key={card.id}
                            onClick={() => addToProgress(card)}
                            className="card bg-base-100 shadow-md cursor-pointer hover:border-primary border transition-all"
                        >
                            <div className="card-body p-4">
                                <div className='flex justify-between items-center mb-2'>
                                    <h2 className="card-title font-bold text-lg">{card.title}</h2>
                                    <span className="badge badge-success rounded-2xl">{card.status}</span>
                                </div>
                                <p className='text-sm text-gray-500'>{card.description}</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 text-xl'>
                                        <h3>#{card.id}</h3>
                                        <span>{card.priority} Priority</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h4 className='font-bold'>{card.customer}</h4>
                                        <span>
                                            <FontAwesomeIcon icon={faCalendar} />
                                            {card.createdAt}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Task Section */}
            <div className='w-full lg:w-1/3 space-y-10'>
                {/* Task Status (In-Progress) */}
                <div>
                    <h2 className='text-xl font-bold border-b pb-2'>Task Status</h2>
                    {inProgressTasks.length === 0 && <p className="text-gray-400 mt-2">Select a ticket to add to Task Status</p>}
                    <div className="space-y-3 mt-4">
                        {inProgressTasks.map(task => (
                            <div key={task.id} className="p-3 bg-blue-50 border rounded-lg items-center">
                                <span className='text-xl'>{task.title}</span>
                                <button
                                    onClick={() => moveToResolved(task)}
                                    className="btn btn-xs btn-primary text-base w-full mt-3 py-4"
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resolved Task */}
                <div>
                    <h2 className='text-xl font-bold border-b pb-2'>Resolved Task</h2>
                    {resolvedTasks.length === 0 && <p className="text-gray-400 mt-2">No resolved tasks yet.</p>}
                    <div className="space-y-3 mt-4">
                        {resolvedTasks.map(task => (
                            <div key={task.id} className="p-3 bg-green-50 border rounded-lg">
                                <span className="text-gray-500 font-bold">{task.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCards;